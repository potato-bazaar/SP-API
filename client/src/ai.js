// The other seven snipers. Same rules as the player: they must see you to shoot you, their shots are real rays,
// they duck to work the bolt, relocate after firing, run from the halo and (some of them) hide from the angel.
import * as THREE from 'three';
import { WEAPONS, fireShot } from './combat.js';
import { hook, RED } from './gfx.js';
import { G } from './arena.js';
import { simpleHitShapes } from './world.js';
import { zoneD } from './ring.js';

const V3 = THREE.Vector3; const clamp = (x, a, b) => Math.min(b, Math.max(a, x)), lerp = (a, b, t) => a + (b - a) * t; const TAU = Math.PI * 2;
const wrap = (a) => { a = (a + Math.PI) % TAU; if (a < 0) a += TAU; return a - Math.PI; };
const _a = new V3(), _b = new V3(), _c = new V3(), _d = new V3(), _r = new V3();
const gauss = () => { let u = 0, v = 0; while (u === 0) u = Math.random(); while (v === 0) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(TAU * v); };
export const CALLSIGNS = ['MAGPIE', 'LANTERN', 'TYPHOON', 'JADE', 'KOWLOON', 'MONSOON', 'EGRET', 'MAHJONG', 'HARBOUR', 'TRAM', 'KITE', 'NEON', 'ORCHID', 'DRAGONFLY'];

let ghostMat = null;
export function getGhostMat() { if (ghostMat) return ghostMat; ghostMat = new THREE.MeshBasicMaterial({ color: RED.clone().multiplyScalar(1.5), transparent: true, opacity: 0.0, depthTest: false, depthWrite: false, fog: false, blending: THREE.AdditiveBlending }); return ghostMat; }

export class Bot {
  constructor(game, id, name, proto, gunSrc) {
    this.g = game; this.id = id; this.name = name; this.isPlayer = false; this.pos = new V3(); this.vel = new V3(); this.lastShotPos = new V3(); this.eyeV = new V3(); this.chestV = new V3(); this.lookAt = new V3(); this.muzzleW = new V3();
    this.team = 0; this.netId = id;
    if (game.headless) { // game server: no skeleton, no meshes; the pose is sent to clients, who animate it
      this.rig = { root: new THREE.Object3D(), muzzle: new THREE.Vector3(0, 1.45, -0.9), flinch: 0, recoil: 0, boltK: 0, deadDir: 1, deadT: 0, modeK: { dead: 0 }, update() {} }; this.gun = null;
      this.ghostMat = { opacity: 0 }; this.ghost = { visible: false };
    } else {
    this.rig = proto.instantiate(); game.gfx.scene.add(this.rig.root); this.gun = gunSrc.clone(); this.gun.scale.setScalar(1.2); this.rig.weapon.add(this.gun);
    // through-wall silhouette used when the angel reveals someone
    this.ghostMat = getGhostMat().clone(); this.ghost = new THREE.SkinnedMesh(this.rig.mesh.geometry, this.ghostMat); this.ghost.bind(this.rig.mesh.skeleton, this.rig.mesh.bindMatrix); this.ghost.frustumCulled = false; this.ghost.renderOrder = 30; this.ghost.visible = false; this.rig.mesh.parent.add(this.ghost);
    }
    this.skill = { react: 0.7 + Math.random() * 0.6, turn: 2.6 + Math.random() * 1.4, sigma: 0.0052 + Math.random() * 0.0044, aggr: 0.2 + Math.random() * 0.75, devout: Math.random() < 0.55, headBias: 0.06 + Math.random() * 0.14 };
    this.mem = new Map(); this.shapes = []; this.reset();
  }
  reset() {
    this.hp = 100; this.alive = true; this.kills = 0; this.shots = 0; this.hits = 0; this.heads = 0; this.lastShot = -99; this.revealedUntil = -1; this.deathTime = 0; this.place = 0;
    this.yaw = 0; this.aimYaw = 0; this.aimPitch = 0; this.crouch = false; this.crouchK = 0; this.speed = 0; this.roof = -1; this.path = []; this.plan = []; this.link = null; this.state = 'scan'; this.target = null; this.aimPt = 0;
    this.settle = 0; this.cool = 0.5 + Math.random(); this.mag = WEAPONS.rifle.mag; this.reloadT = 0; this.shotsHere = 0; this.thinkT = Math.random() * 0.2; this.scanT = 0; this.stanceT = 1 + Math.random() * 2; this.roamT = 12 + Math.random() * 20; this.zoneDelay = Math.random() * 9; this.hideUntil = -1; this.threat = null; this.threatT = -99; this.firstShotAt = new Map(); this.moveLocal = new V3(0, 0, 1); this.lostT = 0; this.stuckT = 0; this.aimHold = 0; this.glintT = 0; this.fleeing = false; this.duck = false; this.calmUntil = 0; this.fall = null; this.vel.set(0, 0, 0);
    this.mem.clear(); this.rig.deadT = 0; this.rig.modeK.dead = 0; this.rig.root.visible = true; this.ghost.visible = false; this.suppress = 0; this.place = 0; this.deaths = 0;
  }
  spawn(p, yaw, roof) { this.pos.copy(p); this.yaw = this.aimYaw = yaw; this.roof = roof; this.lookAt.set(0, p.y, 0); this._sync(0); }
  get moving() { return this.speed > 0.6; }
  eye(out = this.eyeV) { return out.set(this.pos.x - Math.sin(this.aimYaw) * 0.12, this.pos.y + lerp(1.58, 1.0, this.crouchK), this.pos.z - Math.cos(this.aimYaw) * 0.12); }
  chest(out = this.chestV) { return out.set(this.pos.x, this.pos.y + lerp(1.3, 0.78, this.crouchK), this.pos.z); }
  hitShapes(out) { return this.g.headless ? simpleHitShapes(out, this.pos, this.crouchK, 1.58, 1.0) : this.rig.hitShapes(out); }
  foe(a) { return a !== this && (!this.g.teams || a.team !== this.team); }
  get roofObj() { return this.g.arena.roofs[this.roof]; }

  // ---------------------------------------------------------------- perception
  _perceive(tick) {
    const g = this.g, ar = g.arena, eye = this.eye(); const fx = -Math.sin(this.aimYaw) * Math.cos(this.aimPitch), fy = Math.sin(this.aimPitch), fz = -Math.cos(this.aimYaw) * Math.cos(this.aimPitch);
    let best = null, bs = -1e9;
    for (const a of g.actors) {
      if (!this.foe(a) || !a.alive) { continue; } let m = this.mem.get(a); if (!m) { m = { aw: 0, seen: -99, pos: new V3(), vis: false }; this.mem.set(a, m); }
      const ch = a.chest(_a); const rv = ar.rel(_r, eye, ch); const dx = rv.x, dy = rv.y, dz = rv.z; const d = Math.hypot(dx, dy, dz); m.d = d;   // where the target is seen from here (on a ring: straight through the wheel)
      // fog (room rule) cuts sight to 34 m unless the target fired in the last 3.5 s or the angel revealed them (as the client's bots)
      const sight = g.fog && g.time - a.lastShot > 3.5 && !(a.revealedUntil > g.time) ? 34 : 210;
      const canSee = !this.link || this.link.link.kind === 'pad'; let vis = false; m.visHead = m.visChest = false; if (canSee && d < sight) { m.visChest = ar.los(eye, ch); m.visHead = m.visChest && d < 40 ? true : ar.los(eye, a.eye(_b)); vis = m.visHead || m.visChest; }
      if (vis && g.smokeCut && g.smokeCut(eye, ch)) { vis = false; m.visHead = m.visChest = false; }   // a smoke cloud on the sight line
      m.vis = vis;
      if (vis) { const ang = Math.acos(clamp((dx * fx + dy * fy + dz * fz) / d, -1, 1)); const facing = ang < 0.45 ? 1 : ang < 1.2 ? 0.34 : 0.09;
        let rate = clamp(1.7 - d / 105, 0.2, 1.6) * facing * (a.moving ? 1.6 : 1) * ((a.crouchK || 0) > 0.5 ? 0.55 : 1) * (g.time - a.lastShot < 3.2 ? 4.5 : 1) * (this.crouchK > 0.5 ? 0.8 : 1);
        rate *= 0.5 * clamp(g.time / 30, 0.12, 1) * (a.isPlayer ? g.botEye : 1); if (a.revealedUntil > g.time) rate = 99; m.aw = Math.min(1.4, m.aw + rate * tick); if (m.aw >= 1) { m.seen = g.time; m.pos.copy(a.pos); } }
      else { m.aw = Math.max(0, m.aw - 0.16 * tick); if (a.revealedUntil > g.time) { m.aw = Math.max(m.aw, 0.8); m.seen = g.time; m.pos.copy(a.pos); } }
      if (vis && m.aw >= 1) { let crowd = 0; for (const o of g.bots) if (o !== this && o.alive && o.state === 'engage' && o.target === a) crowd++; if (crowd >= (a.isPlayer ? g.botCrowd : 1) && !(a === this.threat && g.time - this.threatT < 6) && a !== this.target) continue;
        let s = 70 - d * 0.42 + (a === this.threat && g.time - this.threatT < 6 ? 45 : 0) + (a.hp < 50 ? 12 : 0) + (a === this.target ? 14 : 0); if (s > bs) { bs = s; best = a; } }
    }
    return best;
  }
  hear(shooter, origin) { // a shot somewhere: glance that way
    if (!this.alive || !this.foe(shooter)) return; const m = this.mem.get(shooter); const d = this.g.arena.dist(origin, this.pos); if (d > 170) return; if (m) m.aw = Math.min(1.4, m.aw + 0.3);
    if (this.state === 'scan' && Math.random() < 0.6) { this.lookAt.copy(origin); this.scanT = 2 + Math.random() * 2; }
  }
  nearMiss(shooter) { if (!this.alive || this.link || this.plan.length || (shooter && !this.foe(shooter))) return; this.suppress = Math.min(1, this.suppress + 0.6); if (shooter && shooter.alive) { this.threat = shooter; this.threatT = this.g.time; const m = this.mem.get(shooter); if (m) m.aw = Math.min(1.4, m.aw + 0.5); }
    if (Math.random() < 0.55) { this.crouch = true; this.stanceT = 0.8 + Math.random() * 1.6; if (this.state === 'engage') { this.cool = Math.max(this.cool, 0.9 + Math.random()); this.duck = true; } } }
  onDamage(amount, attacker) {
    this.rig.flinch = 1; this.suppress = 1; if (attacker && attacker.alive && this.foe(attacker)) { this.threat = attacker; this.threatT = this.g.time; let m = this.mem.get(attacker); if (!m) { m = { aw: 0, seen: -99, pos: new V3(), vis: false }; this.mem.set(attacker, m); } m.aw = Math.max(m.aw, 1.05); m.seen = this.g.time; m.pos.copy(attacker.pos); this.lookAt.copy(attacker.pos).setY(attacker.pos.y + 1.2); }
    if (this.link || this.plan.length) return;
    // duck now; if hurt badly, break line of sight before coming back up
    this.crouch = true; this.stanceT = 0.9 + Math.random() * 1.2; if ((this.hp < 60 || Math.random() < 0.5) && attacker) this._relocate(attacker);
  }

  // ---------------------------------------------------------------- planning helpers
  _zoneSafeR() { const z = this.g.zone; return (z.shrinking || z.toNext < 16) ? Math.min(z.r, z.nextR) : z.r; }
  _safeAt(x, z, r) { return zoneD(this.g.zone, x, z, r) < r - 1.2; }
  _pickPerch(roof, opts = {}) { // a sniping spot on a roof: near an edge, inside the halo, optionally hidden from someone
    const ar = this.g.arena, r = ar.roofs[roof]; const sr = this._zoneSafeR(); let best = -1, bs = -1e9; const list = r.perch.length ? r.perch : r.cells; const tries = Math.min(list.length, 26);
    for (let i = 0; i < tries; i++) { const k = list[(Math.random() * list.length) | 0]; ar.cellPos(r, k, _a); let s = Math.random() * 4; if (!this._safeAt(_a.x, _a.z, sr)) s -= 60; const Z = this.g.zone; const dc = zoneD(Z, _a.x, _a.z, 0); s += (zoneD(Z, r.x, r.z, 0) - dc) * 0.5 * (opts.inward || 0.3);
      if (opts.from) s -= Math.max(0, 5 - Math.hypot(_a.x - opts.from.x, _a.z - opts.from.z)) * 3;
      if (opts.hideFrom) { _b.set(_a.x, _a.y + 1.0, _a.z); if (!ar.los(opts.hideFrom, _b)) s += 30; _b.y = _a.y + 1.55; if (!ar.los(opts.hideFrom, _b)) s += 10; }
      if (s > bs) { bs = s; best = k; } }
    return best < 0 ? null : ar.cellPos(r, best, new V3());
  }
  _goTo(x, z, then) { const ar = this.g.arena; this.path = ar.path(this.roofObj, this.pos.x, this.pos.z, x, z); this.arrive = then || null; }
  _relocate(threat) { const hide = threat ? threat.eye(new V3()) : null; const p = this._pickPerch(this.roof, { from: this.pos, hideFrom: hide }); if (p) { this.state = 'move'; this.shotsHere = 0; this._goTo(p.x, p.z, () => { this.state = 'scan'; this.crouch = !!hide || Math.random() < 0.4; this.stanceT = hide ? 1.5 + Math.random() * 2 : 0.8 + Math.random(); this.calmUntil = this.g.time + 1.2 + Math.random() * 2; }); } }
  _travel(route) { // chain of links, then settle on a perch at the destination
    this.plan = route.slice(); this.state = 'move'; this.target = null; this._nextLeg(); }
  _nextLeg() {
    const ar = this.g.arena; if (!this.plan.length) { const p = this._pickPerch(this.roof, { inward: 0.6 }); if (p) this._goTo(p.x, p.z, () => { this.state = 'scan'; this.crouch = Math.random() < 0.6; this.stanceT = 1.5 + Math.random() * 2.5; this.calmUntil = this.g.time + 2.5 + Math.random() * 3; }); else this.state = 'scan'; return; }
    const e = this.plan[0]; const A = e.dir ? e.link.p1 : e.link.p0; this._goTo(A.x, A.z, () => { this.plan.shift(); this.link = { link: e.link, dir: e.dir, t: 0, to: e.to, from: this.pos.clone() }; this.crouch = false; });
  }
  _zoneCheck(force) {
    const g = this.g, ar = g.arena, z = g.zone; if (this.link) return; const sr = this._zoneSafeR(); const outsideNow = !this._safeAt(this.pos.x, this.pos.z, z.r + 0.6);
    const hereSafe = this._safeAt(this.pos.x, this.pos.z, sr); if (hereSafe && !force) return; if (this.plan.length && !outsideNow) return;
    if (!outsideNow && z.phaseAge < this.zoneDelay && !z.shrinking && z.toNext > 9) return;                  // not everyone leaves at the same second
    const r = this.roofObj; const roofSafe = ar.safeCount(r, sr - 2.0) >= 6;
    if (roofSafe) { if (this.state !== 'move' || force) { let best = null, bd = 1e9; for (let i = 0; i < 40; i++) { const k = r.cells[(Math.random() * r.cells.length) | 0]; ar.cellPos(r, k, _a); if (!this._safeAt(_a.x, _a.z, sr - 0.8)) continue; const d = Math.hypot(_a.x - this.pos.x, _a.z - this.pos.z); if (d < bd) { bd = d; best = _a.clone(); } } if (best) { this.state = 'move'; this.plan.length = 0; this.fleeing = true; this.target = null; this._goTo(best.x, best.z, () => { this.state = 'scan'; this.fleeing = false; }); } } return; }
    let route = ar.route(this.roof, (rr) => ar.safeCount(rr, sr - 2.2) >= 10); if (!route) route = ar.route(this.roof, (rr) => ar.safeCount(rr, sr - 1) >= 1);
    if (route) { this.fleeing = false; this._travel(route); }
  }
  hideFromAngel(eyePos) { // the angel is about to look: break its line of sight if this roof allows it
    if (!this.alive || !this.skill.devout || this.link || this.plan.length || this.state === 'engage') return; const ar = this.g.arena, r = this.roofObj; let best = null, bd = 1e9;
    for (let i = 0; i < 50; i++) { const k = r.cells[(Math.random() * r.cells.length) | 0]; ar.cellPos(r, k, _a); if (!this._safeAt(_a.x, _a.z, this.g.zone.r)) continue; _b.set(_a.x, _a.y + 0.95, _a.z); if (ar.los(eyePos, _b)) continue; const d = Math.hypot(_a.x - this.pos.x, _a.z - this.pos.z); if (d < bd) { bd = d; best = _a.clone(); } }
    if (best && bd < 13) { this.state = 'move'; this._goTo(best.x, best.z, () => { this.state = 'scan'; this.crouch = true; this.stanceT = 4.5; }); this.hideUntil = this.g.time + 6; }
  }

  // ---------------------------------------------------------------- frame
  update(dt) {
    const g = this.g, ar = g.arena;
    if (!this.alive) { // a sniper killed in mid-air keeps the momentum and comes down
      if (this.fall) { const f = this.fall; f.vy -= G * dt; const ny = this.pos.y + f.vy * dt; const gh = f.vy < 0 ? ar.groundY(this.pos.x, this.pos.z, this.pos.y + 0.6, 0.7 - f.vy * dt) : null;
        if (gh != null && gh >= ny) { this.pos.y = gh; this.fall = null; } else { this.pos.y = ny; this.pos.x += f.vx * dt; this.pos.z += f.vz * dt; if (ar.raycast(_a.set(this.pos.x, this.pos.y + 0.9, this.pos.z), _b.set(f.vx, 0, f.vz).normalize(), 0.45)) { f.vx = 0; f.vz = 0; } if (this.pos.y < 1) this.fall = null; }
        this.rig.update(dt, { mode: this.fall ? 'air' : 'dead' }); this._sync(dt); }
      else this.rig.update(dt, { mode: 'dead' });
      if (this.ghost.visible) this.ghost.visible = false; return; }
    this.cool -= dt; this.thinkT -= dt; this.stanceT -= dt; this.scanT -= dt; this.roamT -= dt; this.suppress = Math.max(0, this.suppress - dt * 0.4);
    // ---- think
    if (this.thinkT <= 0) {
      const tick = 0.2; this.thinkT = tick; const seen = this._perceive(tick);
      this._zoneCheck(false);
      if (this.state === 'move' && !this.path.length && !this.plan.length && !this.link) { this.state = 'scan'; this.fleeing = false; }
      const busy = this.link || this.plan.length > 0 || this.hideUntil > g.time || this.fleeing;
      if (!busy) {
        if (seen && g.weaponsFree && this.reloadT <= 0 && (g.time > this.calmUntil || (seen === this.threat && g.time - this.threatT < 5))) { if (this.target !== seen) { this.target = seen; this.settle = 0; const first = !this.firstShotAt.has(seen); this.aimNeed = (this.skill.react + (this.mem.get(seen).d / 100) * 1.1 + (first ? 0.5 : 0) + Math.random() * 0.4) * (seen.isPlayer ? g.botAim : 1); this.aimPt = Math.random() < this.skill.headBias ? 1 : 0; } if (this.state !== 'engage') { this.state = 'engage'; this.path.length = 0; this.arrive = null; this.crouch = false; } this.lostT = 0; }
        else if (this.state === 'engage') { this.lostT += tick; if (this.lostT > 1.6 || !this.target || !this.target.alive) { const m = this.target && this.mem.get(this.target); if (m) this.lookAt.copy(m.pos).setY(m.pos.y + 1.2); this.state = 'scan'; this.target = null; this.scanT = 3; this.stanceT = 2 + Math.random() * 2; } }
        if (this.state === 'scan') {
          if (this.shotsHere >= 2 + ((this.id * 7) % 2)) this._relocate(this.threat && g.time - this.threatT < 8 ? this.threat : null);
          else if (this.roamT <= 0) { this.roamT = 14 + Math.random() * 22; if (Math.random() < this.skill.aggr * 0.7) { // drift sideways along the ring; going further in is the halo's job
              const sr = this._zoneSafeR(); const here = this.roofObj.dist; const opts = this.roofObj.links.filter(e => ar.safeCount(ar.roofs[e.to], sr - 2.2) >= 30 && ar.roofs[e.to].dist > here - 16 && !g.bots.some(o => o !== this && o.alive && o.roof === e.to)); if (opts.length) this._travel([opts[(Math.random() * opts.length) | 0]]); else this._relocate(null); } else this._relocate(null); }
        }
      }
    }
    // ---- reload (crouched)
    if (this.reloadT > 0) { this.reloadT -= dt; this.crouch = true; if (this.reloadT <= 0) { this.mag = WEAPONS.rifle.mag; this.stanceT = 0.2; } }
    // ---- traversal
    let mode = 'ground', aimPose = false; this.speed = 0;
    if (this.link) {
      const L = this.link; L.t += dt / (L.link.time * (L.link.kind === 'ladder' ? 1.0 : 1)); const u = Math.min(1, L.t); const prev = _c.copy(this.pos); ar.linkPos(L.link, L.dir, u, _a); if (u < 0.07) _a.lerpVectors(L.from, _a, u / 0.07); this.pos.copy(_a); if (dt > 0) this.vel.copy(this.pos).sub(prev).multiplyScalar(1 / dt); mode = ar.linkMode(L.link, u, L.dir); if (mode === 'ground' && L.link.kind === 'jump') this.speed = 6;
      const B = L.dir ? L.link.p0 : L.link.p1; const want = L.link.kind === 'ladder' ? Math.atan2(-(L.link.n[0]), -(L.link.n[1])) : Math.atan2(-(B.x - this.pos.x), -(B.z - this.pos.z)); this.yaw += wrap(want - this.yaw) * Math.min(1, dt * 10); this.aimYaw = this.yaw; this.aimPitch = lerp(this.aimPitch, 0, dt * 5);
      if (u >= 1) { this.roof = L.to; this.link = null; this.pos.y = this.roofObj.roofY; this._nextLeg(); }
    } else {
      // ---- walking
      if (this.path.length) { const p = this.path[0]; const dx = p.x - this.pos.x, dz = p.z - this.pos.z; const d = Math.hypot(dx, dz); const sp = this.crouch && this.state !== 'move' ? 2.2 : 5.2; const stepLen = sp * dt;
        if (d <= stepLen + 0.05) { this.pos.x = p.x; this.pos.z = p.z; this.path.shift(); if (!this.path.length && this.arrive) { const f = this.arrive; this.arrive = null; f(); } }
        else { this.pos.x += dx / d * stepLen; this.pos.z += dz / d * stepLen; this.speed = sp; const want = Math.atan2(-dx, -dz); this.yaw += wrap(want - this.yaw) * Math.min(1, dt * 9); if (this.state === 'move') { this.aimYaw += wrap(this.yaw - this.aimYaw) * Math.min(1, dt * 6); this.aimPitch = lerp(this.aimPitch, 0, dt * 4); this.crouch = false; } }
      }
      this.pos.y = lerp(this.pos.y, this.roofObj.roofY, Math.min(1, dt * 12));
      // ---- stance + aim
      if (this.state === 'scan') {
        if (this.stanceT <= 0) { this.crouch = !this.crouch; this.stanceT = this.crouch ? 1.2 + Math.random() * 2.6 : 2.6 + Math.random() * 3.6; if (this.hideUntil > g.time) this.crouch = true; }
        if (this.scanT <= 0) { this.scanT = 2.2 + Math.random() * 3; let pick = null; if (Math.random() < 0.55) { let newest = -99; for (const [a, m] of this.mem) if (a.alive && m.seen > newest && g.time - m.seen < 25) { newest = m.seen; pick = m.pos; } }
          if (pick) this.lookAt.copy(pick).setY(pick.y + 1.2); else { const rr = ar.roofs[(Math.random() * ar.roofs.length) | 0]; this.lookAt.set(rr.x + (Math.random() - 0.5) * 8, rr.roofY + 1.2, rr.z + (Math.random() - 0.5) * 8); } }
        this._aimAt(this.lookAt, dt, 1.5); aimPose = !this.crouch;
      } else if (this.state === 'engage' && this.target) {
        const t = this.target; const tm = this.mem.get(t); const head = this.aimPt === 1 || (tm && !tm.visChest); const tp = head ? t.eye(_a) : t.chest(_a); if (head) tp.y += 0.03; const err = this._aimAt(tp, dt, this.skill.turn); aimPose = true; this.crouch = this.cool > 0.45 && this.duck; this.glintT = 0.3;
        if (err < 0.035) this.settle += dt; else this.settle = Math.max(0, this.settle - dt * 0.5);
        if (this.settle >= this.aimNeed && this.cool <= 0 && !this.crouch && this.crouchK < 0.25 && g.weaponsFree) this._shoot(t, tp);
      }
    }
    this.crouchK = clamp(this.crouchK + (this.crouch ? dt / 0.2 : -dt / 0.2), 0, 1);
    // local move direction for the legs
    if (this.link) this.moveLocal.set(0, 0, 1); else if (this.speed > 0.1 && this.path.length) { const p = this.path[0]; const a = Math.atan2(-(p.x - this.pos.x), -(p.z - this.pos.z)) - this.yaw; this.moveLocal.set(-Math.sin(a) * -1, 0, Math.cos(a)); } else this.moveLocal.set(0, 0, 1);
    this.rig.update(dt, { aim: aimPose && mode === 'ground' && this.speed < 0.5, crouch: this.crouch && mode === 'ground', pitch: this.aimPitch, twist: wrap(this.aimYaw - this.yaw), speed: this.speed, moveDir: this.moveLocal, mode });
    this._sync(dt);
    // scope glint toward whoever this sniper is settling on
    this.glintT -= dt;
  }
  _aimAt(p, dt, rate) { const e = this.eye(_b); const rv = this.g.arena.rel(_r, e, p); const dx = rv.x, dy = rv.y, dz = rv.z; const wy = Math.atan2(-dx, -dz), wp = Math.atan2(dy, Math.hypot(dx, dz)); const ey = wrap(wy - this.aimYaw), ep = wp - this.aimPitch; const err = Math.hypot(ey, ep); const stepA = rate * dt * (0.35 + Math.min(1, err * 2.5));
    if (err <= stepA) { this.aimYaw = wy; this.aimPitch = wp; } else { this.aimYaw += ey / err * stepA; this.aimPitch += ep / err * stepA; }
    // the body follows the aim when the twist gets uncomfortable
    const tw = wrap(this.aimYaw - this.yaw); if (Math.abs(tw) > 0.5 && this.speed < 0.5) this.yaw += Math.sign(tw) * Math.min(Math.abs(tw) - 0.35, dt * 4.5); return err; }
  _shoot(t, tp) {
    const g = this.g, m = this.mem.get(t); const eye = this.eye(new V3()); if (!g.arena.los(eye, tp)) { this.settle *= 0.6; return; }
    const d = g.arena.dist(eye, tp); const first = !this.firstShotAt.has(t); this.firstShotAt.set(t, g.time); const headOnly = m && !m.visChest;
    let sig = this.skill.sigma * (1 + d / 170) * (1 + Math.min(2.2, (t.speed || 0) * 0.42)) * (1 + this.suppress * 1.6) * (first ? 1.75 : 1) * g.botSigma * (t.isPlayer ? g.botSigmaPlayer : g.botSigmaBot * lerp(1.12, 1.0, clamp(g.time / 210, 0, 1))) * ((t.crouchK || 0) > 0.5 ? 1.15 : 1) * (headOnly ? 1.25 : 1);
    const dir = g.arena.rel(_d, eye, tp).normalize(); _a.set(gauss() * sig, gauss() * sig, 0); const q = new THREE.Quaternion().setFromUnitVectors(new V3(0, 0, -1), dir); dir.add(_a.applyQuaternion(q)).normalize();
    this.rig.root.updateMatrixWorld(true); this.muzzleW.copy(this.rig.muzzle).applyMatrix4(this.rig.root.matrixWorld);
    fireShot(g, this, eye, dir.clone(), this.muzzleW.clone(), WEAPONS.rifle);
    this.rig.recoil = 1; this.rig.boltK = 1; this.mag--; this.shotsHere++; this.cool = WEAPONS.rifle.cycle + 0.7 + Math.random() * 1.7; this.settle = this.aimNeed * 0.25; this.duck = Math.random() < 0.8; this.aimPt = Math.random() < this.skill.headBias ? 1 : 0;
    if (this.mag <= 0) { this.reloadT = WEAPONS.rifle.reload + 0.4; this.crouch = true; }
  }
  _sync(dt) {
    const r = this.rig.root; r.position.copy(this.pos); r.rotation.y = this.yaw + Math.PI; r.updateMatrixWorld(true);
    const rev = this.revealedUntil - this.g.time; if (rev > 0) { this.ghost.visible = true; this.ghostMat.opacity = Math.min(1, rev * 1.2) * (0.42 + 0.14 * Math.sin(this.g.time * 18)); } else if (this.ghost.visible) this.ghost.visible = false;
  }
  die() { this.alive = false; this.rig.deadDir = Math.random() < 0.5 ? 1 : -1; this.fall = this.link ? { vx: this.vel.x * 0.6, vy: Math.min(this.vel.y, 3), vz: this.vel.z * 0.6 } : null; this.path.length = 0; this.plan.length = 0; this.link = null; this.target = null; }
}

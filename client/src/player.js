// First-person controller: capsule physics on the real city mesh, parkour (jump, mantle), traversal rides, weapons.
import * as THREE from 'three';
import { G } from './arena.js';
import { WEAPONS, fireShot } from './combat.js';
import { simpleHitShapes } from './world.js';

const FLOOR_Q = [[0, 0], [0.16, 0], [-0.16, 0], [0, 0.16], [0, -0.16]];
const V3 = THREE.Vector3; const clamp = (x, a, b) => Math.min(b, Math.max(a, x)), lerp = (a, b, t) => a + (b - a) * t;
const R = 0.32, H_STAND = 1.74, H_CROUCH = 1.14, EYE_STAND = 1.6, EYE_CROUCH = 1.0, BASE_FOV = 74, STEP = 0.56;
const _a = new V3(), _b = new V3(), _c = new V3(), _d = new V3(), _e = new V3(), _box = new THREE.Box3(), _seg = new THREE.Line3(), _tp = new V3(), _cp = new V3(), _up = new V3(0, 1, 0);

export class Player {
  constructor(game) {
    this.g = game; this.isPlayer = true; this.name = 'YOU'; this.id = 0; this.pos = new V3(); this.vel = new V3(); this.yaw = 0; this.pitch = 0;
    this.lastShotPos = new V3(); this.eyeV = new V3(); this.chestV = new V3(); this.fwdV = new V3(0, 0, -1); this.reset();
  }
  reset() {
    this.hp = 100; this.alive = true; this.kills = 0; this.shots = 0; this.hits = 0; this.heads = 0; this.lastShot = -99; this.revealedUntil = -1; this.deathTime = 0; this.place = 0;
    this.crouch = false; this.crouchK = 0; this.grounded = false; this.mode = 'walk'; this.link = null; this.linkT = 0; this.linkDir = 0; this.mantle = null; this.roof = -1; this.speed = 0;
    this.w = { rifle: { mag: WEAPONS.rifle.mag, reserve: WEAPONS.rifle.reserve, cool: 0 }, pistol: { mag: WEAPONS.pistol.mag, reserve: WEAPONS.pistol.reserve, cool: 0 } }; this.cur = 'rifle'; this.cool = 0; this.reloadT = -1; this.boltT = -1; this.swapT = 0; this.swapTo = null;
    this.ads = 0; this.scoped = false; this.zoomIdx = 0; this.focus = 1; this.gasp = 0; this.holding = false; this.kick = 0; this.kickYaw = 0; this.swayX = 0; this.swayY = 0; this.fov = BASE_FOV;
    this.coyote = 0; this.jumpBuf = 0; this.landDip = 0; this.walkPhase = 0; this.stepAcc = 0; this.vel.set(0, 0, 0); this.suppress = 0; this.fallStart = 0; this.airTime = 0; this.padLock = 0; this.aimSlow = 1; this.prompt = null; this.deadCam = 0; this.lean = 0; this.stepLift = 0; this.hurtT = 0; this.locked = true;
  }
  spawn(p, yaw) { this.pos.copy(p); this.yaw = yaw; this.pitch = 0; this.vel.set(0, 0, 0); }
  get weapon() { return WEAPONS[this.cur]; }
  eye(out = this.eyeV) { return out.set(this.pos.x, this.pos.y + lerp(EYE_STAND, EYE_CROUCH, this.crouchK), this.pos.z); }
  chest(out = this.chestV) { return out.set(this.pos.x, this.pos.y + lerp(1.3, 0.78, this.crouchK), this.pos.z); }
  hitShapes(out) { return simpleHitShapes(out, this.pos, this.crouchK, EYE_STAND, EYE_CROUCH); }
  get moving() { return this.speed > 0.6; }

  // ------------------------------------------------------------------ physics
  _collide(pos, h) {
    const bvh = this.g.arena.bvh; _seg.start.set(pos.x, pos.y + R, pos.z); _seg.end.set(pos.x, pos.y + h - R, pos.z);
    _box.makeEmpty(); _box.expandByPoint(_seg.start); _box.expandByPoint(_seg.end); _box.min.addScalar(-R); _box.max.addScalar(R);
    const hit = { intersectsBounds: (b) => b.intersectsBox(_box), intersectsTriangle: (tri) => { const d = tri.closestPointToSegment(_seg, _tp, _cp); if (d < R) { const depth = R - d; if (d > 1e-5) _cp.sub(_tp).multiplyScalar(1 / d); else tri.getNormal(_cp); _seg.start.addScaledVector(_cp, depth); _seg.end.addScaledVector(_cp, depth); } } };
    bvh.shapecast(hit); const fb = this.g.arena.fenceBvh; if (fb && this.mode === 'walk') fb.shapecast(hit);
    pos.set(_seg.start.x, _seg.start.y - R, _seg.start.z);
  }
  _stepUp(out, h, dx, dz, wantH) {
    const ar = this.g.arena, p = this.pos;
    const top = ar.raycast(_a.set(p.x + dx * (R + 0.14), p.y + STEP + 0.12, p.z + dz * (R + 0.14)), _b.set(0, -1, 0), STEP + 0.1); if (!top || top.face.normal.y < 0.7) return false;
    const rise = top.point.y - p.y; if (rise < 0.03 || rise > STEP) return false;
    if (ar.raycast(_a.set(p.x, p.y + h - 0.1, p.z), _b.set(0, 1, 0), rise + 0.2)) return false;                // head room
    _e.set(p.x + dx * wantH, p.y + rise + 0.012, p.z + dz * wantH); this._collide(_e, h); if (_e.y < p.y + rise - 0.08) return false;
    this.stepLift = Math.min(0.62, this.stepLift + (_e.y - p.y)); out.copy(_e); return true;
  }
  _groundProbe() { const h = this.g.arena.raycast(_a.set(this.pos.x, this.pos.y + 0.3, this.pos.z), _b.set(0, -1, 0), 0.46); return h && h.face.normal.y > 0.5 ? h : null; }
  _tryMantle(force) {
    const ar = this.g.arena; const fx = -Math.sin(this.yaw), fz = -Math.cos(this.yaw); const p = this.pos;
    let wall = null; for (const hh of this.grounded ? [1.25, 0.75, 0.35] : [1.25, 0.75, 0.35, 0.1]) { const h = ar.raycast(_a.set(p.x, p.y + hh, p.z), _b.set(fx, 0, fz), 0.78); if (h && Math.abs(h.face.normal.y) < 0.55) { wall = h; break; } } if (!wall) return false;
    const wx = wall.point.x + fx * 0.3, wz = wall.point.z + fz * 0.3; const top = ar.raycast(_a.set(wx, p.y + 2.6, wz), _b.set(0, -1, 0), 2.3); if (!top || top.face.normal.y < 0.7) return false;
    const rise = top.point.y - p.y; if (rise < (this.grounded ? 0.42 : 0.1) || rise > 2.4) return false; if (!force && rise < 0.9 && this.grounded) return false;
    if (!ar.raycast(_a.set(wall.point.x + fx * 1.15, top.point.y + 0.3, wall.point.z + fz * 1.15), _b.set(0, -1, 0), 2.3)) return false;   // a coping with nothing behind it: that is how people fall off towers
    if (ar.raycast(_a.set(wx, top.point.y + 0.15, wz), _b.set(0, 1, 0), 1.05)) return false;               // room on top (at least crouched)
    if (ar.raycast(_a.set(p.x, top.point.y + 0.35, p.z), _b.set(fx, 0, fz), 0.95)) return false;            // nothing between us and the ledge
    const stand = !ar.raycast(_a.set(wx, top.point.y + 0.15, wz), _b.set(0, 1, 0), 1.7);
    this.mantle = { from: p.clone(), to: new V3(wx + fx * 0.12, top.point.y + 0.03, wz + fz * 0.12), t: 0, dur: (rise < 0.5 ? 0.12 : 0.26) + 0.15 * rise, crouch: !stand }; this.mode = 'mantle'; this.vel.set(0, 0, 0); this.g.audio.jump(); return true;
  }
  _walk(dt, inp) {
    const g = this.g, ar = g.arena; const fx = -Math.sin(this.yaw), fz = -Math.cos(this.yaw), rx = Math.cos(this.yaw), rz = -Math.sin(this.yaw);
    let mx = inp.moveX, my = inp.moveY; const wantSprint = (inp.held('sprint') || inp.sprintStick) && my > 0.5 && !this.crouch && this.ads < 0.2 && this.reloadT < 0;
    this.sprinting = wantSprint && this.grounded;
    // a map may say running builds speed (GLASS CITY: arena JSON `parkour`): the longer the sprint the faster, and the jump at full speed is higher
    const pk = ar.data && ar.data.parkour; if (pk) this.flow = clamp((this.flow || 0) + (wantSprint && (this.speed > 5.5 || !this.grounded) ? dt / pk.build : -dt * 2.5), 0, 1);
    const sp = this.crouch ? 2.35 : (wantSprint ? 7.3 + (pk ? (pk.sprint - 7.3) * this.flow : 0) : 4.5) * (1 - 0.42 * this.ads);
    const wx = (fx * my + rx * mx) * sp, wz = (fz * my + rz * mx) * sp, wl = Math.hypot(wx, wz);
    if (this.grounded) { const k = 1 - Math.exp(-dt * 13); this.vel.x = lerp(this.vel.x, wx, k); this.vel.z = lerp(this.vel.z, wz, k); }
    else { this.vel.x += (wx - this.vel.x) * Math.min(1, dt * 1.7); this.vel.z += (wz - this.vel.z) * Math.min(1, dt * 1.7); }
    this.vel.y -= G * dt; if (this.vel.y < -55) this.vel.y = -55;
    // jump (buffered, with coyote time)
    if (inp.pressed('jump')) this.jumpBuf = 0.13; this.jumpBuf -= dt; this.coyote = this.grounded ? 0.11 : this.coyote - dt;
    if (this.jumpBuf > 0 && this.coyote > 0) { if (!(pk && this._leap(true)) && !(my > 0.2 && this._tryMantle(true))) { this.vel.y = 7.3 + (pk ? (pk.jump - 7.3) * this.flow : 0); this._jmp = 1; this.grounded = false; this.coyote = 0; this.jumpBuf = 0; if (this.crouch) { this.crouch = false; g.hud.syncCrouch(false); } g.audio.jump(); } if (this.mode !== 'walk') return; }
    else if (!this.grounded && my > 0.3 && this.vel.y < 4.5 && this._tryMantle(inp.held('jump') || this.jumpBuf > 0)) return;
    // integrate in sub-steps against the city mesh
    const h = lerp(H_STAND, H_CROUCH, this.crouchK); const steps = 5, hdt = dt / steps; const wasGround = this.grounded; const vyBefore = this.vel.y; let ground = false;
    for (let i = 0; i < steps; i++) {
      _c.copy(this.pos).addScaledVector(this.vel, hdt); _d.copy(_c); this._collide(_c, h);
      const dx = _c.x - _d.x, dy = _c.y - _d.y, dz = _c.z - _d.z; const dl = Math.hypot(dx, dy, dz);
      if (dl > 1e-6) { const nx = dx / dl, ny = dy / dl, nz = dz / dl; if (ny > 0.55 && this.vel.y <= 0.5) { ground = true; this.vel.y = Math.max(this.vel.y, 0); } else { const vn = this.vel.x * nx + this.vel.y * ny + this.vel.z * nz; if (vn < 0) { this.vel.x -= nx * vn; this.vel.y -= ny * vn; this.vel.z -= nz * vn; } } }
      // blocked by something low while on the ground: step onto it (kerbs, roof details, low crates)
      if ((wasGround || ground) && this.vel.y <= 0.5 && wl > 0.5) { const wantH = wl * hdt; if (((_c.x - this.pos.x) * wx + (_c.z - this.pos.z) * wz) / wl < wantH * 0.7 && this._stepUp(_c, h, wx / wl, wz / wl, wantH)) { ground = true; this.vel.x = wx; this.vel.z = wz; } }
      this.pos.copy(_c);
    }
    if (!ground && this.vel.y <= 0.5 && this._groundProbe()) { ground = true; }
    if (pk && !this._jmp && this.vel.y <= 0.5 && this._edge()) ground = true;      // on foot nobody leaves a roof by accident; a jump (_jmp, until the sniper lands) is their own affair
    if (ground) this._jmp = 0;
    if (ground && !wasGround) { const v = -vyBefore; if (v > 14.5) g.damage(this, (v - 14.5) * 8, null, { cause: 'fall' }); if (v > 4) { this.landDip = Math.min(1, v / 14); g.audio.land(v / 16); } }
    if (ground && this.vel.y < 0) this.vel.y = 0; if (ground && wasGround && !this.jumpBuf > 0 && this.vel.y <= 0) this.vel.y = -2.2; // stay glued on small steps
    this.grounded = ground; this.airTime = ground ? 0 : this.airTime + dt;
    this.speed = Math.hypot(this.vel.x, this.vel.z);
    if (ground) { this.walkPhase += dt * this.speed * 1.75; this.stepAcc += dt * this.speed; if (this.stepAcc > (this.crouch ? 1.5 : 2.1)) { this.stepAcc = 0; g.audio.step(this.crouch); } this.roof = ar.roofAt(this.pos.x, this.pos.z, this.pos.y); }
    if (this.pos.y < 9.5) { g.damage(this, 999, null, { cause: 'drop' }); if (this.alive && g.opts.god) { const r = this.spawnRoof || ar.roofs[0]; this.pos.set(r.spawnPt[0], r.spawnPt[1] + 0.1, r.spawnPt[2]); this.vel.set(0, 0, 0); } return; }
    // launch pads fire when stepped on; ziplines and ladders want the use key
    this.prompt = null; this.padLock -= dt; let bestS = 1e9;
    if (pk && ground && this.roof >= 0 && this.sprinting && this._leap(false)) return;      // sprinting over a leap mark toward the gap is the leap
    if (ground && this.roof >= 0) for (const e of ar.roofs[this.roof].links) {
      const l = e.link; const A = e.dir ? l.p1 : l.p0; const d = Math.hypot(A.x - this.pos.x, A.z - this.pos.z);
      if (l.kind === 'pad') { if (d < 1.0 && this.padLock <= 0 && Math.abs(A.y - this.pos.y) < 0.8) { this._ride(l, 0); g.audio.pad(); g.hud.banner(`LAUNCH · ${ar.roofs[e.to].name}`, 1.4, true); return; } }
      else if ((l.kind === 'zip' || l.kind === 'ladder') && d < (l.kind === 'zip' ? 2.1 : 1.7) && Math.abs(A.y - this.pos.y) < 1.2) { // two devices can share a corner: nearest wins, the one you face breaks ties
        const B = e.dir ? l.p0 : l.p1; const bl = Math.hypot(B.x - A.x, B.z - A.z) || 1; const sc = d - 0.9 * ((B.x - A.x) * fx + (B.z - A.z) * fz) / bl; if (sc < bestS) { bestS = sc; this.prompt = { link: l, dir: e.dir, text: `${ar.linkLabel(l)} · ${ar.roofs[e.to].name}` }; } }
      else if ((l.kind === 'jump' || l.kind === 'step') && bestS > 1e8 && !this.prompt && d < (l.kind === 'jump' ? 3.4 : 2.0)) { const B = e.dir ? l.p0 : l.p1; if ((B.x - this.pos.x) * fx + (B.z - this.pos.z) * fz > 0) this.prompt = { link: l, dir: e.dir, passive: true, text: l.kind === 'jump' ? (l.k0 ? `SPRINT UP THE RAMP · JUMP AT THE RED LIP` : `SPRINT OR JUMP AT THE ARROWS · ${ar.roofs[e.to].name}`) : (B.y > A.y ? 'JUMP TO CLIMB' : 'DROP DOWN') + ` · ${ar.roofs[e.to].name}` }; }
    }
    if (this.prompt && !this.prompt.passive && inp.pressed('use')) { this._ride(this.prompt.link, this.prompt.dir); this.prompt = null; }
  }
  // a leap mark under the sniper (a 'jump' link without ramps) that points the way they face and, sprinting, the way they run: ride its arc
  _leap(pressed) {
    const ar = this.g.arena, r = ar.roofs[this.roof]; if (!r || (!pressed && this.padLock > 0)) return false; const fx = -Math.sin(this.yaw), fz = -Math.cos(this.yaw); let best = null, bs = pressed ? 0.45 : 0.7;
    for (const e of r.links) { const l = e.link; if (l.kind !== 'jump' || l.k0) continue; const A = e.dir ? l.p1 : l.p0, B = e.dir ? l.p0 : l.p1; const d = Math.hypot(A.x - this.pos.x, A.z - this.pos.z); if (d > (pressed ? 2 : 1.35) || Math.abs(A.y - this.pos.y) > 0.9) continue;
      const bx = B.x - A.x, bz = B.z - A.z, bl = Math.hypot(bx, bz) || 1, c = (bx * fx + bz * fz) / bl; if (!pressed && (this.vel.x * bx + this.vel.z * bz) / bl < 5) continue; if (c > bs) { bs = c; best = e; } }
    if (!best) return false; this.jumpBuf = 0; this._ride(best.link, best.dir); this.g.audio.jump(); return true;
  }
  _leapLand(l, dir) { const A = dir ? l.p1 : l.p0, B = dir ? l.p0 : l.p1; const dx = B.x - A.x, dz = B.z - A.z, k = 1 / (Math.hypot(dx, dz) || 1); this.padLock = 0.25; this.landDip = 0.45; this.g.audio.land(0.4);
    if (this._floor(B.x + dx * k * 1.3, B.y, B.z + dz * k * 1.3) && this._floor(B.x + dx * k * 2.6, B.y, B.z + dz * k * 2.6)) { this.vel.x = dx * k * 8; this.vel.z = dz * k * 8; } else this.flow = 0; }   // still running, where there is roof to run on
  // is there floor a sniper can stand on there (under the middle, or a hand's width to any side), above the street?
  _floor(x, y, z) { const ar = this.g.arena, lo = ar.data.dropY + 0.2; for (const q of FLOOR_Q) { const h = ar.raycast(_a.set(x + q[0], y + 0.3, z + q[1]), _b.set(0, -1, 0), 0.76); if (h && h.face.normal.y > 0.5 && h.point.y >= lo) return true; } return false; }
  // Nobody leaves a roof by accident (maps with `parkour`). On foot (walking or sprinting, not jumping) a sniper is held at an edge, and
  // where a floor runs down toward the street. What stays free: a step down of a metre or less; and, at a walk, a drop of up to 2.4 m
  // onto a lower roof that has room to land on. Anything else off a roof is a jump, a leap mark, a pad, a cable or a ladder.
  // True when the step was taken back (the sniper stays, and can still slide along the edge).
  _edge() {
    const p = this.pos, ar = this.g.arena, s = this._es || (this._es = p.clone().setY(-1e4)); if (this._floor(p.x, p.y, p.z)) { s.copy(p); return false; }
    if (Math.hypot(p.x - s.x, p.z - s.z) > 0.9 || Math.abs(p.y - s.y) > 0.9) return false;
    let vx = this.vel.x, vz = this.vel.z, vl = Math.hypot(vx, vz); const sp = vl; if (vl < 0.2) { vx = p.x - s.x; vz = p.z - s.z; vl = Math.hypot(vx, vz); } if (vl > 0.001) { vx /= vl; vz /= vl; } else vx = vz = 0;
    if (vl > 0.001 && this._floor(p.x + vx * 0.14, p.y, p.z + vz * 0.14)) return false;      // a seam between two panes (under half a metre: a sniper's feet bridge it): the floor carries on a step ahead
    const b = ar.raycast(_a.set(p.x, p.y + 0.3, p.z), _b.set(0, -1, 0), 80);
    if (b && b.point.y >= ar.data.dropY + 0.2) { const h = p.y - b.point.y, y = b.point.y; if (h <= 1) return false;                                  // a short step down
      if (h <= 2.4 && sp < 6) { const ri = ar.roofAt(p.x, p.z, y), r = ri >= 0 ? ar.roofs[ri] : null;                                           // a lower roof, at a walk, with room to land on
        if (r && Math.abs(y - r.roofY) < 0.9 && FLOOR_Q.some(q => ar.walk(r, p.x + q[0] * 4, p.z + q[1] * 4)) && this._floor(p.x + vx, y, p.z + vz) && this._floor(p.x + vx * 2, y, p.z + vz * 2)) return false; } }
    if (!this._floor(s.x, s.y, s.z)) return false;                                                    // the floor itself is gone (a pane shot out): nothing holds
    if (this._floor(p.x, s.y, s.z)) { p.set(p.x, s.y, s.z); this.vel.z = 0; } else if (this._floor(s.x, s.y, p.z)) { p.set(s.x, s.y, p.z); this.vel.x = 0; } else { p.copy(s); this.vel.x = 0; this.vel.z = 0; }
    s.copy(p); return true;
  }
  _ride(l, dir) { this.mode = 'link'; this.link = l; this.linkDir = dir; this.linkT = 0; this.vel.set(0, 0, 0); this.grounded = false; this.crouch = false; this.g.hud.syncCrouch(false); this.linkFrom = this.pos.clone(); this.g.stats.traversals = (this.g.stats.traversals || 0) + 1; }
  _rideStep(dt, inp) {
    const ar = this.g.arena, l = this.link; const dur = l.time * (l.kind === 'ladder' ? 0.85 : 1); const prev = _a.copy(this.pos); this.linkT += dt / dur; const u = Math.min(1, this.linkT);
    ar.linkPos(l, this.linkDir, u, _b); if (u < 0.08) _b.lerpVectors(this.linkFrom, _b, u / 0.08); this.pos.copy(_b); if (dt > 0) this.vel.copy(this.pos).sub(prev).multiplyScalar(1 / dt);
    this.speed = 0; this.g.audio.setZip(l.kind === 'zip' && u > 0.1 && u < 0.9 ? 1 : 0); if (l.kind === 'ladder') { this.stepAcc += dt; if (this.stepAcc > 0.28) { this.stepAcc = 0; this.g.audio.ladder(); } }
    if (l.kind === 'zip' && inp.pressed('jump') && u > 0.14 && u < 0.86) { this.mode = 'walk'; this.link = null; this._jmp = 1; this.vel.multiplyScalar(0.85); this.g.audio.setZip(0); return; }   // let go (as good as a jump)
    if (u >= 1) { this.mode = 'walk'; this.link = null; this.grounded = true; this.vel.set(0, -2, 0); this.padLock = 0.8; this.g.audio.setZip(0); if (l.kind === 'pad' || l.kind === 'zip') { this.landDip = 0.7; this.g.audio.land(0.6); } if (l.kind === 'jump' && !l.k0) this._leapLand(l, this.linkDir); }
  }
  _mantleStep(dt) { const m = this.mantle; m.t += dt / m.dur; const t = Math.min(1, m.t); const e = t * t * (3 - 2 * t); const up = Math.min(1, e * 1.7), fw = Math.max(0, (e - 0.35) / 0.65); this.pos.set(lerp(m.from.x, m.to.x, fw), lerp(m.from.y, m.to.y, up), lerp(m.from.z, m.to.z, fw)); this.landDip = Math.sin(t * Math.PI) * 0.6;
    if (t >= 1) { this.mode = 'walk'; this.mantle = null; this.grounded = true; this.vel.set(0, -1, 0); if (m.crouch) { this.crouch = true; this.g.hud.syncCrouch(true); } } }

  // ------------------------------------------------------------------ weapons
  _weapons(dt, inp) {
    const g = this.g, W = this.weapon, st = this.w[this.cur]; const riding = this.mode === 'link' && this.link.kind !== 'pad' || this.mode === 'mantle';
    this.w.rifle.cool = Math.max(0, this.w.rifle.cool - dt); this.w.pistol.cool = Math.max(0, this.w.pistol.cool - dt); this.cool = st.cool;
    // swap
    const want = inp.pressed('swap') ? (this.cur === 'rifle' ? 'pistol' : 'rifle') : inp.pressed('w1') ? 'rifle' : inp.pressed('w2') ? 'pistol' : null;
    if (want && want !== this.cur && !this.swapTo) { this.swapTo = want; this.swapT = 0; this.reloadT = -1; this.boltT = -1; }
    if (this.swapTo) { this.swapT += dt / WEAPONS[this.swapTo].swap; if (this.swapT >= 0.5 && this.cur !== this.swapTo) { this.cur = this.swapTo; this.zoomIdx = 0; g.hud.weapon(this); if (this.cur === 'rifle' && this.w.rifle.cool > 0.15 && this.w.rifle.mag > 0) { this.boltT = 1 - this.w.rifle.cool / WEAPONS.rifle.cycle; } } if (this.swapT >= 1) { this.swapTo = null; this.swapT = 0; } }
    const busy = !!this.swapTo || riding;
    // aim down sights
    const wantAds = inp.held('ads') && !busy && this.reloadT < 0 && !this.sprinting; this.ads = clamp(this.ads + (wantAds ? dt / 0.16 : -dt / 0.12), 0, 1); this.scoped = this.cur === 'rifle' && this.ads >= 0.98;
    if (inp.wheel || inp.pressed('zoom')) { const n = this.weapon.zooms.length; this.zoomIdx = (this.zoomIdx + (inp.wheel < 0 ? 1 : inp.wheel > 0 ? n - 1 : 1)) % n; }
    // breath
    this.holding = this.scoped && inp.held('sprint') && this.focus > 0 && this.gasp <= 0; if (this.holding) { this.focus = Math.max(0, this.focus - dt / 4.2); if (this.focus === 0) this.gasp = 2.2; } else this.focus = Math.min(1, this.focus + dt / 5.5); this.gasp = Math.max(0, this.gasp - dt);
    // bolt / reload timers
    if (this.boltT >= 0) { this.boltT += dt / W.cycle; if (this.boltT >= 1) this.boltT = -1; }
    if (this.reloadT >= 0) { this.reloadT += dt / W.reload; if (this.reloadT >= 1) { const need = W.mag - st.mag, take = Math.min(need, st.reserve); st.mag += take; st.reserve -= take; this.reloadT = -1; g.hud.weapon(this); } }
    if (inp.pressed('reload') && this.reloadT < 0 && !busy && st.mag < W.mag && st.reserve > 0) this._startReload();
    // fire
    if (inp.pressed('fire') && !busy && g.weaponsFree) {
      if (this.reloadT >= 0 || st.cool > 0) { /* wait */ }
      else if (st.mag <= 0) { if (st.reserve > 0) this._startReload(); else g.audio.dry(); }
      else this._fire();
    }
  }
  _startReload() { this.reloadT = 0; this.boltT = -1; this.g.audio.reload(this.weapon.reload); if (this.g.net) this.g.net.send({ t: 'reload', w: this.cur }); }
  _fire() {
    const g = this.g, W = this.weapon, st = this.w[this.cur], cam = g.gfx.camera; st.mag--; st.cool = W.cycle; this.cool = W.cycle;
    const dir = cam.getWorldDirection(new V3()); const hipSpread = W.hip * (1 - this.ads) * (1 + this.speed * 0.25) + (this.cur === 'rifle' && !this.scoped ? 0.0000004 : 0) + (this.grounded ? 0 : 0.000003);
    if (hipSpread > 0) { const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * hipSpread; _a.set(Math.cos(a) * r, Math.sin(a) * r, 0).applyQuaternion(cam.quaternion); dir.add(_a).normalize(); }
    const origin = cam.position.clone(); const muzzle = origin.clone().addScaledVector(dir, this.scoped ? 1.2 : 0.75); _a.set(this.scoped ? 0 : 0.1, this.scoped ? -0.06 : -0.09, 0).applyQuaternion(cam.quaternion); muzzle.add(_a);
    if (g.net) { g.netFire(origin, dir, muzzle, W); this.kick += this.cur === 'rifle' ? 0.046 : 0.016; this.kickYaw += (Math.random() - 0.5) * (this.cur === 'rifle' ? 0.02 : 0.01); g.fp.shot(); g.gfx.post.uKick.value = this.cur === 'rifle' ? 1 : 0.4; g.hud.weapon(this); if (this.cur === 'rifle' && st.mag > 0) { this.boltT = 0; g.audio.bolt(0.26); } return; }
    const res = fireShot(g, this, origin, dir, muzzle, W);
    this.kick += this.cur === 'rifle' ? 0.046 : 0.016; this.kickYaw += (Math.random() - 0.5) * (this.cur === 'rifle' ? 0.02 : 0.01); g.fp.shot(); g.gfx.post.uKick.value = this.cur === 'rifle' ? 1 : 0.4; g.hud.weapon(this);
    if (this.cur === 'rifle') { if (st.mag > 0) { this.boltT = 0; g.audio.bolt(0.26); } }
    if (res.hit) { g.hud.hitMarker(!res.hit.alive, res.zone === 0); g.audio.hit(res.zone === 0); }
  }

  // ------------------------------------------------------------------ frame
  update(dt, inp) {
    const g = this.g, cam = g.gfx.camera;
    if (!this.alive) { this.deadCam += dt; return; }
    // look
    const fovScale = Math.tan(THREE.MathUtils.degToRad(this.fov) / 2) / Math.tan(THREE.MathUtils.degToRad(BASE_FOV) / 2); const s = 0.0022 * inp.sens * fovScale * this.aimSlow;
    this.yaw -= inp.lookX * s; this.pitch = clamp(this.pitch - inp.lookY * s, -1.5, 1.5);
    if (inp.pressed('crouch') && this.mode === 'walk') { if (inp.touch) this.crouch = inp.held('crouch'); else this.crouch = !this.crouch; if (!this.crouch && this.g.arena.raycast(_a.set(this.pos.x, this.pos.y + H_CROUCH, this.pos.z), _up, H_STAND - H_CROUCH + 0.05)) this.crouch = true; g.hud.syncCrouch(this.crouch); }
    this.crouchK = clamp(this.crouchK + (this.crouch ? dt / 0.16 : -dt / 0.16), 0, 1);
    if (this.locked) { this.vel.set(0, 0, 0); this.speed = 0; } else if (this.mode === 'walk') this._walk(dt, inp); else if (this.mode === 'link') this._rideStep(dt, inp); else if (this.mode === 'mantle') this._mantleStep(dt);
    if (!this.alive) return;
    this._weapons(dt, inp);
    // camera
    const W = this.weapon; const zoom = W.zooms[Math.min(this.zoomIdx, W.zooms.length - 1)] * (this.holding ? 1.05 : 1); const adsFov = THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(BASE_FOV) / 2) / zoom));
    const k = this.ads * this.ads * (3 - 2 * this.ads); const target = lerp(BASE_FOV + (this.sprinting ? 5 + 7 * (this.flow || 0) : 0), adsFov, this.cur === 'rifle' ? (this.scoped ? 1 : k * 0.35) : k); this.fov = lerp(this.fov, target, 1 - Math.exp(-dt * (this.scoped ? 30 : 12)));
    if (Math.abs(cam.fov - this.fov) > 0.01) { cam.fov = this.fov; cam.updateProjectionMatrix(); }
    // sway (scoped): slow drift, worse when moving / winded / shot at, steadier crouched or holding breath
    const t = g.time; let amp = (this.crouch ? 0.0021 : 0.0042) * (1 + this.speed * 0.6) * (1 + this.suppress * 1.5) * (this.gasp > 0 ? 2.2 : 1) * (this.holding ? 0.12 : 1) * (this.hp < 35 ? 1.35 : 1) * this.ads;
    if (this.cur === 'pistol') amp *= 0.4; this.suppress = Math.max(0, this.suppress - dt * 0.5);
    this.swayX = (Math.sin(t * 0.83) * 0.6 + Math.sin(t * 2.17 + 1.3) * 0.4) * amp; this.swayY = (Math.cos(t * 1.07) * 0.6 + Math.sin(t * 1.71 + 0.4) * 0.4) * amp;
    this.kick = lerp(this.kick, 0, 1 - Math.exp(-dt * 6)); this.kickYaw = lerp(this.kickYaw, 0, 1 - Math.exp(-dt * 6)); this.landDip = lerp(this.landDip, 0, 1 - Math.exp(-dt * 9)); this.stepLift = lerp(this.stepLift, 0, 1 - Math.exp(-dt * 13)); this.hurtT = Math.max(0, this.hurtT - dt);
    const eyeH = lerp(EYE_STAND, EYE_CROUCH, this.crouchK); const bob = this.grounded && this.mode === 'walk' ? Math.min(1, this.speed / 5) * (1 - this.ads * 0.8) : 0;
    this.lean = lerp(this.lean, this.mode === 'walk' ? -inp.moveX * 0.018 * Math.min(1, this.speed / 4) : 0, 1 - Math.exp(-dt * 8));
    cam.position.set(this.pos.x, this.pos.y + eyeH + Math.sin(this.walkPhase * 2) * 0.022 * bob - this.landDip * 0.16 - this.stepLift, this.pos.z);
    cam.rotation.set(this.pitch + this.kick + this.swayY + Math.sin(this.hurtT * 40) * this.hurtT * 0.02, this.yaw + this.kickYaw + this.swayX, this.lean + Math.sin(this.walkPhase) * 0.004 * bob, 'YXZ');
    this.fwdV.set(-Math.sin(this.yaw) * Math.cos(this.pitch), Math.sin(this.pitch), -Math.cos(this.yaw) * Math.cos(this.pitch));
  }
}
export { BASE_FOV };

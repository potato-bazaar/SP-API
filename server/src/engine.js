// The authoritative match. Runs headless on the server with the same arena, shot and bot code the browser uses:
// the server owns time, the halo, the angel, damage, deaths, respawns, bots and the result. Clients own only
// their own movement (validated here) and the moment they pull the trigger (lag-compensated here).
import * as THREE from 'three';
import { Arena } from '../../client/src/arena.js';
import { WEAPONS, fireShot } from '../../client/src/combat.js';
import { Bot, CALLSIGNS } from '../../client/src/ai.js';
import { simpleHitShapes } from '../../client/src/world.js';
import { MODES } from './rules.js';

const V3 = THREE.Vector3; const clamp = (x, a, b) => Math.min(b, Math.max(a, x)), lerp = (a, b, t) => a + (b - a) * t;
const r2 = (v) => Math.round(v * 100) / 100, r3 = (v) => Math.round(v * 1000) / 1000;
const noop = () => {}; const NOOP = new Proxy({}, { get: () => noop });
const FX = { threads: NOOP, particles: NOOP, decals: NOOP };
const SPAWN_ORDER = { A: [0, 7, 6, 1], B: [3, 4, 2, 5] };   // team halves: north/east vs south/west (spawn numbers 0..7 round the ring)
const HISTORY = 1.0;                                       // seconds of pose history kept for lag compensation
export const TICK = 1 / 30;

// a connected human, as the server sees them
class Human {
  constructor(id, name, team) {
    this.id = id; this.netId = id; this.name = name; this.team = team; this.isPlayer = true; this.human = true;
    this.pos = new V3(); this.vel = new V3(); this.lastShotPos = new V3(); this._e = new V3(); this._c = new V3();
    this.kills = 0; this.deaths = 0; this.shots = 0; this.hits = 0; this.heads = 0; this.place = 0; this.reset();
  }
  reset() {
    this.hp = 100; this.alive = true; this.yaw = 0; this.pitch = 0; this.crouchK = 0; this.mode = 'walk'; this.speed = 0; this.lastShot = -99; this.revealedUntil = -1;
    this.outT = 0; this.zoneAcc = 0; this.ammo = { rifle: { mag: WEAPONS.rifle.mag, reserve: WEAPONS.rifle.reserve, ready: 0 }, pistol: { mag: WEAPONS.pistol.mag, reserve: WEAPONS.pistol.reserve, ready: 0 } };
    this.reloadUntil = 0; this.reloadW = null; this.wpn = 'rifle'; this.ads = 0; this.protectUntil = 0; this.respawnAt = 0; this.deathTime = 0; this.link = -1;
    this.budget = 0; this.lastIn = 0; this.lastSeq = -1; this.valid = new V3(); this.strikes = 0;
  }
  get moving() { return this.speed > 0.6; }
  eye(out = this._e) { return out.set(this.pos.x, this.pos.y + lerp(1.6, 1.0, this.crouchK), this.pos.z); }
  chest(out = this._c) { return out.set(this.pos.x, this.pos.y + lerp(1.3, 0.78, this.crouchK), this.pos.z); }
  hitShapes(out) { return simpleHitShapes(out, this.pos, this.crouchK); }
}

export class Match {
  /** @param {{arena:any,bvh:any}} world @param {any} settings @param {{id:string,name:string,team:number,bot?:boolean}[]} roster */
  constructor(world, settings, roster, emit) {
    this.headless = true; this.S = settings; this.emit = emit; this.arena = new Arena(world.arena, world.bvh);
    this.teams = MODES[settings.mode].teams; this.fx = FX; this.audio = NOOP; this.hud = NOOP; this.player = null; this.listenerPos = new V3();
    this.time = 0; this.weaponsFree = false; this.state = 'live'; this.events = []; this.deferred = null; this.winner = null; this.log = [];
    const L = settings.botSkill; this.botSigma = 1; this.botSigmaPlayer = [2.0, 1.2, 0.75][L]; this.botSigmaBot = 2.0; this.botEye = [0.6, 1, 1.35][L]; this.botAim = [1.35, 1, 0.7][L]; this.botCrowd = [1, 2, 3][L];
    // halo schedule scaled to the room's time limit
    const Z = world.arena.zone; const k = settings.timeLimit / Z.duration; this.Z = { center: Z.center, duration: settings.timeLimit, phases: Z.phases.map(p => ({ ...p, t: p.t * k, shrink: (p.shrink || 0) * Math.min(1.6, k) })) };
    this.zone = { cx: Z.center[0], cz: Z.center[1], r: Z.r0, nextR: Z.r0, phase: 0, shrinking: false, toNext: 60, phaseAge: 0, dps: 0, total: Z.phases.length };
    this.angel = { eye: new V3(0, 71.5, 0), state: 'idle', pulseR: 0, pulseOn: false }; this.gazeWarned = -1; this.gazeDone = -1;
    // actors
    this.humans = []; this.bots = []; const names = CALLSIGNS.slice().sort(() => Math.random() - 0.5); let bi = 0;
    for (const r of roster) {
      if (r.bot) { const b = new Bot(this, bi + 1, names[bi % names.length], null, null); bi++; b.netId = r.id; b.team = r.team; this.bots.push(b); }
      else this.humans.push(new Human(r.id, r.name, r.team));
    }
    this.actors = [...this.humans, ...this.bots]; this.byId = new Map(this.actors.map(a => [a.netId, a]));
    this.hist = new Map(this.actors.map(a => [a.netId, []]));
    this._spawnAll(); this._zone(0);
  }

  // ------------------------------------------------------------------ spawning
  _spawnAll() {
    const ar = this.arena; const used = new Set();
    const order = ar.spawns.map((_, i) => i).sort(() => Math.random() - 0.5); let fi = 0;
    const counters = [0, 0];
    for (const a of this.actors) {
      let si;
      if (this.teams) { const list = SPAWN_ORDER[a.team === 0 ? 'A' : 'B']; si = list[counters[a.team]++ % list.length]; if (used.has(si)) si = list.find(x => !used.has(x)) ?? si; }
      else { while (used.has(order[fi % order.length]) && fi < 64) fi++; si = order[fi++ % order.length]; }
      used.add(si); const r = ar.spawns[si]; const p = new V3(r.spawnPt[0], r.spawnPt[1], r.spawnPt[2]);
      if (this.teams && used.size > ar.spawns.length) p.x += Math.random() * 2 - 1;
      this._place(a, p, Math.atan2(p.x, p.z), r.i, false);
    }
  }
  _place(a, p, yaw, roof, protect) {
    if (a.human) { a.reset(); a.pos.copy(p); a.valid.copy(p); a.yaw = yaw; if (protect) a.protectUntil = this.time + 2.5; }
    else { const k = a.kills, d = a.deaths || 0, s = a.shots, h = a.hits, hs = a.heads; a.reset(); a.kills = k; a.deaths = d; a.shots = s; a.hits = h; a.heads = hs; a.spawn(p, yaw, roof); a.protectUntil = protect ? this.time + 2.5 : 0; }
    a.roofI = roof;
    this.events.push({ t: 'spawn', id: a.netId, p: [r2(p.x), r2(p.y), r2(p.z)], yaw: r3(yaw), roof, hp: 100 });
  }
  // respawn somewhere inside the halo, as far as possible from living enemies and out of their sight
  _respawnPoint(a) {
    const ar = this.arena, z = this.zone; const sr = Math.max(6, Math.min(z.r, z.nextR) - 2); const foes = this.actors.filter(o => o.alive && o !== a && (!this.teams || o.team !== a.team));
    let best = null, bs = -1e9; const _e = new V3(), _q = new V3();
    for (let tries = 0; tries < 60; tries++) {
      const r = ar.roofs[(Math.random() * ar.roofs.length) | 0]; if (!r.cells.length || ar.safeCount(r, sr) < 8) continue;
      const k = r.cells[(Math.random() * r.cells.length) | 0]; const c = ar.cellPos(r, k, new V3()); if (Math.hypot(c.x - z.cx, c.z - z.cz) > sr) continue;
      let s = Math.random() * 4; let dmin = 1e9;
      for (const f of foes) { const d = f.pos.distanceTo(c); dmin = Math.min(dmin, d); if (d < 60 && ar.los(f.eye(_e), _q.set(c.x, c.y + 1.4, c.z))) s -= 40; }
      s += Math.min(dmin, 50) * 0.8; if (this.teams) for (const m of this.actors) if (m.alive && m !== a && m.team === a.team) s += Math.max(0, 25 - m.pos.distanceTo(c)) * 0.3;
      if (s > bs) { bs = s; best = { c, r }; }
    }
    if (!best) { const r = ar.spawns[(Math.random() * ar.spawns.length) | 0]; best = { c: new V3(...r.spawnPt), r }; }
    return { p: best.c, roof: best.r.i, yaw: Math.atan2(best.c.x - z.cx, best.c.z - z.cz) };
  }

  // ------------------------------------------------------------------ zone + angel
  _zone(dt) {
    const Z = this.Z, z = this.zone, t = this.time; let i = 0; while (i + 1 < Z.phases.length && Z.phases[i + 1].t <= t) i++; const ph = Z.phases[i], prev = Z.phases[Math.max(0, i - 1)], next = Z.phases[i + 1];
    const age = t - ph.t; z.shrinking = i > 0 && age < ph.shrink; z.r = z.shrinking ? lerp(prev.r, ph.r, age / ph.shrink) : ph.r; z.nextR = z.shrinking ? ph.r : (next ? next.r : ph.r); z.toNext = next ? next.t - t : Z.duration - t; z.phaseAge = age; z.dps = ph.dps || 5; z.phase = i;
    if (!this.S.halo) { z.r = z.nextR = Z.phases[0].r; z.shrinking = false; z.dps = 0; }   // no halo: the angel still looks on the same beat
    if (dt <= 0) return;
    const sink = (1 - clamp(z.r / 30, 0, 1)) * 5; this.angel.eye.set(0, 71.5 - sink, 0);
    if (next && z.toNext <= 5.5 && this.gazeWarned < i) { this.gazeWarned = i; this.angel.state = 'warn'; if (this.S.angelGaze) for (const b of this.bots) b.hideFromAngel(this.angel.eye); }
    if (i > 0 && this.gazeDone < i) { this.gazeDone = i; this.angel.state = 'look'; if (this.S.angelGaze) { this.angel.pulseOn = true; this.angel.pulseR = 0; for (const a of this.actors) a._gazed = false; } }
    if (this.angel.pulseOn) { this.angel.pulseR += dt * 78; for (const a of this.actors) { if (!a.alive || a._gazed) continue; if (a.chest().distanceTo(this.angel.eye) <= this.angel.pulseR) { a._gazed = true; const seen = this.arena.los(this.angel.eye, a.chest()); if (seen) a.revealedUntil = this.time + 5.5; this.events.push({ t: 'gaze', id: a.netId, seen }); } } if (this.angel.pulseR > 260) this.angel.pulseOn = false; }
    if (this.S.halo) for (const a of this.actors) { if (!a.alive) continue; const out = Math.hypot(a.pos.x - z.cx, a.pos.z - z.cz) > z.r; if (out) { a.outT = (a.outT || 0) + dt; if (a.outT > 2.5) { a.zoneAcc = (a.zoneAcc || 0) + z.dps * dt; if (a.zoneAcc >= 3) { const d = a.zoneAcc; a.zoneAcc = 0; this.damage(a, d, null, { cause: 'zone' }); } } } else { a.outT = Math.max(0, (a.outT || 0) - dt * 2); a.zoneAcc = 0; } }
  }
  gazeHit() {}

  // ------------------------------------------------------------------ combat (called by the shared shot routine and the bots)
  panOf() { return 0; }
  onShot(shooter, origin, res) {
    for (const b of this.bots) if (b.alive && b !== shooter) b.hear(shooter, origin);
    this.events.push({ t: 'shot', by: shooter.netId, o: [r2(origin.x), r2(origin.y), r2(origin.z)], e: [r2(res.point.x), r2(res.point.y), r2(res.point.z)], hit: res.hit ? res.hit.netId : null, z: res.zone, w: this._shotW || 'rifle' });
    if (shooter.human && shooter.protectUntil > this.time) shooter.protectUntil = 0;
  }
  damage(v, amount, attacker, info = {}) {
    if (this.deferred) { this.deferred.push([v, amount, attacker, info]); return; }
    if (!v.alive || this.state !== 'live') return;
    if (attacker && attacker !== v) {
      if (this.teams && attacker.team === v.team && !this.S.friendlyFire) return;
      if (this.S.headshotsOnly && info.zone != null && info.zone !== 0) return;
    }
    if (v.protectUntil > this.time && info.cause !== 'drop') return;
    v.hp -= amount; if (!v.human) v.onDamage(amount, attacker);
    this.events.push({ t: 'dmg', id: v.netId, by: attacker ? attacker.netId : null, amt: Math.round(amount), hp: Math.max(0, Math.ceil(v.hp)), z: info.zone ?? -1, cause: info.cause || null });
    if (v.hp <= 0) this.kill(v, attacker, info);
  }
  kill(v, killer, info) {
    v.alive = false; v.hp = 0; v.deathTime = this.time; v.deaths = (v.deaths || 0) + 1; v.revealedUntil = -1;
    const cause = info.cause === 'zone' ? 'halo' : (info.cause === 'drop' || info.cause === 'fall') ? 'street' : null;
    const how = cause ? '' : (info.zone === 0 ? 'head' : info.wpn && info.wpn.key === 'pistol' ? 'sidearm' : '');
    const friendly = killer && this.teams && killer.team === v.team && killer !== v;
    if (killer && killer !== v && killer.alive) { if (!friendly) killer.kills++; killer.hp = Math.min(100, killer.hp + 30); }
    if (!this.S.respawn) { const alive = this.actors.filter(a => a.alive).length; v.place = alive + 1; }
    else v.respawnAt = this.time + this.S.respawnDelay;
    if (!v.human) v.die();
    this.log.push({ t: this.time, k: killer ? killer.netId : null, v: v.netId, how, cause });
    this.events.push({ t: 'kill', id: v.netId, by: killer ? killer.netId : null, how, cause, place: v.place, hp: killer && killer.alive ? Math.ceil(killer.hp) : null, respawnIn: this.S.respawn ? this.S.respawnDelay : null, p: [r2(v.pos.x), r2(v.pos.y), r2(v.pos.z)] });
    this._checkEnd();
  }

  // ------------------------------------------------------------------ client messages
  /** movement report from a client; validated against speed, the traversal network and the street */
  input(id, m) {
    const a = this.byId.get(id); if (!a || !a.human || !a.alive || this.state !== 'live') return;
    if (typeof m.seq === 'number') { if (m.seq <= a.lastSeq) return; a.lastSeq = m.seq; }
    const p = m.p; if (!Array.isArray(p) || p.length !== 3 || !p.every(Number.isFinite)) return;
    const now = this.time; const dt = clamp(now - (a.lastIn || now - 0.05), 0.01, 0.5); a.lastIn = now;
    const nx = p[0], ny = p[1], nz = p[2]; const dh = Math.hypot(nx - a.valid.x, nz - a.valid.z), dv = ny - a.valid.y;
    // movement allowance: sprint 7.3 m/s (+ air control), launch pads up to ~26 m/s, ziplines 13 m/s; a burst budget absorbs jitter
    const riding = m.mode === 'link' && Number.isInteger(m.link) && this.arena.links[m.link];
    const cap = riding ? (riding.kind === 'pad' ? 30 : 16) : 9.5; a.budget = Math.min(6, a.budget + dt * cap);
    let ok = dh <= a.budget + 0.05 && dv < (riding ? 14 : 3.2) && nx > -180 && nx < 180 && nz > -180 && nz < 180 && ny < 120;
    if (riding && ok) { const l = riding; const d0 = Math.hypot(nx - (l.p0.x + l.p1.x) / 2, nz - (l.p0.z + l.p1.z) / 2); ok = d0 < l.len / 2 + 8 || d0 < 30; }
    if (!ok) { a.strikes++; if (a.strikes >= 3) { a.strikes = 0; a.pos.copy(a.valid); a.budget = 0; this.events.push({ t: 'correct', id: a.netId, p: [r2(a.valid.x), r2(a.valid.y), r2(a.valid.z)] }); } return; }
    a.strikes = Math.max(0, a.strikes - 0.25); a.budget = Math.max(0, a.budget - dh);
    a.vel.set((nx - a.pos.x) / dt, (ny - a.pos.y) / dt, (nz - a.pos.z) / dt); a.pos.set(nx, ny, nz); a.valid.copy(a.pos);
    a.yaw = Number.isFinite(m.yaw) ? m.yaw : a.yaw; a.pitch = Number.isFinite(m.pitch) ? clamp(m.pitch, -1.6, 1.6) : a.pitch; a.crouchK = clamp(+m.c || 0, 0, 1);
    a.mode = m.mode === 'link' || m.mode === 'mantle' ? m.mode : 'walk'; a.link = riding ? m.link : -1; a.speed = Math.hypot(a.vel.x, a.vel.z); a.wpn = m.w === 'pistol' ? 'pistol' : 'rifle'; a.ads = clamp(+m.ads || 0, 0, 1);
    a.roofI = this.arena.roofAt(nx, nz, ny);
  }
  fall(id, v) { const a = this.byId.get(id); if (!a || !a.alive || !Number.isFinite(v)) return; v = clamp(v, 0, 60); if (v > 14.5) this.damage(a, Math.min(100, (v - 14.5) * 8), null, { cause: 'fall' }); }
  reload(id, w) {
    const a = this.byId.get(id); if (!a || !a.alive) return; const W = WEAPONS[w]; if (!W) return; const st = a.ammo[w];
    if (st.mag >= W.mag || st.reserve <= 0 || a.reloadUntil > this.time) return; a.reloadUntil = this.time + W.reload - 0.15; a.reloadW = w;
  }
  /** a trigger pull. o/d: the client's camera ray; lag: seconds the shooter's view of others is behind the server */
  fire(id, m, lag) {
    const a = this.byId.get(id); if (!a || !a.alive || !this.weaponsFree || this.state !== 'live') return;
    const W = WEAPONS[m.w === 'pistol' ? 'pistol' : 'rifle']; const st = a.ammo[W.key];
    if (!Array.isArray(m.o) || !Array.isArray(m.d) || m.o.length !== 3 || m.d.length !== 3 || ![...m.o, ...m.d].every(Number.isFinite)) return;
    if (a.reloadUntil > this.time) return this.events.push({ t: 'deny', id: a.netId, why: 'reload', ammo: this._ammo(a) });
    if (st.mag <= 0) return this.events.push({ t: 'deny', id: a.netId, why: 'empty', ammo: this._ammo(a) });
    if (this.time < st.ready - 0.12) return this.events.push({ t: 'deny', id: a.netId, why: 'cycle', ammo: this._ammo(a) });
    const origin = new V3(...m.o), dir = new V3(...m.d); if (dir.lengthSq() < 0.5) return; dir.normalize();
    if (origin.distanceTo(a.eye()) > 2.2) origin.copy(a.eye());                                   // a camera far from the body is not believed
    st.mag--; st.ready = this.time + W.cycle;
    // rewind everyone else to where the shooter saw them, fire through the shared routine, then put them back
    const back = clamp(lag, 0, HISTORY - 0.05); const saved = [];
    if (back > 0.001) for (const o of this.actors) { if (o === a || !o.alive) continue; const pose = this._poseAt(o, this.time - back); if (pose) { saved.push([o, o.pos.clone(), o.crouchK]); o.pos.set(pose[1], pose[2], pose[3]); o.crouchK = pose[4]; } }
    this.deferred = []; this._shotW = W.key;
    fireShot(this, a, origin, dir, origin.clone().addScaledVector(dir, 0.8), W);
    for (const [o, p, c] of saved) { o.pos.copy(p); o.crouchK = c; }
    const pend = this.deferred; this.deferred = null; this._shotW = null;
    for (const d of pend) { this.damage(...d); if (d[0] && d[3].zone != null) this.events.push({ t: 'hit', id: a.netId, to: d[0].netId, z: d[3].zone, kill: !d[0].alive }); }
    if (W.key === 'rifle' && st.mag === 0 && st.reserve > 0) { a.reloadUntil = this.time + W.reload; a.reloadW = 'rifle'; }
    this.events.push({ t: 'ammo', id: a.netId, ammo: this._ammo(a) });
  }
  _ammo(a) { return { rifle: [a.ammo.rifle.mag, a.ammo.rifle.reserve], pistol: [a.ammo.pistol.mag, a.ammo.pistol.reserve] }; }
  _poseAt(o, t) { const h = this.hist.get(o.netId); if (!h || !h.length) return null; for (let i = h.length - 1; i > 0; i--) { if (h[i - 1][0] <= t) { const A = h[i - 1], B = h[i]; const k = clamp((t - A[0]) / Math.max(1e-6, B[0] - A[0]), 0, 1); return [t, lerp(A[1], B[1], k), lerp(A[2], B[2], k), lerp(A[3], B[3], k), lerp(A[4], B[4], k)]; } } return h[0]; }

  // ------------------------------------------------------------------ the tick
  step(dt) {
    if (this.state !== 'live') return;
    this.time += dt;
    if (!this.weaponsFree && this.time >= 6) { this.weaponsFree = true; this.events.push({ t: 'free' }); }
    this._zone(dt);
    for (const a of this.humans) {
      if (!a.alive) continue;
      if (a.reloadUntil && this.time >= a.reloadUntil) { const W = WEAPONS[a.reloadW]; const st = a.ammo[a.reloadW]; const take = Math.min(W.mag - st.mag, st.reserve); st.mag += take; st.reserve -= take; a.reloadUntil = 0; this.events.push({ t: 'ammo', id: a.netId, ammo: this._ammo(a) }); }
      if (a.pos.y < 9.5) this.damage(a, 999, null, { cause: 'drop' });
    }
    for (const b of this.bots) { b.update(dt); if (b.alive && b.pos.y < 9.5) this.damage(b, 999, null, { cause: 'drop' }); }
    if (this.S.respawn) for (const a of this.actors) if (!a.alive && a.respawnAt && this.time >= a.respawnAt) { a.respawnAt = 0; const s = this._respawnPoint(a); this._place(a, s.p, s.yaw, s.roof, true); }
    // pose history for lag compensation
    for (const a of this.actors) { const h = this.hist.get(a.netId); h.push([this.time, a.pos.x, a.pos.y, a.pos.z, a.crouchK]); while (h.length && h[0][0] < this.time - HISTORY) h.shift(); }
    if (this.time >= this.Z.duration && this.state === 'live') this._timeout();
  }

  // ------------------------------------------------------------------ results
  _score(a) { return a.kills; }
  teamScore(t) { return this.actors.filter(a => a.team === t).reduce((s, a) => s + a.kills, 0); }
  _checkEnd() {
    if (this.state !== 'live') return;
    if (this.S.respawn) {
      const L = this.S.scoreLimit; if (!L) return;
      if (this.teams) { for (const t of [0, 1]) if (this.teamScore(t) >= L) return this._finish({ team: t }); }
      else { const top = this.actors.find(a => a.kills >= L); if (top) return this._finish({ id: top.netId }); }
      return;
    }
    const alive = this.actors.filter(a => a.alive);
    if (this.teams) { const teams = new Set(alive.map(a => a.team)); if (teams.size <= 1) return this._finish({ team: alive.length ? alive[0].team : null }); }
    else if (alive.length <= 1) return this._finish({ id: alive.length ? alive[0].netId : null });
  }
  _timeout() {
    if (this.S.respawn) {
      if (this.teams) { const s0 = this.teamScore(0), s1 = this.teamScore(1); return this._finish({ team: s0 === s1 ? null : s0 > s1 ? 0 : 1, timeout: true }); }
      const top = this.actors.slice().sort((a, b) => b.kills - a.kills || a.deaths - b.deaths)[0]; const tie = this.actors.filter(a => a.kills === top.kills && a.deaths === top.deaths).length > 1;
      return this._finish({ id: tie ? null : top.netId, timeout: true });
    }
    const alive = this.actors.filter(a => a.alive);
    if (this.teams) { const sc = [0, 1].map(t => { const m = alive.filter(a => a.team === t); return [m.length, m.reduce((s, a) => s + a.hp, 0)]; }); const w = sc[0][0] !== sc[1][0] ? (sc[0][0] > sc[1][0] ? 0 : 1) : sc[0][1] !== sc[1][1] ? (sc[0][1] > sc[1][1] ? 0 : 1) : null; return this._finish({ team: w, timeout: true }); }
    alive.sort((a, b) => b.hp - a.hp || b.kills - a.kills); alive.forEach((a, i) => { a.place = i + 1; }); return this._finish({ id: alive[0] ? alive[0].netId : null, timeout: true });
  }
  _finish(w) {
    if (this.state !== 'live') return; this.state = 'over'; this.winner = w;
    if (w.id) { const a = this.byId.get(w.id); if (a) a.place = 1; }
    this.events.push({ t: 'end', winner: w, standings: this.standings() });
  }
  standings() {
    const rows = this.actors.map(a => ({ id: a.netId, name: a.name, team: a.team, bot: !a.human, kills: a.kills, deaths: a.deaths || 0, heads: a.heads, shots: a.shots, hits: a.hits, place: a.place || 0, alive: a.alive, hp: Math.max(0, Math.ceil(a.hp)) }));
    if (this.S.respawn) rows.sort((a, b) => b.kills - a.kills || a.deaths - b.deaths); else rows.sort((a, b) => (a.place || 1) - (b.place || 1) || b.kills - a.kills);
    return { rows, teams: this.teams ? [this.teamScore(0), this.teamScore(1)] : null };
  }

  // compact state of every actor: [id, x,y,z, yaw, aimYaw, aimPitch, crouchK, speed, mode, flags, hp]
  snapshot() {
    const a = []; const M = { walk: 0, ground: 0, link: 1, mantle: 2, air: 3, zip: 4, ladder: 5 };
    for (const o of this.actors) {
      let mode = 0, aimY, aimP, link = -1, lu = 0, ld = 0;
      if (o.human) { aimY = o.yaw; aimP = o.pitch; mode = M[o.mode] || 0; link = o.link; }
      else { aimY = o.aimYaw; aimP = o.aimPitch; if (o.link) { link = o.link.link.i; lu = o.link.t; ld = o.link.dir; mode = 1; } }
      const flags = (o.alive ? 1 : 0) | (o.revealedUntil > this.time ? 2 : 0) | (o.human && o.wpn === 'pistol' ? 4 : 0) | ((o.human ? o.ads > 0.5 : o.state === 'engage') ? 8 : 0) | (o.protectUntil > this.time ? 16 : 0) | (!o.human && o.reloadT > 0 ? 32 : 0);
      a.push([o.netId, r2(o.pos.x), r2(o.pos.y), r2(o.pos.z), r3(o.yaw), r3(aimY), r3(aimP), r2(o.crouchK), r2(o.speed || 0), mode, flags, Math.max(0, Math.ceil(o.hp)), link, r3(lu), ld]);
    }
    const z = this.zone; return { t: r3(this.time), a, z: [r2(z.r), r2(z.nextR), z.phase, z.shrinking ? 1 : 0, r2(z.toNext)], ang: this.angel.state, k: this.teams ? [this.teamScore(0), this.teamScore(1)] : null };
  }
  drain() { const e = this.events; this.events = []; return e; }
}

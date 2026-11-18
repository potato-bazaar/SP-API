// Server side of the gear the client already speaks online (game.js netGearEvent): gas and decoy throws, the melee
// hammer, the angel's strikes and its shadow roof. Tuning and the throw physics are copied from the client's solo code
// (its `he` table and `Sc` trajectory) so a can lands in the same place on every screen and on the server.
import * as THREE from 'three';
import { zoneD } from '../../client/src/ring.js';

const V3 = THREE.Vector3;
export const G = {
  throwSpeed: 16.5, throwLift: 3.2, g: 18, maxT: 4.2,
  gasR: 3.2, gasH: 2.6, gasT: 10, gasDps: 8,
  // the hammer: half a life per hit from any side (no one-hit kill) and 5 swings a match; the knife: a quarter, no limit
  meleeRange: 2.35, meleeArc: 0.92, meleeFront: 50, meleeBack: 50, meleeCycle: 0.62, hammerUses: 5,
  knifeDmg: 25, knifeRange: 1.9, knifeCycle: 0.42,
  smokeR: 4.6, smokeT: 14,
  decoyShots: [1, 2.7, 4.6], decoyLife: 7,
  strikeWarn: 1.15, strikeR: 1.7, strikeDmg: 35,
};
/** a fresh life's cans: players get one of each, AI snipers one gas (as in solo) */
export const freshKit = (human, S) => { const on = (k) => (S && S[k] === false ? 0 : 1); return human ? { gas: on('gas'), decoy: on('decoy'), smoke: on('smoke') } : { gas: on('gas'), decoy: 0, smoke: 0 }; };   // S: the room's rules
const r3 = (v) => Math.round(v * 1000) / 1000, r2 = (v) => Math.round(v * 100) / 100;
const v3r = (v) => [r3(v.x), r3(v.y), r3(v.z)];
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
// which roof someone stands on: players report it with every move (roofI); bots keep their own (roof)
export const roofOf = (a) => (a.human ? a.roofI : a.roof);

export function throwVelocity(dir, out = new V3()) { return out.copy(dir).multiplyScalar(G.throwSpeed).setY(dir.y * G.throwSpeed + G.throwLift); }
/** the client's Sc(): 30 Hz steps, gravity, up to 5 bounces, settles on a floor or drops below the street */
export function trajectory(arena, origin, vel) {
  const s = origin.clone(), o = vel.clone(), step = new V3(), n = new V3(), a = 1 / 30; let c = 0, bounces = 0;
  while (c < G.maxT) {
    o.y -= G.g * a; const h = o.length() * a; if (h < 1e-5) break;
    step.copy(o).multiplyScalar(a / h);
    const u = arena.raycast(s.clone(), step, h + 0.06);
    if (u) {
      n.copy(u.face.normal); if (n.dot(step) > 0) n.negate(); s.copy(u.point).addScaledVector(n, 0.06);
      const d = o.dot(n); o.addScaledVector(n, -1.38 * d); o.x *= 0.62; o.z *= 0.62; bounces++; c += a;
      if ((n.y > 0.6 && o.length() < 2.4) || bounces >= 5) break;
      continue;
    }
    s.addScaledVector(step, h); c += a; if (s.y < (arena.ring ? -2 : 6)) break;   // below the street (city) / below the hull (ring)
  }
  return { end: s, t: c };
}
/** the decoy's stand-in "shooter": what bots hear and turn towards (the client's XM) */
function fakeShooter(pos, by) {
  const e = pos.clone();
  return { decoy: true, alive: true, hp: 100, pos: e, vel: new V3(), lastShotPos: e.clone(), lastShot: -99, revealedUntil: -1, crouchK: 0.6, moving: false, isPlayer: false,
    team: by.team === 0 ? 1 : by.team === 1 ? 0 : -9, name: 'DECOY', netId: 'decoy',
    eye(out = new V3()) { return out.set(e.x, e.y + 0.9, e.z); }, chest(out = new V3()) { return out.set(e.x, e.y + 0.6, e.z); }, hitShapes(out) { out.length = 0; return out; } };
}

export class ServerGear {
  /** @param {any} match the authoritative Match (arena, actors, bots, time, damage, events) */
  constructor(match) { this.m = match; this.flying = []; this.clouds = []; this.smokes = []; this.decoys = []; this.strikes = []; this.shadowRoof = -1; this.shadowPhase = -1; }

  // ---------------------------------------------------------------- throws
  /** a gas or decoy can thrown by `a` (player or bot) from o along d */
  throw(a, kind, o, d) {
    const m = this.m; if (!a.alive || m.state !== 'live' || !m.weaponsFree) return this._resync(a);
    if (!a.kit || !(a.kit[kind] > 0) || (a.throwReady || 0) > m.time) return this._resync(a);
    const dir = new V3(...d); if (dir.lengthSq() < 0.5) return this._resync(a); dir.normalize();
    const origin = new V3(...o); if (origin.distanceTo(a.eye()) > 2.2) origin.copy(a.eye());   // a hand far from the body is not believed
    a.kit[kind]--; a.throwReady = m.time + 0.5;
    // send rounded numbers and fly the same rounded numbers here, so the client's copy of the path matches ours exactly
    const ov = v3r(origin), vv = v3r(throwVelocity(dir)); const tr = trajectory(m.arena, new V3(...ov), new V3(...vv));
    this.flying.push({ kind, by: a, end: tr.end, landAt: m.time + tr.t });
    m.events.push({ t: 'throw', k: kind, by: a.netId, o: ov, v: vv, at: r3(m.time), left: a.kit[kind] });
  }
  _resync(a) { if (a && a.human && a.kit) this.m.events.push({ t: 'gear', id: a.netId, gas: a.kit.gas, decoy: a.kit.decoy, smoke: a.kit.smoke || 0 }); }

  // ---------------------------------------------------------------- melee
  /** pick who a swing from `a` along `dir` connects with (the client's melee(): range, arc, line of sight) */
  meleeTarget(a, dir, kind) {
    const m = this.m, eye = a.eye(new V3()), ch = new V3(); let best = null, range = kind === 'knife' ? G.knifeRange : G.meleeRange;
    for (const p of m.actors) {
      if (p === a || !p.alive) continue; p.chest(ch);
      const dx = ch.x - eye.x, dy = ch.y - eye.y, dz = ch.z - eye.z, dist = Math.hypot(dx, dy, dz); if (dist > range) continue;
      const cos = (dx * dir.x + dy * dir.y * 0.4 + dz * dir.z) / (dist || 1);
      if (dist > 0.9 && Math.acos(clamp(cos, -1, 1)) > G.meleeArc) continue;
      if (m.arena.los(eye, ch)) { range = dist; best = p; }
    }
    if (!best) return null;
    // from behind (the target faces away) or on someone playing dead: the heavy hit
    const yaw = best.aimYaw != null ? best.aimYaw : best.yaw; const fx = -Math.sin(yaw), fz = -Math.cos(yaw);
    const hx = a.pos.x - best.pos.x, hz = a.pos.z - best.pos.z, hd = Math.hypot(hx, hz) || 1;
    return { to: best, back: (fx * hx + fz * hz) / hd < -0.25 || (best.feignK || 0) > 0.5 };
  }
  meleeHit(a, hit, dir, kind) {
    const m = this.m, knife = kind === 'knife', k = knife ? 'knife' : 'hammer', left = this.hammerLeft(a);
    a.swingK = knife ? 2 : 1; a.swingUntil = m.time + 0.5;   // bots: shown to players in the snapshot
    if (!hit) { m.events.push({ t: 'melee', by: a.netId, to: null, k, left }); return; }
    m.damage(hit.to, knife ? G.knifeDmg : hit.back ? G.meleeBack : G.meleeFront, a, { cause: 'melee', knife, dir });
    m.events.push({ t: 'melee', by: a.netId, to: hit.to.netId, back: hit.back, kill: !hit.to.alive, k, left });
  }
  hammerLeft(a) { return a.hammerLeft == null ? G.hammerUses : a.hammerLeft; }
  meleeAllowed(a, kind) {
    const m = this.m, knife = kind === 'knife';
    if (m.S && m.S[knife ? 'knife' : 'hammer'] === false) return false;   // room rules: the hammer / the knife switched off
    if (!a.alive || m.state !== 'live' || !m.weaponsFree || (a.meleeReady || 0) > m.time) return false;
    if (!knife) { const left = this.hammerLeft(a); if (left <= 0) { if (a.human) m.events.push({ t: 'melee', by: a.netId, to: null, k: 'hammer', left: 0 }); return false; } a.hammerLeft = left - 1; }   // every swing counts, hit or miss; the count lasts the whole match
    a.meleeReady = m.time + (knife ? G.knifeCycle : G.meleeCycle) * 0.9; return true;   // a little slack for jitter on the client's 0.62 s swing
  }

  // ---------------------------------------------------------------- the angel: shadow roof and strikes
  /** each halo phase the angel's shadow moves to a roof inside the next safe ring: there it can't see or strike you */
  phase(i) {
    if (this.shadowPhase === i) return; this.shadowPhase = i;
    const m = this.m, z = m.zone, lim = Math.min(z.r, z.nextR || z.r) - 3;
    const ok = m.arena.roofs.filter((r) => r.cells && r.cells.length > 10 && r.i !== this.shadowRoof && zoneD(z, r.x, r.z, lim) < lim);
    this.shadowRoof = ok.length ? ok[(Math.random() * ok.length) | 0].i : -1;
  }
  onShadow(a) { return this.shadowRoof >= 0 && roofOf(a) === this.shadowRoof; }
  /** the angel fires (room rule angelShots 1 = light, 2 = heavy): marked strikes around the living and across the roofs */
  volley(level, eye) {
    const m = this.m, ar = m.arena, n = level >= 2 ? 18 : 8;
    const people = m.actors.filter((h) => h.alive && !this.onShadow(h)), roofs = ar.roofs.filter((r) => r.i !== this.shadowRoof && r.cells && r.cells.length > 4);
    for (let k = 0; k < n; k++) {
      let p = null;
      if (people.length && Math.random() < 0.42) { const f = people[(Math.random() * people.length) | 0], ang = Math.random() * 6.283, d = Math.random() * 2.6; p = new V3(f.pos.x + Math.cos(ang) * d, f.pos.y, f.pos.z + Math.sin(ang) * d); }
      else if (roofs.length) { const r = roofs[(Math.random() * roofs.length) | 0]; p = ar.cellPos(r, r.cells[(Math.random() * r.cells.length) | 0], new V3()); }
      if (!p) continue;
      const warnAt = m.time + 0.5 + Math.random() * (level >= 2 ? 4.6 : 3.4);
      this.strikes.push({ pos: p, warnAt, at: warnAt + G.strikeWarn, eye: eye.clone(), warned: false });
    }
  }

  // ---------------------------------------------------------------- per tick
  update(dt) {
    const m = this.m, now = m.time;
    // cans land: gas becomes a cloud, a decoy starts its fake shots
    for (let i = this.flying.length - 1; i >= 0; i--) {
      const f = this.flying[i]; if (now < f.landAt) continue; this.flying.splice(i, 1);
      if (f.kind === 'smoke') this.smokes.push({ pos: f.end, until: now + G.smokeT });
      else if (f.kind === 'gas') this.clouds.push({ pos: f.end, by: f.by, until: now + G.gasT, acc: new Map() });
      else this.decoys.push({ pos: f.end, by: f.by, born: now, shots: G.decoyShots.map((s) => now + s), fake: fakeShooter(f.end, f.by) });
    }
    for (let i = this.smokes.length - 1; i >= 0; i--) if (now > this.smokes[i].until) this.smokes.splice(i, 1);
    // gas hurts whoever stands in it (the thrower too, then without credit)
    for (let i = this.clouds.length - 1; i >= 0; i--) {
      const c = this.clouds[i]; if (now > c.until) { this.clouds.splice(i, 1); continue; }
      for (const a of m.actors) {
        if (!a.alive) continue; const dx = a.pos.x - c.pos.x, dz = a.pos.z - c.pos.z, dy = a.pos.y - c.pos.y;
        if (!(dx * dx + dz * dz < G.gasR * G.gasR && dy > -1.6 && dy < G.gasH)) continue;
        a.gasT = now; const acc = (c.acc.get(a) || 0) + G.gasDps * dt;
        if (acc >= 4) { c.acc.set(a, 0); m.damage(a, acc, c.by === a || !c.by ? null : c.by, { cause: 'gas' }); } else c.acc.set(a, acc);
      }
    }
    // decoys: three fake shots towards the nearest enemy; bots hear them and look
    for (let i = this.decoys.length - 1; i >= 0; i--) {
      const d = this.decoys[i];
      if (!d.shots.length) { if (now - d.born > G.decoyLife) { d.fake.alive = false; this.decoys.splice(i, 1); } continue; }
      if (now >= d.shots[0]) { d.shots.shift(); this._decoyShot(d); }
    }
    this._strikes();
    for (const b of m.bots) this._botThink(b, dt);
  }
  /** does a smoke cloud sit on the sight line a -> b? (bots can't see through it; the client's smokeCut) */
  smokeCut(a, b) {
    for (const c of this.smokes) {
      const cx = c.pos.x, cy = c.pos.y + 1.2, cz = c.pos.z, dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z, L = dx * dx + dy * dy + dz * dz || 1;
      const k = clamp(((cx - a.x) * dx + (cy - a.y) * dy + (cz - a.z) * dz) / L, 0, 1), px = a.x + dx * k - cx, py = a.y + dy * k - cy, pz = a.z + dz * k - cz;
      if (px * px + py * py * 0.6 + pz * pz < G.smokeR * G.smokeR) return true;
    }
    return false;
  }
  _decoyShot(d) {
    const m = this.m, o = new V3(d.pos.x, d.pos.y + 0.35, d.pos.z); let near = null, nd = 1e9;
    for (const a of m.actors) { if (!a.alive || a === d.by || (m.teams && a.team === d.by.team)) continue; const dist = m.arena.dist(a.pos, d.pos); if (dist < nd) { nd = dist; near = a; } }
    const dir = near ? m.arena.rel(new V3(), o, near.chest(new V3())).normalize() : new V3(Math.random() - 0.5, 0, Math.random() - 0.5).normalize();
    dir.x += (Math.random() - 0.5) * 0.22; dir.y = clamp(dir.y + 0.06 + Math.random() * 0.12, -0.2, 0.5); dir.z += (Math.random() - 0.5) * 0.22; dir.normalize();
    const hit = m.arena.raycast(o, dir, 300); const e = o.clone().addScaledVector(dir, hit ? hit.distance : 300); m.arena.unsee(e, e, o.x);
    d.fake.lastShot = m.time; d.fake.lastShotPos.copy(o);
    for (const b of m.bots) if (b.alive && b !== d.by && !(m.teams && b.team === d.by.team)) { try { b.hear(d.fake, o); b.lookAt.copy(o); } catch { /* a bot mid-traversal */ } }
    m.events.push({ t: 'fshot', o: v3r(o), e: v3r(e) });
  }
  _strikes() {
    const m = this.m, now = m.time;
    for (let i = this.strikes.length - 1; i >= 0; i--) {
      const s = this.strikes[i];
      if (!s.warned && now >= s.warnAt) {
        s.warned = true; m.events.push({ t: 'amark', p: [r2(s.pos.x), r2(s.pos.y), r2(s.pos.z)], at: r3(s.at) });
        for (const b of m.bots) if (b.alive && !b.link && Math.hypot(b.pos.x - s.pos.x, b.pos.z - s.pos.z) < 2.6 && Math.abs(b.pos.y - s.pos.y) < 2.5) { try { b.crouch = false; b._relocate(null); } catch { /* keep going */ } }
      }
      if (now < s.at) continue; this.strikes.splice(i, 1);
      const hit = m.actors.filter((a) => a.alive && !this.onShadow(a) && Math.hypot(a.pos.x - s.pos.x, a.pos.z - s.pos.z) <= G.strikeR && Math.abs(a.pos.y - s.pos.y) <= 2.4 && m.arena.los(s.eye, a.chest(new V3())));
      m.events.push({ t: 'ahit', p: [r2(s.pos.x), r2(s.pos.y), r2(s.pos.z)] });
      for (const a of hit) m.damage(a, G.strikeDmg, null, { cause: 'angel' });
    }
  }
  // AI snipers use the gear too (the client's botThink): run out of gas, swing the hammer up close, gas a camper
  _botThink(b, dt) {
    const m = this.m, now = m.time; if (!b.alive) return;
    if (b.gasT != null && now - b.gasT < 0.3 && (b._gasRun || 0) < now && !b.link) { b._gasRun = now + 1.6; try { b.crouch = false; b._relocate(null); } catch { /* keep going */ } }
    b._thinkG = (b._thinkG || Math.random()) - dt; if (b._thinkG > 0) return; b._thinkG = 0.35;
    const t = b.target; if (!t || !t.alive || b.link) return;
    const dist = t.pos.distanceTo(b.pos);
    // a player sprinting close by is heard: look that way
    for (const h of m.actors) {
      if (h === b || !h.alive || !h.human || (m.teams && h.team === b.team) || (h.speed || 0) < 5.6 || (h.crouchK || 0) > 0.5) continue;
      if (h.pos.distanceTo(b.pos) < 8 && b.state === 'scan') { b.lookAt.copy(h.pos).setY(h.pos.y + 1.2); const mm = b.mem && b.mem.get(h); if (mm) mm.aw = Math.min(1.4, mm.aw + 0.2); }
    }
    if (dist < 1.6 && (b._meleeAt || 0) < now && m.weaponsFree && (b.mag === 0 || b.reloadT > 0 || Math.random() < 0.35)) {
      b._meleeAt = now + 1.6; const dir = t.chest(new V3()).sub(b.eye(new V3())).normalize();
      const kind = (m.S && m.S.hammer === false) || this.hammerLeft(b) <= 0 ? 'knife' : 'hammer';   // meleeAllowed refuses whichever the room switched off
      if (this.meleeAllowed(b, kind)) this.meleeHit(b, this.meleeTarget(b, dir, kind), dir, kind); return;
    }
    if (!b.kit || !(b.kit.gas > 0) || !m.weaponsFree || dist < 9 || dist > 34) return;
    const mem = b.mem && b.mem.get(t); if (!mem || now - mem.seen > 2.5) return;
    if (!b._camp || b._camp.a !== t || b._camp.p.distanceTo(t.pos) > 2.2) { b._camp = { a: t, p: t.pos.clone(), t: now }; return; }
    if (now - b._camp.t < 9 + b.id * 1.3) return;
    const eye = b.eye(new V3()), dir = this._lob(eye, t.pos); if (dir) { this.throw(b, 'gas', [eye.x, eye.y, eye.z], [dir.x, dir.y, dir.z]); b._camp = null; }
  }
  /** the throw angle (of 17 tried) whose landing is nearest the target */
  _lob(from, to) {
    const flat = new V3(to.x - from.x, 0, to.z - from.z), n = flat.length(); if (n < 1) return null; flat.multiplyScalar(1 / n);
    let best = null, bd = 3; const a = new V3();
    for (let c = 0; c < 17; c++) {
      const el = -1.15 + c * 0.125; a.set(flat.x * Math.cos(el), Math.sin(el), flat.z * Math.cos(el));
      const tr = trajectory(this.m.arena, from, throwVelocity(a, new V3())); const d = Math.hypot(tr.end.x - to.x, tr.end.z - to.z) + Math.abs(tr.end.y - to.y) * 0.5;
      if (d < bd) { bd = d; best = a.clone(); }
    }
    return best;
  }
}

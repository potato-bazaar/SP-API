// Power-ups online: points for kills buy an attack drone or a missile strike. Everything that hurts is decided here;
// clients only draw it. Numbers match the client's solo code (client/dist/game.js PWRUP) so both modes feel the same.
// Room rules `drone` and `strike` switch each one off.
import * as THREE from 'three';

const V3 = THREE.Vector3;
export const P = {
  kill: 100, head: 50, row: 50, rowFrom: 3, drone: 300, strike: 600, awm: 450,
  droneT: 14, droneHp: 60, droneSpeed: 17, droneDmg: 18, droneCycle: 0.42, droneHit: 0.78, droneRange: 24, droneR: 0.9,
  strikeT: 15, missiles: 5, missileCool: 0.5, missileFly: 1.5, blastKill: 4.5, blastR: 9, blastDmg: 110, selfR: 7, selfDmg: 80,
  planeR: 70, planeH: 62, planeW: 0.42,
};
const r2 = (v) => Math.round(v * 100) / 100, r3 = (v) => Math.round(v * 1000) / 1000;
const v3r = (v) => [r2(v.x), r2(v.y), r2(v.z)];
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

export class ServerPowerups {
  /** @param {any} match the authoritative Match (arena, actors, bots, time, damage, events, S) */
  constructor(match) { this.m = match; this.drones = []; this.missiles = []; }
  on(kind) { return !!(this.m.S && this.m.S[kind] !== false); }
  foe(a, o) { return o !== a && o.alive && !(this.m.teams && o.team === a.team); }
  _pts(a, add) { this.m.events.push({ t: 'pts', id: a.netId, pts: a.pts || 0, row: a.row || 0, add: add || 0 }); }

  // ---------------------------------------------------------------- points
  /** a credited kill: 100, +50 for a head, +50 from the third in a row. Only your own guns, hammer and knife count. */
  onKill(v, killer, info) {
    if (v.human && (v.row || 0) > 0) { v.row = 0; this._pts(v, 0); }
    if (!killer || killer === v || !killer.human) return;
    if (this.m.teams && killer.team === v.team) return;
    const c = info && info.cause; if (c && c !== 'melee') return;
    killer.row = (killer.row || 0) + 1;
    const add = P.kill + (info && info.zone === 0 ? P.head : 0) + (killer.row >= P.rowFrom ? P.row : 0);
    killer.pts = (killer.pts || 0) + add; this._pts(killer, add);
  }
  /** a player asks for a power-up: checked and paid here */
  use(a, kind) {
    const m = this.m; if (!a || !a.human) return;
    const deny = (why) => m.events.push({ t: 'puno', id: a.netId, k: kind, why, pts: a.pts || 0 });
    if (kind !== 'drone' && kind !== 'strike' && kind !== 'awm') return;
    if (kind !== 'awm' && !this.on(kind)) return deny('off');
    if (!a.alive || m.state !== 'live' || !m.weaponsFree || (a.feignK || 0) > 0.5) return deny('now');
    if (kind === 'drone' ? this.drones.some((d) => d.by === a) : kind === 'strike' ? !!a.strike : !!a.awm) return deny('busy');
    if (kind === 'awm' && a.wpn !== 'rifle') return deny('weapon');
    if ((a.pts || 0) < P[kind]) return deny('pts');
    a.pts -= P[kind]; this._pts(a, 0);
    if (kind === 'drone') {
      this.drones.push({ by: a, pos: new V3(a.pos.x, a.pos.y + 2.4, a.pos.z), vel: new V3(), hp: P.droneHp, until: m.time + P.droneT, target: null, fireAt: m.time + 0.6, aaAt: m.time + 1, yaw: a.yaw || 0, kills: 0 });
      m.events.push({ t: 'drone', by: a.netId, on: 1 });
    } else if (kind === 'strike') {
      a.strike = { until: m.time + P.strikeT, left: P.missiles, ready: m.time + 0.4 };
      m.events.push({ t: 'strike', id: a.netId, on: 1, s: P.strikeT, left: P.missiles });
    } else {
      m.extras.awmOn(a);   // same AWM as the air drop: 3 pierce rounds, server owns the numbers
    }
  }

  // ---------------------------------------------------------------- the attack drone
  _endDrone(d, why) { const i = this.drones.indexOf(d); if (i >= 0) this.drones.splice(i, 1); this.m.events.push({ t: 'drone', by: d.by.netId, on: 0, why, p: v3r(d.pos), kills: d.kills }); }
  _stepDrone(d, dt) {
    const m = this.m, now = m.time, a = d.by;
    if (now >= d.until) return this._endDrone(d, 'time');
    if (!d.target || !this.foe(a, d.target)) { let best = null, bd = 1e9; for (const o of m.actors) { if (!this.foe(a, o)) continue; const q = m.arena.dist(o.pos, d.pos); if (q < bd) { bd = q; best = o; } } d.target = best; }
    const tg = d.target, want = new V3();
    if (tg) {
      const hx = m.arena.wrapD(d.pos.x - tg.pos.x), hz = d.pos.z - tg.pos.z, hl = Math.hypot(hx, hz) || 1; d.near = hl < 12;
      if (!d.near || d.tg !== tg) d.ang = Math.atan2(hz, hx); d.tg = tg;   // hold a spot 7 m out; with no clear shot from there, circle the target (below)
      want.set(tg.pos.x + Math.cos(d.ang) * 7, tg.pos.y + 6.5, tg.pos.z + Math.sin(d.ang) * 7);
      if (Math.hypot(m.arena.wrapD(want.x - d.pos.x), want.z - d.pos.z) > 14) want.y = Math.max(want.y, 34);   // cross the block above the roofs
    } else want.set(a.pos.x, a.pos.y + 5, a.pos.z);
    const dv = want.clone().sub(d.pos); dv.x = m.arena.wrapD(dv.x);   // the short way round the ring
    const dl = dv.length(), sp = Math.min(P.droneSpeed, dl * 2.2); if (dl > 0.01) dv.multiplyScalar(sp / dl);
    if (dl > 1) { let h = null; try { h = m.arena.raycast(d.pos.clone(), dv.clone().normalize(), 3.2); } catch { /* keep flying */ } if (h) dv.set(dv.x * 0.15, 9, dv.z * 0.15); }   // a wall ahead: climb over it
    const k = Math.min(1, dt * 3.5); d.vel.x += (dv.x - d.vel.x) * k; d.vel.y += (dv.y - d.vel.y) * k; d.vel.z += (dv.z - d.vel.z) * k; d.pos.addScaledVector(d.vel, dt); m.arena.norm(d.pos);
    const look = tg ? tg.pos : want; d.yaw = Math.atan2(-m.arena.wrapD(look.x - d.pos.x), -(look.z - d.pos.z));
    if (tg && now >= d.fireAt && m.weaponsFree) {
      const c = tg.chest(new V3()), range = m.arena.dist(c, d.pos); let see = false; try { see = m.arena.los(d.pos, c); } catch { /* no shot */ }
      if (see && range < P.droneRange) {
        d.fireAt = now + P.droneCycle; const hit = Math.random() < P.droneHit;
        const e = hit ? c : c.clone().add(new V3((Math.random() - 0.5) * 1.6, (Math.random() - 0.2) * 1.2, (Math.random() - 0.5) * 1.6));
        m.events.push({ t: 'dshot', o: v3r(d.pos), e: v3r(e) });
        if (hit) { m.damage(tg, P.droneDmg, a, { cause: 'drone', dir: m.arena.rel(new V3(), d.pos, c).normalize() }); if (!tg.alive) { d.kills++; d.target = null; } }
      } else { d.fireAt = now + 0.15; if (d.near) d.ang += 0.12; }
    }
    if (now >= d.aaAt) {   // AI snipers with a clear view shoot back (players shoot it themselves: shotAt)
      d.aaAt = now + 0.5;
      for (const b of m.bots) {
        if (!this.foe(a, b)) continue; const e = b.eye(new V3()); if (m.arena.dist(e, d.pos) > 75 || Math.random() > (b === tg ? 0.12 : 0.05)) continue;
        let see = false; try { see = m.arena.los(e, d.pos); } catch { /* no shot */ } if (!see) continue;
        m.events.push({ t: 'fshot', o: v3r(e), e: v3r(d.pos) }); d.hp -= 20; if (d.hp <= 0) return this._endDrone(d, 'down');
      }
    }
  }
  /** a player's round (origin, unit dir): does it pass through an enemy drone before the wall? W: the weapon fired */
  shotAt(shooter, origin, dir, W) {
    if (!this.drones.length) return; let wall = 420; try { const h = this.m.arena.raycast(origin, dir, 420); if (h) wall = h.distance; } catch { /* open sky */ }
    for (const d of this.drones.slice()) {
      if (d.by === shooter || (this.m.teams && d.by.team === shooter.team)) continue;
      const rv = this.m.arena.rel(new V3(), origin, d.pos), ox = rv.x, oy = rv.y, oz = rv.z, along = ox * dir.x + oy * dir.y + oz * dir.z; if (along < 0 || along > wall) continue;
      if (ox * ox + oy * oy + oz * oz - along * along > P.droneR * P.droneR) continue;
      d.hp -= W && W.dmg ? W.dmg[1] : 40; this.m.events.push({ t: 'dhit', id: shooter.netId, kill: d.hp <= 0 });
      if (d.hp <= 0) this._endDrone(d, 'down');
    }
  }

  // ---------------------------------------------------------------- the missile strike
  planeAt(t, y, out = new V3()) { const a = t * P.planeW; return out.set(Math.cos(a) * P.planeR, y + P.planeH, Math.sin(a) * P.planeR); }
  /** the striking player marks a spot (x, z): the missile lands there P.missileFly seconds later */
  missile(a, p) {
    const m = this.m, s = a && a.strike; if (!s || !a.alive || m.time < s.ready || s.left <= 0 || m.time > s.until) return;
    if (!Array.isArray(p) || p.length !== 2 || !p.every(Number.isFinite)) return;
    const ring = m.arena.ring; const x = ring ? m.arena.wrapX(p[0]) : clamp(p[0], -90, 90), z = ring ? clamp(p[1], -m.arena.zmax, m.arena.zmax) : clamp(p[1], -90, 90); let y = 0;
    try { const top = ring ? ring.R - 6 : 140; const h = m.arena.raycast(new V3(x, top, z), new V3(0, -1, 0), 200); if (h && h.point) y = h.point.y; } catch { /* the street */ }
    s.left--; s.ready = m.time + P.missileCool; const to = new V3(x, y, z), from = ring ? new V3(x, ring.R - 10, z) : this.planeAt(m.time, a.pos.y);   // the ring has no sky for a plane: it falls from the hub
    this.missiles.push({ by: a, to, at: m.time + P.missileFly });
    m.events.push({ t: 'msl', by: a.netId, o: v3r(from), p: v3r(to), at: r3(m.time + P.missileFly), left: s.left });
    if (s.left <= 0) s.until = Math.min(s.until, m.time + P.missileFly + 0.5);
  }
  _blast(ms) {
    const m = this.m, a = ms.by, c = new V3(); m.events.push({ t: 'boom', p: v3r(ms.to) });
    for (const o of m.actors) {
      if (!o.alive) continue; const d = m.arena.dist(o.chest(c), ms.to);
      if (o === a) { if (d < P.selfR) m.damage(o, Math.round(P.selfDmg * (1 - d / P.selfR)), null, { cause: 'missile' }); continue; }
      if (d > P.blastR) continue;
      m.damage(o, d < P.blastKill ? 999 : Math.round(P.blastDmg * (1 - (d - P.blastKill) / (P.blastR - P.blastKill))), a, { cause: 'missile' });
    }
  }

  // ---------------------------------------------------------------- per tick, snapshot, rejoin
  update(dt) {
    const m = this.m, now = m.time;
    for (const d of this.drones.slice()) this._stepDrone(d, dt);
    for (let i = this.missiles.length - 1; i >= 0; i--) { const ms = this.missiles[i]; if (now < ms.at) continue; this.missiles.splice(i, 1); this._blast(ms); }
    for (const a of m.humans) { const s = a.strike; if (s && (!a.alive || now > s.until)) { a.strike = null; m.events.push({ t: 'strike', id: a.netId, on: 0 }); } }
  }
  /** snapshot rows: [owner, x, y, z, yaw, hp] */
  rows() { return this.drones.map((d) => [d.by.netId, r2(d.pos.x), r2(d.pos.y), r2(d.pos.z), r3(d.yaw), Math.max(0, Math.ceil(d.hp))]); }
  /** what a rejoining client needs to know */
  state(a) { const out = []; if (a && a.human) out.push({ t: 'pts', id: a.netId, pts: a.pts || 0, row: a.row || 0, add: 0 }); for (const h of this.m.humans) if (h.strike) out.push({ t: 'strike', id: h.netId, on: 1, s: Math.max(0, h.strike.until - this.m.time), left: h.strike.left }); return out; }
}

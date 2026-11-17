// Server side of the solo extras that also run online (game.js ScExtras, switched on per feature in its NET list).
// Each one's truths (blood, bullets, kills) live here; the client only draws them. So far: the prayer, the half-time
// air drop and its AWM, the RPG-7. Numbers are the client's solo ones (ScExtras.pray, post() "air drop", awmOn/awmOff,
// Vi.awm, _rpgStep/_boom), so the two modes play the same.
import * as THREE from 'three';
import { WEAPONS } from '../../client/src/combat.js';

const V3 = THREE.Vector3;

export const X = {
  prayBlood: 0.5,    // keep half your blood (rounded up, never below 1)
  prayBullets: 0.1,  // lose a tenth of each gun's bullets (rounded up): from the reserve first, then the magazine
  prayView: 5,       // seconds of the angel's eyes (the view from above, the body stays put)
  praySee: 20,       // seconds of sight through walls, counted from the prayer (so 15 s after the eyes close)
  // the air drop: a red beam 12 s before half time marks a spawn roof; at half time the crate falls from 70 m above it
  // at 16 m/s and rests 0.4 m over the roof (smoke); standing within 2.4 m of it (and 3 m of its height) for 1.5 s opens it
  dropWarn: 12, dropFrom: 70, dropSpeed: 16, dropRest: 0.4, dropAway: 14,
  pickR: 2.4, pickDy: 3, pickHold: 1.5,
  // the RPG-7 (solo _rpgStep / _boom): 2 rockets a match, 2.4 s between launches; launched 1.1 m ahead of the camera
  // (0.12 m lower) at 58 m/s, 2.5 m/s² of drop, bursts in the air after 6 s. It goes off at the first wall (its ray looks
  // 0.3 m ahead) or when it passes within 1.5 m of someone's chest. Blast: anyone whose chest is within 3.6 m dies, out
  // to 7 m it falls off from 150 to 0; no line of sight is checked (solo doesn't). The shooter: 85 falling off to 0 at
  // 6 m from the feet, credited to no one ("OWN ROCKET")
  rpgAmmo: 2, rpgCool: 2.4, rpgAhead: 1.1, rpgLow: 0.12, rpgSpeed: 58, rpgG: 2.5, rpgLife: 6, rpgLook: 0.3, rpgFuse: 1.5,
  rpgKill: 3.6, rpgR: 7, rpgDmg: 150, rpgSelfR: 6, rpgSelf: 85,
};
export const RPG_STEP = 1 / 30;   // the rocket's fixed step (the match tick); the clients fly the same steps
const RPG_STEPS = Math.round(X.rpgLife / RPG_STEP);   // 180: the step after the 180th bursts it (solo: flight time > 6 s)
/** a rocket's flight from o at velocity v (the rounded numbers the clients get) until a wall or the 6 s fuse, one point
 *  per step: pts[k] = where it is k steps after launch. wall: the last point is where it hit something. No one is
 *  looked for here (they move): ServerExtras._rockets checks each step against the living as it is reached */
export function rocketPath(arena, o, v) {
  const p = new V3(...o), vel = new V3(...v), dir = new V3(), pts = [[p.x, p.y, p.z]], dt = RPG_STEP;
  for (let k = 1; ; k++) {
    vel.y -= X.rpgG * dt; const st = vel.length() * dt; dir.copy(vel).normalize();
    const hit = arena.raycast(p.clone(), dir, st + X.rpgLook);
    if (hit && hit.point) p.copy(hit.point); else p.addScaledVector(dir, st);
    pts.push([p.x, p.y, p.z]);
    if (hit || k > RPG_STEPS) return { pts, wall: !!hit };
  }
}
// the AWM (the client's Vi.awm): the rifle's handling, 3 bullets and no reserve, a slower bolt, and every hit kills.
// key stays 'rifle': it replaces the rifle in the hand (the client's `fire` says w:'rifle'), and the kill feed reads as
// a rifle kill (head or plain), as in solo
export const AWM = { ...WEAPONS.rifle, name: 'AWM', mag: 3, reserve: 0, dmg: [400, 400, 400], cycle: WEAPONS.rifle.cycle * 1.3, pierce: true };
const r2 = (v) => Math.round(v * 100) / 100, r3 = (v) => Math.round(v * 1000) / 1000, clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const cut = (w) => { const c = Math.ceil((w.mag + w.reserve) * X.prayBullets), r = Math.min(c, w.reserve); w.reserve -= r; w.mag = Math.max(0, w.mag - (c - r)); };

export class ServerExtras {
  /** @param {any} match the authoritative Match (actors, events, weaponsFree, _ammo) */
  constructor(match) {
    this.m = match; this.prayed = new Set();            // netIds that have prayed this match (kept through respawns)
    this.drop = { ph: 0, p: null, at: 0, by: null };    // ph: 0 not yet, 1 beam, 2 falling, 3 landed (smoke), 4 taken
    this.rpgs = new Map();                               // netId -> { left, ready }: rockets left this match (kept through respawns)
    this.rockets = []; this.rid = 0;                     // rockets in flight
  }

  /** the prayer: once a match, alive, weapons free. Pays in blood and bullets, then the client opens the angel's eyes */
  pray(a) {
    const m = this.m; if (!a || !a.human) return;
    const why = !a.alive ? 'dead' : m.state !== 'live' || !m.weaponsFree ? 'early' : this.prayed.has(a.netId) ? 'used' : null;
    if (why) { m.events.push({ t: 'prayno', id: a.netId, why }); return; }
    this.prayed.add(a.netId);
    // blood: set straight, not through damage(), so spawn protection can't make it free (solo ignores protection too)
    const hp = Math.max(1, Math.ceil(a.hp * X.prayBlood)), amt = a.hp - hp; a.hp = hp;
    m.events.push({ t: 'dmg', id: a.netId, by: null, amt: Math.round(amt), hp, z: -1, cause: 'pray' });
    for (const k of ['rifle', 'pistol']) cut(a.ammo[k]);
    if (a.awm) cut(a.awm);   // holding the AWM: the rifle waiting for it pays its tenth too (solo cuts its saved rifle, sv)
    m.events.push({ t: 'ammo', id: a.netId, ammo: m._ammo(a) });
    m.events.push({ t: 'pray', id: a.netId, view: X.prayView, see: X.praySee });
  }

  /** per tick: the air drop's timeline and pickup, and the AWM going back to the rifle */
  update(dt) { this._drop(dt); this._awmStep(); this._rockets(); }

  // ---------------------------------------------------------------- the air drop
  _drop(dt) {
    const m = this.m, D = this.drop, half = m.Z.duration / 2;
    if (D.ph === 0 && m.time >= half - X.dropWarn) { D.p = this._pick(); D.at = half; D.ph = 1; m.events.push(this._dropMsg()); }
    if (D.ph === 1 && m.time >= D.at) { D.ph = 2; m.events.push(this._dropMsg()); }
    if (D.ph === 2 && m.time >= D.at + (X.dropFrom - X.dropRest) / X.dropSpeed) { D.ph = 3; for (const a of m.humans) a.dropHold = 0; m.events.push(this._dropMsg()); }
    if (D.ph !== 3) return;
    // the first player to stay by it for 1.5 s takes it. Players only: the AI snipers don't go for it (solo has no rival for it)
    let best = null;
    for (const a of m.humans) {
      const near = a.alive && Math.hypot(a.pos.x - D.p.x, a.pos.z - D.p.z) < X.pickR && Math.abs(a.pos.y - D.p.y) < X.pickDy;
      a.dropHold = near ? (a.dropHold || 0) + dt : 0;
      if (a.dropHold >= X.pickHold && (!best || a.dropHold > best.dropHold)) best = a;
    }
    if (best) { D.ph = 4; D.by = best.netId; m.events.push(this._dropMsg()); this.awmOn(best); }
  }
  /** which roof: a spawn roof (as solo) with no living player within 14 m of it; the crate sits 1.2 m off the spawn point */
  _pick() {
    const m = this.m, sp = m.arena.spawns, alive = m.humans.filter((a) => a.alive);
    const ok = sp.filter((s) => alive.every((a) => Math.hypot(s.spawnPt[0] - a.pos.x, s.spawnPt[2] - a.pos.z) > X.dropAway));
    const L = ok.length ? ok : sp, s = L[Math.floor(Math.random() * L.length)];
    return { x: r2(s.spawnPt[0] + 1.2), y: r2(s.spawnPt[1]), z: r2(s.spawnPt[2] + 1.2) };   // rounded: the clients get the same numbers
  }
  /** {t:'drop', ph, p, at[, by][, re]}: at = when it starts to fall (half time); re = a state replay for a reconnecting player */
  _dropMsg(re) { const D = this.drop; const e = { t: 'drop', ph: D.ph, p: [D.p.x, D.p.y, D.p.z], at: r3(D.at) }; if (D.by) e.by = D.by; if (re) e.re = 1; return e; }

  // ---------------------------------------------------------------- the AWM
  /** the crate opened: the rifle's bullets wait (solo's sv) and the AWM's 3 take their place. Fire validation, damage and
   *  the through-walls shot follow from rifleOf() / pierce() while a.awm is set (engine.js fire) */
  awmOn(a) {
    const m = this.m, st = a.ammo.rifle;
    a.awm = { mag: st.mag, reserve: st.reserve, ammo: a.ammo };   // ammo: whose kit this is (a respawn makes a new one)
    st.mag = AWM.mag; st.reserve = AWM.reserve;
    if (a.reloadW === 'rifle') { a.reloadUntil = 0; a.reloadW = null; }   // a rifle reload in progress is dropped (solo: reloadT = -1)
    m.events.push({ t: 'awm', id: a.netId, on: 1, ammo: m._ammo(a) }, { t: 'ammo', id: a.netId, ammo: m._ammo(a) });
  }
  /** back to the rifle and its waiting bullets */
  awmOff(a) {
    const m = this.m, s = a.awm; a.awm = null;
    if (s.ammo === a.ammo) { a.ammo.rifle.mag = s.mag; a.ammo.rifle.reserve = s.reserve; }
    m.events.push({ t: 'awm', id: a.netId, on: 0, ammo: m._ammo(a) }, { t: 'ammo', id: a.netId, ammo: m._ammo(a) });
  }
  /** as solo: on death, or once the last bullet is out and its bolt has cycled */
  _awmStep() {
    for (const a of this.m.humans) {
      if (!a.awm) continue; const st = a.ammo.rifle;
      if (a.awm.ammo !== a.ammo || !a.alive || (st.mag <= 0 && this.m.time >= st.ready)) this.awmOff(a);
    }
  }
  /** the numbers a rifle shot from `a` uses */
  rifleOf(a) { return a && a.awm ? AWM : WEAPONS.rifle; }
  /** solo's pierce(): the AWM's shot ignores walls (the first sniper along the line within 420 m is hit). Only the shot's
   *  own raycasts are switched off: line-of-sight checks (bots) go to the BVH directly and still see walls */
  pierce(fn) { const A = this.m.arena; A.raycast = () => null; try { return fn(); } finally { delete A.raycast; } }

  // ---------------------------------------------------------------- the RPG-7
  /** rockets `a` has left this match */
  rpgLeft(a) { const s = this.rpgs.get(a.netId); return s ? s.left : X.rpgAmmo; }
  /** a launch from the client: o = its rocket's start (1.1 m ahead of the camera), d = the camera's direction.
   *  Not rewound for lag: the rocket is a 58 m/s projectile with a 7 m blast flown here tick by tick, so it meets everyone
   *  where they are on the server (as a gas can does), and every client draws the server's flight and burst point */
  rpg(a, o, d) {
    const m = this.m; if (!a || !a.human) return;
    const s = this.rpgs.get(a.netId) || { left: X.rpgAmmo, ready: 0 };
    // solo's checks: alive, weapons free, rifle in hand (the launcher replaces it), not with the AWM, rockets left, 2.4 s since
    // the last (a little slack for jitter, as a shot's cycle has)
    const why = !a.alive ? 'dead' : m.state !== 'live' || !m.weaponsFree ? 'early' : a.awm ? 'awm' : s.left <= 0 ? 'empty'
      : a.wpn !== 'rifle' ? 'weapon' : m.time < s.ready - 0.12 ? 'cool' : null;
    const dir = new V3(...d);
    if (!why && dir.lengthSq() < 0.5) return;
    if (why) { m.events.push({ t: 'rpgno', id: a.netId, why, left: s.left }); return; }
    dir.normalize();
    const eye = a.eye(new V3()); let org = new V3(...o);
    // a start far from the body is not believed (the camera may be 2.2 m off the eye, as for a shot, plus the 1.1 m ahead)
    if (org.distanceTo(eye) > 2.2 + X.rpgAhead) { org = eye.clone().addScaledVector(dir, X.rpgAhead); org.y -= X.rpgLow; }
    // nor one on the far side of a wall from the eye: then it starts against that wall (and goes off there)
    const gap = org.clone().sub(eye), gl = gap.length();
    if (gl > 1e-3) { const h = m.arena.raycast(eye.clone(), gap.clone().multiplyScalar(1 / gl), gl); if (h && h.point) org.copy(h.point).addScaledVector(gap, -0.05 / gl); }
    s.left--; s.ready = m.time + X.rpgCool; this.rpgs.set(a.netId, s);
    if (a.protectUntil > m.time) a.protectUntil = 0;   // firing ends spawn protection
    const ov = [r3(org.x), r3(org.y), r3(org.z)], vv = [r3(dir.x * X.rpgSpeed), r3(dir.y * X.rpgSpeed), r3(dir.z * X.rpgSpeed)];
    const r = { id: ++this.rid, by: a, o: ov, v: vv, at: r3(m.time), k: 0, ...rocketPath(m.arena, ov, vv) };
    this.rockets.push(r);
    m.events.push(this._rpgMsg(r));
  }
  /** {t:'rpg', id, by, o, v, at, left[, re]}: a rocket in the air. Clients fly o/v in the same 1/30 s steps from at */
  _rpgMsg(r, re) { const e = { t: 'rpg', id: r.id, by: r.by.netId, o: r.o, v: r.v, at: r.at, left: this.rpgLeft(r.by) }; if (re) e.re = 1; return e; }
  /** per tick: each rocket takes the steps it is due (one a tick); a step that passes within 1.5 m of a living chest
   *  sets it off there (not the shooter's, as in solo). The last step is the wall or the 6 s burst */
  _rockets() {
    const m = this.m, a = new V3(), b = new V3(), sg = new V3(), c = new V3(), q = new V3();
    for (let i = this.rockets.length - 1; i >= 0; i--) {
      const r = this.rockets[i]; let at = null;
      while (!at && r.k < r.pts.length - 1 && m.time + 1e-6 >= r.at + (r.k + 1) * RPG_STEP) {
        r.k++; a.set(...r.pts[r.k - 1]); b.set(...r.pts[r.k]);
        if (r.k === r.pts.length - 1) { at = b.clone(); break; }
        sg.copy(b).sub(a); const sl2 = sg.lengthSq();
        for (const v of m.actors) {
          if (v === r.by || !v.alive) continue; v.chest(c);
          const k = sl2 > 1e-6 ? clamp(c.clone().sub(a).dot(sg) / sl2, 0, 1) : 1; q.copy(a).addScaledVector(sg, k);
          if (q.distanceTo(c) < X.rpgFuse) { at = q.clone(); break; }
        }
      }
      if (at) { this.rockets.splice(i, 1); this._rpgBoom(r, at); }
    }
  }
  /** the burst (solo _boom): everyone else by their chest, then the shooter by their feet, uncredited */
  _rpgBoom(r, p) {
    const m = this.m, by = r.by, c = new V3();
    m.events.push({ t: 'rpgx', id: r.id, by: by.netId, p: [r2(p.x), r2(p.y), r2(p.z)] });
    for (const v of m.actors) {
      if (v === by || !v.alive) continue; const d = v.chest(c).distanceTo(p); if (d > X.rpgR) continue;
      const amt = d < X.rpgKill ? 999 : Math.round(X.rpgDmg * (1 - (d - X.rpgKill) / (X.rpgR - X.rpgKill)));
      if (amt > 0) m.damage(v, amt, by, { cause: 'rpg' });
    }
    if (by.alive) { const d = by.pos.distanceTo(p); if (d < X.rpgSelfR) { const amt = Math.round(X.rpgSelf * (1 - d / X.rpgSelfR)); if (amt > 0) m.damage(by, amt, null, { cause: 'rpg' }); } }
  }

  /** what a reconnecting player missed: the crate's state, whether they hold the AWM, their rockets left and the rockets
   *  in the air (rooms.js startMsg, rejoin) */
  state(a) {
    const m = this.m, out = [];
    if (this.drop.ph >= 1) out.push(this._dropMsg(true));
    if (a && a.human) out.push({ t: 'awm', id: a.netId, on: a.awm ? 1 : 0, ammo: m._ammo(a), re: 1 });
    if (a && a.human) out.push({ t: 'rpgleft', id: a.netId, left: this.rpgLeft(a), re: 1 });
    for (const r of this.rockets) out.push(this._rpgMsg(r, true));
    return out;
  }
}

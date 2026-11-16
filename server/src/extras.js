// Server side of the solo extras that also run online (game.js ScExtras, switched on per feature in its NET list).
// Each one's truths (blood, bullets, kills) live here; the client only draws them. So far: the prayer, the half-time
// air drop and its AWM. Numbers are the client's solo ones (ScExtras.pray, post() "air drop", awmOn/awmOff, Vi.awm),
// so the two modes play the same.
import { WEAPONS } from '../../client/src/combat.js';

export const X = {
  prayBlood: 0.5,    // keep half your blood (rounded up, never below 1)
  prayBullets: 0.1,  // lose a tenth of each gun's bullets (rounded up): from the reserve first, then the magazine
  prayView: 5,       // seconds of the angel's eyes (the view from above, the body stays put)
  praySee: 20,       // seconds of sight through walls, counted from the prayer (so 15 s after the eyes close)
  // the air drop: a red beam 12 s before half time marks a spawn roof; at half time the crate falls from 70 m above it
  // at 16 m/s and rests 0.4 m over the roof (smoke); standing within 2.4 m of it (and 3 m of its height) for 1.5 s opens it
  dropWarn: 12, dropFrom: 70, dropSpeed: 16, dropRest: 0.4, dropAway: 14,
  pickR: 2.4, pickDy: 3, pickHold: 1.5,
};
// the AWM (the client's Vi.awm): the rifle's handling, 3 bullets and no reserve, a slower bolt, and every hit kills.
// key stays 'rifle': it replaces the rifle in the hand (the client's `fire` says w:'rifle'), and the kill feed reads as
// a rifle kill (head or plain), as in solo
export const AWM = { ...WEAPONS.rifle, name: 'AWM', mag: 3, reserve: 0, dmg: [400, 400, 400], cycle: WEAPONS.rifle.cycle * 1.3, pierce: true };
const r2 = (v) => Math.round(v * 100) / 100, r3 = (v) => Math.round(v * 1000) / 1000;
const cut = (w) => { const c = Math.ceil((w.mag + w.reserve) * X.prayBullets), r = Math.min(c, w.reserve); w.reserve -= r; w.mag = Math.max(0, w.mag - (c - r)); };

export class ServerExtras {
  /** @param {any} match the authoritative Match (actors, events, weaponsFree, _ammo) */
  constructor(match) {
    this.m = match; this.prayed = new Set();            // netIds that have prayed this match (kept through respawns)
    this.drop = { ph: 0, p: null, at: 0, by: null };    // ph: 0 not yet, 1 beam, 2 falling, 3 landed (smoke), 4 taken
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
  update(dt) { this._drop(dt); this._awmStep(); }

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

  /** what a reconnecting player missed: the crate's state and whether they hold the AWM (rooms.js startMsg, rejoin) */
  state(a) {
    const m = this.m, out = [];
    if (this.drop.ph >= 1) out.push(this._dropMsg(true));
    if (a && a.human) out.push({ t: 'awm', id: a.netId, on: a.awm ? 1 : 0, ammo: m._ammo(a), re: 1 });
    return out;
  }
}

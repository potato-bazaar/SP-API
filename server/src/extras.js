// Server side of the solo extras that also run online (game.js ScExtras, switched on per feature in its NET list).
// Each one's truths (blood, bullets, kills) live here; the client only draws them. So far: the prayer.
// Numbers are the client's solo ones (ScExtras.pray), so the two modes play the same.

export const X = {
  prayBlood: 0.5,    // keep half your blood (rounded up, never below 1)
  prayBullets: 0.1,  // lose a tenth of each gun's bullets (rounded up): from the reserve first, then the magazine
  prayView: 5,       // seconds of the angel's eyes (the view from above, the body stays put)
  praySee: 20,       // seconds of sight through walls, counted from the prayer (so 15 s after the eyes close)
};

export class ServerExtras {
  /** @param {any} match the authoritative Match (actors, events, weaponsFree, _ammo) */
  constructor(match) { this.m = match; this.prayed = new Set(); }   // netIds that have prayed this match (kept through respawns)

  /** the prayer: once a match, alive, weapons free. Pays in blood and bullets, then the client opens the angel's eyes */
  pray(a) {
    const m = this.m; if (!a || !a.human) return;
    const why = !a.alive ? 'dead' : m.state !== 'live' || !m.weaponsFree ? 'early' : this.prayed.has(a.netId) ? 'used' : null;
    if (why) { m.events.push({ t: 'prayno', id: a.netId, why }); return; }
    this.prayed.add(a.netId);
    // blood: set straight, not through damage(), so spawn protection can't make it free (solo ignores protection too)
    const hp = Math.max(1, Math.ceil(a.hp * X.prayBlood)), amt = a.hp - hp; a.hp = hp;
    m.events.push({ t: 'dmg', id: a.netId, by: null, amt: Math.round(amt), hp, z: -1, cause: 'pray' });
    for (const k of ['rifle', 'pistol']) {
      const w = a.ammo[k], cut = Math.ceil((w.mag + w.reserve) * X.prayBullets), r = Math.min(cut, w.reserve);
      w.reserve -= r; w.mag = Math.max(0, w.mag - (cut - r));
    }
    m.events.push({ t: 'ammo', id: a.netId, ammo: m._ammo(a) });
    m.events.push({ t: 'pray', id: a.netId, view: X.prayView, see: X.praySee });
  }

  /** per tick: nothing yet (the AWM drop, rockets and dogs will live here) */
  update() {}
}

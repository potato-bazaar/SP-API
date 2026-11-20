// GLASS CITY: what the browser and the server both need to know about its glass. No imports: the browser bundle carries
// a verbatim copy (client/tools/loop/patch_game.py pastes it), the server imports it.
//
// The rules, in one place:
//   * Every pane is solid: what you see is what stops you.
//   * A round that meets a pane bounces off it, angle out = angle in, and keeps three quarters of its force (KEEP).
//     It can bounce three times (BOUNCES); then the next pane stops it. After a bounce it has 140 m left in it (REACH).
//   * A bounced round is anyone's. It can come back and hit whoever fired it, once it has flown 15 m (OWN): a wall you
//     are standing against will not shoot you.
//   * Every round a pane meets counts against it. The third breaks it (HP), and the round that breaks it flies on
//     through the gap. A broken pane is gone for everybody: for rounds, for sight, and for whoever stood on it.
export const GLASS_RULES = { KEEP: 0.75, BOUNCES: 3, REACH: 140, OWN: 15, HP: 3 };

// The pack (client/tools/pack_glass.py): corners and colours of every triangle, the cables, the textured parts.
export function glassParse(buf) {
  const u8 = new Uint8Array(buf), dv = new DataView(buf); if (String.fromCharCode(u8[0], u8[1], u8[2], u8[3]) !== 'SCGL') throw new Error('bad glass pack');
  const hn = dv.getUint32(4, true), H = JSON.parse(new TextDecoder().decode(u8.subarray(8, 8 + hn))), lo = H.lo, sz = [H.hi[0] - lo[0], H.hi[1] - lo[1], H.hi[2] - lo[2]]; let o = 8 + hn;
  const pos = (n) => { const q = new Uint16Array(buf.slice(o, o + n * 6)), p = new Float32Array(n * 3); for (let i = 0; i < n * 3; i++) p[i] = lo[i % 3] + q[i] / 65535 * sz[i % 3]; o += n * 6; return p; };
  // one colour a triangle (or a line), square-root coded: spread to each of its corners
  const col = (n, rep) => { const f = new Float32Array(n * 3 * rep); for (let i = 0; i < n; i++) { const r = (u8[o + i * 3] / 255) ** 2, g = (u8[o + i * 3 + 1] / 255) ** 2, b = (u8[o + i * 3 + 2] / 255) ** 2; for (let k = 0; k < rep; k++) { const j = (i * rep + k) * 3; f[j] = r; f[j + 1] = g; f[j + 2] = b; } } o += n * 3; return f; };
  const tp = pos(H.tris * 3), tc = col(H.tris, 3), lp = pos(H.lines * 2), lw = new Float32Array(H.lines); for (let i = 0; i < H.lines; i++) lw[i] = u8[o + i] / 255 * (H.wmax || 1); o += H.lines + (-H.lines & 3);      // the wires: two ends a segment, and its thickness
  const sh = H.shade ? u8.slice(o, o + H.rects * 4) : null; if (sh) o += H.rects * 4;      // how much of the red light each corner of each pane sees
  const sg = H.cells ? u8.slice(o, o + H.rects) : null; if (sg) o += H.rects + (-H.rects & 3);      // how many steps the stroke took along each pane
  // textured parts: corners, where each is on the picture, and the picture itself (a JPEG)
  const tx = (H.tex || []).map((t) => { const p = pos(t.tris * 3), uv = new Float32Array(buf.slice(o, o + t.tris * 24)); o += t.tris * 24; const jpg = u8.slice(o, o + t.jpg); o += t.jpg + (-t.jpg & 3); return { p, uv, jpg, solid: !!t.solid, ground: !!t.ground }; });
  return { H, tp, tc, lp, lw, sh, sg, tx };
}

// Everything solid as one triangle list, in a fixed order: the arena's own shapes (the plate; `base` is a GeoBuilder's
// arrays), the catwalks and tower sides, the panes (two triangles each), the towers. pane0: the first pane's first
// corner. The collision mesh on both sides is built from exactly this, so a pane has the same number everywhere.
export function glassSolid(K, base) {
  const H = K.H, F = H.fixed, F0 = H.free || 0, NP = H.rects || 0, np0 = base.nv * 3;
  const parts = [K.tp.subarray(F0 * 9, (F + NP * 2) * 9)].concat(K.tx.filter((t) => t.solid).map((t) => t.p)), ns = parts.reduce((n, a) => n + a.length, 0) / 3;
  const position = new Float32Array(np0 + ns * 3), index = new Uint32Array(base.ni + ns); position.set(base.position.subarray(0, np0)); let o = np0; for (const a of parts) { position.set(a, o); o += a.length; }
  index.set(base.index.subarray(0, base.ni)); for (let i = 0; i < ns; i++) index[base.ni + i] = base.nv + i;
  return { position, index, pane0: base.nv + (F - F0) * 3, panes: NP };
}

// Teach an arena about its glass. S: what glassSolid returned (position must be the very array the collision mesh was
// built on, so that a broken pane can be taken out of it). V3: the Vector3 class in use.
export function glassInstall(arena, S, V3) {
  const R = GLASS_RULES, pos = S.position, p0 = S.pane0 * 3, n = S.panes, orig = pos.slice(p0, p0 + n * 18), hp = new Uint8Array(n).fill(R.HP);
  const _n = new V3(), _e = new V3(), _q = new V3(), _r = new V3();
  const G = arena.glass = { n, hp, orig, broken: 0, onBreak: null, onHit: null,
    // which pane a ray hit, or -1. (The mesh's triangles get reordered when its tree is built: a triangle is known by its first corner.)
    paneAt(h) { if (!h || h.dyn || h.faceIndex == null) return -1; const v = arena.bvh.geometry.index.array[h.faceIndex * 3] - S.pane0; return v >= 0 && v < n * 6 ? (v / 6) | 0 : -1; },
    // the pane's four corners as it was built: [x, y, z] * 4
    corners(id) { const o = id * 18; return [[orig[o], orig[o + 1], orig[o + 2]], [orig[o + 3], orig[o + 4], orig[o + 5]], [orig[o + 6], orig[o + 7], orig[o + 8]], [orig[o + 15], orig[o + 16], orig[o + 17]]]; },
    // a round met this pane. Returns true if that broke it.
    hit(id, by, at) { if (id < 0 || id >= n || !hp[id]) return false; hp[id]--; if (hp[id]) { if (G.onHit) G.onHit(id, hp[id], at); return false; } G.smash(id, by, at); return true; },
    smash(id, by, at) { hp[id] = 0; G.broken++; const o = p0 + id * 18; for (let k = 0; k < 18; k += 3) { pos[o + k] = 0; pos[o + k + 1] = -9999; pos[o + k + 2] = 0; } arena.bvh.refit(); G.unfloor(id); if (G.onBreak) G.onBreak(id, by, at); },
    // the floor a broken pane was: nobody's ground any more
    unfloor(id) { const c = G.corners(id); let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9, y0 = 1e9, y1 = -1e9; for (const p of c) { x0 = Math.min(x0, p[0]); x1 = Math.max(x1, p[0]); y0 = Math.min(y0, p[1]); y1 = Math.max(y1, p[1]); z0 = Math.min(z0, p[2]); z1 = Math.max(z1, p[2]); }
      for (const r of arena.roofs) { if (r.roofY < y0 - 0.7 || r.roofY > y1 + 0.7 || r.x1 < x0 || r.x0 > x1 || r.z1 < z0 || r.z0 > z1) continue; let lost = 0;
        const i0 = Math.max(0, Math.floor((x0 - r.ox) / arena.cell)), i1 = Math.min(r.nx - 1, Math.floor((x1 - r.ox) / arena.cell)), j0 = Math.max(0, Math.floor((z0 - r.oz) / arena.cell)), j1 = Math.min(r.nz - 1, Math.floor((z1 - r.oz) / arena.cell));
        for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) { const k = j * r.nx + i; if (!r.m[k]) continue; if (arena.groundY(r.ox + (i + 0.5) * arena.cell, r.oz + (j + 0.5) * arena.cell, r.roofY + 0.7, 1.4) == null) { r.m[k] = 0; lost++; } }
        if (!lost) continue; r.cells = r.cells.filter((k) => r.m[k]); if (r.perch && r.perch.length) r.perch = r.perch.filter((k) => r.m[k]);
        if (r.cells.length < 6) { r.cells = []; r.perch = []; for (const q of arena.roofs) if (q.links.length) q.links = q.links.filter((e) => e.to !== r.i && q !== r); } } },   // too little left to be a roof: no way leads there any more
    // One round, all the way: straight, off a pane, off another, until it meets a sniper, something that is not a pane, or runs out.
    shot(game, shooter, origin, dir, muzzle, wpn, rayActors) {
      const fx = game.fx, au = game.audio, gear = game.gear, me = game.headless ? null : game.player;
      shooter.shots++; shooter.lastShot = game.time; shooter.lastShotPos.copy(origin);
      const o = origin.clone(), d = dir.clone(), from = muzzle.clone(), end = new V3(); let power = 1, left = 420, ah = null, wall = null, far = 0, bounces = 0, whizzed = false;
      for (let leg = 0; leg < 12; leg++) {
        const wh = arena.raycast(o, d, left), tW = wh ? wh.distance : left;
        ah = rayActors(game.actors, o, d, tW, bounces ? null : shooter, arena);                    // after a bounce the round is anyone's...
        if (ah && ah.actor === shooter && far + ah.t < R.OWN) ah = rayActors(game.actors, o, d, tW, shooter, arena);   // ...but not its shooter's in the first few metres
        const t = ah ? ah.t : tW; end.copy(o).addScaledVector(d, t); far += t;
        if (gear && gear.shotWorld) gear.shotWorld(shooter, o, end);       // lamps, eggs and cables on the way
        fx.threads.shot(from, end);
        // a round passing close: the player hears it, a bot ducks
        if (me && me.alive && shooter !== me && !whizzed && !(ah && ah.actor === me)) { _q.copy(game.listenerPos).sub(o); const al = Math.max(0, Math.min(t, _q.dot(d))); _r.copy(d).multiplyScalar(al); if (_r.distanceTo(_q) < 2.4 && al > 4) { whizzed = true; au.whiz(game.panOf(_r.add(o))); game.hud.threat(origin, 0.6); me.suppress = Math.min(1, (me.suppress || 0) + 0.5); } }
        for (const b of game.bots) { if (!b.alive || b === shooter || (ah && ah.actor === b)) continue; _q.copy(b.eye(_e)).sub(o); const al = _q.dot(d); if (al < 3 || al > t + 1) continue; if (_q.lengthSq() - al * al < 2.2) b.nearMiss(shooter); }
        if (ah || !wh) break;
        const id = G.paneAt(wh); if (id < 0) { wall = wh; break; }       // not a pane (the ground, a tower, a catwalk, a crate): the round stops here
        _n.copy(wh.face.normal); if (_n.dot(d) > 0) _n.negate(); const s = -d.dot(_n), broke = G.hit(id, shooter, end);
        if (game.glassFx) game.glassFx(id, end, _n, broke, shooter);
        if (broke) o.copy(end).addScaledVector(d, 0.03);                 // it shattered: the round flies on through the gap
        else if (bounces < R.BOUNCES) { d.addScaledVector(_n, 2 * s).normalize(); o.copy(end).addScaledVector(_n, 0.03); power *= R.KEEP; bounces++; left = Math.min(left, R.REACH + t); }
        else { wall = wh; break; }
        left -= t; from.copy(end); if (left < 1) break;
      }
      const dS = shooter === me ? 0 : origin.distanceTo(game.listenerPos || origin), pan = shooter === me || !game.panOf ? 0 : game.panOf(origin); au.shot(dS, pan, wpn.key === 'pistol'); if (shooter !== me) fx.particles.flash(muzzle, 1.6);
      const res = { hit: null, zone: -1, point: end.clone(), dist: far, bounces, power };
      if (ah) {
        const v = ah.actor; let dmg = wpn.dmg[ah.zone] * power; if (wpn.falloff) { const f = Math.min(1, Math.max(0, (far - wpn.falloff[0]) / (wpn.falloff[1] - wpn.falloff[0]))); dmg *= 1 - 0.55 * f; }
        fx.particles.blood(end, d, ah.zone === 0 ? 1.7 : 1); const gh = arena.raycast(_q.copy(end), _r.set(0, -1, 0), 3); if (gh) fx.decals.add(gh.point, _n.set(0, 1, 0), 0.22 + Math.random() * 0.3, 0, 0.6);
        const own = v === shooter; if (!own) { shooter.hits++; if (ah.zone === 0) shooter.heads++; res.hit = v; res.zone = ah.zone; }
        game.damage(v, dmg, own ? null : shooter, own ? { cause: 'glass', zone: ah.zone, dir: d, point: end, wpn } : { zone: ah.zone, dir: d, point: end, wpn });
      } else if (wall) {
        if (wall.dyn && gear && gear.hitCover) gear.hitCover(wall.dyn, wpn.key === 'rifle' ? 2 : 1); else if (wall.dyn && game.coverHit) game.coverHit(wall.dyn, wpn.key === 'pistol' ? 1 : 2, shooter);
        _n.copy(wall.face.normal); if (_n.dot(d) > 0) _n.negate(); fx.particles.impact(end, _n); if (G.paneAt(wall) < 0) fx.decals.add(end, _n, 0.07 + Math.random() * 0.05, 1, 0.01, 0.85);
        if (shooter !== me || far < 60) au.impact(end.distanceTo(game.listenerPos || end), game.panOf ? game.panOf(end) : 0);
      }
      game.onShot(shooter, origin, res); return res;
    } };
  return G;
}

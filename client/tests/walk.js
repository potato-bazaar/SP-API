// walk the real player along nav paths on every roof: catches snags, holes and nav cells the capsule cannot reach
g.start(); const ar = g.arena, p = g.player, inp = g.input; g.bots.forEach(b => { b.alive = false; b.rig.root.visible = false; });
const out = []; let bad = 0, total = 0; let seed = 12345; const R = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
for (const r of ar.roofs) { let fails = [];
  for (let k = 0; k < 14; k++) { const c0 = r.cells[(R() * r.cells.length) | 0], c1 = r.cells[(R() * r.cells.length) | 0]; const a = ar.cellPos(r, c0), b = ar.cellPos(r, c1); const path = ar.path(r, a.x, a.z, b.x, b.z); let len = 0, px = a.x, pz = a.z; for (const w of path) { len += Math.hypot(w.x - px, w.z - pz); px = w.x; pz = w.z; }
    p.reset(); p.locked = false; p.alive = true; p.hp = 100; g.state = 'live'; g.time = 10; g.introT = 10; inp.keys.clear(); p.pos.set(a.x, r.roofY + 0.05, a.z); p.padLock = 99; window.__drive(0.25, 1/60, () => {}); const y0 = p.pos.y - r.roofY; inp.keys.add('KeyW'); if (k % 2) inp._press('sprint'); else inp._release('sprint'); let wi = 0; const limit = len / 4.5 * 1.7 + 2.0; let minY = 9, maxY = -9;
    const T = window.__drive(limit, 1/60, () => { p.padLock = 99; const w = path[wi]; const d = Math.hypot(w.x - p.pos.x, w.z - p.pos.z); if (d < 0.35) { wi++; if (wi >= path.length) return false; } const t = path[Math.min(wi, path.length - 1)]; p.yaw = Math.atan2(-(t.x - p.pos.x), -(t.z - p.pos.z)); minY = Math.min(minY, p.pos.y - r.roofY); maxY = Math.max(maxY, p.pos.y - r.roofY); if (!p.alive) return false; });
    inp.keys.clear(); inp._release('sprint'); total++; const done = wi >= path.length && p.alive;
    if (!done) { bad++; fails.push(`(${a.x.toFixed(1)},${a.z.toFixed(1)})>(${b.x.toFixed(1)},${b.z.toFixed(1)}) len=${len.toFixed(1)} wp=${wi}/${path.length} at=(${p.pos.x.toFixed(1)},${p.pos.z.toFixed(1)}) y=${(p.pos.y - r.roofY).toFixed(2)} y0=${y0.toFixed(2)} alive=${p.alive} ${k % 2 ? 'sprint' : 'walk'}`); }
    else if (maxY > 0.6 || minY < -0.3) fails.push(`  note: y range ${minY.toFixed(2)}..${maxY.toFixed(2)} on (${a.x.toFixed(1)},${a.z.toFixed(1)})>(${b.x.toFixed(1)},${b.z.toFixed(1)})`);
  }
  out.push(`${r.name}: ${fails.filter(f => !f.startsWith('  note')).length} fails` + (fails.length ? '\n   ' + fails.join('\n   ') : ''));
}
return out.join('\n') + `\nbad: ${bad} / ${total}`;

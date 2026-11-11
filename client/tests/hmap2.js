const ar = g.arena; const out = [];
for (const l of ar.links) { if (l.kind !== 'zip') continue; const a = ar.roofs[l.a], b = ar.roofs[l.b]; if (!((a.id === 'iE1' && b.id === 'cD') || (a.id === 'iW2' && b.id === 'cC'))) continue; const r = a, cx = l.p0.x, cz = l.p0.z;
  out.push(`${a.name} zip anchor (${cx.toFixed(2)},${cz.toFixed(2)}) -> ${b.name}; rect x ${r.x0.toFixed(1)}..${r.x1.toFixed(1)} z ${r.z0.toFixed(1)}..${r.z1.toFixed(1)}; A marks anchor cell`);
  for (let z = r.z0 - 0.25; z <= r.z1 + 0.3; z += 0.5) { let row = z.toFixed(2).padStart(7) + ' '; for (let x = r.x0 - 0.25; x <= r.x1 + 0.3; x += 0.5) { const k = ar.cellAt(r, x, z); const y = ar.groundY(x, z, r.roofY + 2.6, 6); const h = y == null ? null : Math.round((y - r.roofY) * 10); const w = k >= 0 && r.m[k]; const isA = Math.abs(x - cx) < 0.26 && Math.abs(z - cz) < 0.26; row += (h == null ? '  .' : String(h).padStart(3)) + (isA ? 'A' : w ? 'w' : ' '); } out.push(row); } }
return out.join('\n');

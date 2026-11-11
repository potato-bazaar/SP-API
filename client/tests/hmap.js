// local height maps (dm above roof) + nav mask around trouble spots
const ar = g.arena; const out = []; const spots = [['EAST-SOUTH', 43.6, 42.7], ['EAST-SOUTH', 49.0, 42.7], ['EAST-SOUTH', 44.5, 51.3], ['CENTRAL · SW', -2.5, 10.0]];
for (const [name, cx, cz] of spots) { const r = ar.roofs.find(r => r.name === name); out.push(`${name} around (${cx},${cz}) roofY=${r.roofY} rect x ${r.x0.toFixed(1)}..${r.x1.toFixed(1)} z ${r.z0.toFixed(1)}..${r.z1.toFixed(1)}  [height in dm; lower-case w = nav walkable]`);
  for (let z = cz - 2.5; z <= cz + 2.501; z += 0.25) { let row = z.toFixed(2).padStart(7) + ' '; for (let x = cx - 3; x <= cx + 3.001; x += 0.25) { const y = ar.groundY(x, z, r.roofY + 2.6, 6); const h = y == null ? null : Math.round((y - r.roofY) * 10); const w = ar.walk(r, x, z); row += (h == null ? '  .' : String(h).padStart(3)) + (w ? 'w' : ' '); } out.push(row); } }
return out.join('\n');

// height profile along each jump/step link (top surface seen from above), to see what the player meets
const ar = g.arena; const out = [];
for (const l of ar.links) { if (l.kind !== 'jump' && l.kind !== 'step') continue; const A = l.p0, B = l.p1; const dx = B.x - A.x, dz = B.z - A.z, L = Math.hypot(dx, dz), ux = dx / L, uz = dz / L; const top = Math.max(A.y, B.y) + 4;
  let row = ''; for (let s = -2; s <= L + 2.001; s += 0.25) { const y = ar.groundY(A.x + ux * s, A.z + uz * s, top, 14); row += (y == null ? ' ----' : (' ' + (y - A.y).toFixed(1)).padStart(5)); }
  out.push(`${l.kind} ${ar.roofs[l.a].name} > ${ar.roofs[l.b].name}  A=(${A.x.toFixed(1)},${A.y.toFixed(1)},${A.z.toFixed(1)}) B=(${B.x.toFixed(1)},${B.y.toFixed(1)},${B.z.toFixed(1)}) L=${L.toFixed(1)}\n ${row}`); }
return out.join('\n');

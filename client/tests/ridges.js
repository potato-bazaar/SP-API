// how much of each roof's walkable area is not at roof level? (ridges, kerbs, details)
const ar = g.arena; const out = [];
for (const r of ar.roofs) { const hist = {}; let n = 0; for (const k of r.cells) { const p = ar.cellPos(r, k); const y = ar.groundY(p.x, p.z, r.roofY + 0.9, 2); const h = y == null ? 'none' : (Math.round((y - r.roofY) * 10) / 10).toFixed(1); hist[h] = (hist[h] || 0) + 1; n++; }
  const perchH = {}; for (const k of r.perch) { const p = ar.cellPos(r, k); const y = ar.groundY(p.x, p.z, r.roofY + 0.9, 2); const h = y == null ? 'none' : (Math.round((y - r.roofY) * 10) / 10).toFixed(1); perchH[h] = (perchH[h] || 0) + 1; }
  out.push(`${r.name.padEnd(22)} type ${r.type} cells ${n}: ` + Object.entries(hist).sort((a, b) => +a[0] - +b[0]).map(([h, c]) => `${h}:${c}`).join(' ') + `  | perch: ` + Object.entries(perchH).sort((a, b) => +a[0] - +b[0]).map(([h, c]) => `${h}:${c}`).join(' ')); }
return out.join('\n');

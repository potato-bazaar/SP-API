// why does the ledge grab fail? replicate the mantle checks during a sprint jump
g.start(); const ar = g.arena, p = g.player, inp = g.input; g.bots.forEach(b => { b.alive = false; b.rig.root.visible = false; });
const V = (x, y, z) => new THREE.Vector3(x, y, z); const out = [];
const cases = [['EAST ALLEY · S', 'EAST ALLEY · N'], ['WEST ALLEY · N', 'WEST ALLEY · S']];
for (const [fn, tn] of cases) {
  const l = ar.links.find(l => l.kind === 'jump' && [ar.roofs[l.a].name, ar.roofs[l.b].name].includes(fn) && [ar.roofs[l.a].name, ar.roofs[l.b].name].includes(tn)); const dir = ar.roofs[l.a].name === fn ? 0 : 1; const A = dir ? l.p1 : l.p0, B = dir ? l.p0 : l.p1; const from = dir ? l.b : l.a, to = dir ? l.a : l.b; const rf = ar.roofs[from];
  p.reset(); p.locked = false; p.alive = true; p.hp = 100; g.state = 'live'; g.time = 10; g.introT = 10; inp.keys.clear();
  const dx = B.x - A.x, dz = B.z - A.z, L = Math.hypot(dx, dz), ux = dx / L, uz = dz / L; let back = 0; while (back < 3.5 && ar.walk(rf, A.x - ux * (back + 0.5), A.z - uz * (back + 0.5))) back += 0.5;
  p.pos.set(A.x - ux * back, A.y + 0.05, A.z - uz * back); p.yaw = Math.atan2(-ux, -uz); let jumped = false; window.__drive(0.3, 1/60, () => {}); inp.keys.add('KeyW'); inp._press('sprint');
  out.push(`== ${fn} > ${tn} A.y=${A.y.toFixed(2)} B.y=${B.y.toFixed(2)}`);
  // fine profile of the far lip
  let row = ''; for (let s = L - 3.2; s <= L - 0.8; s += 0.1) { const y = ar.groundY(A.x + ux * s, A.z + uz * s, B.y + 4, 14); row += (y == null ? ' ---' : ' ' + (y - B.y).toFixed(2)); } out.push(' lip profile (rel. to B.y), s=L-3.2..L-0.8:' + row);
  window.__drive(4, 1/60, (g, t) => {
    p.yaw = Math.atan2(-ux, -uz); const fx = -Math.sin(p.yaw), fz = -Math.cos(p.yaw);
    if (!jumped && p.grounded && p.roof === from) { const ahead = ar.groundY(p.pos.x + fx * 0.55, p.pos.z + fz * 0.55, p.pos.y + 0.5, 1.2); const wallAhead = ar.raycast(V(p.pos.x, p.pos.y + 0.5, p.pos.z), V(fx, 0, fz), 0.8); if (ahead == null || wallAhead) { inp._press('jump'); jumped = true; } } else if (jumped) inp._release('jump');
    if (jumped && !p.grounded && p.mode === 'walk') { const s = (p.pos.x - A.x) * ux + (p.pos.z - A.z) * uz; if (s > L - 3.6) {
      let why = ''; let wall = null; for (const hh of [1.25, 0.75, 0.35]) { const h = ar.raycast(V(p.pos.x, p.pos.y + hh, p.pos.z), V(fx, 0, fz), 0.78); if (h) { why += ` w${hh}:d${h.distance.toFixed(2)},ny${h.face.normal.y.toFixed(2)}`; if (Math.abs(h.face.normal.y) < 0.55 && !wall) wall = h; } }
      if (wall) { const wx = wall.point.x + fx * 0.3, wz = wall.point.z + fz * 0.3; const top = ar.raycast(V(wx, p.pos.y + 2.6, wz), V(0, -1, 0), 2.3); why += top ? ` top:rise${(top.point.y - p.pos.y).toFixed(2)},ny${top.face.normal.y.toFixed(2)}` : ' top:none'; if (top) { const a = ar.raycast(V(wx, top.point.y + 0.15, wz), V(0, 1, 0), 1.05); const b = ar.raycast(V(p.pos.x, top.point.y + 0.35, p.pos.z), V(fx, 0, fz), 0.95); why += ` roomBlocked:${!!a} pathBlocked:${!!b}`; } }
      out.push(` t=${t.toFixed(2)} s=${s.toFixed(2)} y-B=${(p.pos.y - B.y).toFixed(2)} vy=${p.vel.y.toFixed(1)} sp=${Math.hypot(p.vel.x, p.vel.z).toFixed(1)} mode=${p.mode}${why}`); } }
    if (!p.alive || (jumped && p.grounded)) return false;
  });
  inp.keys.clear(); inp._release('sprint');
}
return out.join('\n');

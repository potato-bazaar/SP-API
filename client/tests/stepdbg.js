g.start(); const ar = g.arena, p = g.player, inp = g.input; g.bots.forEach(b => { b.alive = false; b.rig.root.visible = false; }); const out = []; const V = (x, y, z) => new THREE.Vector3(x, y, z);
for (const l of ar.links) { if (l.kind !== 'step') continue; const A = l.p1, B = l.p0; const from = l.b, to = l.a; const dx = B.x - A.x, dz = B.z - A.z, L = Math.hypot(dx, dz), ux = dx / L, uz = dz / L;
  let row = ''; for (let s = -1; s <= L + 1.5; s += 0.05) { const y = ar.groundY(A.x + ux * s, A.z + uz * s, A.y + 1.5, 6); row += (y == null ? ' --' : ' ' + (y - A.y).toFixed(2)); }
  out.push(`${ar.roofs[from].name} > ${ar.roofs[to].name} L=${L.toFixed(2)}; profile from s=-1 step .05 (rel A.y):\n${row}`);
  p.reset(); p.locked = false; p.alive = true; g.state = 'live'; g.time = 10; g.introT = 10; inp.keys.clear(); p.pos.set(A.x - ux * 1.0, A.y + 0.05, A.z - uz * 1.0); p.yaw = Math.atan2(-ux, -uz); window.__drive(0.3, 1/60, () => {}); inp.keys.add('KeyW'); let n = 0;
  window.__drive(2.5, 1/60, (g, t) => { p.yaw = Math.atan2(-ux, -uz); const s = (p.pos.x - A.x) * ux + (p.pos.z - A.z) * uz; if (n++ % 12 === 0) out.push(` t=${t.toFixed(2)} s=${s.toFixed(2)} y=${(p.pos.y - A.y).toFixed(2)} gr=${p.grounded} v=(${p.vel.x.toFixed(1)},${p.vel.y.toFixed(1)},${p.vel.z.toFixed(1)}) roof=${p.roof} lift=${p.stepLift.toFixed(2)}`); });
  inp.keys.clear(); }
return out.join('\n');

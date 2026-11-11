// ride every link in both directions with the real player controller and check the landing
g.start(); const ar = g.arena, p = g.player; g.bots.forEach(b => { b.alive = false; b.rig.root.visible = false; });
const out = []; let bad = 0;
const settle = (secs) => window.__drive(secs, 1/60, () => {});
for (const l of ar.links) for (const dir of [0, 1]) {
  if (dir === 1 && l.oneWay) continue; const A = dir ? l.p1 : l.p0, B = dir ? l.p0 : l.p1; const from = dir ? l.b : l.a, to = dir ? l.a : l.b;
  if (l.kind === 'jump' || l.kind === 'step') continue;
  p.reset(); p.locked = false; p.alive = true; p.hp = 100; p.pos.copy(A); p.pos.y += 0.05; p.yaw = Math.atan2(-(B.x - A.x), -(B.z - A.z)); g.state = 'live'; g.time = 10; g.introT = 10;
  settle(0.4); const r0 = p.roof, g0 = p.grounded, y0 = p.pos.y - ar.roofs[from].roofY, d0 = Math.hypot(p.pos.x - A.x, p.pos.z - A.z);
  let rode = p.mode === 'link';
  if (!rode) { if (!p.prompt) { out.push(`NO PROMPT ${l.kind} ${ar.roofs[from].name}>${ar.roofs[to].name} roof=${r0} gr=${g0} dy=${y0.toFixed(2)} drift=${d0.toFixed(2)}`); bad++; continue; } g.input._press('use'); settle(0.05); g.input._release('use'); rode = p.mode === 'link'; }
  if (!rode) { out.push(`NO RIDE ${l.kind} ${ar.roofs[from].name}>${ar.roofs[to].name}`); bad++; continue; }
  let t = 0; while (p.mode === 'link' && t < 8) { settle(0.05); t += 0.05; }
  settle(0.6); const ok = p.alive && p.grounded && p.roof === to && Math.abs(p.pos.y - ar.roofs[to].roofY) < 0.6;
  if (!ok) { bad++; out.push(`BAD ${l.kind} ${ar.roofs[from].name}>${ar.roofs[to].name} alive=${p.alive} gr=${p.grounded} roof=${p.roof >= 0 ? ar.roofs[p.roof].name : -1} y-roof=${(p.pos.y - ar.roofs[to].roofY).toFixed(2)} dEnd=${Math.hypot(p.pos.x - B.x, p.pos.z - B.z).toFixed(2)} hp=${p.hp.toFixed(0)}`); }
  else out.push(`ok  ${l.kind} ${ar.roofs[from].name}>${ar.roofs[to].name} t=${t.toFixed(2)} dEnd=${Math.hypot(p.pos.x - B.x, p.pos.z - B.z).toFixed(2)} hp=${p.hp.toFixed(0)}`);
}
return out.join('\n') + `\nbad: ${bad}`;

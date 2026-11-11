// physical parkour: sprint up the kicker and jump across every gap; climb/drop every step, both directions
g.start(); const ar = g.arena, p = g.player, inp = g.input; g.bots.forEach(b => { b.alive = false; b.rig.root.visible = false; });
const out = []; let bad = 0; const V = (x, y, z) => new THREE.Vector3(x, y, z);
for (const l of ar.links) for (const dir of [0, 1]) {
  if (l.kind !== 'jump' && l.kind !== 'step') continue; const A = dir ? l.p1 : l.p0, B = dir ? l.p0 : l.p1; const from = dir ? l.b : l.a, to = dir ? l.a : l.b; const rf = ar.roofs[from];
  for (const variant of (l.kind === 'jump' ? ['sprint-late', 'sprint-early', 'sprint-mid', 'walk'] : ['walk'])) {
    p.reset(); p.locked = false; p.alive = true; p.hp = 100; g.state = 'live'; g.time = 10; g.introT = 10; inp.keys.clear(); inp._release('sprint'); inp._release('jump');
    const dx = B.x - A.x, dz = B.z - A.z, L = Math.hypot(dx, dz), ux = dx / L, uz = dz / L; let back = 0; while (back < 2.5 && ar.walk(rf, A.x - ux * (back + 0.5), A.z - uz * (back + 0.5))) back += 0.5;
    p.pos.set(A.x - ux * back, A.y + 0.05, A.z - uz * back); p.yaw = Math.atan2(-ux, -uz); let jumped = false, tJump = -1, maxY = -99, prompt = '';
    window.__drive(0.3, 1/60, () => {});
    inp.keys.add('KeyW'); if (variant !== 'walk') inp._press('sprint');
    const K = l.kind === 'jump' ? (dir ? l.k1 : l.k0) : null; const lipD = K ? Math.hypot(K.x - A.x, K.z - A.z) + 0.3 : 0;   // distance from A to the lip
    const T = window.__drive(5, 1/60, (g, t) => {
      if (p.mode === 'walk') p.yaw = Math.atan2(-ux, -uz); const fx = -Math.sin(p.yaw), fz = -Math.cos(p.yaw); const s = (p.pos.x - A.x) * ux + (p.pos.z - A.z) * uz;
      if (p.prompt && p.prompt.passive) prompt = p.prompt.text;
      if (!jumped && p.grounded && p.roof === from) {
        let go = false;
        if (l.kind === 'jump') go = s > lipD - (variant === 'sprint-early' ? 1.0 : variant === 'sprint-mid' ? 0.55 : 0.2);
        else { const wallAhead = ar.raycast(V(p.pos.x, p.pos.y + 0.25, p.pos.z), V(fx, 0, fz), 0.7); go = !!wallAhead && B.y > A.y; }
        if (go) { inp._press('jump'); jumped = true; tJump = t; } }
      else if (jumped) { inp._release('jump'); if (l.kind === 'step' && p.grounded && p.mode === 'walk' && p.roof === from && B.y > A.y) jumped = false; }
      maxY = Math.max(maxY, p.pos.y - A.y);
      if (p.grounded && p.mode === 'walk' && p.roof === to && Math.abs(p.pos.y - ar.roofs[to].roofY) < 0.2 && s > L - 1.0) return false;
      if (!p.alive) return false;
    });
    inp.keys.clear(); inp._release('sprint'); inp._release('jump'); window.__drive(0.4, 1/60, () => {});
    const ok = p.alive && p.grounded && p.roof === to && Math.abs(p.pos.y - ar.roofs[to].roofY) < 0.7; const expectFail = variant === 'walk' && l.kind === 'jump';
    if (!ok && !expectFail) bad++;
    out.push(`${ok ? 'ok ' : expectFail ? 'x  ' : 'BAD'} ${l.kind} ${variant} ${ar.roofs[from].name}>${ar.roofs[to].name} dy=${(B.y - A.y).toFixed(2)} jumpAt=${tJump.toFixed(2)} apex=${maxY.toFixed(2)} T=${T.toFixed(2)} alive=${p.alive} roof=${p.roof >= 0 ? ar.roofs[p.roof].name : -1} y-roofTo=${(p.pos.y - ar.roofs[to].roofY).toFixed(2)} hp=${p.hp.toFixed(0)} prompt="${prompt}"`);
  }
}
return out.join('\n') + `\nbad: ${bad}`;

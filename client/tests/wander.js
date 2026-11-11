// a scripted player crosses the arena link by link for whole matches (real controller, bots live, damage off): integration soak
const ar = g.arena, p = g.player, inp = g.input; const V = (x, y, z) => new THREE.Vector3(x, y, z); const out = []; g.opts.god = true;
let seed = 777; const R = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
for (let match = 0; match < 3; match++) {
  g.start(); inp.keys.clear(); let st = 'pick', cur = null, path = [], wi = 0, t0 = 0, jumped = false; const stats = { ok: 0, fail: 0, kinds: {}, fails: [], rescued: 0 }; let lastRoof = -1;
  const release = () => { inp.keys.clear(); inp._release('sprint'); inp._release('jump'); inp._release('use'); };
  window.__drive(300, 1/60, (g, t) => {
    if (!p.alive) return false; inp._release('use'); if (st !== 'jumpgo') inp._release('jump');
    if (p.mode !== 'walk') { return; }
    if (st === 'pick') { if (!p.grounded || p.roof < 0) return; const r = ar.roofs[p.roof]; const opts = r.links.filter(e => e.link.kind !== 'pad' || true); if (!opts.length) return; const zr = g.zone.r; const good = opts.filter(e => ar.roofs[e.to].dist < zr - 4); const e = (good.length ? good : opts)[(R() * (good.length ? good.length : opts.length)) | 0];
      cur = e; const A = e.dir ? e.link.p1 : e.link.p0; path = ar.path(r, p.pos.x, p.pos.z, A.x, A.z); wi = 0; st = 'walk'; t0 = t; jumped = false; release(); return; }
    const l = cur.link, A = cur.dir ? l.p1 : l.p0, B = cur.dir ? l.p0 : l.p1; const from = cur.dir ? l.b : l.a, to = cur.to;
    const fail = (why) => { stats.fail++; stats.fails.push(`${l.kind} ${ar.roofs[from].name}>${ar.roofs[to].name}: ${why} at (${p.pos.x.toFixed(1)},${(p.pos.y - ar.roofs[from].roofY).toFixed(1)},${p.pos.z.toFixed(1)}) roof=${p.roof >= 0 ? ar.roofs[p.roof].name : '-'}`); release(); st = 'pick'; if (p.roof < 0 || !p.grounded) { const rr = ar.roofs[to]; const c = ar.cellPos(rr, rr.cells[(rr.cells.length / 2) | 0]); p.pos.set(c.x, rr.roofY + 0.1, c.z); p.vel.set(0, 0, 0); stats.rescued++; } };
    if (p.grounded && p.roof === to && st !== 'walk') { stats.ok++; stats.kinds[l.kind] = (stats.kinds[l.kind] || 0) + 1; release(); st = 'pick'; return; }
    if (t - t0 > 14) return fail('timeout in ' + st);
    if (st === 'walk') { if (p.roof !== from) { if (p.roof === to) { stats.ok++; stats.kinds[l.kind] = (stats.kinds[l.kind] || 0) + 1; release(); st = 'pick'; return; } return fail('left the roof while walking'); }
      const w = path[Math.min(wi, path.length - 1)]; const d = Math.hypot(w.x - p.pos.x, w.z - p.pos.z); if (d < 0.35) wi++; 
      if (wi >= path.length) { release(); if (l.kind === 'zip' || l.kind === 'ladder') st = 'use'; else if (l.kind === 'jump') st = 'jumpgo'; else if (l.kind === 'step') st = 'stepgo'; else st = 'padwait'; return; }
      p.yaw = Math.atan2(-(w.x - p.pos.x), -(w.z - p.pos.z)); p.pitch = 0; inp.keys.add('KeyW'); return; }
    const ux = (B.x - A.x), uz = (B.z - A.z), L = Math.hypot(ux, uz); const dx = ux / L, dz = uz / L; p.yaw = Math.atan2(-dx, -dz);
    if (st === 'use') { if (p.prompt && !p.prompt.passive && p.prompt.link === l) inp._press('use'); else if (p.prompt && !p.prompt.passive) { /* another device is nearer: turn toward ours and nudge */ inp.keys.add('KeyW'); } else inp.keys.add('KeyW'); return; }
    if (st === 'padwait') { inp.keys.add('KeyW'); return; }
    if (st === 'jumpgo') { inp.keys.add('KeyW'); inp._press('sprint'); const K = cur.dir ? l.k1 : l.k0; const lipD = Math.hypot(K.x - A.x, K.z - A.z) + 0.3; const s = (p.pos.x - A.x) * dx + (p.pos.z - A.z) * dz; if (!jumped && p.grounded && s > lipD - 0.4) { inp._press('jump'); jumped = true; } else inp._release('jump'); return; }
    if (st === 'stepgo') { inp.keys.add('KeyW'); if (B.y > A.y && p.grounded) { const fx = -Math.sin(p.yaw), fz = -Math.cos(p.yaw); if (ar.raycast(V(p.pos.x, p.pos.y + 0.25, p.pos.z), V(fx, 0, fz), 0.7)) inp._press('jump'); } return; }
  });
  release(); out.push(`match ${match}: time ${g.time.toFixed(0)}s crossings ok=${stats.ok} fail=${stats.fail} rescued=${stats.rescued} kinds=${JSON.stringify(stats.kinds)} alive=${g.actors.filter(a => a.alive).length} state=${g.state}` + (stats.fails.length ? '\n   ' + stats.fails.join('\n   ') : ''));
  await new Promise(r => setTimeout(r, 0));
}
return out.join('\n');

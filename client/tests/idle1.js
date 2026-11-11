const out = []; const p = g.player, inp = g.input; const mem = () => (performance.memory ? (performance.memory.usedJSHeapSize / 1048576).toFixed(0) : '?');
out.push('heap MB start ' + mem());
g.start(); inp.keys.clear();
for (let k = 0; k < 10; k++) { const t0 = performance.now(); const T = window.__drive(30, 1/30, (g, t) => { if (!p.alive) return false; }); out.push(`chunk ${k}: simT=${g.time.toFixed(0)} drove=${T.toFixed(1)} ms=${(performance.now() - t0).toFixed(0)} heap=${mem()} hp=${p.hp.toFixed(0)} alive=${p.alive} state=${g.state} particles=${g.fx.particles.n ?? '?'}`); if (!p.alive || g.state !== 'live') break; }
return out.join('\n');

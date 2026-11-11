const p = g.player, inp = g.input; const mem = () => (performance.memory ? (performance.memory.usedJSHeapSize / 1048576).toFixed(0) : '?');
for (let i = 0; i < 6; i++) { console.log('match', i, 'heap', mem()); g.start(); console.log(' started'); inp.keys.clear();
  for (let k = 0; k < 12; k++) { const T = window.__drive(30, 1/30, (g, t) => { if (!p.alive) return false; }); console.log(`  chunk ${k}: simT=${g.time.toFixed(0)} hp=${p.hp.toFixed(0)} alive=${p.alive} state=${g.state} heap=${mem()}`); await new Promise(r => setTimeout(r, 0)); if (!p.alive || g.state !== 'live') break; }
  console.log(' death', g.deathInfo && JSON.stringify(g.deathInfo), 'at', p.deathTime.toFixed(1)); }
return 'done';

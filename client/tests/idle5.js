const p = g.player, inp = g.input; const out = [];
for (let i = 0; i < 4; i++) { g.level = 1; g.start(); inp.keys.clear(); let k = 0; for (; k < 12; k++) { window.__drive(30, 1/30, () => { if (!p.alive) return false; }); await new Promise(r => setTimeout(r, 0)); if (!p.alive || g.state !== 'live') break; }
  out.push(`match ${i}: chunks=${k} t=${g.time.toFixed(0)} state=${g.state} alive=${p.alive} hp=${p.hp.toFixed(0)} place=${p.place} winner=${g.winner && g.winner.name} botsAlive=${g.bots.filter(b => b.alive).length} resultsShown=${g.resultsShown} hudMode=${g.hud.mode} inputEnabled=${inp.enabled} log=${g.log.slice(0, 3).map(e => e.t.toFixed(0) + ' ' + e.k + '>' + e.v).join(', ')}`); }
return out.join('\n');

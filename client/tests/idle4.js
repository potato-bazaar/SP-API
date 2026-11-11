const p = g.player, inp = g.input; const out = []; g.level = 1; g.start(); inp.keys.clear();
for (let k = 0; k < 20; k++) { window.__drive(15, 1/30, () => { if (!p.alive) return false; }); await new Promise(r => setTimeout(r, 0));
  out.push(`t=${g.time.toFixed(0)} state=${g.state} alive=${p.alive} hp=${p.hp.toFixed(0)} pos=(${p.pos.x.toFixed(1)},${p.pos.y.toFixed(1)},${p.pos.z.toFixed(1)}) rad=${Math.hypot(p.pos.x, p.pos.z).toFixed(1)} zoneR=${g.zone.r.toFixed(1)} outT=${(p.outT || 0).toFixed(1)} god=${g.opts.god} botsAlive=${g.bots.filter(b => b.alive).length} shotsAtMe=${g.bots.filter(b => b.target === p).length} weaponsFree=${g.weaponsFree}`); if (!p.alive || g.state !== 'live') break; }
return out.join('\n');

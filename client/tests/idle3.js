// survival of an idle standing player per rival level (median of several matches)
const p = g.player, inp = g.input; const out = []; inp.requestLock = () => {};   // no user gesture in this harness
for (const L of [0, 1, 2]) { g.level = L; const ts = [];
  for (let i = 0; i < 9; i++) { g.start(); inp.keys.clear(); for (let k = 0; k < 12; k++) { window.__drive(30, 1/30, () => { if (!p.alive) return false; }); await new Promise(r => setTimeout(r, 0)); if (!p.alive || g.state !== 'live') break; } ts.push({ t: p.alive ? 300 : p.deathTime, by: g.deathInfo ? (g.deathInfo.cause || 'sniper') : 'alive' }); }
  ts.sort((a, b) => a.t - b.t); out.push(`level ${L} (${['RECRUIT','MARKSMAN','GHOST'][L]}): idle death times ${ts.map(x => x.t.toFixed(0) + (x.by === 'sniper' ? '' : '*')).join(' ')}  median ${ts[4].t.toFixed(0)} s   (* = halo)`); }
return out.join('\n');

// how long does a player who does nothing (standing / crouched) survive, and what kills them?
const out = []; const p = g.player, inp = g.input;
for (const mode of ['stand', 'crouch']) { const deaths = [], hits = [];
  for (let i = 0; i < 8; i++) { g.start(); inp.keys.clear(); let first = -1; const hp0 = 100; let crouched = false;
    window.__drive(300, 1/30, (g, t) => { if (mode === 'crouch' && !crouched && t > 1.5) { inp._press('crouch'); crouched = true; } else if (crouched) inp._release('crouch'); if (first < 0 && p.hp < 100) first = g.time; if (!p.alive) return false; });
    deaths.push(p.alive ? 'alive@' + g.time.toFixed(0) : `${p.deathTime.toFixed(0)}s(${g.deathInfo ? (g.deathInfo.cause || g.deathInfo.killer) + (g.deathInfo.how ? '/' + g.deathInfo.how : '') : '?'})`); hits.push(first.toFixed(0)); }
  out.push(`${mode}: deaths ${deaths.join(' ')} | first damage at ${hits.join(' ')}`); }
return out.join('\n');

const { chromium } = require('playwright');
(async()=>{
  const b = await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p = await b.newPage({viewport:{width:320,height:200}});
  p.on('pageerror', e=>console.log('[pageerror]', e.message, (e.stack||'').split('\n').slice(0,5).join(' | ')));
  await p.goto('http://localhost:8123/play?sim=1&' + (process.argv[2]||''));
  await p.waitForFunction('window.__ready===true || window.__err', null, {timeout: 240000});
  const r = await p.evaluate((maxRuns) => { const g = window.__game; const out = [];
    for (let run = 0; run < maxRuns; run++) { g.start(); const dt = 1/30; const hist = new Map(g.bots.map(b => [b, []])); let found = null; let tick = 0;
      while (g.state === 'live' && g.time < 200 && !found) { g.clock += dt; g._step(dt, dt, true); tick++;
        if (tick % 15 === 0) for (const b of g.bots) { const h = hist.get(b); h.push(`${g.time.toFixed(1)} ${b.state} hp${Math.round(b.hp)} r${b.roof} d${Math.hypot(b.pos.x,b.pos.z).toFixed(1)} path${b.path.length} plan${b.plan.length} ${b.link?'LINK':''} arr${b.arrive?1:0} hide${(b.hideUntil-g.time).toFixed(0)} cr${b.crouch?1:0} tgt${b.target?b.target.name:'-'} out${b.outT.toFixed(1)}`); if (h.length > 60) h.shift(); }
        const halo = g.log.find(e => e.k === 'THE HALO'); if (halo) { const bot = g.bots.find(x => x.name === halo.v); found = { run, bot: halo.v, skill: bot.skill, hist: hist.get(bot) }; } }
      if (found) { out.push(found); break; } }
    return out; }, 12);
  for (const f of r) { console.log('HALO DEATH run', f.run, f.bot, JSON.stringify(f.skill)); console.log(f.hist.join('\n')); }
  if (!r.length) console.log('no halo deaths before 200s in 12 runs');
  await b.close();
})();

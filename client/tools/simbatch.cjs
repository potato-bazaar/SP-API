// run N bot-only matches without rendering and print survival statistics
const { chromium } = require('playwright');
(async()=>{
  const N = +(process.argv[2]||4);
  const b = await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p = await b.newPage({viewport:{width:320,height:200}}); await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  p.on('pageerror', e=>console.log('[pageerror]', e.message, (e.stack||'').split('\n').slice(0,5).join(' | ')));
  p.on('console', m=>{ if (m.type()==='error' && !/fonts|TUNNEL/.test(m.text())) console.log('[error]', m.text().slice(0,400)); });
  await p.goto('http://localhost:8123/play?sim=1&' + (process.argv[3]||''));
  await p.waitForFunction('window.__ready===true || window.__err', null, {timeout: 240000});
  const agg = { alive: {}, causes: {}, winnersPlace: [], shots: 0, hits: 0, heads: 0, dur: [] };
  for (let i = 0; i < N; i++) {
    const r = await p.evaluate(() => { window.__game.start(); return window.__simRun(330, 1/30); });
    console.log(`#${i} ${r.ms}ms end=${r.time}s state=${r.state} winner=${r.winner} alive=${r.alive}`); console.log('   ' + r.log.join(' | ')); if (process.env.V) console.log('   ' + r.bots.join(' | '));
    agg.dur.push(r.time); for (const l of r.log) { const t = +l.split(' ')[0]; for (const T of [30,60,90,120,150,180,210,240,270,300]) if (t <= T) agg.alive[T] = (agg.alive[T]||0) + 1; const k = l.split(' ')[1].split('>')[0]; const c = k === 'THE' ? l.split(' ').slice(1,3).join(' ').split('>')[0] : 'sniper'; agg.causes[c] = (agg.causes[c]||0)+1; }
    for (const s of r.bots) { const m = /s(\d+) h(\d+) hs(\d+)/.exec(s); agg.shots += +m[1]; agg.hits += +m[2]; agg.heads += +m[3]; }
  }
  console.log('avg dead by time:', Object.entries(agg.alive).map(([T,v])=>`${T}s:${(v/N).toFixed(1)}`).join('  '));
  console.log('causes:', JSON.stringify(agg.causes), 'avg end', (agg.dur.reduce((a,b)=>a+b,0)/N).toFixed(0), 's  shots/match', (agg.shots/N).toFixed(0), 'hit%', (100*agg.hits/Math.max(1,agg.shots)).toFixed(0), 'heads', (agg.heads/N).toFixed(1));
  await b.close();
})();

// drive the game: node tools/run.cjs "query" seconds [shotPrefix] ; env STEPS='[[t,"js"],...]' SHOTS='t1,t2' W H
const { chromium, devices } = require('playwright');
(async()=>{
  const [q='', secs='10', prefix='shots/run'] = process.argv.slice(2);
  const W = +(process.env.W||1280), H = +(process.env.H||720);
  const b = await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--autoplay-policy=no-user-gesture-required']});
  const ctx = await b.newContext(process.env.MOBILE ? { ...devices['iPhone 13 landscape'] } : {viewport:{width:W,height:H}, deviceScaleFactor: 1});
  const p = await ctx.newPage(); await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort()); let errs = 0;
  p.on('console', m=>{ const t=m.text(); if (/GL Driver|GPU stall|fonts.googleapis|ERR_TUNNEL/.test(t)) return; if(m.type()==='error'||m.type()==='warning'||process.env.LOG) { console.log(`[${m.type()}]`, t.slice(0,900)); if (m.type()==='error') errs++; } });
  p.on('pageerror', e=>{ errs++; console.log('[pageerror]', e.message, (e.stack||'').split('\n').slice(0,4).join(' | ')); });
  await p.goto(`http://localhost:${process.env.PORT||8123}/play?` + q);
  await p.waitForFunction('window.__ready===true || window.__err', null, {timeout: 240000});
  const err = await p.evaluate('window.__err'); if (err) { console.log('ERR', err); await b.close(); process.exit(1); }
  const steps = JSON.parse(process.env.STEPS||'[]'); const shots = (process.env.SHOTS||'').split(',').filter(Boolean).map(Number); const t0 = Date.now(); let si = 0, hi = 0;
  while ((Date.now()-t0)/1000 < +secs) {
    const t = (Date.now()-t0)/1000;
    while (si < steps.length && steps[si][0] <= t) { try { const r = await p.evaluate(steps[si][1]); if (r !== undefined && r !== null) console.log(`  step@${steps[si][0]}:`, JSON.stringify(r)); } catch (e) { console.log('  step error', e.message.slice(0,300)); } si++; }
    while (hi < shots.length && shots[hi] <= t) { await p.screenshot({path: `${prefix}_${hi}.jpg`, type:'jpeg', quality: 84}); console.log('  shot', `${prefix}_${hi}.jpg`, '@', t.toFixed(1)); hi++; }
    await p.waitForTimeout(100);
  }
  if (process.env.FINAL) { const r = await p.evaluate(process.env.FINAL); console.log('final:', JSON.stringify(r)); }
  await p.screenshot({path: `${prefix}_end.jpg`, type:'jpeg', quality: 84});
  console.log('errors:', errs); await b.close();
})();

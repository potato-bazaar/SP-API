// screenshot the game page: node tools/shot.cjs out.jpg "query" [w h] ; env EVAL to run JS before the shot, WAIT ms
const { chromium } = require('playwright');
(async()=>{
  const [out, q='', w='1280', h='720'] = process.argv.slice(2);
  const b = await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--autoplay-policy=no-user-gesture-required']});
  const p = await b.newPage({viewport:{width:+w,height:+h}, deviceScaleFactor: 1}); await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  p.on('console', m=>{ const t=m.text(); if(m.type()==='error'||m.type()==='warning'||process.env.LOG) console.log(`[${m.type()}]`, t.slice(0,600)); });
  p.on('pageerror', e=>console.log('[pageerror]', e.message));
  p.on('requestfailed', r=>console.log('[reqfailed]', r.url(), r.failure()?.errorText));
  await p.goto(`http://localhost:${process.env.PORT||8123}/play?` + q);
  await p.waitForFunction('window.__ready===true || window.__err', null, {timeout: 180000});
  const err = await p.evaluate('window.__err'); if (err) console.log('ERR', err);
  if (process.env.EVAL) { const r = await p.evaluate(process.env.EVAL); if (r !== undefined) console.log('eval:', JSON.stringify(r)); }
  await p.waitForTimeout(+(process.env.WAIT||600));
  await p.screenshot({path: out, type:'jpeg', quality: 86});
  console.log('wrote', out);
  await b.close();
})();

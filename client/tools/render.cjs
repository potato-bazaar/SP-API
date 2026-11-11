// usage: node tools/render.cjs <absModelPath> <outPrefix> [views...]   views like iso,top,front  or JSON opts via env
const { chromium } = require('playwright');
const path = require('path');
(async()=>{
  const [model, out, ...views] = process.argv.slice(2);
  const b = await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p = await b.newPage({viewport:{width:1400,height:900}});
  p.on('console', m=>{ if(m.type()==='error') console.log('[console.error]', m.text()); });
  p.on('pageerror', e=>console.log('[pageerror]', e.message));
  const extra = process.env.Q ? '&'+process.env.Q : '';
  await p.goto('http://localhost:8123/tools/viewer.html?m=' + encodeURIComponent('/__abs' + path.resolve(model)) + extra);
  await p.waitForFunction('window.__done===true', null, {timeout: 600000});
  const err = await p.evaluate('window.__err'); if (err) { console.log('ERR', err); await b.close(); return; }
  console.log('bbox', JSON.stringify(await p.evaluate('window.__bbox')), 'stats', JSON.stringify(await p.evaluate('window.__stats')));
  const opts = process.env.OPTS ? JSON.parse(process.env.OPTS) : {};
  for (const v of (views.length?views:['iso'])) {
    await p.evaluate(([v,o])=>window.__view(v,o), [v, opts[v]||opts['*']||{}]);
    await p.locator('canvas').screenshot({path: `${out}_${v}.jpg`, type:'jpeg', quality:82});
    console.log('wrote', `${out}_${v}.jpg`);
  }
  if (process.env.EVAL) console.log(JSON.stringify(await p.evaluate(process.env.EVAL)));
  await b.close();
})();

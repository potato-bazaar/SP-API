// node tools/simeval.cjs "query" 'js expression using g (game)'  -> runs it in the page after boot
const { chromium } = require('playwright');
(async()=>{
  const b = await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p = await b.newPage({viewport:{width:320,height:200}});
  p.on('pageerror', e=>console.log('[pageerror]', e.message, (e.stack||'').split('\n').slice(0,5).join(' | ')));
  p.on('console', m=>{ if (m.type()==='log' && /^DBG/.test(m.text())) console.log(m.text()); });
  await p.goto('http://localhost:8123/play?sim=1&' + (process.argv[2]||''));
  await p.waitForFunction('window.__ready===true || window.__err', null, {timeout: 240000});
  const r = await p.evaluate(new Function('const g = window.__game; ' + process.argv[3]));
  console.log(typeof r === 'string' ? r : JSON.stringify(r, null, 1)); await b.close();
})();

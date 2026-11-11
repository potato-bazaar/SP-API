// scripted player tests without rendering: node tools/ptest.cjs <scenario.js> ["query"]
const { chromium } = require('playwright'); const fs = require('fs');
(async()=>{
  const file = process.argv[2]; const q = process.argv[3] || 'god=1';
  const b = await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p = await b.newPage({viewport:{width:320,height:200}}); await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  p.on('pageerror', e=>console.log('[pageerror]', e.message, (e.stack||'').split('\n').slice(0,5).join(' | ')));
  p.on('console', m=>{ const t = m.text(); if (/fonts|TUNNEL|GL Driver|GPU stall/.test(t)) return; if (m.type()==='error') console.log('[error]', t.slice(0,600)); else if (m.type()==='log') console.log(t.slice(0, 2000)); });
  await p.goto('http://localhost:8123/play?' + q);
  await p.waitForFunction('window.__ready===true || window.__err', null, {timeout: 240000});
  const src = fs.readFileSync(file, 'utf8');
  const r = await p.evaluate(`(async()=>{ const g = window.__game, sc = window.__sc, THREE = sc.THREE; ${src} })()`);
  if (r !== undefined) console.log(typeof r === 'string' ? r : JSON.stringify(r, null, 1));
  await b.close();
})();

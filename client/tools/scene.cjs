// staged screenshots: node tools/scene.cjs <scenario.js> [prefix] ; scenario defines `steps = [[name, async (g, sc) => {...}], ...]`
// frames are rendered only on request (manual mode), so the software renderer stays usable.
const { chromium, devices } = require('playwright'); const fs = require('fs');
(async()=>{
  const file = process.argv[2]; const prefix = process.argv[3] || 'shots/scene'; const q = process.env.Q || 'god=1';
  const W = +(process.env.W||1280), H = +(process.env.H||720);
  const b = await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const ctx = await b.newContext(process.env.MOBILE ? { ...devices[process.env.MOBILE === '1' ? 'iPhone 13 landscape' : process.env.MOBILE] } : {viewport:{width:W,height:H}, deviceScaleFactor: 1});
  const p = await ctx.newPage(); await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  p.on('pageerror', e=>console.log('[pageerror]', e.message, (e.stack||'').split('\n').slice(0,5).join(' | ')));
  p.on('console', m=>{ const t = m.text(); if (/fonts|TUNNEL|GL Driver|GPU stall|ERR_FAILED/.test(t)) return; if (m.type()==='error') console.log('[error]', t.slice(0,600)); else if (m.type()==='log') console.log(t.slice(0, 1500)); });
  await p.goto('http://localhost:8123/play?manual=1&' + q);
  await p.waitForFunction('window.__ready===true || window.__err', null, {timeout: 240000});
  const err = await p.evaluate('window.__err'); if (err) { console.log('ERR', err); await b.close(); process.exit(1); }
  const src = fs.readFileSync(file, 'utf8');
  await p.evaluate(`(()=>{ const g = window.__game, sc = window.__sc, THREE = sc.THREE; ${src}; window.__steps = steps; })()`);
  const n = await p.evaluate('window.__steps.length'); const only = process.env.ONLY ? process.env.ONLY.split(',') : null;
  for (let i = 0; i < n; i++) {
    const name = await p.evaluate(`window.__steps[${i}][0]`);
    const r = await p.evaluate(`(async()=>{ const r = await window.__steps[${i}][1](window.__game, window.__sc); return r; })()`); if (r !== undefined && r !== null) console.log(`  ${name}:`, typeof r === 'string' ? r : JSON.stringify(r));
    if (name.startsWith('_') || (only && !only.includes(name))) continue;
    await p.evaluate('window.__frame(1/60, 2)'); await p.waitForTimeout(150);
    await p.screenshot({path: `${prefix}_${name}.jpg`, type:'jpeg', quality: 86, timeout: 180000}); console.log('  shot', `${prefix}_${name}.jpg`);
  }
  await b.close();
})();

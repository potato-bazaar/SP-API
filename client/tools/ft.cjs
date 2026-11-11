const { chromium } = require('playwright');
(async()=>{
  const b = await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p = await b.newPage({viewport:{width:1280,height:720}}); await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  p.on('pageerror', e=>console.log('[pageerror]', e.message));
  await p.goto('http://localhost:8123/play?god=1');
  await p.waitForFunction('window.__ready===true || window.__err', null, {timeout: 240000});
  const ft = async (label) => { const r = await p.evaluate(() => new Promise(res => { const t = []; let last = performance.now(); let n = 0; function f(now) { t.push(now - last); last = now; if (++n < 6) requestAnimationFrame(f); else res(t.map(v => Math.round(v))); } requestAnimationFrame(f); })); console.log(label, 'frame ms', r.join(' '), 'scale', await p.evaluate('window.__sc.gfx.scale'), 'calls', await p.evaluate('JSON.stringify(window.__sc.gfx.renderer.info.render)')); };
  await ft('title');
  await p.evaluate('window.__game.start()'); await p.waitForTimeout(3000);
  await ft('match');
  const t0 = Date.now(); try { await p.screenshot({path:'shots/ft.jpg', type:'jpeg', quality:80, timeout: 120000}); console.log('screenshot ok', Date.now()-t0, 'ms'); } catch (e) { console.log('screenshot failed', e.message.slice(0,200)); }
  await b.close();
})();

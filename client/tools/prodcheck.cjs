const { chromium } = require('playwright');
(async()=>{ const b = await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const errs=[]; const p = await b.newPage(); await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort()); p.on('pageerror', e=>errs.push(e.message));
  await p.goto('http://localhost:8787/r/ABCDE'); await p.waitForFunction(() => window.__ready === true || window.__err, null, {timeout: 240000});
  console.log('online visible', await p.evaluate(() => !document.getElementById('online-btn').hidden), 'online screen open (invite link)', await p.evaluate(() => !document.getElementById('online').hidden), 'code prefilled', await p.inputValue('#code'));
  await p.fill('#nm','Greg'); await p.click('#jn', {noWaitAfter:true}); await p.waitForTimeout(1500); console.log('join bad code msg:', await p.textContent('#netstat'));
  await p.click('#mk', {noWaitAfter:true}); await p.waitForFunction(() => !document.getElementById('lobby').hidden, null, {timeout: 15000}); console.log('lobby code', await p.textContent('#lcode'));
  await p.click('#lstart', {noWaitAfter:true}); await p.waitForTimeout(25000); console.log('in match', await p.evaluate(() => !document.getElementById('hud').hidden), await p.textContent('#time'));
  console.log('errors', errs); await b.close(); })();

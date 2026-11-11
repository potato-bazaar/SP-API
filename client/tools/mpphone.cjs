const { chromium, devices } = require('playwright');
(async()=>{
  const b = await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const ctx = await b.newContext({ ...devices['iPhone 13 landscape'] }); const p = await ctx.newPage(); await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  p.on('pageerror', e => console.log('[pageerror]', e.message));
  await p.goto('http://localhost:8787/?manual=1'); await p.waitForFunction(() => window.__ready === true, null, { timeout: 240000 });
  const shot = async (f) => { await p.evaluate(() => window.__frame(1/30, 1)); await p.screenshot({ path: f, type: 'jpeg', quality: 80, timeout: 180000 }); };
  await shot('shots/ph_title.jpg');
  await p.tap('#online-btn'); await p.fill('#nm', 'Greg'); await shot('shots/ph_online.jpg');
  await p.tap('#mk'); await p.waitForFunction(() => !document.getElementById('lobby').hidden, null, { timeout: 15000 }); await p.waitForTimeout(300); await shot('shots/ph_lobby.jpg');
  await b.close();
})();

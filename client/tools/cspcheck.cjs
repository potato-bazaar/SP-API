// load the production page under the strict CSP, start a match with a real click, report every console error / CSP violation
const { chromium } = require('playwright');
(async()=>{
  const b = await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p = await b.newPage({viewport:{width:960,height:540}}); const errs = [];
  if (!process.env.FONTS) await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  p.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') errs.push(`[${m.type()}] ${m.text().slice(0, 300)}`); });
  p.on('pageerror', e => errs.push('[pageerror] ' + e.message));
  p.on('requestfailed', r => errs.push('[requestfailed] ' + r.url().slice(0, 120) + ' ' + (r.failure() && r.failure().errorText)));
  const reqs = []; p.on('requestfinished', r => reqs.push(r.url().replace('http://localhost:' + (process.env.PORT || 8124), '')));
  await p.goto(`http://localhost:${process.env.PORT || 8124}/play`);
  await p.waitForFunction(() => window.__ready === true || window.__err, null, {timeout: 240000});
  console.log('ready; err =', await p.evaluate(() => window.__err || null), '; dev hooks present =', await p.evaluate(() => typeof window.__game), '; deploy disabled =', await p.evaluate(() => document.getElementById('deploy').disabled));
  await p.click('#deploy', { noWaitAfter: true, timeout: 120000 }); await p.waitForTimeout(30000); p.setDefaultTimeout(180000);
  console.log('hud visible =', await p.evaluate(() => !document.getElementById('hud').hidden), '; title hidden =', await p.evaluate(() => document.getElementById('title').hidden), '; timer =', await p.evaluate(() => document.getElementById('time').textContent), '; locked =', await p.evaluate(() => !!document.pointerLockElement));
  console.log('requests:', reqs.join(' '));
  console.log(errs.length ? errs.filter(e => !/GL Driver|GPU stall|fonts\.g/.test(e)).join('\n') || 'no errors (font requests blocked by this sandbox only)' : 'no errors');
  await b.close();
})();

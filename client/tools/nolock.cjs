// the frame refuses pointer lock: the game must fall back to cursor free-look and still be playable
const { chromium } = require('playwright');
(async()=>{
  const b = await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p = await b.newPage({viewport:{width:1280,height:720}}); await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  await p.addInitScript(() => { HTMLCanvasElement.prototype.requestPointerLock = function () { return Promise.reject(new DOMException('blocked by sandbox', 'SecurityError')); }; });
  p.on('pageerror', e=>console.log('[pageerror]', e.message, (e.stack||'').split('\n').slice(0,4).join(' | ')));
  await p.goto('http://localhost:8123/play?manual=1&god=1');
  await p.waitForFunction('window.__ready===true || window.__err', null, {timeout: 240000});
  const st = async (label) => console.log(label, JSON.stringify(await p.evaluate(() => { const g = window.__game, pl = g.player, i = g.input; return { state: g.state, locked: i.locked, lockFailed: i.lockFailed, yaw: +pl.yaw.toFixed(3), pitch: +pl.pitch.toFixed(3), shots: pl.shots, ads: +pl.ads.toFixed(2), banner: g.hud.el.banner.textContent, bannerOn: g.hud.el.banner.style.opacity, pos: pl.pos.toArray().map(v => +v.toFixed(1)) }; })));
  const fr = (n = 6, dt = 1/30) => p.evaluate(`window.__tick(${dt}, ${n})`);
  await p.click('#deploy'); await fr(3); await st('deployed   ');
  await fr(120, 1/30); await st('t=4s       ');
  await p.mouse.move(640, 360); await fr(2); await p.mouse.move(760, 330, { steps: 6 }); await fr(2); await st('mouse moved');
  await p.mouse.move(1270, 360, { steps: 4 }); await fr(30, 1/30); await st('cursor at right edge 1s');
  await p.mouse.move(640, 360, { steps: 4 }); await fr(90, 1/30);
  await p.mouse.down(); await fr(2, 1/60); await p.mouse.up(); await fr(3, 1/60); await st('click = fire');
  await p.mouse.down({ button: 'right' }); await fr(20, 1/60); await st('RMB scope  '); await p.mouse.up({ button: 'right' });
  await p.keyboard.press('Escape'); await fr(2); await st('Esc        ');
  await p.click('#resume'); await fr(2); await st('resume     ');
  await b.close();
})();

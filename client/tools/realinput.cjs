// real DOM events (mouse, keyboard) through Playwright against the manual-frame build: checks the input plumbing end to end
const { chromium } = require('playwright');
(async()=>{
  const b = await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p = await b.newPage({viewport:{width:1280,height:720}}); await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  p.on('pageerror', e=>console.log('[pageerror]', e.message, (e.stack||'').split('\n').slice(0,4).join(' | ')));
  await p.goto('http://localhost:8123/play?manual=1&god=1');
  await p.waitForFunction('window.__ready===true || window.__err', null, {timeout: 240000});
  const st = async (label) => console.log(label, JSON.stringify(await p.evaluate(() => { const g = window.__game, pl = g.player, i = g.input; return { state: g.state, mode: g.hud.mode, locked: i.locked, lockFailed: i.lockFailed, enabled: i.enabled, yaw: +pl.yaw.toFixed(3), pitch: +pl.pitch.toFixed(3), pos: pl.pos.toArray().map(v => +v.toFixed(2)), grounded: pl.grounded, ads: +pl.ads.toFixed(2), scoped: pl.scoped, zoom: pl.zoomIdx, cur: pl.cur, shots: pl.shots, mag: pl.w[pl.cur].mag, crouch: pl.crouch, t: +g.time.toFixed(2), focus: document.activeElement && document.activeElement.id }; })));
  const fr = (n = 6, dt = 1/30) => p.evaluate(`window.__tick(${dt}, ${n})`);
  await st('title    ');
  await p.click('#deploy'); await fr(2); await st('deployed ');
  await fr(60, 1/30); await st('after 2s ');   // intro lock ends at 1.3 s
  await p.mouse.move(640, 360); await fr(1); const y0 = await p.evaluate('window.__game.player.yaw');
  await p.mouse.move(740, 330, { steps: 5 }); await fr(2); await st('mouse +100,-30');
  await p.keyboard.down('KeyW'); await fr(30, 1/30); await p.keyboard.up('KeyW'); await st('W 1s     ');
  await p.keyboard.down('ShiftLeft'); await p.keyboard.down('KeyW'); await fr(15, 1/30); await p.keyboard.up('KeyW'); await p.keyboard.up('ShiftLeft'); await st('sprint .5s');
  await p.keyboard.press('Space'); await fr(4, 1/60); await st('jump     ');
  await fr(60, 1/60);
  await p.keyboard.press('KeyC'); await fr(12, 1/60); await st('crouch   ');
  await p.keyboard.press('KeyC'); await fr(12, 1/60);
  await fr(150, 1/30);   // weapons free
  await p.mouse.down({ button: 'right' }); await fr(20, 1/60); await st('RMB held ');
  await p.mouse.wheel(0, 100); await fr(6, 1/60); await st('wheel    ');
  await p.mouse.down({ button: 'left' }); await fr(2, 1/60); await p.mouse.up({ button: 'left' }); await fr(4, 1/60); await st('LMB fire ');
  await p.mouse.up({ button: 'right' }); await fr(20, 1/60); await st('RMB up   ');
  await p.keyboard.press('KeyQ'); await fr(30, 1/60); await st('Q swap   ');
  await p.mouse.down({ button: 'left' }); await fr(2, 1/60); await p.mouse.up({ button: 'left' }); await fr(4, 1/60); await st('pistol fire');
  await p.keyboard.press('KeyR'); await fr(10, 1/60); await st('R reload ');
  await p.keyboard.press('Escape'); await fr(2); await st('Esc      ');
  await p.click('#resume'); await fr(2); await st('resume   ');
  await p.keyboard.press('KeyP'); await fr(2); await st('P        ');
  await p.click('#quit'); await fr(2); await st('quit     ');
  await b.close();
})();

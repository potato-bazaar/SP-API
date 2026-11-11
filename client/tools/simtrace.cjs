const { chromium } = require('playwright');
(async()=>{
  const b = await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p = await b.newPage({viewport:{width:320,height:200}});
  p.on('pageerror', e=>console.log('[pageerror]', e.message, (e.stack||'').split('\n').slice(0,5).join(' | ')));
  await p.goto('http://localhost:8123/play?sim=1&' + (process.argv[2]||''));
  await p.waitForFunction('window.__ready===true || window.__err', null, {timeout: 240000});
  const r = await p.evaluate((code) => { const g = window.__game; g.start(); const out = []; const dt = 1/30; let next = 0; const watch = new Function('g', code);
    while (g.state === 'live' && g.time < 330) { g.clock += dt; g._step(dt, dt, true); if (g.time >= next) { next += 10; out.push(`t=${g.time.toFixed(0)} zr=${g.zone.r.toFixed(0)} ` + g.bots.map(b => `${b.name.slice(0,4)}:${b.alive ? b.state.slice(0,3) : 'DEAD'}/r${b.roof}/d${Math.hypot(b.pos.x,b.pos.z).toFixed(0)}/h${Math.round(b.hp)}${b.link?'/L':''}${b.plan.length?'/P'+b.plan.length:''}${b.path.length?'/p'+b.path.length:''}`).join(' ')); } }
    return out.concat(g.log.map(e => `${e.t.toFixed(0)} ${e.k}>${e.v}`)); }, process.env.CODE || '');
  console.log(r.join('\n')); await b.close();
})();

// two real browsers against the room server: create, join by code, lobby, start, see each other, shoot, damage, death, results
const { chromium } = require('playwright');
const BASE = process.env.BASE || 'http://localhost:8787';
(async()=>{
  const b = await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const mk = async (name) => { const ctx = await b.newContext({ viewport: { width: 1100, height: 620 } }); const p = await ctx.newPage(); await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
    p.on('pageerror', e => console.log(`[${name} pageerror]`, e.message, (e.stack||'').split('\n').slice(0,3).join(' | '))); p.on('console', m => { if (m.type() === 'error' && !/ERR_FAILED|fonts/.test(m.text())) console.log(`[${name}]`, m.text().slice(0, 300)); });
    await p.goto(BASE + '/?manual=1'); await p.waitForFunction(() => window.__ready === true || window.__err, null, { timeout: 240000 }); return p; };
  const host = await mk('host'), guest = await mk('guest');
  const tick = (p, n = 10) => p.evaluate((n) => window.__tick(1/30, n), n);
  const shot = async (p, f) => { await p.evaluate(() => window.__frame(1/30, 1)); await p.screenshot({ path: f, type: 'jpeg', quality: 80, timeout: 180000 }); };
  await host.click('#online-btn'); await host.fill('#nm', 'Greg'); await host.click('#mk');
  await host.waitForFunction(() => document.getElementById('lcode').textContent.length === 5, null, { timeout: 15000 });
  const code = await host.textContent('#lcode'); console.log('room code', code);
  await guest.click('#online-btn'); await guest.fill('#nm', 'Raj'); await guest.fill('#code', code.toLowerCase()); await guest.click('#jn');
  await guest.waitForFunction(() => !document.getElementById('lobby').hidden, null, { timeout: 15000 });
  await host.waitForFunction(() => document.querySelectorAll('#lteams .who:not(.bot)').length === 2, null, { timeout: 15000 });
  // host picks rules: free for all, 0 bots, one life
  await host.click('#lset button[data-k="bots"][data-v="0"]'); await host.waitForTimeout(300);
  await host.click('#lset button[data-k="timeLimit"][data-v="180"]'); await host.waitForTimeout(300);
  await shot(host, 'shots/mp_lobby_host.jpg'); await shot(guest, 'shots/mp_lobby_guest.jpg');
  console.log('guest sees rules:', await guest.evaluate(() => [...document.querySelectorAll('#lset button[aria-pressed=true]')].map(b => b.dataset.k + '=' + b.dataset.v).join(' ')), '| guest buttons disabled:', await guest.evaluate(() => document.querySelector('#lset button').disabled));
  await host.click('#lstart'); await host.waitForTimeout(500); console.log('host note before ready:', await host.textContent('#toast'));
  await guest.click('#lready'); await host.waitForTimeout(500); await host.click('#lstart');
  await host.waitForFunction(() => window.__game.net && window.__game.state === 'live', null, { timeout: 15000 }); await guest.waitForFunction(() => window.__game.net && window.__game.state === 'live', null, { timeout: 15000 });
  for (let i = 0; i < 25; i++) { await tick(host, 3); await tick(guest, 3); await host.waitForTimeout(40); }
  const info = (p) => p.evaluate(() => { const g = window.__game, pl = g.player; return { t: +g.time.toFixed(2), me: pl.pos.toArray().map(v => +v.toFixed(1)), alive: pl.alive, hp: pl.hp, puppets: g.puppets.map(q => ({ n: q.name, p: q.pos.toArray().map(v => +v.toFixed(1)), alive: q.alive, buf: q.buf.length })), hud: g.hud.mode }; });
  console.log('host', JSON.stringify(await info(host))); console.log('guest', JSON.stringify(await info(guest)));
  // move the guest next to the host on the server's terms: walk is too slow for a test, so teleport both sides through local corrections
  const hp = await host.evaluate(() => window.__game.player.pos.toArray());
  // wait for weapons free
  for (let i = 0; i < 60; i++) { await tick(host, 3); await tick(guest, 3); await host.waitForTimeout(40); if (await host.evaluate(() => window.__game.weaponsFree)) break; }
  console.log('weapons free:', await host.evaluate(() => window.__game.weaponsFree));
  // host aims at the guest's puppet and fires through the real mouse path
  const aim = () => host.evaluate(() => { const g = window.__game, p = g.player, q = g.puppets[0]; const e = p.eye(new g.player.pos.constructor()); const t = q.eye(); t.y += 0.03; const dx = t.x - e.x, dy = t.y - e.y, dz = t.z - e.z; p.yaw = Math.atan2(-dx, -dz); p.pitch = Math.atan2(dy, Math.hypot(dx, dz)); return { d: Math.hypot(dx, dy, dz).toFixed(1), los: g.arena.los(e, t) }; });
  // put the guest 12 m from the host on the host's roof (dev teleport), in plain view
  const spot = await host.evaluate(() => { const g = window.__game, ar = g.arena, p = g.player, r = ar.roofs[ar.roofAt(p.pos.x, p.pos.z, p.pos.y)]; const V = p.pos.constructor; for (const k of r.cells) { const c = ar.cellPos(r, k, new V()); const d = c.distanceTo(p.pos); if (d > 6 && d < 18 && ar.los(p.eye(new V()), new V(c.x, c.y + 1.3, c.z)) && ar.los(p.eye(new V()), new V(c.x, c.y + 1.6, c.z))) return [c.x, c.y, c.z]; } return null; });
  console.log('spot', spot); await guest.evaluate((s) => window.__game.net.send({ t: 'dev', tp: s }), spot);
  for (let i = 0; i < 15; i++) { await tick(host, 2); await tick(guest, 2); await host.waitForTimeout(40); }
  console.log('aim', JSON.stringify(await aim()));
  await host.evaluate(() => { window.__game.input._press('ads'); }); for (let i = 0; i < 8; i++) { await aim(); await tick(host, 2); }
  await host.evaluate(() => { const g = window.__game; g.input._press('fire'); }); await tick(host, 1); await host.evaluate(() => window.__game.input._release('fire'));
  for (let i = 0; i < 20; i++) { await tick(host, 2); await tick(guest, 2); await host.waitForTimeout(40); }
  console.log('after shot host', JSON.stringify(await host.evaluate(() => ({ shots: window.__game.player.shots, mag: window.__game.player.w.rifle.mag, feed: window.__game.hud.el.feed.textContent })))); console.log('after shot guest', JSON.stringify(await guest.evaluate(() => ({ hp: window.__game.player.hp, alive: window.__game.player.alive, feed: window.__game.hud.el.feed.textContent, hud: window.__game.hud.mode }))));
  await host.evaluate(() => { const g = window.__game; g.input._release('ads'); if (g.netMenu) g.resume(); }); await guest.evaluate(() => { const g = window.__game; if (g.netMenu) g.resume(); });
  // the match is over (one sniper left): both see results; the host reopens the lobby
  for (let i = 0; i < 40; i++) { await tick(host, 3); await tick(guest, 3); await host.waitForTimeout(40); if (await guest.evaluate(() => window.__game.resultsShown) && await host.evaluate(() => window.__game.resultsShown)) break; }
  console.log('results', JSON.stringify(await host.evaluate(() => ({ mode: window.__game.hud.mode, head: document.getElementById('rhead').textContent, toLobby: !document.getElementById('tolobby').hidden }))), JSON.stringify(await guest.evaluate(() => ({ mode: window.__game.hud.mode, head: document.getElementById('rhead').textContent, wait: !document.getElementById('rwait').hidden }))));
  await shot(host, 'shots/mp_results_host.jpg');
  await host.click('#tolobby'); await guest.waitForFunction(() => !document.getElementById('lobby').hidden, null, { timeout: 10000 });
  console.log('back in lobby:', await guest.evaluate(() => window.__game.hud.mode), await host.evaluate(() => window.__game.hud.mode));
  // round two: 2 v 2 with two AI, respawn on
  await host.click('#lset button[data-k="mode"][data-v=\'"2v2"\']'); await host.waitForTimeout(300);
  await host.click('#lset button[data-k="bots"][data-v="2"]'); await host.waitForTimeout(300);
  await host.click('#lset button[data-k="respawn"][data-v="true"]'); await host.waitForTimeout(300);
  await host.click('#lset button[data-k="respawnDelay"][data-v="3"]'); await host.waitForTimeout(300);
  await shot(guest, 'shots/mp_lobby2_guest.jpg');
  const teamsInfo = await guest.evaluate(() => [...document.querySelectorAll('#lteams .tcol')].map(c => c.querySelector('h3').textContent + ': ' + [...c.querySelectorAll('.who .n')].map(n => n.textContent).join(',')).join(' | '));
  console.log('teams:', teamsInfo);
  await guest.click('#lready'); await host.waitForTimeout(400); await host.click('#lstart');
  await guest.waitForFunction(() => window.__game.net && window.__game.state === 'live', null, { timeout: 15000 });
  for (let i = 0; i < 30; i++) { await tick(host, 3); await tick(guest, 3); await host.waitForTimeout(40); }
  console.log('2v2', JSON.stringify(await guest.evaluate(() => { const g = window.__game; return { myTeam: g.player.team, others: g.puppets.map(q => q.name + ':' + q.team + (q.bot ? ':ai' : '')), score: document.getElementById('score').textContent, tags: document.querySelectorAll('#tags .tag').length }; })));
  // the guest steps off the roof: the street kills, then the server respawns them
  await guest.evaluate(() => window.__game.net.send({ t: 'fall', v: 60 }));
  for (let i = 0; i < 12; i++) { await tick(host, 3); await tick(guest, 3); await host.waitForTimeout(40); }
  console.log('guest dead?', await guest.evaluate(() => ({ alive: window.__game.player.alive, respawnAt: +window.__game.respawnAt.toFixed(1), t: +window.__game.time.toFixed(1) })));
  for (let i = 0; i < 50; i++) { await tick(host, 3); await tick(guest, 3); await host.waitForTimeout(40); if (await guest.evaluate(() => window.__game.player.alive)) break; }
  console.log('guest respawned?', await guest.evaluate(() => ({ alive: window.__game.player.alive, hp: window.__game.player.hp, mode: window.__game.hud.mode, pos: window.__game.player.pos.toArray().map(v => +v.toFixed(1)) })));
  await guest.evaluate(() => { const g = window.__game, p = g.player, m = g.puppets.find(q => q.team === p.team); if (!m) return; const e = p.eye(new p.pos.constructor()); const dx = m.pos.x - e.x, dz = m.pos.z - e.z; p.yaw = Math.atan2(-dx, -dz); p.pitch = Math.atan2(m.pos.y + 1 - e.y, Math.hypot(dx, dz)); });
  await shot(guest, 'shots/mp_2v2_guest.jpg');
  await b.close();
})();

// every way a match can end: win, timeout with the player alive, death by sniper / halo / street, then redeploy from each
const p = g.player, inp = g.input; inp.requestLock = () => {}; const out = []; const V = (x, y, z) => new THREE.Vector3(x, y, z);
const upd = (secs) => { const n = Math.round(secs * 30); for (let i = 0; i < n; i++) g.update(1 / 30); };
const res = () => `state=${g.state} hud=${g.hud.mode} place=${p.place} head="${g.hud.el.rhead.textContent}" sub="${g.hud.el.rsub.textContent}" placeLabel="${g.hud.el.rplace.textContent}" stats=${[...g.hud.el.stats.querySelectorAll('b')].map(b => b.textContent).join('/')}`;
// 1. win
g.start(); upd(7); for (const b of g.bots) g.damage(b, 999, p, { zone: 0, dir: V(0, 0, -1), point: b.eye(V(0,0,0)), wpn: { key: 'rifle' } }); upd(4); out.push('WIN      ' + res());
// 2. killed by a sniper
g.start(); upd(7); g.damage(p, 999, g.bots[0], { zone: 0, dir: V(0, 0, -1), point: p.eye(V(0,0,0)), wpn: { key: 'rifle' } }); upd(4); out.push('SNIPER   ' + res());
// 3. the street
g.start(); upd(3); p.pos.y = 5; upd(4); out.push('STREET   ' + res());
// 4. the halo
g.start(); upd(3); g.time = 200; p.pos.set(80, p.pos.y, 80); const r0 = p.pos.y; for (let i = 0; i < 900 && p.alive; i++) { p.pos.set(80, r0, 80); p.vel.set(0, 0, 0); g.update(1 / 30); } upd(4); out.push('HALO     ' + res());
// 5. timeout with the player alive (god) -> judgement by health
g.opts.god = true; g.start(); upd(3); g.time = 298.5; upd(2.2); out.push('TIMEOUT-a state=' + g.state + ' winner=' + (g.winner && g.winner.name) + ' alive=' + g.actors.filter(a => a.alive).length); upd(4); out.push('TIMEOUT  ' + res()); g.opts.god = false;
// 6. leave to title mid-match and deploy again
g.start(); upd(2); g.pause(); g.toTitle(); upd(1); out.push('TITLE    state=' + g.state + ' hud=' + g.hud.mode); g.start(); upd(2); out.push('REDEPLOY state=' + g.state + ' hud=' + g.hud.mode + ' alive=' + g.actors.filter(a => a.alive).length + ' hp=' + p.hp + ' t=' + g.time.toFixed(1));
return out.join('\n');

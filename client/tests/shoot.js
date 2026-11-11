// weapon mechanics with the real fire path: aim at a bot, scope, hold breath, shoot
g.opts.god = true; g.start(); const ar = g.arena, p = g.player, inp = g.input; const out = []; const V = (x, y, z) => new THREE.Vector3(x, y, z);
window.__drive(7, 1/60, () => {});   // weapons free
// put one bot on our roof, 9 m ahead... or the nearest visible one
const rf = ar.roofs[p.roof]; const tgt = g.bots[0]; let spot = null; for (const k of rf.cells) { const c = ar.cellPos(rf, k); const d = Math.hypot(c.x - p.pos.x, c.z - p.pos.z); if (d > 6 && d < 9 && ar.los(p.eye(V(0,0,0)), V(c.x, c.y + 1.3, c.z))) { spot = c; break; } }
out.push('player roof ' + rf.name + ' spot ' + (spot ? `${spot.x.toFixed(1)},${spot.z.toFixed(1)}` : 'none'));
const freeze = (b) => { b.pos.copy(spot); b.roof = p.roof; b.path.length = 0; b.plan.length = 0; b.link = null; b.state = 'scan'; b.thinkT = 1e9; b.stanceT = 1e9; b.crouch = false; b.crouchK = 0; b.hp = 100; };
freeze(tgt); window.__drive(0.3, 1/60, () => { tgt.thinkT = 1e9; });
const aimAt = (pt) => { const e = p.eye(V(0,0,0)); const dx = pt.x - e.x, dy = pt.y - e.y, dz = pt.z - e.z; p.yaw = Math.atan2(-dx, -dz); p.pitch = Math.atan2(dy, Math.hypot(dx, dz)); };
const fireAt = (getPt, label) => { inp._press('ads'); inp._press('sprint'); window.__drive(0.5, 1/60, () => { tgt.thinkT = 1e9; aimAt(getPt()); }); const hp0 = tgt.hp, s0 = p.shots, h0 = p.hits; inp._press('fire'); window.__drive(0.05, 1/60, () => { aimAt(getPt()); }); inp._release('fire'); out.push(`${label}: scoped=${p.scoped} hold=${p.holding} sway=(${p.swayX.toFixed(4)},${p.swayY.toFixed(4)}) shots+${p.shots - s0} hits+${p.hits - h0} dmg=${(hp0 - tgt.hp).toFixed(0)} tgtAlive=${tgt.alive} mag=${p.w.rifle.mag}/${p.w.rifle.reserve} cool=${p.cool.toFixed(2)} bolt=${p.boltT.toFixed(2)} playerHp=${p.hp.toFixed(0)} kills=${p.kills}`); };
fireAt(() => tgt.chest(V(0,0,0)), 'body 1'); window.__drive(0.5, 1/60, () => { tgt.thinkT = 1e9; });
fireAt(() => tgt.chest(V(0,0,0)), 'body 2 (too early, bolt)'); window.__drive(1.0, 1/60, () => { tgt.thinkT = 1e9; });
p.hp = 50; fireAt(() => tgt.chest(V(0,0,0)), 'body 3 (kills, +30hp)');
// head shot on a fresh bot
const t2 = g.bots[1]; const fr2 = (b) => { b.pos.copy(spot); b.roof = p.roof; b.path.length = 0; b.plan.length = 0; b.link = null; b.state = 'scan'; b.thinkT = 1e9; b.stanceT = 1e9; b.crouch = false; b.crouchK = 0; b.hp = 100; }; fr2(t2); window.__drive(1.4, 1/60, () => { t2.thinkT = 1e9; });
{ const hp0 = t2.hp; inp._press('ads'); inp._press('sprint'); window.__drive(0.5, 1/60, () => { t2.thinkT = 1e9; const h = t2.eye(V(0,0,0)); h.y += 0.03; aimAt(h); }); inp._press('fire'); window.__drive(0.05, 1/60, () => { const h = t2.eye(V(0,0,0)); h.y += 0.03; aimAt(h); }); inp._release('fire'); out.push(`head: dmg=${(hp0 - t2.hp).toFixed(0)} alive=${t2.alive} heads=${p.heads} mag=${p.w.rifle.mag}`); }
// empty the magazine into the sky: auto reload
inp._release('ads'); inp._release('sprint'); p.pitch = 1.0; let fired = 0; for (let i = 0; i < 6; i++) { window.__drive(1.45, 1/60, () => {}); inp._press('fire'); const s0 = p.shots; window.__drive(0.05, 1/60, () => {}); inp._release('fire'); fired += p.shots - s0; out.push(` sky shot ${i}: mag=${p.w.rifle.mag}/${p.w.rifle.reserve} reload=${p.reloadT.toFixed(2)} bolt=${p.boltT.toFixed(2)}`); }
window.__drive(3.0, 1/60, () => {}); out.push(`after reload: mag=${p.w.rifle.mag}/${p.w.rifle.reserve} reloadT=${p.reloadT}`);
// sidearm
inp._press('swap'); window.__drive(0.05, 1/60, () => {}); inp._release('swap'); window.__drive(0.5, 1/60, () => {}); out.push(`swap: cur=${p.cur}`);
const t3 = g.bots[2]; fr2(t3); window.__drive(0.3, 1/60, () => { t3.thinkT = 1e9; }); let n = 0; const hp0 = t3.hp;
for (let i = 0; i < 8 && t3.alive; i++) { inp._press('ads'); window.__drive(0.2, 1/60, () => { t3.thinkT = 1e9; aimAt(t3.chest(V(0,0,0))); }); inp._press('fire'); window.__drive(0.03, 1/60, () => { aimAt(t3.chest(V(0,0,0))); }); inp._release('fire'); n++; }
out.push(`pistol: ${n} shots, target hp ${t3.hp.toFixed(0)} alive=${t3.alive} mag=${p.w.pistol.mag}/${p.w.pistol.reserve} accuracy=${p.hits}/${p.shots} kills=${p.kills} feed=${g.log.map(e => e.k + '>' + e.v + (e.how ? '(' + e.how + ')' : '')).join(', ')}`);
return out.join('\n');

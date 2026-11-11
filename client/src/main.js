import * as THREE from 'three';
import { Gfx, GU, installWorldFX } from './gfx.js';
import { loadAll } from './assets.js';
import { buildCity } from './city.js';
import { loadModels } from './models.js';
import { RigProto } from './rig.js';
import { Game } from './game.js';
import { Online } from './online.js';

const qs = new URLSearchParams(location.search);
const $ = (id) => document.getElementById(id);

async function boot() {
  installWorldFX();
  const canvas = $('view'); const bar = $('loadbar').firstElementChild, txt = $('loadtxt');
  const step = (p, t) => { bar.style.width = Math.round(p * 100) + '%'; if (t) txt.textContent = t; };
  let gfx; try { gfx = new Gfx(canvas); } catch (e) { throw new Error('This device could not start WebGL 2, which the game needs.'); }
  if (!gfx.renderer.capabilities.isWebGL2) throw new Error('This browser does not offer WebGL 2, which the game needs.');
  const quality = { texSize: gfx.isMobile ? 512 : 1024, aniso: gfx.isMobile ? 2 : 8, shadow: gfx.isMobile ? 2048 : 4096 };
  step(0.02, 'loading the district');
  const assets = await loadAll(p => step(0.02 + p * 0.68));
  step(0.72, 'raising the buildings'); await new Promise(r => setTimeout(r, 30));
  const city = await buildCity(gfx, assets, quality);
  step(0.88, 'waking the angel'); await new Promise(r => setTimeout(r, 30));
  const models = await loadModels(assets.models, assets.pack);
  if (__DEV__ && qs.get('rigtest')) return rigTest(gfx, models);
  gfx.renderer.shadowMap.needsUpdate = true;
  const game = new Game({ gfx, assets, city, models, opts: __DEV__ ? { sim: qs.get('sim') === '1', speed: +(qs.get('speed') || 0), god: qs.get('god') === '1' } : {} });
  // warm every shader now (snipers, first-person rifle, threads, the angel) so the first seconds of a match do not hitch
  try { gfx.renderer.setRenderTarget(gfx.rt); gfx.renderer.compile(gfx.scene, gfx.camera); gfx.renderer.compile(gfx.fpScene, gfx.fpCamera); gfx.renderer.setRenderTarget(null); } catch (e) { /* compile-on-demand still works */ }
  step(1, 'ready'); game.hud.ready(); game.online = new Online(game); if (__DEV__) window.__game = game;
  // signage is painted with web fonts once they arrive
  if (document.fonts && document.fonts.load) Promise.all([document.fonts.load('900 64px "Noto Sans HK"', '狙擊之城天使紅區香港中環酒店茶樓當鋪'), document.fonts.load('italic 800 64px "Barlow Condensed"', '0123456789 SNIPER CITY')]).then(() => city.tex.userData.repaint()).catch(() => {});
  let last = performance.now(), frames = 0, lastState = ''; const manual = __DEV__ && qs.get('manual') === '1';   // manual: frames only on request (slow software GL in tests)
  const drawFp = () => game.player.alive && (game.state === 'live' || game.state === 'over' || game.state === 'paused') && !game.player.scoped;
  if (manual) { window.__frame = (dt = 1 / 60, k = 1) => { for (let i = 0; i < k; i++) { gfx.resize(); game.update(dt); gfx.render(drawFp()); } }; window.__tick = (dt = 1 / 60, k = 1) => { for (let i = 0; i < k; i++) game.update(dt); }; window.__frame(); window.__ready = true; }
  // dynamic resolution: hold the frame budget on weaker GPUs. Votes on the share of slow frames (hitches do not count), remembers the scale
  // that was too much so it does not bounce, and gives up politely when lowering the resolution buys nothing (a 30 fps cap, a busy CPU).
  const dyn = { t: 0, n: 0, slow: 0, fast: 0, sum: 0, cap: 1, capT: 0, prev: 0, dropped: false, noGain: 0, base: 1, on: true, quiet: 4 };
  function adapt(dt, now) {
    if (!dyn.on) return; if (dyn.quiet > 0) { dyn.quiet -= dt; return; } if (dt >= 0.099) return; const ms = dt * 1000; dyn.t += dt; dyn.n++; dyn.sum += ms; if (ms > 25) dyn.slow++; if (ms < 19) dyn.fast++;
    if (dyn.t < 1.5 || dyn.n < 12) return; const avg = dyn.sum / dyn.n, slow = dyn.slow / dyn.n, fast = dyn.fast / dyn.n; dyn.t = 0; dyn.n = 0; dyn.sum = 0; dyn.slow = 0; dyn.fast = 0;
    if (dyn.dropped) { dyn.dropped = false; if (avg > dyn.prev * 0.92) { if (++dyn.noGain >= 2) { dyn.on = false; gfx.scale = dyn.base; return; } } else dyn.noGain = 0; }
    if (slow > 0.5 && gfx.scale > 0.5) { if (!dyn.noGain) dyn.base = gfx.scale; dyn.prev = avg; dyn.dropped = true; dyn.cap = Math.max(0.5, gfx.scale - 0.1); dyn.capT = now + 30000; gfx.scale = dyn.cap; }
    else if (fast > 0.95 && gfx.scale < 1 && (gfx.scale + 0.05 <= dyn.cap + 1e-6 || now > dyn.capT)) gfx.scale = Math.min(1, gfx.scale + 0.05);
  }
  function frame(now) {
    requestAnimationFrame(frame); if (manual) return;
    let dt = (now - last) / 1000; last = now; if (dt > 0.1) dt = 0.1; if (dt <= 0) dt = 1 / 120;
    gfx.resize(); game.update(dt); gfx.render(drawFp());
    frames++; if (game.state !== lastState) { lastState = game.state; dyn.quiet = Math.max(dyn.quiet, 2.5); } adapt(dt, now);
    if (frames === 3) window.__ready = true;
  }
  requestAnimationFrame(frame);
  if (__DEV__) window.__simRun = (secs = 320, dt = 1 / 30) => { const g = game; let n = 0; const t0 = performance.now(); const au = g.audio; g.audio = quiet; while (g.state === 'live' && n * dt < secs) { g.clock += dt; GU.uTime.value = g.clock; g._step(dt, dt, true); n++; } g.audio = au;
    return { ms: Math.round(performance.now() - t0), time: +g.time.toFixed(1), state: g.state, winner: g.winner && g.winner.name, alive: g.actors.filter(a => a.alive).length, log: g.log.map(e => `${e.t.toFixed(0)} ${e.k}>${e.v}${e.how ? '(' + e.how + ')' : ''}`), bots: g.bots.map(b => `${b.name}:${b.place || '-'} k${b.kills} s${b.shots} h${b.hits} hs${b.heads} r${b.roof}`) }; };
  // scripted player: ctl(game, t, input) sets the input state each tick; no rendering
  const quiet = new Proxy({}, { get: () => () => {} });   // no sound while the harness fast-forwards
  if (__DEV__) window.__drive = (secs, dt, ctl) => { const g = game, inp = g.input; let n = 0; const au = g.audio; g.audio = quiet; try { while (n * dt < secs && g.state === 'live') { if (ctl(g, n * dt, inp) === false) break; inp.poll(dt); g.clock += dt; GU.uTime.value = g.clock; g._step(dt, dt, true); g._post(dt); inp.endFrame(); n++; } } finally { g.audio = au; } return n * dt; };
  if (__DEV__) { window.__sc = { gfx, city, assets, GU, THREE, game }; if (qs.get('bs')) game.botSigma = +qs.get('bs'); if (qs.get('autostart')) game.start(); if (qs.get('cam')) { const c = qs.get('cam').split(',').map(Number); game.state = 'debug'; game.hud.show('none'); const f = () => { gfx.camera.position.set(c[0], c[1], c[2]); gfx.camera.lookAt(c[3], c[4], c[5]); if (qs.get('fov')) { gfx.camera.fov = +qs.get('fov'); gfx.camera.updateProjectionMatrix(); } requestAnimationFrame(f); }; f(); } }
}

function rigTest(gfx, models) {
  const scene = gfx.scene; scene.fog = null; scene.background = new THREE.Color(0x777777);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x222222, 0.7)); const d = new THREE.DirectionalLight(0xffffff, 2.2); d.position.set(2, 4, 3); scene.add(d); const d2 = new THREE.DirectionalLight(0xffffff, 0.8); d2.position.set(-3, 1, -2); scene.add(d2);
  scene.add(new THREE.GridHelper(4, 8, 0x333333, 0x555555));
  models.mats.cop.color.set(0x9a9a9a); models.mats.cop.map = null; models.mats.cop.emissiveIntensity = 0; models.mats.cop.needsUpdate = true; models.mats.rifleTp.color.set(0x771111);
  const proto = new RigProto(models.cop); const rig = proto.instantiate(); scene.add(rig.root);
  const gun = models.weapons.rifle_tp.clone(); gun.scale.setScalar(1.2); rig.weapon.add(gun);
  const st = { aim: qs.get('aim') === '1', crouch: qs.get('crouch') === '1', pitch: +(qs.get('pitch') || 0), twist: +(qs.get('twist') || 0), speed: +(qs.get('speed') || 0), mode: qs.get('mode') || 'ground', moveDir: new THREE.Vector3(+(qs.get('mx') || 0), 0, +(qs.get('mz') || 1)) };
  for (let i = 0; i < 200; i++) { rig.update(1 / 60, st); if (qs.get('phase')) rig.phase = +qs.get('phase'); } rig.update(1 / 60, st);
  const cam = (qs.get('cam') || '2.2,1.5,2.6,0,0.95,0').split(',').map(Number); gfx.camera.position.set(cam[0], cam[1], cam[2]); gfx.camera.lookAt(cam[3], cam[4], cam[5]); gfx.camera.fov = 40; gfx.camera.updateProjectionMatrix();
  gfx.post.uGrain.value = 0; gfx.post.uExposure.value = 1.0; $('title').hidden = true;
  let n = 0; (function frame() { gfx.resize(); gfx.render(false); if (++n === 3) window.__ready = true; requestAnimationFrame(frame); })();
}

boot().catch(e => { console.error(e); window.__err = String(e && e.stack || e); const el = $('err'); if (el) { el.hidden = false; el.textContent = 'Sniper City could not start: ' + (e && e.message ? e.message : e); } const l = $('loadtxt'); if (l) l.textContent = 'could not load'; });

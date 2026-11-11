// The match: eight snipers, a closing halo, an angel that looks five times, five minutes.
import * as THREE from 'three';
import { GU } from './gfx.js';
import { Arena } from './arena.js';
import { Audio } from './audio.js';
import { Input } from './input.js';
import { Hud } from './hud.js';
import { Threads, Particles, Decals, makeCurtain, makePadHints, makeRain } from './fx.js';
import { FpView } from './fpview.js';
import { Player } from './player.js';
import { Bot, CALLSIGNS } from './ai.js';
import { RigProto } from './rig.js';
import { Angel } from './angel.js';
import { rayActors, ZONE_NAMES } from './combat.js';
import { installNet } from './netgame.js';

const V3 = THREE.Vector3; const clamp = (x, a, b) => Math.min(b, Math.max(a, x)), lerp = (a, b, t) => a + (b - a) * t;
const _a = new V3(), _b = new V3(), _c = new V3();
const fmt = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

export class Game {
  constructor({ gfx, assets, city, models, opts = {} }) {
    this.gfx = gfx; this.city = city; this.models = models; this.opts = opts; this.arena = new Arena(assets.arena, city.bvh);
    this.audio = new Audio(); this.input = new Input(gfx.canvas); this.hud = new Hud(this); const res = gfx.post.uRes.value, sc = gfx.scene;
    this.fx = { threads: new Threads(sc, res), particles: new Particles(sc, res), decals: new Decals(sc), curtain: makeCurtain(sc), hints: makePadHints(sc, this.arena, res), rain: makeRain(sc, gfx.isMobile ? 500 : 900) };
    this.fp = new FpView(gfx, models); this.player = new Player(this); this.proto = new RigProto(models.cop);
    const names = CALLSIGNS.slice().sort(() => Math.random() - 0.5); this.bots = []; for (let i = 0; i < 7; i++) this.bots.push(new Bot(this, i + 1, names[i], this.proto, models.weapons.rifle_tp));
    this.actors = [this.player, ...this.bots]; this.angel = new Angel(this, models.angel, models.mats); city.sky.material.uniforms.uAngel.value = this.angel.eye;
    this.zone = { cx: 0, cz: 0, r: 84, nextR: 84, phase: 0, shrinking: false, toNext: 60, phaseAge: 0, dps: 0 }; this.Z = this.arena.zone;
    this.calm = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); if (this.calm) gfx.post.uGrain.value = 0.035;
    this.lockHintT = 0; this.state = 'title'; this.time = 0; this.clock = 0; this.timeScale = 1; this.slowT = 0; this.weaponsFree = false; this.listenerPos = new V3(); this.stats = {}; this.botSigma = 1; this.level = 1; this.botSigmaPlayer = 1.2; this.botEye = 1; this.botAim = 1; this.botCrowd = 2; this.botSigmaBot = 2.0; this.log = []; this.orbit = Math.random() * 6; this.glintT = 0; this.heartT = 0; this.tickT = 0; this.fpsAcc = 0; this.fpsN = 0; this.resultsShown = false; this.simSpeed = opts.sim ? (opts.speed || 6) : 1;
    this.bots.forEach(b => { b.rig.root.visible = false; }); this.soloBots = this.bots; this.puppets = []; this.net = null; this.teams = false;
    this._ui();
  }
  _ui() {
    const h = this.hud, inp = this.input, $ = (id) => document.getElementById(id);
    h.keysLegend(inp.touch || this.gfx.isMobile);
    $('deploy').addEventListener('click', () => this.start()); $('again').addEventListener('click', () => this.start()); $('resume').addEventListener('click', () => this.resume()); $('quit').addEventListener('click', () => this.toTitle());
    $('sens').addEventListener('input', (e) => { inp.sens = +e.target.value; try { localStorage.setItem('sc.sens', e.target.value); } catch (er) { /* private mode */ } });
    try { const s = localStorage.getItem('sc.sens'); if (s) { $('sens').value = s; inp.sens = +s; } } catch (er) { /* ignore */ }
    const tog = (id, on, off, fn) => { const b = $(id); b.addEventListener('click', () => { const v = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', v); b.textContent = v ? on : off; fn(v); }); };
    const fs = $('fsb'); const app = $('app'); if (fs) { if (!document.fullscreenEnabled || !app.requestFullscreen) fs.hidden = true; else { fs.addEventListener('click', () => { try { const p = document.fullscreenElement ? document.exitFullscreen() : app.requestFullscreen(); if (p && p.catch) p.catch(() => { fs.hidden = true; }); } catch (e) { fs.hidden = true; } }); document.addEventListener('fullscreenchange', () => { const on = !!document.fullscreenElement; fs.setAttribute('aria-pressed', on); fs.textContent = on ? 'FULL SCREEN ON' : 'FULL SCREEN'; }); } }
    // rival skill: how fast the other seven notice you, how long they take to settle, how tight they group, how many may hunt you at once
    const lv = ['RECRUIT', 'MARKSMAN', 'GHOST']; const ab = $('aib'); const setLevel = (v) => { this.level = v; ab.textContent = 'RIVALS · ' + lv[v]; try { localStorage.setItem('sc.ai', String(v)); } catch (er) { /* private mode */ } };
    let l0 = 1, chosen = false; try { const sv = localStorage.getItem('sc.ai'); if (sv === '0' || sv === '1' || sv === '2') { l0 = +sv; chosen = true; } } catch (er) { /* ignore */ } if (!chosen && this.gfx.isMobile) l0 = 0;   // thumbs aim slower than a mouse: phones start gentle unless the player already picked
    this.level = l0; ab.textContent = 'RIVALS · ' + lv[l0]; ab.addEventListener('click', () => { chosen = true; setLevel((this.level + 1) % 3); this.audio.start(); this.audio.ui(); });
    tog('snd', 'SOUND ON', 'SOUND OFF', (v) => { this.audio.start(); this.audio.setMuted(!v); }); tog('rainb', 'RAIN ON', 'RAIN OFF', (v) => { this.fx.rain.visible = v; });
    inp.onLockChange = (locked) => { if (!locked && this.state === 'live' && this.player.alive && !inp.touch && !inp.lockFailed && !this.opts.sim) this.pause();
      if (inp.lockFailed && !this._lockHint && this.state === 'live' && !inp.touch) { this._lockHint = true; this.lockHintT = 1.6; } };   // shown once the spawn banner has cleared
    inp.onLockError = () => { if (this.state === 'live' && this.player.alive && !this.opts.sim) { this.pause(); h.el.psub.textContent = 'the browser needs a second before it hands the mouse back · press resume again'; } };
    inp.onTouchMode = () => { h.keysLegend(true); document.getElementById('app').classList.add('touch'); if (this.state === 'live') h.show(this.player.alive ? 'play' : 'spectate'); };
    inp.onStick = (on, x, y, dx, dy) => h.stick(on, x, y, dx || 0, dy || 0);
    inp.bindButton($('b-fire'), 'fire', 'fire'); inp.bindButton($('b-ads'), 'ads', 'toggle'); inp.bindButton($('b-jump'), 'jump', 'tap'); inp.bindButton($('b-crouch'), 'crouch', 'toggle'); inp.bindButton($('b-reload'), 'reload', 'tap'); inp.bindButton($('b-swap'), 'swap', 'tap'); inp.bindButton($('b-use'), 'use', 'tap'); inp.bindButton($('b-zoom'), 'zoom', 'tap');
    $('b-pause').addEventListener('touchstart', (e) => { e.preventDefault(); if (this.state === 'live') this.pause(); }, { passive: false }); $('b-pause').addEventListener('click', () => { if (this.state === 'live') this.pause(); });
    document.addEventListener('visibilitychange', () => { if (document.hidden && this.state === 'live' && this.player.alive && !this.opts.sim) this.pause(); });
  }
  // ------------------------------------------------------------------ flow
  start() {
    if (this.net) this.leaveNet && this.leaveNet(); this.bots = this.soloBots; this.actors = [this.player, ...this.soloBots];
    const ar = this.arena, p = this.player; this.audio.start(); this.audio.ui(); this.hud.fade(0);
    for (const a of this.actors) a.reset(); this.fx.threads.clear(); this.fx.particles.clear(); this.fx.decals.clear(); this.angel.reset();
    const order = ar.spawns.map((r, i) => i).sort(() => Math.random() - 0.5); const yawTo = (x, z) => Math.atan2(x, z);   // forward (-sin,-cos) points at the centre
    this.actors.forEach((a, i) => { const r = ar.spawns[order[i]]; _a.set(r.spawnPt[0], r.spawnPt[1], r.spawnPt[2]); if (a.isPlayer) { a.spawn(_a, yawTo(_a.x, _a.z)); a.roof = r.i; a.spawnRoof = r; } else { a.spawn(_a, yawTo(_a.x, _a.z), r.i); a.rig.root.visible = true; } a.outT = 0; a.zoneAcc = 0; a._gazed = false; });
    if (this.opts.sim) { p.alive = false; p.hp = 0; p.place = 9; }
    const L = this.level; this.botSigmaPlayer = [2.0, 1.2, 0.75][L]; this.botEye = [0.6, 1, 1.35][L]; this.botAim = [1.35, 1, 0.7][L]; this.botCrowd = [1, 2, 3][L];
    this.time = 0; this.timeScale = 1; this.slowT = 0; this.weaponsFree = false; this.stats = { traversals: 0, dmg: 0 }; this.log = []; this.winner = null; this.resultsShown = false; this.overT = 0; this.deathInfo = null; this.gazeWarned = -1; this.gazeDone = -1; this.zoneWarned = -1; this.lastTwo = false; this.introT = 0;
    p.locked = true; this.state = 'live'; this.input.enabled = true; this.input.setToggle('ads', false, document.getElementById('b-ads')); this.input.setToggle('crouch', false, document.getElementById('b-crouch'));
    this.hud.show(p.alive ? 'play' : 'spectate'); this.hud.health(100); this.hud.lastHp = 100; this.hud.weapon(p); this.hud.alive(this.actors, p); this.hud.el.feed.innerHTML = ''; this.hud.feedItems.length = 0; this.hud.seen(false, false);
    if (p.alive) this.hud.banner(`${p.spawnRoof.name} · 0${p.spawnRoof.spawn + 1}`, this.input.touch ? 5.5 : 3.2, false, this.input.touch ? 'left thumb moves · right thumb looks · hold FIRE to aim, let go to shoot' : 'eight snipers · last one standing');
    try { this.gfx.canvas.focus({ preventScroll: true }); } catch (e) { /* older browsers */ }
    if (!this.input.touch && !this.opts.sim) this.input.requestLock();
    this._zone(0);
  }
  pause() { if (this.net) { if (this.netMenu) return; this.netMenu = true; this.hud.show('pause'); this.input.enabled = false; this.input.exitLock(); this.hud.el.psub.textContent = 'online matches keep running'; this.hud.netPause(true); return; }
    if (this.state !== 'live') return; this.state = 'paused'; this.hud.show('pause'); this.input.enabled = false; this.input.exitLock(); this.audio.setZip(0); this.hud.el.psub.textContent = this.input.touch ? 'the match is frozen' : 'the match is frozen · click resume to take the mouse back'; }
  resume() { if (this.net) { if (!this.netMenu) return; this.netMenu = false; this.hud.show(this.player.alive ? 'play' : 'spectate'); this.input.enabled = true; if (!this.input.touch) this.input.requestLock(); return; }
    if (this.state !== 'paused') return; this.state = 'live'; this.hud.show(this.player.alive ? 'play' : 'spectate'); this.input.enabled = true; this.audio.start(); try { this.gfx.canvas.focus({ preventScroll: true }); } catch (e) { /* older browsers */ } if (!this.input.touch) this.input.requestLock(); }
  toTitle() { if (this.net) this.leaveNet && this.leaveNet(); this.netMenu = false; this.state = 'title'; this.hud.show('title'); this.input.enabled = false; this.input.exitLock(); for (const b of this.bots) b.rig.root.visible = false; this.fx.threads.clear(); this.angel.reset(); this.gfx.post.uFade.value = 1; this.audio.setZone(0); this.audio.setZip(0); }

  flash(v) { const u = this.gfx.post.uFlash; u.value = Math.max(u.value, v * (this.calm ? 0.3 : 1)); }   // whole-frame flashes are gentler when the system asks for reduced motion
  // ------------------------------------------------------------------ zone
  _zone(dt) {
    if (this.net) return this._zoneNet(dt);
    const Z = this.Z, z = this.zone, t = this.time; let i = 0; while (i + 1 < Z.phases.length && Z.phases[i + 1].t <= t) i++; const ph = Z.phases[i], prev = Z.phases[Math.max(0, i - 1)], next = Z.phases[i + 1];
    const age = t - ph.t; z.shrinking = i > 0 && age < ph.shrink; z.r = z.shrinking ? lerp(prev.r, ph.r, age / ph.shrink) : ph.r; z.nextR = z.shrinking ? ph.r : (next ? next.r : ph.r); z.toNext = next ? next.t - t : Z.duration - t; z.phaseAge = age; z.dps = ph.dps || 5; z.phase = i; z.total = Z.phases.length;
    GU.uZone.value.set(z.cx, z.cz, z.r, 1); this.fx.curtain.scale.set(z.r, 120, z.r); this.fx.curtain.material.uniforms.uR.value = z.r;
    if (dt <= 0) return;
    // warnings, the angel's look
    if (next) {
      if (z.toNext <= 15 && this.zoneWarned < i) { this.zoneWarned = i; this.hud.banner('the halo tightens in 15', 2.6, true, 'white ring on the map = next safe ground'); this.audio.tick(); }
      if (z.toNext <= 5.5 && this.gazeWarned < i) { this.gazeWarned = i; this.angel.warn(); this.audio.choir(7.5, i >= 3); this.hud.banner('the angel is opening its arms', 3.4, true, 'break its line of sight', true); for (const b of this.bots) b.hideFromAngel(this.angel.eye); }
    }
    if (i > 0 && this.gazeDone < i) { this.gazeDone = i; this.angel.look(); this.flash(0.22); if (i === Z.phases.length - 1) { this.angel.frenzy = true; this.hud.banner('final halo', 2.6, false, 'no roof is safe for long', true); } else this.hud.banner('the halo is closing', 2.2, true); }
    // damage outside
    for (const a of this.actors) { if (!a.alive) continue; const out = Math.hypot(a.pos.x - z.cx, a.pos.z - z.cz) > z.r; if (out) { a.outT += dt; if (a.outT > 2.5) { a.zoneAcc += z.dps * dt; if (a.zoneAcc >= 3) { const d = a.zoneAcc; a.zoneAcc = 0; this.damage(a, d, null, { cause: 'zone' }); } } } else { a.outT = Math.max(0, a.outT - dt * 2); a.zoneAcc = 0; } }
  }
  // online: the server owns the halo; here we only draw it and play the warnings on the same beat
  _zoneNet(dt) {
    const z = this.zone, i = z.phase, S = this.netS, last = i >= this.Z.phases.length - 1;
    GU.uZone.value.set(z.cx, z.cz, z.r, S.halo ? 1 : 0); this.fx.curtain.visible = S.halo; this.fx.curtain.scale.set(z.r, 120, z.r); this.fx.curtain.material.uniforms.uR.value = z.r;
    if (dt <= 0) return;
    if (!last) {
      if (S.halo && z.toNext <= 15 && this.zoneWarned < i) { this.zoneWarned = i; this.hud.banner('the halo tightens in 15', 2.6, true, 'white ring on the map = next safe ground'); this.audio.tick(); }
      if (S.angelGaze && z.toNext <= 5.5 && this.gazeWarned < i) { this.gazeWarned = i; this.angel.warn(); this.audio.choir(7.5, i >= 3); this.hud.banner('the angel is opening its arms', 3.4, true, 'break its line of sight', true); }
    }
    if (i > 0 && this.gazeDone < i) { this.gazeDone = i; if (S.angelGaze) { this.angel.look(); this.flash(0.22); } if (last) { this.angel.frenzy = true; if (S.halo) this.hud.banner('final halo', 2.6, false, 'no roof is safe for long', true); } else if (S.halo) this.hud.banner('the halo is closing', 2.2, true); }
    if (this.player.alive) this.player.outT = S.halo && Math.hypot(this.player.pos.x - z.cx, this.player.pos.z - z.cz) > z.r ? (this.player.outT || 0) + dt : 0;
  }
  gazeHit(a, visible) {
    if (this.net && !this._gazeFromServer) return;   // online, the server decides who the angel saw
    if (visible) a.revealedUntil = this.time + 5.5;
    if (a.isPlayer && a.alive) { this.flash(0.3); if (visible) { this.hud.banner('the angel sees you', 2.6, true, 'your outline shows through walls', true); this.audio.toll(5); } else this.hud.banner('unseen', 1.8, true, 'you were out of its sight'); }
  }
  // ------------------------------------------------------------------ combat events
  panOf(pos) { const p = this.player; const yaw = p.alive ? p.yaw : this.orbit + Math.PI / 2; _c.copy(pos).sub(this.listenerPos); const l = Math.hypot(_c.x, _c.z) || 1; return (_c.x * Math.cos(yaw) - _c.z * Math.sin(yaw)) / l * 0.85; }
  onShot(shooter, origin, res) { if (this.net) return; for (const b of this.bots) if (b.alive && b !== shooter) b.hear(shooter, origin); }
  damage(v, amount, attacker, info = {}) {
    if (this.net) { if (v === this.player) this.netDamageSelf(amount, info); return; }
    if (!v.alive || this.state === 'title') return; if (v.isPlayer && this.opts.god) return;
    v.hp -= amount; if (attacker && attacker.isPlayer) this.stats.dmg += Math.min(amount, 100);
    if (v.isPlayer) { const k = clamp(amount / 55, 0.25, 1); this.gfx.post.uDamage.value = Math.max(this.gfx.post.uDamage.value, k); v.hurtT = 0.3; this.audio.hurt(); if (attacker) this.hud.threat(attacker.pos, 1); this.hud.health(v.hp); v.suppress = 1; }
    else v.onDamage(amount, attacker);
    if (v.hp <= 0) this.kill(v, attacker, info);
  }
  kill(v, killer, info) {
    v.alive = false; v.hp = 0; v.deathTime = this.time; const aliveN = this.actors.filter(a => a.alive).length; v.place = aliveN + 1;
    const cause = info.cause === 'zone' ? 'THE HALO' : info.cause === 'drop' || info.cause === 'fall' ? 'THE STREET' : null; const how = cause ? '' : (info.zone === 0 ? 'head' : info.wpn && info.wpn.key === 'pistol' ? 'sidearm' : '');
    const kn = killer ? killer.name : cause || '—'; this.hud.feed(kn, v.name, how, v.isPlayer || (killer && killer.isPlayer)); this.log.push({ t: this.time, k: kn, v: v.name, how, red: v.isPlayer || (killer && killer.isPlayer) });
    if (killer && killer.alive) { killer.kills++; killer.hp = Math.min(100, killer.hp + 30); if (killer.isPlayer) { this.hud.health(killer.hp); this.audio.kill(); this.slowT = 0.42; this.flash(0.35); } }
    // the body, the blood, the thread to the angel
    const body = _a.copy(v.pos); body.y += 0.25; if (info.cause !== 'drop') { const gh = this.arena.raycast(_b.copy(body).setY(body.y + 0.6), _c.set(0, -1, 0), 4); if (gh) this.fx.decals.add(gh.point, _c.set(0, 1, 0), 0.9 + Math.random() * 0.4, 0, 3.5); if (!v.isPlayer) this.fx.particles.motes(body, 30); }
    const idx = 8 - v.place; const ang = this.angel; this.fx.threads.addSoul(body.clone().setY(Math.max(body.y, 6)), (out) => ang.wristPos(idx, out));
    this.audio.toll(8 - aliveN);
    if (v.isPlayer) { this.deathInfo = { killer: kn, cause, how }; this.hud.show('spectate'); this.input.setToggle('ads', false, document.getElementById('b-ads')); this.input.exitLock(); this.audio.setZip(0); this.deadFrom = this.gfx.camera.position.clone(); this.deadQ = this.gfx.camera.quaternion.clone(); }
    else v.die();
    this.hud.alive(this.actors, this.player);
    if (aliveN === 2 && !this.lastTwo) { this.lastTwo = true; if (this.player.alive) this.hud.banner('two left', 2.4, false, 'one thread away', true); }
    if (aliveN <= 1) this._finish(this.actors.find(a => a.alive) || killer || v);
  }
  _finish(winner) { if (this.winner) return; this.winner = winner; winner.place = 1; if (winner.isPlayer) { this.slowT = 1.6; this.audio.stinger(true); } this.overT = 0; this.state = 'over'; }
  _timeout() { const alive = this.actors.filter(a => a.alive).sort((a, b) => b.hp - a.hp || b.kills - a.kills || Math.hypot(a.pos.x, a.pos.z) - Math.hypot(b.pos.x, b.pos.z)); alive.forEach((a, i) => { a.place = i + 1; }); this.hud.banner('judgement', 3, false, 'time · highest health takes the block', true); this._finish(alive[0]); }
  _results() {
    const p = this.player, w = this.winner; const win = p.place === 1; this.resultsShown = true; this.input.enabled = false; this.input.exitLock(); if (!win) this.audio.stinger(false);
    const acc = p.shots ? Math.round(100 * p.hits / p.shots) : 0; const surv = p.alive ? this.time : p.deathTime; const d = this.deathInfo;
    const bell = this.time >= this.Z.duration - 0.05 && this.actors.filter(a => a.alive).length > 1;   // the clock ended it, not the last bullet
    const head = win ? (bell ? 'Strongest at the bell' : 'Last sniper standing') : d && d.cause === 'THE HALO' ? 'Taken by the halo' : d && d.cause === 'THE STREET' ? 'The street took you' : d ? `Eliminated by ${d.killer}` : 'Out of time';
    const log = this.log.map(e => `<b>${fmt(e.t)}</b> ${e.red ? '<i>' : ''}${e.k} ━ ${e.v}${e.how ? ' · ' + e.how : ''}${e.red ? '</i>' : ''}`).join(' &nbsp; ');
    this.hud.results({ win, placeLabel: `placed ${p.place} of 8`, head, sub: win ? (bell ? 'time ran out · highest health takes the block' : `${fmt(this.time)} on the clock`) : (w ? `${w.name} holds the block` : 'the match is still running'),
      stats: [[p.kills, 'eliminations'], [p.heads, 'headshots'], [acc + '%', 'accuracy'], [fmt(surv), 'survived'], [this.stats.traversals, 'roof crossings']], log });
    this.hud.show('results');
  }

  // ------------------------------------------------------------------ frame
  _post(dtReal) { const g = this.gfx, p = this.player, post = g.post; const playing = this.state === 'live' || this.state === 'over';
    post.uDamage.value = Math.max(0, post.uDamage.value - dtReal * 1.6); post.uFlash.value = Math.max(0, post.uFlash.value - dtReal * 1.4); post.uKick.value = Math.max(0, post.uKick.value - dtReal * 7);
    const live = p.alive && playing; const low = live ? clamp((38 - p.hp) / 38, 0, 1) : 0; post.uLowHP.value = lerp(post.uLowHP.value, low, 1 - Math.exp(-dtReal * 4)); post.uInk.value = lerp(post.uInk.value, low * 0.55, 1 - Math.exp(-dtReal * 3));
    const out = live && Math.hypot(p.pos.x - this.zone.cx, p.pos.z - this.zone.cz) > this.zone.r ? 1 : 0; post.uZoneOut.value = lerp(post.uZoneOut.value, out, 1 - Math.exp(-dtReal * 5)); post.uGlitch.value = this.calm ? 0 : post.uZoneOut.value * 0.55 + (GU.uPulse.value.w > 0.6 ? 0.25 : 0); this.audio.setZone(post.uZoneOut.value);
    post.uVignette.value = live && p.scoped ? 0 : 0.25; GU.uScope.value = lerp(GU.uScope.value, live && p.scoped ? 1 : 0, 1 - Math.exp(-dtReal * 10));
  }
  update(dtReal) {
    const g = this.gfx, p = this.player, inp = this.input, post = g.post; this.clock += dtReal; GU.uTime.value = this.clock; inp.poll(dtReal);
    if (inp.pressed('pause')) { if (this.net) { if (this.state === 'live') this.pause(); } else if (this.state === 'live' && !this.opts.sim) this.pause(); else if (this.state === 'paused') this.resume(); }
    if (inp.pressed('mute')) document.getElementById('snd').click();
    const playing = this.state === 'live' || this.state === 'over';
    if (playing) {
      if (this.slowT > 0) { this.slowT -= dtReal; this.timeScale = lerp(this.timeScale, 0.22, 1 - Math.exp(-dtReal * 30)); } else this.timeScale = lerp(this.timeScale, 1, 1 - Math.exp(-dtReal * 6));
      const speed = !p.alive && this.state === 'live' && !this.net ? (this.opts.sim ? this.simSpeed : 2.2) : 1; const steps = speed > 1.5 ? Math.ceil(speed) : 1;
      for (let s = 0; s < steps; s++) this._step(dtReal * this.timeScale * speed / steps, dtReal, s === 0);
    } else { this.angel.update(dtReal); this.fx.threads.update(); this.fx.particles.update(dtReal); }
    // cameras that are not the player's eyes
    const cam = g.camera;
    if (this.state === 'title' || (!p.alive && playing) || (this.state === 'paused' && !p.alive)) {
      this.orbit += dtReal * 0.035; let tx = 0, ty = 24, tz = 0, rad = 118, hh = 52;
      const dead = playing && this.deathInfo && this.time - p.deathTime < 2.2 && this.deadFrom;
      if (cam.fov !== 50) { cam.fov = 50; cam.updateProjectionMatrix(); }
      if (dead) { const k = clamp((this.clock - (this._deadClock || (this._deadClock = this.clock))) / 1.0, 0, 1); cam.position.copy(this.deadFrom); cam.position.y = Math.max(p.pos.y + 0.22, this.deadFrom.y - k * k * 1.5); cam.quaternion.copy(this.deadQ); cam.rotateZ(k * 0.9); cam.rotateX(-k * 0.3); }
      else { this._deadClock = 0; if (this.state !== 'title') { const al = this.actors.filter(a => a.alive); if (al.length) { tx = al.reduce((s, a) => s + a.pos.x, 0) / al.length * 0.5; tz = al.reduce((s, a) => s + a.pos.z, 0) / al.length * 0.5; } rad = Math.min(96, Math.max(58, this.zone.r + 40)); hh = 44 + this.zone.r * 0.16; }
        else { rad = 92; hh = 34; ty = 30; }
        cam.position.set(tx + Math.cos(this.orbit) * rad, hh, tz + Math.sin(this.orbit) * rad); cam.lookAt(tx, ty, tz); }
      this.listenerPos.copy(cam.position);
    } else this.listenerPos.copy(cam.position);
    this._post(dtReal);
    this.city.sky.position.copy(cam.position);
    // results timing
    if (this.state === 'over') { this.overT += dtReal; if (!this.resultsShown && this.overT > (this.winner && this.winner.isPlayer ? 2.6 : 1.6)) { if (this.net) this._netResults(); else this._results(); } }
    else if (this.state === 'live' && !p.alive && !this.resultsShown && !this.opts.sim && !this.net && this.time - p.deathTime > 2.6) this._results();
    if (this.resultsShown && this.winner && this._resWin !== this.winner) { this._resWin = this.winner; if (!this.winner.isPlayer) this.hud.el.rsub.textContent = `${this.winner.name} holds the block`; }
    this.hud.update(dtReal, this);
    inp.endFrame();
  }
  _step(dt, dtReal, first) {
    const p = this.player, inp = this.input, hud = this.hud;
    if (this.net) { if (this.state === 'live' || this.state === 'over') this._netStep(dt, dtReal); }
    else if (this.state === 'live') {
      this.time += dt; this.introT += dt;
      if (p.locked && this.introT > 1.3) p.locked = false;
      if (this.lockHintT > 0) { this.lockHintT -= dt; if (this.lockHintT <= 0 && p.alive) hud.banner('this frame cannot capture the mouse', 5, true, 'move the cursor to look · rest it at an edge to keep turning'); }
      if (!this.weaponsFree && this.time >= 6) { this.weaponsFree = true; if (p.alive) { hud.banner('weapons free', 1.8, true); this.audio.tick(); } }
      this._zone(dt);
      if (this.time >= this.Z.duration && !this.winner) this._timeout();
    }
    if (p.alive && first) p.update(dt, inp);
    if (!this.net) for (const b of this.bots) b.update(dt);
    this.angel.update(dt); this.fx.threads.update(); this.fx.particles.update(dt);
    if (!first) return;
    // ---- player-facing extras
    if (p.alive) {
      const cam = this.gfx.camera; const riding = p.mode === 'link' && p.link.kind !== 'pad' || p.mode === 'mantle';
      this.fp.update(dtReal, { weapon: p.cur, ads: p.ads, hidden: p.scoped, bob: p.grounded ? Math.min(1, p.speed / 5) : 0, phase: p.walkPhase, land: p.landDip, lower: (p.sprinting ? 1 : 0) + (riding ? 1.6 : 0), swap: p.swapTo ? p.swapT : 0, bolt: p.boltT, reload: p.reloadT, lookX: inp.lookX, lookY: inp.lookY });
      // what is under the reticle
      const dir = cam.getWorldDirection(_a); const wh = this.arena.raycast(cam.position, dir, 400); const range = wh ? wh.distance : -1; let tgt = null;
      if (p.ads > 0.5) { const ah = rayActors(this.actors, cam.position, dir, wh ? wh.distance : 400, p); if (ah) tgt = ah.actor; else { let bd = p.scoped ? 0.012 : 0.03; for (const b of this.bots) { if (!b.alive) continue; _b.copy(b.chest()).sub(cam.position); const d = _b.length(); const an = Math.acos(clamp(_b.dot(dir) / d, -1, 1)); if (an < bd && this.arena.los(cam.position, b.chest())) { bd = an; tgt = b; } } } }
      hud.target(tgt); hud.scope(p.scoped, p.weapon.zooms[Math.min(p.zoomIdx, p.weapon.zooms.length - 1)], tgt ? cam.position.distanceTo(tgt.chest()) : range, p.focus, p.gasp, inp.touch);
      // touch aim friction near a target
      let slow = 1; if (inp.touch && p.ads > 0.6) for (const b of (this.net ? this.puppets : this.bots)) { if (!b.alive || (this.teams && b.team === p.team)) continue; _b.copy(b.chest()).sub(cam.position); const d = _b.length(); const an = Math.acos(clamp(_b.dot(dir) / d, -1, 1)); if (an < (p.scoped ? 0.02 : 0.06) && this.arena.los(cam.position, b.chest())) { slow = 0.5; break; } } p.aimSlow = slow;
      hud.prompt(p.prompt && !p.scoped ? p.prompt.text : null, inp.touch, p.prompt && p.prompt.passive); hud.action(p.reloadT >= 0 ? p.reloadT : p.boltT >= 0 ? p.boltT : p.swapTo ? p.swapT : -1);
      const rf = p.roof >= 0 ? this.arena.roofs[p.roof] : null; hud.where(p.mode === 'link' ? this.arena.linkLabel(p.link) : rf ? (rf.spawn >= 0 ? `${rf.name} · 0${rf.spawn + 1}` : rf.name) : 'in the air');
      hud.seen(p.revealedUntil > this.time, this.angel.state === 'warn');
      // heartbeat + halo tick
      this.heartT -= dtReal; if ((p.hp < 38 || p.holding) && this.heartT <= 0) { this.heartT = p.holding ? 1.05 : 0.5 + p.hp / 90; this.audio.heart(); }
      if (p.outT > 0.2) { this.tickT -= dtReal; if (this.tickT <= 0) { this.tickT = 0.8; this.audio.tick(); } }
      // scope glints from snipers settling on the player
      this.glintT -= dtReal; if (this.glintT <= 0) { this.glintT = 0.09; for (const b of this.bots) if (b.alive && b.state === 'engage' && b.target === p && b.crouchK < 0.5) { const e = b.eye(_b); this.fx.particles.glint(_c.set(e.x, e.y - 0.03, e.z), 7 + 9 * clamp(b.settle / (b.aimNeed || 1), 0, 1)); } }
    }
    const zl = this.zone; let label, cls = '';
    if (!this.weaponsFree) { label = `weapons free in ${Math.max(1, Math.ceil(6 - this.time))}`; cls = 'warn'; } else if (this.net && !this.netS.halo) { label = this.netS.respawn ? 'respawn on' : 'no halo'; } else if (zl.shrinking) { label = 'halo closing'; cls = 'hot'; } else if (zl.phase >= zl.total - 1) { label = 'final halo'; cls = 'hot'; } else { label = `halo holds · ${Math.ceil(zl.toNext)}s`; cls = zl.toNext <= 15 ? 'warn' : ''; }
    hud.time(this.time, this.net ? this.netS.timeLimit : this.Z.duration, label, cls);
    this.audio.setTension(clamp((8 - this.actors.filter(a => a.alive).length) / 7 * 0.6 + zl.phase / 5 * 0.4, 0, 1));
  }
}

installNet(Game);

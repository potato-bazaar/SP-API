// Online matches: the same Game, driven by the room server. The local sniper is still simulated here (so movement
// and aim feel instant); everyone else is a Puppet fed by snapshots; damage, deaths, respawns and results come from the server.
import * as THREE from 'three';
import { Puppet } from './puppet.js';
import { WEAPONS } from './combat.js';

const V3 = THREE.Vector3; const _a = new V3(), _b = new V3(), _n = new V3();
const INTERP = 0.1;   // seconds others are drawn behind the server (the server rewinds by the same amount when you fire)
const fmt = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
export const TEAM_NAMES = ['WHITE', 'RED'];

export function installNet(Game) {
  const P = Game.prototype;

  P.startNet = function (net, msg, room) {
    const p = this.player; this.net = net; this.netRoom = room; this.netS = msg.settings; this.teams = msg.settings.mode !== 'ffa'; this.netOver = null; this.netKills = {};
    this.audio.start(); this.hud.fade(0);
    for (const b of this.soloBots) { b.alive = false; b.rig.root.visible = false; }
    for (const q of this.puppets || []) q.dispose(); this.puppets = []; this.bots = [];
    this.fx.threads.clear(); this.fx.particles.clear(); this.fx.decals.clear(); this.angel.reset(); p.reset(); p.team = 0; p.netId = net.id;
    for (const [id, info] of Object.entries(msg.roster)) {
      if (id === net.id) { p.team = info.team; p.name = 'YOU'; continue; }
      const q = new Puppet(this, id, info, this.proto, this.models.weapons.rifle_tp); this.puppets.push(q);
    }
    this.byNet = new Map(this.puppets.map(q => [q.netId, q])); this.byNet.set(net.id, p);
    this.actors = [p, ...this.puppets];
    for (const row of msg.snap.a) { const q = this.byNet.get(row[0]); if (q && q.puppet) { q.snap(row); if (!(row[10] & 1)) q.die(); } else if (q === p) { p.pos.set(row[1], row[2], row[3]); p.yaw = row[4]; p.alive = !!(row[10] & 1); p.hp = row[11]; } }
    const am = msg.ammo && msg.ammo[net.id]; if (am) this._netAmmo(am.ammo);
    this.time = msg.snap.t; this.timeScale = 1; this.slowT = 0; this.weaponsFree = this.time >= 6; this.stats = { traversals: 0, dmg: 0 }; this.log = []; this.winner = null; this.resultsShown = false; this.overT = 0; this.deathInfo = null;
    this.gazeWarned = -1; this.gazeDone = -1; this.zoneWarned = -1; this.lastTwo = false; this.introT = msg.rejoin ? 9 : 0; this.netSeq = 0; this.netSendT = 0; this.respawnAt = 0;
    this._netZone(msg.snap.z, 0); this.gazeDone = this.zone.phase; this.gazeWarned = this.zone.phase - 1;
    p.locked = !msg.rejoin; this.state = 'live'; this.input.enabled = true; this.input.setToggle('ads', false, document.getElementById('b-ads')); this.input.setToggle('crouch', false, document.getElementById('b-crouch'));
    this.hud.show(p.alive ? 'play' : 'spectate'); this.hud.health(p.hp); this.hud.lastHp = p.hp; this.hud.weapon(p); this.hud.alive(this.actors, p); this.hud.el.feed.innerHTML = ''; this.hud.feedItems.length = 0; this.hud.seen(false, false);
    this.hud.teamMode(this.teams, p.team);
    if (!msg.rejoin && p.alive) this.hud.banner(this.teams ? `TEAM ${TEAM_NAMES[p.team]}` : 'FREE FOR ALL', 3.4, false, this._netRuleLine(), false);
    for (const e of msg.events || []) this._netEvent(e);
    for (const e of msg.log || []) this.log.push({ t: e.t, k: this._nm(e.k, e.cause), v: this._nm(e.v), how: e.how, red: e.v === net.id || e.k === net.id });
    if (!this.input.touch) this.input.requestLock();
    try { this.gfx.canvas.focus({ preventScroll: true }); } catch (e) { /* older browsers */ }
  };
  P._netRuleLine = function () { const S = this.netS; return [S.respawn ? `respawn · ${S.scoreLimit ? 'first to ' + S.scoreLimit : 'most kills at the bell'}` : 'one life', S.headshotsOnly ? 'headshots only' : '', S.halo ? '' : 'no halo'].filter(Boolean).join(' · '); };
  P._nm = function (id, cause) { if (!id) return cause === 'halo' ? 'THE HALO' : cause === 'street' ? 'THE STREET' : '—'; if (id === this.net.id) return 'YOU'; const q = this.byNet.get(id); return q ? q.name : '?'; };
  P.stopNet = function () { for (const q of this.puppets || []) q.dispose(); this.puppets = []; this.bots = this.soloBots; this.actors = [this.player, ...this.soloBots]; this.net = null; this.teams = false; this.hud.teamMode(false, 0); };

  // ---- snapshots + events
  P.onNetSnap = function (m) {
    if (!this.net || this.state === 'title') return; const s = m.s;
    for (const row of s.a) { const q = this.byNet.get(row[0]); if (q && q.puppet) q.push(s.t, row); else if (q === this.player) { this.netSelf = row; } }
    this._netZone(s.z, s.t); this.netScore = s.k;
    if (m.e) for (const e of m.e) this._netEvent(e);
  };
  P._netZone = function (z, t) { if (!z) return; const Z = this.zone; Z.r = z[0]; Z.nextR = z[1]; Z.phase = z[2]; Z.shrinking = !!z[3]; Z.toNext = z[4]; Z.total = this.Z.phases.length; Z.dps = 1; };
  P._netAmmo = function (am) { const p = this.player; p.w.rifle.mag = am.rifle[0]; p.w.rifle.reserve = am.rifle[1]; p.w.pistol.mag = am.pistol[0]; p.w.pistol.reserve = am.pistol[1]; this.hud.weapon(p); };
  P._netEvent = function (e) {
    const p = this.player, me = this.net.id, hud = this.hud;
    switch (e.t) {
      case 'spawn': { const a = this.byNet.get(e.id); if (!a) break;
        if (a === p) { p.reset(); p.team = this.teamOf(me); p.spawn(_a.set(e.p[0], e.p[1], e.p[2]), e.yaw); p.roof = e.roof; p.netId = me; this.respawnAt = 0; this.deathInfo = null; hud.show('play'); hud.lastHp = 100; hud.health(100); hud.weapon(p); if (this.time > 1) hud.banner('back on the roofs', 1.6, true, 'spawn protection until you fire'); if (!this.input.touch) this.input.requestLock(); }
        else { a.spawn(e.p, e.yaw); }
        hud.alive(this.actors, p); break; }
      case 'shot': { if (e.by === me) break; const a = this.byNet.get(e.by); const o = _a.set(e.o[0], e.o[1], e.o[2]), end = _b.set(e.e[0], e.e[1], e.e[2]);
        const from = a && a.puppet && a.alive ? a.muzzle() : o; if (a) { a.lastShot = this.time; a.lastShotPos.copy(o); a.rig.recoil = 1; a.rig.boltK = e.w === 'rifle' ? 1 : 0.3; }
        this.fx.threads.shot(from, end); this.fx.particles.flash(from, 1.6);
        const dist = o.distanceTo(this.listenerPos); this.audio.shot(dist, this.panOf(o), e.w === 'pistol');
        const dir = _n.copy(end).sub(o).normalize();
        if (e.hit) { this.fx.particles.blood(end, dir, e.z === 0 ? 1.7 : 1); const bh = this.arena.raycast(end, dir, 4.5); if (bh) { const nn = bh.face.normal.clone(); if (nn.dot(dir) > 0) nn.negate(); this.fx.decals.add(bh.point, nn, 0.35 + Math.random() * 0.5, 0, 0.25); } }
        else { const wh = this.arena.raycast(o, dir, o.distanceTo(end) + 0.5); if (wh) { const nn = wh.face.normal.clone(); if (nn.dot(dir) > 0) nn.negate(); this.fx.particles.impact(wh.point, nn); this.fx.decals.add(wh.point, nn, 0.08, 1, 0.01, 0.85); } }
        // a round passing close to your head
        if (p.alive && e.hit !== me) { const q = _a.copy(this.listenerPos).sub(o); const len = o.distanceTo(end); const al = Math.max(0, Math.min(len, q.dot(dir))); const c = o.clone().addScaledVector(dir, al); if (c.distanceTo(this.listenerPos) < 2.4 && al > 4) { this.audio.whiz(this.panOf(c)); hud.threat(o, 0.6); p.suppress = Math.min(1, (p.suppress || 0) + 0.5); } }
        break; }
      case 'dmg': { const a = this.byNet.get(e.id); if (!a) break; a.hp = e.hp;
        if (a === p) { const k = Math.min(1, Math.max(0.25, e.amt / 55)); this.gfx.post.uDamage.value = Math.max(this.gfx.post.uDamage.value, k); p.hurtT = 0.3; this.audio.hurt(); const by = e.by && this.byNet.get(e.by); if (by) hud.threat(by.pos, 1); hud.health(e.hp); p.suppress = 1; }
        else if (a.puppet) a.rig.flinch = 1;
        break; }
      case 'hit': if (e.id === me) { hud.hitMarker(e.kill, e.z === 0); this.audio.hit(e.z === 0); } break;
      case 'kill': { const v = this.byNet.get(e.id), k = e.by && this.byNet.get(e.by); if (!v) break;
        const kn = this._nm(e.by, e.cause), vn = this._nm(e.id); const mine = e.id === me || e.by === me; const how = e.cause ? '' : e.how;
        hud.feed(kn, vn, how, mine); this.log.push({ t: this.time, k: kn, v: vn, how, red: mine });
        v.alive = false; v.hp = 0; v.deathTime = this.time; v.place = e.place || 0; v.deaths = (v.deaths || 0) + 1;
        if (k && k !== v && !(this.teams && k.team === v.team)) k.kills = (k.kills || 0) + 1;
        if (k === p && e.hp != null) { p.hp = e.hp; hud.health(e.hp); this.audio.kill(); this.flash(0.35); }
        const body = _a.set(e.p[0], e.p[1] + 0.25, e.p[2]); const gh = this.arena.raycast(_b.copy(body).setY(body.y + 0.6), _n.set(0, -1, 0), 4); if (gh) this.fx.decals.add(gh.point, _n.set(0, 1, 0), 0.9 + Math.random() * 0.4, 0, 3.5);
        if (v !== p) this.fx.particles.motes(body, 30); const ang = this.angel; const idx = (this.log.length - 1) % 8; this.fx.threads.addSoul(body.clone().setY(Math.max(body.y, 6)), (out) => ang.wristPos(idx, out));
        this.audio.toll(Math.min(7, this.log.length));
        if (v === p) { this.deathInfo = { killer: kn, cause: e.cause === 'halo' ? 'THE HALO' : e.cause === 'street' ? 'THE STREET' : null, how }; p.alive = false; p.hp = 0; p.deathTime = this.time; hud.show('spectate'); this.input.setToggle('ads', false, document.getElementById('b-ads')); this.input.exitLock(); this.audio.setZip(0); this.deadFrom = this.gfx.camera.position.clone(); this.deadQ = this.gfx.camera.quaternion.clone();
          if (e.respawnIn) { this.respawnAt = this.time + e.respawnIn; hud.banner(`${kn === 'YOU' ? 'you fell' : 'taken by ' + kn}`, 2.2, false, `back in ${e.respawnIn} seconds`, true); } }
        else if (v.puppet) v.die();
        hud.alive(this.actors, p); break; }
      case 'gaze': if (e.id === me) { this._gazeFromServer = true; this.gazeHit(p, e.seen); this._gazeFromServer = false; } break;
      case 'correct': if (e.id === me) { p.pos.set(e.p[0], e.p[1], e.p[2]); p.vel.set(0, 0, 0); p.mode = 'walk'; p.link = null; p.mantle = null; } break;
      case 'ammo': if (e.id === me) this._netAmmo(e.ammo); break;
      case 'deny': if (e.id === me) { this._netAmmo(e.ammo); if (e.why === 'empty') this.audio.dry(); } break;
      case 'free': this.weaponsFree = true; if (p.alive) { hud.banner('weapons free', 1.8, true); this.audio.tick(); } break;
      case 'end': this.netOver = e; this.state = 'over'; this.overT = 0; { const w = e.winner; const won = w.team != null ? (this.teams && w.team === p.team) : w.id === me; this.winner = won ? p : { isPlayer: false, name: w.id ? this._nm(w.id) : w.team != null ? TEAM_NAMES[w.team] : '' }; if (won) { this.slowT = 1.2; this.audio.stinger(true); } } break;
    }
  };
  P.teamOf = function (id) { const a = this.byNet.get(id); return a ? a.team || 0 : 0; };

  // ---- per frame (called from Game._step)
  P._netStep = function (dt, dtReal) {
    const p = this.player, net = this.net;
    this.time = net.now(); this.introT += dt; if (p.locked && this.introT > 1.3) p.locked = false;
    this._zone(dt);
    const rt = this.time - INTERP; for (const q of this.puppets) q.update(dt, rt);
    // report our movement ~30 times a second
    this.netSendT -= dtReal; if (p.alive && this.netSendT <= 0 && this.state === 'live') { this.netSendT = 1 / 30;
      net.send({ t: 'in', seq: this.netSeq++, p: [+p.pos.x.toFixed(3), +p.pos.y.toFixed(3), +p.pos.z.toFixed(3)], yaw: +p.yaw.toFixed(4), pitch: +p.pitch.toFixed(4), c: +p.crouchK.toFixed(2), mode: p.mode === 'link' ? 'link' : p.mode === 'mantle' ? 'mantle' : 'walk', link: p.mode === 'link' && p.link ? p.link.i : -1, w: p.cur, ads: +p.ads.toFixed(2) }); }
    const S = this.netS; let sc = '';
    if (this.teams) { const k = this.netScore || [0, 0]; if (S.respawn) sc = `<b class="w">${TEAM_NAMES[0]} ${k[0]}</b> · <b class="r">${k[1]} ${TEAM_NAMES[1]}</b>${S.scoreLimit ? ` <i>to ${S.scoreLimit}</i>` : ''}`; else { const al = [0, 1].map(t => this.actors.filter(a => a.alive && (a.team || 0) === t).length); sc = `<b class="w">${TEAM_NAMES[0]} ${al[0]}</b> · <b class="r">${al[1]} ${TEAM_NAMES[1]}</b> <i>alive</i>`; } }
    else if (S.respawn) { const best = Math.max(0, ...this.puppets.map(q => q.kills || 0)); sc = `<b class="w">YOU ${p.kills}</b> · <b>BEST ${best}</b>${S.scoreLimit ? ` <i>to ${S.scoreLimit}</i>` : ''}`; }
    this.hud.score(sc);
    if (!p.alive && this.respawnAt > 0) { const left = Math.ceil(this.respawnAt - this.time); if (left !== this._rsLeft) { this._rsLeft = left; if (left > 0) this.hud.banner(`back in ${left}`, 1.1, true, this.deathInfo ? `taken by ${this.deathInfo.killer}` : ''); } }
  };
  // the local sniper pulled the trigger: draw it now, let the server decide what it hit
  P.netFire = function (origin, dir, muzzle, W) {
    const wh = this.arena.raycast(origin, dir, 420); const end = origin.clone().addScaledVector(dir, wh ? wh.distance : 420);
    this.fx.threads.shot(muzzle, end); this.audio.shot(0, 0, W.key === 'pistol'); this.player.shots++; this.player.lastShot = this.time; this.player.lastShotPos.copy(origin);
    if (wh) { const nn = wh.face.normal.clone(); if (nn.dot(dir) > 0) nn.negate(); this.fx.particles.impact(end, nn); this.fx.decals.add(end, nn, 0.08, 1, 0.01, 0.85); }
    this.net.send({ t: 'fire', o: [origin.x, origin.y, origin.z].map(v => +v.toFixed(3)), d: [dir.x, dir.y, dir.z].map(v => +v.toFixed(5)), w: W.key, ct: this.time });
  };
  P.netDamageSelf = function (amount, info) { if (info.cause === 'fall') this.net.send({ t: 'fall', v: amount / 8 + 14.5 }); };

  // ---- results
  P._netResults = function () {
    const e = this.netOver, p = this.player, me = this.net.id; this.resultsShown = true; this.input.enabled = false; this.input.exitLock();
    const w = e.winner, rows = e.standings.rows; const myRow = rows.find(r => r.id === me) || {};
    const won = w.team != null ? (this.teams && w.team === p.team) : w.id === me;
    const tie = w.team == null && w.id == null; if (!won) this.audio.stinger(false);
    const head = tie ? 'A dead heat' : won ? (this.teams ? `Team ${TEAM_NAMES[p.team]} holds the block` : 'Last sniper standing') : (this.teams ? `Team ${TEAM_NAMES[w.team]} holds the block` : `${this._nm(w.id)} holds the block`);
    const sub = this.teams && e.standings.teams ? `${TEAM_NAMES[0]} ${e.standings.teams[0]} · ${e.standings.teams[1]} ${TEAM_NAMES[1]}${w.timeout ? ' · on the clock' : ''}` : (w.timeout ? 'decided on the clock' : `${fmt(this.time)} on the clock`);
    const acc = myRow.shots ? Math.round(100 * myRow.hits / myRow.shots) : 0; const place = this.netS.respawn ? rows.findIndex(r => r.id === me) + 1 : (myRow.place || rows.findIndex(r => r.id === me) + 1);
    const board = rows.map((r, i) => `<tr class="${r.id === me ? 'me' : ''}${this.teams ? ' t' + r.team : ''}"><td>${i + 1}</td><td>${r.id === me ? 'YOU' : esc(this._nm(r.id))}${r.bot ? ' <s>AI</s>' : ''}</td><td>${r.kills}</td><td>${r.deaths}</td><td>${r.heads}</td></tr>`).join('');
    this.hud.results({ win: won, placeLabel: tie ? 'draw' : `placed ${place} of ${rows.length}`, head, sub,
      stats: [[myRow.kills || 0, 'eliminations'], [myRow.heads || 0, 'headshots'], [acc + '%', 'accuracy'], [myRow.deaths || 0, 'deaths']],
      log: `<table class="board"><thead><tr><th>#</th><th>sniper</th><th>kills</th><th>deaths</th><th>heads</th></tr></thead><tbody>${board}</tbody></table>` });
    this.hud.show('results'); this.hud.netResults(true, this.netRoom && this.netRoom.isHost());
  };
}
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

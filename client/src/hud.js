// DOM HUD: timer, alive pips, health, ammo, minimap, kill feed, scope, prompts, menus.
const $ = (id) => document.getElementById(id);
const pad2 = (n) => String(n).padStart(2, '0');
const SVGNS = 'http://www.w3.org/2000/svg';

export class Hud {
  constructor(game) {
    this.g = game; this.el = {}; for (const id of ['hud', 'scope', 'touch', 'title', 'pause', 'results', 'fade', 'alive-n', 'pips', 'kills', 'time', 'phase', 'map', 'feed', 'banner', 'target', 'cross', 'hit', 'arcs', 'prompt', 'hp', 'hpn', 'hpbar', 'where', 'seen', 'gain', 'ammo', 'wname', 'mag', 'res', 'act', 'ret', 'zoomx', 'range', 'hold', 'breath', 'stick', 'b-use', 'b-zoom', 'b-crouch', 'b-ads', 'deploy', 'load', 'loadtxt', 'loadbar', 'keys', 'rplace', 'rhead', 'rsub', 'stats', 'rlog', 'err', 'psub', 'online', 'lobby', 'score', 'tags', 'again', 'tolobby', 'rwait', 'quit', 'resume']) this.el[id] = $(id);
    this.tagEls = new Map(); this.teams = false; this.myTeam = 0;
    this.mapCtx = this.el.map.getContext('2d'); this.bannerT = 0; this.hitT = 0; this.feedItems = []; this.arcs = []; this.mapT = 0; this.gainT = 0; this.lastHp = 100; this.mode = 'title';
    for (let i = 0; i < 8; i++) this.el.pips.appendChild(document.createElement('i'));
    for (let i = 0; i < 4; i++) { const s = document.createElementNS(SVGNS, 'svg'); s.setAttribute('viewBox', '-100 -100 200 200'); const p = document.createElementNS(SVGNS, 'path'); p.setAttribute('d', 'M -26 -96.6 A 100 100 0 0 1 26 -96.6'); s.appendChild(p); const p2 = document.createElementNS(SVGNS, 'path'); p2.setAttribute('d', 'M -9 -104 L 0 -113 L 9 -104'); s.appendChild(p2); this.el.arcs.appendChild(s); this.arcs.push({ el: s, t: 0, x: 0, z: 0, k: 1 }); }
    this._reticle(); this.el.hit.querySelectorAll('i').forEach((e, i) => { e.style.transform = `rotate(${45 + i * 90}deg) translateY(-13px)`; });
    [['l', -15, 0], ['r', 6, 0], ['t', 0, -15], ['b', 0, 6]].forEach(([c, x, y]) => { const e = this.el.cross.querySelector('.' + c); e.style.left = x + 'px'; e.style.top = y + 'px'; });
  }
  _reticle() {
    const s = this.el.ret; const L = (x1, y1, x2, y2, c) => { const l = document.createElementNS(SVGNS, 'line'); l.setAttribute('x1', x1); l.setAttribute('y1', y1); l.setAttribute('x2', x2); l.setAttribute('y2', y2); l.setAttribute('class', c); s.appendChild(l); };
    const C = (x, y, r, c) => { const e = document.createElementNS(SVGNS, 'circle'); e.setAttribute('cx', x); e.setAttribute('cy', y); e.setAttribute('r', r); e.setAttribute('class', c); s.appendChild(e); };
    L(-100, 0, -3, 0, 'thin'); L(3, 0, 100, 0, 'thin'); L(0, -100, 0, -3, 'thin'); L(0, 3, 0, 100, 'thin'); L(-100, 0, -42, 0, 'post'); L(42, 0, 100, 0, 'post'); L(0, 42, 0, 100, 'post');
    for (let i = 1; i <= 6; i++) { for (const sg of [-1, 1]) { C(sg * i * 6, 0, 0.5, 'm'); C(0, sg * i * 6, 0.5, 'm'); } } for (let i = 1; i <= 5; i++) L(-1.6, 6 * i + 3, 1.6, 6 * i + 3, 'thin');
    C(0, 0, 0.55, 'c');
  }
  show(mode) { this.mode = mode; const e = this.el; e.title.hidden = mode !== 'title'; e.online.hidden = mode !== 'online'; e.lobby.hidden = mode !== 'lobby'; if (mode !== 'results') this.netResults(false); if (mode !== 'pause') this.netPause(false); e.pause.hidden = mode !== 'pause'; e.results.hidden = mode !== 'results'; e.hud.hidden = !(mode === 'play' || mode === 'pause' || mode === 'spectate'); if (mode !== 'play') e.scope.hidden = true; e.touch.hidden = !(mode === 'play' && this.g.input.touch); }
  loading(p, text) { this.el.loadbar.firstElementChild.style.width = Math.round(p * 100) + '%'; if (text) this.el.loadtxt.textContent = text; }
  ready() { this.el.deploy.disabled = false; this.el.load.hidden = true; }
  error(msg) { this.el.err.hidden = false; this.el.err.textContent = msg; }
  keysLegend(touch) { this.el.keys.innerHTML = touch ? '<span><b>LEFT THUMB</b> move</span><span><b>RIGHT THUMB</b> look</span><span><b>FIRE</b> drag to aim, release to shoot</span><span><b>SCOPE</b> toggle</span><span><b>USE</b> ziplines and ladders</span>'
    : '<span><b>WASD</b> move</span><span><b>MOUSE</b> look</span><span><b>LMB</b> fire</span><span><b>RMB</b> scope</span><span><b>WHEEL</b> 4× / 8×</span><span><b>SHIFT</b> sprint · hold breath</span><span><b>SPACE</b> jump · climb</span><span><b>C</b> crouch</span><span><b>E</b> zipline · ladder</span><span><b>R</b> reload</span><span><b>Q</b> sidearm</span><span><b>ESC</b> pause</span>'; }
  fade(v) { this.el.fade.style.opacity = v; }

  // ---- play
  time(t, total, label, cls) { const left = Math.max(0, total - t); const m = Math.floor(left / 60), s = Math.floor(left % 60); const txt = `${pad2(m)}:${pad2(s)}`; if (txt !== this._t) { this._t = txt; this.el.time.textContent = txt; this.el.time.classList.toggle('late', left <= 30); } if (label !== this._pl) { this._pl = label; this.el.phase.textContent = label; this.el.phase.className = 'lab ' + (cls || ''); } }
  alive(actors, me) { const n = actors.filter(a => a.alive).length; this.el['alive-n'].textContent = n; const pips = this.el.pips.children; actors.forEach((a, i) => { if (!pips[i]) return; pips[i].className = (a.alive ? '' : 'dead') + (a === me ? ' me' : ''); }); this.el.kills.textContent = `${me.kills} elimination${me.kills === 1 ? '' : 's'}`; }
  health(hp) { const v = Math.max(0, Math.ceil(hp)); this.el.hpn.textContent = v; this.el.hpbar.querySelector('i').style.width = v + '%'; this.el.hpbar.querySelector('em').style.width = v + '%'; this.el.hp.classList.toggle('low', v <= 35); if (v > this.lastHp + 4) { this.el.gain.textContent = '+' + (v - this.lastHp); this.el.gain.style.opacity = 1; this.gainT = 1.4; } this.lastHp = v; }
  where(text) { if (text !== this._w) { this._w = text; this.el.where.textContent = text; } }
  seen(on, warn) { const t = on ? 'the angel sees you' : warn ? 'hide from the angel' : 'unseen'; if (t !== this._s) { this._s = t; this.el.seen.textContent = t; this.el.seen.classList.toggle('on', on || warn); } }
  weapon(p) { const st = p.w[p.cur]; this.el.wname.textContent = p.weapon.name; this.el.mag.textContent = st.mag; this.el.res.textContent = '/ ' + st.reserve; this.el.ammo.classList.toggle('empty', st.mag === 0); this.el['b-zoom'].textContent = p.weapon.zooms[Math.min(p.zoomIdx, p.weapon.zooms.length - 1)] + '×'; }
  action(v) { const w = v < 0 ? 0 : Math.round(v * 100); if (w !== this._a) { this._a = w; this.el.act.firstElementChild.style.width = w + '%'; } }
  prompt(text, touch, passive) { const e = this.el.prompt, b = this.el['b-use']; if (!text) { if (!e.hidden) e.hidden = true; if (!b.hidden) b.hidden = true; this._p = null; return; } if (text === this._p) return; this._p = text; if (passive) { b.hidden = true; e.hidden = false; e.textContent = text; } else if (touch) { b.hidden = false; b.textContent = text; e.hidden = true; } else { e.hidden = false; e.innerHTML = `<kbd>E</kbd>${text}`; } }
  banner(text, dur = 2.4, small = false, sub = '', red = false) { const b = this.el.banner; b.querySelector('b').textContent = text; b.querySelector('span').textContent = sub; b.className = (small ? 'small ' : '') + (red ? 'red' : ''); b.style.opacity = 1; this.bannerT = dur; }
  feed(killer, victim, how, mine) { const d = document.createElement('div'); if (mine) d.className = 'me'; d.innerHTML = `${esc(killer)}<u></u>${esc(victim)}${how ? `<s>${esc(how)}</s>` : ''}`; this.el.feed.prepend(d); this.feedItems.unshift({ el: d, t: 6.5 }); while (this.feedItems.length > 5) { const o = this.feedItems.pop(); o.el.remove(); } }
  hitMarker(kill, head) { const h = this.el.hit; h.className = kill || head ? 'kill' : ''; h.style.opacity = 1; this.hitT = kill ? 0.5 : 0.22; }
  threat(pos, k = 1) { let a = this.arcs[0]; for (const c of this.arcs) if (c.t < a.t) a = c; a.t = 1.3 * k + 0.5; a.x = pos.x; a.z = pos.z; a.k = k; }
  target(actor) { const e = this.el.target; if (!actor) { if (!e.hidden) e.hidden = true; this._tg = null; return; } if (e.hidden) e.hidden = false; const key = actor.name + Math.ceil(actor.hp); if (key !== this._tg) { this._tg = key; e.querySelector('b').textContent = `${actor.name} · ${Math.max(0, Math.ceil(actor.hp))}`; e.querySelector('i').style.width = Math.max(0, actor.hp) + '%'; } }
  scope(on, zoom, range, focus, gasp, touch) { const e = this.el; if (e.scope.hidden === on) { e.scope.hidden = !on; e.cross.style.visibility = on ? 'hidden' : ''; } if (!on) return; const z = zoom + '×'; if (z !== this._z) { this._z = z; e.zoomx.textContent = z; } const r = range > 0 ? Math.round(range) + ' m' : '— m'; if (r !== this._r) { this._r = r; e.range.textContent = r; } e.breath.firstElementChild.style.width = Math.round(focus * 100) + '%'; e.breath.classList.toggle('out', gasp > 0); if (this._ht !== touch) { this._ht = touch; e.hold.textContent = touch ? 'crouch to steady' : 'shift · hold breath'; } }
  syncCrouch(v) { this.el['b-crouch'].classList.toggle('lit', v); if (this.g.input && this.g.input.touch) this.g.input.down.crouch = v; }   // the on-screen DUCK button is a toggle; a keyboard key must keep its own state
  stick(on, x, y, dx, dy) { const s = this.el.stick; s.hidden = !on; if (on) { s.style.left = x + 'px'; s.style.top = y + 'px'; s.firstElementChild.style.transform = `translate(${dx * 34}px,${dy * 34}px)`; } }

  // ---- online extras
  teamMode(on, mine) { this.teams = on; this.myTeam = mine; this.el.score.hidden = true; for (const el of this.tagEls.values()) el.remove(); this.tagEls.clear(); }
  score(text) { const e = this.el.score; if (!text) { if (!e.hidden) e.hidden = true; return; } if (e.hidden) e.hidden = false; if (text !== this._sc) { this._sc = text; e.innerHTML = text; } }
  netResults(on, host) { this.el.again.hidden = on; this.el.tolobby.hidden = !(on && host); this.el.rwait.hidden = !(on && !host); document.getElementById('rleave').hidden = !on; }
  netPause(on) { this.el.quit.textContent = on ? 'Leave room' : 'Leave match'; this.el.pause.querySelector('h2').textContent = on ? 'Menu' : 'Paused'; }
  // name tags over teammates (and over enemies the angel has revealed)
  _tags(game) {
    const cam = game.gfx.camera, w = game.gfx.w || innerWidth, h = game.gfx.h || innerHeight; const seen = new Set(); const v = this._tv || (this._tv = cam.position.clone());
    if (game.net && game.player.alive) for (const a of game.puppets) {
      const mate = this.teams && a.team === this.myTeam; const rev = a.revealedUntil > game.time; if (!a.alive || !(mate || rev)) continue;
      v.copy(a.pos); v.y += 2.15; v.project(cam); if (v.z > 1 || Math.abs(v.x) > 1.1 || Math.abs(v.y) > 1.1) continue;
      let el = this.tagEls.get(a.netId); if (!el) { el = document.createElement('div'); el.className = 'tag'; this.el.tags.appendChild(el); this.tagEls.set(a.netId, el); }
      const txt = (mate ? '' : '◆ ') + a.name + (a.bot ? '' : ''); if (el._t !== txt) { el._t = txt; el.textContent = txt; } el.classList.toggle('foe', !mate);
      el.style.transform = `translate(${((v.x + 1) / 2 * w).toFixed(1)}px,${((1 - v.y) / 2 * h).toFixed(1)}px)`; seen.add(a.netId);
    }
    for (const [id, el] of this.tagEls) if (!seen.has(id)) { el.remove(); this.tagEls.delete(id); }
  }
  update(dt, game) {
    this._tags(game);
    if (this.bannerT > 0) { this.bannerT -= dt; if (this.bannerT <= 0) this.el.banner.style.opacity = 0; }
    if (this.hitT > 0) { this.hitT -= dt; if (this.hitT <= 0) this.el.hit.style.opacity = 0; }
    if (this.gainT > 0) { this.gainT -= dt; if (this.gainT <= 0) this.el.gain.style.opacity = 0; }
    for (const f of this.feedItems) { f.t -= dt; if (f.t <= 0 && f.el.style.opacity !== '0') f.el.style.opacity = 0; }
    const p = game.player; for (const a of this.arcs) { if (a.t <= 0) { if (a.el.style.opacity !== '0') a.el.style.opacity = 0; continue; } a.t -= dt; const ang = Math.atan2(-(a.x - p.pos.x), -(a.z - p.pos.z)) - p.yaw; a.el.style.transform = `rotate(${(-ang * 180 / Math.PI).toFixed(1)}deg)`; a.el.style.opacity = Math.min(1, a.t * 1.6) * (0.55 + 0.45 * a.k); }
    this.mapT -= dt; if (this.mapT <= 0) { this.mapT = 0.1; this._map(game); }
  }
  _map(game) {
    // the whole halo, always: centred on the block, turned so that "up" is where you are looking, zooming in as the ring tightens
    const cv = this.el.map, c = this.mapCtx; const S = cv.width, R = S / 2; const ar = game.arena, p = game.player, z = game.zone;
    const want = Math.min(100, Math.max(30, z.r + 15)); this.mapRange = this.mapRange ? this.mapRange + (want - this.mapRange) * 0.12 : want; const range = this.mapRange, k = R / range;
    c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, S, S); c.save(); c.beginPath(); c.arc(R, R, R - 1, 0, 7); c.clip();
    const spect = !p.alive; const yaw = spect ? 0 : p.yaw; const cs = Math.cos(yaw), sn = Math.sin(yaw); const lw = 1 / k;   // 1 device pixel in metres
    c.translate(R, R); c.rotate(yaw); c.scale(k, k); c.translate(-z.cx, -z.cz);
    // roofs
    for (const r of ar.roofs) { const out = r.dist - Math.max(r.hx, r.hz) * 0.7 > z.r; c.fillStyle = out ? 'rgba(94,10,19,0.85)' : (!spect && r.i === p.roof ? 'rgba(242,242,239,0.82)' : 'rgba(170,171,174,0.42)'); c.fillRect(r.x0, r.z0, r.x1 - r.x0, r.z1 - r.z0); }
    // links
    c.lineWidth = lw * 1.1; for (const l of ar.links) { if (l.kind === 'step') continue; c.strokeStyle = 'rgba(242,242,239,0.5)'; c.setLineDash(l.kind === 'pad' ? [lw * 3, lw * 3] : l.kind === 'jump' ? [lw * 1.5, lw * 2] : []); c.beginPath(); c.moveTo(l.p0.x, l.p0.z); c.lineTo(l.p1.x, l.p1.z); c.stroke(); } c.setLineDash([]);
    // halo now / next
    c.lineWidth = lw * 3; c.strokeStyle = '#b51224'; c.beginPath(); c.arc(z.cx, z.cz, z.r, 0, 7); c.stroke();
    if (z.nextR < z.r - 0.5) { c.lineWidth = lw * 1.6; c.strokeStyle = 'rgba(242,242,239,0.75)'; c.setLineDash([lw * 5, lw * 5]); c.beginPath(); c.arc(z.cx, z.cz, z.nextR, 0, 7); c.stroke(); c.setLineDash([]); }
    // the angel
    c.strokeStyle = '#b51224'; c.lineWidth = lw * 1.8; const a = lw * 5; c.beginPath(); c.arc(z.cx, z.cz, a, 0, 7); c.stroke(); c.beginPath(); c.moveTo(z.cx - a * 0.8, z.cz); c.lineTo(z.cx + a * 0.8, z.cz); c.moveTo(z.cx, z.cz - a * 0.8); c.lineTo(z.cx, z.cz + a * 0.8); c.stroke();
    // revealed snipers + fresh shots
    for (const o of game.actors) { if (o === p || !o.alive) continue; if (this.teams && o.team === this.myTeam) { c.fillStyle = '#f2f2ef'; c.beginPath(); c.arc(o.pos.x, o.pos.z, lw * 3.6, 0, 7); c.fill(); continue; } const rev = o.revealedUntil > game.time || (spect && !game.net); const shot = game.time - o.lastShot < 2.5; if (rev) { c.fillStyle = '#b51224'; c.beginPath(); c.arc(o.pos.x, o.pos.z, lw * 4.5, 0, 7); c.fill(); } else if (shot) { c.strokeStyle = 'rgba(181,18,36,0.9)'; c.lineWidth = lw * 1.8; c.beginPath(); c.arc(o.lastShotPos.x, o.lastShotPos.z, lw * (6 + (game.time - o.lastShot) * 4), 0, 7); c.stroke(); } }
    c.restore();
    // you: an arrow that always points up (held at the rim when you are far outside the picture)
    if (!spect) { let dx = p.pos.x - z.cx, dz = p.pos.z - z.cz; let mx = (dx * cs - dz * sn) * k, my = (dx * sn + dz * cs) * k; const d = Math.hypot(mx, my), lim = R - 12; if (d > lim) { mx *= lim / d; my *= lim / d; }
      c.save(); c.translate(R + mx, R + my); c.fillStyle = '#f2f2ef'; c.strokeStyle = 'rgba(5,5,5,0.9)'; c.lineWidth = 2; c.beginPath(); c.moveTo(0, -10); c.lineTo(7, 8); c.lineTo(0, 4); c.lineTo(-7, 8); c.closePath(); c.stroke(); c.fill(); c.restore(); }
    // north tick
    c.save(); c.translate(R, R); c.rotate(yaw); c.fillStyle = 'rgba(242,242,239,0.8)'; c.font = '700 15px "JetBrains Mono",monospace'; c.textAlign = 'center'; c.fillText('N', 0, -R + 17); c.restore();
  }
  results(d) {
    const e = this.el; e.rplace.textContent = d.placeLabel; e.rhead.textContent = d.head; e.rhead.className = d.win ? 'win' : 'lose'; e.rsub.textContent = d.sub;
    e.stats.innerHTML = d.stats.map(([v, l]) => `<div><b>${v}</b><span class="lab">${l}</span></div>`).join(''); e.rlog.innerHTML = d.log;
  }
}

const esc = (t) => String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

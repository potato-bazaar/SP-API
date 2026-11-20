// Online menus: name, create / join by code, the room lobby (teams, bots, rules, ready, start), and the hand-off to a match.
import { Net, serverUrl, roomFromUrl, inviteLink } from './net.js';
import { TEAM_NAMES } from './netgame.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const SKILL = ['RECRUIT', 'MARKSMAN', 'GHOST'];

export class Online {
  constructor(game) {
    this.g = game; this.url = serverUrl(); this.net = null; this.room = null; this.toastT = 0;
    const btn = $('online-btn'); if (!this.url) return;   // no room server for this copy of the game (e.g. the single-player page)
    btn.hidden = false; btn.disabled = false; btn.addEventListener('click', () => this.open());
    $('ob-back').addEventListener('click', () => { this.g.hud.show('title'); });
    $('mk').addEventListener('click', () => { if (!this._name()) return; this._connect(); this.net.send({ t: 'create', settings: { ...(this._lastSettings() || {}), map: (typeof window.RNMAP === 'function' ? window.RNMAP() : window.SCMAP) || 'city' } }); this._stat('making a room…'); });
    $('jn').addEventListener('click', () => this._join());
    $('code').addEventListener('keydown', (e) => { if (e.key === 'Enter') this._join(); });
    $('code').addEventListener('input', (e) => { e.target.value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''); });
    $('nm').addEventListener('keydown', (e) => { if (e.key === 'Enter') $('mk').click(); });
    $('lcopy').addEventListener('click', () => this._copy(inviteLink(this.room.code), 'invite link copied'));
    $('lcopyc').addEventListener('click', () => this._copy(this.room.code, 'code copied'));
    $('lleave').addEventListener('click', () => this.leave());
    $('lready').addEventListener('click', () => { const me = this._me(); this.net.send({ t: 'ready', v: !(me && me.ready) }); });
    $('lstart').addEventListener('click', () => this.net.send({ t: 'start' }));
    $('tolobby').addEventListener('click', () => this.net.send({ t: 'lobby' }));
    $('rleave').addEventListener('click', () => this.leave());
    game.leaveNet = () => this.leave(true);
    let saved = ''; try { saved = localStorage.getItem('sc.name') || ''; } catch (e) { /* private mode */ } $('nm').value = saved;
    const code = roomFromUrl(); if (code) { $('code').value = code; this.open(); if (saved) setTimeout(() => this._join(), 50); }
  }
  open() { this.g.audio.start(); this.g.hud.show('online'); setTimeout(() => (($('nm').value ? $('code') : $('nm'))).focus(), 30); }
  _name() { const n = $('nm').value.trim().replace(/[^\p{L}\p{N} _.\-]/gu, '').slice(0, 16); if (!n) { this._stat('type a name first', true); $('nm').focus(); return null; } $('nm').value = n; if (this.net) this.net.setName(n); else this._pendingName = n; try { localStorage.setItem('sc.name', n); } catch (e) { /* ignore */ } return n; }
  _join() { if (!this._name()) return; const c = $('code').value.trim().toUpperCase(); if (c.length < 5) { this._stat('room codes have 5 letters', true); return; } this._connect(); this.net.send({ t: 'join', code: c, map: (typeof window.RNMAP === 'function' ? window.RNMAP() : window.SCMAP) || 'city' }); this._stat('joining ' + c + '…'); }
  _lastSettings() { try { return JSON.parse(localStorage.getItem('sc.rules') || 'null') || undefined; } catch (e) { return undefined; } }
  _stat(t, bad) { const e = $('netstat'); e.textContent = t; e.classList.toggle('bad', !!bad); }
  toast(t, ms = 3200) { const e = $('toast'); e.textContent = t; e.hidden = false; clearTimeout(this.toastT); this.toastT = setTimeout(() => { e.hidden = true; }, ms); }
  _copy(text, ok) { const done = () => this.toast(ok, 1800); try { navigator.clipboard.writeText(text).then(done, () => this._fallbackCopy(text, done)); } catch (e) { this._fallbackCopy(text, done); } }
  _fallbackCopy(text, done) { const t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); done(); } catch (e) { this.toast(text, 6000); } t.remove(); }
  isHost() { return this.room && this.net && this.room.host === this.net.id; }
  _me() { return this.room && this.room.members.find(m => m.id === this.net.id); }

  _connect() {
    if (this.net) return; const n = this.net = new Net(this.url); if (this._pendingName) n.name = this._pendingName;
    n.on('status', (m) => { if (m.state === 'reconnecting') this.toast('connection lost · reconnecting…', 2500); if (m.state === 'failed') this._stat('could not reach the room server', true); });
    n.on('welcome', () => { if (this._pendingName) n.setName(this._pendingName); });
    n.on('error', (m) => {
      const sw = /^MAPSWITCH:(city|loop|glass)$/.exec(m.msg || '');
      if (sw && typeof window.RSWITCH === 'function') { window.RSWITCH(sw[1], ($('code') && $('code').value) || (this.room && this.room.code) || ''); return; }
      // swept after a long drop: server no longer has us, clear the stale lobby so it doesn't look like we're still in
      if (/not in a room/i.test(m.msg || '') && this.room) {
        this.room = null; if (this.g.net) this.g.stopNet(); this.g.state = 'title'; this.g.hud.show('online');
        this._stat('connection lost too long · rejoin with the room code', true); this.toast(m.msg); return;
      }
      this.toast(m.msg); this._stat(m.msg, true);
    });
    n.on('notice', (m) => this.toast(m.text, 2600));
    n.on('left', (m) => {
      if (m.why === 'switch') return;   // create/join into another room: the next room message is the real hand-off
      this.room = null; if (this.g.net) { this.g.stopNet(); } this.g.state = 'title'; this.g.hud.show('online');
      const msg = m.why === 'kicked' ? 'the host removed you from the room' : m.why === 'timeout' ? 'connection lost too long · you were removed from the room' : 'you left the room';
      this._stat(msg, m.why === 'kicked' || m.why === 'timeout');
    });
    n.on('room', (m) => { if (typeof window.RMAPSW === 'function' && window.RMAPSW(m)) return; this._room(m); });
    n.on('start', (m) => { this.g.startNet(n, m, this); this._setUrl(this.room ? this.room.code : null); });
    n.on('s', (m) => this.g.onNetSnap(m));
    n.on('chat', (m) => this.toast(`${m.from}: ${m.text}`, 4000));
    n.connect();
  }
  leave(quiet) { if (this.net) this.net.send({ t: 'leave' }); this.room = null; if (this.g.net) this.g.stopNet(); this._setUrl(null); if (!quiet) { this.g.toTitle(); } }
  _setUrl(code) { try { const h = new URLSearchParams(location.hash.slice(1)); if (code) h.set('room', code); else h.delete('room'); const s = h.toString(); history.replaceState(null, '', location.pathname + location.search + (s ? '#' + s : '')); } catch (e) { /* sandboxed frame */ } }

  _room(r) {
    const first = !this.room; this.room = r; this._setUrl(r.code);
    if (r.state === 'lobby') { if (this.g.net) { this.g.stopNet(); this.g.state = 'title'; } this.g.hud.show('lobby'); this.render(); if (first) this._stat(''); }
    else if (r.state === 'results' && this.g.net && this.g.resultsShown) this.g.hud.netResults(true, this.isHost());
    else if (!this.g.net) { this.g.hud.show('lobby'); this.render(); $('lnote').textContent = 'a match is running in this room · you will join the next one'; }
    try { if (this.isHost()) localStorage.setItem('sc.rules', JSON.stringify(r.settings)); } catch (e) { /* ignore */ }
  }
  render() {
    const r = this.room, S = r.settings, host = this.isHost(), me = this._me(), teams = S.mode !== 'ffa'; const lobby = r.state === 'lobby';
    $('lcode').textContent = r.code; $('lhostonly').hidden = host;
    $('lmode').textContent = `${S.mode === 'ffa' ? 'free for all' : S.mode} · ${r.members.length + r.bots.length} / ${r.slots} snipers`;
    // people + bots
    const row = (m) => `<div class="who${m.id === this.net.id ? ' me' : ''}${m.online ? '' : ' off'}"><span class="n">${esc(m.name)}</span>${m.id === r.host ? '<span class="st host">HOST</span>' : `<span class="st${m.ready ? ' ok' : ''}">${m.ready ? 'READY' : m.online ? 'NOT READY' : 'OFFLINE'}</span>`}${host && m.id !== this.net.id && lobby ? `<button data-kick="${esc(m.id)}" title="remove from room" aria-label="remove ${esc(m.name)}">×</button><button data-host="${esc(m.id)}" title="make host" aria-label="make ${esc(m.name)} host">★</button>` : ''}</div>`;
    const botRow = (b) => `<div class="who bot"><span class="n">AI sniper</span><span class="st">${SKILL[S.botSkill]}</span></div>`;
    let html = '';
    if (teams) { const size = r.slots / 2; for (const t of [0, 1]) { const ms = r.members.filter(m => m.team === t), bs = r.bots.filter(b => b.team === t); const free = size - ms.length - bs.length;
      html += `<div class="tcol t${t}"><h3>TEAM ${TEAM_NAMES[t]}${lobby && me && me.team !== t && ms.length < size ? `<button data-team="${t}">JOIN</button>` : ''}</h3>${ms.map(row).join('')}${bs.map(botRow).join('')}${free > 0 ? `<div class="empty">${free} open</div>` : ''}</div>`; } }
    else { const free = r.slots - r.members.length - r.bots.length; html = `<div class="tcol"><h3>SNIPERS</h3>${r.members.map(row).join('')}${r.bots.map(botRow).join('')}${free > 0 ? `<div class="empty">${free} open · share the code</div>` : ''}</div>`; }
    const T = $('lteams'); T.innerHTML = html; T.classList.toggle('two', teams);
    T.querySelectorAll('[data-team]').forEach(b => b.addEventListener('click', () => this.net.send({ t: 'team', team: +b.dataset.team })));
    T.querySelectorAll('[data-kick]').forEach(b => b.addEventListener('click', () => this.net.send({ t: 'kick', id: b.dataset.kick })));
    T.querySelectorAll('[data-host]').forEach(b => b.addEventListener('click', () => this.net.send({ t: 'host', id: b.dataset.host })));
    // rules
    const maxBots = Math.max(0, r.slots - r.members.length);
    const rows = [
      ['mode', 'mode', [['ffa', 'FREE FOR ALL'], ['2v2', '2 V 2'], ['4v4', '4 V 4']]],
      ...(teams ? [] : [['room size', 'maxPlayers', [2, 3, 4, 5, 6, 8].map(n => [n, String(n)])]]),
      ['AI snipers', 'bots', Array.from({ length: maxBots + 1 }, (_, i) => [i, String(i)])],
      ['AI skill', 'botSkill', SKILL.map((n, i) => [i, n])],
      ['lives', 'respawn', [[false, 'ONE LIFE'], [true, 'RESPAWN']]],
      ...(S.respawn ? [['respawn after', 'respawnDelay', [3, 5, 8, 12].map(n => [n, n + ' S'])], ['win at', 'scoreLimit', [[0, 'CLOCK'], [10, '10'], [20, '20'], [30, '30']]]] : []),
      ['time', 'timeLimit', [180, 300, 420, 600].map(n => [n, n / 60 + ' MIN'])],
      ['the halo', 'halo', [[true, 'CLOSES'], [false, 'OFF']]],
      ['the angel looks', 'angelGaze', [[true, 'ON'], [false, 'OFF']]],
      ['headshots only', 'headshotsOnly', [[false, 'NO'], [true, 'YES']]],
      ['the hammer', 'hammer', [[true, 'ALLOWED'], [false, 'OFF']]],
      ['the knife', 'knife', [[true, 'ON'], [false, 'OFF']]], ['gas cans', 'gas', [[true, 'ON'], [false, 'OFF']]], ['smoke bombs', 'smoke', [[true, 'ON'], [false, 'OFF']]], ['decoys', 'decoy', [[true, 'ON'], [false, 'OFF']]],
      ['attack drone', 'drone', [[true, 'ON'], [false, 'OFF']]], ['missile strike', 'strike', [[true, 'ON'], [false, 'OFF']]],
      ...(teams ? [['friendly fire', 'friendlyFire', [[false, 'OFF'], [true, 'ON']]]] : []),
    ];
    $('lset').innerHTML = rows.map(([label, key, opts]) => `<div class="row"><span class="lab">${label}</span><div class="seg">${opts.map(([v, t]) => `<button type="button" data-k="${key}" data-v='${JSON.stringify(v)}' aria-pressed="${S[key] === v}" ${host && lobby ? '' : 'disabled'}>${t}</button>`).join('')}</div></div>`).join('');
    $('lset').querySelectorAll('button[data-k]').forEach(b => b.addEventListener('click', () => { if (!this.isHost()) return; this.net.send({ t: 'settings', patch: { [b.dataset.k]: JSON.parse(b.dataset.v) } }); }));
    // actions
    $('lstart').hidden = !host || !lobby; $('lready').hidden = host || !lobby; $('lready').textContent = me && me.ready ? 'Not ready' : 'Ready'; $('lready').classList.toggle('red', !(me && me.ready));
    const waiting = r.members.filter(m => m.online && !m.ready && m.id !== r.host).map(m => m.name);
    $('lnote').textContent = !lobby ? 'a match is running in this room' : host ? (waiting.length ? `waiting for ${waiting.join(', ')}` : r.members.length + r.bots.length < 2 ? 'add an AI sniper or share the code' : 'everyone is ready') : (me && me.ready ? 'waiting for the host to start' : 'press ready when you are');
  }
}

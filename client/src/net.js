// Connection to the room server: one WebSocket, automatic reconnect with the same token, round-trip timing,
// and a clock that follows the server's match time.
const PROTOCOL = 1;

export function serverUrl() {
  const h = new URLSearchParams(location.hash.slice(1));
  const explicit = h.get('server') || (window.SC_SERVER || '');
  if (explicit) return explicit.replace(/^http/, 'ws').replace(/\/?$/, '') + (/\/ws$/.test(explicit) ? '' : '/ws');
  const meta = document.querySelector('meta[name="sc:server"]');
  if (meta && meta.content === 'same-origin') return (location.protocol === 'https:' ? 'wss://' : 'ws://') + location.host + '/ws';
  if (meta && meta.content) return meta.content;
  return null;
}
// a room code in the address: /r/CODE (served by the room server) or #room=CODE
export function roomFromUrl() {
  const m = /\/r\/([A-Za-z0-9]{5,8})\b/.exec(location.pathname); if (m) return m[1].toUpperCase();
  const h = new URLSearchParams(location.hash.slice(1)); const c = h.get('room'); return c ? c.toUpperCase() : null;
}
export function inviteLink(code) {
  const meta = document.querySelector('meta[name="sc:server"]');
  if (meta && meta.content === 'same-origin') return `${location.origin}/r/${code}`;
  return `${location.href.split('#')[0]}#room=${code}`;
}

const store = { get(k) { try { return sessionStorage.getItem(k) || localStorage.getItem(k); } catch (e) { return null; } }, set(k, v, persist) { try { (persist ? localStorage : sessionStorage).setItem(k, v); } catch (e) { /* private mode */ } } };

export class Net {
  constructor(url) {
    this.url = url; this.ws = null; this.handlers = {}; this.rtt = 0.12; this.open = false; this.closed = false; this.id = null; this.token = store.get('sc.token'); this.name = store.get('sc.name') || '';
    this.queue = []; this.retry = 0; this.seq = 0;
    // match clock: server match time t arrives with each snapshot; we follow it smoothly
    this.clockT = 0; this.clockAt = 0; this.haveClock = false;
  }
  on(t, f) { (this.handlers[t] = this.handlers[t] || []).push(f); return this; }
  emit(t, m) { for (const f of this.handlers[t] || []) f(m); for (const f of this.handlers['*'] || []) f(m); }
  connect() {
    if (this.ws || this.closed) return; let ws; try { ws = new WebSocket(this.url); } catch (e) { this.emit('status', { t: 'status', state: 'failed', why: String(e.message || e) }); return; }
    this.ws = ws; this.emit('status', { t: 'status', state: 'connecting' });
    ws.onopen = () => { this.open = true; this.retry = 0; this._send({ t: 'hello', name: this.name || undefined, token: this.token || undefined, v: PROTOCOL }); for (const m of this.queue.splice(0)) this._send(m); this.emit('status', { t: 'status', state: 'open' }); this._pinger(); };
    ws.onmessage = (ev) => { let m; try { m = JSON.parse(ev.data); } catch (e) { return; } this._recv(m); };
    ws.onclose = () => { this.open = false; this.ws = null; clearInterval(this.pingT); if (this.closed) return; this.emit('status', { t: 'status', state: 'reconnecting' }); const d = Math.min(8000, 400 * 2 ** this.retry++); setTimeout(() => this.connect(), d); };
    ws.onerror = () => {};
  }
  close() { this.closed = true; clearInterval(this.pingT); if (this.ws) this.ws.close(); }
  _pinger() { clearInterval(this.pingT); const p = () => this._send({ t: 'ping', c: performance.now(), r: +this.rtt.toFixed(3) }); p(); this.pingT = setInterval(p, 2000); }
  _send(m) { if (this.ws && this.open) this.ws.send(JSON.stringify(m)); }
  send(m) { if (this.open) this._send(m); else if (m.t !== 'in' && m.t !== 'ping') this.queue.push(m); }
  _recv(m) {
    if (m.t === 'welcome') { this.id = m.id; this.token = m.token; store.set('sc.token', m.token); }
    else if (m.t === 'pong') { const r = (performance.now() - m.c) / 1000; this.rtt = this.rtt * 0.75 + r * 0.25; return; }
    else if (m.t === 's') { this._clock(m.s.t); }
    else if (m.t === 'start') { this.haveClock = false; this._clock(m.snap.t); }
    this.emit(m.t, m);
  }
  _clock(t) {
    const now = performance.now() / 1000;
    if (!this.haveClock || Math.abs(this.now() - t) > 0.5) { this.clockT = t; this.clockAt = now; this.haveClock = true; return; }
    // nudge toward the newest server time without jumping backward
    const est = this.now(); const target = t + 0.5 / 30; this.clockT = est + (target - est) * 0.1; this.clockAt = now;
  }
  now() { return this.clockT + (performance.now() / 1000 - this.clockAt); }
  setName(n) { this.name = n; store.set('sc.name', n, true); if (this.open) this.send({ t: 'name', name: n }); }
}

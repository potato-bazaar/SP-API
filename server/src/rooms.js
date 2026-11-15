// Rooms: invite codes, lobby, teams, host controls, reconnects, and the match loop for each room.
import crypto from 'node:crypto';
import { DEFAULTS, MODES, SettingsSchema, normalise, slotsFor } from './rules.js';
import { Match, TICK } from './engine.js';
import { loadWorld } from './world.js';

const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';   // no 0/O, 1/I: codes are read out loud
const CODE_LEN = 5;
const RECONNECT_GRACE = 45_000;                         // a dropped player keeps their slot (and their sniper) this long
const EMPTY_TTL = 60_000;
const HOST_GRACE = 10_000;
const id = () => crypto.randomBytes(6).toString('base64url');
// a socket session can take pre-encoded JSON (raw); anything else (tests, tools) gets the object
const deliver = (conn, msg, str) => (conn.raw ? conn.raw(str) : conn.send(msg));

export class Lobby {
  constructor({ maxRooms = 500, log = () => {} } = {}) { this.rooms = new Map(); this.sessions = new Map(); this.maxRooms = maxRooms; this.log = log; }
  newCode() { for (let n = 0; n < 50; n++) { let c = ''; const b = crypto.randomBytes(CODE_LEN); for (let i = 0; i < CODE_LEN; i++) c += ALPHABET[b[i] % ALPHABET.length]; if (!this.rooms.has(c)) return c; } throw new Error('no free room codes'); }
  create(session, patch) {
    if (this.rooms.size >= this.maxRooms) throw new UserError('The server is full. Try again in a minute.');
    const room = new Room(this, this.newCode(), session, patch); this.rooms.set(room.code, room); this.log('room', room.code, 'created by', session.name); return room;
  }
  find(code) { return this.rooms.get(String(code).toUpperCase()) || null; }
  drop(room) { room.stopLoop(); this.rooms.delete(room.code); this.log('room', room.code, 'closed'); }
  sweep(now = Date.now()) {
    for (const room of this.rooms.values()) {
      for (const m of room.members.values()) if (!m.conn && now - m.leftAt > RECONNECT_GRACE) room.remove(m.id, 'timeout');
      const h = room.members.get(room.hostId); if (h && !h.conn && now - h.leftAt > HOST_GRACE) { room._passHost(); room.broadcastRoom(); }
      if (room.humanCount() === 0 && now - room.emptySince > EMPTY_TTL) this.drop(room);
    }
  }
}
export class UserError extends Error {}

class Room {
  constructor(lobby, code, host, patch) {
    this.lobby = lobby; this.code = code; this.members = new Map(); this.hostId = host.id; this.state = 'lobby'; this.match = null; this.loop = null; this.round = 0; this.emptySince = Date.now(); this.chat = [];
    this.banned = new Set();   // ids the host kicked: they can't walk straight back in with the code
    this.settings = normalise(SettingsSchema.parse({ ...DEFAULTS, ...(patch || {}) }), 1); this.add(host);
  }
  humanCount() { let n = 0; for (const m of this.members.values()) if (m.conn || Date.now() - m.leftAt < RECONNECT_GRACE) n++; return n; }
  slots() { return slotsFor(this.settings); }
  teamsOn() { return MODES[this.settings.mode].teams; }
  teamCounts() { const c = [0, 0]; for (const m of this.members.values()) c[m.team]++; return c; }
  add(session) {
    if (this.members.has(session.id)) { // reconnect: same token, same slot, same sniper
      const m = this.members.get(session.id); m.conn = session; session.room = this; this.broadcastRoom();
      if (this.match && this.state !== 'lobby') session.send(this.startMsg(true));
      return m; }
    if (this.banned.has(session.id)) throw new UserError('The host removed you from this room.');
    if (this.members.size >= this.slots()) throw new UserError('That room is full.');
    if (this.state !== 'lobby') throw new UserError('That match has already started. Ask the host to bring the room back to the lobby.');
    const c = this.teamCounts(); const m = { id: session.id, name: session.name, team: this.teamsOn() ? (c[0] <= c[1] ? 0 : 1) : 0, ready: false, conn: session, leftAt: 0 };
    this.members.set(session.id, m); session.room = this; this.settings = normalise(this.settings, this.members.size); this.broadcastRoom(); return m;
  }
  // a socket closed: keep the slot for a while (reconnect with the same token)
  disconnect(session) {
    const m = this.members.get(session.id); if (!m || m.conn !== session) return; m.conn = null; m.leftAt = Date.now();
    if (this.state === 'lobby') { m.ready = false; }
    if (this.humanCount() === 0) this.emptySince = Date.now();
    this.broadcastRoom();   // the host keeps the crown through a short drop; sweep() hands it on if they stay away
  }
  remove(mid, why = 'left') {
    const m = this.members.get(mid); if (!m) return; this.members.delete(mid); if (m.conn) { m.conn.room = null; m.conn.send({ t: 'left', why }); }
    if (this.match) { const a = this.match.byId.get(mid); if (a && a.alive) this.match.damage(a, 999, null, { cause: 'drop' }); }
    if (this.members.size === 0) { this.emptySince = Date.now(); this.lobby.drop(this); return; }
    this._passHost(); this.settings = normalise(this.settings, this.members.size); this.broadcastRoom();
  }
  _passHost() { const h = this.members.get(this.hostId); if (h && h.conn) return; const next = [...this.members.values()].find(m => m.conn); if (next && next.id !== this.hostId) { this.hostId = next.id; this.broadcast({ t: 'notice', text: `${next.name} is now the host` }); } }
  isHost(s) { return s.id === this.hostId; }

  // ---- lobby actions
  setTeam(s, team) { this._lobbyOnly(); if (!this.teamsOn()) return; const m = this.members.get(s.id); const c = this.teamCounts(); if (m.team !== team && c[team] >= MODES[this.settings.mode].teamSize) throw new UserError('That team is full.'); m.team = team; m.ready = false; this.broadcastRoom(); }
  setReady(s, v) { this._lobbyOnly(); this.members.get(s.id).ready = v; this.broadcastRoom(); }
  setName(s, name) { const m = this.members.get(s.id); m.name = name; this.broadcastRoom(); }
  setSettings(s, patch) {
    this._hostOnly(s); this._lobbyOnly();
    const next = SettingsSchema.parse({ ...this.settings, ...patch });
    if (slotsFor(next) < this.members.size) throw new UserError(`${this.members.size} people are in the room; that mode has ${slotsFor(next)} places.`);
    const modeChanged = next.mode !== this.settings.mode; this.settings = normalise(next, this.members.size);
    if (modeChanged) { let i = 0; for (const m of this.members.values()) { m.team = this.teamsOn() ? (i++ % 2) : 0; m.ready = false; } }
    this.broadcastRoom();
  }
  kick(s, target) { this._hostOnly(s); if (target === s.id) return; if (!this.members.has(target)) return; this.banned.add(target); this.remove(target, 'kicked'); }
  giveHost(s, target) { this._hostOnly(s); const m = this.members.get(target); if (!m || !m.conn) return; this.hostId = target; this.broadcastRoom(); }
  say(s, text) { const m = this.members.get(s.id); const line = { from: m.name, text, at: Date.now() }; this.chat.push(line); if (this.chat.length > 30) this.chat.shift(); this.broadcast({ t: 'chat', ...line }); }
  _hostOnly(s) { if (!this.isHost(s)) throw new UserError('Only the host can do that.'); }
  _lobbyOnly() { if (this.state !== 'lobby') throw new UserError('Settings are locked during a match.'); }

  // ---- match
  roster() {
    const S = this.settings; const people = [...this.members.values()]; const out = people.map(m => ({ id: m.id, name: m.name, team: m.team }));
    const counts = this.teamCounts(); const size = this.teamsOn() ? MODES[S.mode].teamSize : 0;
    for (let i = 0; i < S.bots; i++) {
      let team = 0; if (this.teamsOn()) { team = counts[0] < size && (counts[0] <= counts[1] || counts[1] >= size) ? 0 : 1; if (counts[team] >= size) break; counts[team]++; }
      out.push({ id: 'bot' + (i + 1), name: '', team, bot: true });
    }
    return out;
  }
  start(s) {
    this._hostOnly(s); this._lobbyOnly(); const S = this.settings; const roster = this.roster();
    if (roster.length < 2) throw new UserError('Add a bot or wait for another player: a match needs at least two snipers.');
    if (this.teamsOn()) { const c = [0, 0]; for (const r of roster) c[r.team]++; if (!c[0] || !c[1]) throw new UserError('Both teams need at least one sniper (add bots or move someone across).'); }
    const notReady = [...this.members.values()].filter(m => m.conn && !m.ready && m.id !== this.hostId);
    if (notReady.length) throw new UserError(`Waiting for ${notReady.map(m => m.name).join(', ')} to ready up.`);
    this.round++; this.state = 'match'; this.match = new Match(loadWorld(), S, roster, null);
    this.broadcast(this.startMsg(false));
    this.startLoop(); this.broadcastRoom();
  }
  startMsg(rejoin) {
    const M = this.match; const roster = Object.fromEntries(M.actors.map(a => [a.netId, { name: a.name, team: a.team, bot: !a.human }]));
    const you = {}; for (const a of M.humans) you[a.netId] = { ammo: M._ammo(a) };
    return { t: 'start', rejoin, round: this.round, settings: this.settings, roster, ammo: you, events: rejoin ? [] : M.drain(), snap: M.snapshot(), log: M.log };
  }
  backToLobby(s) { this._hostOnly(s); if (this.state === 'lobby') return; this.stopLoop(); this.match = null; this.state = 'lobby'; for (const m of this.members.values()) m.ready = false; this.broadcastRoom(); }
  startLoop() {
    this.stopLoop(); let last = process.hrtime.bigint(), acc = 0, n = 0;
    this.loop = setInterval(() => {
      const now = process.hrtime.bigint(); acc += Number(now - last) / 1e9; last = now; if (acc > 0.5) acc = 0.5;
      const M = this.match; if (!M) return;
      while (acc >= TICK) { M.step(TICK); acc -= TICK; n++; }
      const ev = M.drain(); const msg = { t: 's', s: M.snapshot(), e: ev.length ? ev : undefined }; const str = JSON.stringify(msg);   // encoded once per tick, not once per player
      for (const m of this.members.values()) { if (m.conn) deliver(m.conn, msg, str); }
      if (M.state === 'over' && this.state === 'match') { this.state = 'results'; this.broadcastRoom(); setTimeout(() => { if (this.match === M) this.stopLoop(); }, 4000); }
    }, 1000 * TICK);
  }
  stopLoop() { if (this.loop) clearInterval(this.loop); this.loop = null; }
  // input from a member during a match
  matchMsg(s, msg) {
    const M = this.match; if (!M || this.state !== 'match') return;
    if (msg.t === 'in') M.input(s.id, msg);
    else if (msg.t === 'fire') { const lag = Math.min(0.6, (s.rtt || 0.1) / 2 + 0.1); M.fire(s.id, msg, lag); }   // half the round trip + the client's interpolation delay
    else if (msg.t === 'reload') M.reload(s.id, msg.w);
    else if (msg.t === 'fall') M.fall(s.id, msg.v);
    else if (msg.t === 'dev' && process.env.SC_DEV === '1') { const a = M.byId.get(s.id); if (a) { a.pos.set(...msg.tp); a.valid.copy(a.pos); M.events.push({ t: 'correct', id: a.netId, p: msg.tp }); } }
  }
  view() {
    return { t: 'room', code: this.code, host: this.hostId, state: this.state, round: this.round, settings: this.settings, slots: this.slots(),
      members: [...this.members.values()].map(m => ({ id: m.id, name: m.name, team: m.team, ready: m.ready, online: !!m.conn })), bots: this.roster().filter(r => r.bot).map(r => ({ id: r.id, team: r.team })) };
  }
  broadcastRoom() { this.broadcast(this.view()); }
  broadcast(msg) { const str = JSON.stringify(msg); for (const m of this.members.values()) if (m.conn) deliver(m.conn, msg, str); }
}

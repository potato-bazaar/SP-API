// HTTP (serves the game client) + WebSocket (rooms and matches) on one port.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import crypto from 'node:crypto';
import { WebSocketServer } from 'ws';
import { ClientMsg, PROTOCOL } from './protocol.js';
import { Lobby, UserError } from './rooms.js';
import { loadWorld, DIST } from './world.js';

const PORT = +(process.env.PORT || 8787);
const ORIGINS = (process.env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);   // empty = same-origin or any (dev)
const MAX_CONN_PER_IP = +(process.env.MAX_CONN_PER_IP || 12);
const log = (...a) => console.log(new Date().toISOString(), ...a);

// ---------------------------------------------------------------- static client (gzip cached in memory)
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.txt': 'text/plain; charset=utf-8', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon' };
const cache = new Map();
function staticFile(rel) {
  if (cache.has(rel)) return cache.get(rel);
  const f = path.join(DIST, rel); if (!f.startsWith(DIST) || !fs.existsSync(f) || !fs.statSync(f).isFile()) return null;
  let body = fs.readFileSync(f);
  if (rel === 'index.html') body = Buffer.from(page(body.toString('utf8')));
  const gz = zlib.gzipSync(body, { level: 9 }); const etag = '"' + crypto.createHash('sha1').update(body).digest('base64url').slice(0, 16) + '"';
  const e = { body, gz, etag, type: TYPES[path.extname(f)] || 'application/octet-stream' }; cache.set(rel, e); return e;
}
// the published page is a body fragment (the artifact host wraps it); here we wrap it ourselves
function page(fragment) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="sc:server" content="same-origin"><base href="/"><style>:root{box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;padding:0}[hidden]{display:none!important}</style></head><body>${fragment}</body></html>`;
}
const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x'); let rel = decodeURIComponent(url.pathname).replace(/^\/+/, '');
  if (rel === 'healthz') { res.writeHead(200, { 'content-type': 'application/json' }); res.end(JSON.stringify({ ok: true, rooms: lobby.rooms.size, sessions: wss.clients.size, protocol: PROTOCOL })); return; }
  if (rel === '' || rel.startsWith('r/')) rel = 'index.html';   // /r/CODE invite links open the game
  const f = staticFile(rel); if (!f) { res.writeHead(404); res.end('not found'); return; }
  const h = { 'content-type': f.type, etag: f.etag, 'cache-control': rel === 'index.html' ? 'no-cache' : 'public, max-age=3600', 'x-content-type-options': 'nosniff' };
  if (req.headers['if-none-match'] === f.etag) { res.writeHead(304, h); res.end(); return; }
  if (/\bgzip\b/.test(req.headers['accept-encoding'] || '')) { h['content-encoding'] = 'gzip'; h['content-length'] = f.gz.length; res.writeHead(200, h); res.end(req.method === 'HEAD' ? undefined : f.gz); }
  else { h['content-length'] = f.body.length; res.writeHead(200, h); res.end(req.method === 'HEAD' ? undefined : f.body); }
});

// ---------------------------------------------------------------- sockets
const lobby = new Lobby({ log });
const tokens = new Map();                 // token -> session id (lets a reconnect reclaim its slot)
const perIp = new Map();
const wss = new WebSocketServer({ server, path: '/ws', maxPayload: 8 * 1024, perMessageDeflate: false });

wss.on('connection', (ws, req) => {
  const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim();
  const origin = req.headers.origin || ''; if (ORIGINS.length && !ORIGINS.includes(origin)) { ws.close(4003, 'origin'); return; }
  if ((perIp.get(ip) || 0) >= MAX_CONN_PER_IP) { ws.close(4029, 'too many connections'); return; }
  perIp.set(ip, (perIp.get(ip) || 0) + 1);
  const s = { id: null, name: 'Sniper', room: null, rtt: 0.1, alive: true, budget: 120, ws, send(m) { if (ws.readyState === 1) ws.send(JSON.stringify(m)); } };
  const refill = setInterval(() => { s.budget = Math.min(120, s.budget + 60); }, 1000);   // ~60 messages/s sustained, bursts to 120
  ws.on('pong', () => { s.alive = true; });
  ws.on('message', (data, isBinary) => {
    if (isBinary || --s.budget < 0) return;
    let raw; try { raw = JSON.parse(data.toString()); } catch { return; }
    const p = ClientMsg.safeParse(raw); if (!p.success) { if (raw && (raw.t === 'settings' || raw.t === 'create')) s.send({ t: 'error', msg: 'Those settings are not allowed.' }); else if (raw && (raw.t === 'name' || raw.t === 'hello')) s.send({ t: 'error', msg: 'Names are 1-16 letters, numbers, spaces, _ . -' }); else if (raw && raw.t === 'join') s.send({ t: 'error', msg: 'Room codes are 5 letters and numbers.' }); else if (raw && raw.t !== 'in') s.send({ t: 'error', msg: 'bad message' }); return; }
    try { handle(s, p.data); } catch (e) { if (e instanceof UserError) s.send({ t: 'error', msg: e.message }); else if (e && e.name === 'ZodError') s.send({ t: 'error', msg: 'Those settings are not allowed.' }); else { log('error', e); s.send({ t: 'error', msg: 'Something went wrong on the server.' }); } }
  });
  ws.on('close', () => { clearInterval(refill); perIp.set(ip, Math.max(0, (perIp.get(ip) || 1) - 1)); if (s.room) s.room.disconnect(s); });
});

function handle(s, m) {
  if (m.t === 'hello') {
    if (m.v && m.v !== PROTOCOL) { s.send({ t: 'error', msg: 'Your game is out of date: reload the page.' }); return; }
    const known = m.token && tokens.get(m.token); s.id = known || crypto.randomBytes(6).toString('base64url'); const token = known ? m.token : crypto.randomBytes(18).toString('base64url'); tokens.set(token, s.id);
    if (m.name) s.name = m.name;
    s.send({ t: 'welcome', id: s.id, token, protocol: PROTOCOL });
    // back into the room this token was in (a refresh or a dropped connection)
    for (const room of lobby.rooms.values()) if (room.members.has(s.id)) { room.add(s); break; }
    return;
  }
  if (!s.id) return;
  if (m.t === 'ping') { if (m.r != null) s.rtt = s.rtt * 0.7 + m.r * 0.3; s.send({ t: 'pong', c: m.c }); return; }
  if (m.t === 'name') { s.name = m.name; if (s.room) s.room.setName(s, m.name); return; }
  if (m.t === 'create') { if (s.room) s.room.remove(s.id); const r = lobby.create(s, m.settings); return; }
  if (m.t === 'join') { const r = lobby.find(m.code); if (!r) throw new UserError('No room with that code. Check the letters and try again.'); if (s.room && s.room !== r) s.room.remove(s.id); r.add(s); return; }
  const r = s.room; if (!r) throw new UserError('You are not in a room.');
  switch (m.t) {
    case 'leave': r.remove(s.id); break;
    case 'team': r.setTeam(s, m.team); break;
    case 'ready': r.setReady(s, m.v); break;
    case 'settings': r.setSettings(s, m.patch); break;
    case 'kick': r.kick(s, m.id); break;
    case 'host': r.giveHost(s, m.id); break;
    case 'start': r.start(s); break;
    case 'lobby': r.backToLobby(s); break;
    case 'chat': r.say(s, m.text); break;
    default: r.matchMsg(s, m);
  }
}

// round-trip times (for lag compensation) and dead-socket cleanup
setInterval(() => {
  for (const ws of wss.clients) { if (ws._sc === false) { ws.terminate(); continue; } ws._sc = false; ws._pingAt = Date.now(); ws.ping(); }
}, 10_000);
wss.on('connection', (ws) => { ws._sc = true; ws.on('pong', () => { ws._sc = true; }); });
setInterval(() => lobby.sweep(), 5_000);

loadWorld(); log('world ready in', loadWorld().ms, 'ms;', 'serving', DIST);
server.listen(PORT, () => log(`Sniper City server on :${PORT}  (ws path /ws)`));
export { server, lobby };

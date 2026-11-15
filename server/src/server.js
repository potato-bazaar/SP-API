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
// Only believe X-Forwarded-For behind a proxy that sets it (nginx, Cloudflare). Facing the internet directly, any
// client could put a fresh address in it on every connection and walk straight past MAX_CONN_PER_IP.
const TRUST_PROXY = process.env.TRUST_PROXY === '1';
const ROOT = path.resolve(DIST), INDEX = path.join(ROOT, 'index.html');
const log = (...a) => console.log(new Date().toISOString(), ...a);

// ---------------------------------------------------------------- static client (gzip cached in memory)
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.txt': 'text/plain; charset=utf-8', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.xml': 'application/xml; charset=utf-8', '.webmanifest': 'application/manifest+json' };
const cache = new Map();
function staticFile(rel) {
  // Cache by the resolved file, not the request path: otherwise a/..%2Fgame.js, b/..%2Fgame.js, ... each store (and
  // gzip) another copy of the same file. The separator check also keeps a sibling such as client/dist-old out.
  const f = path.resolve(ROOT, rel); if (!f.startsWith(ROOT + path.sep)) return null;
  if (cache.has(f)) return cache.get(f);
  if (!fs.existsSync(f) || !fs.statSync(f).isFile()) return null;
  let body = fs.readFileSync(f); const index = f === INDEX;
  if (index) body = Buffer.from(page(body.toString('utf8')));
  const gz = zlib.gzipSync(body, { level: 9 }); const etag = '"' + crypto.createHash('sha1').update(body).digest('base64url').slice(0, 16) + '"';
  const e = { body, gz, etag, index, type: TYPES[path.extname(f)] || 'application/octet-stream' }; cache.set(f, e); return e;
}
// The page tells the client where the room server is (sc:server) and pins relative URLs to the root so /r/CODE
// invite links still load the assets. A full document keeps its own <head> (title, SEO and share tags) and gets
// these two tags added to it; a body fragment (the artifact host's format) is wrapped in a document of our own.
function page(fragment) {
  const head = /<head[^>]*>/i.exec(fragment);
  if (head) {
    const extra = '<meta name="sc:server" content="same-origin">' + (/<base\s/i.test(fragment) ? '' : '<base href="/">');
    return fragment.slice(0, head.index + head[0].length) + extra + fragment.slice(head.index + head[0].length);
  }
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="sc:server" content="same-origin"><base href="/"><style>:root{box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;padding:0}[hidden]{display:none!important}</style></head><body>${fragment}</body></html>`;
}
const server = http.createServer((req, res) => {
  // a malformed path (/%E0) makes decodeURIComponent throw; uncaught here, that would take the whole process down
  let rel; try { rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/^\/+/, ''); } catch { res.writeHead(400); res.end('bad request'); return; }
  if (rel === 'healthz') { res.writeHead(200, { 'content-type': 'application/json' }); res.end(JSON.stringify({ ok: true, rooms: lobby.rooms.size, sessions: wss.clients.size, protocol: PROTOCOL })); return; }
  if (rel === '' || rel.startsWith('r/')) rel = 'index.html';   // /r/CODE invite links open the game
  const f = staticFile(rel); if (!f) { res.writeHead(404); res.end('not found'); return; }
  const h = { 'content-type': f.type, etag: f.etag, 'cache-control': f.index ? 'no-cache' : 'public, max-age=3600', 'x-content-type-options': 'nosniff' };
  if (req.headers['if-none-match'] === f.etag) { res.writeHead(304, h); res.end(); return; }
  if (/\bgzip\b/.test(req.headers['accept-encoding'] || '')) { h['content-encoding'] = 'gzip'; h['content-length'] = f.gz.length; res.writeHead(200, h); res.end(req.method === 'HEAD' ? undefined : f.gz); }
  else { h['content-length'] = f.body.length; res.writeHead(200, h); res.end(req.method === 'HEAD' ? undefined : f.body); }
});

// ---------------------------------------------------------------- sockets
const lobby = new Lobby({ log });
const tokens = new Map();                 // token -> { id, seen } (lets a reconnect reclaim its slot)
const TOKEN_TTL = 30 * 60_000;            // a token nobody has used for this long, and that holds no room slot, is forgotten
const perIp = new Map();
const wss = new WebSocketServer({ server, path: '/ws', maxPayload: 8 * 1024, perMessageDeflate: false });

wss.on('connection', (ws, req) => {
  const ip = ((TRUST_PROXY && req.headers['x-forwarded-for']) || req.socket.remoteAddress || '').split(',')[0].trim();
  const origin = req.headers.origin || ''; if (ORIGINS.length && !ORIGINS.includes(origin)) { ws.close(4003, 'origin'); return; }
  if ((perIp.get(ip) || 0) >= MAX_CONN_PER_IP) { ws.close(4029, 'too many connections'); return; }
  perIp.set(ip, (perIp.get(ip) || 0) + 1);
  const s = { id: null, token: null, name: 'Sniper', room: null, rtt: 0.1, alive: true, budget: 120, ws,
    send(m) { if (ws.readyState === 1) ws.send(JSON.stringify(m)); },
    raw(str) { if (ws.readyState === 1) ws.send(str); } };   // already-encoded JSON: rooms encode a broadcast once, not once per player
  ws._s = s;
  const refill = setInterval(() => { s.budget = Math.min(120, s.budget + 60); }, 1000);   // ~60 messages/s sustained, bursts to 120
  ws.on('pong', () => { s.alive = true; });
  ws.on('message', (data, isBinary) => {
    if (isBinary || --s.budget < 0) return;
    let raw; try { raw = JSON.parse(data.toString()); } catch { return; }
    const p = ClientMsg.safeParse(raw); if (!p.success) { if (raw && (raw.t === 'settings' || raw.t === 'create')) s.send({ t: 'error', msg: 'Those settings are not allowed.' }); else if (raw && (raw.t === 'name' || raw.t === 'hello')) s.send({ t: 'error', msg: 'Names are 1-16 letters, numbers, spaces, _ . -' }); else if (raw && raw.t === 'join') s.send({ t: 'error', msg: 'Room codes are 5 letters and numbers.' }); else if (raw && raw.t !== 'in') s.send({ t: 'error', msg: 'bad message' }); return; }
    try { handle(s, p.data); } catch (e) { if (e instanceof UserError) s.send({ t: 'error', msg: e.message }); else if (e && e.name === 'ZodError') s.send({ t: 'error', msg: 'Those settings are not allowed.' }); else { log('error', e); s.send({ t: 'error', msg: 'Something went wrong on the server.' }); } }
  });
  ws.on('close', () => { clearInterval(refill); perIp.set(ip, Math.max(0, (perIp.get(ip) || 1) - 1)); if (s.room) s.room.disconnect(s); const t = s.token && tokens.get(s.token); if (t) t.seen = Date.now(); });
});

function handle(s, m) {
  if (m.t === 'hello') {
    // one hello per connection: a second one would mint another token and swap the id under a room that still holds the first
    if (s.id) return;
    if (m.v && m.v !== PROTOCOL) { s.send({ t: 'error', msg: 'Your game is out of date: reload the page.' }); return; }
    const known = m.token && tokens.get(m.token);
    s.id = known ? known.id : crypto.randomBytes(6).toString('base64url'); s.token = known ? m.token : crypto.randomBytes(18).toString('base64url');
    tokens.set(s.token, { id: s.id, seen: Date.now() });
    if (m.name) s.name = m.name;
    s.send({ t: 'welcome', id: s.id, token: s.token, protocol: PROTOCOL });
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
// forget tokens that are idle and hold nothing: otherwise every new visitor adds one for the life of the process
setInterval(() => {
  const live = new Set(); for (const ws of wss.clients) if (ws._s && ws._s.id) live.add(ws._s.id);
  for (const room of lobby.rooms.values()) for (const id of room.members.keys()) live.add(id);
  const now = Date.now(); for (const [tok, t] of tokens) if (!live.has(t.id) && now - t.seen > TOKEN_TTL) tokens.delete(tok);
}, 60_000);

loadWorld(); log('world ready in', loadWorld().ms, 'ms;', 'serving', DIST);
server.listen(PORT, () => log(`Sniper City server on :${PORT}  (ws path /ws)`));
export { server, lobby };

// HTTP (serves the game client) + WebSocket (rooms and matches) on one port, plus the same over HTTPS when a
// certificate is configured (TLS_CERT / TLS_KEY), so the game socket can skip Cloudflare.
import http from 'node:http';
import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import crypto from 'node:crypto';
import net from 'node:net';
import { fileURLToPath } from 'node:url';
import { WebSocketServer } from 'ws';
import { ClientMsg, PROTOCOL } from './protocol.js';
import { Lobby, UserError } from './rooms.js';
import { loadWorld, DIST } from './world.js';

const PORT = +(process.env.PORT || 8787);
const ORIGINS = (process.env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);   // empty = same-origin or any (dev)
const MAX_CONN_PER_IP = +(process.env.MAX_CONN_PER_IP || 12);
// Only believe X-Forwarded-For behind a proxy that sets it (nginx). Facing the internet directly, any client could
// put a fresh address in it on every connection and walk straight past MAX_CONN_PER_IP.
const TRUST_PROXY = process.env.TRUST_PROXY === '1';
// quicksnipergame.com reaches us through Cloudflare, so its players arrive from Cloudflare's addresses and would all
// share one connection limit. A connection that really comes from Cloudflare's published ranges
// (https://www.cloudflare.com/ips/) carries the player's address in CF-Connecting-IP; anyone else's header is ignored.
const CLOUDFLARE = new net.BlockList();
for (const c of ['173.245.48.0/20', '103.21.244.0/22', '103.22.200.0/22', '103.31.4.0/22', '141.101.64.0/18', '108.162.192.0/18', '190.93.240.0/20', '188.114.96.0/20',
  '197.234.240.0/22', '198.41.128.0/17', '162.158.0.0/15', '104.16.0.0/13', '104.24.0.0/14', '172.64.0.0/13', '131.0.72.0/22']) { const [a, p] = c.split('/'); CLOUDFLARE.addSubnet(a, +p, 'ipv4'); }
for (const c of ['2400:cb00::/32', '2606:4700::/32', '2803:f800::/32', '2405:b500::/32', '2405:8100::/32', '2a06:98c0::/29', '2c0f:f248::/32']) { const [a, p] = c.split('/'); CLOUDFLARE.addSubnet(a, +p, 'ipv6'); }
function clientIp(req) {
  let peer = req.socket.remoteAddress || ''; if (peer.startsWith('::ffff:')) peer = peer.slice(7);   // IPv4 seen through a dual-stack socket
  const fromCf = peer && CLOUDFLARE.check(peer, net.isIPv6(peer) ? 'ipv6' : 'ipv4');
  const cf = req.headers['cf-connecting-ip'];
  if (fromCf && typeof cf === 'string' && net.isIP(cf.trim())) return cf.trim();
  if (TRUST_PROXY && req.headers['x-forwarded-for']) return String(req.headers['x-forwarded-for']).split(',')[0].trim();
  return peer;
}
const ROOT = path.resolve(DIST), INDEX = path.join(ROOT, 'index.html');
// Direct game socket. Cloudflare routes some players far away (Airtel in India goes via Marseille: ~240 ms round trip
// to a Mumbai server instead of ~45 ms), which is fine for the website but bad for a shooter. With these set, pages
// served through Cloudflare tell the client to open its socket at GAME_WS_URL, a DNS-only host with our own certificate.
const TLS_CERT = process.env.TLS_CERT || '', TLS_KEY = process.env.TLS_KEY || '', HTTPS_PORT = +(process.env.HTTPS_PORT || 443);
const GAME_WS_URL = process.env.GAME_WS_URL || '';               // e.g. wss://play.quicksnipergame.com/ws
const ACME_DIR = process.env.ACME_DIR || '';                      // Let's Encrypt HTTP-01 webroot (outside the app, which deploys wipe)
// Written by deploy.sh: sha256 of the package that was just unpacked. Empty in local dev.
const BUILD = (() => { try { return fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'BUILD'), 'utf8').trim().slice(0, 40); } catch { return ''; } })();
function fromCloudflare(req) { let p = req.socket.remoteAddress || ''; if (p.startsWith('::ffff:')) p = p.slice(7); return !!p && CLOUDFLARE.check(p, net.isIPv6(p) ? 'ipv6' : 'ipv4'); }
const log = (...a) => console.log(new Date().toISOString(), ...a);

// ---------------------------------------------------------------- static client (gzip cached in memory)
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.txt': 'text/plain; charset=utf-8', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.xml': 'application/xml; charset=utf-8', '.webmanifest': 'application/manifest+json', '.mp3': 'audio/mpeg', '.wav': 'audio/wav' };
const cache = new Map();
function staticFile(rel, wsUrl) {
  // Cache by the resolved file, not the request path: otherwise a/..%2Fgame.js, b/..%2Fgame.js, ... each store (and
  // gzip) another copy of the same file. The separator check also keeps a sibling such as client/dist-old out.
  // index.html has one variant per socket address it points at (same origin, or GAME_WS_URL).
  const f = path.resolve(ROOT, rel); if (!f.startsWith(ROOT + path.sep)) return null;
  const index = f === INDEX; const key = index ? f + '\0' + (wsUrl || '') : f;
  if (cache.has(key)) return cache.get(key);
  if (!fs.existsSync(f) || !fs.statSync(f).isFile()) return null;
  let body = fs.readFileSync(f);
  if (index) body = Buffer.from(page(body.toString('utf8'), wsUrl));
  const gz = zlib.gzipSync(body, { level: 9 }); const etag = '"' + crypto.createHash('sha1').update(body).digest('base64url').slice(0, 16) + '"';
  const e = { body, gz, etag, index, type: TYPES[path.extname(f)] || 'application/octet-stream' }; cache.set(key, e); return e;
}
// The page tells the client where the room server is (sc:server) and pins relative URLs to the root so /r/CODE
// invite links still load the assets. A full document keeps its own <head> (title, SEO and share tags) and gets
// these two tags added to it; a body fragment (the artifact host's format) is wrapped in a document of our own.
function page(fragment, wsUrl) {
  // index.html is no-cache, but game.js is held for hours at the edge. A new query on each deploy makes Play load this commit.
  if (BUILD) fragment = fragment.replace('s.src="game.js"', `s.src="game.js?v=${BUILD.slice(0, 12)}"`);
  const head = /<head[^>]*>/i.exec(fragment);
  if (head) {
    const target = wsUrl ? wsUrl.replace(/[^\w:/.\-]/g, '') : 'same-origin';
    const extra = `<meta name="sc:server" content="${target}">` + (/<base\s/i.test(fragment) ? '' : '<base href="/">');
    return fragment.slice(0, head.index + head[0].length) + extra + fragment.slice(head.index + head[0].length);
  }
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="sc:server" content="same-origin"><base href="/"><style>:root{box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;padding:0}[hidden]{display:none!important}</style></head><body>${fragment}</body></html>`;
}
function serve(req, res) {
  // a malformed path (/%E0) makes decodeURIComponent throw; uncaught here, that would take the whole process down
  let rel; try { rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/^\/+/, ''); } catch { res.writeHead(400); res.end('bad request'); return; }
  if (rel === 'healthz') { res.writeHead(200, { 'content-type': 'application/json', 'cache-control': 'no-store' }); res.end(JSON.stringify({ ok: true, rooms: lobby.rooms.size, sessions: wss.clients.size, protocol: PROTOCOL, build: BUILD })); return; }
  // Let's Encrypt checks it controls the host by fetching a token file here (read fresh, never cached)
  const acme = /^\.well-known\/acme-challenge\/([A-Za-z0-9_-]{16,128})$/.exec(rel);
  if (acme) { const p = ACME_DIR && path.join(ACME_DIR, '.well-known', 'acme-challenge', acme[1]); if (p && fs.existsSync(p)) { res.writeHead(200, { 'content-type': 'text/plain' }); res.end(fs.readFileSync(p)); } else { res.writeHead(404); res.end('not found'); } return; }
  if (rel === '' || rel.startsWith('r/')) rel = 'index.html';   // /r/CODE invite links open the game
  const f = staticFile(rel, GAME_WS_URL && fromCloudflare(req) ? GAME_WS_URL : ''); if (!f) { res.writeHead(404); res.end('not found'); return; }
  const h = { 'content-type': f.type, etag: f.etag, 'cache-control': f.index ? 'no-cache' : 'public, max-age=3600', 'x-content-type-options': 'nosniff' };
  if (req.headers['if-none-match'] === f.etag) { res.writeHead(304, h); res.end(); return; }
  if (/\bgzip\b/.test(req.headers['accept-encoding'] || '')) { h['content-encoding'] = 'gzip'; h['content-length'] = f.gz.length; res.writeHead(200, h); res.end(req.method === 'HEAD' ? undefined : f.gz); }
  else { h['content-length'] = f.body.length; res.writeHead(200, h); res.end(req.method === 'HEAD' ? undefined : f.body); }
}
const server = http.createServer(serve);
// HTTPS twin: only when a certificate is configured and readable. Renewed certificates are picked up without a restart.
let secure = null;
function tlsFiles() { return { cert: fs.readFileSync(TLS_CERT), key: fs.readFileSync(TLS_KEY) }; }
if (TLS_CERT && TLS_KEY) {
  try {
    secure = https.createServer(tlsFiles(), serve);
    fs.watchFile(TLS_CERT, { interval: 6 * 3600_000 }, () => { try { secure.setSecureContext(tlsFiles()); log('TLS certificate reloaded'); } catch (e) { log('TLS reload failed', e.message); } });
  } catch (e) { log('HTTPS disabled:', e.message); secure = null; }
}

// ---------------------------------------------------------------- sockets
const lobby = new Lobby({ log });
const tokens = new Map();                 // token -> { id, seen } (lets a reconnect reclaim its slot)
const TOKEN_TTL = 30 * 60_000;            // a token nobody has used for this long, and that holds no room slot, is forgotten
const perIp = new Map();
const wss = new WebSocketServer({ noServer: true, maxPayload: 8 * 1024, perMessageDeflate: false });
// one socket server for both listeners: rooms and matches don't care whether a player came over http or https
function upgrade(req, sock, head) {
  let p; try { p = new URL(req.url, 'http://x').pathname; } catch { p = ''; }
  if (p !== '/ws') { sock.destroy(); return; }
  wss.handleUpgrade(req, sock, head, (ws) => wss.emit('connection', ws, req));
}
server.on('upgrade', upgrade); if (secure) secure.on('upgrade', upgrade);

wss.on('connection', (ws, req) => {
  const ip = clientIp(req);
  const origin = req.headers.origin || ''; if (ORIGINS.length && !ORIGINS.includes(origin)) { ws.close(4003, 'origin'); return; }
  if ((perIp.get(ip) || 0) >= MAX_CONN_PER_IP) { ws.close(4029, 'too many connections'); return; }
  perIp.set(ip, (perIp.get(ip) || 0) + 1);
  const s = { id: null, token: null, name: 'Sniper', room: null, rtt: 0.1, alive: true, budget: 120, ws,
    send(m) { if (ws.readyState === 1) ws.send(JSON.stringify(m)); },
    raw(str) { if (ws.readyState === 1) ws.send(str); } };   // already-encoded JSON: rooms encode a broadcast once, not once per player
  ws._s = s;
  const refill = setInterval(() => { s.budget = Math.min(120, s.budget + 60); }, 1000);   // ~60 messages/s sustained, bursts to 120
  // lag compensation runs on round trips the server times itself (see rttPing): a reply counts only if it echoes the
  // latest ping's sequence number, so a forged or stale pong can't skew it
  ws.on('pong', (d) => {
    ws._pongAt = Date.now();
    if (!d || d.length !== 4 || !ws._pingSent || d.readUInt32LE(0) !== ws._pingSeq) return;
    const rtt = Math.min(1.5, (performance.now() - ws._pingSent) / 1000); ws._pingSent = 0;
    s.rtt = s.rttN ? s.rtt * 0.7 + rtt * 0.3 : rtt; s.rttN = (s.rttN || 0) + 1;
  });
  ws._pongAt = Date.now(); rttPing(ws);
  ws.on('message', (data, isBinary) => {
    // any inbound frame means the socket is alive: some proxies / mobile browsers delay or drop WS ping/pong
    // while still delivering game traffic, and terminating those looked like a random kick from the room
    ws._pongAt = Date.now();
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
    s.maps = m.maps && m.maps.length ? m.maps : ['city'];   // the maps this client's build can load
    s.send({ t: 'welcome', id: s.id, token: s.token, protocol: PROTOCOL });
    // back into the room this token was in (a refresh or a dropped connection)
    for (const room of lobby.rooms.values()) if (room.members.has(s.id)) { room.add(s); break; }
    return;
  }
  if (!s.id) return;
  // the client's own round-trip figure (m.r) is ignored: trusting it let a player claim lag and earn the maximum rewind
  if (m.t === 'ping') { s.send({ t: 'pong', c: m.c }); return; }
  if (m.t === 'rtc') { if (s.room) s.room.rtc(s, m); return; }
  if (m.t === 'op') { s.op = m.k; if (s.room) s.room.setOp(s, m.k); return; }
  if (m.t === 'name') { s.name = m.name; if (s.room) s.room.setName(s, m.name); return; }
  if (m.t === 'create') { if (s.room) s.room.remove(s.id, 'switch'); const r = lobby.create(s, m.settings); return; }
  if (m.t === 'join') { const r = lobby.find(m.code); if (!r) throw new UserError('No room with that code. Check the letters and try again.'); if (s.room && s.room !== r) s.room.remove(s.id, 'switch'); r.add(s, m.map); return; }
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

// Round-trip times for lag compensation, measured here: every 2 s each socket gets a WebSocket ping carrying a
// sequence number. Browsers answer pings by themselves (no game code involved), so this times the network, not a
// figure the client chose. A socket with no pong AND no inbound game traffic for 60 s is dead and gets dropped.
function rttPing(ws) {
  ws._pingSeq = ((ws._pingSeq || 0) + 1) >>> 0; ws._pingSent = performance.now();
  const b = Buffer.alloc(4); b.writeUInt32LE(ws._pingSeq); try { ws.ping(b); } catch { /* socket closing */ }
}
setInterval(() => {
  const now = Date.now();
  for (const ws of wss.clients) { if (now - (ws._pongAt || now) > 60_000) { ws.terminate(); continue; } rttPing(ws); }
}, 2_000);
setInterval(() => lobby.sweep(), 5_000);
// forget tokens that are idle and hold nothing: otherwise every new visitor adds one for the life of the process
setInterval(() => {
  const live = new Set(); for (const ws of wss.clients) if (ws._s && ws._s.id) live.add(ws._s.id);
  for (const room of lobby.rooms.values()) for (const id of room.members.keys()) live.add(id);
  const now = Date.now(); for (const [tok, t] of tokens) if (!live.has(t.id) && now - t.seen > TOKEN_TTL) tokens.delete(tok);
}, 60_000);

loadWorld(); log('world ready in', loadWorld().ms, 'ms;', 'serving', DIST);
server.listen(PORT, () => log(`Sniper City server on :${PORT}  (ws path /ws)`));
// LOOP CITY is loaded (and its two big files zipped) a moment after boot, so the first loop room never stalls a match already running;
// if its data is missing the city still plays
const loopWarm = setTimeout(() => { try { log('loop world ready in', loadWorld('loop').ms, 'ms'); staticFile('loop.txt'); staticFile('arena-loop.json'); } catch (e) { log('loop world not available:', e && e.message); } }, 1500); loopWarm.unref && loopWarm.unref();
if (secure) secure.listen(HTTPS_PORT, () => log(`HTTPS on :${HTTPS_PORT}${GAME_WS_URL ? '  (Cloudflare pages send players to ' + GAME_WS_URL + ')' : ''}`));
export { server, lobby };

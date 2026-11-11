# Sniper City — rooms + match server

Eight-sniper rooftop survival over a monochrome Hong Kong block. This repo holds the browser game (`client/`) and the
authoritative multiplayer server (`server/`). One Node process serves the game and runs every room.

## Run it

```bash
npm install          # Node 20+
npm start            # http://localhost:8787  (game)  ·  ws://localhost:8787/ws  (rooms)
npm test             # end-to-end room + match tests over real sockets (~2.5 min)
```

Open the page, press **Play online**, type a name, **Create room**. Send the 5-letter code (or **Copy invite link** →
`/r/CODE`). Friends press **Play online**, type the code, **Join**, **Ready**. The host presses **Start match**.

## Rooms

| | |
|---|---|
| Codes | 5 characters, no 0/O/1/I (easy to read out); `/r/CODE` and `#room=CODE` links open straight into the room |
| Host | sets every rule, can kick (×) or hand over host (★); host passes on automatically after 10 s offline |
| Modes | free-for-all (2–8 places), 2 v 2, 4 v 4 (teams WHITE / RED, auto-balanced, players can switch) |
| AI snipers | host picks how many (fills empty places, balanced across teams) and their skill: recruit / marksman / ghost |
| Lives | one life (last sniper / last team standing) or respawn (3–12 s delay, 2.5 s spawn protection, win by kills or at the clock) |
| Rules | time 3/5/7/10 min, score limit, halo on/off, angel gaze on/off, headshots only, friendly fire (teams) |
| Locking | rules change only in the lobby; once a match starts they are fixed. After results the host reopens the lobby |
| Reconnect | refresh or a dropped connection keeps your place (and your sniper, mid-match) for 45 s |

## How a match works (server-authoritative)

- The server loads the same arena data and building geometry the client ships and builds the collision BVH once.
- `server/src/engine.js` runs the match at 30 Hz with the client's own modules (`arena.js`, `combat.js`, `ai.js`):
  halo schedule (scaled to the time limit), the angel's reveal, zone damage, bots, deaths, respawns, scoring, results.
- Each client simulates its own sniper for instant movement and reports position 30×/s. The server checks speed,
  the traversal network (ziplines, pads, ladders) and the street, and corrects anything implausible.
- Shots: the client sends the camera ray; the server checks ammo and the bolt/fire cycle, rewinds every other sniper
  to where the shooter saw them (half the round trip + the 100 ms interpolation delay), and fires the shared shot routine.
  Damage, hits, kills and the +30 HP for a kill come only from the server.
- Snapshots (≈0.5 KB, 30×/s) carry every sniper's pose; clients draw others 100 ms behind with interpolation.

## Protocol (JSON over one WebSocket)

Client → server: `hello{name,token}` · `create{settings}` · `join{code}` · `leave` · `name` · `team` · `ready` ·
`settings{patch}` · `kick` · `host` · `start` · `lobby` · `chat` · `ping` · in match: `in` · `fire` · `reload` · `fall`.
Every message is validated with zod (`server/src/protocol.js`); 8 KB max, ~60 msgs/s per socket, 12 sockets per IP.

Server → client: `welcome` · `room` (lobby state) · `start` (roster, rules, first snapshot) · `s` (snapshot + events:
`spawn shot dmg hit kill gaze correct ammo deny free end`) · `error` · `notice` · `left` · `chat` · `pong`.

## Deploy

Any host that runs a long-lived Node process with WebSockets: Render, Railway, Fly.io, a VPS. `Dockerfile` included;
`GET /healthz` for health checks. Set `ALLOWED_ORIGINS` in production. One process handles hundreds of rooms
(a 5-minute 8-sniper match simulates in under a second of CPU). Rooms live in memory, so run one instance
(or add sticky routing by room code before scaling out).

## Client

`client/src` is the game (three.js). `npm --workspace client run build` bundles `client/dist/game.js`.
`client/dist` is what the server serves; the binary asset packs ship as base64 `.txt` (the published single-player
page needs text types). The single-player page has no room server, so **Play online** stays hidden there.

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
| Rules | time 3/5/7/10 min, score limit, halo on/off, angel gaze on/off, the angel fires (off / light / heavy), fog on/off, headshots only, friendly fire (teams) |
| Locking | rules change only in the lobby; once a match starts they are fixed. After results the host reopens the lobby |
| Reconnect | refresh or a dropped connection keeps your place (and your sniper, mid-match) for 45 s |

## How a match works (server-authoritative)

- The server loads the same arena data and building geometry the client ships and builds the collision BVH once.
- `server/src/engine.js` runs the match at 30 Hz with the client's own modules (`arena.js`, `combat.js`, `ai.js`):
  halo schedule (scaled to the time limit), the angel's reveal, zone damage, bots, deaths, respawns, scoring, results.
- Each client simulates its own sniper for instant movement and reports position 30×/s. The server checks speed,
  the traversal network (ziplines, pads, ladders) and the street, and corrects anything implausible.
- Shots: the client sends the camera ray; the server checks ammo and the bolt/fire cycle, rewinds every other sniper
  to where the shooter saw them (half the round trip + the 100 ms interpolation delay, at most 0.4 s), and fires the
  shared shot routine. The round trip is timed by the server itself: a WebSocket ping every 2 s with a sequence number,
  which browsers answer on their own. The client's reported figure is ignored, so nobody can claim lag for a bigger rewind.
  Damage, hits, kills and the +30 HP for a kill come only from the server.
- Snapshots (≈0.5 KB, 30×/s) carry every sniper's pose; clients draw others 100 ms behind with interpolation.

## Protocol (JSON over one WebSocket)

Client → server: `hello{name,token}` · `create{settings}` · `join{code}` · `leave` · `name` · `team` · `ready` ·
`settings{patch}` · `kick` · `host` · `start` · `lobby` · `chat` · `ping` · in match: `in` · `fire` · `reload` · `fall` ·
`melee{d}` · `nade{k: gas|decoy, o, d}`.
Every message is validated with zod (`server/src/protocol.js`); 8 KB max, ~60 msgs/s per socket, 12 sockets per IP.

Server → client: `welcome` · `room` (lobby state) · `start` (roster, rules, first snapshot) · `s` (snapshot + events:
`spawn shot dmg hit kill gaze correct ammo deny free end`, and gear events `throw gear fshot melee amark ahit`) ·
`error` · `notice` · `left` · `chat` · `pong`. Snapshot rows carry lean at [15] and play-dead as flag 64; the zone
array carries the angel's shadow roof at [5].

## Solo and online

Online matches are decided by this server. These features currently run in solo matches only: the half-time air drop
and AWM, scope vision (thermal and night vision), the RPG-7, the rooftop dogs, the prayer, Lucifer, and rifle bullet
travel and drop. The kill cam, aim assist on touch screens and the city set dressing run in both.

Online, the sidearm uses the server's original 9 mm numbers (`client/src/combat.js`); the Desert Eagle numbers apply
in solo.

Gear online (`server/src/gear.js`, tuning and throw physics copied from the client's solo code): one gas and one decoy
can per life (AI snipers one gas), the hammer (55 from the front, 200 from behind or on someone playing dead, judged
with the same lag rewind as shots), the angel's shadow roof (no reveal and no strikes there), the room rule "the angel
fires" (marked strikes at each contraction, heavier from the fourth) and fog (bots see 34 m instead of 210 m unless you
fired in the last 3.5 s). Bots run from gas and strike marks, swing the hammer up close and gas a target that camps.
Not on the server yet: the client's destructible cover, cable cuts and lamp shots (a can that clips a cover piece can
land differently on screen than on the server).

## Deploy

Every push to `main` deploys to the Oracle server (`.github/workflows/deploy.yml` → `deploy/deploy.sh`): the workflow
packages the repo, copies it up over SSH, reinstalls the server's dependencies, restarts the `sniper` service and
checks `/healthz` from the internet. It needs the `DEPLOY_HOST`, `DEPLOY_SSH_KEY` and `DEPLOY_KNOWN_HOSTS` secrets.

Any other host that runs a long-lived Node process with WebSockets works too (Render, Railway, Fly.io, a VPS).
`Dockerfile` included; `GET /healthz` for health checks. Set `ALLOWED_ORIGINS` in production. One process handles
hundreds of rooms (a 5-minute 8-sniper match simulates in under a second of CPU). Rooms live in memory, so run one
instance (or add sticky routing by room code before scaling out).

## Client

`client/dist` is what the server serves:

| File | What it is |
| --- | --- |
| `index.html` | Page shell: HUD, scope, touch controls, title / pause / results screens, online lobby, plus the crawlable game description, search and share tags |
| `game.js` | Bundled game code (renderer, controls, bots, match logic, online client, solo extras, city set dressing). Loaded only after the player presses Play |
| `arena.json` | Arena layout: rooftops, cover, spawn points (the server loads it too) |
| `city.txt` | Packed city geometry (the server builds its collision from it) |
| `models.txt` | Packed 3D models used in every match (weapons, characters, arms) |
| `models2.txt` | Packed solo-only models (AWM, Lucifer, RPG-7, dog), fetched when a solo match starts |
| `tex.txt` | Packed textures |
| `how-to-play.html`, `weapons.html`, `updates.html`, `about.html` | Static help pages, patch notes and model credits |
| `poster.jpg`, `og.jpg`, `shot-*.jpg` | Title-screen poster, share image and screenshots |
| `favicon.*`, `icon-*.png`, `apple-touch-icon.png`, `site.webmanifest` | Icons and web app manifest |
| `robots.txt`, `sitemap.xml` | Crawler rules and sitemap for quicksnipergame.com |

`game.js` fetches the asset files by relative path, so they must sit next to `index.html`. The binary asset packs ship
as base64 `.txt` (the published single-player page needs text types). The single-player page has no room server, so
**Play online** stays hidden there; the server adds `<meta name="sc:server" content="same-origin">` to `index.html`.

**`client/src` is older than `client/dist`.** The November 2026 update (Desert Eagle, new arms, phone controls, solo
extras, SEO) was published as a built `game.js` only, so `npm --workspace client run build` would overwrite it with the
older game. Don't rebuild the client until the matching source is added to `client/src`. The server imports
`arena.js`, `combat.js`, `ai.js`, `world.js` and `kit.js` from `client/src`, so those files still decide online matches.

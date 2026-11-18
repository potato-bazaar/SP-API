# LOOP CITY: how the ring map works

The second map is a city bent into a wheel (a ring station). You stand on the inside of the rim, the hub is
"up", and the far side of the city hangs over your head. Source model: "Space Loop City" by Neberkenezer,
CC BY 4.0 (credited on the title screen and the About page).

Pick it on the menu (District Rotation), or open the game with `?map=loop`. The choice is kept in
`localStorage["sc.map"]`. Switching maps reloads the page: the world is built once, at load.

## The idea

The artist's model is a flat city run through a bend. We un-bend it and play on the flat version:

- **The chart.** x = distance along the ring (wraps at +-C/2, C = 640.36 m), y = height above the floor toward
  the hub (the hub axis is y = R = 101.92 m everywhere), z = across the strip (+-67.5 m). Walking, jumping,
  roofs, nav grids, bots' paths and links all work on the chart exactly as on the flat map.
- **Straight lines.** A shot or a sight line that is straight in the real wheel is a curve on the chart, so
  those are traced in the real wheel. Rule: stored positions are chart positions; a ray `(o, d)` is given in
  the flat frame that touches the ring under `o`; `arena.rel(a, b)` is where `b` appears from `a`, `arena.dist`
  the true distance. On the flat map the same helpers are plain vector maths (`flatArena`), so shared code
  (bots, shots) calls them without caring which map it is on.
- **Drawing.** Every vertex is bent round the ring in the vertex shader, about the camera's own place on the
  ring (`project_vertex` is replaced). A mesh whose origin is the world origin holds chart-space vertices and
  is bent vertex by vertex (the city, cables, decals); anything else is carried rigidly to where its origin
  lands, so people and guns keep their shape. Nothing is frustum-culled (the far side is "ahead on the
  ground" on the chart but overhead in the picture). Light comes from the hub: lighting is done on the chart.
- **The halo** is a circle of radius r stretched along the ring by `k * (r - r1)` each way (`zoneD` in
  ring.js): the whole ring at the start, a plain circle at the end. It closes at one of `zone.centers`, chosen
  per match (the server sends it in `start` as `zc`); the angel hangs over that spot.
- **The seam** (x = +-C/2) is in the middle of a park. Positions are normalised into [-C/2, C/2) each tick,
  chart collision is repeated 16 m past the seam, differences use `wrapD`.

## Files

| what | where |
| --- | --- |
| the ring maths, shared by client and server | `client/src/ring.js` (the bundle carries a verbatim copy) |
| the model -> game data | `client/tools/pack_loop.py`, `pack_loop_arena.py` |
| client changes to the bundle | `client/tools/loop/*.js` + `patch_game.py` |
| server | `server/src/world.js` (`loadWorld('loop')`), `engine.js`, `rules.js` (`map`), `rooms.js` |
| data in `client/dist` | `loop.txt` (geometry pack), `loop_t*.jpg`, `loop_leaf.png`, `loop_shade.jpg`, `arena-loop.json` |
| tests | `server/test/loop.test.mjs`, `server/test/loop.smoke.mjs` |

`python3 -I client/tools/pack_loop.py <space_loop_city.glb> client/dist` rebuilds the data (about 2 minutes).
It unrolls the model, writes the pack and greyscale textures, bakes a top-down light map, and works out the
regions a sniper can stand on (every rooftop, and the ground cut into sectors), then the links between them:
`walk` (two ground sectors meet; bots only), `step`, `ladder`, `zip`, `zip` + `hub: true` (a cable straight
through the middle of the wheel), `pad`; plus spawns, the halo and the rails along both rims.

The client is not rebuilt from source (see the top README). `python3 client/tools/loop/patch_game.py` takes
`client/dist/game.js` as it is at `BASE_COMMIT`, makes the exact-string edits listed in the script and pastes
in `ring.js` and the modules in this folder. Every edit asserts that it finds its place exactly once, so a
change to the bundle that moves one of them fails loudly instead of silently. After merging other work into
`game.js`: set `BASE_COMMIT` to that commit and run the script again.

## Online

A room has a `map` setting, fixed when the room is made (everyone in it has that map loaded). The client
says which maps it has in `hello.maps`; older clients cannot join a loop room and are told to reload. A
guest who opens an invite for a room on the other map is switched to it and rejoins by the room code in the
address. Movement is checked across the seam and along hub lines (`hubLineOff`).

## Not done yet

- RPG rockets fly along the chart (they follow the curve of the ring rather than a straight line).
- The missile-strike view and the drone work, but were only checked for not breaking.
- No canopies or other overhead cover were added: the angel sees nearly everyone who is not on its shadow roof.
- Trees are thinned to 60 % (and to 30 % on phones); nothing else is scaled for weak devices.

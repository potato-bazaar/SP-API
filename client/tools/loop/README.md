# LOOP CITY: how the ring map works

The second map is a city bent into a wheel (a ring station). You stand on the inside of the rim, the hub is
"up", and the far side of the city hangs over your head. Source model: "Space Loop City" by Neberkenezer,
CC BY 4.0 (credited on the title screen and the About page).

Pick it on the menu (District Rotation), or open the game with `?map=loop`. The choice is kept in
`localStorage["sc.world"]` (not `sc.map`: the minimap keeps its own placement under that name). Switching maps reloads the page: the world is built once, at load.

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
  chart collision is repeated 16 m past the seam, and short rays, sight lines and `groundY` take any x. The
  rule for everything else: a difference between two places is taken the short way round (`wrapD`), or
  better, asked of the arena (`rel`, `dist`). The halo never closes on the park at the seam (`zone.centers`
  leaves it out), so the last fight is always well away from it.
- **Which line?** Two different things are both called "the line from a to b". On the chart it is the line
  between two sets of numbers; in the wheel it is the straight line a round flies. They agree for a few
  metres and are tens of metres apart across a district. Anything that flies or is aimed (a shot, a rocket,
  a tracer, "what is under the crosshair") uses the wheel's line. Anything that walks (bots, the blind one,
  the dog) uses the chart, because the chart is the floor.

## Files

| what | where |
| --- | --- |
| the ring maths, shared by client and server | `client/src/ring.js` (the bundle carries a verbatim copy) |
| the model -> game data | `client/tools/pack_loop.py`, `pack_loop_arena.py` |
| client changes to the bundle | `client/tools/loop/*.js` + `patch_game.py` |
| server | `server/src/world.js` (`loadWorld('loop')`), `engine.js`, `rules.js` (`map`), `rooms.js` |
| data in `client/dist` | `loop.txt` (geometry pack), `loop_t*.jpg`, `loop_leaf.png`, `loop_shade.jpg`, `arena-loop.json` |
| tests | `server/test/loop.test.mjs` (geometry, the seam, rockets, teams, sockets), `server/test/loop.smoke.mjs` (whole matches) |

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

Teams start in opposite halves of the wheel (`teamSpawns`: each from the middle of its district outwards),
so each side sees the other overhead, and their halo closes on the park between the halves
(`zone.teamCenters`). Free-for-all picks any of `zone.centers`.

What a client draws of other people's play follows the same rules as solo: `netFire` (your own round),
the `shot` event (everyone else's: tracer, blood, the mark on the wall, the crack of a near miss), decoy
shots, rockets (`rocketPath` on the server and `_rpgAdv` on the client take the same steps: checked to
agree to the last digit), the drone and the missile (which falls from the hub: the ring has no sky for the
plane). The upper limit on looking up is 88.5 degrees on the ring (86 on the city map), because the other
team is nearly straight overhead.

## Things the ring got wrong before they were looked at

Worth knowing if you add a feature. Each of these worked on the city map and failed on the ring:

- probing "what is the highest thing here" from 160 m up: that is past the hub, the ray returns the axle
  (the blind one climbed into the sky). Probe from `ring.R - 6`.
- testing a round against something small (an egg, the blind one, a dog, a drone) with the segment between
  two chart points. Use `arena.rel` for both ends.
- replacing `arena.raycast` and then `delete`-ing the replacement (the AWM's through-walls shot): on the ring
  the arena carries its own `raycast`, so put the old one back instead.
- clamping a view or a target to the city's +-80 m (the missile strike).
- any `a.distanceTo(b)` or `Math.hypot(a.x - b.x, ...)` between two places: wrong by a whole ring across
  the seam. `RDL(a, b)` in the bundle, `arena.dist` / `arena.wrapD` on the server.

## Not done yet

- No canopies or other overhead cover were added: the angel sees nearly everyone who is not on its shadow roof.
- Trees are thinned to 60 % (and to 30 % on phones); nothing else is scaled for weak devices.
- Crates and panels exist on the players' screens only, as on the city map: the server does not stop a shot with them.
- The bullets of the solo rifle fall toward the floor of the frame they were fired in, not toward the floor
  under them (nobody will notice under 300 m).
- On the city map a near miss by another player has never made its sound online (the handler overwrites the
  shot's origin before using it). The ring's branch is right; the city's was left as it is.
- Never run on a real phone or a real graphics card. In headless Chrome (software drawing, so only the comparison
  counts) the loop draws about 345 calls a frame, the same as the city, with half the triangles.

## Cost on the server

Measured with `node` on the test machine: the loop world loads in about 0.3 s and adds about 58 MB; a match of
eight bots costs 0.13 ms a tick (the city: 0.16 ms). The server loads the loop a moment after it starts
(`loopWarm` in `server/src/server.js`), so the first loop room does not stall a match that is already running.

## GLASS CITY (a third map, in the making)

Reached with `?map=glass`; it is not on the map chooser yet, and it is solo only (a room made or joined from it is a
city room, see `RNMAP` in `60_net.js`; the server does not know the map).

| what | where |
| --- | --- |
| the drawing -> game data | `client/tools/pack_glass.py <virtual_city_tilt_brush.glb>` writes `client/dist/glass.txt` (about 20 seconds; the 168 MB GLB is not in the repository) |
| the arena | `client/tools/pack_glass_arena.py` reads `glass.txt` and writes `client/dist/arena-glass.json` (seconds) |
| the rules of its glass | `client/src/glass.js` (pasted into the bundle by `patch_game.py`): rounds bounce off panes, the third round breaks one |
| in the game | `client/tools/loop/22_glass.js` (`nGl` builds the city, `GLASS` sets the night and the glass), `10_boot.js` picks the map |
| colours | no grade: `95_grade.js` "raw", and `uRaw` in the post pass (`patch_game.py`) |

The model is "Virtual City [Tilt Brush]" by factoryfifteen (CC BY 4.0, credited on the title screen and in about.html).
It is shown as it was built and as its page on Sketchfab shows it. What that took:

* **Shapes.** Each flat run of a brush stroke is one pane with the stroke's own outline (four corners, or three), its
  own colour, one scale in every direction. The wires (cables and line-work) are their centre lines with their own
  thickness. Lights, grids, signs, ribbons of light, towers with their window pictures and the ground are kept triangle
  for triangle.
* **Light.** The file does not say how the city is lit; the picture does, and `22_glass.js` (`GLT`) follows it: a black
  night with very little light of its own, one strong red-orange light from the west whose shadows are worked out once
  in `pack_glass.py`, and things that give light (red lights, ribbons, wires, signs, windows).
* **Lines.** The picture shows the model with its wireframe on: every edge of the mesh as a thin blue line. The game
  draws those lines in the panes' shader: round each pane, across it at each step its stroke took, and corner to
  corner of each step. The pack carries how many steps each pane's stroke took.

How the look was matched: the camera of the Sketchfab picture was found by fitting the red lights and lit windows of a
render to the picture (it stands at 46, 23, -60 looking west-north-west, 44 degrees of view), and the game was then
compared with the picture from there, class of colour by class of colour (black, blue lines, dark blue, red, orange,
windows).

Every pane is solid: people walk, jump and climb on the real panes, the same capsule physics as on the other maps. The
towers, the signs, the ribbons of light and their dark copies are solid too. Which way a pane's triangles are wound is
an accident of its stroke, so on this map whatever a ray meets faces the ray (`GLASS` wraps `arena.raycast`): the
game's ground probe, step-up and ledge-climb ask for an upward normal.

### Roofs only

Nobody plays on the street. The arena (`pack_glass_arena.py`, whose header says how each thing is worked out) is the
level floors of 16 m2 or more that lie 1.75 m or more above the plate: about 400 roofs, stacked over one another.
Below `dropY` (1.5 m) a sniper is out ("THE STREET"); a bot whose pane is shot out over the street falls to it and is
out too, to the shooter's credit.

Getting from roof to roof is the game, and the arena's links are the ways:

| link | what it is | in the game |
| --- | --- | --- |
| `walk`, `step`, `ladder` | the same floor carrying on; a climb of up to 2.3 m; a ladder up a face | as on the other maps |
| `zip` | a cable to a roof 20 to 100 m away, ridden both ways at 17 m/s | the game's cyan cables, one mesh (`RCABLE`), a mast at each end |
| `pad` | a launch pad: a throw up or across to a roof 5 to 34 m away | a green ring of chevrons (`glass:marks`), the game's dotted arc |
| `jump` (no ramps) | a leap across a gap of up to 9 m, level, up to 2.4 m up, or down (one way) | amber chevrons at the edge; sprint over them toward the gap, or press jump on them, and the sniper is thrown across (`_leap`) |

Every arc and cable is checked in the packer against the model (voxels of every solid thing and the rims of every
floor). Each one was then ridden in a browser against the game's own collision mesh, and ended with the sniper
standing unhurt on the roof it says it goes to.
Roofs that cannot be both reached and left get a cable or a pair of pads, or are left out, so the map is one piece.

What the player gets on this map (arena JSON `parkour`; the code is `R()` steps in `patch_game.py`, mirrored in
`client/src/player.js`):

* **Running builds speed.** A held sprint goes from 7.3 to 10.6 m/s in under a second (`flow`), the picture widens
  with it, and a jump at full speed is higher, so it carries further.
* **Leaps.** `_leap`: at a leap mark, sprinting toward the gap or pressing jump rides the link's arc. Landing where
  there is roof ahead, the sniper is still running.
* **Nobody leaves a roof by accident.** `_edge`: on foot (walking or sprinting, not jumping) a sniper is held at an
  edge and where a floor runs down toward the street, and can slide along it. Free: a step down of a metre or less; at a
  walk, a drop of up to 2.4 m onto a lower roof with room to land on; a seam between panes under half a metre. Any
  jump is the sniper's own affair, and so is letting go of a cable.
* **The way in.** While a sniper stands outside the ring the halo is closing to, the way off their roof that gets
  there soonest is marked on the screen ("WAY IN · LAUNCH PAD · 14 M"): the route a bot would take
  (`flatArena` `route`), kept inside the halo when the sniper is inside it. `22_glass.js`, `g.glassWay()` for tests.

Bots know the same roofs and links. A bot's feet follow the real floor (`flatArena` `floorY` in `client/src/ring.js`),
it judges a way by how far it is to walk (`route`), and the halo closes where the arena says: the place in the middle
block with the most roof round it (`GLASS` sets it: the game otherwise keeps the halo on the middle of the map).
Eggs are laid on one in four of the larger roofs only, and the cables are one mesh, so the map draws in about 300
calls.

#!/usr/bin/env python3
"""pack_glass_arena.py   ->   client/dist/arena-glass.json      (reads client/dist/glass.txt, which pack_glass.py writes)

GLASS CITY's arena: what bots can walk on, how the pieces join, where snipers start, where the halo closes. It is worked
out from the pack the game itself loads, so the two cannot disagree.

Step 1, as this file stands: the base plate under the nine central blocks is the play area, 216 m square, cut into 36
street tiles joined by 'walk' links, with unseen rails round the edge. A cell of a tile can be walked if no panel, tower
or catwalk stands in it at body height and it can be reached from the streets. The floors above the street, and the
ladders and cables up to them, are step 2. (People are not held to this: they walk, jump and climb on the real panes.)
"""
import os, json, struct, base64
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__)); PACK = os.path.join(HERE, '..', 'dist', 'glass.txt'); ARENA = os.path.join(HERE, '..', 'dist', 'arena-glass.json')
CELL, HALF, NT, TILE = 0.5, 108.0, 6, 36.0   # cell size, half the play area, street tiles a side, tile size (metres)

# ---------------------------------------------------------------- read the pack (see pack_glass.py for its layout)
blob = base64.b64decode(open(PACK, 'rb').read()); assert blob[:4] == b'SCGL'; hn = struct.unpack('<I', blob[4:8])[0]; H = json.loads(blob[8:8 + hn]); o = 8 + hn
lo, hi = np.array(H['lo']), np.array(H['hi'])
def pos(n):
    global o; q = np.frombuffer(blob, '<u2', n * 3, o).reshape(-1, 3); o += n * 6; return lo + q / 65535.0 * (hi - lo)
tris = pos(H['tris'] * 3).reshape(-1, 3, 3); o += H['tris'] * 3; o += H['lines'] * 6 + H['lines'] * 3
solid_tex = []
for t in H['tex']:
    p = pos(t['tris'] * 3).reshape(-1, 3, 3); o += t['tris'] * 24 + t['jpg'] + (-t['jpg'] % 4)
    if t['solid']: solid_tex.append(p)
solid_art = tris[H['free']:H['fixed']]; solid_tex = np.concatenate(solid_tex) if solid_tex else np.zeros((0, 3, 3))
R = H['rects']; quads = tris[H['fixed']:H['fixed'] + 2 * R].reshape(R, 2, 3, 3); quads = np.stack([quads[:, 0, 0], quads[:, 0, 1], quads[:, 0, 2], quads[:, 1, 2]], 1)      # two triangles a rectangle: (c0,c1,c2) and (c0,c2,c3)

# ---------------------------------------------------------------- the plate, cut into street tiles
ng = int(2 * HALF / CELL); blocked = np.zeros((ng, ng), bool)
e1, e2 = quads[:, 1] - quads[:, 0], quads[:, 3] - quads[:, 0]; ylo, yhi = quads[:, :, 1].min(1), quads[:, :, 1].max(1)
TOP = float(os.environ.get('GLASS_TOP', 1.75))                    # a panel wholly above this can be walked under
low = (yhi > 0.35) & (ylo < TOP)                                  # panels that cross the height of a walking sniper
for q0, a, b in zip(quads[low][:, 0], e1[low], e2[low]):
    na, nb = max(2, int(np.linalg.norm(a) / 0.2) + 1), max(2, int(np.linalg.norm(b) / 0.2) + 1)
    pts = (q0 + a * np.linspace(0, 1, na)[:, None, None] + b * np.linspace(0, 1, nb)[None, :, None]).reshape(-1, 3); pts = pts[(pts[:, 1] > 0.35) & (pts[:, 1] < TOP)]
    ix, iz = np.floor((pts[:, 0] + HALF) / CELL).astype(int), np.floor((pts[:, 2] + HALF) / CELL).astype(int); ok = (ix >= 0) & (ix < ng) & (iz >= 0) & (iz < ng); blocked[iz[ok], ix[ok]] = True
for t in np.concatenate([solid_art, solid_tex]):                    # towers and low catwalks stand in the way as well
    if t[:, 1].max() <= 0.35 or t[:, 1].min() >= TOP: continue
    a, b = t[1] - t[0], t[2] - t[0]; k = max(2, int(max(np.linalg.norm(a), np.linalg.norm(b)) / 0.2) + 1); u, v = np.meshgrid(np.linspace(0, 1, k), np.linspace(0, 1, k)); keep = (u + v) <= 1.0
    pts = t[0] + u[keep][:, None] * a + v[keep][:, None] * b; pts = pts[(pts[:, 1] > 0.35) & (pts[:, 1] < TOP)]
    ix, iz = np.floor((pts[:, 0] + HALF) / CELL).astype(int), np.floor((pts[:, 2] + HALF) / CELL).astype(int); ok = (ix >= 0) & (ix < ng) & (iz >= 0) & (iz < ng); blocked[iz[ok], ix[ok]] = True
def grow(m):
    o = m.copy(); o[1:] |= m[:-1]; o[:-1] |= m[1:]; o[:, 1:] |= m[:, :-1]; o[:, :-1] |= m[:, 1:]; return o
walk = ~grow(blocked) if os.environ.get('GLASS_MARGIN', '1') == '1' else ~blocked      # a sniper has a width: one cell of margin
clr = np.zeros((ng, ng), int); er = walk.copy()
for _ in range(14): clr += er; er = ~grow(~er)                    # how many cells of clear ground lie round each cell (up to 14)
left = walk.copy(); reach = np.zeros((ng, ng), bool); sizes = []    # the streets: the largest connected piece of open ground
for _ in range(10):
    if not left.any(): break
    r = np.zeros((ng, ng), bool); r[tuple(np.argwhere(left)[np.argmax(clr[left])])] = True
    while True:
        new = grow(r) & walk
        if (new == r).all(): break
        r = new
    sizes.append(int(r.sum()))
    if r.sum() > reach.sum(): reach = r
    left &= ~r
print('open ground, pieces by size:', sorted(sizes, reverse=True)[:6])
if os.environ.get('GLASS_DUMP'): np.savez(os.environ['GLASS_DUMP'], blocked=blocked, walk=walk, reach=reach)      # for looking at
cx_ = lambda i: -HALF + (i + 0.5) * CELL
# eight starts: open ground (5 m clear all round), as far from each other as the streets allow, one a tile
cand = np.argwhere(reach & (clr >= 10)); cand = cand[(np.abs(cx_(cand[:, 0])) < 100) & (np.abs(cx_(cand[:, 1])) < 100)]; pos = np.stack([cx_(cand[:, 1]), cx_(cand[:, 0])], 1); tile = (cand // int(TILE / CELL))
pick = [int(np.argmin(np.hypot(pos[:, 0] + 38, pos[:, 1] + 48)))]; dmin = np.hypot(*(pos - pos[pick[0]]).T)
while len(pick) < 8:
    used = {tuple(tile[k]) for k in pick}; d = dmin.copy(); d[[tuple(t) in used for t in tile]] = -1; k = int(np.argmax(d)); pick.append(k); dmin = np.minimum(dmin, np.hypot(*(pos - pos[k]).T))
pick.sort(key=lambda k: np.arctan2(pos[k, 1], pos[k, 0])); spawn = {tuple(tile[k]): (i, pos[k]) for i, k in enumerate(pick)}
n = int(TILE / CELL); roofs, links, idx = [], [], {}
for iz in range(NT):
    for ix in range(NT):
        x, z = -HALF + TILE * (ix + 0.5), -HALF + TILE * (iz + 0.5); idx[(ix, iz)] = len(roofs); m = reach[iz * n:(iz + 1) * n, ix * n:(ix + 1) * n]
        r = dict(id=f's{ix}{iz}', name=f'STREET {"ABCDEF"[iz]}{ix + 1}', kind='ground', x=x, z=z, hx=TILE / 2, hz=TILE / 2, roofY=0.0, spawn=-1,
                 grid=dict(nx=n, nz=n, ox=x - TILE / 2, oz=z - TILE / 2, m=base64.b64encode(m.astype('u1').tobytes()).decode()), perch=[], cover=[])
        if (iz, ix) in spawn: r['spawn'] = spawn[(iz, ix)][0]; r['spawnPt'] = [round(float(spawn[(iz, ix)][1][0]), 2), 0.0, round(float(spawn[(iz, ix)][1][1]), 2)]
        roofs.append(r)
def join(a, b, cells_a, cells_b, at):                               # up to three crossings where both sides of a shared edge are open
    open_ = np.flatnonzero(cells_a & cells_b)
    for j in sorted({int(open_[len(open_) * k // 6]) for k in (1, 3, 5)}) if len(open_) else []:
        p0, p1 = at(j); links.append(dict(kind='walk', a=a, b=b, oneWay=False, p0=p0, p1=p1, time=0.12))
for iz in range(NT):
    for ix in range(NT):
        a = idx[(ix, iz)]; ox, oz = -HALF + TILE * ix, -HALF + TILE * iz
        if ix + 1 < NT:
            c = (ix + 1) * n; join(a, idx[(ix + 1, iz)], reach[iz * n:(iz + 1) * n, c - 1], reach[iz * n:(iz + 1) * n, c], lambda j: ([ox + TILE - 0.25, 0.0, oz + (j + 0.5) * CELL], [ox + TILE + 0.25, 0.0, oz + (j + 0.5) * CELL]))
        if iz + 1 < NT:
            c = (iz + 1) * n; join(a, idx[(ix, iz + 1)], reach[c - 1, ix * n:(ix + 1) * n], reach[c, ix * n:(ix + 1) * n], lambda j: ([ox + (j + 0.5) * CELL, 0.0, oz + TILE - 0.25], [ox + (j + 0.5) * CELL, 0.0, oz + TILE + 0.25]))
RAIL = [255, 40, 0, 0]
arena = dict(version=2, map='glass', cell=CELL, parapet=0, gravity=22.0, half=HALF, dropY=-25,      # the street is safe here: only falling off the world kills
    zone=dict(center=[0, -8], r0=150, phases=[dict(t=0, r=150, dps=0), dict(t=60, r=112, shrink=26, dps=6), dict(t=120, r=80, shrink=26, dps=9), dict(t=180, r=50, shrink=26, dps=13),
                                            dict(t=240, r=27, shrink=16, dps=18), dict(t=270, r=11, shrink=16, dps=25)], duration=300),
    roofs=roofs, links=links, shapes=[['b', 0, -0.5, 0, 330, 0.5, 330, 0, [8, 12, 20, 0], 0]],      # the plate: its top is y = 0
    deco=[], skyline=[],
    fence=[['b', 0, 26.0, -HALF - 0.3, HALF + 0.6, 26.6, 0.06, 0, RAIL, 0], ['b', 0, 26.0, HALF + 0.3, HALF + 0.6, 26.6, 0.06, 0, RAIL, 0],      # unseen rails: nobody leaves the plate, at any height
           ['b', -HALF - 0.3, 26.0, 0, 0.06, 26.6, HALF + 0.6, 0, RAIL, 0], ['b', HALF + 0.3, 26.0, 0, 0.06, 26.6, HALF + 0.6, 0, RAIL, 0]],
    credit='Virtual City [Tilt Brush] by factoryfifteen (CC-BY-4.0)')
json.dump(arena, open(ARENA, 'w'), separators=(',', ':'))
print(f'arena: {int(reach.sum())} of {ng * ng} street cells can be walked ({int((walk & ~reach).sum())} are shut in), {len(roofs)} tiles, {len(links)} links, starts at {[r["spawnPt"][::2] for r in sorted((r for r in roofs if r["spawn"] >= 0), key=lambda r: r["spawn"])]}; {os.path.getsize(ARENA) // 1024} KB')

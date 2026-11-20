#!/usr/bin/env python3
"""pack_glass_arena.py   ->   client/dist/arena-glass.json      (reads client/dist/glass.txt, which pack_glass.py writes)

GLASS CITY's arena: what bots can walk on, how the pieces join, where snipers start, where the halo closes. It is worked
out from the pack the game itself loads, so the two cannot disagree.

The play area is the model's own ground plate, 432 m square, with unseen rails round the edge.

  floors     every flat solid surface (the plate, panes, ribbons, tower tops), on a grid of one-metre columns.
             A column floor can be stood on if there are 1.85 m to the next floor up and nothing in the way from shin to
             head, there or one column to any side.
  roofs      standable floor joined column to column (0.3 m of step at most), cut where it climbs more than 0.3 m from
             its middle height and by the 72 m tiles, and kept if it is 120 m2 or more. They lie over one another
             (`stacked`): ring.js tells which one you are on by its cells as well as its height.
  links      'walk' (the same floor carries on into the next roof), 'step' (up to 2.3 m: a jump and a pull up),
             'ladder' (up the face of an edge, to 18 m, where the way is clear; two at most up to one roof),
             'zip' (a cable from a higher roof to another 25 to 140 m away, where a straight line is clear).
  the rest   roofs no link reaches from the street are left out. The match is fought over the middle block: eight
             starts on open street 85 to 138 m from its middle, far apart; the halo starts 150 m out and closes on
             the most open street there.

People are not held to any of this: they walk, jump and climb on the real panes. It is what the bots know, and where
the ladders and cables are.
"""
import os, json, struct, base64
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__)); PACK = os.path.join(HERE, '..', 'dist', 'glass.txt'); ARENA = os.path.join(HERE, '..', 'dist', 'arena-glass.json')
CELL, HALF, NT, TILE = 1.0, 216.0, 12, 36.0   # cell size, half the play area, tiles a side, tile size (metres)
R0 = 150.0                                    # the halo's first ring: the match is fought inside it

# ---------------------------------------------------------------- read the pack (see pack_glass.py for its layout)
blob = base64.b64decode(open(PACK, 'rb').read()); assert blob[:4] == b'SCGL'; hn = struct.unpack('<I', blob[4:8])[0]; H = json.loads(blob[8:8 + hn]); o = 8 + hn
lo, hi = np.array(H['lo']), np.array(H['hi'])
def pos(n):
    global o; q = np.frombuffer(blob, '<u2', n * 3, o).reshape(-1, 3); o += n * 6; return lo + q / 65535.0 * (hi - lo)
tris = pos(H['tris'] * 3).reshape(-1, 3, 3); o += H['tris'] * 3; o += H['lines'] * 12 + H['lines'] + (-H['lines'] % 4) + (H['rects'] * 4 if H.get('shade') else 0) + (H['rects'] + (-H['rects'] % 4) if H.get('cells') else 0)      # past the colours, the wires (not solid), the shadows and the strokes' steps
solid_tex = []
for t in H['tex']:
    p = pos(t['tris'] * 3).reshape(-1, 3, 3); o += t['tris'] * 24 + t['jpg'] + (-t['jpg'] % 4)
    if t['solid']: solid_tex.append(p)
assert o == len(blob), (o, len(blob))
solid_art = tris[H['free']:H['fixed']]; solid_tex = np.concatenate(solid_tex) if solid_tex else np.zeros((0, 3, 3))
R = H['rects']; quads = tris[H['fixed']:H['fixed'] + 2 * R].reshape(R, 2, 3, 3); quads = np.stack([quads[:, 0, 0], quads[:, 0, 1], quads[:, 0, 2], quads[:, 1, 2]], 1)      # the panes: four corners each
# ---------------------------------------------------------------- floors and obstacles, on a grid of half-metre columns
NG = int(2 * HALF / CELL); NC = NG * NG; VY, Y0, KL = 0.25, -1.0, 216      # columns a side; obstacle voxels: height, lowest level, how many (up to 53 m)
FLAT = 0.94                                                              # a surface whose normal is this upright is a floor
ctr = lambda i: -HALF + (i + 0.5) * CELL
def span(lo_, hi_):                                                      # the columns whose centres lie between two coordinates
    return max(0, int(np.ceil((lo_ + HALF) / CELL - 0.5))), min(NG - 1, int(np.floor((hi_ + HALF) / CELL - 0.5)))
def floor_cells(o, a, b, tri):                                           # columns under a flat rectangle (or triangle) and its height at each
    det = a[0] * b[2] - a[2] * b[0]
    if abs(det) < 1e-9: return None
    c = np.array([o, o + a, o + b] if tri else [o, o + a, o + b, o + a + b]); i0, i1 = span(c[:, 0].min(), c[:, 0].max()); j0, j1 = span(c[:, 2].min(), c[:, 2].max())
    if i1 < i0 or j1 < j0: return None
    ii, jj = np.arange(i0, i1 + 1), np.arange(j0, j1 + 1); dx, dz = ctr(ii)[None, :] - o[0], ctr(jj)[:, None] - o[2]
    u, v = (dx * b[2] - dz * b[0]) / det, (a[0] * dz - a[2] * dx) / det; m = (u >= 0) & (v >= 0) & ((u + v <= 1) if tri else ((u <= 1) & (v <= 1)))
    return (jj[:, None] * NG + ii[None, :])[m], (o[1] + u * a[1] + v * b[1])[m]
obs = np.zeros((KL, NC), bool)
def block(pts):                                                          # these points are in the way
    ix, iz, k = np.floor((pts[:, 0] + HALF) / CELL).astype(int), np.floor((pts[:, 2] + HALF) / CELL).astype(int), np.floor((pts[:, 1] - Y0) / VY).astype(int)
    ok = (ix >= 0) & (ix < NG) & (iz >= 0) & (iz < NG) & (k >= 0) & (k < KL); obs[k[ok], iz[ok] * NG + ix[ok]] = True
def sample(o, a, b, tri, step=0.24):
    na, nb = max(2, int(np.linalg.norm(a) / step) + 2), max(2, int(np.linalg.norm(b) / step) + 2); u, v = np.meshgrid(np.linspace(0, 1, na), np.linspace(0, 1, nb)); keep = (u + v <= 1.0) if tri else np.ones_like(u, bool)
    return o + u[keep][:, None] * a + v[keep][:, None] * b
fcol, fy = [np.arange(NC)], [np.zeros(NC)]                               # the plate is a floor everywhere
def take(o, a, b, tri):
    n = np.cross(a, b); ln = np.linalg.norm(n)
    if ln < 1e-9: return
    inside = (np.abs(o[0] + (a[0] + b[0]) / 2) < HALF + 30) and (np.abs(o[2] + (a[2] + b[2]) / 2) < HALF + 30)
    if not inside: return
    if abs(n[1]) / ln > FLAT:
        r = floor_cells(o, a, b, tri)
        if r is not None and len(r[0]): fcol.append(r[0]); fy.append(r[1])
    else: block(sample(o, a, b, tri))
for q in quads:                                                          # a pane is two triangles, (c0,c1,c2) and (c0,c2,c3): its four corners need not make a rectangle
    take(q[0], q[1] - q[0], q[2] - q[0], True); take(q[0], q[2] - q[0], q[3] - q[0], True)
# (the ribbons that lie flat up to 1.6 m over the street, the streets of light and their dark copies, are left out: a bot
#  steps over one as it walks, it does not go round. The game puts a bot's feet on the real floor under it.)
low = lambda t: t[:, 1].max() <= 1.6 and abs(np.cross(t[1] - t[0], t[2] - t[0])[1]) > FLAT * np.linalg.norm(np.cross(t[1] - t[0], t[2] - t[0]))
for t in solid_art:
    if not low(t): take(t[0], t[1] - t[0], t[2] - t[0], True)
for t in solid_tex: take(t[0], t[1] - t[0], t[2] - t[0], True)
fcol, fy = np.concatenate(fcol), np.concatenate(fy); keep = (fy > -0.5) & (fy < 50); fcol, fy = fcol[keep], fy[keep]
# one floor a level in each column: surfaces less than 0.3 m apart are one floor, at the height of the top one
order = np.lexsort((fy, fcol)); fcol, fy = fcol[order], fy[order]; first = np.r_[True, (fcol[1:] != fcol[:-1]) | (fy[1:] - fy[:-1] >= 0.3)]; st = np.flatnonzero(first)
acol, ay = fcol[st], np.maximum.reduceat(fy, st)                         # every floor, standable or not: (column, height), sorted by column then height
akey = acol * 1000.0 + ay
# where a sniper can stand: 1.85 m to the next floor up, and nothing in the way from shin to head (alleys a metre wide count: the middle of the city is full of them)
cum = np.zeros((KL + 1, NC), np.uint8); np.cumsum(obs, 0, dtype=np.uint8, out=cum[1:])
def clear(C, col, ylo, yhi):                                             # nothing in the way in these columns between two heights?
    k0, k1 = np.clip(np.floor((ylo - Y0) / VY).astype(int), 0, KL), np.clip(np.floor((yhi - Y0) / VY).astype(int) + 1, 0, KL); return (C[k1, col] - C[k0, col]).astype(np.uint8) == 0
nxt = np.r_[np.where(acol[1:] == acol[:-1], ay[1:], 1e9), 1e9]; stand = (nxt - ay >= 1.85) & clear(cum, acol, ay + 0.3, ay + 1.8)
from scipy import ndimage
# where the halo closes: the most open street within 30 m of the middle of the model's middle block. What lies outside its first ring is nobody's ground.
gm0 = np.zeros((NG, NG), bool); g0 = stand & (ay < 0.35); gm0[acol[g0] // NG, acol[g0] % NG] = True; room0 = ndimage.distance_transform_edt(gm0) * CELL
zy0, zx0 = np.unravel_index(np.argmax(np.where(np.hypot(ctr(np.arange(NG))[None, :] - 16, ctr(np.arange(NG))[:, None] + 24) < 30, room0, 0)), room0.shape); ZC = [round(float(ctr(zx0)), 2), round(float(ctr(zy0)), 2)]
stand &= np.hypot(ctr(acol % NG) - ZC[0], ctr(acol // NG) - ZC[1]) <= R0 - 1.0
print(f'floors: {len(acol)} column floors, {int(stand.sum())} of them can be stood on inside the halo ({stand.sum() * CELL * CELL:.0f} m2)')

# ---------------------------------------------------------------- platforms: standable floor joined column to column
from scipy.sparse import coo_matrix
from scipy.sparse.csgraph import connected_components
sid = np.full(len(acol), -1); sid[stand] = np.arange(stand.sum()); scol, sy = acol[stand], ay[stand]; NS = len(scol); six, siz = scol % NG, scol // NG
def node_at(col, y, tol):                                                # the floor in these columns nearest these heights, within tol: an index into acol/ay, or -1
    lo_, hi_ = np.searchsorted(akey, col * 1000.0 + y - tol), np.searchsorted(akey, col * 1000.0 + y + tol, 'right'); j = np.where(hi_ > lo_, lo_, -1)
    two = hi_ - lo_ >= 2; j = np.where(two & (np.abs(ay[np.minimum(lo_ + 1, len(ay) - 1)] - y) < np.abs(ay[np.minimum(lo_, len(ay) - 1)] - y)), lo_ + 1, j); return j
DIRS = [(1, 0), (0, 1), (-1, 0), (0, -1)]; nb = np.full((4, NS), -1)   # the standable neighbour on the same level (within 0.3 m) on each side
for d, (dx, dz) in enumerate(DIRS):
    ok = (six + dx >= 0) & (six + dx < NG) & (siz + dz >= 0) & (siz + dz < NG); j = np.full(NS, -1); j[ok] = node_at(scol[ok] + dz * NG + dx, sy[ok], 0.3); j[j >= 0] = sid[j[j >= 0]]; nb[d] = j
def comps(mask_edges):
    e0, e1 = [], []
    for d in (0, 1):
        m = (nb[d] >= 0) & mask_edges(np.arange(NS), np.maximum(nb[d], 0)); e0.append(np.flatnonzero(m)); e1.append(nb[d][m])
    e0, e1 = np.concatenate(e0), np.concatenate(e1); return connected_components(coo_matrix((np.ones(len(e0), bool), (e0, e1)), shape=(NS, NS)), directed=False)[1]
# joined floor may climb, a pane at a time; a platform is a part of it that is level to within 0.3 m of its middle height
lab = comps(lambda a, b: np.ones(len(a), bool)); med = np.zeros(lab.max() + 1); o_ = np.argsort(lab, kind='stable'); st_ = np.r_[0, np.flatnonzero(np.diff(lab[o_])) + 1]
for k, (a, b) in enumerate(zip(st_, np.r_[st_[1:], NS])): med[lab[o_[a]]] = np.median(sy[o_[a:b]])
band = np.round((sy - med[lab]) / 0.6).astype(int); tile = (siz // int(TILE / CELL)) * NT + six // int(TILE / CELL)
roof = comps(lambda a, b: (lab[a] == lab[b]) & (band[a] == band[b]) & (tile[a] == tile[b]))        # and it is cut by the 36 m tiles, so no walk across one is long
cnt = np.bincount(roof); print(f'platforms: {lab.max() + 1} pieces of joined floor, {len(cnt)} level parts a tile; of at least 6 / 15 / 40 / 100 m2: {[(int((cnt * CELL * CELL >= a).sum()), int(cnt[cnt * CELL * CELL >= a].sum() * CELL * CELL)) for a in (6, 15, 40, 100)]} (how many, m2)')

MIN_ROOF = 60.0                                                          # square metres: a smaller level part is nobody's roof (people can still stand on it)
ry = np.zeros(len(cnt)); np.add.at(ry, roof, sy); ry /= cnt; big = cnt * CELL * CELL >= MIN_ROOF; rid = np.full(len(cnt), -1); rid[big] = np.arange(big.sum()); nroof = rid[roof]; NR = int(big.sum())   # nroof: each standable column floor's roof, or -1
RY = ry[big]; print(f'roofs: {NR} of at least {MIN_ROOF:.0f} m2, {int(cnt[big].sum() * CELL * CELL)} m2 in all; {int((RY < 0.35).sum())} on the plate')

# ---------------------------------------------------------------- links
# Along every edge of every roof: what is on the other side? The same floor in the next tile ('walk'), or another roof's
# floor a little up or down ('walk' under 0.3 m, 'step' up to 2.3 m: a jump and a pull up), or a longer way down the face
# of the edge to a floor below ('ladder', up to 18 m), if the way is clear.
cand = []                                                               # (kind, lower roof, upper roof, lower node, upper node, direction 0..3 from the upper one outward, height)
for d, (dx, dz) in enumerate(DIRS):
    ok = (nroof >= 0) & (six + dx >= 0) & (six + dx < NG) & (siz + dz >= 0) & (siz + dz < NG); u = np.flatnonzero(ok); vcol = scol[u] + dz * NG + dx
    # same level, another roof (the next tile, or the next band of a slope)
    j = nb[d][u]; m = (j >= 0); m[m] &= (nroof[j[m]] >= 0) & (nroof[j[m]] != nroof[u[m]])
    for a, b in zip(u[m], j[m]):
        if sy[a] >= sy[b]: cand.append(('walk', nroof[b], nroof[a], b, a, d, sy[a] - sy[b]))
    # the first floor below the edge in the next column: is it a roof, and is the way up clear?
    e = u[nb[d][u] < 0]; vc = scol[e] + dz * NG + dx; k = np.searchsorted(akey, vc * 1000.0 + sy[e] - 0.3) - 1; good = (k >= 0); good[good] &= (acol[k[good]] == vc[good]); e, vc, k = e[good], vc[good], k[good]
    low = sid[k]; good = (low >= 0); good[good] &= nroof[low[good]] >= 0; e, vc, k, low = e[good], vc[good], k[good], low[good]; h = sy[e] - sy[low]
    nx_ = np.where(k + 1 < len(acol), np.where(acol[np.minimum(k + 1, len(acol) - 1)] == vc, ay[np.minimum(k + 1, len(acol) - 1)], 1e9), 1e9)      # the next floor up in that column: it must leave the climber room
    free = (nx_ >= sy[e] + 1.2) & clear(cum, vc, sy[low] + 0.3, sy[e] + 1.2) & (h <= 18)
    for a, b, hh in zip(low[free], e[free], h[free]): cand.append(('step' if hh <= 2.3 else 'ladder', nroof[a], nroof[b], a, b, d, hh))
print('link candidates:', {k: sum(1 for c in cand if c[0] == k) for k in ('walk', 'step', 'ladder')})
from collections import defaultdict
pos_of = lambda n, y=None: [round(float(ctr(six[n])), 3), round(float(sy[n] if y is None else y), 3), round(float(ctr(siz[n])), 3)]
by = defaultdict(list)
for c in cand: by[(c[0], int(c[1]), int(c[2]))].append(c)
def has(n, dcol, r):                                                    # the standable floor beside n (dcol columns away) on roof r, level with it: a node, or -1
    c = scol[n] + dcol; x = six[n] + (dcol % NG if abs(dcol) < NG else 0)
    if c < 0 or c >= NC: return -1
    j = node_at(np.array([c]), np.array([sy[n]]), 0.3)[0]
    return int(sid[j]) if j >= 0 and sid[j] >= 0 and nroof[sid[j]] == r and abs(int(scol[sid[j]] % NG) - int(six[n])) + abs(int(scol[sid[j]] // NG) - int(siz[n])) <= 4 else -1
links = []
for (kind, ra, rb), cs in sorted(by.items()):
    if kind == 'walk':                                                  # crossings spread along the shared edge: one every 7 m or so
        cs = sorted(cs, key=lambda c: (c[5] % 2, int(scol[c[4]]))); n = max(1, min(6, round(len(cs) * CELL / 7)))
        for c in [cs[len(cs) * (2 * k + 1) // (2 * n)] for k in range(n)]:
            links.append(dict(kind='walk', a=ra, b=rb, oneWay=False, p0=pos_of(c[3]), p1=pos_of(c[4]), time=0.12))
    else:
        best, bs = None, 1e9
        for c in cs:
            k_, a, b, lo_n, up_n, d, h = c[0], c[1], c[2], c[3], c[4], c[5], c[6]; dx, dz = DIRS[d]; dc = dz * NG + dx
            v2, v3, u2 = has(lo_n, dc, ra), has(lo_n, 2 * dc, ra), has(up_n, -dc, rb); s = h + (0 if u2 >= 0 else 3) + (0 if v2 >= 0 else 2)
            if s < bs: bs, best = s, (lo_n, up_n, d, h, v2, v3, u2)
        lo_n, up_n, d, h, v2, v3, u2 = best; dx, dz = DIRS[d]; wall = [round(float(ctr(six[up_n]) + dx * CELL / 2), 3), round(float(ctr(siz[up_n]) + dz * CELL / 2), 3)]; n = [-dx, -dz]      # the edge between the two columns
        if kind == 'step': links.append(dict(kind='step', a=ra, b=rb, oneWay=False, p0=pos_of(lo_n), p1=pos_of(up_n), time=round(0.55 + 0.2 * max(0.0, h - 1.0), 3), wall=wall, n=n, h=round(float(h), 3)))
        else:
            foot = v2 if v2 >= 0 else lo_n; top = up_n                 # stand a column back from the foot if there is room; step off onto the edge column
            links.append(dict(kind='ladder', a=ra, b=rb, oneWay=False, p0=pos_of(foot, sy[lo_n]), p1=pos_of(top, sy[up_n]), time=round(float(h) * 0.376, 3), wall=wall, n=n, h=round(float(h), 3),
                              base=[round(wall[0] + dx * 0.12, 3), round(float(sy[lo_n]), 3), round(wall[1] + dz * 0.12, 3)], score=float(bs)))
# what the links reach, starting from the largest piece of street
def reach_from(links_):
    adj = defaultdict(list)
    for l in links_: adj[l['a']].append(l['b']); adj[l['b']].append(l['a'])
    start = int(np.argmax(np.where(RY < 0.35, cnt[big], 0))); seen = {start}; todo = [start]
    while todo:
        for j in adj[todo.pop()]:
            if j not in seen: seen.add(j); todo.append(j)
    return seen
area = cnt[big] * CELL * CELL; seen = reach_from(links)
print('links:', {k: sum(1 for l in links if l['kind'] == k) for k in ('walk', 'step', 'ladder')}, f'; reached from the street: {len(seen)} of {NR} roofs, {sum(area[i] for i in seen):.0f} of {area.sum():.0f} m2')
unre = [i for i in range(NR) if i not in seen]; print('  not reached: by height', np.histogram(RY[unre], bins=[-1, 0.35, 2.4, 5, 8, 12, 18, 60])[0].tolist(), 'area', int(sum(area[i] for i in unre)))

# ladders: the shortest climbs first. One is put up if it joins a roof to the rest for the first time, or if it is the
# first way up to a roof of 60 m2 or more from the street; any other would be clutter.
uf = list(range(NR))
def find(i):
    while uf[i] != i: uf[i] = uf[uf[i]]; i = uf[i]
    return i
for l in links:
    if l['kind'] != 'ladder': uf[find(l['a'])] = find(l['b'])
lad = sorted([l for l in links if l['kind'] == 'ladder'], key=lambda l: l['score']); n_up = defaultdict(int); keep_l = []
for l in lad:
    a, b = find(l['a']), find(l['b'])
    if a != b or (n_up[l['b']] == 0 and area[l['b']] >= 60 and RY[l['a']] < 0.35):
        uf[a] = b; n_up[l['b']] += 1; keep_l.append(l)
links = [l for l in links if l['kind'] != 'ladder'] + keep_l
for l in links: l.pop('score', None)

# cables: from the higher roofs, a ride across to another roof 14 to 70 m away, level or downhill, if a straight line between
# two of their edges is clear for a sniper hanging under it (checked through the same voxels, a column to each side too)
solid = obs.copy(); k_ = np.floor((ay - Y0) / VY).astype(int); ok_ = (k_ >= 0) & (k_ < KL); solid[k_[ok_], acol[ok_]] = True; solid = solid.reshape(KL, NG, NG)
def line_clear(a, b, lift=0.95):
    A, B = np.array(a, float), np.array(b, float); L = np.hypot(B[0] - A[0], B[2] - A[2]); n = int(L / 0.25) + 1; t = np.linspace(0, 1, n + 1)[6:-6]      # not the columns the two ends stand in
    if len(t) < 8: return False
    px, pz, py = A[0] + (B[0] - A[0]) * t, A[2] + (B[2] - A[2]) * t, A[1] + (B[1] - A[1]) * t + lift; sx, sz = -(B[2] - A[2]) / L * 0.3, (B[0] - A[0]) / L * 0.3
    for off in (-1, 0, 1):
        ix, iz = np.floor((px + sx * off + HALF) / CELL).astype(int), np.floor((pz + sz * off + HALF) / CELL).astype(int)
        if (ix < 0).any() or (ix >= NG).any() or (iz < 0).any() or (iz >= NG).any(): return False
        for dy in np.arange(-0.1, 2.2, VY):                               # from the feet to above the head
            k = np.floor((py + dy - Y0) / VY).astype(int)
            if solid[np.clip(k, 0, KL - 1), iz, ix].any(): return False
    return True
edge = (nroof >= 0) & (nb < 0).any(0); rnodes = defaultdict(list)
for n in np.flatnonzero(edge): rnodes[int(nroof[n])].append(int(n))
rcx = np.zeros(NR); rcz = np.zeros(NR); m_ = nroof >= 0; np.add.at(rcx, nroof[m_], ctr(six[m_])); np.add.at(rcz, nroof[m_], ctr(siz[m_])); rcx /= cnt[big]; rcz /= cnt[big]
rng = np.random.default_rng(11); zips = []; zn = defaultdict(int); zband = defaultdict(int); ZB = lambda y: 0 if y < 9 else 1 if y < 18 else 2      # so many from each range of heights: the top would take them all
for ra in np.argsort(-RY):
    if RY[ra] < 3.5 or os.environ.get('GLASS_NOZIP'): break
    if zband[ZB(RY[ra])] >= (26, 24, 22)[ZB(RY[ra])]: continue
    d_ = np.hypot(rcx - rcx[ra], rcz - rcz[ra]); targets = [rb for rb in np.argsort(-(RY[ra] - RY) - d_ * 0.025 + rng.random(NR) * 3) if 25 <= d_[rb] <= 140 and RY[rb] <= RY[ra] + 0.5 and rb != ra and zn[int(rb)] < 2][:24]; got = []
    for rb in targets:
        if zn[int(ra)] >= 2: break
        if any(np.hypot(rcx[rb] - rcx[g], rcz[rb] - rcz[g]) < 44 for g in got): continue              # the second cable goes somewhere else
        A = sorted(rnodes[int(ra)], key=lambda n: np.hypot(ctr(six[n]) - rcx[rb], ctr(siz[n]) - rcz[rb]))[:10]; B = sorted(rnodes[int(rb)], key=lambda n: np.hypot(ctr(six[n]) - rcx[ra], ctr(siz[n]) - rcz[ra]))[:10]
        hit = next(((a, b) for a in A for b in B if 22 <= np.hypot(ctr(six[a]) - ctr(six[b]), ctr(siz[a]) - ctr(siz[b])) and line_clear(pos_of(a), pos_of(b))), None)
        if not hit: continue
        a, b = hit; p0, p1 = pos_of(a), pos_of(b); L = float(np.hypot(p1[0] - p0[0], p1[2] - p0[2])); ux, uz = (p1[0] - p0[0]) / L, (p1[2] - p0[2]) / L; ln = float(np.linalg.norm(np.array(p1) - np.array(p0)))
        zips.append(dict(kind='zip', a=int(ra), b=int(rb), oneWay=False, p0=p0, p1=p1, time=round(ln / 13.0, 3), lift=0.95, len=round(ln, 3),
                         c0=[round(p0[0] - ux * 0.35, 3), round(p0[1] + 3.05, 3), round(p0[2] - uz * 0.35, 3)], c1=[round(p1[0] + ux * 0.35, 3), round(p1[1] + 3.05, 3), round(p1[2] + uz * 0.35, 3)]))
        zn[int(ra)] += 1; zn[int(rb)] += 1; zband[ZB(RY[ra])] += 1; got.append(rb)
links += zips
seen = reach_from(links); print('links:', {k: sum(1 for l in links if l['kind'] == k) for k in ('walk', 'step', 'ladder', 'zip')}, f'; reached from the street: {len(seen)} of {NR} roofs, {sum(area[i] for i in seen):.0f} of {area.sum():.0f} m2')
print('  cables: lengths', sorted(round(z['len']) for z in zips)[:: max(1, len(zips) // 12)], ' from heights', sorted(round(float(RY[z['a']])) for z in zips)[:: max(1, len(zips) // 12)])

# ---------------------------------------------------------------- what is left out, where snipers start, where the halo closes
keep_r = np.array(sorted(seen)); new = np.full(NR, -1); new[keep_r] = np.arange(len(keep_r)); links = [dict(l, a=int(new[l['a']]), b=int(new[l['b']])) for l in links if new[l['a']] >= 0 and new[l['b']] >= 0]
from scipy import ndimage
gm = np.zeros((NG, NG), bool); g_ = (nroof >= 0); g_[g_] &= (new[nroof[g_]] >= 0) & (RY[nroof[g_]] < 0.35); gm[siz[g_], six[g_]] = True; gnode = np.full((NG, NG), -1); gnode[siz[g_], six[g_]] = np.flatnonzero(g_)
room = ndimage.distance_transform_edt(gm) * CELL                        # metres of open street round each street column
cy_, cx_ = np.nonzero(room >= 2.5); px, pz = ctr(cx_), ctr(cy_); dc = np.hypot(px - ZC[0], pz - ZC[1]); ok = (dc > 85) & (dc < 138); cy_, cx_, px, pz = cy_[ok], cx_[ok], px[ok], pz[ok]
pick = [int(np.argmin(np.hypot(px - ZC[0] + 80, pz - ZC[1] + 80)))]; dmin = np.hypot(px - px[pick[0]], pz - pz[pick[0]])
while len(pick) < 8:
    used = {int(nroof[gnode[cy_[k], cx_[k]]]) for k in pick}; d = dmin.copy(); d[np.isin(nroof[gnode[cy_, cx_]], list(used))] = -1; k = int(np.argmax(d)); pick.append(k); dmin = np.minimum(dmin, np.hypot(px - px[k], pz - pz[k]))
pick.sort(key=lambda k: np.arctan2(pz[k], px[k])); spawn = {int(new[nroof[gnode[cy_[k], cx_[k]]]]): (i, [round(float(px[k]), 2), 0.0, round(float(pz[k]), 2)]) for i, k in enumerate(pick)}
BLOCK = ['NORTH-WEST', 'NORTH', 'NORTH-EAST', 'WEST', 'TOWERS', 'EAST', 'SOUTH-WEST', 'SOUTH', 'SOUTH-EAST']
roofs = []; order_ = np.argsort(nroof, kind='stable'); starts_ = np.searchsorted(nroof[order_], np.arange(NR + 1))
for r in keep_r:
    ns = order_[starts_[r]:starts_[r + 1]]; i0, i1, j0, j1 = six[ns].min(), six[ns].max(), siz[ns].min(), siz[ns].max(); nx, nz = int(i1 - i0 + 1), int(j1 - j0 + 1); m = np.zeros((nz, nx), 'u1'); m[siz[ns] - j0, six[ns] - i0] = 1
    y = float(np.median(sy[ns])); ground = y < 0.35; ti = int(tile[ns[0]]); tx, tz = ti % NT, ti // NT; x0, z0 = -HALF + i0 * CELL, -HALF + j0 * CELL
    e = ns[(nb[:, ns] < 0).any(0)] if not ground else ns[room[siz[ns], six[ns]] >= 1.5]; e = e if len(e) else ns; e = e[rng.permutation(len(e))[:24]]      # where a sniper sets up: a roof's edges, a street's open ground
    rec = dict(id=('g' if ground else 'f') + str(len(roofs)), name=f'STREET {"ABCDEFGHIJKL"[tz]}{tx + 1}' if ground else f'{BLOCK[(tz // 4) * 3 + tx // 4]} · {max(1, round(y))} M', kind='ground' if ground else 'roof',
               x=round(x0 + nx * CELL / 2, 3), z=round(z0 + nz * CELL / 2, 3), hx=nx * CELL / 2, hz=nz * CELL / 2, roofY=round(y, 3), spawn=-1,
               grid=dict(nx=nx, nz=nz, ox=round(x0, 3), oz=round(z0, 3), m=base64.b64encode(m.tobytes()).decode()), perch=sorted(int((siz[n] - j0) * nx + (six[n] - i0)) for n in e), cover=[])
    if len(roofs) in spawn: rec['spawn'], rec['spawnPt'] = spawn[len(roofs)]
    roofs.append(rec)
RAIL = [255, 40, 0, 0]
arena = dict(version=2, map='glass', cell=CELL, parapet=0, gravity=22.0, half=HALF, stacked=True,     # stacked: roofs lie over one another, so which one you are on goes by its cells as well as its height
    dropY=-25,                                                      # the street is safe here: only falling off the world kills
    # the match is fought over the middle block, where the model's detail is (its cables, lit towers and streets of light): the halo starts 150 m out from it and closes on it
    zone=dict(center=ZC, r0=R0, phases=[dict(t=0, r=R0, dps=0), dict(t=60, r=112, shrink=26, dps=6), dict(t=120, r=80, shrink=26, dps=9), dict(t=180, r=50, shrink=26, dps=13),
                                         dict(t=240, r=27, shrink=16, dps=18), dict(t=270, r=11, shrink=16, dps=25)], duration=300),
    roofs=roofs, links=links, shapes=[['b', 0, -0.5, 0, H['half'][0] + 4, 0.5, H['half'][1] + 4, 0, [8, 12, 20, 0], 0]],      # the plate (not drawn: the model's own ground is): its top is y = 0
    deco=[], skyline=[],
    fence=[['b', 0, 26.0, -HALF - 0.3, HALF + 0.6, 26.6, 0.06, 0, RAIL, 0], ['b', 0, 26.0, HALF + 0.3, HALF + 0.6, 26.6, 0.06, 0, RAIL, 0],      # unseen rails: nobody leaves the plate, at any height
           ['b', -HALF - 0.3, 26.0, 0, 0.06, 26.6, HALF + 0.6, 0, RAIL, 0], ['b', HALF + 0.3, 26.0, 0, 0.06, 26.6, HALF + 0.6, 0, RAIL, 0]],
    credit='Virtual City [Tilt Brush] by factoryfifteen (CC-BY-4.0)')
json.dump(arena, open(ARENA, 'w'), separators=(',', ':'))
print(f'arena: {len(roofs)} roofs ({sum(1 for r in roofs if r["kind"] == "ground")} of street), {len(links)} links, halo closes at {ZC}, starts at {[r["spawnPt"][::2] for r in sorted((r for r in roofs if r["spawn"] >= 0), key=lambda r: r["spawn"])]}; {os.path.getsize(ARENA) // 1024} KB')

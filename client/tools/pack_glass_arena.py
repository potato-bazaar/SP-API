#!/usr/bin/env python3
"""pack_glass_arena.py   ->   client/dist/arena-glass.json      (reads client/dist/glass.txt, which pack_glass.py writes)

GLASS CITY's arena: the roofs snipers stand on, how they join, where snipers start, where the halo closes. It is worked
out from the pack the game itself loads, so the two cannot disagree.

Nobody plays on the street here. A roof is any level floor above it; whoever comes down to the street is out (`dropY`).

  floors     every flat solid surface (the plate, panes, ribbons, tower tops), on a grid of one-metre columns.
             A column floor can be stood on if there are 1.85 m to the next floor up and nothing in the way from shin to
             head in that column.
  roofs      standable floor joined column to column (0.3 m of step at most), cut where it climbs more than 0.3 m from
             its middle height and by the 36 m tiles; kept if it is 16 m2 or more and all of it is 1.75 m or more above
             the plate. They lie over one another (`stacked`): ring.js tells which one you are on by its cells as well
             as its height.
  links      how to get from one roof to another, fast:
             'walk'    the same floor carries on into the next roof
             'step'    up to 2.3 m: a jump and a pull up
             'jump'    a leap across a gap of up to 9 m to the first roof on the far side: level, up to 2.4 m up (a leap
                       and a pull up) or up to 5 m down (one way). The game throws a sprinting sniper across; a bot rides
                       the same arc.
             'ladder'  up the face of an edge, to 18 m: where it joins roofs nothing else joins, or is the first way up to a
                       roof no more than 8 m above
             'zip'     a cable to another roof 20 to 100 m away, level or downhill, where a straight line is clear (ridden
                       both ways)
             'pad'     a launch pad that throws a sniper up or across to a roof 5 to 34 m away (one way)
             Every arc and every cable is checked against the model: nothing is in a rider's way.
  the rest   roofs of 30 m2 or more that cannot be both reached and left are given a cable or a pair of pads; what is
             still cut off is left out. The halo closes on the place in the middle block with the most roof round it.
             Eight starts on roofs of 60 m2 or more, 4 m or more up, 70 to 125 m from there, far apart.

People are not held to the links: they walk, jump and climb on the real panes. Links are what the bots know, where the
pads, cables, ladders and leap marks are, and what the game's prompts go by.
"""
import os, json, struct, base64
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__)); PACK = os.path.join(HERE, '..', 'dist', 'glass.txt'); ARENA = os.path.join(HERE, '..', 'dist', 'arena-glass.json')
CELL, HALF, NT, TILE = 1.0, 216.0, 12, 36.0   # cell size, half the play area, tiles a side, tile size (metres)
R0 = 150.0                                    # the halo's first ring: the match is fought inside it
MID = (0.0, -10.0)                            # the middle of the model's middle block: the halo closes within 24 m of here
MIN_ROOF, Y_ROOF, DROP_Y = 16.0, 1.75, 1.5    # a roof: this many square metres, none of it lower than this; below DROP_Y is the street
GRAV, ZIP_V = 22.0, 17.0                      # the game's gravity; how fast a cable carries a sniper here (m/s)
PARKOUR = dict(sprint=10.6, build=0.9, jump=8.3)   # running here builds speed: top speed (m/s), seconds to reach it, the jump at full speed (m/s up). The game reads this.

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
rim = []                                                                 # every flat surface, sampled finely: a floor reaches a little into columns it does not cover the middle of, and a rider must clear that too
def take(o, a, b, tri):
    n = np.cross(a, b); ln = np.linalg.norm(n)
    if ln < 1e-9: return
    inside = (np.abs(o[0] + (a[0] + b[0]) / 2) < HALF + 30) and (np.abs(o[2] + (a[2] + b[2]) / 2) < HALF + 30)
    if not inside: return
    if abs(n[1]) / ln > FLAT:
        r = floor_cells(o, a, b, tri)
        if r is not None and len(r[0]): fcol.append(r[0]); fy.append(r[1])
        rim.append(sample(o, a, b, tri))
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
# only the ground the first ring could take in is worked on (where the halo closes is found below, from the roofs themselves)
stand &= np.hypot(ctr(acol % NG) - MID[0], ctr(acol // NG) - MID[1]) <= R0 + 26.0
print(f'floors: {len(acol)} column floors, {int(stand.sum())} of them can be stood on ({stand.sum() * CELL * CELL:.0f} m2)')

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

# a roof: a level part of 16 m2 or more, all of it above the street
rmin = np.full(len(cnt), 1e9); np.minimum.at(rmin, roof, sy); ok0 = (cnt * CELL * CELL >= MIN_ROOF) & (rmin >= Y_ROOF)
# where the halo closes: the place within 24 m of the middle with the most roof within 9 m of it (three times over) and within 25 m
from scipy.signal import fftconvolve
def disc(r):
    n = int(np.ceil(r)); y_, x_ = np.mgrid[-n:n + 1, -n:n + 1]; return (np.hypot(x_, y_) <= r).astype(float)
g_ = np.zeros((NG, NG)); m_ = ok0[roof]; np.add.at(g_, (siz[m_], six[m_]), 1.0)
sc_ = 3 * fftconvolve(g_, disc(8.8), mode='same') + fftconvolve(g_, disc(24.8), mode='same'); X_, Z_ = np.meshgrid(ctr(np.arange(NG)), ctr(np.arange(NG))); sc_[np.hypot(X_ - MID[0], Z_ - MID[1]) > 24] = -1
zy0, zx0 = np.unravel_index(np.argmax(sc_), sc_.shape); ZC = [round(float(ctr(zx0)), 2), round(float(ctr(zy0)), 2)]
dmax = np.zeros(len(cnt)); np.maximum.at(dmax, roof, np.hypot(ctr(six) - ZC[0], ctr(siz) - ZC[1])); big = ok0 & (dmax <= R0 - 1.0)      # a roof that reaches past the first ring is nobody's
ry = np.zeros(len(cnt)); np.add.at(ry, roof, sy); ry /= cnt; rid = np.full(len(cnt), -1); rid[big] = np.arange(big.sum()); nroof = rid[roof]; NR = int(big.sum())   # nroof: each standable column floor's roof, or -1
RY = ry[big]; area = cnt[big] * CELL * CELL
print(f'roofs: {NR} of at least {MIN_ROOF:.0f} m2 and {Y_ROOF} m up, {int(area.sum())} m2 in all; the halo closes at {ZC}; by height (2, 3, 5, 8, 12, 18, 25 m and up): {np.histogram(RY, bins=[0, 3, 5, 8, 12, 18, 25, 99])[0].tolist()}')

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
for l in links: l['a'], l['b'] = int(l['a']), int(l['b'])
print('links:', {k: sum(1 for l in links if l['kind'] == k) for k in ('walk', 'step', 'ladder')})

# ---------------------------------------------------------------- what stands in a rider's way
solid = obs.copy(); k_ = np.floor((ay - Y0) / VY).astype(int); ok_ = (k_ >= 0) & (k_ < KL); solid[k_[ok_], acol[ok_]] = True      # the obstacles, and every floor
obs, keep_ = solid, obs; block(np.concatenate(rim)); obs = keep_; solid = solid.reshape(KL, NG, NG)      # and the rims of the floors (block() writes into `obs`: lend it `solid` for this)
def arcs_clear(PX, PY, PZ, skip0=0.6, skip1=0.6, lat=0.3):
    """Paths of a sniper's feet, one a row (n, samples): is each clear from shin to head, and a little to either side?
    The first and the last stretch (skip metres from each end) are over the ends' own floors and are not looked at."""
    dx, dz = PX[:, -1] - PX[:, 0], PZ[:, -1] - PZ[:, 0]; L = np.hypot(dx, dz) + 1e-9; sx, sz = -dz / L * lat, dx / L * lat
    chk = (np.hypot(PX - PX[:, :1], PZ - PZ[:, :1]) >= skip0) & (np.hypot(PX - PX[:, -1:], PZ - PZ[:, -1:]) >= skip1); bad = np.zeros(len(PX), bool)
    for off in (-1, 0, 1):
        ix, iz = np.floor((PX + sx[:, None] * off + HALF) / CELL).astype(int), np.floor((PZ + sz[:, None] * off + HALF) / CELL).astype(int)
        out = (ix < 0) | (ix >= NG) | (iz < 0) | (iz >= NG); ix, iz = np.clip(ix, 0, NG - 1), np.clip(iz, 0, NG - 1)
        for dy in np.arange(0.25, 1.86, VY):
            k = np.floor((PY + dy - Y0) / VY).astype(int); bad |= (((solid[np.clip(k, 0, KL - 1), iz, ix] & (k < KL)) | out) & chk).any(1)
    return ~bad
P3 = lambda n: np.stack([ctr(six[n]), sy[n], ctr(siz[n])], 1)           # where nodes are, in metres
rcx = np.zeros(NR); rcz = np.zeros(NR); m_ = nroof >= 0; np.add.at(rcx, nroof[m_], ctr(six[m_])); np.add.at(rcz, nroof[m_], ctr(siz[m_])); rcx /= cnt[big]; rcz /= cnt[big]      # the middle of each roof
dzc = np.hypot(rcx - ZC[0], rcz - ZC[1])                                # and how far that is from where the halo closes
ends = defaultdict(list)                                                # where links touch each roof (x, z): a launch pad keeps clear of them
def touch(l):
    if l['kind'] not in ('walk', 'step'): ends[l['a']].append((l['p0'][0], l['p0'][2])); ends[l['b']].append((l['p1'][0], l['p1'][2]))
far = lambda pts, x, z, r: all(np.hypot(x - px, z - pz) >= r for px, pz in pts)

# ---------------------------------------------------------------- leaps: across a gap to the first roof on the far side
# From every roof edge, out along sixteen compass lines: the first column with a floor between 5 m below and 2.4 m above
# ends the look. If that floor is another roof's and at least one column of open air lies between (two columns that only
# touch at a corner are not a gap), a sniper can leap it: up to 9 m level or down, less the higher it lands (2.4 m up is a leap and a pull up). The arc is the one the game
# draws (arena.js linkPos, 'jump'); it is checked both ways, and a gap that can only be leapt downward is one way.
LEAP, UP, DOWN = 9.0, 2.4, 5.0
def col_of(n, dx, dz, k=1):
    x, z = six[n] + dx * k, siz[n] + dz * k; return np.where((x >= 0) & (x < NG) & (z >= 0) & (z < NG), z * NG + x, -1)
def top_below(col, ymax):                                               # the highest floor of any kind in these columns at or below a height: an index into acol/ay, or -1
    k = np.searchsorted(akey, col * 1000.0 + ymax, 'right') - 1; ok = (col >= 0) & (k >= 0); ok[ok] &= acol[k[ok]] == col[ok]; return np.where(ok, k, -1)
def same_roof(n, dx, dz, k):                                            # is the floor k columns on from each node its own roof's, at its level?
    col = col_of(n, dx, dz, k); j = node_at(np.maximum(col, 0), sy[n], 0.3); ok = (col >= 0) & (j >= 0); jj = sid[np.maximum(j, 0)]; ok &= jj >= 0; ok[ok] &= nroof[jj[ok]] == nroof[n[ok]]; return ok
def jump_arc(A, B, S=44):
    u = np.linspace(0, 1, S)[None, :]; rise = (B[:, 1] - A[:, 1])[:, None]; lin = A[:, 1:2] + rise * u
    y = np.maximum(lin + (1.25 + np.maximum(0, rise)) * 4 * u * (1 - u) * np.where(rise > 0, 1 - u * 0.5, 0.5 + u * 0.5), lin)
    return A[:, 0:1] + (B[:, 0:1] - A[:, 0:1]) * u, y, A[:, 2:3] + (B[:, 2:3] - A[:, 2:3]) * u
hits = []
for th in np.arange(16) * (np.pi / 8):
    ux, uz = np.cos(th), np.sin(th); src = np.flatnonzero(nroof >= 0); prev = scol[src].copy(); empty = np.zeros(len(src), int)
    for s_ in range(1, int(LEAP / 0.5) + 2):                              # half a metre at a time
        ix, iz = np.floor((ctr(six[src]) + ux * 0.5 * s_ + HALF) / CELL).astype(int), np.floor((ctr(siz[src]) + uz * 0.5 * s_ + HALF) / CELL).astype(int)
        inb = (ix >= 0) & (ix < NG) & (iz >= 0) & (iz < NG); col = np.where(inb, iz * NG + ix, -1); fresh = inb & (col != prev)      # into the next column
        t = top_below(col, sy[src] + UP); inr = fresh & (t >= 0); inr[inr] &= ay[t[inr]] >= sy[src[inr]] - DOWN
        j = sid[np.maximum(t, 0)]; h = inr & (empty >= 1) & (j >= 0); h[h] &= (nroof[j[h]] >= 0) & (nroof[j[h]] != nroof[src[h]])
        if h.any(): hits.append(np.stack([src[h], j[h]], 1))
        empty = empty + (fresh & ~inr); prev = np.where(fresh, col, prev); go = inb & ~inr; src, prev, empty = src[go], prev[go], empty[go]
        if not len(src): break
fn, tn = np.unique(np.concatenate(hits), axis=0).T; ddx, ddz = ctr(six[tn]) - ctr(six[fn]), ctr(siz[tn]) - ctr(siz[fn]); hdist = np.hypot(ddx, ddz); rise = sy[tn] - sy[fn]
ok = (rise <= UP) & (hdist >= 1.9) & (hdist <= LEAP - 2.0 * np.maximum(0, rise)); ok[ok] &= arcs_clear(*jump_arc(P3(fn[ok]), P3(tn[ok])))
fn, tn, ddx, ddz, hdist, rise = fn[ok], tn[ok], ddx[ok], ddz[ok], hdist[ok], rise[ok]
back = (rise >= -UP) & (hdist <= LEAP - 2.0 * np.maximum(0, -rise)); back[back] &= arcs_clear(*jump_arc(P3(tn[back]), P3(fn[back])))                       # and the other way?
qx, qz = np.where(np.abs(ddx) >= 0.4 * np.abs(ddz), np.sign(ddx), 0).astype(int), np.where(np.abs(ddz) >= 0.4 * np.abs(ddx), np.sign(ddz), 0).astype(int)      # which way it goes, to the nearest of eight
run = same_roof(fn, -qx, -qz, 1).astype(int) + same_roof(fn, -qx, -qz, 2); land = same_roof(tn, qx, qz, 1).astype(int) + same_roof(tn, qx, qz, 2)
score = hdist + 0.6 * np.abs(rise) + 1.5 * (2 - run) + 1.0 * (2 - land) + np.where(back, 0, 1.0)
per = defaultdict(list); nleap = defaultdict(int); leaps = []
for i in np.argsort(score, kind='stable'):                               # the best first: three at most between two roofs, 14 m apart; five at most from one roof
    a, b = int(nroof[fn[i]]), int(nroof[tn[i]]); key = (min(a, b), max(a, b)); x, z, x1, z1 = float(ctr(six[fn[i]])), float(ctr(siz[fn[i]])), float(ctr(six[tn[i]])), float(ctr(siz[tn[i]]))
    if len(per[key]) >= 6 or nleap[a] >= 5 or nleap[b] >= 5 or not far(per[key], x, z, 14.0) or not far(ends[a], x, z, 2.0) or not far(ends[b], x1, z1, 2.0): continue
    per[key] += [(x, z), (x1, z1)]; nleap[a] += 1; nleap[b] += 1
    leaps.append(dict(kind='jump', a=a, b=b, oneWay=not bool(back[i]), p0=pos_of(fn[i]), p1=pos_of(tn[i]), time=round(max(0.55, 0.25 + float(hdist[i]) / 10.0), 3))); touch(leaps[-1])
print(f'leaps: {len(fn)} ways found, {len(leaps)} kept ({sum(1 for l in leaps if l["oneWay"])} one way down); gaps (m): {np.histogram([np.hypot(l["p1"][0] - l["p0"][0], l["p1"][2] - l["p0"][2]) for l in leaps], bins=[0, 3, 5, 7, 9.5])[0].tolist()}')

# ---------------------------------------------------------------- ladders: the shortest climbs first
# One is put up if it joins roofs that walking, stepping and leaping both ways do not join, or if it is the first way up
# to a roof of 40 m2 or more that is no more than 8 m above; any other would be clutter.
uf = list(range(NR))
def find(i):
    while uf[i] != i: uf[i] = uf[uf[i]]; i = uf[i]
    return i
for l in links + leaps:
    if l['kind'] != 'ladder' and not l['oneWay']: uf[find(l['a'])] = find(l['b'])
lad = sorted([l for l in links if l['kind'] == 'ladder'], key=lambda l: l['score']); n_up = defaultdict(int); keep_l = []
for l in lad:
    a, b = find(l['a']), find(l['b'])
    if a != b or (n_up[l['b']] == 0 and area[l['b']] >= 40 and l['h'] <= 8.0):
        uf[a] = b; n_up[l['b']] += 1; keep_l.append(l)
links = [l for l in links if l['kind'] != 'ladder'] + keep_l + leaps
for l in links: l.pop('score', None)
for l in keep_l: touch(l)

# ---------------------------------------------------------------- cables: a ride to another roof 20 to 100 m away
# From the higher roofs, level or downhill (they are ridden both ways), if a straight line between two of their edges is
# clear for a sniper hanging under it (checked through the same voxels, a column to each side too). Two at most to a roof
# (more only where a roof would otherwise be cut off).
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
pad0 = defaultdict(list)                                                # where launch pads sit on each roof (x, z)
def zip_try(ra, rb, lo=20.0):
    if RY[ra] < RY[rb]: ra, rb = rb, ra
    A = sorted(rnodes[int(ra)], key=lambda n: np.hypot(ctr(six[n]) - rcx[rb], ctr(siz[n]) - rcz[rb]))[:10]; B = sorted(rnodes[int(rb)], key=lambda n: np.hypot(ctr(six[n]) - rcx[ra], ctr(siz[n]) - rcz[ra]))[:10]
    for a in A:
        if not far(pad0[int(ra)], ctr(six[a]), ctr(siz[a]), 2.6): continue
        for b in B:
            d = np.hypot(ctr(six[a]) - ctr(six[b]), ctr(siz[a]) - ctr(siz[b]))
            if d < lo or abs(sy[a] - sy[b]) > 0.6 * d or not far(pad0[int(rb)], ctr(six[b]), ctr(siz[b]), 2.6) or not line_clear(pos_of(a), pos_of(b)): continue
            p0, p1 = pos_of(a), pos_of(b); ux, uz = (p1[0] - p0[0]) / d, (p1[2] - p0[2]) / d; ln = float(np.linalg.norm(np.array(p1) - np.array(p0)))
            return dict(kind='zip', a=int(ra), b=int(rb), oneWay=False, p0=p0, p1=p1, time=round(ln / ZIP_V, 3), lift=0.95, len=round(ln, 3),
                        c0=[round(p0[0] - ux * 0.35, 3), round(p0[1] + 3.05, 3), round(p0[2] - uz * 0.35, 3)], c1=[round(p1[0] + ux * 0.35, 3), round(p1[1] + 3.05, 3), round(p1[2] + uz * 0.35, 3)])
    return None
rng = np.random.default_rng(11); zips = []; zn = defaultdict(int); zband = defaultdict(int); ZB = lambda y: 0 if y < 7 else 1 if y < 14 else 2      # so many from each range of heights: the top would take them all
for ra in np.argsort(-RY):
    if os.environ.get('GLASS_NOZIP'): break
    if RY[ra] < 3.5 or area[ra] < 40 or zband[ZB(RY[ra])] >= (30, 30, 30)[ZB(RY[ra])]: continue
    d_ = np.hypot(rcx - rcx[ra], rcz - rcz[ra]); sc = (dzc[ra] - dzc) * 0.03 + d_ * 0.012 + rng.random(NR) * 1.5          # toward where the halo closes, and far, first
    targets = [rb for rb in np.argsort(-sc) if 22 <= d_[rb] <= 100 and RY[rb] <= RY[ra] + 1.0 and rb != ra and zn[int(rb)] < 2 and area[rb] >= 40][:24]; got = []
    for rb in targets:
        if zn[int(ra)] >= 2: break
        if any(np.hypot(rcx[rb] - rcx[g], rcz[rb] - rcz[g]) < 44 for g in got): continue              # the second cable goes somewhere else
        z = zip_try(ra, rb)
        if z: zips.append(z); touch(z); zn[int(ra)] += 1; zn[int(rb)] += 1; zband[ZB(RY[ra])] += 1; got.append(rb)
links += zips
print(f'cables: {len(zips)}; lengths', sorted(round(z['len']) for z in zips)[:: max(1, len(zips) // 12)], ' from heights', sorted(round(float(RY[z['a']])) for z in zips)[:: max(1, len(zips) // 12)])

# ---------------------------------------------------------------- launch pads: thrown up, or across, to a roof 5 to 34 m away
# A pad sits a column in from its roof's edge, clear of ladders, cables and leap marks; where it throws to is a column in
# too. The throw tops out 1.8 to 9 m above the higher end: the lowest one that clears everything on the way.
inn = (nroof >= 0) & (nb >= 0).all(0); inn[inn] &= (nroof[nb[:, inn]] == nroof[inn]).all(0); innodes = defaultdict(list)
for n in np.flatnonzero(inn): innodes[int(nroof[n])].append(int(n))
CL = np.array([1.8, 3.0, 4.5, 6.5, 9.0])
def pad_try(ra, rb, dmin=5.0, dmax=34.0):
    ra, rb = int(ra), int(rb); A = [n for n in sorted(innodes[ra], key=lambda n: np.hypot(ctr(six[n]) - rcx[rb], ctr(siz[n]) - rcz[rb])) if far(ends[ra] + pad0[ra], ctr(six[n]), ctr(siz[n]), 2.6)][:4]; pairs = []
    for a in A:
        for b in [n for n in sorted(innodes[rb], key=lambda n: np.hypot(ctr(six[n]) - ctr(six[a]), ctr(siz[n]) - ctr(siz[a]))) if far(pad0[rb], ctr(six[n]), ctr(siz[n]), 2.6)][:4]:
            if dmin <= np.hypot(ctr(six[b]) - ctr(six[a]), ctr(siz[b]) - ctr(siz[a])) <= dmax: pairs.append((a, b))
    if not pairs: return None
    A3, B3, c = np.repeat(P3(np.array([p[0] for p in pairs])), len(CL), 0), np.repeat(P3(np.array([p[1] for p in pairs])), len(CL), 0), np.tile(CL, len(pairs))
    top = np.maximum(A3[:, 1], B3[:, 1]) + c; vy = np.sqrt(2 * GRAV * (top - A3[:, 1])); T = vy / GRAV + np.sqrt(2 * (top - B3[:, 1]) / GRAV); t = np.linspace(0, 1, 120)[None, :] * T[:, None]
    PX, PZ, PY = A3[:, 0:1] + (B3[:, 0:1] - A3[:, 0:1]) * t / T[:, None], A3[:, 2:3] + (B3[:, 2:3] - A3[:, 2:3]) * t / T[:, None], A3[:, 1:2] + vy[:, None] * t - 0.5 * GRAV * t * t
    ok = arcs_clear(PX, PY, PZ, 0.75, 0.75, lat=0.35) & (np.hypot(B3[:, 0] - A3[:, 0], B3[:, 2] - A3[:, 2]) / T <= 24.0) & (top - A3[:, 1] <= 22.0)      # nobody is thrown faster than 24 m/s across or more than 22 m up
    if not ok.any(): return None
    i = int(np.argmax(ok)); p0, p1 = [round(float(v), 3) for v in A3[i]], [round(float(v), 3) for v in B3[i]]; T_ = round(float(T[i]), 3)
    v = [round((p1[0] - p0[0]) / T_, 3), round((p1[1] - p0[1] + 0.5 * GRAV * T_ * T_) / T_, 3), round((p1[2] - p0[2]) / T_, 3)]      # so that the throw lands on p1 to the millimetre with the rounded time
    return dict(kind='pad', a=ra, b=rb, oneWay=True, p0=p0, p1=p1, time=T_, v=v, apex=round(float(top[i]), 3))
def put_pad(p): links.append(p); pad0[p['a']].append((p['p0'][0], p['p0'][2])); ends[p['b']].append((p['p1'][0], p['p1'][2]))
pout = defaultdict(int); pin = defaultdict(int); linked = set((l['a'], l['b']) for l in links) | set((l['b'], l['a']) for l in links if not l['oneWay'])
for ra in np.argsort(-area):
    if os.environ.get('GLASS_NOPAD') or area[ra] < 40: break
    d_ = np.hypot(rcx - rcx[ra], rcz - rcz[ra]); sc = 1.2 * np.clip(RY - RY[ra], -3, 10) + 0.25 * (dzc[ra] - dzc) - 0.15 * np.abs(d_ - 18) + np.minimum(area, 150) / 50      # up first, and toward where the halo closes
    targets = [int(rb) for rb in np.argsort(-sc) if rb != ra and 6 <= d_[rb] <= 44 and -3 <= RY[rb] - RY[ra] <= 16 and area[rb] >= 40 and pin[int(rb)] < 2 and (int(ra), int(rb)) not in linked][:8]; got = []
    for rb in targets:
        if pout[int(ra)] >= (2 if area[ra] >= 150 else 1): break
        if any(np.hypot(rcx[rb] - rcx[g], rcz[rb] - rcz[g]) < 15 for g in got): continue
        p = pad_try(ra, rb)
        if p: put_pad(p); pout[int(ra)] += 1; pin[rb] += 1; got.append(rb); linked.add((int(ra), rb))
print(f'launch pads: {sum(pout.values())}; throws (m across): {np.histogram([np.hypot(l["p1"][0] - l["p0"][0], l["p1"][2] - l["p0"][2]) for l in links if l["kind"] == "pad"], bins=[0, 10, 16, 24, 35])[0].tolist()}, (m up): {np.histogram([l["p1"][1] - l["p0"][1] for l in links if l["kind"] == "pad"], bins=[-4, -0.5, 0.5, 4, 10, 25])[0].tolist()}')

# ---------------------------------------------------------------- every roof can be reached, and left
# The roofs that can all reach one another are the map. One of 30 m2 or more outside gets a cable to a near roof inside
# (12 m or longer), or a pad in and a pad out; what is still cut off after that is nobody's roof.
def strong(links_):
    r, c = [], []
    for l in links_:
        r.append(l['a']); c.append(l['b'])
        if not l['oneWay']: r.append(l['b']); c.append(l['a'])
    lab_ = connected_components(coo_matrix((np.ones(len(r), bool), (r, c)), shape=(NR, NR)), directed=True, connection='strong')[1]; return lab_ == int(np.argmax(np.bincount(lab_, weights=area)))
for rnd in range(5):
    inm = strong(links); out = [int(r) for r in np.argsort(-area) if not inm[r]]; n_add = 0
    print(f'  joined: {int(inm.sum())} of {NR} roofs, {int(area[inm].sum())} of {int(area.sum())} m2' + (f'; {len(out)} outside' if out else ''))
    for r in out:
        if area[r] < 30: continue
        near = [int(q) for q in np.argsort(np.hypot(rcx - rcx[r], rcz - rcz[r])) if inm[q] and q != r][:12]
        z = next((z for z in (zip_try(r, q, lo=12.0) for q in near[:8]) if z), None)
        if z: links.append(z); touch(z); inm[r] = True; n_add += 1; continue
        pi = next((p for p in (pad_try(q, r) for q in near) if p), None); po = next((p for p in (pad_try(r, q) for q in near) if p), None)
        if pi and po: put_pad(pi); put_pad(po); inm[r] = True; n_add += 1
    if not n_add: break
inm = strong(links)

# ---------------------------------------------------------------- what is left out, where snipers start
keep_r = np.flatnonzero(inm); new = np.full(NR, -1); new[keep_r] = np.arange(len(keep_r)); links = [dict(l, a=int(new[l['a']]), b=int(new[l['b']])) for l in links if new[l['a']] >= 0 and new[l['b']] >= 0]
nlink = np.zeros(NR, int)
for l in links: nlink[keep_r[l['a']]] += 1; nlink[keep_r[l['b']]] += (0 if l['oneWay'] else 1)
order_ = np.argsort(nroof, kind='stable'); starts_ = np.searchsorted(nroof[order_], np.arange(NR + 1))
def nodes_of(r): return order_[starts_[r]:starts_[r + 1]]
def deepest(r, clear_of=()):                                             # the node of a roof farthest from its edges (and its depth, metres), not on a pad
    ns = nodes_of(r); i0, j0 = six[ns].min(), siz[ns].min(); m = np.zeros((siz[ns].max() - j0 + 3, six[ns].max() - i0 + 3), bool); m[siz[ns] - j0 + 1, six[ns] - i0 + 1] = True; dep = ndimage.distance_transform_edt(m)[siz[ns] - j0 + 1, six[ns] - i0 + 1] * CELL
    for px, pz in clear_of: dep = np.where(np.hypot(ctr(six[ns]) - px, ctr(siz[ns]) - pz) < 3.0, 0, dep)
    k = int(np.argmax(dep)); return int(ns[k]), float(dep[k])
# eight starts: roofs of 60 m2 or more, 70 to 125 m from where the halo closes, with two ways off; each as far from the others as can be
cs = [int(r) for r in keep_r if area[r] >= 60 and RY[r] >= 4.0 and 70 <= dzc[r] <= 125 and nlink[r] >= 2]; cs = [r for r in cs if deepest(r, pad0[r])[1] >= 1.5]
pick = [max(cs, key=lambda r: area[r])]
while len(pick) < 8: pick.append(max((r for r in cs if r not in pick), key=lambda r: min(np.hypot(rcx[r] - rcx[q], rcz[r] - rcz[q]) for q in pick)))
pick.sort(key=lambda r: np.arctan2(rcz[r] - ZC[1], rcx[r] - ZC[0])); spawn = {}
for i, r in enumerate(pick): n = deepest(r, pad0[r])[0]; spawn[r] = (i, [round(float(ctr(six[n])), 2), round(float(sy[n]), 3), round(float(ctr(siz[n])), 2)])
BLOCK = ['NORTH-WEST', 'NORTH', 'NORTH-EAST', 'WEST', 'TOWERS', 'EAST', 'SOUTH-WEST', 'SOUTH', 'SOUTH-EAST']
roofs = []
for r in keep_r:
    ns = nodes_of(r); i0, i1, j0, j1 = six[ns].min(), six[ns].max(), siz[ns].min(), siz[ns].max(); nx, nz = int(i1 - i0 + 1), int(j1 - j0 + 1); m = np.zeros((nz, nx), 'u1'); m[siz[ns] - j0, six[ns] - i0] = 1
    y = float(np.median(sy[ns])); ti = int(tile[ns[0]]); tx, tz = ti % NT, ti // NT; x0, z0 = -HALF + i0 * CELL, -HALF + j0 * CELL
    e = ns[(nb[:, ns] < 0).any(0)]; e = e if len(e) else ns; e = e[rng.permutation(len(e))[:24]]      # where a sniper sets up: a roof's edges
    rec = dict(id='f' + str(len(roofs)), name=f'{BLOCK[(tz // 4) * 3 + tx // 4]} · {max(1, round(y))} M', kind='roof',
               x=round(x0 + nx * CELL / 2, 3), z=round(z0 + nz * CELL / 2, 3), hx=nx * CELL / 2, hz=nz * CELL / 2, roofY=round(y, 3), spawn=-1,
               grid=dict(nx=nx, nz=nz, ox=round(x0, 3), oz=round(z0, 3), m=base64.b64encode(m.tobytes()).decode()), perch=sorted(int((siz[n] - j0) * nx + (six[n] - i0)) for n in e), cover=[])
    if int(r) in spawn: rec['spawn'], rec['spawnPt'] = spawn[int(r)]
    roofs.append(rec)
# the last rings must have roof in them: how much of the map's roof lies within 9, 25 and 48 m of where the halo closes
nk = np.flatnonzero((nroof >= 0) & inm[np.maximum(nroof, 0)]); dn = np.hypot(ctr(six[nk]) - ZC[0], ctr(siz[nk]) - ZC[1]); last = [int((dn <= r_).sum()) for r_ in (8.8, 24.8, 47.8)]; assert last[0] >= 60, last
RAIL = [255, 40, 0, 0]
arena = dict(version=3, map='glass', cell=CELL, parapet=0, gravity=GRAV, half=HALF, stacked=True,     # stacked: roofs lie over one another, so which one you are on goes by its cells as well as its height
    dropY=DROP_Y,                                                   # nobody plays on the street: below this height a sniper is out
    parkour=PARKOUR,
    # the match is fought over the middle block, where the model's detail is (its cables, lit towers and streets of light): the halo starts 150 m out from it and closes on it
    zone=dict(center=ZC, r0=R0, phases=[dict(t=0, r=R0, dps=0), dict(t=60, r=112, shrink=26, dps=6), dict(t=120, r=80, shrink=26, dps=9), dict(t=180, r=50, shrink=26, dps=13),
                                         dict(t=240, r=27, shrink=16, dps=18), dict(t=270, r=11, shrink=16, dps=25)], duration=300),
    roofs=roofs, links=links, shapes=[['b', 0, -0.5, 0, H['half'][0] + 4, 0.5, H['half'][1] + 4, 0, [8, 12, 20, 0], 0]],      # the plate (not drawn: the model's own ground is): its top is y = 0
    deco=[], skyline=[],
    fence=[['b', 0, 26.0, -HALF - 0.3, HALF + 0.6, 26.6, 0.06, 0, RAIL, 0], ['b', 0, 26.0, HALF + 0.3, HALF + 0.6, 26.6, 0.06, 0, RAIL, 0],      # unseen rails: nobody leaves the plate, at any height
           ['b', -HALF - 0.3, 26.0, 0, 0.06, 26.6, HALF + 0.6, 0, RAIL, 0], ['b', HALF + 0.3, 26.0, 0, 0.06, 26.6, HALF + 0.6, 0, RAIL, 0]],
    credit='Virtual City [Tilt Brush] by factoryfifteen (CC-BY-4.0)')
json.dump(arena, open(ARENA, 'w'), separators=(',', ':'))
kinds = {k: sum(1 for l in links if l['kind'] == k) for k in ('walk', 'step', 'jump', 'ladder', 'zip', 'pad')}; fast = np.zeros(len(roofs), int)
for l in links:
    if l['kind'] in ('jump', 'zip', 'pad'): fast[l['a']] += 1; fast[l['b']] += (0 if l['oneWay'] else 1)
print(f'arena: {len(roofs)} roofs, {int(area[keep_r].sum())} m2; links {kinds}; roofs with no fast way off (a leap, a cable or a pad): {int((fast == 0).sum())}, with one: {int((fast == 1).sum())}; roof within 9 / 25 / 48 m of {ZC}: {last} m2')
print(f'starts: {[(r["name"], r["spawnPt"]) for r in sorted((r for r in roofs if r["spawn"] >= 0), key=lambda r: r["spawn"])]}; {os.path.getsize(ARENA) // 1024} KB')

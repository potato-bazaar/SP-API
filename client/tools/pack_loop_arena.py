"""Part two of pack_loop.py: reads the unrolled city and works out where a sniper can stand and how to get about.

  regions   flat walkable patches of the height field: every rooftop, and the ground cut into sectors
            (the game calls them all "roofs"; bots path on each one's grid and travel between them on links)
  links     walk   two ground sectors meet (bots only; players just walk)
            step   a low ledge
            ladder wall between a low region and a roof
            zip    cable between two roofs
            zip+hub  a cable straight through the middle of the wheel to a roof far round the ring
            pad    launch pad from the street to a roof
  spawns, the closing zone, the rails along both rims
"""
import os, json, math, base64
import numpy as np
import scipy.sparse as sp, scipy.sparse.csgraph as cg
from PIL import Image
from pack_loop import height_map, fill_holes, shade_map, HM, CELL, G

NAMES = [('GunShop', 'GUN SHOP'), ('PawnShop', 'PAWN SHOP'), ('FFactory', 'FISH FACTORY'), ('Laundrette', 'LAUNDRETTE'), ('Liquor', 'LIQUOR STORE'), ('Housing', 'HOUSING'),
         ('Clinic', 'CLINIC'), ('Project', 'PROJECTS'), ('Paramount', 'PARAMOUNT'), ('Filler', 'BLOCK'), ('Basketball', 'COURT')]
SECTOR = 'ABCDEFGH'

def r2(v): return round(float(v), 3)

class Field:
    """The height field and the nav grid laid over it."""
    def __init__(s, geo):
        s.C = geo['C']; s.H = s.C / 2; s.R = geo['R']; s.zmax = geo['zmax']
        hm = height_map(geo['cP'], geo['cF'], s.C, s.zmax)
        s.hm = fill_holes(hm); s.Hn, s.W = s.hm.shape
        s.NX = int(s.C / CELL); s.NZ = int(round(2 * s.zmax / CELL))            # whole cells only: the sliver left at the seam is not walkable
        h4 = s.hm[: s.NZ * 2, : s.NX * 2].reshape(s.NZ, 2, s.NX, 2); s.hc = h4.max((1, 3)); s.hmin = h4.min((1, 3))
        s.flat = (s.hc - s.hmin <= 0.2) & (s.hmin > -40)
    def cx(s, i): return -s.H + (i + 0.5) * CELL
    def cz(s, j): return -s.zmax + (j + 0.5) * CELL
    def top(s, x, z):
        xi = np.floor((np.asarray(x) + s.H) / HM).astype(int) % s.W; zi = np.clip(np.floor((np.asarray(z) + s.zmax) / HM).astype(int), 0, s.Hn - 1); return s.hm[zi, xi]
    def top_max(s, x, z, rad=0.3):
        """Highest thing within rad of each point (so a cable does not graze a parapet it only just misses)."""
        o = [(-rad, 0), (rad, 0), (0, -rad), (0, rad), (0, 0)]; return np.max([s.top(np.asarray(x) + a, np.asarray(z) + b) for a, b in o], axis=0)

def components(ok, hc, tol, NX, NZ):
    idx = -np.ones((NZ, NX), dtype=np.int64); idx[ok] = np.arange(ok.sum()); n = int(ok.sum()); rows = []; cols = []
    a = ok[:, :-1] & ok[:, 1:] & (np.abs(hc[:, :-1] - hc[:, 1:]) <= tol); rows.append(idx[:, :-1][a]); cols.append(idx[:, 1:][a])
    a = ok[:-1, :] & ok[1:, :] & (np.abs(hc[:-1, :] - hc[1:, :]) <= tol); rows.append(idx[:-1, :][a]); cols.append(idx[1:, :][a])
    r = np.concatenate(rows); c = np.concatenate(cols); g = sp.coo_matrix((np.ones(len(r)), (r, c)), shape=(n, n)); nc, lab = cg.connected_components(g, directed=False)
    out = -np.ones((NZ, NX), dtype=np.int64); out[ok] = lab; return out, nc

def build_regions(F):
    NX, NZ, hc = F.NX, F.NZ, F.hc; ok = F.flat.copy()
    # stand half a metre clear of anything that rises: walls, trunks, poles, parapets
    tall = np.where(F.flat, hc, np.maximum(hc, -40)); rise = np.zeros_like(ok)
    for dj, di in ((0, 1), (0, -1), (1, 0), (-1, 0)):
        nb = np.roll(tall, (dj, di), (0, 1));
        if dj == 1: nb[0, :] = 99
        if dj == -1: nb[-1, :] = 99
        if di == 1: nb[:, 0] = tall[:, 0]            # the seam is not a wall
        if di == -1: nb[:, -1] = tall[:, -1]
        rise |= (nb - hc) > 0.5
    ok &= ~rise
    lab, nc = components(ok, hc, 0.3, NX, NZ)
    # a region is one level: cells that drifted from its median (ramps, steps) drop out, then relabel
    for _ in range(2):
        med = np.zeros(nc);
        flat_lab = lab[ok]; hh = hc[ok]; order = np.argsort(flat_lab, kind='stable'); fl = flat_lab[order]; hs = hh[order]; starts = np.r_[0, np.where(np.diff(fl))[0] + 1]; ends = np.r_[starts[1:], len(fl)]
        for a, b in zip(starts, ends): med[fl[a]] = np.median(hs[a:b])
        bad = ok & (np.abs(hc - med[np.maximum(lab, 0)]) > 0.4); ok &= ~bad; lab, nc = components(ok, hc, 0.3, NX, NZ)
    cnt = np.bincount(lab[ok], minlength=nc)
    med = np.array([np.median(hc[lab == k]) if cnt[k] >= 24 else 0 for k in range(nc)])
    # cut anything long into sectors a bot can path across in one go
    ids = -np.ones((NZ, NX), dtype=np.int64); regions = []
    jj, ii = np.mgrid[0:NZ, 0:NX]
    for k in np.where(cnt >= 24)[0]:
        m = lab == k; i0, i1 = ii[m].min(), ii[m].max(); j0, j1 = jj[m].min(), jj[m].max(); wx = (i1 - i0 + 1) * CELL; wz = (j1 - j0 + 1) * CELL
        nxs = max(1, math.ceil(wx / 34)); nzs = max(1, math.ceil(wz / 35)); sx = (i1 - i0 + 1) / nxs; sz = (j1 - j0 + 1) / nzs
        for a in range(nxs):
            for b in range(nzs):
                sub = m & (ii >= i0 + round(a * sx)) & (ii < i0 + round((a + 1) * sx)) & (jj >= j0 + round(b * sz)) & (jj < j0 + round((b + 1) * sz))
                if sub.sum() < 24: continue
                l2, n2 = components(sub, hc, 0.3, NX, NZ)
                for q in range(n2):
                    mm = l2 == q
                    if mm.sum() < 60 or np.ptp(ii[mm]) < 4 or np.ptp(jj[mm]) < 4: continue          # too small or too thin to be a place
                    ids[mm] = len(regions); regions.append({'y': float(np.median(hc[mm])), 'n': int(mm.sum())})
    return ids, regions

def name_of(F, geo, ids, k, ground):
    jj, ii = np.where(ids == k); x = F.cx(ii.mean()); sec = SECTOR[int(((x + F.H) / F.C) * 8) % 8]
    if ground: return 'STREET ' + sec, sec
    # which building is this: the source node of the triangles under the roof
    cnt = {}
    for j, i in list(zip(jj, ii))[:: max(1, len(jj) // 40)]:
        nn = F.node[min(j * 2, F.Hn - 1), min(i * 2, F.W - 1)]
        if nn >= 0: nm = geo['names'][nn]; cnt[nm] = cnt.get(nm, 0) + 1
    best = max(cnt, key=cnt.get) if cnt else ''
    for key, lab in NAMES:
        if key in best: return lab + ' ' + sec, sec
    return 'ROOF ' + sec, sec

def node_map(geo, F):
    """Which source node owns the top surface at each height texel (for names only)."""
    P = geo['P']; Fc = geo['F']; MI = geo['MI']; NN = geo['NN']; names = [m['name'] for m in geo['mats']]
    keep = np.array([('Leaves' not in names[m]) and ('GLOW' not in names[m]) and ('Glow' not in names[m]) for m in MI]); Fc = Fc[keep]; NN = NN[keep]
    tri = P[Fc]; cen = tri.mean(1); xi = np.floor((cen[:, 0] + F.H) / HM).astype(int) % F.W; zi = np.clip(np.floor((cen[:, 2] + F.zmax) / HM).astype(int), 0, F.Hn - 1)
    nm = -np.ones((F.Hn, F.W), dtype=np.int64); o = np.argsort(cen[:, 1]); nm[zi[o], xi[o]] = NN[o]
    # spread to neighbours so most texels have an owner
    for _ in range(12):
        for sh in ((0, 1), (0, -1), (1, 0), (-1, 0)):
            nb = np.roll(nm, sh, (0, 1)); e = (nm < 0) & (nb >= 0); nm[e] = nb[e]
    return nm

def ray_wall(cP, cF, o, d, maxd):
    """First hit of a ray on the collision mesh (brute force over the triangles near it)."""
    tri = cP[cF]; lo = np.minimum(o, o + d * maxd) - 0.05; hi = np.maximum(o, o + d * maxd) + 0.05
    m = (tri.max(1) >= lo).all(1) & (tri.min(1) <= hi).all(1); T = tri[m]
    if not len(T): return None
    e1 = T[:, 1] - T[:, 0]; e2 = T[:, 2] - T[:, 0]; p = np.cross(d, e2); det = (e1 * p).sum(1); okd = np.abs(det) > 1e-9; inv = np.where(okd, 1 / np.where(okd, det, 1), 0)
    tv = o - T[:, 0]; u = (tv * p).sum(1) * inv; q = np.cross(tv, e1); v = (q * d).sum(1) * inv; t = (e2 * q).sum(1) * inv
    hit = okd & (u >= -1e-6) & (v >= -1e-6) & (u + v <= 1 + 1e-6) & (t > 1e-4) & (t <= maxd)
    return float(t[hit].min()) if hit.any() else None

def build_arena(geo, dist):
    F = Field(geo); C, H, R, zmax = F.C, F.H, F.R, F.zmax; NX, NZ = F.NX, F.NZ
    F.node = node_map(geo, F)
    ids, regs = build_regions(F); nreg = len(regs)
    jj, ii = np.mgrid[0:NZ, 0:NX]
    # ---------------------------------------------------------------- regions -> "roofs"
    roofs = []
    for k, rg in enumerate(regs):
        m = ids == k; i0, i1 = int(ii[m].min()), int(ii[m].max()); j0, j1 = int(jj[m].min()), int(jj[m].max()); nx = i1 - i0 + 1; nz = j1 - j0 + 1
        mask = m[j0:j1 + 1, i0:i1 + 1].astype(np.uint8); ground = rg['y'] < 1.0
        nm, sec = name_of(F, geo, ids, k, ground)
        roofs.append({'id': ('g' if ground else 'r') + str(k), 'name': nm, 'kind': 'ground' if ground else 'roof', 'sector': sec,
                      'x': r2(-H + (i0 + nx / 2) * CELL), 'z': r2(-zmax + (j0 + nz / 2) * CELL), 'hx': r2(nx * CELL / 2), 'hz': r2(nz * CELL / 2), 'roofY': r2(rg['y']),
                      'spawn': -1, 'grid': {'nx': nx, 'nz': nz, 'ox': r2(-H + i0 * CELL), 'oz': r2(-zmax + j0 * CELL), 'm': base64.b64encode(mask.tobytes()).decode()},
                      'perch': [], 'cover': [], '_i0': i0, '_j0': j0, '_m': mask, '_n': rg['n']})
    Y = np.array([r['roofY'] for r in roofs]); isg = np.array([r['kind'] == 'ground' for r in roofs])
    def cellp(k, j, i): return [r2(F.cx(i)), r2(Y[k]), r2(F.cz(j))]
    def local(k, j, i): r = roofs[k]; return (j - r['_j0']) * r['grid']['nx'] + (i - r['_i0'])
    # edge cells: next to a drop (roofs) or next to a wall (ground): where a sniper would stand
    drop = np.zeros((NZ, NX), bool); wall = np.zeros((NZ, NX), bool)
    for dj, di in ((0, 1), (0, -1), (1, 0), (-1, 0), (0, 2), (0, -2), (2, 0), (-2, 0)):
        nb = np.roll(F.hc, (dj, di), (0, 1)); drop |= (F.hc - nb) > 2.0; wall |= (nb - F.hc) > 2.0
    rng = np.random.default_rng(11)
    for k, r in enumerate(roofs):
        m = ids == k; e = m & (wall if isg[k] else drop); js, is_ = np.where(e)
        if len(js) > 70: sel = rng.choice(len(js), 70, replace=False); js, is_ = js[sel], is_[sel]
        r['perch'] = sorted(int(local(k, j, i)) for j, i in zip(js, is_))
    links = []
    def add(l): l['i'] = len(links); links.append(l); return l
    # ---------------------------------------------------------------- walk + step: regions that touch
    def touching(dj, di):
        a = ids[: NZ - dj, : NX - di]; b = ids[dj:, di:]; m = (a >= 0) & (b >= 0) & (a != b); return jj[: NZ - dj, : NX - di][m], ii[: NZ - dj, : NX - di][m], a[m], b[m]
    pairs = {}
    for dj, di in ((0, 1), (1, 0)):
        js, is_, a, b = touching(dj, di)
        for j, i, ra, rb in zip(js, is_, a, b): pairs.setdefault((int(ra), int(rb), dj), []).append((int(j), int(i)))
    for j in range(NZ):                                                               # across the seam
        ra, rb = ids[j, NX - 1], ids[j, 0]
        if ra >= 0 and rb >= 0 and ra != rb: pairs.setdefault((int(ra), int(rb), 2), []).append((j, NX - 1))
    nwalk = nstep = 0
    for (ra, rb, o), cells in pairs.items():
        dh = Y[rb] - Y[ra]
        if abs(dh) > 1.3: continue
        cells.sort(key=lambda c: c[0] if o != 1 else c[1]); runs = [[cells[0]]]
        for c in cells[1:]:
            p = runs[-1][-1]; (runs[-1].append(c) if abs((c[0] - p[0]) if o != 1 else (c[1] - p[1])) == 1 else runs.append([c]))
        for run in runs:
            if len(run) < 2: continue
            n = max(1, round(len(run) * CELL / 11));
            for q in range(n):
                j, i = run[int((q + 0.5) * len(run) / n)]; j2, i2 = (j, 0) if o == 2 else (j + (o == 1), i + (o == 0))
                lo, hi = (ra, rb) if dh >= 0 else (rb, ra); pl = cellp(ra, j, i); ph = cellp(rb, j2, i2)
                if abs(dh) <= 0.35: add({'kind': 'walk', 'a': ra, 'b': rb, 'oneWay': False, 'p0': pl, 'p1': ph, 'time': 0.12}); nwalk += 1
                else:
                    p0, p1 = (pl, ph) if dh >= 0 else (ph, pl); nx_, nz_ = (p1[0] - p0[0]), (p1[2] - p0[2]); ln = math.hypot(nx_, nz_) or 1
                    add({'kind': 'step', 'a': lo, 'b': hi, 'oneWay': False, 'p0': p0, 'p1': p1, 'time': 0.55, 'wall': [r2((p0[0] + p1[0]) / 2), r2((p0[2] + p1[2]) / 2)], 'n': [r2(nx_ / ln), r2(nz_ / ln)], 'h': r2(abs(dh))}); nstep += 1
    # ---------------------------------------------------------------- ladders: a roof edge with standing room at its foot
    cP, cF = geo['cP'], geo['cF']; cand = {}
    for k in np.where(~isg)[0]:
        m = ids == k; js, is_ = np.where(m)
        for dj, di in ((0, 1), (0, -1), (1, 0), (-1, 0)):
            for j, i in zip(js, is_):
                if 0 <= j + dj < NZ and 0 <= i + di < NX and ids[j + dj, i + di] == k: continue
                for s in (1, 2, 3, 4):                                               # look past the parapet / wall thickness
                    j2, i2 = j + dj * s, i + di * s
                    if not (0 <= j2 < NZ and 0 <= i2 < NX): break
                    a = ids[j2, i2]
                    if a >= 0 and a != k:
                        if Y[k] - Y[a] >= 1.8: cand.setdefault((int(k), int(a), dj, di), []).append((int(j), int(i), int(j2), int(i2)))
                        break
                    if a < 0 and F.hc[j2, i2] < Y[k] - 1.5 and not F.flat[j2, i2]: break    # clutter at the foot: no ladder here
    nlad = 0; used_wall = []
    def try_ladder(k, a, dj, di, c):
        j, i, j2, i2 = c; top = Y[k]; bot = Y[a]; h = top - bot; n = np.array([-di, 0.0, -dj])                 # from the foot toward the wall
        foot = np.array([F.cx(i2), bot, F.cz(j2)]); ds = []
        for hh in (0.6, h * 0.5, h - 0.25):
            t = ray_wall(cP, cF, foot + np.array([0, hh, 0]), n, 3.5)
            if t is None: return None
            ds.append(t)
        if max(ds) - min(ds) > 0.12: return None                                                         # ledges, awnings, a leaning wall
        w = foot + n * ds[0]; side = np.array([n[2], 0, -n[0]])
        for sgn in (-0.45, 0.45):                                                                        # room either side of the rungs
            t = ray_wall(cP, cF, foot + side * sgn + np.array([0, h * 0.5, 0]), n, 3.5)
            if t is None or abs(t - ds[0]) > 0.12: return None
        p0 = w - n * 1.25; p1 = None
        if ids[int((p0[2] + zmax) / CELL), int((p0[0] + H) / CELL) % NX] != a: return None
        for inset in (0.85, 1.3, 1.8):                                                                   # past the parapet, onto the roof proper
            q = w + n * inset
            if ids[int((q[2] + zmax) / CELL), int((q[0] + H) / CELL) % NX] == k: p1 = q; break
        if p1 is None: return None
        for uw in used_wall:
            if math.hypot(uw[0] - w[0], uw[1] - w[2]) < 5: return None
        used_wall.append((w[0], w[2]))
        return {'kind': 'ladder', 'a': int(a), 'b': int(k), 'oneWay': False, 'p0': [r2(p0[0]), r2(bot), r2(p0[2])], 'p1': [r2(p1[0]), r2(top), r2(p1[2])], 'time': r2(max(1.0, h / 2.66)),
                'wall': [r2(w[0]), r2(w[2])], 'n': [r2(n[0]), r2(n[2])], 'h': r2(h), 'base': [r2(w[0] - n[0] * 0.12), r2(bot), r2(w[2] - n[2] * 0.12)]}
    byroof = {}
    for key, cs in cand.items(): byroof.setdefault(key[0], []).append((key, cs))
    for k, lst in byroof.items():
        want = 2 if roofs[k]['_n'] >= 500 else 1; got = []
        lst.sort(key=lambda e: (not isg[e[0][1]], -len(e[1])))                                           # to the ground first, longest wall first
        for key, cs in lst:
            _, a, dj, di = key
            if len(got) >= want and isg[a]: continue
            if any(g[0] == (dj, di) for g in got) and isg[a]: continue
            if not isg[a] and any(g[1] == a for g in got): continue
            cs = sorted(cs, key=lambda c: c[0] if di else c[1]); mid = len(cs) // 2; order = sorted(range(len(cs)), key=lambda q: abs(q - mid))
            for q in order[:14]:
                l = try_ladder(k, a, dj, di, cs[q])
                if l: add(l); got.append(((dj, di), a)); nlad += 1; break
    # ---------------------------------------------------------------- ziplines between roofs
    roofk = [k for k in range(nreg) if not isg[k]]; edge = {}
    for k in roofk:
        m = (ids == k) & drop; js, is_ = np.where(m); edge[k] = np.c_[F.cx(is_), F.cz(js)] if len(js) else np.zeros((0, 2))
    def clear_line(p0, p1, lift, skip=1.4):
        d = math.hypot(p1[0] - p0[0], p1[2] - p0[2]); n = max(8, int(d / 0.4)); t = np.linspace(0, 1, n); x = p0[0] + (p1[0] - p0[0]) * t; z = p0[2] + (p1[2] - p0[2]) * t; y = p0[1] + (p1[1] - p0[1]) * t + lift
        s = (t * d > skip) & ((1 - t) * d > skip); return bool((F.top_max(x[s], z[s]) < y[s] - 0.35).all())
    zc = []
    for a_i, ka in enumerate(roofk):
        ra = roofs[ka]
        for kb in roofk[a_i + 1:]:
            rb = roofs[kb]; gx = abs(ra['x'] - rb['x']) - ra['hx'] - rb['hx']; gz = abs(ra['z'] - rb['z']) - ra['hz'] - rb['hz']
            if max(gx, gz) > 40 or max(gx, gz) < 1.5: continue
            A, B = edge[ka], edge[kb]
            if not len(A) or not len(B): continue
            ca = A[np.argsort(np.hypot(A[:, 0] - rb['x'], A[:, 1] - rb['z']))[:6]]; cb = B[np.argsort(np.hypot(B[:, 0] - ra['x'], B[:, 1] - ra['z']))[:6]]
            best = None
            for pa in ca:
                for pb in cb:
                    d = math.hypot(pa[0] - pb[0], pa[1] - pb[1])
                    if d < 9 or d > 42 or abs(Y[ka] - Y[kb]) > 0.4 * d: continue
                    p0 = [pa[0], Y[ka], pa[1]]; p1 = [pb[0], Y[kb], pb[1]]
                    if (best is None or d < best[0]) and clear_line(p0, p1, 0.95): best = (d, p0, p1)
            if best: zc.append((best[0], ka, kb, best[1], best[2]))
    zc.sort(key=lambda e: e[0]); parent = list(range(nreg))
    def find(x):
        while parent[x] != x: parent[x] = parent[parent[x]]; x = parent[x]
        return x
    for l in links:
        if l['kind'] in ('ladder', 'step') and not isg[l['a']] and not isg[l['b']]: parent[find(l['a'])] = find(l['b'])
    deg = {}; nzip = 0; zsel = []
    def add_zip(d, ka, kb, p0, p1):
        nonlocal nzip
        ln = math.dist(p0, p1); ux, uz = (p1[0] - p0[0]) / d, (p1[2] - p0[2]) / d
        add({'kind': 'zip', 'a': int(ka), 'b': int(kb), 'oneWay': False, 'p0': [r2(v) for v in p0], 'p1': [r2(v) for v in p1], 'time': r2(ln / 13), 'lift': 0.95, 'len': r2(ln),
             'c0': [r2(p0[0] - ux * 0.35), r2(p0[1] + 3.05), r2(p0[2] - uz * 0.35)], 'c1': [r2(p1[0] + ux * 0.35), r2(p1[1] + 3.05), r2(p1[2] + uz * 0.35)]})
        deg[ka] = deg.get(ka, 0) + 1; deg[kb] = deg.get(kb, 0) + 1; nzip += 1; zsel.append((p0, p1))
    def crosses(p0, p1):
        for q0, q1 in zsel:
            def ccw(a, b, c): return (c[2] - a[2]) * (b[0] - a[0]) > (b[2] - a[2]) * (c[0] - a[0])
            if ccw(p0, q0, q1) != ccw(p1, q0, q1) and ccw(p0, p1, q0) != ccw(p0, p1, q1): return True
        return False
    main = {k for k in roofk if roofs[k]['_n'] >= 120}
    for k in sorted(main, key=lambda k_: -roofs[k_]['_n']):                           # every proper roof gets one cable to a neighbour, if it can
        if deg.get(k, 0): continue
        for d, ka, kb, p0, p1 in zc:
            if k not in (ka, kb) or ka not in main or kb not in main or deg.get(ka, 0) >= 2 or deg.get(kb, 0) >= 2 or crosses(p0, p1): continue
            add_zip(d, ka, kb, p0, p1); break
    for d, ka, kb, p0, p1 in zc:                                                    # then some longer ones across the wide streets
        if nzip >= 72: break
        if d < 20 or ka not in main or kb not in main or deg.get(ka, 0) >= 2 or deg.get(kb, 0) >= 2 or crosses(p0, p1): continue
        add_zip(d, ka, kb, p0, p1)
    # ---------------------------------------------------------------- hub lines: straight through the middle of the wheel
    def roll(p): a = p[0] / R; r = R - p[1]; return np.array([r * math.sin(a), R - r * math.cos(a), p[2]])
    def hub_clear(p0, p1):
        a = roll([p0[0], p0[1] + 0.95, p0[2]]); b = roll([p1[0], p1[1] + 0.95, p1[2]]); t = np.linspace(0, 1, 240)[:, None]; g = a + (b - a) * t; ln = float(np.linalg.norm(b - a))
        x = R * np.arctan2(g[:, 0], R - g[:, 1]); y = R - np.hypot(g[:, 0], R - g[:, 1]); s = (t[:, 0] * ln > 2.0) & ((1 - t[:, 0]) * ln > 2.0)
        return bool((F.top_max(x[s], g[s][:, 2], 0.5) < y[s] - 1.0).all()), ln, float(R - np.hypot(g[:, 0], R - g[:, 1]).max())
    tall = [k for k in roofk if Y[k] >= 8.5 and roofs[k]['_n'] >= 60 and len(edge[k])]
    hc_ = []
    for a_i, ka in enumerate(tall):
        for kb in tall[a_i + 1:]:
            dx = (roofs[kb]['x'] - roofs[ka]['x'] + H) % C - H
            if not (150 <= abs(dx) <= 232) or abs(roofs[ka]['z'] - roofs[kb]['z']) > 45: continue
            A, B = edge[ka], edge[kb]; sgn = 1 if dx > 0 else -1
            pa = A[np.argmax(A[:, 0] * sgn)]; pb = B[np.argmin(B[:, 0] * sgn)]                      # the edges that face each other round the ring
            p0 = [float(pa[0]), float(Y[ka]), float(pa[1])]; p1 = [float(pb[0]), float(Y[kb]), float(pb[1])]
            ok, ln, rmin = hub_clear(p0, p1)
            if ok: hc_.append((Y[ka] + Y[kb] + rng.random(), ka, kb, p0, p1, ln, (p0[0] + dx / 2 + H) % C - H))
    hc_.sort(key=lambda e: -e[0]); hubs = []; hub_roofs = set()
    def far(p, q, d): return math.hypot((p[0] - q[0] + H) % C - H, p[2] - q[2]) > d
    for want_mid in (0.0, H, -H / 2, H / 2, None, None, None, None):                                   # two over each park, one inside each half, then whatever is best
        for sc, ka, kb, p0, p1, ln, mid in hc_:
            if ka in hub_roofs or kb in hub_roofs: continue
            if want_mid is not None and abs((mid - want_mid + H) % C - H) > 45: continue
            if not all(far(p0, h[0], 34) and far(p0, h[1], 34) and far(p1, h[0], 34) and far(p1, h[1], 34) for h in hubs): continue
            hubs.append((p0, p1)); hub_roofs.update((ka, kb))
            v = roll([p1[0], p1[1] + 4, p1[2]]) - roll([p0[0], p0[1] + 4, p0[2]])
            add({'kind': 'zip', 'hub': True, 'a': int(ka), 'b': int(kb), 'oneWay': False, 'p0': [r2(v_) for v_ in p0], 'p1': [r2(v_) for v_ in p1], 'time': r2(ln / 21), 'lift': 0.95, 'len': r2(ln),
                 'c0': [r2(p0[0]), r2(p0[1] + 3.05), r2(p0[2])], 'c1': [r2(p1[0]), r2(p1[1] + 3.05), r2(p1[2])]}); break
    # ---------------------------------------------------------------- launch pads: street to roof
    npad = 0; pad_at = []
    for seg in range(16):
        x0 = -H + seg * C / 16; best = None
        for k in roofk:
            r = roofs[k]
            if not (x0 <= r['x'] < x0 + C / 16) or not (6.5 <= Y[k] <= 13.5) or r['_n'] < 80 or any(l['kind'] == 'pad' and l['b'] == k for l in links): continue
            m = ids == k; js, is_ = np.where(m)
            for _ in range(40):
                q = rng.integers(len(js)); j, i = js[q], is_[q]
                if drop[j, i]: continue                                              # land well inside
                ang = rng.random() * 2 * math.pi; dd = 9 + rng.random() * 7; gx, gz = F.cx(i) + math.cos(ang) * dd, F.cz(j) + math.sin(ang) * dd
                gj, gi = int((gz + zmax) / CELL), int((gx + H) / CELL)
                if not (2 <= gj < NZ - 2 and 2 <= gi < NX - 2): continue
                ga = ids[gj, gi]
                if ga < 0 or not isg[ga] or wall[gj, gi] or not (ids[gj - 2:gj + 3, gi - 2:gi + 3] == ga).all(): continue
                p0 = np.array([F.cx(gi), Y[ga], F.cz(gj)]); p1 = np.array([F.cx(i), Y[k], F.cz(j)]); apex = Y[k] + 2.6
                T = math.sqrt(2 * (apex - p0[1]) / G) + math.sqrt(2 * (apex - p1[1]) / G); v = np.array([(p1[0] - p0[0]) / T, (p1[1] - p0[1] + 0.5 * G * T * T) / T, (p1[2] - p0[2]) / T])
                t = np.linspace(0.12, T - 0.05, 60); px = p0[0] + v[0] * t; py = p0[1] + v[1] * t - 0.5 * G * t * t; pz = p0[2] + v[2] * t
                if not (F.top_max(px, pz, 0.45) < py - 0.25).all(): continue
                if any(math.hypot(p0[0] - q_[0], p0[2] - q_[1]) < 20 for q_ in pad_at): continue
                sc = Y[k] + rng.random() * 2
                if best is None or sc > best[0]: best = (sc, ga, k, p0, p1, T, v, apex)
        if best:
            _, ga, k, p0, p1, T, v, apex = best; pad_at.append((p0[0], p0[2])); npad += 1
            add({'kind': 'pad', 'a': int(ga), 'b': int(k), 'oneWay': True, 'p0': [r2(c) for c in p0], 'p1': [r2(c) for c in p1], 'time': r2(T), 'v': [r2(c) for c in v], 'apex': r2(apex)})
    # ---------------------------------------------------------------- drop what cannot be reached on foot or by link (a bot put there would be stuck)
    g = sp.coo_matrix((np.ones(len(links)), ([l['a'] for l in links], [l['b'] for l in links])), shape=(nreg, nreg)); _, comp = cg.connected_components(g, directed=False)
    biggest = np.bincount(comp[isg]).argmax(); alive = comp == biggest
    # ---------------------------------------------------------------- spawns: sixteen roofs spread round the ring, alternating sides of the strip
    nsp = 0; taken = set()
    for seg in range(16):
        xc = -H + (seg + 0.5) * C / 16; zt = 28 if seg % 2 else -28; best = None
        for k in range(nreg):
            r = roofs[k]; dxw = abs((r['x'] - xc + H) % C - H)
            if dxw > C / 32 + 8 or k in taken or r['_n'] < 100 or not alive[k]: continue
            sc = dxw * 0.5 + abs(r['z'] - zt) * 0.6 + (40 if isg[k] else 0) + (25 if k in hub_roofs else 0) - min(Y[k], 12)
            if best is None or sc < best[0]: best = (sc, k)
        if best is None: continue
        k = best[1]; taken.add(k); m = (ids == k) & ~drop & ~wall; js, is_ = np.where(m if m.any() else ids == k)
        ends = [(l['p0'], l['p1']) for l in links if l['a'] == k or l['b'] == k]
        q = max(range(len(js)), key=lambda q_: min([99] + [min(math.hypot(F.cx(is_[q_]) - e[0], F.cz(js[q_]) - e[2]) for e in pr) for pr in ends]) - 0.05 * math.hypot(F.cx(is_[q_]) - roofs[k]['x'], F.cz(js[q_]) - roofs[k]['z']))
        roofs[k]['spawn'] = nsp; roofs[k]['spawnPt'] = cellp(k, js[q], is_[q]); nsp += 1
    # ---------------------------------------------------------------- the halo, the rails, the light map
    # zone: a circle of radius r stretched along the ring by k * (r - r1) each way; the full ring at r0, a plain circle from r1 down
    centers = []
    for xw in (-H / 2, H / 2, 0.0, -H + 6):
        best = None
        for k in np.where(isg & alive)[0]:
            r = roofs[k]; d = math.hypot((r['x'] - xw + H) % C - H, r['z'])
            if r['_n'] > 1500 and (best is None or d < best[0]): best = (d, r)
        centers.append([best[1]['x'], best[1]['z']])
    # r0 is generous so the stretched circle's round ends clear the far corners of the strip: at the start nothing is outside
    r0, r1 = 120.0, 17.0; kz = round((H - 84.0) / (84.0 - r1) + 0.01, 3)
    zone = {'center': centers[0], 'centers': centers, 'r0': r0, 'ring': {'k': kz, 'r1': r1},
            'phases': [{'t': 0, 'r': 120, 'dps': 0}, {'t': 60, 'r': 67, 'shrink': 26, 'dps': 6}, {'t': 120, 'r': 50, 'shrink': 26, 'dps': 9}, {'t': 180, 'r': 29.5, 'shrink': 26, 'dps': 13}, {'t': 240, 'r': 17, 'shrink': 16, 'dps': 18}, {'t': 270, 'r': 8.5, 'shrink': 16, 'dps': 25}], 'duration': 300}
    n = 160; s = C / n; fence = []
    for q in range(n):
        for zz in (-zmax + 0.05, zmax - 0.05): fence.append(['b', r2(-H + (q + 0.5) * s), 6.0, r2(zz), r2(s / 2 + 0.02), 6.6, 0.06, 0, [255, 40, 0, 0], 0])
    lamps = []
    P = geo['P']; Fc = geo['F']; MI = geo['MI']; NN = geo['NN']; mn = [m['name'] for m in geo['mats']]
    for nn in np.unique(NN[np.isin(MI, [mn.index('WhiteGlow'), mn.index('WhiteGlow1')])]):
        v = P[np.unique(Fc[(NN == nn) & np.isin(MI, [mn.index('WhiteGlow'), mn.index('WhiteGlow1')])])]; c = v.mean(0)
        if c[1] > 3.5: lamps.append((float(c[0]), float(c[1]), float(c[2])))
    leaf = P[np.unique(Fc[MI == mn.index('Temp1PineTreeLeaves')])]; can = np.zeros((F.Hn, F.W), np.float32)
    np.add.at(can, (np.clip(((leaf[:, 2] + zmax) / HM).astype(int), 0, F.Hn - 1), ((leaf[:, 0] + H) / HM).astype(int) % F.W), 0.08)
    sh = shade_map(F.hm[:, : int(round(C / HM))], lamps, can[:, : int(round(C / HM))], C, zmax)
    Image.fromarray((sh * 255).astype('u1'), 'L').save(os.path.join(dist, 'loop_shade.jpg'), quality=82)
    remap = -np.ones(nreg, dtype=int); remap[alive] = np.arange(int(alive.sum())); dropped = int((~alive).sum())
    roofs = [r for k, r in enumerate(roofs) if alive[k]]; links = [l for l in links if alive[l['a']] and alive[l['b']]]
    for l in links: l['a'] = int(remap[l['a']]); l['b'] = int(remap[l['b']]); l.pop('i')
    for r in roofs:
        for kk in ('_i0', '_j0', '_m', '_n'): r.pop(kk)
    isg = np.array([r['kind'] == 'ground' for r in roofs]); nreg = len(roofs)
    sp_x = sorted((r['spawn'], r['x']) for r in roofs if r['spawn'] >= 0)
    team = {'A': [s_ for s_, x in sp_x if x < 0], 'B': [s_ for s_, x in sp_x if x >= 0]}
    arena = {'version': 2, 'map': 'loop', 'cell': CELL, 'parapet': 0, 'gravity': G, 'R': round(R, 5), 'C': round(C, 5), 'zmax': zmax, 'slabs': 160,
             'zone': zone, 'roofs': roofs, 'links': links, 'shapes': [], 'deco': [], 'fence': fence, 'skyline': [], 'teamSpawns': team, 'lamps': [[r2(a), r2(b), r2(c)] for a, b, c in lamps],
             'credit': 'Space Loop City by Neberkenezer (CC-BY-4.0)'}
    json.dump(arena, open(os.path.join(dist, 'arena-loop.json'), 'w'), separators=(',', ':'))
    kinds = {}
    for l in links: kk = 'hub' if l.get('hub') else l['kind']; kinds[kk] = kinds.get(kk, 0) + 1
    print('dropped %d unreachable |' % dropped, 'regions %d (ground %d, roofs %d) | links %s | spawns %d | lamps %d | arena %.0f KB' % (nreg, int(isg.sum()), int((~isg).sum()), kinds, nsp, len(lamps), os.path.getsize(os.path.join(dist, 'arena-loop.json')) / 1e3))
    return {'F': F, 'ids': ids, 'roofs': roofs, 'links': links, 'arena': arena}

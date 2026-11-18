#!/usr/bin/env python3
"""Builds the LOOP CITY map from the artist's ring-world model.

    python3 -I pack_loop.py <space_loop_city.glb> <client/dist>

Source model: "Space Loop City" by Neberkenezer (CC-BY-4.0),
https://sketchfab.com/3d-models/space-loop-city-76882b787e6c4e0e9dd52db4f90c2622

The model is a flat city bent into a ring. The game simulates on the UNROLLED city (the "chart":
x = arc length along the ring, y = height above the floor toward the hub, z = across the strip) and
bends it back when drawing; shots and sight lines are traced through the real ring (see client/src/ring.js).

Writes into <dist>:
  loop.txt          geometry pack (base64): chart-space vertices per material group
  loop_t<N>.jpg     greyscale textures, loop_leaf.png (leaves, with alpha), loop_shade.jpg (baked top-down light)
  arena-loop.json   walkable regions, nav grids, links (ladders, ziplines, hub lines, pads), spawns, zone
"""
import sys, os, io, json, struct, base64, math
import numpy as np
from PIL import Image, ImageFilter

SLABS = 160            # the ring is cut into this many flat facets when drawn / traced (4 m each)
CELL = 0.5             # nav grid cell
HM = 0.25              # height map resolution
G = 22.0               # gravity used by the game

GLOW_RED = {'RedGLOW', 'Paramount1GLOW', 'Pawnshop1GLOW'}
NO_COLLIDE = {'Temp1PineTreeLeaves'}

# ----------------------------------------------------------------------------------------------- GLB
def load_glb(path):
    b = open(path, 'rb').read(); cl = struct.unpack('<I', b[12:16])[0]; j = json.loads(b[20:20 + cl]); bin0 = b[20 + cl + 8:]
    def acc(i):
        a = j['accessors'][i]; bv = j['bufferViews'][a['bufferView']]; n = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4}[a['type']]
        dt = {5121: 'u1', 5123: '<u2', 5125: '<u4', 5126: '<f4'}[a['componentType']]
        off = bv.get('byteOffset', 0) + a.get('byteOffset', 0); st = bv.get('byteStride', 0); isz = np.dtype(dt).itemsize * n
        if st and st != isz:
            raw = np.frombuffer(bin0, dtype='u1', count=st * (a['count'] - 1) + isz, offset=off)
            return raw[np.arange(a['count'])[:, None] * st + np.arange(isz)[None, :]].copy().view(dt).reshape(a['count'], n)
        return np.frombuffer(bin0, dtype=dt, count=a['count'] * n, offset=off).reshape(a['count'], n)
    def mat(n):
        if 'matrix' in n: return np.array(n['matrix'], dtype=float).reshape(4, 4).T
        M = np.eye(4)
        if 'scale' in n: M = np.diag(list(n['scale']) + [1]) @ M
        if 'rotation' in n:
            x, y, z, w = n['rotation']
            M = np.array([[1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w), 0], [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w), 0], [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y), 0], [0, 0, 0, 1]]) @ M
        if 'translation' in n: T = np.eye(4); T[:3, 3] = n['translation']; M = T @ M
        return M
    V = []; U = []; F = []; MI = []; NN = []; off = [0]; names = []
    def walk(i, M0):
        n = j['nodes'][i]; M = M0 @ mat(n)
        if 'mesh' in n:
            for pr in j['meshes'][n['mesh']]['primitives']:
                v = acc(pr['attributes']['POSITION']).astype(float); v = (np.c_[v, np.ones(len(v))] @ M.T)[:, :3]
                uv = acc(pr['attributes']['TEXCOORD_0']).astype(float) if 'TEXCOORD_0' in pr['attributes'] else np.zeros((len(v), 2))
                f = acc(pr['indices']).reshape(-1, 3).astype(np.int64)
                if np.linalg.det(M[:3, :3]) < 0: f = f[:, ::-1]
                V.append(v); U.append(uv); F.append(f + off[0]); MI.append(np.full(len(f), pr['material'])); NN.append(np.full(len(f), len(names))); names.append(n.get('name') or ''); off[0] += len(v)
        for c in n.get('children', []): walk(c, M)
    for r0 in j['scenes'][0]['nodes']: walk(r0, np.eye(4))
    imgs = []
    for im in j['images']:
        bv = j['bufferViews'][im['bufferView']]; o = bv.get('byteOffset', 0); imgs.append(Image.open(io.BytesIO(bin0[o:o + bv['byteLength']])))
    mats = []
    for m in j['materials']:
        pb = m.get('pbrMetallicRoughness', {}); t = pb.get('baseColorTexture', {}).get('index')
        mats.append({'name': m['name'], 'img': None if t is None else j['textures'][t]['source'], 'emis': m.get('emissiveFactor'), 'col': pb.get('baseColorFactor'), 'double': bool(m.get('doubleSided'))})
    return np.vstack(V) * 0.01, np.vstack(U), np.vstack(F), np.concatenate(MI), np.concatenate(NN), names, mats, imgs

# ----------------------------------------------------------------------------------------------- unroll
def unroll(V, F, MI, mats):
    road = np.unique(F[MI == [m['name'] for m in mats].index('RoadsGround')])
    P = V[road][:, :2]; A = np.c_[2 * P, np.ones(len(P))]; sol = np.linalg.lstsq(A, (P ** 2).sum(1), rcond=None)[0]; cx, cy = sol[0], sol[1]
    R = float(np.percentile(np.hypot(P[:, 0] - cx, P[:, 1] - cy), 99.5))
    X = V[:, 0] - cx; Y = V[:, 1] - cy; r = np.hypot(X, Y); th = np.arctan2(X, -Y)
    return np.c_[th * R, R - r, V[:, 2]], R

def clip_poly(poly, v, keep_ge):
    out = []; n = len(poly)
    for i in range(n):
        a = poly[i]; b = poly[(i + 1) % n]; da = a[0] - v; db = b[0] - v
        ina = (da >= -1e-9) if keep_ge else (da <= 1e-9); inb = (db >= -1e-9) if keep_ge else (db <= 1e-9)
        if ina: out.append(a)
        if ina != inb and abs(da - db) > 1e-12:
            t = da / (da - db); p = a + (b - a) * t; p[0] = v; out.append(p)
    return out

def fix_seam(P, U, N, F, MI, C):
    """Triangles that straddle the seam (x = +-C/2) come out of atan2 as slivers across the whole chart: cut them there."""
    H = C / 2; x = P[F][:, :, 0]; bad = (x.max(1) - x.min(1)) > H
    if not bad.any(): return P, U, N, F, MI
    keepF = F[~bad]; keepM = MI[~bad]; nP = [P]; nU = [U]; nN = [N]; nF = []; nM = []; base = len(P)
    for t in np.where(bad)[0]:
        tri = np.c_[P[F[t]], U[F[t]], N[F[t]]].copy(); tri[tri[:, 0] < 0, 0] += C       # all on the + side, beyond H
        for part, sh in ((clip_poly(list(tri), H, False), 0.0), (clip_poly(list(tri), H, True), -C)):
            for i in range(1, len(part) - 1):
                q = np.stack([part[0], part[i], part[i + 1]]).copy(); q[:, 0] += sh
                q[:, 0] = np.clip(q[:, 0], -H, H)
                nP.append(q[:, :3]); nU.append(q[:, 3:5]); nN.append(q[:, 5:8]); nF.append([base, base + 1, base + 2]); nM.append(MI[t]); base += 3
    return np.vstack(nP), np.vstack(nU), np.vstack(nN), np.vstack([keepF, np.array(nF, dtype=np.int64).reshape(-1, 3)]), np.concatenate([keepM, np.array(nM, dtype=MI.dtype)])

def vertex_normals(P, F):
    n = np.cross(P[F[:, 1]] - P[F[:, 0]], P[F[:, 2]] - P[F[:, 0]]); N = np.zeros_like(P)
    for k in range(3): np.add.at(N, F[:, k], n)
    l = np.linalg.norm(N, axis=1); l[l < 1e-12] = 1; return N / l[:, None]

# ----------------------------------------------------------------------------------------------- rasters
def height_map(P, F, C, zmax):
    """Top-surface height at HM resolution, by dense sampling of every triangle. x wraps, z is clamped."""
    W = int(round(C / HM)); Hn = int(round(2 * zmax / HM)); tri = P[F]
    area = np.linalg.norm(np.cross(tri[:, 1] - tri[:, 0], tri[:, 2] - tri[:, 0]), axis=1) / 2
    ns = np.clip(np.ceil(area / 0.008).astype(int), 3, 9000); idx = np.repeat(np.arange(len(F)), ns)
    rng = np.random.default_rng(7); u = rng.random((len(idx), 2)); s = u.sum(1) > 1; u[s] = 1 - u[s]
    Q = tri[idx, 0] + (tri[idx, 1] - tri[idx, 0]) * u[:, :1] + (tri[idx, 2] - tri[idx, 0]) * u[:, 1:]
    Q = np.vstack([Q, P])   # and the vertices themselves
    xi = np.floor((Q[:, 0] + C / 2) / HM).astype(int) % W; zi = np.clip(np.floor((Q[:, 2] + zmax) / HM).astype(int), 0, Hn - 1)
    hm = np.full((Hn, W), -50.0, dtype=np.float32); o = np.argsort(Q[:, 1]); hm[zi[o], xi[o]] = Q[o, 1]
    return hm

def fill_holes(hm, rounds=3):
    """Unsampled texels inside the strip take the lowest neighbour (they are cracks in the ground, not pits)."""
    hm = hm.copy()
    for _ in range(rounds):
        bad = hm < -40
        if not bad.any(): break
        nb = np.stack([np.roll(hm, 1, 1), np.roll(hm, -1, 1), np.pad(hm, ((1, 0), (0, 0)), constant_values=-50)[:-1], np.pad(hm, ((0, 1), (0, 0)), constant_values=-50)[1:]])
        nb = np.where(nb < -40, 1e9, nb); m = nb.min(0); hm[bad & (m < 1e8)] = m[bad & (m < 1e8)]
    return hm

def shade_map(hm, lamps, canopy, C, zmax):
    """A top-down light map of the top surfaces: sky occlusion from the height field, darker under the trees,
    a pool of light under each street lamp. Stored as value / 1.6."""
    h = np.where(hm < -40, 0.0, hm).astype(np.float32); Hn, W = h.shape; occ = np.zeros_like(h); nd = 0
    for a in np.linspace(0, 2 * np.pi, 12, endpoint=False):
        dx, dz = np.cos(a), np.sin(a); mx = np.zeros_like(h)
        for d in (0.5, 1.0, 1.75, 2.75, 4.0, 6.0, 9.0):
            sx = int(round(dx * d / HM)); sz = int(round(dz * d / HM))
            nb = np.roll(h, -sx, 1)
            if sz > 0: nb = np.vstack([nb[sz:], np.repeat(nb[-1:], sz, 0)])
            elif sz < 0: nb = np.vstack([np.repeat(nb[:1], -sz, 0), nb[:sz]])
            mx = np.maximum(mx, (nb - h) / np.hypot(d, np.maximum(nb - h, 0)))     # sin of the horizon elevation
        occ += np.clip(mx, 0, 1); nd += 1
    ao = 1 - occ / nd; ao = np.clip(0.28 + 0.72 * ao ** 1.5, 0, 1)
    img = Image.fromarray((ao * 255).astype('u1')).filter(ImageFilter.GaussianBlur(1.2)); ao = np.asarray(img).astype(np.float32) / 255
    cimg = Image.fromarray((np.clip(canopy, 0, 1) * 255).astype('u1')).filter(ImageFilter.GaussianBlur(5)); ao *= 1 - 0.45 * np.asarray(cimg).astype(np.float32) / 255
    zz, xx = np.mgrid[0:Hn, 0:W]; light = np.zeros_like(h)
    for (lx, ly, lz) in lamps:
        cx = (lx + C / 2) / HM; cz = (lz + zmax) / HM; ddx = (xx - cx + W / 2) % W - W / 2; d2 = (ddx * HM) ** 2 + ((zz - cz) * HM) ** 2
        near = d2 < 14 ** 2; light[near] += (1.15 / (1 + d2[near] / 9.0) ** 1.4 * (h[near] < ly - 1.5))
    out = ao * (1 + np.clip(light, 0, 1.6))
    return np.clip(out / 1.6, 0, 1)

# ----------------------------------------------------------------------------------------------- pack
def write_pack(path, R, C, groups):
    blobs = []; off = 0; head = []
    def put(a):
        nonlocal off
        raw = a.tobytes(); pad = (-len(raw)) % 4; blobs.append(raw + b'\0' * pad); o = off; off += len(raw) + pad; return o
    for g in groups:
        P = g['P']; nv = len(P); q = np.zeros((nv, 4), dtype='<i2'); q[:, :3] = np.round(P * 100).clip(-32767, 32767)
        q[:, 3] = oct_encode(g['N'])                       # the normal rides in the fourth short (octahedral, 2 x int8)
        uv = np.round(g['U'] * 4096).clip(-32767, 32767).astype('<i2'); i32 = nv > 65535
        idx = g['F'].astype('<u4' if i32 else '<u2').reshape(-1)
        h = {k: g[k] for k in ('name', 'tex', 'glow', 'red', 'alpha', 'collide', 'double', 'lum')}
        h.update(nv=nv, nt=len(g['F']), pos=put(q), uv=put(uv), idx=put(idx), i32=bool(i32)); head.append(h)
    js = json.dumps({'v': 1, 'R': R, 'C': C, 'slabs': SLABS, 'posScale': 0.01, 'uvScale': 1 / 4096, 'groups': head}, separators=(',', ':')).encode()
    js += b' ' * ((-len(js)) % 4)
    raw = b'SCLP' + struct.pack('<I', len(js)) + js + b''.join(blobs)
    open(path, 'w').write(base64.b64encode(raw).decode('ascii'))
    return len(raw)

def oct_encode(N):
    n = N / np.maximum(np.abs(N).sum(1, keepdims=True), 1e-9); x, y = n[:, 0].copy(), n[:, 1].copy(); neg = n[:, 2] < 0
    ox = np.where(neg, (1 - np.abs(y)) * np.where(x >= 0, 1, -1), x); oy = np.where(neg, (1 - np.abs(x)) * np.where(y >= 0, 1, -1), y)
    a = np.round(ox * 127).clip(-127, 127).astype(np.int16); b = np.round(oy * 127).clip(-127, 127).astype(np.int16)
    return ((a & 255) | ((b & 255) << 8)).astype('<u2').view('<i2')

def thin_leaves(P, N, U, F, keep, rng):
    """Keep a share of the leaf cards (whole cards, in random order so the game can draw a prefix on weak devices), a little larger."""
    import scipy.sparse as sp, scipy.sparse.csgraph as cg
    n = len(P); g = sp.coo_matrix((np.ones(len(F) * 2), (np.r_[F[:, 0], F[:, 1]], np.r_[F[:, 1], F[:, 2]])), shape=(n, n)); nc, lab = cg.connected_components(g, directed=False)
    tl = lab[F[:, 0]]; order = rng.permutation(nc); kept = order[: int(nc * keep)]; rank = np.full(nc, -1); rank[kept] = np.arange(len(kept))
    m = rank[tl] >= 0; F2 = F[m]; F2 = F2[np.argsort(rank[tl[m]], kind='stable')]
    cen = np.zeros((nc, 3)); cnt = np.bincount(lab, minlength=nc); 
    for k in range(3): cen[:, k] = np.bincount(lab, weights=P[:, k], minlength=nc) / np.maximum(cnt, 1)
    P2 = cen[lab] + (P - cen[lab]) * 1.18
    vi, inv = np.unique(F2, return_inverse=True); return P2[vi], N[vi], U[vi], inv.reshape(-1, 3)

def lum_img(im):
    a = np.asarray(im.convert('RGB')).astype(np.float32) / 255; l = 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]
    return l

def build_geometry(glb, dist):
    V, U, F, MI, NN, names, mats, imgs = load_glb(glb)
    P, R = unroll(V, F, MI, mats); C = 2 * math.pi * R
    N = vertex_normals(P, F)
    P, U, N, F2, MI2 = fix_seam(P, U, N, F, MI, C)
    seam_cut = len(F2) - len(F); NN = np.concatenate([NN[: len(F) - 0], np.zeros(max(0, len(F2) - len(F)), dtype=NN.dtype)])[: len(F2)] if len(F2) >= len(F) else NN[: len(F2)]
    F, MI = F2, MI2
    zmax = float(np.ceil(np.abs(P[:, 2]).max() * 2) / 2)
    rng = np.random.default_rng(3); groups = []
    for i, m in enumerate(mats):
        f = F[MI == i]
        if not len(f): continue
        vi, inv = np.unique(f, return_inverse=True); f2 = inv.reshape(-1, 3)
        leaf = m['name'] == 'Temp1PineTreeLeaves'; gP, gN, gU = P[vi], N[vi], U[vi]
        if leaf: gP, gN, gU, f2 = thin_leaves(gP, gN, gU, f2, 0.6, rng)
        glow = m['name'].endswith('GLOW') or 'Glow' in m['name']
        lum = 1.0
        if m['img'] is None:
            c = m['emis'] or (m['col'] or [1, 1, 1])[:3]; lum = float(0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2])
        groups.append({'name': m['name'], 'tex': None if m['img'] is None else ('loop_leaf.png' if leaf else 'loop_t%d.jpg' % m['img']),
                       'glow': (max(m['emis']) if m['emis'] else 1.0) if glow else 0.0, 'red': m['name'] in GLOW_RED, 'alpha': leaf,
                       'collide': m['name'] not in NO_COLLIDE and not glow, 'double': bool(m['double'] or leaf), 'lum': round(lum, 3),
                       'P': gP, 'N': gN, 'U': gU, 'F': f2})
    size = write_pack(os.path.join(dist, 'loop.txt'), R, C, groups)
    # textures: the game is black, white and red, so only the brightness of the artist's colours is kept
    tex_bytes = 0
    for k, im in enumerate(imgs):
        if im.mode == 'RGBA':
            l = lum_img(im); a = np.asarray(im)[..., 3]; out = Image.fromarray(np.dstack([(l * 255).astype('u1'), a]), 'LA')
            if max(out.size) > 512: out = out.resize((512, 512), Image.LANCZOS)
            p = os.path.join(dist, 'loop_leaf.png'); out.save(p, optimize=True)
        else:
            l = lum_img(im); out = Image.fromarray((np.clip(l, 0, 1) * 255).astype('u1'), 'L')
            p = os.path.join(dist, 'loop_t%d.jpg' % k); out.save(p, quality=74, optimize=True)
        tex_bytes += os.path.getsize(p)
    col = [g for g in groups if g['collide']]
    cP = np.vstack([g['P'] for g in col]); o = 0; cF = []
    for g in col: cF.append(g['F'] + o); o += len(g['P'])
    cF = np.vstack(cF)
    print('ring R %.4f  C %.3f  strip half-width %.1f | groups %d tris %d verts %d | pack %.2f MB, textures %.2f MB | seam cuts %d' % (R, C, zmax, len(groups), sum(len(g['F']) for g in groups), sum(len(g['P']) for g in groups), size / 1e6, tex_bytes / 1e6, seam_cut))
    return {'R': R, 'C': C, 'zmax': zmax, 'groups': groups, 'cP': cP, 'cF': cF, 'names': names, 'mats': mats, 'P': P, 'F': F, 'MI': MI, 'NN': NN}

if __name__ == '__main__':
    glb, dist = sys.argv[1], sys.argv[2]
    geo = build_geometry(glb, dist)
    if len(sys.argv) > 3 and sys.argv[3] == 'geo': sys.exit(0)
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))   # part two lives next to this file
    from pack_loop_arena import build_arena
    build_arena(geo, dist)

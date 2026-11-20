#!/usr/bin/env python3
"""pack_glass.py <virtual_city_tilt_brush.glb>   ->   client/dist/glass.txt      (then run pack_glass_arena.py)

GLASS CITY's drawing. The model is "Virtual City [Tilt Brush]" by factoryfifteen (Sketchfab, CC BY 4.0): a city drawn in
light, 168 MB and 2.9 million triangles as it comes. The game needs it at a twentieth of that:

  * the towers are built from flat strokes: 34,625 of them, a million triangles. Nearly every stroke is one straight
    flat ribbon, so each becomes one rectangle of the same area (a bent stroke is cut until its parts are straight).
    These rectangles are the city's panels: floors, and the narrow uprights of its frames. They are what the game
    draws as glass and what it treats as solid.
  * the cables (1.8 million triangles of hair-thin tube) become plain line segments.
  * everything else is kept as it is: the red lights, the dark catwalks, and the twenty towers of the middle block
    with the model's own pictures of windows lit at night.

The drawing is scaled to the game's metres (S) and stretched upward (SY) so the towers are worth climbing, and it is set
down with the middle of its base plate at the origin and the plate's top at y = 0.

Pack: 'SCGL', u32 header length, header JSON, then  tris: n*9 uint16 (three corners, quantised between lo and hi) and
n*3 bytes (one colour a triangle, square-root coded);  lines: n*6 uint16 and n*3 bytes;  then each textured part:
n*9 uint16, n*6 float32 (where each corner is on the picture) and the picture, a JPEG padded to four bytes.
The triangles come in this order: light (the first `free`), catwalks and tower sides (up to `fixed`), then the panels:
`rects` rectangles of two triangles each (the first `play` of them stand on the play area, the rest are skyline; each
group is in random order, so drawing a first part of the skyline is an even thinning: phones do that), then loose
triangles. Everything from `free` on is solid, and so is a textured part marked solid. The GLB itself is not kept in the repository.
"""
import sys, os, json, struct, base64
import numpy as np

S, SY = 6.3, 12.6                      # metres to one model unit: along the ground, and upward
TARGET_DABS = 190000                   # triangles of dab kept
WIRE_CELL = 0.5                        # metres: cable points closer than this are one point
HERE = os.path.dirname(os.path.abspath(__file__)); OUT = os.path.join(HERE, '..', 'dist', 'glass.txt')

# ---------------------------------------------------------------- read the GLB (positions in world space)
raw = open(sys.argv[1], 'rb').read(); ln = struct.unpack('<I', raw[12:16])[0]; J = json.loads(raw[20:20 + ln]); o = 20 + ln
BIN = memoryview(raw)[o + 8:o + 8 + struct.unpack('<I', raw[o:o + 4])[0]]
CT = {5120: ('i1', 1), 5121: ('u1', 1), 5122: ('i2', 2), 5123: ('u2', 2), 5125: ('u4', 4), 5126: ('f4', 4)}; NC = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4}
def acc(i):
    a = J['accessors'][i]; bv = J['bufferViews'][a['bufferView']]; dt, sz = CT[a['componentType']]; n = NC[a['type']]
    off = bv.get('byteOffset', 0) + a.get('byteOffset', 0); st = bv.get('byteStride', 0) or sz * n
    arr = np.ndarray((a['count'], n), dtype='<' + dt, buffer=BIN, offset=off, strides=(st, sz))
    return arr.astype('f4') / float(np.iinfo(np.dtype(dt)).max) if a.get('normalized') else arr
def mat4(n):
    if 'matrix' in n: return np.array(n['matrix'], dtype='f8').reshape(4, 4).T
    T = np.eye(4); x, y, z, w = n.get('rotation', [0, 0, 0, 1])
    R = np.array([[1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w)], [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w)], [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y)]])
    T[:3, :3] = R * np.array(n.get('scale', [1, 1, 1])); T[:3, 3] = n.get('translation', [0, 0, 0]); return T
prims = []
def walk(i, M):
    n = J['nodes'][i]; W = M @ mat4(n)
    if 'mesh' in n:
        for pr in J['meshes'][n['mesh']]['primitives']:
            P = acc(pr['attributes']['POSITION']).astype('f8'); P = P @ W[:3, :3].T + W[:3, 3]
            idx = acc(pr['indices']).reshape(-1, 3).astype('i8') if 'indices' in pr else np.arange(len(P)).reshape(-1, 3)
            C = acc(pr['attributes']['COLOR_0'])[:, :3].astype('f4') if 'COLOR_0' in pr['attributes'] else None
            UV = acc(pr['attributes']['TEXCOORD_0']).astype('f4') if 'TEXCOORD_0' in pr['attributes'] else None
            if C is not None and C.max() > 1.5: C = C / 255.0
            m = J['materials'][pr['material']]; e = m.get('extensions', {}).get('KHR_materials_pbrSpecularGlossiness', {})
            prims.append(dict(mat=m['name'], P=P, idx=idx, C=C, UV=UV, diff=np.array(e.get('diffuseFactor', [1, 1, 1, 1])[:3], 'f4')))
    for c in n.get('children', []): walk(c, W)
for r in J['scenes'][J.get('scene', 0)]['nodes']: walk(r, np.eye(4))

# ---------------------------------------------------------------- the game's frame: the base plate is the play area
plate = next(p for p in prims if p['mat'] == '24_-_Default'); plo, phi = plate['P'].min(0), plate['P'].max(0)
cx, cz, y0 = (plo[0] + phi[0]) / 2, (plo[2] + phi[2]) / 2, phi[1]; HX, HZ = (phi[0] - plo[0]) / 2 * S, (phi[2] - plo[2]) / 2 * S
def game(P): return np.stack([(P[:, 0] - cx) * S, (P[:, 1] - y0) * SY, (P[:, 2] - cz) * S], 1)
def tricol(p, gain, fixed=None):
    if fixed is not None: return np.tile(np.array(fixed, 'f4'), (len(p['idx']), 1))
    c = p['C'][p['idx']].mean(1) if p['C'] is not None else np.tile(p['diff'], (len(p['idx']), 1))
    return np.clip(c * gain, 0, 1)

# ---------------------------------------------------------------- dabs: connected pieces, then one a cell
def pieces(P, idx):
    q = np.round(P * 200).astype(np.int64); key = (q[:, 0] + (1 << 20)) * (1 << 42) + (q[:, 1] + (1 << 20)) * (1 << 21) + (q[:, 2] + (1 << 20))
    u, inv = np.unique(key, return_inverse=True); tv = inv[idx]; lab = np.arange(len(u))
    for _ in range(400):
        new = lab.copy(); np.minimum.at(new, tv.ravel(), np.repeat(lab[tv].min(1), 3)); new = np.minimum(new, new[new])
        if np.array_equal(new, lab): break
        lab = new
    return np.unique(lab[tv[:, 0]], return_inverse=True)[1]
A, B, C, COL, CID = [], [], [], [], []; nc = 0
for p in prims:
    if p['mat'] != 'FlatDeprecated': continue
    P = game(p['P']); ci = pieces(P, p['idx']); A.append(P[p['idx'][:, 0]]); B.append(P[p['idx'][:, 1]]); C.append(P[p['idx'][:, 2]]); COL.append(tricol(p, 2.4)); CID.append(ci + nc); nc += ci.max() + 1
A, B, C, COL, CID = (np.concatenate(x) for x in (A, B, C, COL, CID))
tarea = 0.5 * np.linalg.norm(np.cross(B - A, C - A), axis=1); V = np.stack([A, B, C], 1)
# A piece is a stroke: a ribbon of many small triangles, mostly straight, sometimes bent. Each straight flat run of it is
# replaced by one rectangle of the same area; a run that is bent, or does not fill its box, is cut in two and tried again.
order = np.argsort(CID, kind='stable'); starts = np.searchsorted(CID[order], np.arange(nc + 1)); quads, qcol, loose, lcol = [], [], [], []
def fit(ix, depth):
    a = tarea[ix]; tot = a.sum()
    if tot < 2e-4: return
    pts = V[ix].reshape(-1, 3); c = pts.mean(0); d = pts - c; ev, ax = np.linalg.eigh(d.T @ d); ax = ax[:, ::-1].T; pr = d @ ax.T; ext = pr.max(0) - pr.min(0); L, W, T = ext
    if W > 1e-6 and T <= 0.3 * W + 0.04 and tot >= 0.7 * L * W:
        m = c + ax.T @ ((pr.max(0) + pr.min(0)) / 2); h1 = ax[0] * L / 2; h2 = ax[1] * (tot / L) / 2      # as long as the run, as wide as its area asks
        quads.append(np.stack([m - h1 - h2, m + h1 - h2, m + h1 + h2, m - h1 + h2])); qcol.append((COL[ix] * a[:, None]).sum(0) / tot); return
    if len(ix) <= 3 or depth > 14 or L < 0.35:
        loose.append(V[ix]); lcol.append(COL[ix]); return
    t = (V[ix].mean(1) - c) @ ax[0]; med = np.median(t); lo_, hi_ = ix[t <= med], ix[t > med]
    if len(lo_) == 0 or len(hi_) == 0: loose.append(V[ix]); lcol.append(COL[ix]); return
    fit(lo_, depth + 1); fit(hi_, depth + 1)
sys.setrecursionlimit(10000)
for k in range(nc): fit(order[starts[k]:starts[k + 1]], 0)
quads = np.array(quads); qcol = np.array(qcol); loose = np.concatenate(loose) if loose else np.zeros((0, 3, 3)); lcol = np.concatenate(lcol) if lcol else np.zeros((0, 3))
qa = np.linalg.norm(np.cross(quads[:, 1] - quads[:, 0], quads[:, 3] - quads[:, 0]), axis=1); qc = quads.mean(1)
print(f'dabs: {nc} strokes, {len(A)} triangles, {tarea.sum():.0f} m2 -> {len(quads)} rectangles ({qa.sum():.0f} m2) + {len(loose)} loose triangles')
# outside the play area the drawing is skyline: small rectangles go, the rest stay. Inside, only specks go.
inside = (np.abs(qc[:, 0]) <= HX + 3) & (np.abs(qc[:, 2]) <= HZ + 3)
def count(th_in, th_out): return (qa >= np.where(inside, th_in, th_out))
th_out = 0.15; th_in = 0.02
while count(th_in, th_out).sum() * 2 + len(loose) > TARGET_DABS and th_out < 30: th_out *= 1.25
while count(th_in, th_out).sum() * 2 + len(loose) > TARGET_DABS and th_in < 3: th_in *= 1.25
kq = count(th_in, th_out); quads, qcol, inside = quads[kq], qcol[kq], inside[kq]
perm = np.random.default_rng(7).permutation(len(quads)); perm = np.concatenate([perm[inside[perm]], perm[~inside[perm]]]); quads, qcol = quads[perm], qcol[perm]     # the play area first, then the skyline; each in random order
nrect = len(quads); nplay = int(inside.sum())
if os.environ.get('GLASS_DUMP'): np.savez(os.environ['GLASS_DUMP'], quads=quads, qcol=qcol)      # the rectangles, for looking at
dab = np.concatenate([np.concatenate([quads[:, [0, 1, 2]], quads[:, [0, 2, 3]]], 1).reshape(-1, 3, 3), loose]); dabcol = np.concatenate([np.repeat(qcol, 2, 0), lcol])
print(f'      kept {len(quads)} rectangles (inside: at least {th_in:.2f} m2, outside: at least {th_out:.2f} m2), {nplay} of them in the play area; {len(dab)} triangles')

# ---------------------------------------------------------------- everything else
# Drawn as it is, in its own colour, and not solid: the red lights and the few strokes of other brushes.
# Drawn dark, and solid: the catwalks (ribbons 1.2 m wide that run through every block at a dozen heights, from 7 m up)
# and the blank sides of the towers. Drawn with the model's own night-window pictures: the twenty towers of the middle block (solid)
# and the lit boxes that hang on them (not solid).
FIX = {'Light': (1.0, 0.07, 0.12), '20_-_Default': (0.05, 0.065, 0.095), '20_-_sdsd': (0.028, 0.036, 0.05)}
SOLID = ('20_-_Default', '20_-_sdsd'); ROAD = (0.06, 0.085, 0.13); TEXD = {'22_-_Default': True, '22_-_Defaultsd': False}       # textured: is it solid?
def tris_of(p): P = game(p['P']); return np.stack([P[p['idx'][:, k]] for k in range(3)], 1)
oth, othcol, sol, solcol = [], [], [], []
for p in prims:
    if p['mat'] in ('FlatDeprecated', 'Wire', '24_-_Default') or p['mat'] in TEXD: continue
    t = tris_of(p); c = tricol(p, 2.0, FIX.get(p['mat'])); ok = t[:, :, 1].mean(1) > -0.5; t, c = t[ok], c[ok]
    if p['mat'] == '20_-_Default':                                  # the lowest ribbons wander a little above the plate: they are laid on it as paths, and are not in anyone's way
        low = t[:, :, 1].max(1) < 2.6; road = t[low].copy(); road[:, :, 1] = 0.03; oth.append(road); othcol.append(np.tile(np.array(ROAD, 'f4'), (len(road), 1))); t, c = t[~low], c[~low]
    (sol if p['mat'] in SOLID else oth).append(t); (solcol if p['mat'] in SOLID else othcol).append(c)
nfree = sum(len(x) for x in oth); oth, othcol = np.concatenate(oth + sol), np.concatenate(othcol + solcol)
print(f'kept as drawn: {nfree} triangles of light, {len(oth) - nfree} of catwalk and tower side (solid)')
import io
from PIL import Image
def picture(tex):
    bv = J['bufferViews'][J['images'][J['textures'][tex]['source']]['bufferView']]; off = bv.get('byteOffset', 0)
    return np.asarray(Image.open(io.BytesIO(bytes(BIN[off:off + bv['byteLength']]))).convert('RGB').resize((512, 512), Image.LANCZOS), 'f4') / 255
BASE = np.array([0.03, 0.04, 0.055], 'f4')                          # a tower by night is not quite black
texs = []
for name, is_solid in TEXD.items():
    ps = [p for p in prims if p['mat'] == name]; m = next(x for x in J['materials'] if x['name'] == name); d = m['extensions']['KHR_materials_pbrSpecularGlossiness']
    lit = picture(m['emissiveTexture']['index']); dim = picture(d['diffuseTexture']['index'])
    tint = np.concatenate([p['C'] for p in ps]).mean(0) if ps[0]['C'] is not None else np.ones(3, 'f4')
    pic = lit if m['emissiveTexture']['index'] == d['diffuseTexture']['index'] else np.clip(lit + 0.2 * dim * tint, 0, 1)   # what glows, and a little of what would be lit
    pic = pic + BASE * (1 - pic); jpg = io.BytesIO(); Image.fromarray((pic * 255).round().astype('u1')).save(jpg, 'JPEG', quality=80)
    t = np.concatenate([tris_of(p) for p in ps]); uv = np.concatenate([p['UV'][p['idx']] for p in ps]).astype('<f4')
    texs.append(dict(solid=is_solid, tris=t.astype('f4'), uv=uv, jpg=jpg.getvalue())); print(f'textured: {name}: {len(t)} triangles, picture {len(jpg.getvalue()) // 1024} KB, {"solid" if is_solid else "not solid"}')

# ---------------------------------------------------------------- cables: tubes to lines
segs = []
for p in prims:
    if p['mat'] != 'Wire': continue
    P = game(p['P']); cell = np.floor(P / WIRE_CELL).astype(np.int64); key = ((cell[:, 0] + 4096) * 8192 + (cell[:, 1] + 4096)) * 8192 + (cell[:, 2] + 4096)
    u, inv = np.unique(key, return_inverse=True); cnt = np.bincount(inv); mean = np.stack([np.bincount(inv, weights=P[:, k]) / cnt for k in range(3)], 1)
    tc = inv[p['idx']]; e = np.concatenate([tc[:, [0, 1]], tc[:, [1, 2]], tc[:, [2, 0]]]); e = e[e[:, 0] != e[:, 1]]; e.sort(1); e = np.unique(e, axis=0)
    s = np.stack([mean[e[:, 0]], mean[e[:, 1]]], 1); segs.append(s[np.linalg.norm(s[:, 0] - s[:, 1], axis=1) < WIRE_CELL * 3])
segs = np.concatenate(segs); segcol = np.tile(np.array([0.16, 0.34, 0.6], 'f4'), (len(segs), 1)); print(f'cables: {len(segs)} line segments')

# ---------------------------------------------------------------- write
tris = np.concatenate([oth, dab]).astype('f4'); tcol = np.concatenate([othcol, dabcol])
allp = np.concatenate([tris.reshape(-1, 3), segs.reshape(-1, 3)] + [x['tris'].reshape(-1, 3) for x in texs]); lo, hi = allp.min(0) - 0.01, allp.max(0) + 0.01
q16 = lambda X: np.round((X.reshape(-1, 3) - lo) / (hi - lo) * 65535).astype('<u2').tobytes(); c8 = lambda X: np.round(np.sqrt(np.clip(X, 0, 1)) * 255).astype('u1').tobytes()
body = q16(tris) + c8(tcol) + q16(segs) + c8(segcol)
for x in texs: body += q16(x['tris']) + x['uv'].tobytes() + x['jpg'] + b'\0' * (-len(x['jpg']) % 4)      # a textured part: corners, their places on the picture, the picture (JPEG)
head = json.dumps(dict(v=2, lo=[round(float(x), 3) for x in lo], hi=[round(float(x), 3) for x in hi], tris=len(tris), free=nfree, fixed=len(oth), rects=nrect, play=nplay, lines=len(segs),
                       tex=[dict(tris=len(x['tris']), solid=x['solid'], jpg=len(x['jpg'])) for x in texs], half=[round(HX, 2), round(HZ, 2)], S=S, SY=SY,
                       credit='Virtual City [Tilt Brush] by factoryfifteen (CC-BY-4.0)')).encode()
head += b' ' * (-len(head) % 4); blob = b'SCGL' + struct.pack('<I', len(head)) + head + body
open(OUT, 'wb').write(base64.b64encode(blob)); print(f'plate half-size {HX:.1f} x {HZ:.1f} m; bounds {lo.round(1)} .. {hi.round(1)}; {len(blob) / 1e6:.2f} MB packed, {os.path.getsize(OUT) / 1e6:.2f} MB as text')

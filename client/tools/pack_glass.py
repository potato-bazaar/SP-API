#!/usr/bin/env python3
"""pack_glass.py <virtual_city_tilt_brush.glb>   ->   client/dist/glass.txt      (then run pack_glass_arena.py)

GLASS CITY's drawing. The model is "Virtual City [Tilt Brush]" by factoryfifteen (Sketchfab, CC BY 4.0): a city painted
in Tilt Brush, 168 MB and 2.9 million triangles as it comes. It goes into the game as it was built: its own
proportions (one scale, S, in every direction), its own colours, nothing added. Only the weight is taken out of it:

  * the city is painted in flat strokes: 34,625 of them, a million triangles (each stroke has a front and a back).
    Nearly every stroke is one straight flat ribbon, so each flat run of a stroke becomes one pane with the run's own
    outline (four corners, or three) and colour; a bent stroke is cut until its parts are flat, and what will not
    go into a pane stays as triangles. The panes are solid.
  * the cables and the line-work are 3,761 wires: tubes of eight sides, a few centimetres thick, 1.8 million
    triangles, 11 km of them. Each becomes its centre line (bends kept to 12 mm) with its own thickness.
  * everything else is kept triangle for triangle: the red lights, the grids, the signs, the ribbons of light and
    their dark copies in the outer blocks, the towers of the middle block with the model's own pictures of windows lit
    at night, the ground with its own picture.

Colours. A colour in the file is the painter's colour as picked (sRGB, eight bits a channel); it is made linear here
and kept as it is. What each material does with light is kept too (LOOK): a stroke and a tower side show the light
that falls on them, and so do the grids; the red lights, the ribbons of light, the wires, the signs and the windows
give light. How the city is lit is not in the file: the game lights it the way the model's picture on
Sketchfab is lit (client/tools/loop/22_glass.js).

Pack: 'SCGL', u32 header length, header JSON, then  tris: n*9 uint16 (three corners, quantised between lo and hi) and
n*3 bytes (one colour a triangle, linear, square-root coded);  lines: n*6 uint16 and n bytes (thickness, 0..255 for
0..WIRE_MAX m), padded to four;  shade: rects*4 bytes (how much of the red light each corner of each pane sees);  cells:
rects bytes (how many steps the stroke took along each pane), padded to four;  then each textured part: n*9 uint16,
n*6 float32 (where each corner is on the picture) and the picture, a JPEG padded to four bytes. The triangles come in
this order:
  0      .. lit[0]  lights and other small things that glow: not solid
  lit[0] .. free    grids: lit, not solid
  free   .. lit[1]  the ribbons' dark copies, the blank sides of the towers: lit, solid
  lit[1] .. fixed   signs and ribbons of light: they glow, solid
  fixed  ..         the panes (lit): `rects` panes of two triangles each, four corners, the first side along the
                    stroke (the first `play` of them stand on the
                    plate, the rest are skyline; each group in random order, so drawing a first part of the skyline is
                    an even thinning: phones do that), then the loose triangles (not solid)
Solid: the triangles from `free` to the end of the panes, and a textured part marked solid.
The GLB itself is not kept in the repository.
"""
import sys, os, json, struct, base64
import numpy as np

S = 12.6                               # metres to one model unit, every way: a storey of the towers comes out near 3 m, a catwalk 2.4 m wide
TARGET_DABS = 190000                   # triangles of dab kept
WIRE_TOL, WIRE_MAX = 0.012, 0.64       # metres: how far a wire's line may stray from its centre; the thickest wire the pack can hold
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
            prims.append(dict(mat=m['name'], P=P, idx=idx, C=C, UV=UV, diff=np.array(e.get('diffuseFactor', [1, 1, 1, 1])[:3], 'f4'), emis=np.array(m.get('emissiveFactor', [0, 0, 0]), 'f4')))
    for c in n.get('children', []): walk(c, W)
for r in J['scenes'][J.get('scene', 0)]['nodes']: walk(r, np.eye(4))

# ---------------------------------------------------------------- the game's frame: the base plate is the play area
plate = next(p for p in prims if p['mat'] == '24_-_Default'); plo, phi = plate['P'].min(0), plate['P'].max(0)
cx, cz, y0 = (plo[0] + phi[0]) / 2, (plo[2] + phi[2]) / 2, phi[1]; HX, HZ = (phi[0] - plo[0]) / 2 * S, (phi[2] - plo[2]) / 2 * S
def game(P): return np.stack([(P[:, 0] - cx) * S, (P[:, 1] - y0) * S, (P[:, 2] - cz) * S], 1)
def linear(c): c = np.asarray(c, 'f8'); return np.where(c <= 0.04045, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)      # sRGB as picked -> linear light
# LOOK: what each material does with light. 'lit': it shows the light that falls on it, and its colour (the painter's,
# times the material's own) is what it gives back. 'glow': it gives light of this colour. 'glowc': it gives light of
# its own colour, this strong. The file says which glow for the lights, the ribbons and the wires. The signs (painted
# with a brush that glows in Tilt Brush) it calls lit, but in the model's picture on Sketchfab they show dimly in
# their own colours whatever light is on them: they are matched to that.
LOOK = {'FlatDeprecated': ('lit', (1, 1, 1)), 'HyperGrid': ('lit', (1, 1, 1)), 'DoubleTaperedFlat': ('lit', (1, 1, 1)), '20_-_Default': ('lit', (0.0727, 0.0727, 0.0727)), '20_-_sdsd': ('lit', (0.0311, 0.04, 0.0466)),
        'Highlighter': ('glowc', (0.36, 0.36, 0.36)),
        'Light': ('glow', (1.0, 0.03, 0.05)), 'Streamers': ('glow', (1.0, 0.808, 0.808)), 'Waveform': ('glow', (1, 1, 1)), 'Electricity': ('glow', (1, 1, 1))}      # (the file's red is pure; the picture's has this little of the other two)
WIRE_GLOW = (2.2e-5, 0.0105, 0.0381)                                    # the wires' own light (the file's), linear
AMBIENT = 0.1                                                           # the textured parts carry their little reflected light baked in: this much of their colour
def tricol(p):                                                          # one colour a triangle
    kind, k = LOOK[p['mat']]
    if kind == 'glow': return np.tile(np.array(k, 'f4'), (len(p['idx']), 1))
    c = linear(p['C'][p['idx']]).mean(1) if p['C'] is not None else np.ones((len(p['idx']), 3))
    return np.clip(c * np.array(k, 'f8'), 0, 1).astype('f4')

# ---------------------------------------------------------------- dabs: connected pieces, then one a cell
def pieces(P, idx):
    q = np.round(P * 200).astype(np.int64); key = (q[:, 0] + (1 << 20)) * (1 << 42) + (q[:, 1] + (1 << 20)) * (1 << 21) + (q[:, 2] + (1 << 20))
    u, inv = np.unique(key, return_inverse=True); tv = inv[idx]; lab = np.arange(len(u))
    for _ in range(400):
        new = lab.copy(); np.minimum.at(new, tv.ravel(), np.repeat(lab[tv].min(1), 3)); new = np.minimum(new, new[new])
        if np.array_equal(new, lab): break
        lab = new
    return np.unique(lab[tv[:, 0]], return_inverse=True)[1]
A, B, C, COL, CID, TU = [], [], [], [], [], []; nc = 0
for p in prims:
    if p['mat'] != 'FlatDeprecated': continue
    P = game(p['P']); ci = pieces(P, p['idx']); A.append(P[p['idx'][:, 0]]); B.append(P[p['idx'][:, 1]]); C.append(P[p['idx'][:, 2]]); COL.append(tricol(p)); CID.append(ci + nc); nc += ci.max() + 1; TU.append(p['UV'][p['idx'], 0].astype('f8'))      # (TU: how far along its stroke each corner is)
A, B, C, COL, CID, TU = (np.concatenate(x) for x in (A, B, C, COL, CID, TU))
TN = 0.5 * np.cross(B - A, C - A); tarea = np.linalg.norm(TN, axis=1); V = np.stack([A, B, C], 1)
# A piece is a stroke: a ribbon of many small triangles, mostly straight and flat, sometimes bent. Tilt Brush gives most
# strokes a front and a back, so their triangles add up to twice what they cover. Each flat run of a stroke that fills
# its own outline becomes one pane with that outline: four corners (three, if it comes to a point), so a slanting roof
# or a gable keeps its shape. A run that is bent, or does not fill its outline, is cut in two and tried again; what
# will not go into a pane at all stays as loose triangles.
from scipy.spatial import ConvexHull
order = np.argsort(CID, kind='stable'); starts = np.searchsorted(CID[order], np.arange(nc + 1)); quads, qcol, qseg, loose, lcol = [], [], [], [], []
def corners(h, area):                                             # an outline down to four corners: the corner that matters least goes, again and again; a fourth that hardly matters goes too
    lost = 0.0
    while len(h) > 3:
        a, c = np.roll(h, 1, 0), np.roll(h, -1, 0); t = 0.5 * np.abs((h[:, 0] - a[:, 0]) * (c[:, 1] - a[:, 1]) - (h[:, 1] - a[:, 1]) * (c[:, 0] - a[:, 0])); k = int(t.argmin())
        if len(h) == 4 and t[k] > 0.02 * area: break
        lost += t[k]; h = np.delete(h, k, 0)
    return h, lost
def fit(ix, depth):
    a = tarea[ix]; tot = (a.sum() + np.linalg.norm(TN[ix].sum(0))) / 2            # what it covers: front and back count once
    if tot < 2e-4: return
    pts = V[ix].reshape(-1, 3); c = pts.mean(0); d = pts - c; ev, ax = np.linalg.eigh(d.T @ d); ax = ax[:, ::-1].T; pr = d @ ax.T; ext = pr.max(0) - pr.min(0); L, W, T = ext
    if W > 1e-6 and T <= 0.05 * W + 0.06:
        try: h = pr[ConvexHull(pr[:, :2]).vertices, :2]
        except Exception: h = None
        if h is not None:
            x, y = h[:, 0], h[:, 1]; ah = 0.5 * abs(np.dot(x, np.roll(y, -1)) - np.dot(y, np.roll(x, -1)))
            if tot >= 0.8 * ah:
                q, lost = corners(h, ah)
                if lost <= 0.1 * ah:
                    # its first side is the one that runs along the stroke; and how many steps the stroke took over this run (the mesh has an edge across it at each: they show, in the model's picture)
                    uu = TU[ix].reshape(-1); du = uu - uu.mean(); along = du @ pr[:, :2]; e = np.roll(q, -1, 0) - q; k = int(np.abs(e @ along).argmax()); q = np.roll(q, -k, 0)
                    if len(q) == 3: q = np.concatenate([q, q[2:]])
                    quads.append(c + q[:, :1] * ax[0] + q[:, 1:] * ax[1]); qcol.append((COL[ix] * a[:, None]).sum(0) / a.sum()); qseg.append(max(1, len(np.unique(np.round(uu * 2e3))) - 1)); return
    if len(ix) <= 2 or depth > 14 or L < 0.35:
        loose.append(V[ix]); lcol.append(COL[ix]); return
    t = (V[ix].mean(1) - c) @ ax[0]; med = np.median(t); lo_, hi_ = ix[t <= med], ix[t > med]
    if len(lo_) == 0 or len(hi_) == 0: loose.append(V[ix]); lcol.append(COL[ix]); return
    fit(lo_, depth + 1); fit(hi_, depth + 1)
sys.setrecursionlimit(10000)
for k in range(nc): fit(order[starts[k]:starts[k + 1]], 0)
quads = np.array(quads); qcol = np.array(qcol); qseg = np.array(qseg); loose = np.concatenate(loose) if loose else np.zeros((0, 3, 3)); lcol = np.concatenate(lcol) if lcol else np.zeros((0, 3))
qa = 0.5 * (np.linalg.norm(np.cross(quads[:, 1] - quads[:, 0], quads[:, 2] - quads[:, 0]), axis=1) + np.linalg.norm(np.cross(quads[:, 2] - quads[:, 0], quads[:, 3] - quads[:, 0]), axis=1)); qc = quads.mean(1)
la_ = 0.5 * np.linalg.norm(np.cross(loose[:, 1] - loose[:, 0], loose[:, 2] - loose[:, 0]), axis=1).sum() if len(loose) else 0.0
print(f'strokes: {nc}, {len(A)} triangles -> {len(quads)} panes ({qa.sum():.0f} m2; {int((np.abs(quads[:, 3] - quads[:, 2]).max(1) < 1e-9).sum())} of them three-cornered) + {len(loose)} loose triangles ({la_:.0f} m2, both sides counted)')
# outside the play area the drawing is skyline: small panes go, the rest stay. Inside, only specks go.
inside = (np.abs(qc[:, 0]) <= HX + 3) & (np.abs(qc[:, 2]) <= HZ + 3)
def count(th_in, th_out): return (qa >= np.where(inside, th_in, th_out))
th_out = 0.15; th_in = 0.02
while count(th_in, th_out).sum() * 2 + len(loose) > TARGET_DABS and th_out < 30: th_out *= 1.25
while count(th_in, th_out).sum() * 2 + len(loose) > TARGET_DABS and th_in < 3: th_in *= 1.25
kq = count(th_in, th_out); quads, qcol, qseg, inside = quads[kq], qcol[kq], qseg[kq], inside[kq]
perm = np.random.default_rng(7).permutation(len(quads)); perm = np.concatenate([perm[inside[perm]], perm[~inside[perm]]]); quads, qcol, qseg = quads[perm], qcol[perm], qseg[perm]     # the plate's first, then the skyline's; each in random order
nrect = len(quads); nplay = int(inside.sum())
if os.environ.get('GLASS_DUMP'): np.savez(os.environ['GLASS_DUMP'], quads=quads, qcol=qcol)      # the panes, for looking at
dab = np.concatenate([np.concatenate([quads[:, [0, 1, 2]], quads[:, [0, 2, 3]]], 1).reshape(-1, 3, 3), loose]); dabcol = np.concatenate([np.repeat(qcol, 2, 0), lcol])
print(f'      kept {len(quads)} panes (inside: at least {th_in:.2f} m2, outside: at least {th_out:.2f} m2), {nplay} of them on the plate; {len(dab)} triangles')

# ---------------------------------------------------------------- everything else, triangle for triangle
SOLID = ('Streamers', 'Highlighter', '20_-_Default', '20_-_sdsd')        # ribbons of light, the signs, the ribbons' dark copies, the blank sides of the towers
TEXD = {'22_-_Default': True, '22_-_Defaultsd': False, '24_-_Default': False}       # textured (the towers, the lit windows on them, the ground): is it solid? (the ground is: the arena has its own plate under it)
def tris_of(p): P = game(p['P']); return np.stack([P[p['idx'][:, k]] for k in range(3)], 1)
grp = {k: [] for k in (('glow', False), ('lit', False), ('lit', True), ('glow', True))}      # (what it does with light, solid?) in the order they are written
for p in prims:
    if p['mat'] in ('FlatDeprecated', 'Wire') or p['mat'] in TEXD: continue
    grp[(LOOK[p['mat']][0].replace('glowc', 'glow'), p['mat'] in SOLID)].append((tris_of(p), tricol(p)))
cnt = [sum(len(t) for t, _ in g) for g in grp.values()]; n_gf, n_free, n_ls = cnt[0], cnt[0] + cnt[1], cnt[0] + cnt[1] + cnt[2]
oth, othcol = np.concatenate([t for g in grp.values() for t, _ in g]), np.concatenate([c for g in grp.values() for _, c in g])
print(f'kept as built: {cnt[0]} triangles of light, {cnt[1]} of grid, {cnt[2]} of tower side and dark ribbon (solid), {cnt[3]} of sign and ribbon of light (solid)')
import io
from PIL import Image
def picture(tex, size=512):
    bv = J['bufferViews'][J['images'][J['textures'][tex]['source']]['bufferView']]; off = bv.get('byteOffset', 0); im = Image.open(io.BytesIO(bytes(BIN[off:off + bv['byteLength']]))).convert('RGB')
    return np.asarray(im.resize((min(size, im.size[0]), min(size, im.size[1])), Image.LANCZOS), 'f8') / 255
def srgb(c): c = np.clip(c, 0, 1); return np.where(c <= 0.0031308, c * 12.92, 1.055 * c ** (1 / 2.4) - 0.055)
texs = []
for name, is_solid in TEXD.items():
    ps = [p for p in prims if p['mat'] == name]; m = next(x for x in J['materials'] if x['name'] == name); d = m['extensions']['KHR_materials_pbrSpecularGlossiness']
    # one picture for the game to show as it is: what glows, plus a little of what does not
    dif = linear(picture(d['diffuseTexture']['index'])) * np.array(d.get('diffuseFactor', [1, 1, 1, 1])[:3]) * (linear(np.concatenate([p['C'] for p in ps])).mean(0) if ps[0]['C'] is not None else 1.0)
    glow = linear(picture(m['emissiveTexture']['index'])) * np.array(m.get('emissiveFactor', [1, 1, 1])) if 'emissiveTexture' in m else 0.0
    pic = srgb(glow + dif * AMBIENT); jpg = io.BytesIO(); Image.fromarray((pic * 255).round().astype('u1')).save(jpg, 'JPEG', quality=86)
    t = np.concatenate([tris_of(p) for p in ps]); uv = np.concatenate([p['UV'][p['idx']] for p in ps]).astype('<f4')
    texs.append(dict(solid=is_solid, ground=name == '24_-_Default', tris=t.astype('f4'), uv=uv, jpg=jpg.getvalue())); print(f'textured: {name}: {len(t)} triangles, picture {pic.shape[1]}x{pic.shape[0]} {len(jpg.getvalue()) // 1024} KB, {"solid" if is_solid else "not solid"}')

# ---------------------------------------------------------------- the red light's shadows
# The model's picture on Sketchfab is lit by one strong red-orange light from the west, 38 degrees up (found by trying
# every direction against that picture: it lights the roof slopes that face south and the flat roofs, not the slopes that
# face east), and what stands in its way throws a shadow. The game has no shadows of its own, so
# they are worked out here once: for each corner of each pane, is the way to that light clear? (0..255; the game lets
# it run smoothly across the pane). What can stand in the way: the towers, and panes at least SHADE_W wide (in that
# picture the thin masts beside a roof leave it lit).
SUN = np.array([-0.785, 0.616, 0.07]); SUN /= np.linalg.norm(SUN); VOX, EDGE, SHADE_W = 0.75, 120.0, 2.0      # cells of the grid the shadows are worked out on; how far past the plate it reaches; only panes at least this wide throw a shadow
g_lo = np.array([-HX - EDGE, -2.0, -HZ - EDGE]); g_n = np.ceil((np.array([HX + EDGE, 62.0, HZ + EDGE]) - g_lo) / VOX).astype(int); occ = np.zeros(g_n, bool)
def mark(P):
    k = np.floor((P - g_lo) / VOX).astype(int); ok = ((k >= 0) & (k < g_n)).all(1); k = k[ok]; occ[k[:, 0], k[:, 1], k[:, 2]] = True
def quad_points(q, step=0.37):                                     # points all over a four-cornered piece
    nu = int(np.ceil(max(np.linalg.norm(q[1] - q[0]), np.linalg.norm(q[2] - q[3])) / step)) + 1; nv = int(np.ceil(max(np.linalg.norm(q[3] - q[0]), np.linalg.norm(q[2] - q[1])) / step)) + 1
    u = np.linspace(0, 1, nu)[:, None, None]; v = np.linspace(0, 1, nv)[None, :, None]; return ((1 - u) * (1 - v) * q[0] + u * (1 - v) * q[1] + u * v * q[2] + (1 - u) * v * q[3]).reshape(-1, 3)
e1 = np.maximum(np.linalg.norm(quads[:, 1] - quads[:, 0], axis=1), np.linalg.norm(quads[:, 2] - quads[:, 3], axis=1)); e2 = np.maximum(np.linalg.norm(quads[:, 3] - quads[:, 0], axis=1), np.linalg.norm(quads[:, 2] - quads[:, 1], axis=1))
qa2 = 0.5 * (np.linalg.norm(np.cross(quads[:, 1] - quads[:, 0], quads[:, 2] - quads[:, 0]), axis=1) + np.linalg.norm(np.cross(quads[:, 2] - quads[:, 0], quads[:, 3] - quads[:, 0]), axis=1))
for k in np.where((qa2 / np.maximum(np.maximum(e1, e2), 1e-9) >= SHADE_W) & (np.abs(quads.mean(1)[:, 0]) < HX + EDGE) & (np.abs(quads.mean(1)[:, 2]) < HZ + EDGE))[0]: mark(quad_points(quads[k]))
for x in texs:
    if x['solid']:
        for t in x['tris'].astype('f8'): mark(quad_points(np.array([t[0], t[1], t[2], t[2]])))
qn = np.cross(quads[:, 1] - quads[:, 0], quads[:, 2] - quads[:, 0]); qn /= np.maximum(np.linalg.norm(qn, axis=1), 1e-12)[:, None]; qn *= np.sign(qn @ SUN + 1e-9)[:, None]       # each pane's side that faces the light
start = (quads + 0.25 * (quads.mean(1, keepdims=True) - quads) / np.maximum(np.linalg.norm(quads.mean(1, keepdims=True) - quads, axis=2, keepdims=True), 0.25) + 0.25 * qn[:, None, :] + 1.2 * SUN).reshape(-1, 3)
lit = np.ones(len(start), bool); alive = np.arange(len(start))
for st in range(1, 700):
    P = start[alive] + SUN * (st * 0.3); k = np.floor((P - g_lo) / VOX).astype(int); inb = ((k >= 0) & (k < g_n)).all(1); alive, k = alive[inb], k[inb]
    if len(alive) == 0: break
    hit = occ[k[:, 0], k[:, 1], k[:, 2]]; lit[alive[hit]] = False; alive = alive[~hit]
shade = (lit.reshape(-1, 4) * 255).astype('u1'); print(f'red light from {SUN.round(2).tolist()}: {100 * lit.mean():.0f}% of pane corners see it; {int(occ.sum())} cells of {VOX} m stand in its way')

# ---------------------------------------------------------------- cables and line-work: each wire to its centre line
# A wire is a tube: rings of eight corners, each ring at one place along the stroke (the first texture coordinate says
# where). The middle of each ring, in that order, is the wire's centre line; a ring's size is its thickness there. The
# line is then thinned: a point goes if the line stays within WIRE_TOL of where it was.
import scipy.sparse as sp, scipy.sparse.csgraph as csg
def thin(pts, tol):
    keep = np.zeros(len(pts), bool); keep[0] = keep[-1] = True; st = [(0, len(pts) - 1)]
    while st:
        a, b = st.pop()
        if b <= a + 1: continue
        d = pts[b] - pts[a]; L = np.linalg.norm(d); q = pts[a + 1:b] - pts[a]
        dist = np.linalg.norm(q - np.outer(q @ d / (L * L), d), axis=1) if L > 1e-9 else np.linalg.norm(q, axis=1); k = int(dist.argmax())
        if dist[k] > tol: keep[a + 1 + k] = True; st += [(a, a + 1 + k), (a + 1 + k, b)]
    return np.where(keep)[0]
segs, segw, nwire = [], [], 0
for p in prims:
    if p['mat'] != 'Wire': continue
    P = game(p['P']); n = len(P); i = p['idx']; nk, lab = csg.connected_components(sp.coo_matrix((np.ones(len(i) * 2), (np.concatenate([i[:, 0], i[:, 1]]), np.concatenate([i[:, 1], i[:, 2]]))), shape=(n, n)), directed=False)
    key = lab.astype(np.int64) * (1 << 40) + (np.round(p['UV'][:, 0].astype('f8') * 1e4).astype(np.int64) + (1 << 30)); uk, inv = np.unique(key, return_inverse=True); cnt_ = np.bincount(inv)      # a ring: one wire, one place along it
    cen = np.stack([np.bincount(inv, weights=P[:, a]) / cnt_ for a in range(3)], 1); rad = np.bincount(inv, weights=np.linalg.norm(P - cen[inv], axis=1)) / cnt_
    st = np.searchsorted(uk >> 40, np.arange(nk + 1)); nwire += nk
    for q in range(nk):
        c, r = cen[st[q]:st[q + 1]], rad[st[q]:st[q + 1]]
        if len(c) < 2: continue
        kp = thin(c, WIRE_TOL)
        for a, b in zip(kp[:-1], kp[1:]): segs.append((c[a], c[b])); segw.append(2 * r[a:b + 1].max())
segs, segw = np.array(segs), np.clip(np.array(segw), 0.01, WIRE_MAX); print(f'wires: {nwire}, {float(np.linalg.norm(segs[:, 0] - segs[:, 1], axis=1).sum()) / 1000:.1f} km -> {len(segs)} line segments; thickness (m) median {np.median(segw):.3f}, a tenth are over {np.percentile(segw, 90):.3f}, thickest {segw.max():.2f}')

# ---------------------------------------------------------------- write
tris = np.concatenate([oth, dab]).astype('f4'); tcol = np.concatenate([othcol, dabcol])
allp = np.concatenate([tris.reshape(-1, 3), segs.reshape(-1, 3)] + [x['tris'].reshape(-1, 3) for x in texs]); lo, hi = allp.min(0) - 0.01, allp.max(0) + 0.01
q16 = lambda X: np.round((X.reshape(-1, 3) - lo) / (hi - lo) * 65535).astype('<u2').tobytes(); c8 = lambda X: np.round(np.sqrt(np.clip(X, 0, 1)) * 255).astype('u1').tobytes()
body = q16(tris) + c8(tcol) + q16(segs) + np.round(segw / WIRE_MAX * 255).astype('u1').tobytes() + b'\0' * (-len(segs) % 4) + shade.tobytes() + np.minimum(qseg, 255).astype('u1').tobytes() + b'\0' * (-nrect % 4)
for x in texs: body += q16(x['tris']) + x['uv'].tobytes() + x['jpg'] + b'\0' * (-len(x['jpg']) % 4)      # a textured part: corners, their places on the picture, the picture (JPEG)
head = json.dumps(dict(v=4, lo=[round(float(x), 3) for x in lo], hi=[round(float(x), 3) for x in hi], tris=len(tris), free=n_free, lit=[n_gf, n_ls], fixed=len(oth), rects=nrect, play=nplay, lines=len(segs), wmax=WIRE_MAX, wire=list(WIRE_GLOW), sun=[round(float(v), 4) for v in SUN], shade=True, cells=True,
                       tex=[dict(tris=len(x['tris']), solid=x['solid'], ground=x['ground'], jpg=len(x['jpg'])) for x in texs], half=[round(HX, 2), round(HZ, 2)], S=S,
                       credit='Virtual City [Tilt Brush] by factoryfifteen (CC-BY-4.0)')).encode()
head += b' ' * (-len(head) % 4); blob = b'SCGL' + struct.pack('<I', len(head)) + head + body
open(OUT, 'wb').write(base64.b64encode(blob)); print(f'plate half-size {HX:.1f} x {HZ:.1f} m; bounds {lo.round(1)} .. {hi.round(1)}; {len(blob) / 1e6:.2f} MB packed, {os.path.getsize(OUT) / 1e6:.2f} MB as text')

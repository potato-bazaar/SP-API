#!/usr/bin/env python3
"""Pack an operator that already has a Mixamo skeleton (here "S.W.A.T. Operator", Mateusz Wolinski, CC-BY-4.0).

  python3 client/tools/pack_operator_rigged.py SWAT.glb client/dist op2 [cell_cm]

Keeps the skinned body and its weights, drops the loose props hung on bones (holstered guns, patches),
rebuilds the skeleton as plain joints at their bind positions (the game's rig code only needs those),
thins the mesh with vertex clustering and packs the colour maps (and glow maps) into one atlas each.
Writes  <name>.txt (binary glTF as base64),  <name>_base.jpg,  <name>_emis.jpg.
"""
import sys, struct, json, base64, io, re, numpy as np
from PIL import Image

SRC, OUT, NAME = sys.argv[1], sys.argv[2], sys.argv[3]
CELL = float(sys.argv[4]) / 100 if len(sys.argv) > 4 else 0.012
SCALE = 0.975      # the Head joint lands where the stock sniper's is, so the shared hit shapes fit

b = open(SRC, 'rb').read(); cl, _ = struct.unpack('<II', b[12:20]); j = json.loads(b[20:20 + cl]); bin0 = b[20 + cl + 8:]
def acc(i):
    a = j['accessors'][i]; bv = j['bufferViews'][a['bufferView']]; n = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4, 'MAT4': 16}[a['type']]
    dt = {5120: 'i1', 5121: 'u1', 5122: '<i2', 5123: '<u2', 5125: '<u4', 5126: '<f4'}[a['componentType']]
    off = bv.get('byteOffset', 0) + a.get('byteOffset', 0); st = bv.get('byteStride', 0); isz = np.dtype(dt).itemsize * n
    if st and st != isz:
        raw = np.frombuffer(bin0, dtype='u1', count=st * (a['count'] - 1) + isz, offset=off)
        return raw[np.arange(a['count'])[:, None] * st + np.arange(isz)[None, :]].copy().view(dt).reshape(a['count'], n)
    return np.frombuffer(bin0, dtype=dt, count=a['count'] * n, offset=off).reshape(a['count'], n)
def img(i):
    bv = j['bufferViews'][j['images'][j['textures'][i]['source']]['bufferView']]; o = bv.get('byteOffset', 0)
    return Image.open(io.BytesIO(bin0[o:o + bv['byteLength']])).convert('RGB')

sk = j['skins'][0]; JN = sk['joints']; ibm = acc(sk['inverseBindMatrices']).reshape(-1, 4, 4).transpose(0, 2, 1).astype(float)
JPOS = np.array([np.linalg.inv(M)[:3, 3] for M in ibm]) * SCALE
parent = {}
for ni, n in enumerate(j['nodes']):
    for c in n.get('children', []): parent[c] = ni
def bname(i):
    m = re.search(r'mixamorig:?([A-Za-z0-9]+?)(_\d+)?$', j['nodes'][i].get('name', '')); return 'mixamorig:' + m.group(1) if m else '_rootJoint'
NB = len(JN); PAR = [JN.index(parent[i]) if parent.get(i) in JN else -1 for i in JN]

mats = j['materials']; used = []; prims = []
for n in j['nodes']:
    if 'mesh' not in n or 'skin' not in n: continue          # loose props are not part of the body
    for pr in j['meshes'][n['mesh']]['primitives']:
        if pr['material'] not in used: used.append(pr['material'])
        prims.append(pr)
GRID = int(np.ceil(np.sqrt(len(used)))); pad = .012
V, UV, W, F, G = [], [], [], [], []; off = 0
for gi, pr in enumerate(prims):
    v = acc(pr['attributes']['POSITION']).astype(float) * SCALE; ji = acc(pr['attributes']['JOINTS_0']).astype(np.int64); jw = acc(pr['attributes']['WEIGHTS_0']).astype(float)
    if jw.dtype != float: jw = jw.astype(float)
    jw = jw / np.maximum(jw.sum(1, keepdims=True), 1e-9); w = np.zeros((len(v), NB))
    for k in range(4): np.add.at(w, (np.arange(len(v)), ji[:, k]), jw[:, k])
    ai = used.index(pr['material']); uv0 = acc(pr['attributes']['TEXCOORD_0']).astype(float); uv = np.mod(uv0, 1.0); uv[(uv0 > 0) & (uv == 0)] = 1.0
    uv = (np.array([ai % GRID, ai // GRID]) + pad + uv * (1 - 2 * pad)) / GRID
    V.append(v); UV.append(uv); W.append(w); F.append(acc(pr['indices']).reshape(-1, 3).astype(np.int64) + off); G.append(np.full(len(v), gi)); off += len(v)
V = np.vstack(V); UV = np.vstack(UV); W = np.vstack(W); F = np.vstack(F); G = np.concatenate(G)

key = np.c_[np.floor(V / CELL).astype(np.int64), G, W.argmax(1)]
_, first, inv = np.unique(key, axis=0, return_index=True, return_inverse=True); inv = inv.reshape(-1); n = len(first)
cnt = np.bincount(inv, minlength=n)[:, None]
P = np.zeros((n, 3)); np.add.at(P, inv, V); P /= cnt
W2 = np.zeros((n, NB)); np.add.at(W2, inv, W); W2 /= cnt
UV2 = UV[first]
T = inv[F]; T = T[(T[:, 0] != T[:, 1]) & (T[:, 1] != T[:, 2]) & (T[:, 0] != T[:, 2])]
T = T[np.unique(np.sort(T, 1), axis=0, return_index=True)[1]]
u = np.unique(T); re_ = -np.ones(n, dtype=np.int64); re_[u] = np.arange(len(u)); P, W2, UV2, T = P[u], W2[u], UV2[u], re_[T]
fn = np.cross(P[T[:, 1]] - P[T[:, 0]], P[T[:, 2]] - P[T[:, 0]]); N = np.zeros_like(P)
for k in range(3): np.add.at(N, T[:, k], fn)
N /= np.maximum(np.linalg.norm(N, axis=1, keepdims=True), 1e-12)
order = np.argsort(-W2, axis=1)[:, :4]; JI = order.astype(np.uint8); JWt = np.take_along_axis(W2, order, 1); JWt /= JWt.sum(1, keepdims=True)
print('verts', len(P), 'tris', len(T), 'height', P[:, 1].max().round(3), 'materials', len(used), 'grid', GRID)

def atlas(kind, size):
    A = Image.new('RGB', (size, size), (0, 0, 0)); c = size // GRID; any_ = False
    for i, mi in enumerate(used):
        m = mats[mi]; pb = m.get('pbrMetallicRoughness', {})
        if kind == 'base':
            t = pb.get('baseColorTexture'); f = pb.get('baseColorFactor', [1, 1, 1, 1])[:3]
            im = img(t['index']) if t else Image.new('RGB', (8, 8), (255, 255, 255))
            if min(f) < .999: im = Image.fromarray((np.asarray(im, dtype=float) * (np.array(f) ** (1 / 2.2))).clip(0, 255).astype('u1'))
        else:
            t = m.get('emissiveTexture'); im = img(t['index']) if t else Image.new('RGB', (8, 8), (0, 0, 0)); any_ = any_ or bool(t)
        A.paste(im.resize((c, c), Image.LANCZOS), ((i % GRID) * c, (i // GRID) * c))
    return A
atlas('base', 1536).save(f'{OUT}/{NAME}_base.jpg', quality=82)
atlas('emis', 768).save(f'{OUT}/{NAME}_emis.jpg', quality=80)

blob = bytearray(); views = []; accs = []
def add(arr, typ, ct, target=None, mm=False):
    while len(blob) % 4: blob.append(0)
    raw = arr.tobytes(); v = dict(buffer=0, byteOffset=len(blob), byteLength=len(raw))
    if target: v['target'] = target
    views.append(v); blob.extend(raw); a = dict(bufferView=len(views) - 1, componentType=ct, count=len(arr), type=typ)
    if mm: a['min'] = arr.min(0).tolist(); a['max'] = arr.max(0).tolist()
    accs.append(a); return len(accs) - 1
aP = add(P.astype('<f4'), 'VEC3', 5126, 34962, True); aN = add(N.astype('<f4'), 'VEC3', 5126, 34962); aU = add(UV2.astype('<f4'), 'VEC2', 5126, 34962)
aJ = add(JI, 'VEC4', 5121, 34962); aW = add(JWt.astype('<f4'), 'VEC4', 5126, 34962); aI = add(T.astype('<u4').reshape(-1), 'SCALAR', 5125, 34963)
ib = np.zeros((NB, 16), dtype='<f4')
for i in range(NB): M = np.eye(4); M[:3, 3] = -JPOS[i]; ib[i] = M.T.reshape(-1)
aB = add(ib, 'MAT4', 5126)
roots = [i for i in range(NB) if PAR[i] < 0]
nodes = [dict(name='Operator', children=[1] + [2 + r for r in roots]), dict(name='Body', mesh=0, skin=0)]
for i in range(NB):
    t = JPOS[i] - (JPOS[PAR[i]] if PAR[i] >= 0 else 0); nd = dict(name=bname(JN[i]), translation=[float(x) for x in t])
    kids = [2 + k for k in range(NB) if PAR[k] == i]
    if kids: nd['children'] = kids
    nodes.append(nd)
ex = j['asset'].get('extras', {})
g = dict(asset=dict(version='2.0', generator='sniper-city pack_operator_rigged', extras=dict(title=ex.get('title'), author=ex.get('author'), license='CC-BY-4.0', changes='props removed, thinned, textures merged')),
         scene=0, scenes=[dict(nodes=[0])], nodes=nodes,
         meshes=[dict(primitives=[dict(attributes=dict(POSITION=aP, NORMAL=aN, TEXCOORD_0=aU, JOINTS_0=aJ, WEIGHTS_0=aW), indices=aI, material=0)])],
         materials=[dict(name=NAME, pbrMetallicRoughness=dict(baseColorFactor=[.6, .6, .6, 1], metallicFactor=0, roughnessFactor=1))],
         skins=[dict(joints=[2 + i for i in range(NB)], inverseBindMatrices=aB, skeleton=2 + roots[0])],
         buffers=[dict(byteLength=len(blob))], bufferViews=views, accessors=accs)
js = json.dumps(g, separators=(',', ':')).encode(); js += b' ' * (-len(js) % 4); blob += b'\0' * (-len(blob) % 4)
glb = b'glTF' + struct.pack('<II', 2, 12 + 8 + len(js) + 8 + len(blob)) + struct.pack('<I', len(js)) + b'JSON' + js + struct.pack('<I', len(blob)) + b'BIN\0' + bytes(blob)
open(f'{OUT}/{NAME}.txt', 'wb').write(base64.b64encode(glb)); print('glb', len(glb), 'bytes')

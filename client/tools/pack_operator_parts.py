#!/usr/bin/env python3
"""Rig the "Army robot" statue (3DWorkbench, CC-BY-4.0, Sketchfab) as an operator.

  python3 client/tools/pack_operator_parts.py ROBOT.glb client/dist op4 [cell_cm]

The download is a robot built from named rigid parts with no skeleton. Each part rides one bone of a Mixamo-named
skeleton placed at the robot's own joints (the head part is split at the neck). Duplicate parts in the file are
dropped, the mesh is thinned with vertex clustering and the five colour maps go into one atlas.
Writes  <name>.txt,  <name>_base.jpg,  <name>_emis.jpg.
"""
import sys, struct, json, base64, io, re, numpy as np
from PIL import Image
SRC, OUT, NAME = sys.argv[1], sys.argv[2], sys.argv[3]
CELL = float(sys.argv[4]) / 100 if len(sys.argv) > 4 else 0.014
GROUND, SCALE = -1.9, 0.159

b = open(SRC, 'rb').read(); cl, _ = struct.unpack('<II', b[12:20]); j = json.loads(b[20:20 + cl]); bin0 = b[20 + cl + 8:]
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
        x, y, z, w = n['rotation']; M = np.array([[1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w), 0], [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w), 0], [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y), 0], [0, 0, 0, 1]]) @ M
    if 'translation' in n: T = np.eye(4); T[:3, 3] = n['translation']; M = T @ M
    return M
parts = []; seen = set()
def walk(i, P, nm):
    n = j['nodes'][i]; M = P @ mat(n); nm = n.get('name') or nm
    if 'mesh' in n:
        for pr in j['meshes'][n['mesh']]['primitives']:
            v = acc(pr['attributes']['POSITION']).astype(float); v = (np.c_[v, np.ones(len(v))] @ M.T)[:, :3]
            sig = (len(v), tuple(np.round(v.min(0), 2)), tuple(np.round(v.max(0), 2)))
            if sig in seen: continue                                           # the file carries every part twice
            seen.add(sig); parts.append((nm, pr['material'], v, acc(pr['attributes']['TEXCOORD_0']).astype(float), acc(pr['indices']).reshape(-1, 3).astype(np.int64)))
    for c in n.get('children', []): walk(c, M, nm)
for r in j['scenes'][0]['nodes']: walk(r, np.eye(4), '')

B = ['ROOT', 'Hips', 'Spine', 'Spine1', 'Spine2', 'Neck', 'Head']
PAR = dict(Hips='ROOT', Spine='Hips', Spine1='Spine', Spine2='Spine1', Neck='Spine2', Head='Neck')
JP = dict(ROOT=(0, GROUND, 0), Hips=(0, 3.4, 0), Spine=(0, 4.2, 0), Spine1=(0, 5.0, 0), Spine2=(0, 5.9, 0), Neck=(0, 7.3, 0), Head=(0, 7.9, .1))
for S, s in (('Left', 1), ('Right', -1)):
    B += [S + x for x in ('Shoulder', 'Arm', 'ForeArm', 'Hand', 'HandMiddle1', 'HandThumb1', 'UpLeg', 'Leg', 'Foot', 'ToeBase')]
    PAR.update({S + 'Shoulder': 'Spine2', S + 'Arm': S + 'Shoulder', S + 'ForeArm': S + 'Arm', S + 'Hand': S + 'ForeArm', S + 'HandMiddle1': S + 'Hand', S + 'HandThumb1': S + 'Hand',
                S + 'UpLeg': 'Hips', S + 'Leg': S + 'UpLeg', S + 'Foot': S + 'Leg', S + 'ToeBase': S + 'Foot'})
    JP.update({S + 'Shoulder': (s * .8, 6.4, -.1), S + 'Arm': (s * 2.2, 6.3, -.1), S + 'ForeArm': (s * 3.4, 5.3, -.05), S + 'Hand': (s * 4.2, 4.4, .3), S + 'HandMiddle1': (s * 4.8, 3.6, .7), S + 'HandThumb1': (s * 4.35, 3.9, 1.1),
               S + 'UpLeg': (s * .75, 3.3, 0), S + 'Leg': (s * 1.2, 1.1, 0), S + 'Foot': (s * 1.2, -1.3, -.1), S + 'ToeBase': (s * 1.2, -1.8, .7)})
JP = {k: np.array(v, dtype=float) for k, v in JP.items()}; BI = {n: i for i, n in enumerate(B)}; NB = len(B)
RULES = [('head_Ind', None), ('BASE_body', 'Spine1'), ('H2texBB', 'Shoulder'), ('midH', 'Arm'), ('midL', 'Arm'), ('midR', 'Arm'), ('pr_rotate', 'ForeArm'), ('mh_rotate', 'ForeArm'), ('kmr', 'Hand'), ('f00', 'Hand'),
         ('legBase', 'UpLeg'), ('leg_rotate2', 'UpLeg'), ('legHeight1', 'UpLeg'), ('leg_rotate3', 'Leg'), ('legHeight2', 'Leg'), ('legEnd', 'Foot')]
mats = j['materials']; used = sorted({p[1] for p in parts}); GRID = int(np.ceil(np.sqrt(len(used)))); pad = .012
V, UV, W, F, G = [], [], [], [], []; off = 0
for gi, (nm, mi, v, uv0, f) in enumerate(parts):
    w = np.zeros((len(v), NB)); bone = next((bn for key, bn in RULES if key in nm), 'x')
    if bone is None: hi = v[:, 1] > 7.35; w[hi, BI['Head']] = 1; w[~hi, BI['Spine2']] = 1
    elif bone == 'x': raise SystemExit('no rule for part ' + nm)
    elif bone == 'Spine1': w[:, BI[bone]] = 1
    else: w[:, BI[('Left' if v[:, 0].mean() > 0 else 'Right') + bone]] = 1
    ai = used.index(mi); uv = np.mod(uv0, 1.0); uv[(uv0 > 0) & (uv == 0)] = 1.0; uv = (np.array([ai % GRID, ai // GRID]) + pad + uv * (1 - 2 * pad)) / GRID
    V.append(v); UV.append(uv); W.append(w); F.append(f + off); G.append(np.full(len(v), gi)); off += len(v)
V = (np.vstack(V) - [0, GROUND, 0]) * SCALE; UV = np.vstack(UV); W = np.vstack(W); F = np.vstack(F); G = np.concatenate(G)
JW = {k: (p - [0, GROUND, 0]) * SCALE for k, p in JP.items()}
key = np.c_[np.floor(V / CELL).astype(np.int64), G, W.argmax(1)]
_, first, inv = np.unique(key, axis=0, return_index=True, return_inverse=True); inv = inv.reshape(-1); n = len(first); cnt = np.bincount(inv, minlength=n)[:, None]
P = np.zeros((n, 3)); np.add.at(P, inv, V); P /= cnt; W2 = np.zeros((n, NB)); np.add.at(W2, inv, W); W2 /= cnt; UV2 = UV[first]
T = inv[F]; T = T[(T[:, 0] != T[:, 1]) & (T[:, 1] != T[:, 2]) & (T[:, 0] != T[:, 2])]; T = T[np.unique(np.sort(T, 1), axis=0, return_index=True)[1]]
u = np.unique(T); re_ = -np.ones(n, dtype=np.int64); re_[u] = np.arange(len(u)); P, W2, UV2, T = P[u], W2[u], UV2[u], re_[T]
fn = np.cross(P[T[:, 1]] - P[T[:, 0]], P[T[:, 2]] - P[T[:, 0]]); N = np.zeros_like(P)
for k in range(3): np.add.at(N, T[:, k], fn)
N /= np.maximum(np.linalg.norm(N, axis=1, keepdims=True), 1e-12)
order = np.argsort(-W2, axis=1)[:, :4]; JI = order.astype(np.uint8); JWt = np.take_along_axis(W2, order, 1); JWt /= JWt.sum(1, keepdims=True)
print('parts', len(parts), 'verts', len(P), 'tris', len(T), 'height', P[:, 1].max().round(3))

def tex(i):
    bv = j['bufferViews'][j['images'][j['textures'][i]['source']]['bufferView']]; o = bv.get('byteOffset', 0); return Image.open(io.BytesIO(bin0[o:o + bv['byteLength']])).convert('RGB')
def atlas(kind, size):
    A = Image.new('RGB', (size, size), (0, 0, 0)); c = size // GRID
    for i, mi in enumerate(used):
        m = mats[mi]; pb = m.get('pbrMetallicRoughness', {}); t = pb.get('baseColorTexture') if kind == 'base' else m.get('emissiveTexture')
        im = tex(t['index']) if t else Image.new('RGB', (8, 8), (150, 150, 150) if kind == 'base' else (0, 0, 0)); A.paste(im.resize((c, c), Image.LANCZOS), ((i % GRID) * c, (i // GRID) * c))
    return A
atlas('base', 1536).save(f'{OUT}/{NAME}_base.jpg', quality=82); atlas('emis', 768).save(f'{OUT}/{NAME}_emis.jpg', quality=80)

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
for i, nm in enumerate(B): M = np.eye(4); M[:3, 3] = -JW[nm]; ib[i] = M.T.reshape(-1)
aB = add(ib, 'MAT4', 5126)
nodes = [dict(name='Operator', children=[1, 2]), dict(name='Body', mesh=0, skin=0)]
for i, nm in enumerate(B):
    par = PAR.get(nm); nd = dict(name='_rootJoint' if nm == 'ROOT' else 'mixamorig:' + nm, translation=[float(x) for x in JW[nm] - (JW[par] if par else 0)])
    kids = [2 + k for k, c in enumerate(B) if PAR.get(c) == nm]
    if kids: nd['children'] = kids
    nodes.append(nd)
ex = j['asset'].get('extras', {})
g = dict(asset=dict(version='2.0', generator='sniper-city pack_operator_parts', extras=dict(title=ex.get('title'), author=ex.get('author'), license='CC-BY-4.0', changes='rigged, thinned, textures merged')),
         scene=0, scenes=[dict(nodes=[0])], nodes=nodes,
         meshes=[dict(primitives=[dict(attributes=dict(POSITION=aP, NORMAL=aN, TEXCOORD_0=aU, JOINTS_0=aJ, WEIGHTS_0=aW), indices=aI, material=0)])],
         materials=[dict(name=NAME, pbrMetallicRoughness=dict(baseColorFactor=[.6, .6, .6, 1], metallicFactor=0, roughnessFactor=1))],
         skins=[dict(joints=[2 + i for i in range(NB)], inverseBindMatrices=aB, skeleton=2)],
         buffers=[dict(byteLength=len(blob))], bufferViews=views, accessors=accs)
js = json.dumps(g, separators=(',', ':')).encode(); js += b' ' * (-len(js) % 4); blob += b'\0' * (-len(blob) % 4)
glb = b'glTF' + struct.pack('<II', 2, 12 + 8 + len(js) + 8 + len(blob)) + struct.pack('<I', len(js)) + b'JSON' + js + struct.pack('<I', len(blob)) + b'BIN\0' + bytes(blob)
open(f'{OUT}/{NAME}.txt', 'wb').write(base64.b64encode(glb)); print('glb', len(glb), 'bytes')

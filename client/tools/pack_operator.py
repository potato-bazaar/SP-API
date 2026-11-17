#!/usr/bin/env python3
"""Turn the "Mech Robotic Police" statue (CHM, CC-BY-4.0, Sketchfab) into a playable operator.

  python3 client/tools/pack_operator.py MECH.glb client/dist [cell_cm]

The download has no skeleton and holds its own gun. This script
  - drops the gun, stands the figure on y=0 facing +z at the height of the stock sniper,
  - builds a Mixamo-named skeleton in the statue's own pose and weights every vertex to it
    (soft across elbows, knees and the spine; armour plates, tubes and the head ride one bone each),
  - thins the mesh with vertex clustering and packs the seven colour maps (and glow maps) into one atlas each,
  - writes  op1.txt (a binary glTF as base64, like models.txt),  op1_base.jpg  and  op1_emis.jpg.
The game's rig code (class Ac) reads everything else from the bind pose, so no animation data is needed.
"""
import sys, struct, json, base64, io, numpy as np
from PIL import Image
from scipy.sparse import coo_matrix
from scipy.sparse.csgraph import connected_components

SRC, OUT = sys.argv[1], sys.argv[2]
CELL = float(sys.argv[3]) / 100 if len(sys.argv) > 3 else 0.013
GUN = {'BigPart', 'BigPart2', 'Glass', 'Trigger', 'Tube', 'SmallPart'}
GROUND, SCALE = -1.162, 0.817           # raw units -> metres; the Head joint lands where the stock sniper's is

def load(p):
    b = open(p, 'rb').read(); cl, _ = struct.unpack('<II', b[12:20]); j = json.loads(b[20:20 + cl]); bin0 = b[20 + cl + 8:]
    def acc(i):
        a = j['accessors'][i]; bv = j['bufferViews'][a['bufferView']]; n = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4}[a['type']]
        dt = {5120: 'i1', 5121: 'u1', 5122: '<i2', 5123: '<u2', 5125: '<u4', 5126: '<f4'}[a['componentType']]
        off = bv.get('byteOffset', 0) + a.get('byteOffset', 0); st = bv.get('byteStride', 0); isz = np.dtype(dt).itemsize * n
        if st and st != isz:
            raw = np.frombuffer(bin0, dtype='u1', count=st * (a['count'] - 1) + isz, offset=off)
            return raw[np.arange(a['count'])[:, None] * st + np.arange(isz)[None, :]].copy().view(dt).reshape(a['count'], n)
        return np.frombuffer(bin0, dtype=dt, count=a['count'] * n, offset=off).reshape(a['count'], n)
    def img(i):
        bv = j['bufferViews'][j['images'][j['textures'][i]['source']]['bufferView']]; o = bv.get('byteOffset', 0)
        return Image.open(io.BytesIO(bin0[o:o + bv['byteLength']])).convert('RGB')
    out = []
    def walk(i, P):
        n = j['nodes'][i]; M = P @ (np.array(n['matrix'], dtype=float).reshape(4, 4).T if 'matrix' in n else np.eye(4))
        if 'mesh' in n:
            for pr in j['meshes'][n['mesh']]['primitives']:
                v = acc(pr['attributes']['POSITION']).astype(float); v = (np.c_[v, np.ones(len(v))] @ M.T)[:, :3]
                out.append(dict(mat=pr['material'], v=v, uv=acc(pr['attributes']['TEXCOORD_0']).astype(float), f=acc(pr['indices']).reshape(-1, 3).astype(np.int64)))
        for c in n.get('children', []): walk(c, M)
    for r in j['scenes'][0]['nodes']: walk(r, np.eye(4))
    return j, out, img

def comps(v, f, tol=1e-4):
    key = np.round(v / tol).astype(np.int64); _, inv = np.unique(key, axis=0, return_inverse=True); inv = inv.reshape(-1)
    g = inv[f]; n = inv.max() + 1
    A = coo_matrix((np.ones(len(g) * 3), (np.r_[g[:, 0], g[:, 1], g[:, 2]], np.r_[g[:, 1], g[:, 2], g[:, 0]])), shape=(n, n))
    return connected_components(A, directed=False)[1][inv]

# ---- the skeleton, in the statue's raw coordinates (x = its left, y up, z = front) ----
B = ['Hips', 'Spine', 'Spine1', 'Spine2', 'Neck', 'Head',
     'LeftShoulder', 'LeftArm', 'LeftForeArm', 'LeftHand', 'LeftHandMiddle1', 'LeftHandThumb1',
     'RightShoulder', 'RightArm', 'RightForeArm', 'RightHand', 'RightHandMiddle1', 'RightHandThumb1',
     'LeftUpLeg', 'LeftLeg', 'LeftFoot', 'LeftToeBase', 'RightUpLeg', 'RightLeg', 'RightFoot', 'RightToeBase', 'ROOT']   # ROOT: the rig code expects a plain bone above the hips
PAR = dict(Hips='ROOT', Spine='Hips', Spine1='Spine', Spine2='Spine1', Neck='Spine2', Head='Neck',
           LeftShoulder='Spine2', LeftArm='LeftShoulder', LeftForeArm='LeftArm', LeftHand='LeftForeArm', LeftHandMiddle1='LeftHand', LeftHandThumb1='LeftHand',
           RightShoulder='Spine2', RightArm='RightShoulder', RightForeArm='RightArm', RightHand='RightForeArm', RightHandMiddle1='RightHand', RightHandThumb1='RightHand',
           LeftUpLeg='Hips', LeftLeg='LeftUpLeg', LeftFoot='LeftLeg', LeftToeBase='LeftFoot', RightUpLeg='Hips', RightLeg='RightUpLeg', RightFoot='RightLeg', RightToeBase='RightFoot')
JP = dict(Hips=(0, .03, -.02), Spine=(0, .13, -.02), Spine1=(0, .27, -.02), Spine2=(0, .42, -.02), Neck=(0, .62, -.02), Head=(0, .75, 0),
          LeftShoulder=(.08, .58, -.04), LeftArm=(.23, .55, -.09), LeftForeArm=(.275, .29, -.15), LeftHand=(.29, .16, .14), LeftHandMiddle1=(.265, .14, .23), LeftHandThumb1=(.34, .15, .18),
          RightShoulder=(-.08, .58, -.04), RightArm=(-.27, .53, -.06), RightForeArm=(-.36, .31, -.05), RightHand=(-.24, .23, .15), RightHandMiddle1=(-.16, .19, .23), RightHandThumb1=(-.2, .26, .2),
          LeftUpLeg=(.11, -.02, -.01), LeftLeg=(.165, -.47, -.01), LeftFoot=(.215, -.92, -.075), LeftToeBase=(.22, -1.1, .08),
          RightUpLeg=(-.11, -.02, -.01), RightLeg=(-.165, -.47, -.01), RightFoot=(-.215, -.92, -.075), RightToeBase=(-.22, -1.1, .08))
JP = {k: np.array(v, dtype=float) for k, v in JP.items()}; JP['ROOT'] = np.array([0, GROUND, 0.])
BI = {n: i for i, n in enumerate(B)}
sm = lambda x: np.clip(x, 0, 1) ** 2 * (3 - 2 * np.clip(x, 0, 1))

def chain(v, names, ends, r):
    """soft weights down a chain of bones: at each joint the weight crosses over along the bisector of the two bones"""
    J = [JP[n] for n in names] + [np.array(ends, dtype=float)]
    W = np.zeros((len(v), len(B))); keep = np.ones(len(v))
    for k in range(len(names)):
        if k + 1 < len(names):
            a = J[k + 1] - J[k]; b = J[k + 2] - J[k + 1]; ax = a / np.linalg.norm(a) + b / np.linalg.norm(b); ax /= np.linalg.norm(ax)
            s = sm(((v - J[k + 1]) @ ax) / (2 * r) + .5)
        else: s = np.zeros(len(v))
        W[:, BI[names[k]]] = keep * (1 - s); keep = keep * s
    return W

ARM = lambda S: (([S + 'Arm', S + 'ForeArm', S + 'Hand']), JP[S + 'HandMiddle1'] * 2 - JP[S + 'Hand'], .045)
LEG = lambda S: (([S + 'UpLeg', S + 'Leg', S + 'Foot']), JP[S + 'ToeBase'], .06)
def spine(v):
    W = chain(v, ['Hips', 'Spine', 'Spine1', 'Spine2', 'Neck', 'Head'], (0, 1.0, 0), .05); return W
def legs(v):
    W = np.zeros((len(v), len(B)))
    for S, m in (('Left', v[:, 0] >= 0), ('Right', v[:, 0] < 0)):
        if not m.any(): continue
        w = chain(v[m], *LEG(S)); d = JP[S + 'Leg'] - JP[S + 'UpLeg']; d /= np.linalg.norm(d)
        s = sm(((v[m] - JP[S + 'UpLeg']) @ d + .02) / .13)             # the pelvis stays with the hips
        w *= s[:, None]; w[:, BI['Hips']] += 1 - s; W[m] = w
    return W

SEG = [('Hips', (0, -.08, -.02), (0, .1, -.02), .2), ('Spine', JP['Spine'], JP['Spine1'], .2), ('Spine1', JP['Spine1'], JP['Spine2'], .2), ('Spine2', JP['Spine2'], JP['Neck'], .2),
       ('Neck', JP['Neck'], JP['Head'], .07), ('Head', JP['Head'], (0, 1.0, .02), .12)]
for S in ('Left', 'Right'):
    SEG += [(S + 'Arm', JP[S + 'Arm'], JP[S + 'ForeArm'], .075), (S + 'ForeArm', JP[S + 'ForeArm'], JP[S + 'Hand'], .065), (S + 'Hand', JP[S + 'Hand'], JP[S + 'HandMiddle1'] * 2 - JP[S + 'Hand'], .05),
            (S + 'UpLeg', JP[S + 'UpLeg'], JP[S + 'Leg'], .11), (S + 'Leg', JP[S + 'Leg'], JP[S + 'Foot'], .09), (S + 'Foot', JP[S + 'Foot'], JP[S + 'ToeBase'], .08)]
def nearest(c):
    best, bd = None, 1e9
    for n, a, b, r in SEG:
        a = np.array(a, dtype=float); b = np.array(b, dtype=float); ab = b - a; t = np.clip((c - a) @ ab / (ab @ ab), 0, 1); d = np.linalg.norm(c - a - ab * t) - r
        if d < bd: best, bd = n, d
    return best
TORSO = {'Hips', 'Spine', 'Spine1', 'Spine2'}

j, parts, img = load(SRC)
mats = j['materials']
ATLAS = ['Armours', 'BulletProof', 'Exoskeleton', 'Head_B', 'Head_noB', 'Legs', 'UpperBody', 'Nurbs2', 'Nurbs']
V, UV, W, F, G = [], [], [], [], []; off = 0; grp = 0
for p in parts:
    name = mats[p['mat']]['name']
    if name in GUN: continue
    v, f = p['v'], p['f']; lab = comps(v, f); w = np.zeros((len(v), len(B))); g = np.zeros(len(v), dtype=np.int64)
    for c in np.unique(lab):
        m = lab == c; vv = v[m]; ext = (vv.max(0) - vv.min(0)).max(); cen = (vv.max(0) + vv.min(0)) / 2; n = nearest(cen); big = m.sum() > 1500
        if name == 'Legs': w[m] = legs(vv)
        elif name == 'UpperBody' and big and abs(vv[:, 0].mean()) > .15: w[m] = chain(vv, *ARM('Left' if vv[:, 0].mean() > 0 else 'Right'))
        elif n in TORSO and (big or ext > .22): w[m] = spine(vv)
        elif n[-3:] in ('Arm',) and ext > .3: w[m] = chain(vv, *ARM(n[:4] if n.startswith('Left') else 'Right'))
        elif (n.endswith('UpLeg') or n.endswith('Leg')) and ext > .5: w[m] = legs(vv)
        else: w[m, BI[n]] = 1
        g[m] = grp; grp += 1
    ai = ATLAS.index(name); cx, cy = ai % 3, ai // 3; pad = .012
    uv = np.mod(p['uv'], 1.0); uv[p['uv'] == 1.0] = 1.0
    uv = (np.array([cx, cy]) + pad + uv * (1 - 2 * pad)) / 3
    V.append(v); UV.append(uv); W.append(w); F.append(f + off); G.append(g); off += len(v)
V = np.vstack(V); UV = np.vstack(UV); W = np.vstack(W); F = np.vstack(F); G = np.concatenate(G)
V = (V - [0, GROUND, 0]) * SCALE
JW = {k: (p - [0, GROUND, 0]) * SCALE for k, p in JP.items()}

# ---- thin it: one vertex per grid cell within each shell and dominant bone ----
key = np.c_[np.floor(V / CELL).astype(np.int64), G, W.argmax(1)]
_, first, inv = np.unique(key, axis=0, return_index=True, return_inverse=True); inv = inv.reshape(-1); n = len(first)
cnt = np.bincount(inv, minlength=n)[:, None]
P = np.zeros((n, 3)); np.add.at(P, inv, V); P /= cnt
W2 = np.zeros((n, len(B))); np.add.at(W2, inv, W); W2 /= cnt
UV2 = UV[first]
T = inv[F]; T = T[(T[:, 0] != T[:, 1]) & (T[:, 1] != T[:, 2]) & (T[:, 0] != T[:, 2])]
T = T[np.unique(np.sort(T, 1), axis=0, return_index=True)[1]]
used = np.unique(T); re = -np.ones(n, dtype=np.int64); re[used] = np.arange(len(used)); P, W2, UV2, T = P[used], W2[used], UV2[used], re[T]
fn = np.cross(P[T[:, 1]] - P[T[:, 0]], P[T[:, 2]] - P[T[:, 0]]); N = np.zeros_like(P)
for k in range(3): np.add.at(N, T[:, k], fn)
N /= np.maximum(np.linalg.norm(N, axis=1, keepdims=True), 1e-12)
order = np.argsort(-W2, axis=1)[:, :4]; JI = order.astype(np.uint8); JWt = np.take_along_axis(W2, order, 1); JWt /= JWt.sum(1, keepdims=True)
print('verts', len(P), 'tris', len(T), 'height', P[:, 1].max().round(3))

# ---- atlases ----
def atlas(kind, size):
    A = Image.new('RGB', (size, size), (0, 0, 0)); c = size // 3
    for i, nm in enumerate(ATLAS):
        m = next(x for x in mats if x['name'] == nm); pb = m['pbrMetallicRoughness']
        if kind == 'base':
            t = pb.get('baseColorTexture'); im = img(t['index']) if t else Image.new('RGB', (8, 8), tuple(int(255 * (x ** (1 / 2.2))) for x in pb.get('baseColorFactor', [.5, .5, .5])[:3]))
        else:
            t = m.get('emissiveTexture'); im = img(t['index']) if t else Image.new('RGB', (8, 8), (0, 0, 0))
        A.paste(im.resize((c, c), Image.LANCZOS), ((i % 3) * c, (i // 3) * c))
    return A
atlas('base', 1536).save(f'{OUT}/op1_base.jpg', quality=82)
atlas('emis', 768).save(f'{OUT}/op1_emis.jpg', quality=80)

# ---- binary glTF ----
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
ibm = np.zeros((len(B), 16), dtype='<f4')
for i, nm in enumerate(B): M = np.eye(4); M[:3, 3] = -JW[nm]; ibm[i] = M.T.reshape(-1)
aB = add(ibm, 'MAT4', 5126)
nodes = [dict(name='Operator', children=[1, 2 + BI['ROOT']]), dict(name='Body', mesh=0, skin=0)]
for i, nm in enumerate(B):
    par = PAR.get(nm); t = JW[nm] - (JW[par] if par else 0)
    nodes.append(dict(name='_rootJoint' if nm == 'ROOT' else 'mixamorig:' + nm, translation=[float(x) for x in t]))
for i, nm in enumerate(B):
    kids = [2 + k for k, c in enumerate(B) if PAR.get(c) == nm]
    if kids: nodes[2 + i]['children'] = kids
g = dict(asset=dict(version='2.0', generator='sniper-city pack_operator', extras=dict(title='Mech Robotic Police 3D Model w/ Scifi Gun', author='CHM (https://sketchfab.com/CHMConcept)', license='CC-BY-4.0', changes='gun removed, thinned, rigged')),
         scene=0, scenes=[dict(nodes=[0])], nodes=nodes,
         meshes=[dict(primitives=[dict(attributes=dict(POSITION=aP, NORMAL=aN, TEXCOORD_0=aU, JOINTS_0=aJ, WEIGHTS_0=aW), indices=aI, material=0)])],
         materials=[dict(name='op1', pbrMetallicRoughness=dict(baseColorFactor=[.6, .6, .6, 1], metallicFactor=0, roughnessFactor=1))],
         skins=[dict(joints=[2 + i for i in range(len(B))], inverseBindMatrices=aB, skeleton=2 + BI['ROOT'])],
         buffers=[dict(byteLength=len(blob))], bufferViews=views, accessors=accs)
js = json.dumps(g, separators=(',', ':')).encode(); js += b' ' * (-len(js) % 4); blob += b'\0' * (-len(blob) % 4)
glb = b'glTF' + struct.pack('<II', 2, 12 + 8 + len(js) + 8 + len(blob)) + struct.pack('<I', len(js)) + b'JSON' + js + struct.pack('<I', len(blob)) + b'BIN\0' + bytes(blob)
open(f'{OUT}/op1.txt', 'wb').write(base64.b64encode(glb))
print('glb', len(glb), 'bytes')

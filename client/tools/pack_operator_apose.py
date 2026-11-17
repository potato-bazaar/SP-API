#!/usr/bin/env python3
"""Rig the "Female Character" statue (little.bucket, CC-BY-NC-SA-4.0, Sketchfab) as an operator.

  python3 client/tools/pack_operator_apose.py FEMALE.glb client/dist op3

The download is an A-posed figure with no skeleton. This builds a Mixamo-named skeleton in that pose and weights
each shell: legs and arms down their bone chains, torso up the spine, hair / horns / headset on the head,
the coat as cloth between spine and forearms. One texture, no thinning (25k triangles as shipped).
Writes  <name>.txt,  <name>_base.jpg,  <name>_emis.jpg. Adapted model: same licence as the original (BY-NC-SA).
"""
import sys, struct, json, base64, io, numpy as np
from PIL import Image
from scipy.sparse import coo_matrix
from scipy.sparse.csgraph import connected_components
SRC, OUT, NAME = sys.argv[1], sys.argv[2], sys.argv[3]
GROUND, SCALE = -1.03, 0.693

b = open(SRC, 'rb').read(); cl, _ = struct.unpack('<II', b[12:20]); j = json.loads(b[20:20 + cl]); bin0 = b[20 + cl + 8:]
def acc(i):
    a = j['accessors'][i]; bv = j['bufferViews'][a['bufferView']]; n = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4}[a['type']]
    dt = {5121: 'u1', 5123: '<u2', 5125: '<u4', 5126: '<f4'}[a['componentType']]
    off = bv.get('byteOffset', 0) + a.get('byteOffset', 0); st = bv.get('byteStride', 0); isz = np.dtype(dt).itemsize * n
    if st and st != isz:
        raw = np.frombuffer(bin0, dtype='u1', count=st * (a['count'] - 1) + isz, offset=off)
        return raw[np.arange(a['count'])[:, None] * st + np.arange(isz)[None, :]].copy().view(dt).reshape(a['count'], n)
    return np.frombuffer(bin0, dtype=dt, count=a['count'] * n, offset=off).reshape(a['count'], n)
parts = []
def walk(i, P):
    n = j['nodes'][i]; M = P @ (np.array(n['matrix'], dtype=float).reshape(4, 4).T if 'matrix' in n else np.eye(4))
    if 'mesh' in n:
        for pr in j['meshes'][n['mesh']]['primitives']:
            v = acc(pr['attributes']['POSITION']).astype(float); v = (np.c_[v, np.ones(len(v))] @ M.T)[:, :3]
            parts.append((v, acc(pr['attributes']['TEXCOORD_0']).astype(float), acc(pr['indices']).reshape(-1, 3).astype(np.int64)))
    for c in n.get('children', []): walk(c, M)
for r in j['scenes'][0]['nodes']: walk(r, np.eye(4))
def comps(v, f, tol=1e-4):
    key = np.round(v / tol).astype(np.int64); _, inv = np.unique(key, axis=0, return_inverse=True); inv = inv.reshape(-1); g = inv[f]; n = inv.max() + 1
    A = coo_matrix((np.ones(len(g) * 3), (np.r_[g[:, 0], g[:, 1], g[:, 2]], np.r_[g[:, 1], g[:, 2], g[:, 0]])), shape=(n, n))
    return connected_components(A, directed=False)[1][inv]

B = ['ROOT', 'Hips', 'Spine', 'Spine1', 'Spine2', 'Neck', 'Head']
PAR = dict(Hips='ROOT', Spine='Hips', Spine1='Spine', Spine2='Spine1', Neck='Spine2', Head='Neck')
JP = dict(ROOT=(0, GROUND, 0), Hips=(0, .5, -.14), Spine=(0, .62, -.14), Spine1=(0, .76, -.13), Spine2=(0, .9, -.12), Neck=(0, 1.12, -.1), Head=(0, 1.22, -.08))
for S, s in (('Left', 1), ('Right', -1)):
    B += [S + x for x in ('Shoulder', 'Arm', 'ForeArm', 'Hand', 'HandMiddle1', 'HandThumb1', 'UpLeg', 'Leg', 'Foot', 'ToeBase')]
    PAR.update({S + 'Shoulder': 'Spine2', S + 'Arm': S + 'Shoulder', S + 'ForeArm': S + 'Arm', S + 'Hand': S + 'ForeArm', S + 'HandMiddle1': S + 'Hand', S + 'HandThumb1': S + 'Hand',
                S + 'UpLeg': 'Hips', S + 'Leg': S + 'UpLeg', S + 'Foot': S + 'Leg', S + 'ToeBase': S + 'Foot'})
    JP.update({S + 'Shoulder': (s * .07, 1.06, -.13), S + 'Arm': (s * .27, 1.06, -.15), S + 'ForeArm': (s * .56, .79, -.2), S + 'Hand': (s * .84, .5, -.2), S + 'HandMiddle1': (s * .92, .42, -.2), S + 'HandThumb1': (s * .87, .47, -.12),
               S + 'UpLeg': (s * .13, .42, -.14), S + 'Leg': (s * .27, -.15, -.2), S + 'Foot': (s * .4, -.82, -.31), S + 'ToeBase': (s * .42, -1.0, -.1)})
JP = {k: np.array(v, dtype=float) for k, v in JP.items()}; BI = {n: i for i, n in enumerate(B)}; NB = len(B)
sm = lambda x: np.clip(x, 0, 1) ** 2 * (3 - 2 * np.clip(x, 0, 1))
def chain(v, names, end, r):
    J = [JP[n] for n in names] + [np.array(end, dtype=float)]; W = np.zeros((len(v), NB)); keep = np.ones(len(v))
    for k in range(len(names)):
        if k + 1 < len(names):
            a = J[k + 1] - J[k]; c = J[k + 2] - J[k + 1]; ax = a / np.linalg.norm(a) + c / np.linalg.norm(c); ax /= np.linalg.norm(ax); s = sm(((v - J[k + 1]) @ ax) / (2 * r) + .5)
        else: s = np.zeros(len(v))
        W[:, BI[names[k]]] = keep * (1 - s); keep = keep * s
    return W
spine = lambda v: chain(v, ['Hips', 'Spine', 'Spine1', 'Spine2', 'Neck', 'Head'], (0, 1.5, -.08), .05)
def arm(v, S): return chain(v, [S + 'Arm', S + 'ForeArm', S + 'Hand'], JP[S + 'HandMiddle1'] * 2 - JP[S + 'Hand'], .06)
def leg(v, S):
    w = chain(v, [S + 'UpLeg', S + 'Leg', S + 'Foot'], JP[S + 'ToeBase'], .07); d = JP[S + 'Leg'] - JP[S + 'UpLeg']; d /= np.linalg.norm(d)
    s = sm(((v - JP[S + 'UpLeg']) @ d + .03) / .16); w *= s[:, None]; w[:, BI['Hips']] += 1 - s; return w
def sides(v, fn):
    W = np.zeros((len(v), NB))
    for S, m in (('Left', v[:, 0] >= 0), ('Right', v[:, 0] < 0)):
        if m.any(): W[m] = fn(v[m], S)
    return W
def body_arms(v, x0, x1):               # spine in the middle, arms outside, a soft hand-over across the shoulder
    k = sm((np.abs(v[:, 0]) - x0) / (x1 - x0))[:, None]; return spine(v) * (1 - k) + sides(v, arm) * k

V, UV, W, F = [], [], [], []; off = 0
for v, uv, f in parts:
    lab = comps(v, f); w = np.zeros((len(v), NB))
    for c in np.unique(lab):
        m = lab == c; vv = v[m]; lo, hi = vv.min(0), vv.max(0); cx = (lo[0] + hi[0]) / 2; wide = hi[0] - lo[0]
        if abs(cx) > .75: w[m, BI[('Left' if cx > 0 else 'Right') + 'Hand']] = 1                                  # hands
        elif wide > 1.2 and lo[1] < .3:                                                                             # the coat: cloth
            ww = body_arms(vv, .3, .6); low = sm((.5 - vv[:, 1]) / .25)[:, None] * (np.abs(vv[:, 0]) < .62)[:, None]; hip = np.zeros_like(ww); hip[:, BI['Hips']] = 1; w[m] = ww * (1 - low) + hip * low
        elif wide > 1.0: w[m] = body_arms(vv, .2, .3)                                                              # torso with both upper arms
        elif .42 < abs(cx) < .75 and hi[1] < .95 and lo[1] > .3: w[m] = sides(vv, arm)                             # sleeves, gloves
        elif lo[1] < 0 and hi[1] < .5 and (lo[0] > 0 or hi[0] < 0): w[m] = sides(vv, leg)                           # a leg
        elif lo[1] > 1.08 and abs(cx) < .3: w[m, BI['Head']] = 1                                                    # hair, horns, face parts
        elif .35 < abs(cx) < .7 and lo[1] > .9: w[m, BI['Spine2']] = 1                                               # the floating headset pods
        elif hi[1] < .66: w[m, BI['Hips']] = 1                                                                      # shorts, belt, charms
        else: w[m] = spine(vv)
    V.append(v); UV.append(uv); W.append(w); F.append(f + off); off += len(v)
V = (np.vstack(V) - [0, GROUND, 0]) * SCALE; UV = np.vstack(UV); W = np.vstack(W); F = np.vstack(F); W /= W.sum(1, keepdims=True)
JW = {k: (p - [0, GROUND, 0]) * SCALE for k, p in JP.items()}
fn = np.cross(V[F[:, 1]] - V[F[:, 0]], V[F[:, 2]] - V[F[:, 0]])
key = np.round(V / 1e-4).astype(np.int64); _, inv = np.unique(key, axis=0, return_inverse=True); inv = inv.reshape(-1)     # smooth normals across UV seams
NS = np.zeros((inv.max() + 1, 3))
for k in range(3): np.add.at(NS, inv[F[:, k]], fn)
N = NS[inv]; N /= np.maximum(np.linalg.norm(N, axis=1, keepdims=True), 1e-12)
order = np.argsort(-W, axis=1)[:, :4]; JI = order.astype(np.uint8); JWt = np.take_along_axis(W, order, 1); JWt /= JWt.sum(1, keepdims=True)
print('verts', len(V), 'tris', len(F), 'height', V[:, 1].max().round(3))

def tex(i):
    bv = j['bufferViews'][j['images'][j['textures'][i]['source']]['bufferView']]; o = bv.get('byteOffset', 0); return Image.open(io.BytesIO(bin0[o:o + bv['byteLength']])).convert('RGB')
m0 = j['materials'][0]
tex(m0['pbrMetallicRoughness']['baseColorTexture']['index']).resize((1024, 1024), Image.LANCZOS).save(f'{OUT}/{NAME}_base.jpg', quality=84)
tex(m0['emissiveTexture']['index']).resize((256, 256), Image.LANCZOS).save(f'{OUT}/{NAME}_emis.jpg', quality=80)

blob = bytearray(); views = []; accs = []
def add(arr, typ, ct, target=None, mm=False):
    while len(blob) % 4: blob.append(0)
    raw = arr.tobytes(); v = dict(buffer=0, byteOffset=len(blob), byteLength=len(raw))
    if target: v['target'] = target
    views.append(v); blob.extend(raw); a = dict(bufferView=len(views) - 1, componentType=ct, count=len(arr), type=typ)
    if mm: a['min'] = arr.min(0).tolist(); a['max'] = arr.max(0).tolist()
    accs.append(a); return len(accs) - 1
aP = add(V.astype('<f4'), 'VEC3', 5126, 34962, True); aN = add(N.astype('<f4'), 'VEC3', 5126, 34962); aU = add(UV.astype('<f4'), 'VEC2', 5126, 34962)
aJ = add(JI, 'VEC4', 5121, 34962); aW = add(JWt.astype('<f4'), 'VEC4', 5126, 34962); aI = add(F.astype('<u4').reshape(-1), 'SCALAR', 5125, 34963)
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
g = dict(asset=dict(version='2.0', generator='sniper-city pack_operator_apose', extras=dict(title=ex.get('title'), author=ex.get('author'), license='CC-BY-NC-SA-4.0', changes='rigged, textures reduced')),
         scene=0, scenes=[dict(nodes=[0])], nodes=nodes,
         meshes=[dict(primitives=[dict(attributes=dict(POSITION=aP, NORMAL=aN, TEXCOORD_0=aU, JOINTS_0=aJ, WEIGHTS_0=aW), indices=aI, material=0)])],
         materials=[dict(name=NAME, doubleSided=True, pbrMetallicRoughness=dict(baseColorFactor=[.6, .6, .6, 1], metallicFactor=0, roughnessFactor=1))],
         skins=[dict(joints=[2 + i for i in range(NB)], inverseBindMatrices=aB, skeleton=2)],
         buffers=[dict(byteLength=len(blob))], bufferViews=views, accessors=accs)
js = json.dumps(g, separators=(',', ':')).encode(); js += b' ' * (-len(js) % 4); blob += b'\0' * (-len(blob) % 4)
glb = b'glTF' + struct.pack('<II', 2, 12 + 8 + len(js) + 8 + len(blob)) + struct.pack('<I', len(js)) + b'JSON' + js + struct.pack('<I', len(blob)) + b'BIN\0' + bytes(blob)
open(f'{OUT}/{NAME}.txt', 'wb').write(base64.b64encode(glb)); print('glb', len(glb), 'bytes')

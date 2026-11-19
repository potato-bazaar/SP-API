#!/usr/bin/env python3
# The ladder model -> client/dist/ladder.txt (geometry) + ladder_base.jpg (its colour map, 512 px).
#   python3 -I client/tools/pack_ladder.py <ladder_metallic_370_cm.glb> client/dist
# Source: "Ladder metallic 370 cm" by adventurer on Sketchfab, CC BY 4.0. The model stands 3.62 m tall, its rails 0.56 m apart,
# its back (the wall brackets) toward -z and a hook over the top that rests on the roof edge.
# Triangles are ordered: the body first (everything below CUT), then the hook, so one buffer serves both a plain
# section (drawn up to `body`) and the top section (drawn whole). Positions int16 over the box, normals int8, uv uint16.
import sys, os, json, struct, base64, io
import numpy as np
from PIL import Image
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
CUT = 3.36

def load(path):
    d = open(path, 'rb').read(); n = struct.unpack('<I', d[12:16])[0]; j = json.loads(d[20:20 + n]); off = 20 + n
    bl = struct.unpack('<I', d[off:off + 4])[0]; B = d[off + 8:off + 8 + bl]
    def acc(i):
        a = j['accessors'][i]; bv = j['bufferViews'][a['bufferView']]; o = bv.get('byteOffset', 0) + a.get('byteOffset', 0)
        dt = {5126: np.float32, 5125: np.uint32, 5123: np.uint16}[a['componentType']]; k = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4}[a['type']]
        st = bv.get('byteStride'); isz = np.dtype(dt).itemsize
        if not st or st == k * isz: return np.frombuffer(B, dt, count=a['count'] * k, offset=o).reshape(-1, k).copy()
        raw = np.frombuffer(B, np.uint8, count=st * (a['count'] - 1) + k * isz, offset=o)
        return np.stack([np.frombuffer(raw[r * st:r * st + k * isz].tobytes(), dt) for r in range(a['count'])])
    nodes = j['nodes']; parent = {}
    for i, nd in enumerate(nodes):
        for c in nd.get('children', []): parent[c] = i
    mi = [i for i, nd in enumerate(nodes) if 'mesh' in nd][0]; M = np.eye(4); i = mi
    while i is not None:
        nd = nodes[i]; L = np.array(nd['matrix'], float).reshape(4, 4).T if 'matrix' in nd else np.eye(4)
        if 'translation' in nd: L[:3, 3] = nd['translation']
        M = L @ M; i = parent.get(i)
    p = j['meshes'][0]['primitives'][0]
    P = acc(p['attributes']['POSITION']).astype(float); N = acc(p['attributes']['NORMAL']).astype(float); UV = acc(p['attributes']['TEXCOORD_0']).astype(float); I = acc(p['indices']).ravel().astype(np.int64)
    P = (np.c_[P, np.ones(len(P))] @ M.T)[:, :3]; N = N @ M[:3, :3].T; N /= np.linalg.norm(N, axis=1, keepdims=True) + 1e-9
    tex = j['materials'][0]['pbrMetallicRoughness']['baseColorTexture']['index']; im = j['images'][j['textures'][tex]['source']]; bv = j['bufferViews'][im['bufferView']]
    return P, N, UV, I, B[bv.get('byteOffset', 0):bv.get('byteOffset', 0) + bv['byteLength']]

def main(src, dist):
    P, N, UV, I, img = load(src)
    P[:, 1] -= P[:, 1].min()
    T = I.reshape(-1, 3); top = (P[T, 1] > CUT).any(1); T = np.r_[T[~top], T[top]]
    lo, hi = P.min(0), P.max(0); q = np.round((P - lo) / (hi - lo) * 65535 - 32768).astype('<i2')
    nq = np.clip(np.round(N * 127), -127, 127).astype('i1'); nq = np.c_[nq, np.zeros(len(nq), 'i1')]
    uq = np.clip(np.round(np.mod(UV, 1.0) * 65535), 0, 65535).astype('<u2') if UV.max() <= 1.0001 and UV.min() >= -1e-4 else None
    if uq is None: raise SystemExit('uv out of 0..1')
    head = {'nv': len(P), 'nt': len(T), 'body': int((~top).sum()), 'min': lo.round(5).tolist(), 'max': hi.round(5).tolist(), 'cut': CUT,
            'credit': 'Ladder metallic 370 cm by adventurer (Sketchfab), CC BY 4.0'}
    hb = json.dumps(head).encode(); hb += b' ' * ((4 - len(hb) % 4) % 4)
    body = b'SCLD' + struct.pack('<I', len(hb)) + hb + q.tobytes() + nq.tobytes() + uq.tobytes() + T.astype('<u2').tobytes()
    open(os.path.join(dist, 'ladder.txt'), 'wb').write(base64.b64encode(body))
    Image.open(io.BytesIO(img)).convert('RGB').resize((512, 512), Image.LANCZOS).save(os.path.join(dist, 'ladder_base.jpg'), quality=84)
    print('ladder.txt', os.path.getsize(os.path.join(dist, 'ladder.txt')), 'tris', len(T), 'body', head['body'], 'verts', len(P), 'box', head['min'], head['max'])

if __name__ == '__main__': main(sys.argv[1], sys.argv[2])

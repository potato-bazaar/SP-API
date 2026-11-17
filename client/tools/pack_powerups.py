#!/usr/bin/env python3
"""Pack the power-up models (attack drone, strike plane, missile) into client/dist/models3.txt.

  python3 client/tools/pack_powerups.py DRONE.glb PLANE.glb MISSILE.glb client/dist/models3.txt

Reads binary glTF, bakes node transforms, drops textures, thins the plane and the missile with vertex
clustering, and writes: "SCPU" u32 jsonLen json payload, base64 (the same text wrapping as models2.txt).
Each part is int16 positions (quantised to the part's box) + uint16 indices; the client flat-shades them.
"""
import sys, struct, json, base64, numpy as np

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
    def mat(n):
        if 'matrix' in n: return np.array(n['matrix'], dtype=float).reshape(4, 4).T
        M = np.eye(4)
        if 'scale' in n: M = np.diag(list(n['scale']) + [1]) @ M
        if 'rotation' in n:
            x, y, z, w = n['rotation']
            M = np.array([[1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w), 0], [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w), 0], [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y), 0], [0, 0, 0, 1]]) @ M
        if 'translation' in n: T = np.eye(4); T[:3, 3] = n['translation']; M = T @ M
        return M
    out = []
    def walk(i, P, path):
        n = j['nodes'][i]; M = P @ mat(n); path = path + [n.get('name') or '']
        if 'mesh' in n:
            for pr in j['meshes'][n['mesh']]['primitives']:
                v = acc(pr['attributes']['POSITION']).astype(float); v = (np.c_[v, np.ones(len(v))] @ M.T)[:, :3]
                f = acc(pr['indices']).reshape(-1, 3).astype(np.int64) if 'indices' in pr else np.arange(len(v)).reshape(-1, 3)
                if np.linalg.det(M[:3, :3]) < 0: f = f[:, ::-1]
                out.append(('/'.join(path), v, f))
        for c in n.get('children', []): walk(c, M, path)
    for r in j['scenes'][j.get('scene', 0)]['nodes']: walk(r, np.eye(4), [])
    return out

def merge(parts):
    V, F, o = [], [], 0
    for _, v, f in parts: V.append(v); F.append(f + o); o += len(v)
    return np.vstack(V), np.vstack(F)

def weld(V, F, cell):
    """vertex clustering: one vertex (the mean) per grid cell; triangles that collapse are dropped"""
    key = np.floor((V - V.min(0)) / cell).astype(np.int64); _, inv = np.unique(key, axis=0, return_inverse=True); inv = inv.reshape(-1)
    n = inv.max() + 1; W = np.zeros((n, 3)); np.add.at(W, inv, V); W /= np.bincount(inv, minlength=n)[:, None]
    G = inv[F]; G = G[(G[:, 0] != G[:, 1]) & (G[:, 1] != G[:, 2]) & (G[:, 0] != G[:, 2])]
    G = G[np.unique(np.sort(G, 1), axis=0, return_index=True)[1]]
    used = np.unique(G); remap = -np.ones(n, dtype=np.int64); remap[used] = np.arange(len(used)); return W[used], remap[G]

def thin(V, F, target):
    lo, hi = 1e-5, (V.max(0) - V.min(0)).max() / 4
    for _ in range(26):
        mid = (lo * hi) ** 0.5; W, G = weld(V, F, mid)
        if len(G) > target: lo = mid
        else: hi = mid
    return weld(V, F, hi)

def part(name, V, F, color, pivot=None, spin=0):
    assert len(V) < 65536, name
    mn, mx = V.min(0), V.max(0); ext = np.maximum(mx - mn, 1e-6); q = np.round((V - mn) / ext * 65535 - 32768).astype('<i2')
    return {'name': name, 'nv': len(V), 'ni': F.size, 'min': [round(float(x), 4) for x in mn], 'ext': [round(float(x), 4) for x in ext], 'color': color,
            'pivot': None if pivot is None else [round(float(x), 4) for x in pivot], 'spin': spin}, q.tobytes() + F.astype('<u2').tobytes()

def main(drone, plane, missile, out):
    models, blobs = {}, []
    def add(model, parts):
        ms = []
        for meta, blob in parts: meta['off'] = sum(len(b) for b in blobs); blobs.append(blob + b'\0' * (-len(blob) % 4)); ms.append(meta)
        models[model] = ms
    # --- drone: nose towards -Z, four fans spin about +Y
    P = load(drone); fans = [p for p in P if '/Fan' in p[0]]; body = [p for p in P if '/Fan' not in p[0]]
    V, F = merge(P); c = (V.min(0) + V.max(0)) / 2; c[1] = V.min(0)[1]
    ps = []; bv, bf = merge(body); bv, bf = weld(bv - c, bf, 1e-5); ps.append(part('body', bv, bf, 0x8a8f96))
    for k, (n, v, f) in enumerate(fans): v2, f2 = weld(v - c, f, 1e-5); ps.append(part('fan%d' % k, v2, f2, 0xd0d4d8, pivot=(v2.min(0) + v2.max(0)) / 2, spin=(1 if k % 2 else -1)))
    add('drone', ps); print('drone', sum(p[0]['ni'] // 3 for p in ps), 'tris', (V.max(0) - V.min(0)).round(2))
    # --- plane: skip the undercarriage and the cockpit inside; ~5k triangles
    P = [p for p in load(plane) if not any(k in p[0] for k in ('Gear', 'Instruments', 'Seat', 'Cockpit', 'Pilot', 'Stick'))]
    V, F = merge(P); c = (V.min(0) + V.max(0)) / 2; V, F = thin(V - c, F, 5200); add('plane', [part('hull', V, F, 0x5c6168)]); print('plane', len(F), 'tris', (V.max(0) - V.min(0)).round(2))
    # --- missile: long axis onto -Z (nose first), centred, ~1.4k triangles
    V, F = merge(load(missile)); ax = int(np.argmax(V.max(0) - V.min(0))); c = (V.min(0) + V.max(0)) / 2; V = V - c
    lo = V[V[:, ax] < np.percentile(V[:, ax], 12)]; hi = V[V[:, ax] > np.percentile(V[:, ax], 88)]; rad = lambda S: np.delete(np.abs(S), ax, 1).max()
    nose_pos = rad(hi) < rad(lo)                      # the finned end is the wide one
    order = [k for k in range(3) if k != ax] + [ax]; V = V[:, order]; flip = False
    if nose_pos: V[:, 2] *= -1; flip = not flip       # nose to -Z
    if np.linalg.det(np.eye(3)[order]) < 0: flip = not flip
    if flip: F = F[:, ::-1]
    V, F = thin(V, F, 1400); add('missile', [part('body', V, F, 0xe6e6e2)]); print('missile', len(F), 'tris', (V.max(0) - V.min(0)).round(2), 'axis', ax, 'nose+', bool(nose_pos))
    head = json.dumps({'v': 1, 'models': models}, separators=(',', ':')).encode(); head += b' ' * (-len(head) % 4)
    raw = b'SCPU' + struct.pack('<I', len(head)) + head + b''.join(blobs)
    open(out, 'wb').write(base64.b64encode(raw)); print('wrote', out, len(raw) // 1024, 'KB raw,', len(raw) * 4 // 3 // 1024, 'KB as text')

if __name__ == '__main__': main(*sys.argv[1:5])

#!/usr/bin/env python3
# GRAPHITE: the CheyTac M200 Intervention model as a rifle skin.  python3 -I client/tools/pack_graphite.py <cheytac.glb> client/dist
# Source: "CHEYTAC M200 INTERVENTION" by JaumWF (Sketchfab), CC BY 4.0. 785 k triangles and a desert-tan finish.
#  1. Simplified to about 30 k triangles by quadric clustering (one vertex per small cell, placed where it best fits
#     the surfaces that met there); a cell never joins vertices across a texture seam or a hard edge.
#  2. Turned so the barrel points down -z, the scope up, the grip at the origin's end.
#  3. Repainted: a new colour map per material from the model's own (its wear, edges and engraving kept as light and
#     shade): graphite carbon weave on the body, black gunmetal on the metal, red stripes, rings and marks; the scope
#     black with red rings. Normal maps kept (512 px).
# Writes graphite.txt ("SCGR", u32 json length, json, then per part: int16 positions, int8 normals, uint16 uv, uint32
# indices) and graphite_c0.jpg, graphite_c1.jpg (colour), graphite_n0.jpg, graphite_n1.jpg (normals).
import sys, os, io, json, struct, base64
import numpy as np
from PIL import Image, ImageFilter

def load(path):
    d = open(path, 'rb').read(); n = struct.unpack('<I', d[12:16])[0]; j = json.loads(d[20:20 + n]); off = 20 + n
    bl = struct.unpack('<I', d[off:off + 4])[0]; B = d[off + 8:off + 8 + bl]
    def acc(i):
        a = j['accessors'][i]; bv = j['bufferViews'][a['bufferView']]; o = bv.get('byteOffset', 0) + a.get('byteOffset', 0)
        dt = {5126: np.float32, 5125: np.uint32, 5123: np.uint16}[a['componentType']]; k = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4}[a['type']]
        st = bv.get('byteStride'); isz = np.dtype(dt).itemsize
        if not st or st == k * isz: return np.frombuffer(B, dt, count=a['count'] * k, offset=o).reshape(-1, k).astype(np.float64 if dt == np.float32 else np.int64)
        raw = np.frombuffer(B, np.uint8, count=st * a['count'], offset=o).reshape(a['count'], st)
        return np.frombuffer(raw[:, :k * isz].copy().tobytes(), dt).reshape(-1, k).astype(np.float64 if dt == np.float32 else np.int64)
    nodes = j['nodes']; parent = {}
    for i, nd in enumerate(nodes):
        for c in nd.get('children', []): parent[c] = i
    def world(i):
        M = np.eye(4)
        while i is not None:
            nd = nodes[i]; L = np.array(nd['matrix'], float).reshape(4, 4).T if 'matrix' in nd else np.eye(4)
            if 'translation' in nd: L[:3, 3] = nd['translation']
            M = L @ M; i = parent.get(i)
        return M
    parts = {}
    for i, nd in enumerate(nodes):
        if 'mesh' not in nd: continue
        M = world(i)
        for p in j['meshes'][nd['mesh']]['primitives']:
            P = acc(p['attributes']['POSITION']); N = acc(p['attributes']['NORMAL']); UV = acc(p['attributes']['TEXCOORD_0']); I = acc(p['indices']).ravel()
            P = (np.c_[P, np.ones(len(P))] @ M.T)[:, :3]; N = N @ np.linalg.inv(M[:3, :3]);   # normals take the inverse transpose (row vectors) N /= np.linalg.norm(N, axis=1, keepdims=True) + 1e-12
            m = p['material']; L = parts.setdefault(m, [])
            L.append((P, N, UV, I))
    imgs = []
    for im in j['images']:
        bv = j['bufferViews'][im['bufferView']]; imgs.append(Image.open(io.BytesIO(B[bv.get('byteOffset', 0):bv.get('byteOffset', 0) + bv['byteLength']])).convert('RGB'))
    mats = []
    for mt in j['materials']:
        pb = mt['pbrMetallicRoughness']; tex = lambda t: j['textures'][t['index']]['source']
        mats.append({'base': imgs[tex(pb['baseColorTexture'])], 'mr': imgs[tex(pb['metallicRoughnessTexture'])], 'nrm': imgs[tex(mt['normalTexture'])]})
    out = {}
    for m, L in parts.items():
        o = 0; Ps, Ns, Us, Is = [], [], [], []
        for P, N, UV, I in L: Ps.append(P); Ns.append(N); Us.append(UV); Is.append(I + o); o += len(P)
        out[m] = (np.concatenate(Ps), np.concatenate(Ns), np.concatenate(Us), np.concatenate(Is).reshape(-1, 3))
    return out, mats

def simplify(P, N, UV, F, cell, uvq=48):
    """quadric clustering: vertices in one cell (and on the same side of any texture seam or hard edge) become one,
    placed at the point that best fits the planes of the faces that met there"""
    q = np.floor((P - P.min(0)) / cell).astype(np.int64)
    ax = np.argmax(np.abs(N), 1); nb = ax * 2 + (N[np.arange(len(N)), ax] > 0)
    uq = np.floor(np.mod(UV, 1.0) * uvq).astype(np.int64)
    key = ((q[:, 0] * 4096 + q[:, 1]) * 4096 + q[:, 2]) * 6 + nb
    key = key * (uvq * uvq) + uq[:, 0] * uvq + uq[:, 1]
    uk, cid = np.unique(key, return_inverse=True); n = len(uk)
    # face planes -> quadrics at their corners
    a, b, c = P[F[:, 0]], P[F[:, 1]], P[F[:, 2]]; fn = np.cross(b - a, c - a); ar = np.linalg.norm(fn, axis=1) + 1e-20; fn /= ar[:, None]
    d = -(fn * a).sum(1); w = ar * 0.5
    A = np.zeros((n, 3, 3)); bb = np.zeros((n, 3)); cnt = np.zeros(n); S = np.zeros((n, 3))
    nn = fn[:, :, None] * fn[:, None, :] * w[:, None, None]; nd = fn * (d * w)[:, None]
    for k in range(3):
        cc = cid[F[:, k]]; np.add.at(A, cc, nn); np.add.at(bb, cc, nd)
    np.add.at(cnt, cid, 1); np.add.at(S, cid, P); mean = S / cnt[:, None]
    lo = np.full((n, 3), np.inf); hi = np.full((n, 3), -np.inf); np.minimum.at(lo, cid, P); np.maximum.at(hi, cid, P)
    tr = np.trace(A, axis1=1, axis2=2); lam = (tr * 1e-3 + 1e-12)[:, None, None]
    X = np.linalg.solve(A + lam * np.eye(3), (-bb + lam[:, :, 0] * mean)[:, :, None])[:, :, 0]
    X = np.clip(X, lo - cell * 0.1, hi + cell * 0.1)
    UVo = np.zeros((n, 2)); np.add.at(UVo, cid, UV); UVo /= cnt[:, None]
    G = cid[F]; ok = (G[:, 0] != G[:, 1]) & (G[:, 1] != G[:, 2]) & (G[:, 0] != G[:, 2]); G = G[ok]
    G = np.unique(np.sort(G, 1), axis=0, return_index=True)[1]; G = cid[F][ok][np.sort(G)]
    # vertex normals of the new mesh (area weighted), drop unused vertices
    a, b, c = X[G[:, 0]], X[G[:, 1]], X[G[:, 2]]; fn2 = np.cross(b - a, c - a); No = np.zeros((n, 3))
    for k in range(3): np.add.at(No, G[:, k], fn2)
    # keep the original facing (the source faces' winding can disagree with ours after clustering)
    Nm = np.zeros((n, 3)); np.add.at(Nm, cid, N); flip = (No * Nm).sum(1) < 0; No[flip] *= -1
    No /= np.linalg.norm(No, axis=1, keepdims=True) + 1e-12
    used = np.unique(G); remap = -np.ones(n, np.int64); remap[used] = np.arange(len(used))
    return X[used], No[used], UVo[used], remap[G]

def livery(base, mr, scope):
    """the GRAPHITE finish, painted in the model's own uv space so its wear and engraving carry through"""
    S = 1024; b = np.asarray(base.resize((S, S), Image.LANCZOS)).astype(np.float32) / 255; m = np.asarray(mr.resize((S, S), Image.LANCZOS)).astype(np.float32) / 255
    lum = b @ np.array([.299, .587, .114], np.float32); det = lum / (np.median(lum) + 1e-3)   # the model's own light and shade, 1 = average
    metal = m[:, :, 2] > .5
    y, x = np.mgrid[0:S, 0:S].astype(np.float32)
    # carbon weave: two crossed tows, offset every other cell
    t = 10.0; cx = np.floor(x / t); cy = np.floor(y / t); chk = ((cx + cy) % 2).astype(np.float32)
    fx = (x % t) / t; fy = (y % t) / t; tow = np.where(chk > .5, np.sin(np.pi * fx), np.sin(np.pi * fy)) ** .6
    weave = .022 + .026 * tow * (0.75 + .25 * chk)
    rng = np.random.default_rng(7)
    def noise(sc, oct=4):
        acc = np.zeros((S, S), np.float32); amp = 1; tot = 0
        for o in range(oct):
            g = rng.random((int(S / sc * 2 ** o) + 2,) * 2).astype(np.float32); im = Image.fromarray((g * 255).astype('u1')).resize((S, S), Image.BICUBIC)
            acc += np.asarray(im, np.float32) / 255 * amp; tot += amp; amp *= .5
        return acc / tot
    n1 = noise(160); n2 = noise(64, 3)
    # red: flowing tiger stripes on the body, a thin red line along every edge the model already marks as a bevel
    stripe = np.clip((np.abs(np.sin((x * .011 + y * .004 + n1 * 9.0))) - .93) * 30, 0, 1) * (n2 > .42)
    edge = np.asarray(Image.fromarray((np.clip(det, 0, 2) * 120).astype('u1')).filter(ImageFilter.FIND_EDGES), np.float32) / 255
    edge = np.clip((edge - .3) * 3, 0, 1)
    # a hex grid etched into the larger metal plates
    hx = x / 18.0; hy = y / 15.6; r = np.minimum(np.abs(np.sin(hx * np.pi + (np.floor(hy) % 2) * np.pi / 2)), np.abs(np.sin(hy * np.pi))) < .09
    gun = np.where(metal, .012 + .008 * n2, weave)[..., None] * np.array([1, 1, 1.06], np.float32)
    col = gun * np.clip(det, .35, 1.8)[..., None]
    red = np.array([.55, .012, .02], np.float32)
    if scope:   # the scope and mount: black, red rings where the model has round parts, red edges
        rings = np.clip((np.abs(np.sin(n1 * 40)) - .985) * 40, 0, 1)
        col = col * .8; k = np.clip(edge * .5 + rings * .45 + stripe * .9, 0, 1)
    else:
        k = np.clip(stripe * (~metal) * .95 + edge * .4 + r * metal * .3, 0, 1)
    col = col * (1 - k[..., None]) + red * np.clip(det, .5, 1.4)[..., None] * k[..., None]
    out = np.clip(col, 0, 1) ** (1 / 2.2)
    return Image.fromarray((out * 255).astype('u1'))

def main(src, dist):
    parts, mats = load(src)
    allP = np.concatenate([parts[m][0] for m in parts]); lo, hi = allP.min(0), allP.max(0)
    print('model box', lo.round(3), hi.round(3))
    out = []
    for m in sorted(parts):
        P, N, UV, F = parts[m]; target = 22000 if m == 0 else 9000
        cell = (hi - lo).max() / 220
        for it in range(14):
            X, No, U, G = simplify(P, N, UV, F, cell)
            if len(G) <= target * 1.08: break
            cell *= (len(G) / target) ** .5 * 1.02
        print('part', m, len(F), '->', len(G), 'cell', round(cell, 4))
        out.append([X, No, U, G])
    # orientation: the long axis -> z, barrel (the thin end) toward -z, the scope (the far side of the bore) up +y
    allX = np.concatenate([o[0] for o in out]); ext = allX.max(0) - allX.min(0); la = int(np.argmax(ext))
    sc_ = [o[0] for o in out][1]   # part 1 is the scope and its mount
    others = [k for k in range(3) if k != la]
    up = max(others, key=lambda k: abs(sc_[:, k].mean() - allX[:, k].mean()) / (ext[k] + 1e-9)); upsign = np.sign(sc_[:, up].mean() - allX[:, up].mean())
    side = [k for k in others if k != up][0]
    t = allX[:, la]; L = ext[la]; thin = lambda s: np.ptp(allX[(t - t.min()) * s - (L if s < 0 else 0) > -.15 * L * (s < 0) + 0, up]) if False else None
    endA = allX[t < t.min() + .12 * L]; endB = allX[t > t.max() - .12 * L]
    hA = np.ptp(endA[:, up]); hB = np.ptp(endB[:, up]); barrel_low = hA < hB   # the barrel end is the slimmer one
    R = np.zeros((3, 3)); R[2, la] = 1 if barrel_low else -1; R[1, up] = upsign; R[0, side] = 1
    if np.linalg.det(R) < 0: R[0, side] = -1
    for o in out: o[0] = o[0] @ R.T; o[1] = o[1] @ R.T
    if np.linalg.det(R) < 0:
        for o in out: o[3] = o[3][:, ::-1]
    allX = np.concatenate([o[0] for o in out]); mn, mx = allX.min(0), allX.max(0)
    for o in out: o[0] = o[0] - (mn + mx) / 2   # centred; the game fits it to the rifle it replaces
    allX = np.concatenate([o[0] for o in out]); mn, mx = allX.min(0), allX.max(0); print('box after turn', mn.round(3), mx.round(3))
    head = {'parts': [], 'min': mn.round(5).tolist(), 'max': mx.round(5).tolist(), 'credit': 'CHEYTAC M200 INTERVENTION by JaumWF (Sketchfab), CC BY 4.0'}
    blob = b''
    for k, (X, No, U, G) in enumerate(out):
        q = np.round((X - mn) / (mx - mn) * 65535 - 32768).astype('<i2'); nq = np.c_[np.clip(np.round(No * 127), -127, 127).astype('i1'), np.zeros(len(No), 'i1')]
        uq = np.clip(np.round(np.mod(U, 1.0) * 65535), 0, 65535).astype('<u2'); ix = G.astype('<u4')
        head['parts'].append({'nv': len(X), 'nt': len(G), 'off': len(blob)})
        blob += q.tobytes() + nq.tobytes() + uq.tobytes() + ix.tobytes()
    hb = json.dumps(head).encode(); hb += b' ' * ((4 - len(hb) % 4) % 4)
    open(os.path.join(dist, 'graphite.txt'), 'wb').write(base64.b64encode(b'SCGR' + struct.pack('<I', len(hb)) + hb + blob))
    for k, mt in enumerate(mats):
        livery(mt['base'], mt['mr'], k == 1).save(os.path.join(dist, 'graphite_c%d.jpg' % k), quality=88)
        mt['nrm'].resize((512, 512), Image.LANCZOS).save(os.path.join(dist, 'graphite_n%d.jpg' % k), quality=90)
    print('graphite.txt', os.path.getsize(os.path.join(dist, 'graphite.txt')), head['parts'])

if __name__ == '__main__': main(sys.argv[1], sys.argv[2])

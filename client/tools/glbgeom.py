# minimal GLB geometry reader: returns world-space triangles per top-level named object
import json, struct, numpy as np
CT={5120:np.int8,5121:np.uint8,5122:np.int16,5123:np.uint16,5125:np.uint32,5126:np.float32}
NC={'SCALAR':1,'VEC2':2,'VEC3':3,'VEC4':4,'MAT4':16}
class GLB:
    def __init__(s,path):
        with open(path,'rb') as f:
            f.read(12); clen,_=struct.unpack('<I4s', f.read(8)); s.js=json.loads(f.read(clen))
            blen,_=struct.unpack('<I4s', f.read(8)); s.bin=f.read(blen)
    def acc(s,i):
        a=s.js['accessors'][i]; bv=s.js['bufferViews'][a['bufferView']]; dt=CT[a['componentType']]; nc=NC[a['type']]
        off=bv.get('byteOffset',0)+a.get('byteOffset',0); stride=bv.get('byteStride',0); isz=np.dtype(dt).itemsize*nc
        if stride and stride!=isz:
            raw=np.frombuffer(s.bin,dtype=np.uint8,count=stride*(a['count']-1)+isz,offset=off)
            idx=(np.arange(a['count'])[:,None]*stride+np.arange(isz)[None,:]).ravel()
            arr=np.frombuffer(raw[idx].tobytes(),dtype=dt).reshape(a['count'],nc)
        else:
            arr=np.frombuffer(s.bin,dtype=dt,count=a['count']*nc,offset=off).reshape(a['count'],nc)
        if a.get('normalized'):
            arr=arr.astype(np.float32)/{np.int8:127,np.uint8:255,np.int16:32767,np.uint16:65535}[dt]
        return arr
    def local(s,n):
        if 'matrix' in n: return np.array(n['matrix'],dtype=float).reshape(4,4).T
        T=np.eye(4); R=np.eye(4); S=np.eye(4)
        if 'translation' in n: T[:3,3]=n['translation']
        if 'rotation' in n:
            x,y,z,w=n['rotation']
            R[:3,:3]=[[1-2*(y*y+z*z),2*(x*y-z*w),2*(x*z+y*w)],[2*(x*y+z*w),1-2*(x*x+z*z),2*(y*z-x*w)],[2*(x*z-y*w),2*(y*z+x*w),1-2*(x*x+y*y)]]
        if 'scale' in n: S[0,0],S[1,1],S[2,2]=n['scale']
        return T@R@S
    def world_mats(s):
        W={}
        def rec(i,M):
            W[i]=M@s.local(s.js['nodes'][i])
            for c in s.js['nodes'][i].get('children',[]): rec(c,W[i])
        for r in s.js['scenes'][s.js.get('scene',0)]['nodes']: rec(r,np.eye(4))
        return W
    def find(s,name):
        return [i for i,n in enumerate(s.js['nodes']) if n.get('name')==name]
    def tris_under(s,i,W=None):
        """yield (matname, positions Nx3 world, indices Mx3) for all prims under node i"""
        W=W or s.world_mats(); out=[]
        def rec(j):
            n=s.js['nodes'][j]
            if 'mesh' in n:
                for p in s.js['meshes'][n['mesh']]['primitives']:
                    P=s.acc(p['attributes']['POSITION']).astype(float); P=(W[j][:3,:3]@P.T).T+W[j][:3,3]
                    I=s.acc(p['indices']).reshape(-1,3).astype(np.int64) if 'indices' in p else np.arange(len(P)).reshape(-1,3)
                    out.append((s.js['materials'][p['material']]['name'] if 'material' in p else None,P,I))
            for c in n.get('children',[]): rec(c)
        rec(i); return out

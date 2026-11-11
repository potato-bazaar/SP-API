import sys, json, struct, os
from PIL import Image
import io
path, out = sys.argv[1], sys.argv[2]
with open(path,'rb') as f:
    f.read(12); clen,_=struct.unpack('<I4s', f.read(8)); js=json.loads(f.read(clen))
    blen,_=struct.unpack('<I4s', f.read(8)); binstart=f.tell()
    # which textures used by which material slots
    use={}
    for mi,m in enumerate(js['materials']):
        def reg(t,slot):
            if t is None: return
            img=js['textures'][t['index']]['source']; use.setdefault(img,[]).append(f"{m.get('name')}:{slot}")
        p=m.get('pbrMetallicRoughness',{})
        reg(p.get('baseColorTexture'),'base'); reg(p.get('metallicRoughnessTexture'),'mr'); reg(m.get('normalTexture'),'nrm'); reg(m.get('occlusionTexture'),'occ'); reg(m.get('emissiveTexture'),'emis')
        for en,e in m.get('extensions',{}).items():
            for k,v in e.items():
                if isinstance(v,dict) and 'index' in v: reg(v,en.replace('KHR_materials_','')+'.'+k)
    for i,im in enumerate(js['images']):
        bv=js['bufferViews'][im['bufferView']]
        f.seek(binstart+bv.get('byteOffset',0)); data=f.read(bv['byteLength'])
        ext='png' if im['mimeType']=='image/png' else 'jpg'
        fn=os.path.join(out,f"img{i:02d}.{ext}"); open(fn,'wb').write(data)
        pim=Image.open(io.BytesIO(data))
        print(i, pim.size, pim.mode, len(data), use.get(i))

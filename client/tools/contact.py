import sys, glob, os
from PIL import Image, ImageDraw
d=sys.argv[1]; out=sys.argv[2]; sel=sys.argv[3].split(',') if len(sys.argv)>3 else None
files=sorted(glob.glob(os.path.join(d,'img*')))
if sel: files=[f for f in files if any(os.path.basename(f).startswith('img'+s+'.') for s in sel)]
n=len(files); cols=6 if n>12 else 4; cell=330 if cols==4 else 230
rows=(n+cols-1)//cols
sheet=Image.new('RGB',(cols*cell,rows*cell),(40,40,40)); dr=ImageDraw.Draw(sheet)
for k,f in enumerate(files):
    im=Image.open(f).convert('RGBA'); bg=Image.new('RGBA',im.size,(90,20,90,255)); bg.alpha_composite(im); im=bg.convert('RGB'); im.thumbnail((cell-6,cell-6))
    x,y=(k%cols)*cell+3,(k//cols)*cell+3; sheet.paste(im,(x,y)); dr.rectangle([x,y,x+60,y+14],fill=(0,0,0)); dr.text((x+2,y+1),os.path.basename(f)[:8],fill=(255,255,0))
sheet.save(out,quality=80)

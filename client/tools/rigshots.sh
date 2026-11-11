#!/bin/bash
# usage: tools/rigshots.sh name "query"   -> 3 views montage
name=$1; q=$2
for v in "a:1.5,1.5,1.9,0,1.1,0.1" "b:-2.3,1.3,0.3,0,1.05,0.1" "c:1.7,1.9,-1.4,0,1.1,0.2"; do node tools/shot.cjs shots/rig_${name}_${v%%:*}.jpg "rigtest=1&$q&cam=${v#*:}" 700 700 2>&1 | grep -E "ERR|pageerror|\[error\]" ; done
python3 -c "
from PIL import Image
ims=[Image.open('shots/rig_${name}_%s.jpg'%k) for k in 'abc']; s=Image.new('RGB',(2100,700)); [s.paste(im,(i*700,0)) for i,im in enumerate(ims)]; s.save('shots/rig_${name}.jpg',quality=85)"

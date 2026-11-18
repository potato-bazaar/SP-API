#!/usr/bin/env python3
# Applies the Loop City client changes to the bundle. The client is not rebuilt from source (see README), so the
# changes are exact-string edits of client/dist/game.js plus the readable modules in this folder, pasted in whole.
# Run from anywhere:  python3 client/tools/loop/patch_game.py   (rewrites client/dist/game.js from BASE_COMMIT)
import re,os,sys,subprocess
HERE=os.path.dirname(os.path.abspath(__file__)); REPO=os.path.abspath(os.path.join(HERE,'..','..','..'))
BASE_COMMIT='7af5e92'   # game.js as it was before the loop work; everything below is applied on top of it
s=subprocess.check_output(['git','-C',REPO,'show',BASE_COMMIT+':client/dist/game.js']).decode()
def R(a,b,n=1):
    global s
    assert s.count(a)==n,(s.count(a),a[:90]); s=s.replace(a,b)
# ---- boot
R('async function sE(){og();','async function sE(){og();RINGBOOT();')
R('let a=await nA(n,o,s);','let a=await(SCLOOP?nL:nA)(n,o,s);')
R('return{kit:ag(o),pack:XS(a),','return{kit:SCLOOP?RK.parsePack(o):ag(o),pack:XS(a),')
R('this.arena=new au(e.arena,i.bvh)','this.arena=RINGA(new au(e.arena,i.bvh),i)')
R('MENU(l),VOICE(l),','MENU(l),VOICE(l),RMENU(l),RING(l),')
# ---- no kill plane at street height on the loop (the street is where you walk); the void below the hull still kills
R('this.pos.y<9.5){','this.pos.y<(n.ring?-25:9.5)){')
# ---- no roof lamps on the loop
R('this.lamps=[];for(let e of t.roofs){let i=bA(t,e);i&&this.lamps.push({i:e.i,pos:i})}','this.lamps=[];if(!t.ring)for(let e of t.roofs){let i=bA(t,e);i&&this.lamps.push({i:e.i,pos:i})}')
# ---- world-space shaders bend with the ring
R('varying float vSeed; varying float vPx;\nvoid main() {\n  vec4 va = viewMatrix * vec4(aA, 1.0), vb = viewMatrix * vec4(aB, 1.0);','varying float vSeed; varying float vPx;\n#include <sc_roll>\nvoid main() {\n  vec4 va = viewMatrix * vec4(scRoll(aA), 1.0), vb = viewMatrix * vec4(scRoll(aB), 1.0);')
R('varying vec4 vD; varying vec3 vWp;\nvoid main() { vec4 mv = viewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; vD = aD; vWp = position;','varying vec4 vD; varying vec3 vWp;\n#include <sc_roll>\nvoid main() { vec4 mv = viewMatrix * vec4(scRoll(position), 1.0); gl_Position = projectionMatrix * mv; vD = aD; vWp = position;')
R('varying vec3 vWp; void main(){ vUv = uv; vD = aD; vWp = position; gl_Position = projectionMatrix * viewMatrix * vec4(position, 1.0); }",','varying vec3 vWp;\\n#include <sc_roll>\\nvoid main(){ vUv = uv; vD = aD; vWp = position; gl_Position = projectionMatrix * viewMatrix * vec4(scRoll(position), 1.0); }",')
R('varying float vA; void main(){ vec4 mv = viewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; float d = -mv.z; float w = fract(aU * 3.0 - uTime * 0.9);','varying float vA;\\n#include <sc_roll>\\nvoid main(){ vec4 mv = viewMatrix * vec4(scRoll(position), 1.0); gl_Position = projectionMatrix * mv; float d = -mv.z; float w = fract(aU * 3.0 - uTime * 0.9);')
# ---- the halo's shape belongs to the zone object (ZD), not to each caller
R('Math.hypot(a.x-i.cx,a.z-i.cz)<s','ZD(i,a.x,a.z,s)<s')
R('_safeAt(t,e,i){return Math.hypot(t-this.g.zone.cx,e-this.g.zone.cz)<i-1.2}','_safeAt(t,e,i){return ZD(this.g.zone,t,e,i)<i-1.2}')
R('Math.hypot(h.pos.x-i.cx,h.pos.z-i.cz)>i.r','ZD(i,h.pos.x,h.pos.z)>i.r')
R('Math.hypot(this.player.pos.x-e.cx,this.player.pos.z-e.cz)>e.r','ZD(e,this.player.pos.x,this.player.pos.z)>e.r')
R('Math.hypot(i.pos.x-this.zone.cx,i.pos.z-this.zone.cz)>this.zone.r','ZD(this.zone,i.pos.x,i.pos.z)>this.zone.r')
R('let f=Math.hypot(re.x,re.z);d+=(Math.hypot(n.x,n.z)-f)*.5*(e.inward||.3)','let f=ZD(this.g.zone,re.x,re.z,0);d+=(ZD(this.g.zone,n.x,n.z,0)-f)*.5*(e.inward||.3)')
# ---- bots: where a target is, seen from here (a straight line through the wheel), not where it is on the chart
R('let d=h.chest(re),f=d.x-n.x,p=d.y-n.y,g=d.z-n.z,m=Math.hypot(f,p,g);u.d=m;','let d=h.chest(re),RV=i.rel(RQ,n,d),f=RV.x,p=RV.y,g=RV.z,m=Math.hypot(f,p,g);u.d=m;')
R('e.distanceTo(this.pos)>170||','this.g.arena.dist(e,this.pos)>170||')
R('_aimAt(t,e,i){let n=this.eye(_s),s=t.x-n.x,o=t.y-n.y,a=t.z-n.z,','_aimAt(t,e,i){let n=this.eye(_s),RV=this.g.arena.rel(RQ,n,t),s=RV.x,o=RV.y,a=RV.z,')
R('let o=s.distanceTo(e),a=!this.firstShotAt.has(t);','let o=i.arena.dist(s,e),a=!this.firstShotAt.has(t);')
R('h=qM.copy(e).sub(s).normalize();re.set(BA()*l,BA()*l,0);','h=i.arena.rel(qM,s,e).normalize();re.set(BA()*l,BA()*l,0);')
# ---- shots: the ray is straight in the shooter's frame; each body is tested in its own frame; what is kept is chart positions
R('function yu(r,t,e,i,n){let s=null;for(let o of r){if(o===n||!o.alive)continue;let a=o.pos.x-t.x,c=o.pos.y+1-t.y,l=o.pos.z-t.z,h=a*e.x+c*e.y+l*e.z;if(!(h<-2||h>i+2||a*a+c*c+l*l-h*h>9)){o.hitShapes(En);for(let d=0;d<En.length;d+=8){let f=zM(t.x,t.y,t.z,e.x,e.y,e.z,',
  'function yu(r,t,e,i,n,ar){let s=null,T0=t,E0=e,RG=ar&&ar.ring;for(let o of r){if(o===n||!o.alive)continue;RG&&(ar.rayTo(o.pos.x,T0,E0,RYO,RYD),t=RYO,e=RYD);let a=o.pos.x-t.x,c=o.pos.y+1-t.y,l=o.pos.z-t.z,h=a*e.x+c*e.y+l*e.z;if(!(h<-2||h>i+2||a*a+c*c+l*l-h*h>9)){o.hitShapes(En);for(let d=0;d<En.length;d+=8){let f=zM(t.x,t.y,t.z,e.x,e.y,e.z,')
R('u=yu(r.actors,e,i,h,t),d=u?u.t:h;Ni.copy(e).addScaledVector(i,d),t.shots++','u=yu(r.actors,e,i,h,t,o),d=u?u.t:h;Ni.copy(e).addScaledVector(i,d);let iH=o.dirAt(new I,e,i,o.unsee(Ni,Ni,e.x));t.shots++')
R('let A=u?null:Cp(l,i);','let A=u?null:Cp(l,iH);')
R('c.impact(p.distanceTo(r.listenerPos),r.panOf(p)),e=A.o,i=A.d,','c.impact(o.dist(p,r.listenerPos),r.panOf(p)),e=A.o,i=A.d,')
R('u=yu(r.actors,e,i,h,t),d=u?u.t:h,Ni.copy(e).addScaledVector(i,d),f&&f.shotWorld(t,e,Ni))','u=yu(r.actors,e,i,h,t,o),d=u?u.t:h,Ni.copy(e).addScaledVector(i,d),o.dirAt(iH,e,i,o.unsee(Ni,Ni,e.x)),f&&f.shotWorld(t,e,Ni))')
R('_=t===y?0:m.distanceTo(r.listenerPos),','_=t===y?0:o.dist(m,r.listenerPos),')
R('Au.copy(r.listenerPos).sub(e);let M=Math.max(0,Math.min(d,Au.dot(i)));Or.copy(e).addScaledVector(i,M),Or.distanceTo(r.listenerPos)<2.4&&M>4&&(!u||u.actor!==y)&&(c.whiz(r.panOf(Or)),',
  'o.rel(Au,e,r.listenerPos);let M=Math.max(0,Math.min(d,Au.dot(i)));Or.copy(i).multiplyScalar(M),Or.distanceTo(Au)<2.4&&M>4&&(!u||u.actor!==y)&&(c.whiz(r.panOf(o.unsee(Or,Or.add(e),e.x))),')
R('let x=M.eye(Au);Or.copy(x).sub(e);let S=Or.dot(i);','let x=M.eye(Au);o.rel(Or,e,x);let S=Or.dot(i);')
R('a.particles.blood(Ni,i,u.zone===0?1.7:1);let S=o.raycast(Ni,i,4.5);S&&(Qn.copy(S.face.normal),Qn.dot(i)>0&&Qn.negate(),','a.particles.blood(Ni,iH,u.zone===0?1.7:1);let S=o.raycast(Ni,iH,4.5);S&&(Qn.copy(S.face.normal),Qn.dot(iH)>0&&Qn.negate(),')
R('r.damage(M,x,t,{zone:u.zone,dir:i,point:Ni,wpn:s})}else l&&(Qn.copy(l.face.normal),Qn.dot(i)>0&&Qn.negate(),','r.damage(M,x,t,{zone:u.zone,dir:iH,point:Ni,wpn:s})}else l&&(Qn.copy(l.face.normal),Qn.dot(iH)>0&&Qn.negate(),')
R('(t!==y||d<60)&&c.impact(Ni.distanceTo(r.listenerPos),r.panOf(Ni))','(t!==y||d<60)&&c.impact(o.dist(Ni,r.listenerPos),r.panOf(Ni))')
R('let y=yu(this.actors,h.position,d,f?f.distance:400,n);','let y=yu(this.actors,h.position,d,f?f.distance:400,n,this.arena);')
# ---- thrown things do not stop in mid-air at the old street level
R('n.push(s.x,s.y,s.z,c),s.y<6)break}return{pts:n,end:new De(s.x,s.y,s.z),t:c}}','n.push(s.x,s.y,s.z,c),s.y<(r.ring?-2:6))break}return{pts:n,end:new De(s.x,s.y,s.z),t:c}}')
# ---- solo rifle bullets fly straight (and fall) in the frame they were fired in; every test along the way is made where the bullet is
R('this.B.push({p:a.clone(),v:d.clone().multiplyScalar(this.mv()),mz:mz.clone(),w,awm:!!p.awm,t:0,o:a.clone(),ft:g.time,holed:!1,far:0})','this.B.push({p:a.clone(),v:d.clone().multiplyScalar(this.mv()),mz:mz.clone(),w,awm:!!p.awm,t:0,o:a.clone(),ft:g.time,holed:!1,far:0,fx:a.x})')
R('let wl=null;try{wl=A.raycast(b.p,dir,len)}catch(x){}\n      let u=yu(g.actors,b.p,dir,wl&&!b.awm?wl.distance:len,p);','let pc=b.p,dc=dir;A.ring&&(pc=A.unsee(this._pc||(this._pc=new I),b.p,b.fx),dc=A.dirAt(this._dc||(this._dc=new I),b.o,dir,pc));let wl=null;try{wl=A.raycast(pc,dc,len)}catch(x){}\n      let u=yu(g.actors,pc,dc,wl&&!b.awm?wl.distance:len,p,A);')
R('if(b.awm){wl&&!b.holed&&(b.holed=!0,this._hole(wl,dir));if(u){let o=b.p.clone(),d2=dir.clone();','if(b.awm){wl&&!b.holed&&(b.holed=!0,this._hole(wl,dc));if(u){let o=pc.clone(),d2=dc.clone();')
R('else if(wl||u){let o=b.p.clone(),d2=dir.clone();','else if(wl||u){let o=pc.clone(),d2=dc.clone();')
R('try{g.gear&&g.gear.shotWorld&&g.gear.shotWorld(p,b.p,nx)}catch(x){}','try{g.gear&&g.gear.shotWorld&&g.gear.shotWorld(p,pc,A.ring?A.unsee(this._nc||(this._nc=new I),nx,b.fx):nx)}catch(x){}')
R('ex=e.x-b.p.x,ey=e.y-b.p.y,ez=e.z-b.p.z,sd=ex*dir.x+ey*dir.y+ez*dir.z;','rv=A.rel(RQ,pc,e),ex=rv.x,ey=rv.y,ez=rv.z,sd=ex*dc.x+ey*dc.y+ez*dc.z;')
R('if(b.t>2.4||b.far>420||b.p.y<-30){try{g.fx.threads.shot(b.mz,b.p)}catch(x){}done=!0}','if(b.t>2.4||b.far>420||(A.ring?A.unsee(this._pc,b.p,b.fx).y:b.p.y)<-30){try{g.fx.threads.shot(b.mz,A.ring?this._pc:b.p)}catch(x){}done=!0}')
# ---- cables are drawn along the line the rider takes (see RCABLE)
R('let m=new Qt(new Rn(.028,.028,len,5,1,!0),mat);m.position.copy(a).addScaledVector(d,.5);m.quaternion.setFromUnitVectors(up,d.normalize());','let m=SCLOOP?RCABLE(g,l,mat):new Qt(new Rn(.028,.028,len,5,1,!0),mat);SCLOOP||(m.position.copy(a).addScaledVector(d,.5),m.quaternion.setFromUnitVectors(up,d.normalize()));')
R('let n=ki.set((e.p0.x+e.p1.x)/2,(e.p0.y+e.p1.y)/2+(e.lift||0)+2.05,(e.p0.z+e.p1.z)/2);this.fx.particles.flash(n,2.4);','let n=ki.set((e.p0.x+e.p1.x)/2,(e.p0.y+e.p1.y)/2+(e.lift||0)+2.05,(e.p0.z+e.p1.z)/2);SCLOOP&&n.copy(RCPTS(this.arena,e)[RCPTS(this.arena,e).length>>1]);this.fx.particles.flash(n,2.4);')
# ---- HUD: spawn numbers above nine, and what is under the crosshair is judged along the real sight line
R('`${e.spawnRoof.name} \\xB7 0${e.spawnRoof.spawn+1}`','`${e.spawnRoof.name} \\xB7 ${String(e.spawnRoof.spawn+1).padStart(2,"0")}`')
R('A.spawn>=0?`${A.name} \\xB7 0${A.spawn+1}`:A.name','A.spawn>=0?`${A.name} \\xB7 ${String(A.spawn+1).padStart(2,"0")}`:A.name')
R('js.copy(v.chest()).sub(h.position);let w=js.length(),','this.arena.rel(js,h.position,v.chest());let w=js.length(),')
R('g?h.position.distanceTo(g.chest()):p,n.focus','g?this.arena.dist(h.position,g.chest()):p,n.focus')
R('js.copy(y.chest()).sub(h.position);let _=js.length();','this.arena.rel(js,h.position,y.chest());let _=js.length();')
# ---- the angel: its light reaches whoever is truly within range, and its glow in the picture sits where it really appears
R('o.chest().distanceTo(this.eye)<=this.pulseR&&(o._gazed=!0,','e.arena.dist(o.chest(),this.eye)<=this.pulseR&&(o._gazed=!0,')
R('this.gfx.angelWorld.copy(this.angel.eye);','this.arena.see(this.gfx.angelWorld,this.angel.eye,this.gfx.camera.position.x);')
R('(o.copy(a.pos),o.y+=2.15,o.project(e),','(o.copy(a.pos),o.y+=2.15,SCLOOP&&t.arena.see(o,o,e.position.x),o.project(e),')
R('let s=Math.atan2(-(n.x-i.pos.x),-(n.z-i.pos.z))-i.yaw;','let RV=e.arena.rel(RQ,i.pos,RYO.set(n.x,i.pos.y,n.z)),s=Math.atan2(-RV.x,-RV.z)-i.yaw;')
R('$s.copy(t).sub(this.listenerPos);let n=Math.hypot($s.x,$s.z)||1;','this.arena.rel($s,this.listenerPos,t);let n=Math.hypot($s.x,$s.z)||1;')
# ---- online: say which maps this build has, make rooms on the loaded map, follow a room to its map, learn where the halo closes
R('send({t:"hello",name:this.name||void 0,token:this.token||void 0,v:1})','send({t:"hello",name:this.name||void 0,token:this.token||void 0,v:1,maps:["city","loop"]})')
R('send({t:"create",settings:this._lastSettings()','send({t:"create",settings:{...(this._lastSettings()||{}),map:window.SCMAP||"city"}')
R('t.on("room",e=>{this._room(e);','t.on("room",e=>{if(RMAPSW(e))return;this._room(e);')
R('t.startNet=function(e,i,n){let s=this.player;','t.startNet=function(e,i,n){let s=this.player;SCLOOP&&i.zc&&this.ringT&&this.ringT.setZone(i.zc[0],i.zc[1]);')
R('_apply(t,e,i){let n=a=>t[a]+(e[a]-t[a])*i,','_apply(t,e,i){let n=a=>t[a]+(a===1&&RWD?RWD(e[a]-t[a]):e[a]-t[a])*i,')
R('["voice chat","voice",[[!0,"ON"],[!1,"OFF"]]],','["voice chat","voice",[[!0,"ON"],[!1,"OFF"]]],["map","map",[["city","SNIPER CITY"],["loop","LOOP CITY"]]],')
R('district:()=>pan(`<h2>DISTRICT ROTATION</h2><p>One district is live: <b style="color:#fff">Hong Kong \xB7 District 04</b>, 24 rooftops around the angel.</p><p class="note">More districts mean building new maps. None exist yet, so there is nothing to rotate.</p>`),','district:()=>RDIST(pan),')
# ---- cameras that look at something far away look along the real line to it (kill cam, spectator orbit, cut scenes)
R('let cam=g.gfx.camera,d=K.to.clone().sub(K.from),len=d.length()||1;','let cam=g.gfx.camera,d=g.arena.rel(new I,K.from,K.to),len=d.length()||1;')
R('.setY(K.from.y+.55+k*.25);cam.lookAt(K.to);','.setY(K.from.y+.55+k*.25);RLOOK(g,cam,K.to.x,K.to.y,K.to.z);')
R('let d=K.from.distanceTo(K.to),how=','let d=g.arena.dist(K.from,K.to),how=')
R('a.position.set(c+Math.cos(this.orbit)*u,d,h+Math.sin(this.orbit)*u),a.lookAt(c,l,h)}','a.position.set(c+Math.cos(this.orbit)*u,d,h+Math.sin(this.orbit)*u),RLOOK(this,a,c,l,h)}')
R('cam.lookAt(c.x,(c.y+p.pos.y)*.5+6,c.z);cam.updateMatrixWorld();','RLOOK(g,cam,c.x,(c.y+p.pos.y)*.5+6,c.z);cam.updateMatrixWorld();')
R('cam.lookAt(cx,cy+4,cz);cam.updateMatrixWorld();','RLOOK(g,cam,cx,cy+4,cz);cam.updateMatrixWorld();')
# ---- eggs: on the loop one on every fourth rooftop is plenty (there are many more roofs, and the streets stay clear)
R('for(let r of A.roofs)for(let k=0;k<E.PER;k++)for(let t=0;t<8;t++){','for(let r of A.roofs)for(let k=0;k<(SCLOOP?(r.kind==="roof"&&r.i%4===0?1:0):E.PER);k++)for(let t=0;t<8;t++){')
# ---- solo gear: a decoy fires along the real line; the missile view stays under the hub and probes down from there
R('n?o.copy(n.chest(wc)).sub(i).normalize():o.set(Math.random()-.5,0,Math.random()-.5).normalize()','n?e.arena.rel(o,i,n.chest(wc)).normalize():o.set(Math.random()-.5,0,Math.random()-.5).normalize()')
R('c=new De().copy(i).addScaledVector(o,a?a.distance:300);t.fake.lastShot=e.time','c=e.arena.unsee(new De,new De().copy(i).addScaledVector(o,a?a.distance:300),i.x);t.fake.lastShot=e.time')
R('h=g.arena.raycast(new V3(s.x,140,s.z),new V3(0,-1,0),200)','h=g.arena.raycast(new V3(s.x,g.arena.ring?g.arena.ring.R-6:140,s.z),new V3(0,-1,0),200)')
R('cam.position.set(s.x,s.home.y+118,s.z);cam.rotation.set(-Math.PI/2,0,0,"YXZ");','cam.position.set(s.x,g.arena.ring?Math.min(s.home.y+118,g.arena.ring.R-14):s.home.y+118,s.z);cam.rotation.set(-Math.PI/2,0,0,"YXZ");')
# ---- crates and panels: the loop has ten times the regions; one set on every third rooftop keeps the draw calls where they were
R('function QM(r){let t=[],e=0;for(let i of r.roofs){if(!i.cells||i.cells.length<16)continue;','function QM(r){let t=[],e=0;for(let i of r.roofs){if(!i.cells||i.cells.length<16||r.ring&&(i.kind!=="roof"||i.i%3))continue;')
# ---- the module
ring=open(REPO+'/client/src/ring.js').read().replace('export function ','function ')
mod='\n'.join(open(os.path.join(HERE,f)).read() for f in sorted(os.listdir(HERE)) if f.endswith('.js'))
MARK='/* ---------- Google Analytics events'
assert s.count(MARK)==1
s=s.replace(MARK,'/* ---------- ring.js (client/src/ring.js, verbatim) ---------- */\n'+ring+'\n'+mod+'\n\n'+MARK)
p=REPO+'/client/dist/game.js'; open(p+'.tmp','w').write(s); os.replace(p+'.tmp',p)
print('patched',len(s))

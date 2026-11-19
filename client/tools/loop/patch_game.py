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
R('MENU(l),VOICE(l),','MENU(l),VOICE(l),RMENU(l),RING(l),RLADDERS(l),RGRAPHITE(l),RWALLS(l),RDOORS(l),RWORKSHOP(l),RGRADE(l),RRAIN(l),RSCOPES(l),RPARTS(l),')
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
# ---- on the loop the cover is LOOP CITY's breakable walls (ringWalls, the server's list); crates and panels stay on the city map
R('function QM(r){let t=[],e=0;','function QM(r){if(r.ring)return ringWalls(r,De);let t=[],e=0;')
# LOOP CITY's walls are drawn by RWALLS (85_walls.js): the box-per-item code skips them
R('for(let n of this.gear.cover){let s=new Qt(new an(','for(let n of this.gear.cover){if(n.kind==="wall")continue;let s=new Qt(new an(')
# ---- the air drop read-out measures the short way round the ring
R('let dx=C.pt.x-p.pos.x,dz=C.pt.z-p.pos.z,d=Math.round(Math.hypot(dx,dz)),a=Math.atan2(dx,-dz),DIR=','let dx=g.arena.wrapD(C.pt.x-p.pos.x),dz=C.pt.z-p.pos.z,d=Math.round(Math.hypot(dx,dz)),a=Math.atan2(dx,-dz),DIR=')
# =====================================================================================================================
# The second pass. Three kinds of thing:
#  (1) what a player sees of shots online (their own and everyone else's) is drawn along the real line through the wheel;
#  (2) the blind one, the eggs, the rocket, the strike, the drone and the dog are taught the ring where the chart misled them;
#  (3) close work (a swing, gas, a bite, picking something up, how loud a sound is) measures the short way round, so the
#      line where chart x jumps from +H to -H is not a wall for any of it.
# On the city map every helper used here is plain vector maths (ring.js flatArena), so nothing changes there.
# =====================================================================================================================
# ---- (1) your own shot online: the tracer ends, and the wall is marked, where the round really went
R('t.netFire=function(e,i,n,s){let o=this.arena.raycast(e,i,420),a=e.clone().addScaledVector(i,o?o.distance:420),c=e,l=i,h=Cp(o,i);if(h&&(this.fx.threads.shot(n,a),this.fx.particles.impact(a,h.n),n=a,e=h.o,i=h.d,o=this.arena.raycast(e,i,_c),a=e.clone().addScaledVector(i,o?o.distance:_c)),',
  't.netFire=function(e,i,n,s){let AR=this.arena,o=AR.raycast(e,i,420),a=AR.unsee(new I,e.clone().addScaledVector(i,o?o.distance:420),e.x),iH=AR.dirAt(new I,e,i,a),c=e,l=i,h=Cp(o,iH);if(h&&(this.fx.threads.shot(n,a),this.fx.particles.impact(a,h.n),n=a,e=h.o,i=h.d,o=AR.raycast(e,i,_c),a=AR.unsee(new I,e.clone().addScaledVector(i,o?o.distance:_c),e.x),AR.dirAt(iH,e,i,a)),')
R('this.player.lastShotPos.copy(c),o){let u=o.face.normal.clone();u.dot(i)>0&&u.negate(),this.fx.particles.impact(a,u),this.fx.decals.add(a,u,.08,1,.01,.85)}this.net.send({t:"fire"',
  'this.player.lastShotPos.copy(c),o){let u=o.face.normal.clone();u.dot(iH)>0&&u.negate(),this.fx.particles.impact(a,u),this.fx.decals.add(a,u,.08,1,.01,.85)}this.net.send({t:"fire"')
# ---- (1) someone else's shot online: blood, the mark on the wall and the crack past your ear all follow the real line.
#      (The flat branch is the code as it was. Its near-miss test has never fired: it overwrites the shot's origin before using it.)
R('let u=Nu.copy(c).sub(a).normalize();if(e.hit){this.fx.particles.blood(c,u,e.z===0?1.7:1);let d=this.arena.raycast(c,u,4.5);if(d){let f=d.face.normal.clone();f.dot(u)>0&&f.negate(),this.fx.decals.add(d.point,f,.35+Math.random()*.5,0,.25)}}else{let d=this.arena.raycast(a,u,a.distanceTo(c)+.5);if(d){let f=d.face.normal.clone();f.dot(u)>0&&f.negate(),this.fx.particles.impact(d.point,f),this.fx.decals.add(d.point,f,.08,1,.01,.85)}}if(i.alive&&e.hit!==n){let d=Uu.copy(this.listenerPos).sub(a),',
  'let AR=this.arena,RG=AR.ring,u=RG?AR.rel(Nu,a,c).normalize():Nu.copy(c).sub(a).normalize(),uH=RG?AR.dirAt(new I,a,u,c):u;if(e.hit){this.fx.particles.blood(c,uH,e.z===0?1.7:1);let d=AR.raycast(c,uH,4.5);if(d){let f=d.face.normal.clone();f.dot(uH)>0&&f.negate(),this.fx.decals.add(d.point,f,.35+Math.random()*.5,0,.25)}}else{let d=AR.raycast(a,u,AR.dist(a,c)+.5);if(d){let f=d.face.normal.clone();f.dot(uH)>0&&f.negate(),this.fx.particles.impact(d.point,f),this.fx.decals.add(d.point,f,.08,1,.01,.85)}}if(i.alive&&e.hit!==n&&RG){let q=AR.rel(new I,a,this.listenerPos),f=AR.dist(a,c),p=Math.max(0,Math.min(f,q.dot(u))),g=new I().copy(u).multiplyScalar(p);g.distanceTo(q)<2.4&&p>4&&(this.audio.whiz(this.panOf(AR.unsee(g,g.add(a),a.x))),s.threat(a,.6),i.suppress=Math.min(1,(i.suppress||0)+.5))}else if(i.alive&&e.hit!==n){let d=Uu.copy(this.listenerPos).sub(a),')
# ---- (1) a decoy's fake shot: the spark is where the line really ends
R('let s=ki.copy(n).sub(i).normalize(),o=this.arena.raycast(i,s,i.distanceTo(n)+.5);if(o){let a=o.face.normal.clone();a.dot(s)>0&&a.negate(),this.fx.particles.impact(o.point,a)}',
  'let s=this.arena.rel(ki,i,n).normalize(),o=this.arena.raycast(i,s,this.arena.dist(i,n)+.5);if(o){let a=o.face.normal.clone();a.dot(this.arena.dirAt(Vr,i,s,o.point))>0&&a.negate(),this.fx.particles.impact(o.point,a)}')

# ---- (2) the nest. The blind one looked for "the highest thing here" from 160 m up: on the ring that is past the hub, the
#      ray came back with the axle, and the creature climbed into the sky. It looks down from just under the hub now.
R('const top=(x,z,y)=>{try{let h=A.raycast(new I(x,160,z),DOWN,400);','const top=(x,z,y)=>{try{let h=A.raycast(new I(x,A.ring?A.ring.R-6:160,z),DOWN,A.ring?120:400);')
#      it walks the short way round, and stays on the map when it crosses the seam
R('if(a.state===4){a.wait-=t;a.to&&(a.yaw=Math.atan2(a.to.x-a.pos.x,a.to.z-a.pos.z));','if(a.state===4){a.wait-=t;a.to&&(a.yaw=Math.atan2(A.wrapD(a.to.x-a.pos.x),a.to.z-a.pos.z));')
R('if(a.state===1&&a.to){let dx=a.to.x-a.pos.x,dz=a.to.z-a.pos.z,d=Math.hypot(dx,dz);','if(a.state===1&&a.to){let dx=A.wrapD(a.to.x-a.pos.x),dz=a.to.z-a.pos.z,d=Math.hypot(dx,dz);')
R('else{a.pos.x+=dx*st;a.pos.z+=dz*st;a.hop=Math.max(0,(a.hop||0)-st);','else{a.pos.x=A.wrapX(a.pos.x+dx*st);a.pos.z+=dz*st;a.hop=Math.max(0,(a.hop||0)-st);')
R('if(Math.hypot(v.pos.x-a.pos.x,v.pos.z-a.pos.z)<H.biteR&&Math.abs(v.pos.y-a.pos.y)<2.2){a.cool=H.cool;a.biteT=1.1;a.yaw=Math.atan2(v.pos.x-a.pos.x,v.pos.z-a.pos.z);',
  'if(Math.hypot(A.wrapD(v.pos.x-a.pos.x),v.pos.z-a.pos.z)<H.biteR&&Math.abs(v.pos.y-a.pos.y)<2.2){a.cool=H.cool;a.biteT=1.1;a.yaw=Math.atan2(A.wrapD(v.pos.x-a.pos.x),v.pos.z-a.pos.z);')
R('rs=A.roofs.filter(r=>Math.hypot(r.x-p.x,r.z-p.z)>38)','rs=A.roofs.filter(r=>Math.hypot(A.wrapD(r.x-p.x),r.z-p.z)>38)')
R('let d=at.distanceTo(a.pos);if(d>H.hear)return;\n    if(a.state===1&&a.who!==who&&a.to&&a.to.distanceTo(a.pos)<d)return;','let d=A.dist(at,a.pos);if(d>H.hear)return;\n    if(a.state===1&&a.who!==who&&a.to&&A.dist(a.to,a.pos)<d)return;')
#      a round's path is a straight line in the shooter's frame: test eggs and the creature against that, not against the
#      line between two chart points (60 m out the two are metres apart)
R('const seg=(o,e,c,r)=>{let dx=e.x-o.x,dy=e.y-o.y,dz=e.z-o.z,L=Math.hypot(dx,dy,dz);if(L<.3)return!1;let cx=c.x-o.x,cy=c.y-o.y,cz=c.z-o.z,u=',
  'const sgA=new I,sgB=new I,seg=(o,e,c,r)=>{let D=A.rel(sgA,o,e),dx=D.x,dy=D.y,dz=D.z,L=Math.hypot(dx,dy,dz);if(L<.3)return!1;let Q=A.rel(sgB,o,c),cx=Q.x,cy=Q.y,cz=Q.z,u=')
R('nf0(o,d,mz,w);try{let end=o.clone().addScaledVector(d,420),wh=null;','nf0(o,d,mz,w);try{let end=g.arena.unsee(new I,o.clone().addScaledVector(d,420),o.x),wh=null;')
R('a.chest().clone(),d=c.distanceTo(pt);if(d>E.R)continue;','a.chest().clone(),d=A.dist(c,pt);if(d>E.R)continue;')
R('alien&&alien.state!==3&&alien.pos.distanceTo(pt)<E.R&&hurt(alien,200,by);','alien&&alien.state!==3&&A.dist(alien.pos,pt)<E.R&&hurt(alien,200,by);')
R('o.alive&&o.fuse<0&&o.p.distanceTo(pt)<E.CHAIN&&','o.alive&&o.fuse<0&&A.dist(o.p,pt)<E.CHAIN&&')
R('if(p.alive&&!g.silenced&&Math.hypot(p.pos.x-e.p.x,p.pos.z-e.p.z)<SIL.R&&','if(p.alive&&!g.silenced&&Math.hypot(A.wrapD(p.pos.x-e.p.x),p.pos.z-e.p.z)<SIL.R&&')

# ---- (2) the rocket flies straight in the frame it was launched in, so it can be fired at the roofs overhead (it used to
#      follow the floor round the ring and burst on the axle). The same steps as the server's rocketPath (extras.js).
R('_rpgMesh(o,d){',
  '_rpgAdv(r,dir,st){let A=this.g.arena,p=r.m.position,dc=dir,hit=null;if(A.ring){r.fo||(r.fo=p.clone(),r.q=p.clone());dc=A.dirAt(new I,r.fo,dir,p)}\n'
  '  try{hit=A.raycast(p.clone(),dc,st+.3)}catch(x){}\n'
  '  let end;if(hit&&hit.point)end=hit.point.clone();else if(A.ring){r.q.addScaledVector(dir,st);end=A.unsee(new I,r.q,r.fo.x)}else end=p.clone().addScaledVector(dir,st);\n'
  '  return{end,hit,dc}}\n_rpgMesh(o,d){')
R('r.k++;r.v.y-=2.5*step;let st=r.v.length()*step,dir=r.v.clone().normalize(),hit=null;\n    try{hit=g.arena.raycast(r.m.position.clone(),dir,st+.3)}catch(x){}\n    let end=hit&&hit.point?hit.point.clone():r.m.position.clone().addScaledVector(dir,st);\n    r.m.position.copy(end);r.m.quaternion.setFromUnitVectors(new I(0,1,0),dir);',
  'r.k++;r.v.y-=2.5*step;let st=r.v.length()*step,dir=r.v.clone().normalize(),J=this._rpgAdv(r,dir,st),hit=J.hit,end=J.end;\n    r.m.position.copy(end);r.m.quaternion.setFromUnitVectors(new I(0,1,0),J.dc);')
R('let st=r.v.length()*t,dir=r.v.clone().normalize(),hit=null;try{hit=g.arena.raycast(r.m.position.clone(),dir,st+.3)}catch(x){}\n    let end=hit&&hit.point?hit.point.clone():r.m.position.clone().addScaledVector(dir,st),boom=!!hit||r.t>6;\n    if(!boom){let a=r.m.position,sg=end.clone().sub(a),sl2=sg.lengthSq();for(let b of g.bots){if(!b.alive)continue;let c=b.chest().clone(),k=sl2>1e-6?Math.min(1,Math.max(0,c.clone().sub(a).dot(sg)/sl2)):1,q=a.clone().addScaledVector(sg,k);if(q.distanceTo(c)<1.5){boom=!0;end.copy(q);break}}}\n    r.m.position.copy(end);',
  'let st=r.v.length()*t,dir=r.v.clone().normalize(),J=this._rpgAdv(r,dir,st),hit=J.hit;\n    let end=J.end,boom=!!hit||r.t>6;\n    if(!boom){let A=g.arena,a=r.m.position,sg=A.rel(new I,a,end),sl2=sg.lengthSq();for(let b of g.bots){if(!b.alive)continue;let c=A.rel(new I,a,b.chest()),k=sl2>1e-6?Math.min(1,Math.max(0,c.dot(sg)/sl2)):1,q=sg.clone().multiplyScalar(k);if(q.distanceTo(c)<1.5){boom=!0;A.unsee(end,q.add(a),a.x);break}}}\n    r.m.position.copy(end);r.m.quaternion.setFromUnitVectors(new I(0,1,0),J.dc);')
R('let c=b.chest().clone(),d=c.distanceTo(pt);if(d>7)continue;g.damage(b,d<3.6?999:','let c=b.chest().clone(),d=RDL(c,pt);if(d>7)continue;g.damage(b,d<3.6?999:')
R('d.state!==4&&d.grp.visible&&d.pos.distanceTo(pt)<5&&this.hurtDog(d,200);\n  if(p.alive){let d=p.pos.distanceTo(pt);d<6&&','d.state!==4&&d.grp.visible&&RDL(d.pos,pt)<5&&this.hurtDog(d,200);\n  if(p.alive){let d=RDL(p.pos,pt);d<6&&')

# ---- (2) the missile strike. The view was held to x, z within 80 m of the map's middle (the city is that big); on the ring
#      it moves 90 m either way along the ring from where you stand and from rim to rim. There is no sky for the plane:
#      the missiles fall from the hub, straight above their marks (as the server sends them).
R('s.x=Math.max(-80,Math.min(80,s.x+s.mx*46*t+s.lx*.09));s.z=Math.max(-80,Math.min(80,s.z-s.my*46*t+s.ly*.09));s.lx=s.ly=0;',
  '{let AR=g.arena,nx=s.x+s.mx*46*t+s.lx*.09,nz=s.z-s.my*46*t+s.ly*.09;AR.ring?(s.x=AR.wrapX(s.home.x+Math.max(-90,Math.min(90,AR.wrapD(nx-s.home.x)))),s.z=Math.max(-AR.zmax,Math.min(AR.zmax,nz))):(s.x=Math.max(-80,Math.min(80,nx)),s.z=Math.max(-80,Math.min(80,nz)))}s.lx=s.ly=0;')
R('const planeOn=()=>{pu.planeOut=0;if(!pu.plane){','const planeOn=()=>{pu.planeOut=0;if(g.arena.ring)return;if(!pu.plane){')
R('const launch=(pt,from,dur)=>{from=from||(pu.plane?','const launch=(pt,from,dur)=>{g.arena.ring&&(from=new V3(pt.x,g.arena.ring.R-10,pt.z));from=from||(pu.plane?')
R('let c=b.chest().clone(),d=c.distanceTo(pt);if(d>9)continue;','let c=b.chest().clone(),d=RDL(c,pt);if(d>9)continue;')
R('let d=(pu.strike?pu.strike.home:p.pos).distanceTo(pt);d<7&&','let d=RDL(pu.strike?pu.strike.home:p.pos,pt);d<7&&')
# ---- (2) the drone goes the short way round and stays on the map across the seam (the server's does the same)
R('for(let b of foes()){let q=b.pos.distanceTo(d.pos);q<bd&&(bd=q,best=b)}d.target=best}','for(let b of foes()){let q=RDL(b.pos,d.pos);q<bd&&(bd=q,best=b)}d.target=best}')
R('if(tg){let hx=d.pos.x-tg.pos.x,hz=d.pos.z-tg.pos.z,hl=Math.hypot(hx,hz)||1;','if(tg){let hx=g.arena.wrapD(d.pos.x-tg.pos.x),hz=d.pos.z-tg.pos.z,hl=Math.hypot(hx,hz)||1;')
R('Math.hypot(want.x-d.pos.x,want.z-d.pos.z)>14&&(want.y=Math.max(want.y,34))}','Math.hypot(g.arena.wrapD(want.x-d.pos.x),want.z-d.pos.z)>14&&(want.y=Math.max(want.y,34))}')
R('let dv=want.clone().sub(d.pos),dl=dv.length(),sp=Math.min(17,dl*2.2);','let dv=want.clone().sub(d.pos);dv.x=g.arena.wrapD(dv.x);let dl=dv.length(),sp=Math.min(17,dl*2.2);')
R('d.vel.lerp(dv,Math.min(1,t*3.5));d.pos.addScaledVector(d.vel,t);\n    let look=tg?tg.pos:want;d.yaw=Math.atan2(-(look.x-d.pos.x),-(look.z-d.pos.z));',
  'd.vel.lerp(dv,Math.min(1,t*3.5));d.pos.addScaledVector(d.vel,t);g.arena.norm(d.pos);\n    let look=tg?tg.pos:want;d.yaw=Math.atan2(-g.arena.wrapD(look.x-d.pos.x),-(look.z-d.pos.z));')
R('let c=tg.chest().clone(),range=c.distanceTo(d.pos),see=!1;','let c=tg.chest().clone(),range=RDL(c,d.pos),see=!1;')
R('if(hit){g.damage(tg,18,p,{cause:"drone",dir:c.clone().sub(d.pos).normalize(),point:c});','if(hit){g.damage(tg,18,p,{cause:"drone",dir:g.arena.rel(new V3,d.pos,c).normalize(),point:c});')
R('let e=b.eye(new V3),q=e.distanceTo(d.pos);if(q>75||','let e=b.eye(new V3),q=RDL(e,d.pos);if(q>75||')
R('for(let[id,d]of pu.nd){d.cur.lerp(d.pos,Math.min(1,t*12));','for(let[id,d]of pu.nd){SCLOOP&&(d.cur.x=d.pos.x+g.arena.wrapD(d.cur.x-d.pos.x));d.cur.lerp(d.pos,Math.min(1,t*12));')

# ---- (2) the dog: who you point it at, and whether your own round passes it, are judged along the real line; its
#      tracer (and the drone's) is drawn straight between its two ends
R('let v=b.chest().clone().sub(cam.position),dist=v.length();if(dist>80)continue;','let v=g.arena.rel(new I,cam.position,b.chest()),dist=v.length();if(dist>80)continue;')
R('let c=d.pos.clone();c.y+=.5;let v=c.sub(o),al=v.dot(dir);if(al<.5||al>max+.4)continue;','let c=d.pos.clone();c.y+=.5;let v=g.arena.rel(c,o,c),al=v.dot(dir);if(al<.5||al>max+.4)continue;')
R('_tracer(a,b){let v=b.clone().sub(a),len=v.length();if(len<.01)return;','_tracer(a,b){let AR=this.g.arena,v=AR.rel(new I,a,b),len=v.length();if(len<.01)return;')
R('m.position.copy(a).addScaledVector(v,.5);m.quaternion.setFromUnitVectors(new I(0,1,0),v.divideScalar(len));this.S.add(m);this.fx.push({m,v:new I,s:0,t:0,life:.16,o:.9,blur:0})}',
  'AR.unsee(m.position,m.position.copy(a).addScaledVector(v,.5),a.x);m.quaternion.setFromUnitVectors(new I(0,1,0),AR.dirAt(new I,a,v.divideScalar(len),m.position));this.S.add(m);this.fx.push({m,v:new I,s:0,t:0,life:.16,o:.9,blur:0})}')
R('let c=b.chest();if(c.distanceTo(L.pos)>this.R)continue;','let c=b.chest();if(RDL(c,L.pos)>this.R)continue;')

# ---- (3) close work measures the short way round
R('let g=p.chest(wc),m=g.x-n.x,A=g.y-n.y,y=g.z-n.z,_=Math.hypot(m,A,y);if(_>o)continue;','let g=p.chest(wc),m=i.arena.wrapD(g.x-n.x),A=g.y-n.y,y=g.z-n.z,_=Math.hypot(m,A,y);if(_>o)continue;')
R('h=t.pos.x-s.pos.x,u=t.pos.z-s.pos.z,d=Math.hypot(h,u)||1,f=(c*h+l*u)/d<-.25','h=i.arena.wrapD(t.pos.x-s.pos.x),u=t.pos.z-s.pos.z,d=Math.hypot(h,u)||1,f=(c*h+l*u)/d<-.25')
R('if(!o.alive)continue;let a=o.pos.x-s.pos.x,c=o.pos.z-s.pos.z,l=o.pos.y-s.pos.y;if(!(a*a+c*c<he.gasR*he.gasR&&','if(!o.alive)continue;let a=e.arena.wrapD(o.pos.x-s.pos.x),c=o.pos.z-s.pos.z,l=o.pos.y-s.pos.y;if(!(a*a+c*c<he.gasR*he.gasR&&')
R('let y=s.pos.x-p.pos.x,_=s.pos.z-p.pos.z,v=s.pos.y-p.pos.y;y*y+_*_<he.gasR*he.gasR&&','let y=this.arena.wrapD(s.pos.x-p.pos.x),_=s.pos.z-p.pos.z,v=s.pos.y-p.pos.y;y*y+_*_<he.gasR*he.gasR&&')
R('if(o.alive&&!o.link&&Math.hypot(o.pos.x-n.pos.x,o.pos.z-n.pos.z)<2.6&&','if(o.alive&&!o.link&&Math.hypot(t.arena.wrapD(o.pos.x-n.pos.x),o.pos.z-n.pos.z)<2.6&&')
R('vu(o)===t.shadowRoof||Math.hypot(o.pos.x-n.pos.x,o.pos.z-n.pos.z)>he.strikeR||','vu(o)===t.shadowRoof||Math.hypot(t.arena.wrapD(o.pos.x-n.pos.x),o.pos.z-n.pos.z)>he.strikeR||')
#      smoke on a sight line, measured in the looker's own frame (as the server does)
R('let cx=c.pos.x,cy=c.pos.y+1.2,cz=c.pos.z,dx=b.x-a.x,dy=b.y-a.y,dz=b.z-a.z,L=dx*dx+dy*dy+dz*dz||1,k=Math.max(0,Math.min(1,((cx-a.x)*dx+(cy-a.y)*dy+(cz-a.z)*dz)/L)),px=a.x+dx*k-cx,py=a.y+dy*k-cy,pz=a.z+dz*k-cz;',
  'let AR=this.g.arena,D=AR.rel(RYO,a,b),Q=AR.rel(RYD,a,RQ.set(c.pos.x,c.pos.y+1.2,c.pos.z)),L=D.lengthSq()||1,k=Math.max(0,Math.min(1,Q.dot(D)/L)),px=D.x*k-Q.x,py=D.y*k-Q.y,pz=D.z*k-Q.z;')
R('let s=t.target;if(!s||!s.alive||t.link)return;let o=s.pos.distanceTo(t.pos);','let s=t.target;if(!s||!s.alive||t.link)return;let o=RDL(s.pos,t.pos);')
R('if(h.pos.distanceTo(t.pos)<(Mc(vu(h))===1?13:8)&&t.state==="scan")','if(RDL(h.pos,t.pos)<(Mc(vu(h))===1?13:8)&&t.state==="scan")')
R('t._meleeAt=n+1.6,Hr.copy(s.chest(wc)).sub(t.eye(wA)).normalize(),this.melee(t,Hr);','t._meleeAt=n+1.6,i.arena.rel(Hr,t.eye(wA),s.chest(wc)).normalize(),this.melee(t,Hr);')
R('t._camp.p.distanceTo(s.pos)>2.2','RDL(t._camp.p,s.pos)>2.2')
R('_lob(t,e){let i=new De(e.x-t.x,0,e.z-t.z),n=i.length();','_lob(t,e){let i=new De(this.g.arena.wrapD(e.x-t.x),0,e.z-t.z),n=i.length();')
R('u=Math.hypot(h.end.x-e.x,h.end.z-e.z)+Math.abs(h.end.y-e.y)*.5;','u=Math.hypot(this.g.arena.wrapD(h.end.x-e.x),h.end.z-e.z)+Math.abs(h.end.y-e.y)*.5;')
R('let h=l.pos.distanceTo(t.pos);h<s&&(s=h,n=l)}','let h=e.arena.dist(l.pos,t.pos);h<s&&(s=h,n=l)}')
#      the air drop: opening it, and which roof it falls on
R('let dx=p.pos.x-C.pt.x,dz=p.pos.z-C.pt.z,near=p.alive&&!L.on&&Math.hypot(dx,dz)<2.4&&','let dx=g.arena.wrapD(p.pos.x-C.pt.x),dz=p.pos.z-C.pt.z,near=p.alive&&!L.on&&Math.hypot(dx,dz)<2.4&&')
R('for(let s of sp){let d=Math.hypot(s.spawnPt[0]-p.pos.x,s.spawnPt[2]-p.pos.z);d>14&&d<95&&ok.push(s)}','for(let s of sp){let d=Math.hypot(g.arena.wrapD(s.spawnPt[0]-p.pos.x),s.spawnPt[2]-p.pos.z);d>14&&d<95&&ok.push(s)}')
#      a can that flies past the seam is filed at its place on the chart when it lands (its path keeps its own numbers, for the picture)
R('s.y<(r.ring?-2:6))break}return{pts:n,end:new De(s.x,s.y,s.z),t:c}}','s.y<(r.ring?-2:6))break}return{pts:n,end:r.norm(new De(s.x,s.y,s.z)),t:c}}')
#      voice: how near someone is
R('let d=a.pos.distanceTo(p.pos),v=d<=V.NEAR?1:','let d=RDL(a.pos,p.pos),v=d<=V.NEAR?1:')
R('s.alive&&n.distanceTo(s.pos)<45&&this.hud.banner("a cable is cut"','s.alive&&RDL(n,s.pos)<45&&this.hud.banner("a cable is cut"')
#      and every sound is as loud as its source is truly near (RDL: the real distance on the ring, the plain one on the city map)
_n=0
def _rdl(m):
    global _n; _n+=1; return 'RDL('+m.group(1)+','+m.group(2)+')'
s=re.sub(r'((?:[A-Za-z_$][\w$]*)(?:\.[A-Za-z_$][\w$]*)*)\.distanceTo\(((?:this|g|r)\.listenerPos)\)',_rdl,s)
assert _n==24,_n
# ---- looking up: the roofs across the wheel are overhead, and the two teams start nearly opposite each other. The city's
#      limit (86 degrees) left a 15 m circle straight up that nobody could aim into; on the ring it is 88.5 degrees, and
#      the picture itself never tips over the top however the rifle kicks
R('this.yaw-=e.lookX*o,this.pitch=zr(this.pitch-e.lookY*o,-1.5,1.5),','this.yaw-=e.lookX*o,this.pitch=zr(this.pitch-e.lookY*o,-1.5,i.arena.ring?1.545:1.5),')
R('(this.yaw+=Ec.yaw*s,this.pitch=zr(this.pitch+Ec.pitch*s,-1.5,1.5))','(this.yaw+=Ec.yaw*s,this.pitch=zr(this.pitch+Ec.pitch*s,-1.5,i.arena.ring?1.545:1.5))')
R('n.rotation.set(this.pitch+this.kick+this.swayY+Math.sin(this.hurtT*40)*this.hurtT*.02,','n.rotation.set(Math.min(i.arena.ring?1.566:9,this.pitch+this.kick+this.swayY+Math.sin(this.hurtT*40)*this.hurtT*.02),')
# ---- the dead rise to the angel's hands: the hands are where the picture shows them (the angel is carried whole to its
#      place, so its parts keep their own numbers there), and a soul leaves from the street, not from 6 m above it
R('wristPos(t,e){return this.wrists[t%this.wrists.length].getWorldPosition(e)}','wristPos(t,e){let w=this.wrists[t%this.wrists.length].getWorldPosition(e);return SCLOOP?this.g.arena.unsee(w,w,this.root.position.x):w}')
R('this.fx.threads.addSoul(d.clone().setY(Math.max(d.y,6)),','this.fx.threads.addSoul(d.clone().setY(Math.max(d.y,SCLOOP?.4:6)),')
R('this.fx.threads.addSoul(c.clone().setY(Math.max(c.y,6)),','this.fx.threads.addSoul(c.clone().setY(Math.max(c.y,SCLOOP?.4:6)),')
# ---- the menu on the loop shows the wheel (RLOBBY in 70_lobby.js)
R('const lobby=(cam,t)=>{ensure();let s=stage[g.op]||stage[0];if(!s)return;stage.forEach(q=>q&&(q.rig.root.visible=q===s));light&&(light.intensity=70);T+=t;',
  'const lobby=(cam,t)=>{ensure();let s=stage[g.op]||stage[0];if(!s)return;stage.forEach(q=>q&&(q.rig.root.visible=q===s));light&&(light.intensity=70);T+=t;if(RSAFE(g,cam,t,T,s,light))return;if(SCLOOP){RLOBBY(g,cam,t,T,s,light);return}')
# ---- the store sells GRAPHITE (free), and the arsenal lists it
R('store:()=>pan(`<h2>STORE</h2><p>Nothing here costs real money.</p>','store:()=>{pan(`<h2>STORE</h2><p>Nothing here costs real money.</p>${RGSTORE()}')
R('A store that sells looks for XP comes with player accounts.</p>`),','A store that sells looks for XP comes with player accounts.</p>`);RGWIRE(PANELS.store)},')
# ---- the colour grade (95_grade.js): grey is no longer plain grey. Luminance runs along a ramp of four colours
# (shadow, middle, light, the brightest lights), so a map can be a blue storm night or a green rain haze. Red, gas green and
# zipline cyan stay what they were.
R('void main() {\n  vec2 uv = vUv;\n  // zone glitch',
  'uniform vec3 uG0, uG1, uG2, uGW; uniform float uGA;\nvec3 gradeC(float l) { l = clamp(l, 0.0, 1.25); vec3 c = mix(uG0, uG1, smoothstep(0.0, 0.42, l)); c = mix(c, uG2, smoothstep(0.36, 0.80, l)); c = mix(c, uGW, smoothstep(0.78, 1.02, l)); return mix(vec3(l), c * (0.35 + 0.65 * smoothstep(0.0, 0.06, l)), uGA); }\nvoid main() {\n  vec2 uv = vUv;\n  // zone glitch')
R('vec3 outc = mix(vec3(max(lum, 0.0)), uRedCol * (0.82 + 0.3 * ra), ra);','vec3 outc = mix(gradeC(max(lum, 0.0)), uRedCol * (0.82 + 0.3 * ra), ra);')
R('uZoneOut:{value:0},uKick:{value:0},','uZoneOut:{value:0},uKick:{value:0},uG0:{value:new Tt(0,0,0)},uG1:{value:new Tt(.5,.5,.5)},uG2:{value:new Tt(1,1,1)},uGW:{value:new Tt(1,1,1)},uGA:{value:0},')
# ---- joining a room says which map this page has loaded; if the room is on the other one the server answers
# MAPSWITCH:<map> and the page reloads onto it and rejoins (server/src/rooms.js; RSWITCH in 60_net.js)
# ---- rain on the puddles (96_rain.js has the drops): rings spread from where drops land and bend what the wet roof
# reflects; puddles are closer to mirrors than they were. One drop per cell per cycle, a new place each time.
R('vec3 gradeC(float l) {',
  'vec2 rpH(vec2 p) { p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3))); return fract(sin(p) * 43758.5453); }\nvec2 ripples(vec2 p, float t) { vec2 g = floor(p); vec2 acc = vec2(0.0);\n  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) { vec2 cell = g + vec2(float(i), float(j)); vec2 h = rpH(cell); float cyc = t * (0.5 + 0.4 * h.x) + h.y; float ph = fract(cyc);\n    vec2 d = p - (cell + 0.15 + 0.7 * rpH(cell + floor(cyc) * 7.3)); float r = length(d); float w = (r - ph * 1.2) * 24.0; float fall = 1.0 - ph;\n    acc += d / max(r, 0.001) * sin(w) * exp(-w * w * 0.1) * fall * fall; }\n  return acc; }\nvec3 gradeC(float l) {')
R('vec3 Nw = normalize(vec3(sin(rp.x * 3.1 + tt) * cos(rp.y * 2.7 - tt * 1.3), 16.0, cos(rp.x * 2.9 - tt * 0.8) * sin(rp.y * 3.3 + tt)));',
  'vec2 rg = ripples(wp.xz * 2.6, uTime) * 0.2 * (1.0 - smoothstep(18.0, 42.0, pz)); vec3 Nw = normalize(vec3(sin(rp.x * 3.1 + tt) * cos(rp.y * 2.7 - tt * 1.3) + rg.x * 16.0, 16.0, cos(rp.x * 2.9 - tt * 0.8) * sin(rp.y * 3.3 + tt) + rg.y * 16.0));')
R('float fres = 0.16 + 0.84 * pow(1.0 - max(dot(-V, N), 0.0), 3.0);','float fres = 0.24 + 0.76 * pow(1.0 - max(dot(-V, N), 0.0), 3.0);')
R('col = col * (1.0 - 0.3 * wet) + refl * fres * wet * 1.6;','col = col * (1.0 - 0.5 * wet) + refl * fres * wet * 2.3 + vec3(dot(rg, rg)) * 0.9 * wet;')
R('this.net.send({t:"join",code:t}),','this.net.send({t:"join",code:t,map:window.SCMAP||"city"}),')
R('t.on("error",e=>{this.toast(e.msg),this._stat(e.msg,!0)})','t.on("error",e=>{let sw=/^MAPSWITCH:(city|loop)$/.exec(e.msg||"");if(sw&&window.RSWITCH){window.RSWITCH(sw[1],$t("code")&&$t("code").value||this.room&&this.room.code||"");return}if(/not in a room/i.test(e.msg||"")&&this.room){this.room=null,this.g.net&&this.g.stopNet(),this.g.state="title",this.g.hud.show("online"),this._stat("connection lost too long \\xB7 rejoin with the room code",!0),this.toast(e.msg);return}this.toast(e.msg),this._stat(e.msg,!0)})')
R('t.on("left",e=>{this.room=null,this.g.net&&this.g.stopNet(),this.g.state="title",this.g.hud.show("online"),this._stat(e.why==="kicked"?"the host removed you from the room":"you left the room",e.why==="kicked")})','t.on("left",e=>{if(e.why==="switch")return;this.room=null,this.g.net&&this.g.stopNet(),this.g.state="title",this.g.hud.show("online");let msg=e.why==="kicked"?"the host removed you from the room":e.why==="timeout"?"connection lost too long \\xB7 you were removed from the room":"you left the room";this._stat(msg,e.why==="kicked"||e.why==="timeout")})')
# lit windows burn warm: the buildings' own and the skyline's. The last pass keeps that warmth (as it keeps red and cyan).
R('em += (h > 0.975 ? uRedCol * 1.6 : vec3(0.78)) * on * tw','em += (h > 0.975 ? uRedCol * 1.6 : vec3(0.95, 0.70, 0.30)) * on * tw')
R('vec3(0.42 + 0.5 * skHash(cell + 3.1))) * lit','vec3(1.0, 0.76, 0.36) * (0.42 + 0.5 * skHash(cell + 3.1))) * lit')
R('float ca = clamp(cyn * 3.2, 0.0, 1.0); outc = mix(outc, vec3(0.05, 0.86, 0.96) * (0.7 + 0.45 * ca), ca);',
  'float ca = clamp(cyn * 3.2, 0.0, 1.0); outc = mix(outc, vec3(0.05, 0.86, 0.96) * (0.7 + 0.45 * ca), ca);\n  float aa = clamp(max(min(col.r, col.g) - col.b, 0.0) * 3.4, 0.0, 1.0); outc = mix(outc, uGW * (0.7 + 0.5 * aa), aa * uGA);')
# ---- rifle parts (99_parts.js, client/src/parts.js): the player's own rifle is a copy with their parts' numbers; the
# bots keep the plain one. Rooms are told which parts you carry when you make or join one.
R('get weapon(){return this.awm&&this.cur==="rifle"?Vi.awm:Vi[this.cur]}','get weapon(){return this.awm&&this.cur==="rifle"?Vi.awm:this.cur==="rifle"&&this.kitRifle||Vi[this.cur]}')
R('this.w={rifle:{mag:Vi.rifle.mag,reserve:Vi.rifle.reserve,cool:0}','this.w={rifle:{mag:(this.kitRifle||Vi.rifle).mag,reserve:(this.kitRifle||Vi.rifle).reserve,cool:0}')
R('this.ads=zr(this.ads+(h?t/.16:-t/.12),0,1)','this.ads=zr(this.ads+(h?t/(this.kitRifle&&this.cur==="rifle"&&this.kitRifle.ads||.16):-t/.12),0,1)')
R('this.net.send({t:"join",code:t,map:window.SCMAP||"city"}),','this.net.send({t:"join",code:t,map:window.SCMAP||"city",parts:window.SCPARTS||[0,0,0,0]}),')
R('this.net.send({t:"create",settings:{...(this._lastSettings()||{}),map:window.SCMAP||"city"}})','this.net.send({t:"create",settings:{...(this._lastSettings()||{}),map:window.SCMAP||"city"},parts:window.SCPARTS||[0,0,0,0]})')
# ---- the menu says WEAPON (finish, scope, parts: 82_workshop.js) and has no STORE
R('<button data-n="arsenal">ARSENAL</button>','<button data-n="arsenal">WEAPON</button>')
R('<button data-n="store">${I.cart}STORE</button>','')
# ---- the module
ring=open(REPO+'/client/src/ring.js').read().replace('export function ','function ').replace('export const ','const ')
ring+='\n/* ---------- parts.js (client/src/parts.js, verbatim) ---------- */\n'+open(REPO+'/client/src/parts.js').read().replace('export function ','function ').replace('export const ','const ')
mod='\n'.join(open(os.path.join(HERE,f)).read() for f in sorted(os.listdir(HERE)) if f.endswith('.js'))
MARK='/* ---------- Google Analytics events'
assert s.count(MARK)==1
s=s.replace(MARK,'/* ---------- ring.js (client/src/ring.js, verbatim) ---------- */\n'+ring+'\n'+mod+'\n\n'+MARK)
p=REPO+'/client/dist/game.js'; open(p+'.tmp','w').write(s); os.replace(p+'.tmp',p)
print('patched',len(s))

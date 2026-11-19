// The menu on LOOP CITY shows the wheel. Your operator walks down the long street that runs all the way round the ring
// (z = 19.8: nothing stands in it for the whole 640 m) and the camera follows a few steps behind. Ahead, the street
// curves up and comes back overhead; the camera slowly tilts between the road and the far side of the wheel.
var RLB=null;
function RLOBBY(g,cam,t,T,s,light){
  const ar=g.arena;
  if(!RLB){RLB={x0:-210+Math.random()*120,z:19.8};const u0=g.update.bind(g);g.update=t=>{RCB&&(RCB.mesh.visible=g.state!=="title");return u0(t)}}   // no cables across the picture on the menu
  const wide=innerWidth>innerHeight,x=ar.wrapX(RLB.x0+1.55*T),gy=ar.groundY(x,RLB.z,3,8),y=gy==null?.11:gy;
  s.rig.update(t,{aim:!1,crouch:!1,pitch:.05,twist:Math.sin(T*.4)*.08,speed:2.1,moveDir:new I(0,0,1),mode:"ground"});
  s.rig.root.position.set(x,y,RLB.z);s.rig.root.rotation.y=Math.PI/2;s.rig.root.updateMatrixWorld(!0);
  const k=.5-.5*Math.cos(T*TAUL/34),pitch=.05+.38*k;   // every 34 s: down the road, up to the far side, and back
  const fov=wide?62:76;cam.fov!==fov&&(cam.fov=fov,cam.updateProjectionMatrix());
  const back=5.6+k*.6,side=wide?-1.5:-.4,hgt=1.45+k*.7+Math.sin(T*.9)*.03;   // the operator walks right of the middle, between the menu's columns
  cam.position.set(ar.wrapX(x-back),y+hgt,RLB.z+side);
  RLOOK(g,cam,ar.wrapX(x+40),y+hgt+40*Math.tan(pitch),RLB.z+side*.4);
  light&&light.position.set(x-1.6,y+2.6,RLB.z-1.2);
}
var TAUL=Math.PI*2;

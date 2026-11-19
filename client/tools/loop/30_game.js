// The loop inside the running game.
function RING(g){
  if(!SCLOOP)return;
  const ar=g.arena,ring=ar.ring,R=ring.R,C=ring.C,H=ring.H,Zd=ar.data.zone,city=g.city,scene=g.gfx.scene,T=g.ringT={};
  window.__ring=T;
  // ---- the halo: a stretched circle (see ring.js); its centre can differ from match to match
  T.setZone=(cx,cz)=>{Object.assign(g.zone,{cx:cx,cz:cz,C:C,k:Zd.ring.k,r1:Zd.ring.r1});ar.setZone(cx,cz);g.angel.root.position.x=cx;g.angel.root.position.z=cz};
  T.setZone(Zd.center[0],Zd.center[1]);
  // ---- light: the baked map replaces the city's lamp map; thin haze instead of rain and fog; no thunder in space
  T.light=()=>{Wt.uLampMap.value=city.shade;Wt.uLampBox.value.set(-H,-ar.zmax,1/C,1/(2*ar.zmax))};T.light();
  Wt.uFogParams.value.set(0,0,1,.0023);Wt.uFogLow.value.setRGB(.012,.013,.016);Wt.uFogHigh.value.setRGB(.006,.006,.008);Wt.uFogDeep.value.setRGB(.004,.004,.005);
  if(g.xv){const x=g.xv;x.moon0=city.moon.intensity;x.hemi0=city.hemi.intensity;x.boltAt=1e12;x.boltT=-1;x.lampHead&&(x.lampHead.visible=x.lampPole.visible=!1)}
  if(g.fx.rain&&g.fx.rain.isObject3D){scene.remove(g.fx.rain);g.fx.rain={visible:!1}}
  {const b=document.getElementById("rainb");b&&(b.style.display="none")}
  g.fx.curtain.visible=!1;
  RLINKS(g);RMAP(g);RNET(g);
  {const au=g.audio,quiet=()=>{try{au.rain.g.gain.value=0;au.wind.g.gain.value=.028}catch(e){}},amb=au._ambience;au._ambience=function(){amb.apply(this,arguments);quiet()};quiet()}   // no rain on a space station: a low hum is enough
  // ---- every frame
  const up=g.update;
  g.update=function(dt){
    const r=up.apply(this,arguments);
    ar.norm(g.player.pos);for(const b of g.bots)ar.norm(b.pos);
    const z=g.zone;Wt.uPulse.value.x=z.k*Math.max(0,z.r-z.r1);
    g.fx.curtain.visible=!1;
    const cam=g.gfx.camera;city.sky.rotation.z=-cam.position.x/R+g.clock*.05;
    return r};
}

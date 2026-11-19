/* ---------- GRAPHITE: a rifle skin, free in the store. "CHEYTAC M200 INTERVENTION" by JaumWF (Sketchfab, CC BY 4.0),
   simplified and repainted graphite and red by client/tools/pack_graphite.py. It replaces the look of your rifle in first
   person; the rifle's numbers do not change (online every sniper's rifle is the same rifle). ---------- */
var RGS={on:!1,ready:null,grp:null};
try{RGS.on=localStorage.getItem("sc.gun")==="graphite"}catch(e){}
function RGLOAD(g){
  if(RGS.ready)return RGS.ready;
  RGS.ready=WS("graphite.txt",null).then(buf=>{
    const u8=new Uint8Array(buf),dv=new DataView(buf);if(String.fromCharCode(u8[0],u8[1],u8[2],u8[3])!=="SCGR")throw new Error("bad graphite pack");
    const hn=dv.getUint32(4,!0),H=JSON.parse(new TextDecoder().decode(u8.subarray(8,8+hn))),o=8+hn,grp=new ce;grp.name="graphite";
    const tex=(f,srgb)=>{const t=new Xe;const im=new Image;im.onload=()=>{t.image=im;t.flipY=!1;t.colorSpace=srgb?Ne:"";t.anisotropy=8;t.needsUpdate=!0};im.src=f;return t};
    H.parts.forEach((p,k)=>{const b=o+p.off,nv=p.nv,q=new Int16Array(buf.slice(b,b+nv*6)),nq=new Int8Array(buf.slice(b+nv*6,b+nv*10)),uq=new Uint16Array(buf.slice(b+nv*10,b+nv*14)),ix=new Uint32Array(buf.slice(b+nv*14,b+nv*14+p.nt*12));
      const pos=new Float32Array(nv*3),nrm=new Float32Array(nv*3),uv=new Float32Array(nv*2);
      for(let i=0;i<nv;i++){for(let c=0;c<3;c++){pos[i*3+c]=H.min[c]+(q[i*3+c]+32768)/65535*(H.max[c]-H.min[c]);nrm[i*3+c]=nq[i*4+c]/127}uv[i*2]=uq[i*2]/65535;uv[i*2+1]=uq[i*2+1]/65535}
      const gm=new se;gm.setAttribute("position",new Ft(pos,3));gm.setAttribute("normal",new Ft(nrm,3));gm.setAttribute("uv",new Ft(uv,2));gm.setIndex(new Ft(ix,1));
      const m=new Ye({color:16777215,map:tex("graphite_c"+k+".jpg",!0),normalMap:tex("graphite_n"+k+".jpg",!1),side:2});try{Gi(m,ou(.3))}catch(x){try{Gi(m)}catch(y){}}
      const me=new Qt(gm,m);me.renderOrder=2;me.frustumCulled=!1;grp.add(me)});
    RGS.box=H;RGS.grp=grp;RGFIT(g);return grp}).catch(x=>{RGS.ready=null;console.warn("graphite",x)});
  return RGS.ready;
}
// sit the model where the first-person rifle is, as long as it, pointing the same way
function RGFIT(g){
  const fp=g.fp,R=fp&&fp.rifle,G=RGS.grp;if(!R||!G||G.parent)return;
  RGS.orig=[];R.traverse(m=>{m.isMesh&&RGS.orig.push(m)});
  R.updateMatrixWorld(!0);const inv=new gt().copy(R.matrixWorld).invert();
  let lo=new I(1e9,1e9,1e9),hi=new I(-1e9,-1e9,-1e9),v=new I;
  const pts=[];for(const m of RGS.orig){const p=m.geometry.getAttribute("position");if(!p)continue;const M=new gt().multiplyMatrices(inv,m.matrixWorld);for(let i=0;i<p.count;i+=5){v.fromBufferAttribute(p,i).applyMatrix4(M);lo.min(v);hi.max(v);pts.push(v.x,v.y,v.z)}}
  // which end is the muzzle: the slimmer one (the barrel), against the stock and grip at the other
  const L=hi.z-lo.z,band=(z0,z1)=>{let a=1e9,b=-1e9;for(let i=0;i<pts.length;i+=3)if(pts[i+2]>=z0&&pts[i+2]<=z1){a=Math.min(a,pts[i+1]);b=Math.max(b,pts[i+1])}return b-a};
  const fwdNeg=band(lo.z,lo.z+L*.15)<band(hi.z-L*.15,hi.z);   // the muzzle at -z, as the model is packed
  const H=RGS.box,gl=H.max[2]-H.min[2],s=L/gl*.82;   // a little shorter than the rifle: its receiver and scope are bigger
  G.scale.setScalar(s);G.rotation.y=fwdNeg?0:Math.PI;   // the scope where the rifle's scope was (its top), the stock where its stock was
  G.position.set((lo.x+hi.x)/2,hi.y-H.max[1]*s-.035,fwdNeg?hi.z-H.max[2]*s:lo.z+H.max[2]*s);
  R.add(G);RGS.fit={lo:lo.toArray(),hi:hi.toArray(),s,fwdNeg};
}
function RGRAPHITE(g){
  const apply=()=>{try{Vi.rifle.name=RGS.on?"GRAPHITE .408":"BALLISTA .338";g.player&&g.player.alive&&g.hud.weapon(g.player)}catch(x){}};
  RGS.set=v=>{RGS.on=!!v;try{localStorage.setItem("sc.gun",v?"graphite":"")}catch(x){}v&&RGLOAD(g);apply()};
  g.graphite=RGS;RGS.on&&RGLOAD(g);apply();
  const u0=g.update.bind(g);g.update=t=>{u0(t);const G=RGS.grp;if(!G||!G.parent)return;G.visible=RGS.on;for(const m of RGS.orig)m.visible=!RGS.on};
}
// the store's card
function RGSTORE(){return`<div style="display:flex;gap:16px;align-items:center;border:1px solid ${RGS.on?"var(--lime,#c8f31d)":"rgba(224,24,45,.6)"};padding:14px 16px;margin:12px 0;background:linear-gradient(90deg,rgba(224,24,45,.12),rgba(5,5,5,.2))">
<img src="graphite_card.jpg" alt="" style="width:46%;max-width:300px;border:1px solid rgba(255,255,255,.12)">
<div style="flex:1"><b style="color:#fff;font-size:20px;letter-spacing:.08em">GRAPHITE</b><div style="opacity:.6;font-size:12px;letter-spacing:.16em;margin:2px 0 8px">CHEYTAC M200 · RIFLE SKIN</div>
<p style="margin:0 0 10px">Carbon weave and black gunmetal, cut with red. Replaces the look of your rifle; it shoots the same.</p>
<div style="display:flex;gap:10px;align-items:center"><b style="color:var(--lime,#c8f31d);letter-spacing:.14em">FREE</b>
<button type="button" id="rg-eq" style="padding:8px 16px;font:800 13px/1 inherit;letter-spacing:.14em;border:0;cursor:pointer;background:${RGS.on?"rgba(242,242,239,.15)":"var(--lime,#c8f31d)"};color:${RGS.on?"#fff":"#050505"}">${RGS.on?"UNEQUIP":"EQUIP"}</button>
${RGS.on?'<span style="color:var(--lime,#c8f31d);letter-spacing:.14em;font-size:12px">EQUIPPED</span>':""}
<button type="button" id="rg-ws" style="padding:8px 0;font:600 13px/1 inherit;letter-spacing:.12em;border:0;border-bottom:2px solid #e0182d;cursor:pointer;background:none;color:#fff">SEE IT IN THE WORKSHOP</button></div></div></div>`}
function RGWIRE(open){const b=document.getElementById("rg-eq");b&&b.addEventListener("click",()=>{RGS.set&&RGS.set(!RGS.on);open&&open()})}

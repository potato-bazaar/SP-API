/* ---------- the workshop: ARSENAL opens a bench with your rifle on it, drawn large by a small renderer of its own.
   Drag to turn it, scroll or pinch to look closer, pick a finish from the tags along the bottom, equip it.
   Finishes are looks only: every rifle in the game shoots the same. ---------- */
var RWK=null;
function RWORKSHOP(g){
  const SK=[{id:"std",name:"BALLISTA .338",line:"Standard issue",text:"Bolt action, five rounds, 4× and 8× glass. The rifle every sniper in the city carries.",sw:"linear-gradient(135deg,#2a2b30,#0b0b0d 60%,#b51224 61%,#b51224 66%,#0b0b0d 67%)"},
    {id:"graphite",name:"GRAPHITE .408",line:"Carbon fibre collection · free",text:"Carbon weave and black gunmetal, cut with red. A long-range body for the same rifle.",sw:"repeating-linear-gradient(45deg,#17181b 0 4px,#26272c 4px 8px),linear-gradient(#e0182d,#e0182d)"}];
  const css=`#wk{position:fixed;inset:0;z-index:60;background:radial-gradient(120% 90% at 62% 40%,#1b1c20 0,#0a0a0c 55%,#050505 100%);color:#f2f2ef;font-family:"Barlow Condensed","Arial Narrow",system-ui,sans-serif;overflow:hidden;touch-action:none;user-select:none;-webkit-user-select:none}
#wk:before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.055) 1.2px,transparent 1.6px);background-size:34px 34px;-webkit-mask-image:linear-gradient(#000 0,#000 52%,transparent 70%);mask-image:linear-gradient(#000 0,#000 52%,transparent 70%)}
#wk canvas{position:absolute;inset:0;width:100%;height:100%;display:block;cursor:grab}#wk canvas:active{cursor:grabbing}
#wk .hd{position:absolute;left:max(22px,env(safe-area-inset-left));top:max(18px,env(safe-area-inset-top));max-width:min(30rem,62vw);pointer-events:none}
#wk .kick{font:400 12px/1 "JetBrains Mono",ui-monospace,monospace;color:#8c8d90;letter-spacing:.06em}
#wk h2{margin:8px 0 2px;font:italic 800 clamp(34px,6.2vw,74px)/.9 "Barlow Condensed","Arial Narrow",sans-serif;letter-spacing:-.01em}
#wk .ln{font:600 15px/1.2 "Barlow Condensed",sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#e0182d}
#wk .tx{margin:10px 0 0;font:400 15px/1.45 system-ui,-apple-system,"Segoe UI",sans-serif;color:#cfd0d2;max-width:24rem}
#wk .bk{position:absolute;right:max(20px,env(safe-area-inset-right));top:max(16px,env(safe-area-inset-top));font:600 15px/1 "Barlow Condensed",sans-serif;letter-spacing:.12em;color:#f2f2ef;background:none;border:0;padding:10px 4px;cursor:pointer;border-bottom:2px solid #e0182d}
#wk .ft{position:absolute;left:max(22px,env(safe-area-inset-left));right:max(22px,env(safe-area-inset-right));bottom:max(16px,env(safe-area-inset-bottom));display:flex;align-items:flex-end;gap:14px;flex-wrap:wrap}
#wk .tags{display:flex;gap:10px;flex:1;min-width:0;overflow-x:auto;padding:14px 2px 2px}
#wk .tag{position:relative;flex:0 0 auto;width:158px;text-align:left;background:#101013;border:0;border-top:3px solid #3a3b40;color:inherit;padding:9px 11px 10px;cursor:pointer;font:inherit}
#wk .tag:nth-child(odd){transform:rotate(-.8deg)}#wk .tag:nth-child(even){transform:rotate(.6deg) translateY(3px)}
#wk .tag:before{content:"";position:absolute;left:14px;top:-13px;width:9px;height:9px;border-radius:50%;border:2px solid #55565c;background:#050505}
#wk .tag.sel{border-top-color:#c8f31d;background:#16171b}#wk .tag i{display:block;height:26px;margin-bottom:8px;background-size:auto,100% 4px;background-repeat:repeat,no-repeat;background-position:0 0,0 100%}
#wk .tag b{display:block;font:700 17px/1 "Barlow Condensed",sans-serif;letter-spacing:.06em}#wk .tag small{display:block;margin-top:4px;font:400 11px/1 "JetBrains Mono",ui-monospace,monospace;color:#8c8d90}
#wk .tag.eq small{color:#c8f31d}
#wk .go{flex:0 0 auto;padding:15px 30px;border:0;background:#c8f31d;color:#050505;font:italic 800 24px/1 "Barlow Condensed",sans-serif;letter-spacing:.06em;cursor:pointer}
#wk .go[disabled]{background:#26272c;color:#8c8d90;cursor:default}
#wk .hand{position:absolute;right:max(26px,env(safe-area-inset-right));bottom:calc(max(16px,env(safe-area-inset-bottom)) + 92px);transform:rotate(-3deg);font:italic 19px/1.2 "Bradley Hand","Segoe Print","Ink Free",cursive;color:#d9d4c2;text-align:right;pointer-events:none}
#wk .hint{position:absolute;left:50%;top:max(20px,env(safe-area-inset-top));transform:translateX(-50%);font:400 11px/1 "JetBrains Mono",ui-monospace,monospace;color:#6d6e72;pointer-events:none;white-space:nowrap}
#wk .lo{font:600 13px/1 "Barlow Condensed",sans-serif;letter-spacing:.12em;color:#8c8d90;background:none;border:0;cursor:pointer;text-decoration:underline;padding:8px 0;pointer-events:auto}
@media (max-height:460px){#wk .tx{display:none}#wk .hand{display:none}#wk .tag i{height:14px}}@media (max-width:640px){#wk .hint{display:none}}`;
  const bbox=o=>{const lo=new I(1e9,1e9,1e9),hi=new I(-1e9,-1e9,-1e9),v=new I;o.updateMatrixWorld(!0);o.traverse(m=>{if(!m.isMesh)return;const p=m.geometry.getAttribute("position");for(let i=0;i<p.count;i+=7){v.fromBufferAttribute(p,i).applyMatrix4(m.matrixWorld);lo.min(v);hi.max(v)}});return{lo,hi}};
  // a copy of a rifle for the bench: the same geometry, plain lit materials (the game's own carry the map's shader)
  const copy=(meshes,frame,graph)=>{const grp=new ce,inv=new gt().copy(frame.matrixWorld).invert();
    for(const m of meshes){const a=Array.isArray(m.material)?m.material[0]:m.material,o={color:graph?16777215:a.color?a.color.clone():new Tt(.1,.1,.1),map:a.map||null,side:2};graph&&a.normalMap&&(o.normalMap=a.normalMap);
      const M=new Ye(o);a.emissive&&M.emissive&&(M.emissive.copy(a.emissive),M.emissiveMap=a.emissiveMap||null);const c=new Qt(m.geometry,M);c.applyMatrix4(new gt().multiplyMatrices(inv,m.matrixWorld));grp.add(c)}
    const b=bbox(grp),L=Math.max(b.hi.x-b.lo.x,b.hi.y-b.lo.y,b.hi.z-b.lo.z)||1,hold=new ce;grp.position.set(-(b.lo.x+b.hi.x)/2,-(b.lo.y+b.hi.y)/2,-(b.lo.z+b.hi.z)/2);hold.add(grp);hold.scale.setScalar(1.75/L);
    hold.rotation.y=(b.hi.z-b.lo.z)>=(b.hi.x-b.lo.x)?Math.PI/2:0;hold.userData.h=(b.hi.y-b.lo.y)*1.75/L;return hold};
  const model=id=>{const R=g.fp&&g.fp.rifle;if(!R)return null;R.updateMatrixWorld(!0);
    if(id==="graphite"){const G=RGS.grp;if(!G)return null;G.updateMatrixWorld(!0);return copy(G.children.filter(m=>m.isMesh),G,!0)}
    const hand=m=>{for(let p=m.parent;p&&p!==R;p=p.parent)if(p.name==="hands"||p.name==="graphite")return!0;return!1},all=[];R.traverse(m=>{m.isMesh&&!hand(m)&&all.push(m)});return copy(all,R,!1)};
  const open=()=>{
    if(RWK)return!0;const R0=g.gfx&&g.gfx.renderer,F0=g.fp;if(!R0||!F0||!F0.rifle||!F0.hemi||!F0.key)return!1;
    const el=document.createElement("div");el.id="wk";el.innerHTML=`<style>${css}</style><canvas></canvas><div class="hd"><div class="kick">the workshop · rooftop ${SCLOOP?"ring 01":"block 04"}</div><h2></h2><div class="ln"></div><p class="tx"></p><button class="lo" type="button">what every sniper carries</button><button class="lo" type="button" data-open="scopes" style="margin-left:18px;color:#c8f31d">scopes and reticle colour</button><button class="lo" type="button" data-open="parts" style="margin-left:18px;color:#c8f31d">rifle parts</button></div>
<div class="hint">drag to turn · scroll to look closer</div><button class="bk" type="button">BACK TO THE ROOF</button><div class="hand">looks only —<br>every rifle shoots the same</div><div class="ft"><div class="tags"></div><button class="go" type="button"></button></div>`;
    document.body.appendChild(el);const cv=el.querySelector("canvas"),q=s=>el.querySelector(s);
    let r;try{r=new R0.constructor({canvas:cv,antialias:!0,alpha:!0})}catch(x){el.remove();return!1}
    r.setPixelRatio(Math.min(devicePixelRatio||1,2));const sc=new g.gfx.scene.constructor,cam=new g.gfx.camera.constructor(30,1,.05,40);
    sc.add(new F0.hemi.constructor(13160660,1579548,1.05));const key=new F0.key.constructor(16777215,2.4);key.position.set(-1.6,2.6,2.2);sc.add(key);const rim=new F0.key.constructor(16719913,2.2);rim.position.set(2.2,.9,-2.4);sc.add(rim);
    // the bench: a scratched top with a cutting grid and a chalked note, two rests, a soft shadow
    const bt=(()=>{const c=document.createElement("canvas");c.width=1024;c.height=512;const x=c.getContext("2d");x.fillStyle="#141518";x.fillRect(0,0,1024,512);x.strokeStyle="rgba(255,255,255,.05)";x.lineWidth=1;for(let i=0;i<=1024;i+=32){x.beginPath();x.moveTo(i,0);x.lineTo(i,512);x.stroke()}for(let i=0;i<=512;i+=32){x.beginPath();x.moveTo(0,i);x.lineTo(1024,i);x.stroke()}
      for(let i=0;i<260;i++){x.strokeStyle=`rgba(255,255,255,${.02+Math.random()*.05})`;x.beginPath();const a=Math.random()*1024,b=Math.random()*512,t=Math.random()*6.28,l=10+Math.random()*90;x.moveTo(a,b);x.lineTo(a+Math.cos(t)*l,b+Math.sin(t)*l);x.stroke()}
      x.save();x.translate(700,430);x.rotate(-.06);x.fillStyle="rgba(217,212,194,.6)";x.font='italic 34px "Bradley Hand","Segoe Print","Ink Free",cursive';x.fillText("zeroed · 100 m",0,0);x.restore();x.strokeStyle="rgba(224,24,45,.55)";x.lineWidth=3;x.strokeRect(60,60,904,392);const t=new rs(c);t.colorSpace=Ne;return t})();
    const bench=new Qt(new an(4.4,.08,1.7),new Ye({map:bt}));bench.position.y=-.5;sc.add(bench);
    const sh=(()=>{const c=document.createElement("canvas");c.width=256;c.height=64;const x=c.getContext("2d"),G=x.createRadialGradient(128,32,4,128,32,120);G.addColorStop(0,"rgba(0,0,0,.75)");G.addColorStop(1,"rgba(0,0,0,0)");x.fillStyle=G;x.fillRect(0,0,256,64);const t=new rs(c);const m=new Qt(new os(2.6,.7),new _e({map:t,transparent:!0,depthWrite:!1}));m.rotation.x=-Math.PI/2;m.position.y=-.455;return m})();sc.add(sh);
    const restM=new Ye({color:new Tt(.012,.012,.014)}),rests=[-.46,.4].map(x=>{const o=new Qt(new an(.07,1,.2),restM);o.position.x=x;sc.add(o);return o});
    const turn=new ce;sc.add(turn);
    const st={el,r,sc,cam,turn,spin:-.5,tilt:.1,dist:1,sel:RGS.on?"graphite":"std",drag:null,raf:0,pinch:0,idle:0,cur:null,curId:""};RWK=st;
    const show=()=>{const k=SK.find(s=>s.id===st.sel),on=(RGS.on?"graphite":"std")===st.sel;q("h2").textContent=k.name;q(".ln").textContent=k.line;q(".tx").textContent=k.text;const go=q(".go");go.textContent=on?"EQUIPPED":"EQUIP";go.disabled=on;
      q(".tags").innerHTML=SK.map(s=>`<button type="button" class="tag${s.id===st.sel?" sel":""}${(RGS.on?"graphite":"std")===s.id?" eq":""}" data-s="${s.id}"><i style="background-image:${s.sw}"></i><b>${s.name}</b><small>${(RGS.on?"graphite":"std")===s.id?"equipped":"free · tap to look"}</small></button>`).join("");
      if(st.curId!==st.sel){const m=model(st.sel);if(m){st.cur&&turn.remove(st.cur);st.cur=m;st.curId=st.sel;turn.add(m);const y0=-.46,bot=-m.userData.h/2;turn.position.y=y0-bot+.1;rests.forEach(o=>{o.scale.y=.1+m.userData.h*.22;o.position.y=y0+o.scale.y/2})}
        else if(st.sel==="graphite")RGLOAD(g).then(()=>{RWK===st&&show()})}};
    const size=()=>{const w=el.clientWidth||innerWidth,h=el.clientHeight||innerHeight;r.setSize(w,h,!1);cam.aspect=w/h;cam.updateProjectionMatrix();st.fit=w/h<1.25?1.25/(w/h):1};
    const frame=()=>{st.raf=requestAnimationFrame(frame);st.drag==null&&(st.idle+=1/60,st.idle>2.5&&(st.spin+=.0035));turn.rotation.y=st.spin;turn.rotation.x=st.tilt;const d=2.95*st.dist*st.fit;cam.position.set(0,turn.position.y+.42+st.tilt*.6,d);cam.lookAt(.12,turn.position.y-.06,0);r.render(sc,cam)};
    const close=()=>{cancelAnimationFrame(st.raf);removeEventListener("resize",size);removeEventListener("keydown",key0,!0);try{r.dispose();r.forceContextLoss&&r.forceContextLoss()}catch(x){}el.remove();RWK=null};
    const key0=e=>{e.key==="Escape"&&!document.getElementById("sk")&&!document.getElementById("pk")&&(e.stopPropagation(),close())};st.close=close;
    cv.addEventListener("pointerdown",e=>{st.drag={x:e.clientX,y:e.clientY};st.idle=0;try{cv.setPointerCapture(e.pointerId)}catch(x){}});
    cv.addEventListener("pointermove",e=>{if(!st.drag)return;st.spin+=(e.clientX-st.drag.x)*.011;st.tilt=Math.max(-.5,Math.min(.75,st.tilt+(e.clientY-st.drag.y)*.006));st.drag={x:e.clientX,y:e.clientY};st.idle=0});
    const up=()=>{st.drag=null};cv.addEventListener("pointerup",up);cv.addEventListener("pointercancel",up);
    cv.addEventListener("wheel",e=>{e.preventDefault();st.dist=Math.max(.45,Math.min(1.35,st.dist*(e.deltaY>0?1.08:.925)));st.idle=0},{passive:!1});
    cv.addEventListener("touchmove",e=>{if(e.touches.length!==2)return;const d=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);st.pinch&&(st.dist=Math.max(.45,Math.min(1.35,st.dist*st.pinch/d)));st.pinch=d;st.drag=null},{passive:!0});cv.addEventListener("touchend",()=>{st.pinch=0});
    q(".tags").addEventListener("click",e=>{const b=e.target.closest(".tag");b&&(st.sel=b.dataset.s,st.idle=0,show())});
    q(".go").addEventListener("click",()=>{RGS.set&&RGS.set(st.sel==="graphite");show()});q(".bk").addEventListener("click",close);
    q(".lo").addEventListener("click",()=>{close();const b=document.querySelector('[data-n="arsenal"]');b&&(RWORKSHOP.skip=1,b.click())});
    addEventListener("resize",size);addEventListener("keydown",key0,!0);size();show();frame();return!0};
  // ARSENAL in the menu opens the workshop (the list of what you carry is one tap further in)
  document.addEventListener("click",e=>{const b=e.target&&e.target.closest&&e.target.closest('[data-n="arsenal"],#rg-ws');if(!b)return;if(RWORKSHOP.skip){RWORKSHOP.skip=0;return}if(open()){e.stopPropagation();e.preventDefault();const x=document.getElementById("m2-x");b.id==="rg-ws"&&x&&x.click()}},!0);
  g.workshop={open,close:()=>{RWK&&RWK.close()},get state(){return RWK}};
}

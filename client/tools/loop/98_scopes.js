/* ---------- scopes: ten reticles for the rifle, from the plain cross you started with to glass that reads the range,
   brackets what you are aiming at and gives a bearing. Each has its own zoom steps (3× to 10×) and any of seven colours.
   Chosen in the workshop; kept on this device. Every scope is free and they all shoot the same rifle. ---------- */
var RSC={id:"std",col:"ink",range:0,tgt:!1};
var RSC_COL={ink:["INK","#050505"],red:["RED","#ff2d3c"],lime:["LIME","#c8f31d"],cyan:["CYAN","#19dcf5"],amber:["AMBER","#ffc24a"],white:["WHITE","#f2f2ef"],pink:["PINK","#ff2bd6"]};
var RSC_LIST=[
  {id:"std",name:"STANDARD",tier:"simple",zooms:[4,8],line:"The cross every sniper starts with."},
  {id:"fine",name:"FINE CROSS",tier:"simple",zooms:[3,6],line:"Thin wires and a small gap, so nothing covers the target."},
  {id:"duplex",name:"DUPLEX",tier:"simple",zooms:[3,6,8],line:"Heavy posts lead the eye to a fine centre. Fast in fog."},
  {id:"ring",name:"DOT AND RING",tier:"simple",zooms:[3,4],line:"A ring to frame a body and a dot to place the shot. Short range."},
  {id:"chev",name:"CHEVRON",tier:"marksman",zooms:[4,8],line:"Aim with the tip. Three bars under it for longer shots."},
  {id:"post",name:"THREE POST",tier:"marksman",zooms:[4,6],line:"Three thick posts and a pointed one from below. Hard to lose in the dark."},
  {id:"mil",name:"MIL DOT",tier:"marksman",zooms:[4,6,8,10],line:"Evenly spaced dots on every arm, for judging size and holding off."},
  {id:"tree",name:"HOLD TREE",tier:"marksman",zooms:[6,8,10],line:"Rows that widen below the centre: hold low and wide without touching a dial."},
  {id:"ranger",name:"RANGER",tier:"advanced",zooms:[3,4,6,8,10],line:"Numbered marks, a live range read-out, and a bracket that closes on a sniper in your glass.",range:!0,bracket:!0},
  {id:"watch",name:"OVERWATCH",tier:"advanced",zooms:[3,4,6,8,10],line:"Everything on the Ranger, plus your bearing and the zoom you are on, inside a ranging ring.",range:!0,bracket:!0,bear:!0}];
function RSCDRAW(id,col){
  const c=(RSC_COL[col]||RSC_COL.ink)[1],dotc=col==="ink"?"#e0182d":c,o=[],st=(w,cc)=>`style="stroke:${cc||c};stroke-width:${w};vector-effect:non-scaling-stroke;fill:none"`;
  const L=(a,b,x,y,w=1.1,cc)=>o.push(`<line x1="${a}" y1="${b}" x2="${x}" y2="${y}" ${st(w,cc)}/>`),D=(x,y,r,cc)=>o.push(`<circle cx="${x}" cy="${y}" r="${r}" style="fill:${cc||c};stroke:none"/>`),
    O=(x,y,r,w=1.3)=>o.push(`<circle cx="${x}" cy="${y}" r="${r}" ${st(w)}/>`),T=(x,y,s,t,a="start")=>o.push(`<text x="${x}" y="${y}" text-anchor="${a}" style="fill:${c};stroke:none;font:600 ${s}px 'JetBrains Mono',ui-monospace,monospace">${t}</text>`);
  const cross=g=>{L(-100,0,-g,0);L(g,0,100,0);L(0,-100,0,-g);L(0,g,0,100)};
  if(id==="std"){cross(3);L(-100,0,-42,0,3.2);L(42,0,100,0,3.2);L(0,42,0,100,3.2);for(let n=1;n<=6;n++)for(const s of[-1,1])D(s*n*6,0,.5),D(0,s*n*6,.5);for(let n=1;n<=5;n++)L(-1.6,6*n+3,1.6,6*n+3);D(0,0,.55,dotc)}
  else if(id==="fine"){cross(2);for(let n=1;n<=8;n++)for(const s of[-1,1])L(s*n*10,-1.2,s*n*10,1.2,.9),L(-1.2,s*n*10,1.2,s*n*10,.9);D(0,0,.4,dotc)}
  else if(id==="duplex"){cross(0);L(-100,0,-30,0,3.6);L(30,0,100,0,3.6);L(0,-100,0,-30,3.6);L(0,30,0,100,3.6)}
  else if(id==="ring"){O(0,0,14,1.8);D(0,0,1,dotc);L(-26,0,-14,0);L(14,0,26,0);L(0,-26,0,-14);L(0,14,0,26);L(-100,0,-60,0,3);L(60,0,100,0,3);L(0,60,0,100,3)}
  else if(id==="chev"){L(-5.5,7,0,0,1.9);L(0,0,5.5,7,1.9);for(const[y,w]of[[13,7],[21,5],[29,3]])L(-w,y,w,y,1.3);L(0,34,0,100);L(-100,0,-40,0,3.2);L(40,0,100,0,3.2);L(-40,0,-12,0);L(12,0,40,0)}
  else if(id==="post"){L(-100,0,-9,0,3.8);L(9,0,100,0,3.8);L(0,100,0,9,3.8);L(0,9,0,1.5,1.4);L(-2.4,9,0,1.5,1.2);L(2.4,9,0,1.5,1.2)}
  else if(id==="mil"){cross(2);for(let n=1;n<=6;n++)for(const s of[-1,1])D(s*n*8,0,.9),D(0,s*n*8,.9);L(-100,0,-60,0,3.2);L(60,0,100,0,3.2);L(0,60,0,100,3.2);L(0,-100,0,-60,3.2);D(0,0,.45,dotc)}
  else if(id==="tree"){cross(2);for(let k=1;k<=8;k++){const y=k*5.5;for(let j=-k;j<=k;j++)j&&D(j*3.2,y,.5);L(-1.4,y,1.4,y,1.1);k%2===0&&T(k*3.2+3.5,y+1.4,3.8,k)}for(let n=1;n<=6;n++)for(const s of[-1,1])L(s*n*8,-1.5,s*n*8,1.5);D(0,0,.45,dotc)}
  else{cross(3);for(let n=1;n<=18;n++){const h=n%2?1.3:2.6;for(const s of[-1,1])L(s*n*5,-h,s*n*5,h,.9);L(-h,n*5,h,n*5,.9);n%4===0&&n<=20&&T(4,n*5+1.4,3.8,n/2)}L(-100,0,-94,0,3);L(94,0,100,0,3);D(0,0,.5,dotc);
    if(id==="watch"){for(let a=0;a<360;a+=5){const r=a*Math.PI/180,r0=a%45===0?80:a%15===0?83:85;L(Math.cos(r)*r0,Math.sin(r)*r0,Math.cos(r)*87,Math.sin(r)*87,.9)}O(0,0,87,.9);for(const[x,y]of[[-1,-1],[1,-1],[-1,1],[1,1]]){L(x*30,y*24,x*30,y*30,1.3);L(x*24,y*30,x*30,y*30,1.3)}}}
  return o.join("");
}
function RSCOPES(g){
  try{const s=JSON.parse(localStorage.getItem("sc.scope")||"{}");RSC_LIST.some(k=>k.id===s.id)&&(RSC.id=s.id);RSC_COL[s.col]&&(RSC.col=s.col)}catch(x){}
  const ret=document.getElementById("ret"),cur=()=>RSC_LIST.find(k=>k.id===RSC.id)||RSC_LIST[0];if(!ret)return;
  const apply=()=>{const k=cur();ret.innerHTML=RSCDRAW(k.id,RSC.col)+'<g id="rs-dyn"></g>';try{Vi.rifle.zooms=k.zooms.slice();const p=g.player;p&&(p.zoomF=0,p.zoomIdx=Math.min(p.zoomIdx||0,k.zooms.length-1))}catch(x){}last=""};
  const set=(id,col)=>{id&&RSC_LIST.some(k=>k.id===id)&&(RSC.id=id);col&&RSC_COL[col]&&(RSC.col=col);try{localStorage.setItem("sc.scope",JSON.stringify({id:RSC.id,col:RSC.col}))}catch(x){}apply()};
  let last="";apply();
  // what the advanced glass shows: the range the game already measures, whether a sniper is under the cross, where you face
  const h=g.hud,sc0=h.scope.bind(h),tg0=h.target.bind(h);h.scope=(on,z,range,...r)=>{RSC.on=!!on;RSC.z=z;RSC.range=range;return sc0(on,z,range,...r)};h.target=t=>{RSC.tgt=!!t;return tg0(t)};
  const u0=g.update.bind(g);g.update=t=>{const r=u0(t),k=cur();if(!RSC.on||!(k.range||k.bear))return r;const dyn=document.getElementById("rs-dyn");if(!dyn)return r;
    const c=(RSC_COL[RSC.col]||RSC_COL.ink)[1],hot=RSC.tgt?"#ff2d3c":c,m=RSC.range>0?Math.round(RSC.range):0,p=g.player,brg=k.bear&&p?((Math.round(-p.yaw*180/Math.PI)%360)+360)%360:-1,key=m+"|"+RSC.tgt+"|"+brg+"|"+RSC.z+"|"+c;
    if(key===last)return r;last=key;const f=s=>`font:600 ${s}px 'JetBrains Mono',ui-monospace,monospace`;let s="";
    if(k.range&&m)s+=`<rect x="7" y="-15" width="${m>999?25:m>99?21.5:18}" height="7.4" rx="1" style="fill:rgba(5,5,5,.72);stroke:${hot};stroke-width:1.1;vector-effect:non-scaling-stroke"/><text x="8.8" y="-9.4" style="fill:#f2f2ef;stroke:none;${f(4.9)}">${m} m</text>`;
    if(k.bracket&&RSC.tgt)s+=`<path d="M0,-6 L6,0 L0,6 L-6,0 Z" style="fill:none;stroke:#ff2d3c;stroke-width:1.6;vector-effect:non-scaling-stroke"/>`;
    if(k.bear){s+=`<text x="0" y="-70" text-anchor="middle" style="fill:${c};stroke:none;${f(4.6)}">BRG ${String(brg).padStart(3,"0")}°</text><text x="0" y="76" text-anchor="middle" style="fill:${c};stroke:none;${f(4.6)}">${RSC.z}× · ${k.zooms.map(z=>z+"×").join(" ")}</text>`}
    dyn.innerHTML=s;return r};
  // ---- the picker (opened from the workshop)
  const css=`#sk{position:fixed;inset:0;z-index:70;background:radial-gradient(120% 90% at 30% 40%,#1b1c20 0,#0a0a0c 55%,#050505 100%);color:#f2f2ef;font-family:"Barlow Condensed","Arial Narrow",system-ui,sans-serif;display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.25fr);gap:18px;padding:max(16px,env(safe-area-inset-top)) max(20px,env(safe-area-inset-right)) max(14px,env(safe-area-inset-bottom)) max(20px,env(safe-area-inset-left));overflow:hidden;user-select:none;-webkit-user-select:none}
#sk .pv{display:flex;flex-direction:column;min-height:0}#sk .kick{font:400 12px/1 "JetBrains Mono",ui-monospace,monospace;color:#8c8d90}#sk h2{margin:6px 0 2px;font:italic 800 clamp(28px,4.6vw,56px)/.9 "Barlow Condensed",sans-serif}
#sk .ln{font:600 14px/1.2 "Barlow Condensed",sans-serif;letter-spacing:.14em;color:#e0182d;text-transform:uppercase}#sk .tx{margin:6px 0 8px;font:400 14px/1.4 system-ui,sans-serif;color:#cfd0d2;max-width:26rem}
#sk .lens{flex:1;min-height:0;aspect-ratio:1;max-height:100%;align-self:center;border-radius:50%;border:6px solid #050505;outline:1px solid #3a3b40;background:radial-gradient(circle at 44% 38%,#b9c6dc 0,#6b7c99 34%,#27314a 70%,#0c1020 100%);position:relative;overflow:hidden}
#sk .lens:before{content:"";position:absolute;inset:0;background:linear-gradient(transparent 52%,rgba(8,10,20,.82) 52.4%),repeating-linear-gradient(90deg,transparent 0 6%,rgba(8,10,20,.8) 6% 13%,transparent 13% 19%,rgba(8,10,20,.7) 19% 31%);-webkit-mask-image:linear-gradient(transparent 30%,#000 52%);mask-image:linear-gradient(transparent 30%,#000 52%);opacity:.8}
#sk .lens svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
#sk .rt{display:flex;flex-direction:column;min-height:0;gap:10px}#sk .bk{align-self:flex-end;font:600 15px/1 "Barlow Condensed",sans-serif;letter-spacing:.12em;color:#f2f2ef;background:none;border:0;border-bottom:2px solid #e0182d;padding:8px 4px;cursor:pointer}
#sk .grid{flex:1;min-height:0;overflow-y:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(128px,1fr));gap:9px;align-content:start;padding:2px}
#sk .card{background:#101013;border:0;border-top:3px solid #3a3b40;color:inherit;font:inherit;text-align:left;padding:8px 9px 9px;cursor:pointer;display:grid;grid-template-columns:44px 1fr;gap:8px;align-items:center}
#sk .card.sel{border-top-color:#c8f31d;background:#17181c}#sk .card i{width:44px;height:44px;border-radius:50%;background:radial-gradient(circle at 44% 38%,#b9c6dc,#5d6e8c 55%,#1c2438);display:block;overflow:hidden}#sk .card i svg{width:100%;height:100%;overflow:visible}
#sk .card b{display:block;font:700 15px/1 "Barlow Condensed",sans-serif;letter-spacing:.05em}#sk .card small{display:block;margin-top:4px;font:400 10px/1.25 "JetBrains Mono",ui-monospace,monospace;color:#8c8d90}#sk .card small em{font-style:normal;color:#c8f31d}
#sk .cols{display:flex;gap:9px;align-items:center;flex-wrap:wrap}#sk .cols span{font:400 11px/1 "JetBrains Mono",ui-monospace,monospace;color:#8c8d90;margin-right:4px}
#sk .sw{width:30px;height:30px;border-radius:50%;border:2px solid #3a3b40;cursor:pointer;padding:0}#sk .sw.sel{border-color:#f2f2ef;box-shadow:0 0 0 2px #050505,0 0 0 4px #c8f31d}
@media (orientation:portrait){#sk{grid-template-columns:1fr;grid-template-rows:minmax(0,.8fr) minmax(0,1fr)}}@media (max-height:440px){#sk .tx{display:none}#sk h2{font-size:28px}}`;
  let el=null;
  const paint=()=>{const k=cur(),q=s=>el.querySelector(s);q("h2").textContent=k.name;q(".ln").textContent=k.tier+" · "+k.zooms.map(z=>z+"×").join("  ");q(".tx").textContent=k.line;
    q(".lens svg").innerHTML=RSCDRAW(k.id,RSC.col)+(k.range?`<rect x="7" y="-15" width="21.5" height="7.4" rx="1" style="fill:rgba(5,5,5,.72);stroke:${RSC_COL[RSC.col][1]};stroke-width:1.1;vector-effect:non-scaling-stroke"/><text x="8.8" y="-9.4" style="fill:#f2f2ef;font:600 4.9px 'JetBrains Mono',monospace">172 m</text>`:"")+(k.bear?`<text x="0" y="-70" text-anchor="middle" style="fill:${RSC_COL[RSC.col][1]};font:600 4.6px 'JetBrains Mono',monospace">BRG 042°</text>`:"");
    q(".grid").innerHTML=RSC_LIST.map(s=>`<button type="button" class="card${s.id===RSC.id?" sel":""}" data-id="${s.id}"><i><svg viewBox="-100 -100 200 200">${RSCDRAW(s.id,RSC.col==="ink"?"ink":RSC.col)}</svg></i><span><b>${s.name}</b><small>${s.tier==="advanced"?"<em>advanced</em>":s.tier} · ${s.zooms.map(z=>z+"×").join(" ")}</small></span></button>`).join("");
    q(".cols").innerHTML="<span>reticle colour</span>"+Object.keys(RSC_COL).map(c=>`<button type="button" class="sw${c===RSC.col?" sel":""}" data-c="${c}" title="${RSC_COL[c][0]}" aria-label="${RSC_COL[c][0]}" style="background:${RSC_COL[c][1]}"></button>`).join("")};
  const close=()=>{el&&(el.remove(),el=null,removeEventListener("keydown",esc,!0))},esc=e=>{e.key==="Escape"&&(e.stopPropagation(),close())};
  const open=()=>{if(el)return;el=document.createElement("div");el.id="sk";el.innerHTML=`<style>${css}</style><div class="pv"><div class="kick">the workshop · glass</div><h2></h2><div class="ln"></div><p class="tx"></p><div class="lens"><svg viewBox="-100 -100 200 200"></svg></div></div><div class="rt"><button class="bk" type="button">BACK TO THE BENCH</button><div class="grid"></div><div class="cols"></div></div>`;
    document.body.appendChild(el);el.addEventListener("click",e=>{const c=e.target.closest(".card"),s=e.target.closest(".sw");c?(set(c.dataset.id),paint()):s?(set(null,s.dataset.c),paint()):e.target.closest(".bk")&&close()});addEventListener("keydown",esc,!0);paint()};
  document.addEventListener("click",e=>{e.target&&e.target.closest&&e.target.closest('[data-open="scopes"]')&&(e.preventDefault(),open())},!0);
  g.scopes={set,open,close,list:RSC_LIST,get cur(){return RSC}};
}

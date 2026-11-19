/* ---------- rifle parts: barrel, magazine, stock, ammunition. Each choice gives something and takes something
   (client/src/parts.js holds the numbers, and the server reads the same file). Your rifle is a copy of the standard one
   with your parts' numbers; the bots keep the standard rifle. Chosen in the workshop, kept on this device. ---------- */
function RPARTS(g){
  let sel=[0,0,0,0];try{sel=partsClean(JSON.parse(localStorage.getItem("sc.parts")||"[]"))}catch(x){}
  const build=()=>{const r=rifleWith(Vi.rifle,sel);Object.defineProperty(r,"name",{get:()=>Vi.rifle.name});Object.defineProperty(r,"zooms",{get:()=>Vi.rifle.zooms});return r};
  const apply=()=>{window.SCPARTS=sel.slice();const p=g.player,r=build();if(!p)return;p.kitRifle=r;
    if(g.state==="title"&&p.w&&p.w.rifle){p.w.rifle.mag=r.mag;p.w.rifle.reserve=r.reserve}try{g.hud.weapon(p)}catch(x){}};
  const set=(i,v)=>{sel[i]=v;sel=partsClean(sel);try{localStorage.setItem("sc.parts",JSON.stringify(sel))}catch(x){}apply()};
  apply();{const s0=g.start&&g.start.bind(g);s0&&(g.start=(...a)=>{const p=g.player;p&&!p.kitRifle&&(p.kitRifle=build());return s0(...a)})}
  // ---- the panel
  const css=`#pk{position:fixed;inset:0;z-index:70;background:radial-gradient(120% 90% at 30% 40%,#1b1c20 0,#0a0a0c 55%,#050505 100%);color:#f2f2ef;font-family:"Barlow Condensed","Arial Narrow",system-ui,sans-serif;display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.3fr);gap:22px;padding:max(16px,env(safe-area-inset-top)) max(20px,env(safe-area-inset-right)) max(14px,env(safe-area-inset-bottom)) max(20px,env(safe-area-inset-left));overflow:hidden;user-select:none;-webkit-user-select:none}
#pk .kick{font:400 12px/1 "JetBrains Mono",ui-monospace,monospace;color:#8c8d90}#pk h2{margin:6px 0 2px;font:italic 800 clamp(28px,4.6vw,56px)/.9 "Barlow Condensed",sans-serif}#pk .ln{font:600 14px/1.2 "Barlow Condensed",sans-serif;letter-spacing:.14em;color:#e0182d;text-transform:uppercase;margin-bottom:12px}
#pk .st{display:grid;grid-template-columns:auto 1fr auto;gap:7px 12px;align-items:center;max-width:26rem}#pk .st b{font:600 13px/1 "Barlow Condensed",sans-serif;letter-spacing:.12em;color:#cfd0d2}
#pk .bar{height:7px;background:#1d1e22;position:relative}#pk .bar i{position:absolute;inset:0 auto 0 0;background:#f2f2ef}#pk .bar i.up{background:#c8f31d}#pk .bar i.dn{background:#e0182d}#pk .bar u{position:absolute;top:-3px;bottom:-3px;width:2px;background:#8c8d90}
#pk .st span{font:400 12px/1 "JetBrains Mono",ui-monospace,monospace;color:#f2f2ef;min-width:4.6em;text-align:right}#pk .st span.up{color:#c8f31d}#pk .st span.dn{color:#ff5c6a}
#pk .hand{margin-top:16px;transform:rotate(-2deg);font:italic 17px/1.25 "Bradley Hand","Segoe Print","Ink Free",cursive;color:#d9d4c2;max-width:22rem}
#pk .rt{display:flex;flex-direction:column;min-height:0;gap:8px}#pk .bk{align-self:flex-end;font:600 15px/1 "Barlow Condensed",sans-serif;letter-spacing:.12em;color:#f2f2ef;background:none;border:0;border-bottom:2px solid #e0182d;padding:8px 4px;cursor:pointer}
#pk .slots{flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column;gap:12px}#pk .slot h3{margin:0 0 6px;font:700 14px/1 "Barlow Condensed",sans-serif;letter-spacing:.2em;color:#8c8d90;padding-left:10px;border-left:3px solid #e0182d}
#pk .opts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}#pk .opt{background:#101013;border:0;border-top:3px solid #3a3b40;color:inherit;font:inherit;text-align:left;padding:8px 10px 9px;cursor:pointer}
#pk .opt.sel{border-top-color:#c8f31d;background:#17181c}#pk .opt b{display:block;font:700 16px/1 "Barlow Condensed",sans-serif;letter-spacing:.05em}#pk .opt small{display:block;margin-top:5px;font:400 12px/1.3 system-ui,sans-serif;color:#a9aaae}
#pk .rs{align-self:flex-start;font:600 13px/1 "Barlow Condensed",sans-serif;letter-spacing:.12em;color:#8c8d90;background:none;border:0;text-decoration:underline;cursor:pointer;padding:6px 0}
@media (orientation:portrait){#pk{grid-template-columns:1fr;grid-template-rows:auto minmax(0,1fr)}#pk .hand{display:none}}@media (max-height:440px){#pk .hand{display:none}#pk h2{font-size:26px}#pk .opt small{font-size:11px}}`;
  let el=null;const B=Vi.rifle,hits=d=>Math.ceil(100/d);
  const paint=()=>{const r=rifleWith(B,sel),q=s=>el.querySelector(s),row=(name,val,base,max,txt,lowGood)=>{const cls=val===base?"":(val>base)!==!!lowGood?"up":"dn";return`<b>${name}</b><div class="bar"><i class="${cls}" style="width:${Math.max(4,Math.min(100,val/max*100))}%"></i><u style="left:${Math.min(100,base/max*100)}%"></u></div><span class="${cls}">${txt}</span>`};
    q(".st").innerHTML=row("ROUNDS",r.mag,B.mag,8,r.mag)+row("SPARE",r.reserve,B.reserve,30,r.reserve)+row("BOLT",r.cycle,B.cycle,1.6,r.cycle.toFixed(2)+" s",!0)+row("RELOAD",r.reload,B.reload,4,r.reload.toFixed(1)+" s",!0)+row("LIMB HITS",hits(r.dmg[2]),hits(B.dmg[2]),4,hits(r.dmg[2])+" to kill",!0)+row("TO THE EYE",r.ads,.16,.24,r.ads.toFixed(2)+" s",!0);
    q(".slots").innerHTML=PARTS.map((s,i)=>`<div class="slot"><h3>${s.name}</h3><div class="opts">${s.opts.map((o,k)=>`<button type="button" class="opt${sel[i]===k?" sel":""}" data-i="${i}" data-k="${k}"><b>${o.name}</b><small>${o.note}</small></button>`).join("")}</div></div>`).join("")};
  const close=()=>{el&&(el.remove(),el=null,removeEventListener("keydown",esc,!0))},esc=e=>{e.key==="Escape"&&(e.stopPropagation(),close())};
  const open=()=>{if(el)return;el=document.createElement("div");el.id="pk";el.innerHTML=`<style>${css}</style><div><div class="kick">the workshop · parts</div><h2>YOUR RIFLE</h2><div class="ln">every part gives and takes</div><div class="st"></div><div class="hand">green is better than standard, red is worse.<br>a head shot still kills. a body shot still takes two.</div><button class="rs" type="button">back to standard parts</button></div><div class="rt"><button class="bk" type="button">BACK TO THE BENCH</button><div class="slots"></div></div>`;
    document.body.appendChild(el);el.addEventListener("click",e=>{const o=e.target.closest(".opt");o?(set(+o.dataset.i,+o.dataset.k),paint()):e.target.closest(".rs")?(sel=[0,0,0,0],set(0,0),paint()):e.target.closest(".bk")&&close()});addEventListener("keydown",esc,!0);paint()};
  document.addEventListener("click",e=>{e.target&&e.target.closest&&e.target.closest('[data-open="parts"]')&&(e.preventDefault(),open())},!0);
  g.parts={set,open,close,get sel(){return sel.slice()},get rifle(){return g.player&&g.player.kitRifle}};
}

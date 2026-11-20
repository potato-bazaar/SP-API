// Which map: chosen on the menu (the page reloads into it), or decided by the room you join.
function RLOOK(g,cam,x,y,z){if(SCLOOP){RQ.set(x,y,z);g.arena.see(RQ,RQ,cam.position.x);cam.lookAt(RQ)}else cam.lookAt(x,y,z)}   // look at a chart point from wherever the camera is
var RWD=null;   // on the ring: the shortest way round between two x (used where net code blends positions)
let _mapSw=0;   // one reload in flight: lobby room broadcasts must not stack location.replace/reload
function RSWITCH(map,code){
  if(_mapSw)return;_mapSw=1;
  try{localStorage.setItem("sc.world",map==="loop"?"loop":"city")}catch(e){}
  const h=code?"#room="+code:location.hash;location.replace(location.pathname+"?map="+(map==="loop"?"loop":"city")+h);
  if(code)setTimeout(()=>location.reload(),60);   // same page, new query: some browsers only change the hash
}
// a room on the other map: load that map and come straight back in (the room code rides in the address)
function RMAPSW(room){const m=room&&room.settings&&room.settings.map||"city";if(m===window.SCMAP)return!1;RSWITCH(m,room.code);return!0}
window.RSWITCH=RSWITCH;window.RMAPSW=RMAPSW;   // online menus (and MAPSWITCH errors) call these off the window
// the map a room is asked for. GLASS CITY is played alone until the server knows it: a room made or joined from there is a city room, and the page follows it
function RNMAP(){return SCGLASS?"city":window.SCMAP||"city"}
function RDIST(pan){
  const M=window.SCMAP,card=(id,on,h,sub,txt)=>`<div style="border:1px solid ${on?"var(--lime,#c8f31d)":"rgba(242,242,239,.22)"};padding:14px 16px;margin:10px 0"><b style="color:#fff;font-size:18px;letter-spacing:.06em">${h}</b><div style="opacity:.6;font-size:12px;letter-spacing:.14em;margin:2px 0 8px">${sub}</div><p style="margin:0 0 10px">${txt}</p>${on?'<span style="color:var(--lime,#c8f31d);letter-spacing:.14em;font-size:12px">YOU ARE HERE</span>':`<button type="button" data-map="${id}" style="font:inherit;letter-spacing:.14em;padding:9px 16px;background:var(--lime,#c8f31d);color:#050505;border:0;cursor:pointer;font-weight:800">DEPLOY HERE</button>`}</div>`;
  pan(`<h2>DISTRICT ROTATION</h2>`+card("city",M==="city","SNIPER CITY","HONG KONG · DISTRICT 04","Twenty-four rooftops in the rain around the angel. The street is death.")+(M==="glass"?card("glass",!0,"GLASS CITY","PROTOTYPE · SOLO","A city drawn in light. Every pane is solid and you can see through all of them. Still being built: one sniper and seven bots, no online rooms yet."):"")+card("loop",M==="loop","LOOP CITY","ORBITAL · RING 01","A city bent into a wheel. The far side hangs over your head: shoot straight up across the hub, ride the hub lines through the middle, fight on the roofs and in the streets. The halo closes somewhere new each match.")+`<p class="note">Custom matches are played on the map you are in. Joining a friend's room on the other map loads it for you.</p>`);
  const box=document.getElementById("m2-box");box&&box.querySelectorAll("[data-map]").forEach(b=>b.addEventListener("click",()=>RSWITCH(b.dataset.map)));
}
function RNET(g){
  const ar=g.arena,C=ar.ring.C,T=g.ringT,Zd=ar.data.zone;RWD=d=>d-C*Math.round(d/C);
  // solo: the halo closes somewhere different each match (online the server says where, see startNet)
  const st=g.start;g.start=function(){if(!this.net&&Zd.centers&&Zd.centers.length){const c=Zd.centers[Math.random()*Zd.centers.length|0];T.setZone(c[0],c[1])}return st.apply(this,arguments)};
  // words on the menu that belong to the other map
  try{const q=s=>document.querySelector(s),live=q(".m2-live");live&&live.lastChild&&(live.lastChild.textContent="LOOP CITY · RING 01");const d=q(".m2-dist span");d&&(d.textContent="LOOP CITY · RING 01");const sub=q(".m2-sub");sub&&(sub.textContent="Eight snipers. One wheel. The far side is over your head.");
    const w=document.createTreeWalker(document.getElementById("m2")||document.body,4);for(let n;n=w.nextNode();)/Stay on the Rooftops/i.test(n.nodeValue)&&(n.nodeValue=n.nodeValue.replace(/Stay on the Rooftops\.?/i,"Roofs and streets. Look up."))}catch(e){}
}
// the map shows on the menu, both maps: a chip beside players / duration / mode that opens the chooser
function RMENU(g){
  try{const chips=document.querySelector(".m2-chips");if(!chips||document.getElementById("m2-mapchip"))return;const loop=window.SCMAP==="loop",glass=window.SCMAP==="glass";
    const b=document.createElement("button");b.type="button";b.id="m2-mapchip";b.className="m2-chip";b.dataset.n="district";b.style.cssText="cursor:pointer;font:inherit;color:inherit;text-align:left;border-color:var(--lime,#c8f31d);position:relative";
    b.innerHTML=`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/></svg><div><b>${loop?"LOOP":glass?"GLASS":"CITY"}</b><span>MAP · CHANGE</span></div>`+(loop||glass?"":`<i style="position:absolute;top:-7px;right:-6px;background:var(--lime,#c8f31d);color:#050505;font:800 10px/1 sans-serif;font-style:normal;letter-spacing:.08em;padding:3px 5px">NEW</i>`);
    chips.appendChild(b)}catch(e){}
}

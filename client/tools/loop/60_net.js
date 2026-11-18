// Which map: chosen on the menu (the page reloads into it), or decided by the room you join.
var RWD=null;   // on the ring: the shortest way round between two x (used where net code blends positions)
function RSWITCH(map,code){
  try{localStorage.setItem("sc.map",map==="loop"?"loop":"city")}catch(e){}
  const h=code?"#room="+code:location.hash;location.replace(location.pathname+"?map="+(map==="loop"?"loop":"city")+h);
  if(code)setTimeout(()=>location.reload(),60);   // same page, new query: some browsers only change the hash
}
// a room on the other map: load that map and come straight back in (the room code rides in the address)
function RMAPSW(room){const m=room&&room.settings&&room.settings.map||"city";if(m===window.SCMAP)return!1;RSWITCH(m,room.code);return!0}
function RDIST(pan){
  const here=window.SCMAP==="loop",card=(id,on,h,sub,txt)=>`<div style="border:1px solid ${on?"var(--lime,#c8f31d)":"rgba(242,242,239,.22)"};padding:14px 16px;margin:10px 0"><b style="color:#fff;font-size:18px;letter-spacing:.06em">${h}</b><div style="opacity:.6;font-size:12px;letter-spacing:.14em;margin:2px 0 8px">${sub}</div><p style="margin:0 0 10px">${txt}</p>${on?'<span style="color:var(--lime,#c8f31d);letter-spacing:.14em;font-size:12px">YOU ARE HERE</span>':`<button type="button" data-map="${id}" style="font:inherit;letter-spacing:.14em;padding:9px 16px;background:var(--lime,#c8f31d);color:#050505;border:0;cursor:pointer;font-weight:800">DEPLOY HERE</button>`}</div>`;
  pan(`<h2>DISTRICT ROTATION</h2>`+card("city",!here,"SNIPER CITY","HONG KONG · DISTRICT 04","Twenty-four rooftops in the rain around the angel. The street is death.")+card("loop",here,"LOOP CITY","ORBITAL · RING 01","A city bent into a wheel. The far side hangs over your head: shoot straight up across the hub, ride the hub lines through the middle, fight on the roofs and in the streets. The halo closes somewhere new each match.")+`<p class="note">Custom matches are played on the map you are in. Joining a friend's room on the other map loads it for you.</p>`);
  const box=document.getElementById("m2-box");box&&box.querySelectorAll("[data-map]").forEach(b=>b.addEventListener("click",()=>RSWITCH(b.dataset.map)));
}
function RNET(g){
  const ar=g.arena,C=ar.ring.C,T=g.ringT,Zd=ar.data.zone;RWD=d=>d-C*Math.round(d/C);
  // solo: the halo closes somewhere different each match (online the server says where, see startNet)
  const st=g.start;g.start=function(){if(!this.net&&Zd.centers&&Zd.centers.length){const c=Zd.centers[Math.random()*Zd.centers.length|0];T.setZone(c[0],c[1])}return st.apply(this,arguments)};
  // words on the menu that belong to the other map
  try{const q=s=>document.querySelector(s),live=q(".m2-live");live&&live.lastChild&&(live.lastChild.textContent="LOOP CITY · RING 01");const d=q(".m2-dist span");d&&(d.textContent="LOOP CITY · RING 01");const sub=q(".m2-sub");sub&&(sub.textContent="Eight snipers. One wheel. The far side is over your head.");
    document.querySelectorAll("#m2 *").forEach(n=>{n.childNodes.length===1&&n.firstChild.nodeType===3&&/Stay on the Rooftops/i.test(n.textContent)&&(n.textContent="Roofs and streets.")})}catch(e){}
}

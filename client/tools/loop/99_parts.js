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
  g.parts={set,reset:()=>{sel=[0,0,0,0];set(0,0)},get sel(){return sel.slice()},get rifle(){return g.player&&g.player.kitRifle}};
}

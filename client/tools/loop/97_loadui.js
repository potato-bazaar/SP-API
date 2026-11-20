// The loading screen (index.html, window.__scLoad) for every wait after the game is up: switching map, making or
// joining a room, the host starting a match, and a dropped connection (a banner while it reconnects).
function RLOADUI(g){
  const L=window.__scLoad;if(!L)return;
  const NAME={city:"Sniper City",loop:"Loop City",glass:"Glass City"};
  // a map switch reloads the page: the screen goes up now, and the next page's boot screen says why it is loading
  const sw=window.RSWITCH;if(sw)window.RSWITCH=function(map,code){try{const m=NAME[map]?map:"city";sessionStorage.setItem("sc.loadctx",JSON.stringify({kick:"switching map",sub:code?"then joining room "+code:""}));
    L.show(NAME[m],code?"then joining room "+code:"",{busy:1,kick:"switching map",step:"loading the map"})}catch(e){}return sw.apply(this,arguments)};
  let hooked=null;
  const wire=o=>{const n=o.net;if(!n||hooked===n)return;hooked=n;
    const done=()=>{if(L.isOn())L.hide()};
    n.on("room",m=>{if(!(window.RMAPSW&&m&&m.settings&&m.settings.map&&m.settings.map!==window.SCMAP))done()});
    n.on("start",done);n.on("left",done);
    n.on("error",m=>{if(/^MAPSWITCH:/.test(m.msg||""))return;if(L.isOn())L.error(m.msg||"something went wrong",[["Back",()=>L.hide(),1]])});
    n.on("status",m=>{if(m.state==="reconnecting")L.banner("connection lost · reconnecting");else if(m.state==="open")L.banner(null);else if(m.state==="failed"){L.banner(null);L.isOn()&&L.error("could not reach the room server",[["Back",()=>L.hide(),1]])}})};
  const wait=(title,sub,step,retry)=>L.show(title,sub,{busy:1,short:1,kick:"online",step,timeout:15000,
    onTimeout:()=>L.error("the room server is not answering",[["Try again",()=>{L.hide();retry&&setTimeout(retry,50)},1],["Back",()=>L.hide()]])});
  const go=()=>{const o=g.online;if(!o){setTimeout(go,300);return}
    const j=o._join.bind(o);o._join=function(){const before=this.net;j();wire(this);const c=(document.getElementById("code")||{}).value||"";
      if(this.net&&/^joining/.test((document.getElementById("netstat")||{}).textContent||""))wait("Joining room",c.toUpperCase(),"finding the room",()=>this._join());return before};
    const cn=o._connect.bind(o);o._connect=function(){cn();wire(this)};
    const mk=document.getElementById("mk");mk&&mk.addEventListener("click",()=>setTimeout(()=>{if(/making a room/.test((document.getElementById("netstat")||{}).textContent||""))wait("Making a room",NAME[window.SCMAP]||"","asking the room server",()=>mk.click())},0));
    const ls=document.getElementById("lstart");ls&&ls.addEventListener("click",()=>{if(o.isHost&&o.isHost())wait("Starting the match",NAME[window.SCMAP]||"","everyone onto the roofs",()=>ls.click())});
    if(o.net)wire(o)};
  go();
}

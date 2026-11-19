/* ---------- the colour grade. The picture is made of light and dark (plus red, gas green and zipline cyan); here the
   light and dark are given colour. HONG KONG is a storm night: navy shadows, steel-blue air, cold white on wet concrete,
   warm yellow in the brightest windows, and lightning. LOOP CITY is rain haze: green-black shadows, grey-green air,
   amber in the brightest lights. Values are sRGB as you would read them off a picture. ---------- */
var RGR={storm:{g0:[8,12,34],g1:[64,92,164],g2:[194,210,242],gw:[255,226,160],a:1,ex:1.3,bolt:!0},
  haze:{g0:[5,13,11],g1:[64,104,88],g2:[178,206,186],gw:[255,204,138],a:1,ex:1.3,bolt:!1}};
function RGRADE(g){
  const U=g.gfx&&g.gfx.post;if(!U||!U.uGA)return;
  const set=k=>{const q=RGR[k];if(!q)return;for(const[n,u]of[["g0",U.uG0],["g1",U.uG1],["g2",U.uG2],["gw",U.uGW]])u.value.setRGB(q[n][0]/255,q[n][1]/255,q[n][2]/255,Ne);U.uGA.value=q.a;U.uExposure.value=q.ex;g.grade.name=k;g.grade.cur=q};
  g.grade={set,name:"",cur:null,off:()=>{U.uGA.value=0}};set(SCLOOP?"haze":"storm");
  // lightning over the storm map: a double flash every so often, far brighter in the sky's direction than the frame can show
  let next=9+Math.random()*10,f=0,second=0;const u0=g.update.bind(g);
  g.update=t=>{const r=u0(t),q=g.grade.cur;if(!q||!q.bolt||(g.state!=="live"&&g.state!=="title"))return r;
    next-=t;if(next<=0){next=13+Math.random()*22;f=1;second=.16+Math.random()*.12}
    if(second>0){second-=t;second<=0&&(f=Math.max(f,.7))}
    f=f>.004?f*Math.pow(.0009,t):0;U.uExposure.value=q.ex*(1+f*1.6);
    return r};
}

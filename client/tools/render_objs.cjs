// render selected named objects of a glb in isolation: node tools/render_objs.cjs model out name1,name2 [views]
const { chromium } = require('playwright'); const path = require('path');
(async()=>{
  const [model, out, names, views='iso,iso3,top'] = process.argv.slice(2);
  const b = await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
  const p = await b.newPage({viewport:{width:1400,height:900}});
  p.on('pageerror', e=>console.log('[pageerror]', e.message));
  await p.goto('http://localhost:8123/tools/viewer.html?m=' + encodeURIComponent('/__abs' + path.resolve(model)) + (process.env.Q?'&'+process.env.Q:''));
  await p.waitForFunction('window.__done===true', null, {timeout: 600000});
  for (const name of names.split(',')) {
    const info = await p.evaluate((name)=>{
      const THREE = window.THREE, root = window.__root; let target=null;
      root.traverse(o=>{ if(o.name===name) target=o; });
      if(!target) return 'notfound';
      root.traverse(o=>{ if(o.isMesh) o.visible=false; });
      target.traverse(o=>{ if(o.isMesh) o.visible=true; });
      const box = new THREE.Box3().setFromObject(target);
      window.__tb = box; const s = box.getSize(new THREE.Vector3()), c = box.getCenter(new THREE.Vector3());
      const mats = new Set(); let tris=0; target.traverse(o=>{ if(o.isMesh){ mats.add(o.material.name); tris += o.geometry.index.count/3; }});
      window.__viewT = (v)=>{ const r=Math.max(s.x,s.y,s.z); const dirs={iso:[1,0.7,1],iso2:[-1,0.7,1],iso3:[-1,0.7,-1],iso4:[1,0.7,-1],top:[0.0001,1,0],front:[0,0.15,1],back:[0,0.15,-1],left:[-1,0.15,0],right:[1,0.15,0]};
        const cam=window.__cam; cam.position.copy(c).add(new THREE.Vector3(...dirs[v]).normalize().multiplyScalar(r*1.9)); cam.near=r/100; cam.far=r*100; cam.fov=40; cam.updateProjectionMatrix(); cam.up.set(0,1,0); if(v==='top') cam.up.set(0,0,-1); cam.lookAt(c); window.__renderer.render(window.__scene, cam); };
      return {size:s.toArray().map(x=>+x.toFixed(2)), center:c.toArray().map(x=>+x.toFixed(2)), mats:[...mats], tris};
    }, name);
    console.log(name, JSON.stringify(info)); if (info==='notfound') continue;
    for (const v of views.split(',')) { await p.evaluate(v=>window.__viewT(v), v); await p.locator('canvas').screenshot({path:`${out}_${name.replace(/[^\w]/g,'_')}_${v}.jpg`, type:'jpeg', quality:80}); }
  }
  await b.close();
})();

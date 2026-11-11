const { chromium } = require('playwright');
(async()=>{
const b = await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
const p = await b.newPage();
await p.setContent('<canvas id=c></canvas>');
const r = await p.evaluate(()=>{const c=document.getElementById('c');const g=c.getContext('webgl2');if(!g)return 'no webgl2';const e=g.getExtension('WEBGL_debug_renderer_info');return {v:g.getParameter(g.VERSION), r:e?g.getParameter(e.UNMASKED_RENDERER_WEBGL):'?', maxTex:g.getParameter(g.MAX_TEXTURE_SIZE)}});
console.log(JSON.stringify(r)); await b.close();
})();

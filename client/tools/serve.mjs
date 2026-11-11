// tiny static server; /play serves dist/index.html wrapped like the artifact skeleton. arg "csp" adds a strict CSP.
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const root = path.resolve(process.argv[2] || '.'); const port = +(process.argv[3] || 8123); const csp = process.argv[4] === 'csp';
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.json':'application/json','.txt':'text/plain; charset=utf-8','.glb':'model/gltf-binary','.bin':'application/octet-stream','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.css':'text/css','.wasm':'application/wasm','.woff2':'font/woff2','.woff':'font/woff'};
const CSP = "default-src 'none'; script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com data:; img-src 'self' data: blob:; media-src 'self' data: blob:; connect-src 'self'; worker-src 'self' blob:";
http.createServer((req,res)=>{
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/play' || p === '/dist/' || p === '/dist/play') {
    const body = fs.readFileSync(path.join(root,'dist/index.html'),'utf8');
    let devFonts = '';
    if (!csp) { const fs2 = fs; const F = (fam, file, w, st) => `@font-face{font-family:"${fam}";font-weight:${w};font-style:${st};src:url(/node_modules/@fontsource/${file}) format("woff2")}`;
      devFonts = [F('Barlow Condensed','barlow-condensed/files/barlow-condensed-latin-500-normal.woff2',500,'normal'),F('Barlow Condensed','barlow-condensed/files/barlow-condensed-latin-600-normal.woff2',600,'normal'),F('Barlow Condensed','barlow-condensed/files/barlow-condensed-latin-700-normal.woff2',700,'normal'),F('Barlow Condensed','barlow-condensed/files/barlow-condensed-latin-800-italic.woff2',800,'italic'),F('JetBrains Mono','jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2',400,'normal'),F('JetBrains Mono','jetbrains-mono/files/jetbrains-mono-latin-700-normal.woff2',700,'normal')].join('');
      try { devFonts += fs2.readFileSync(path.join(root,'node_modules/@fontsource/noto-sans-hk/900.css'),'utf8').replace(/url\(\.\/files\//g,'url(/node_modules/@fontsource/noto-sans-hk/files/'); } catch (e) {}
      devFonts = `<style>${devFonts}</style>`; }
    const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><base href="/dist/"><style>:root{color-scheme:light;box-sizing:border-box;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}html{scroll-padding-top:env(safe-area-inset-top,0px)}body{margin:0;padding:0;font:14px -apple-system,BlinkMacSystemFont,sans-serif;background:#fff;color:#000}img{max-width:100%}[hidden]:not([hidden=until-found i]){display:none!important}</style>${devFonts}</head><body>${body}</body></html>`;
    const h = {'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}; if (csp) h['Content-Security-Policy'] = CSP; res.writeHead(200,h); res.end(html); return;
  }
  if (p.endsWith('/')) p += 'index.html';
  let f = path.join(root, p); if (p.startsWith('/__abs/')) f = '/' + p.slice(7);
  fs.stat(f,(e,st)=>{
    if (e || !st.isFile()) { res.writeHead(404); res.end('nf'); return; }
    const h = {'Content-Type': types[path.extname(f)] || 'application/octet-stream', 'Content-Length': st.size, 'Cache-Control':'no-store'};
    if (csp) h['Content-Security-Policy'] = CSP;
    res.writeHead(200,h); fs.createReadStream(f).pipe(res);
  });
}).listen(port, ()=>console.log('serving', root, 'on', port, csp?'(csp)':''));

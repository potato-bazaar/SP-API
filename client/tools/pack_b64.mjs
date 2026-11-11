// The artifact host serves text and media types only, so the three binary packs ship as base64 text beside the page.
import fs from 'node:fs';
for (const n of ['city', 'tex', 'models']) { const b = fs.readFileSync(`dist/${n}.bin`); fs.writeFileSync(`dist/${n}.txt`, b.toString('base64')); console.log(`${n}.txt`, (fs.statSync(`dist/${n}.txt`).size / 1e6).toFixed(2), 'MB  (from', (b.length / 1e6).toFixed(2), 'MB)'); }

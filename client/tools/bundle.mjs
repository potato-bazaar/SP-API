import { build } from 'esbuild';
const dev = process.env.DEV !== '0';
const r = await build({ entryPoints: ['src/main.js'], bundle: true, format: 'iife', outfile: 'dist/game.js', minify: process.env.MIN !== '0', sourcemap: false, target: ['es2020'], legalComments: 'none', logLevel: 'warning', metafile: true, define: { __DEV__: dev ? 'true' : 'false' } });
const bytes = Object.values(r.metafile.outputs)[0].bytes; console.log('game.js', (bytes/1024).toFixed(0), 'KB', dev ? '(dev)' : '(prod)');

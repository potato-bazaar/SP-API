# Sniper City

An 8-player rooftop sniper survival game for the browser, set on Hong Kong rooftops in black, white, grey and blood red.

This is the current playable client, a static site with no build step.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Page shell: HUD, scope, touch controls, title / pause / results screens |
| `game.js` | Bundled game code (renderer, controls, bots, match logic) |
| `arena.json` | Arena layout: rooftops, cover, spawn points |
| `city.txt` | Packed city geometry |
| `models.txt` | Packed 3D models (weapons, characters) |
| `tex.txt` | Packed textures |

`game.js` fetches the four asset files by relative path, so they must sit next to `index.html`.

## Run locally

Browsers block `fetch` on `file://`, so serve the folder over HTTP:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deploy

Any static host works (GitHub Pages, Netlify, Vercel, S3/CloudFront). Publish the repo root as-is.

## Roadmap

Online multiplayer with create-room / invite-code / join: free-for-all, 2v2 and 4v4, host-chosen bot count, respawn on/off and other room settings locked once the match starts.

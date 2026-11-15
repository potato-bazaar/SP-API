# Sniper City

An 8-player rooftop sniper survival game for the browser, set on Hong Kong rooftops in black, white, grey and blood red.

This is the current playable client, a static site with no build step.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Page shell: HUD, scope, touch controls, title / pause / results screens, plus the crawlable game description, search and share tags |
| `game.js` | Bundled game code (renderer, controls, bots, match logic, solo extras, city set dressing). Loaded only after the player presses Play |
| `arena.json` | Arena layout: rooftops, cover, spawn points |
| `city.txt` | Packed city geometry |
| `models.txt` | Packed 3D models used in every match (weapons, characters, arms) |
| `models2.txt` | Packed solo-only models (AWM, Lucifer, RPG-7, dog), fetched when a solo match starts |
| `tex.txt` | Packed textures |
| `how-to-play.html`, `weapons.html`, `updates.html`, `about.html` | Static help pages, patch notes and model credits |
| `poster.jpg`, `og.jpg`, `shot-*.jpg` | Title-screen poster, share image and screenshots |
| `favicon.*`, `icon-*.png`, `apple-touch-icon.png`, `site.webmanifest` | Icons and web app manifest |
| `robots.txt`, `sitemap.xml` | Crawler rules and sitemap for quicksnipergame.com |

`game.js` fetches the asset files by relative path, so they must sit next to `index.html`.

## Solo and online

Online matches are decided by the game server (not in this repo). These features currently run in solo matches only: the half-time air drop and AWM, scope vision (thermal and night vision), the RPG-7, the rooftop dogs, the prayer, Lucifer, and rifle bullet travel and drop. The kill cam, aim assist on touch screens and the city set dressing run in both.

Online, the sidearm uses the server's original 9 mm numbers; the Desert Eagle numbers apply in solo.

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

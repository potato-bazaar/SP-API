# Sniper City SEO audit and action plan

Date: 19 November 2026. Site: https://quicksnipergame.com/ (pages in `client/dist/`).
Method: the checklists of the open-source `claude-seo` skill (AgriciDaniel/claude-seo, MIT, v2.6.2), applied by hand. Its scripts were not run.
Publisher of the game: Greg Game - Nudity Games.

## Not measured

- Core Web Vitals (no PageSpeed access from the audit environment). Run https://pagespeed.web.dev/ on the home page.
- Security headers and HTTPS redirects.
- Indexing status, search queries and backlinks. These need Google Search Console.

## Findings and what was done (branch `new-look`)

| # | Finding | Severity | Status |
|---|---------|----------|--------|
| 1 | A web search for the game's name and domain did not return the site | Critical | Open: needs Search Console (see below) |
| 2 | Loop City, breakable walls, teleport doors and GRAPHITE were only in the credits, not in any text a search engine reads | High | Fixed: new `maps.html`, new sections on the home page, how-to-play, weapons, updates |
| 3 | No publisher anywhere on the site or in structured data | High | Fixed: "Greg Game - Nudity Games" on every page footer, the about page, the home page facts and FAQ, and as `publisher`/`author` in JSON-LD |
| 4 | Sitemap listed 5 pages, all dated 15 November, older than the content | Medium | Fixed: 6 pages, dated to the real change |
| 5 | `VideoGame` JSON-LD had no `screenshot`, a stale `dateModified` | Medium | Fixed |
| 6 | Home page `<h1>` read "SniperCity" to crawlers (no space) | Medium | Fixed without changing the look |
| 7 | Home title 64 characters, weapons title 71; updates and about descriptions under 120 characters | Low | Fixed: all titles 35-57, descriptions 123-158 |
| 8 | No screenshots of the second map | Low | Fixed: 5 new 960x540 images, 110-130 KB each, with alt text and sizes |
| 9 | No privacy page and no public contact, although Google Analytics is on every page | Medium | Open: owner decision |
| 10 | No links or mentions from other sites | High | Open: owner task |
| 11 | Images are JPEG, not WebP | Low | Open: small gain |

Not recommended, following the skill: FAQPage schema (Google retired FAQ rich results in May 2026), HowTo schema (deprecated), llms.txt as a ranking lever (Google says it has no effect).

## Owner tasks, in order

1. Merge pull request #2 so the new pages go live.
2. Google Search Console: add `quicksnipergame.com`, submit `https://quicksnipergame.com/sitemap.xml`, request indexing for `/` and `/maps.html`. Do the same in Bing Webmaster Tools.
3. Decide a public contact (a form or a dedicated address) and a short privacy page.
4. List the game where players look: itch.io, CrazyGames and Poki developer submissions, Newgrounds, relevant subreddits (read each one's self-promotion rule first). Post short gameplay clips with the URL.
5. After two weeks, export the Search Console "Queries" report and plan the next pages from it.

## Checks to repeat after every release

- Every new map, weapon or mode is described in a text page, not only in the game.
- `updates.html` has a dated entry; `sitemap.xml` and the home page `dateModified` carry that date.
- Every page: one `<h1>`, unique title (30-60 characters) and description (120-160), canonical, JSON-LD that parses.

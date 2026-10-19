# Architecture rules

- Keep daily SEO monitoring in a secret-authenticated public hook with server-only Semrush calls and admin-readable stored snapshots; this separates recurring analysis from public content and protects provider quota.
- Claim each Romanian calendar day through a unique report row before contacting Semrush; this makes duplicate scheduled callbacks idempotent.
- Preserve TanStack leaf-route metadata and request-first subject CTAs; this keeps indexable subject content separate from the private proposal workflow.- The sitemap lists only indexable URLs (no query-string listings, no noindex combos/years); keep sitemap filters in sync with each route's noindex rule so Google never gets contradictory signals.
- src/server.ts 301-redirects www and trailing-slash URLs to the bare https host; one canonical URL per page.
- Public SEO numbers (prices, counts, ratings) come only from src/lib/market-stats.functions.ts aggregates of real DB rows; never estimated or templated values, and AggregateRating only when real ratings exist.
- Duplicate pages are consolidated only through src/lib/seo-redirects.ts (301 in src/server.ts + sitemap exclusion); one canonical page per search intent.
- Automatic blog publishing stays off unless AUTO_BLOG_ENABLED="true"; it produced duplicate articles.
- Public blog reads use publishable server functions and SSR; failed reads must not masquerade as empty articles.
- Blog Markdown uses a safe GFM renderer without raw HTML; preserve complete paragraphs, lists, tables and source links.
- Keep AdSense serving centrally disabled until approval plus certified consent setup; preserve ownership verification independently. Adsterra banners and Social Bar run in opaque sandboxed in-flow frames with user-activated navigation only; this confines provider overlays and prevents automatic popunders. Smartlink stays an explicitly labeled sponsored link, not a site CTA; public monetization excludes private workflows.
- Resolve the viewport before loading an Adsterra banner zone; avoid requesting and discarding a mobile impression on desktop hydration.
- Reveal Adsterra placements only after their sandbox reports rendered ad media, validating the message source against the placement frame; empty provider responses must not leave advertising labels or reserved blank space.

- Harta Blocajelor (/harta-blocajelor) is static, hand-written content in src/data/blocaje (one node per concept, prerequisites as slugs, no teacher/price/review data); slugs are site-unique and bun tests enforce graph integrity. Its CTA pre-fills /meditatii via `blocaj=` without storing any student answers.
- Adsterra zone scripts must use the exact URLs from the Adsterra panel (currently bicea.org / arwf.org); the old profitableratecpmnetwork.com / highrevenueformat.com hosts return 0 bytes.

# Architecture rules

- Keep daily SEO monitoring in a secret-authenticated public hook with server-only Semrush calls and admin-readable stored snapshots; this separates recurring analysis from public content and protects provider quota.
- Claim each Romanian calendar day through a unique report row before contacting Semrush; this makes duplicate scheduled callbacks idempotent.
- Preserve TanStack leaf-route metadata and request-first subject CTAs; this keeps indexable subject content separate from the private proposal workflow.- The sitemap lists only indexable URLs (no query-string listings, no noindex combos/years); keep sitemap filters in sync with each route's noindex rule so Google never gets contradictory signals.
- src/server.ts 301-redirects www and trailing-slash URLs to the bare https host; one canonical URL per page.
- Public SEO numbers (prices, counts, ratings) come only from src/lib/market-stats.functions.ts aggregates of real DB rows; never estimated or templated values, and AggregateRating only when real ratings exist.
- Duplicate pages are consolidated only through src/lib/seo-redirects.ts (301 in src/server.ts + sitemap exclusion); one canonical page per search intent.
- Automatic blog publishing stays off unless AUTO_BLOG_ENABLED="true"; it produced duplicate articles.

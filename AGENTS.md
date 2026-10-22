# Architecture rules

- Email signup stores the entered phone as unverified user metadata; Profesor AI pre-fills it but independently validates and verifies it by SMS before granting access. Never treat signup metadata as proof of phone ownership.

- Daily SEO monitoring uses a secret-authenticated public hook, server-only Semrush and admin-readable snapshots to protect quota.
- Claim each Romanian day with a unique report row before Semrush for idempotency.
- Preserve TanStack leaf-route metadata and request-first subject CTAs; this keeps indexable subject content separate from the private proposal workflow.
- The sitemap lists only indexable URLs (no query-string listings, no noindex combos/years); keep sitemap filters in sync with each route's noindex rule so Google never gets contradictory signals.
- src/server.ts 301-redirects www and trailing-slash URLs to the bare https host; one canonical URL per page.
- Public SEO numbers (prices, counts, ratings) come only from src/lib/market-stats.functions.ts aggregates of real DB rows; never estimated or templated values, and AggregateRating only when real ratings exist.
- Duplicate pages are consolidated only through src/lib/seo-redirects.ts (301 in src/server.ts + sitemap exclusion); one canonical page per search intent.
- Automatic blog publishing stays off unless AUTO_BLOG_ENABLED="true"; it produced duplicate articles.
- Public blog reads use publishable server functions and SSR; failed reads must not masquerade as empty articles.
- Blog Markdown uses a safe GFM renderer without raw HTML; preserve complete paragraphs, lists, tables and source links.
- Subdirectories have their own AGENTS.md; read them before changing files there.

- Harta Blocajelor (/harta-blocajelor) is static, hand-written content in src/data/blocaje (one node per concept, prerequisites as slugs, no teacher/price/review data); slugs are site-unique and bun tests enforce graph integrity. Its CTA pre-fills /meditatii via `blocaj=` without storing any student answers.
- Student/teacher notifications: email via the Resend connector (RESEND_API_KEY) and SMS via GatewayAPI (GATEWAYAPI_TOKEN, src/lib/sms.server.ts); both are no-ops when the secret is missing. Proposal notifications require the proposal author's auth, a 3-minute window and an edge-cache claim, so the endpoint cannot be used to spam students.
- Scanerul de lacune (/scaner-lacune, /scaner-lacune/$materie) reuses the Harta Blocajelor graph and questions; logic is pure in src/lib/scaner-lacune.ts (bun tests). It runs fully client-side, stores no answers, and passes the diagnosis to /meditatii only as `traseu=` slugs. `?tinta=` only preselects; the canonical stays the materie URL and is not listed in the sitemap.
- Simulare AI (/simulare-ai) and Meditator AI (/meditator-ai) call the Lovable AI gateway only from server functions in src/lib/simulare-ai.functions.ts, behind requireSupabaseAuth and a per-account daily quota (edge-cache counter in src/lib/ai-gateway.server.ts). The generated test with its answer key travels to the browser only AES-GCM sealed; grading decrypts it, grades multiple choice deterministically and asks the model only for written answers (student text is delimited and treated as data). Pages stay public SSR SEO content; the AI widgets render only for signed-in users.
- Profesor AI, avatar (LiveAvatar/HeyGen) and AI gateway error rules live in src/lib/AGENTS.md.
- The mobile installation banner is temporarily unmounted from the shared root; preserve the PWA assets so existing installations remain usable.
- Profesor AI acces: contul de test (poateTestaProfesorAi) = gratuit, orice durată. Elevii cu cont: lecția de DURATA_GRATUITA (15 min) e gratuită o singură dată, după verificare telefon SMS (profesor_ai_utilizatori, scrieri doar server-side cu admin client; reguli pure în profesor-ai-verificare.ts); 30/45/60 = „Premium · în curând” (premiumActiv=false, fără prețuri afișate) până există firmă și plăți. Nu reintroduce prețuri în UI fără decizia proprietarului.

- Profesor AI editorial demos use a shuffled lesson deck with last-lesson browser storage; never repeat before exhausting the deck or render a fixed first lesson before hydration.
- Site UI language: cookie `md_lang` read isomorphically in the root beforeLoad (src/lib/i18n-context.tsx), strings in src/lib/i18n.ts (every locale must have every key; bun test enforces). Crawlers have no cookie, so indexed pages stay Romanian; per-language indexable URLs need their own prefixed routes + hreflang.

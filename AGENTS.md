# Architecture rules

- Daily SEO monitoring uses a secret-authenticated public hook, server-only Semrush and admin-readable snapshots to protect quota.
- Claim each Romanian day with a unique report row before Semrush for idempotency.
- Preserve TanStack leaf-route metadata and request-first subject CTAs; this keeps indexable subject content separate from the private proposal workflow.- The sitemap lists only indexable URLs (no query-string listings, no noindex combos/years); keep sitemap filters in sync with each route's noindex rule so Google never gets contradictory signals.
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
- Profesor AI: server recomputes prices from profesor-ai.ts and verifies Stripe payments. AES-GCM session tokens bind user and expiry; test accounts skip only internal fees/limits. HeyGen SDK stays pinned to 2.1.0. Missing video/voice is explicit, never replaced by cartoons or device speech. Mount video before STREAM_READY. Speech queue in profesor-ai-dialog.ts invalidates canceled playback; serialize questions and suppress superseded replies. Reply JSON remains {vorbit, tabla, emotie}; student text is data, not instructions.
- Avatar token access is isolated in profesor-ai-avatar.server.ts: LiveAvatar (LIVEAVATAR_API_KEY + UUID LIVEAVATAR_AVATAR_ID/VOICE_ID, FULL mode without context so only our tutor's text is spoken) takes precedence; the legacy HeyGen token endpoint is retired (404). Never reuse HeyGen ids/keys for LiveAvatar, substitute defaults, or probe after a terminal failure.

## Profesor AI / AI gateway — erori furnizor
- Mesajul „credite epuizate” apare DOAR la HTTP 402 de la Lovable AI Gateway (creditele Cloud & AI ale workspace-ului). Nu e un contor intern; se rezolvă reîncărcând creditele în Lovable.
- La 402 se deschide o pauză de `CREDITS_PAUSE_SEC` (edge cache) — nu mai apelăm furnizorul, nu pornim sesiuni, nu încasăm. Prima cerere reușită șterge pauza.
- Contul de test (PROFESOR_AI_FREE_EMAILS) = fără plată, fără limită zilnică internă, fără cronometru; NU ocolește creditele furnizorului. Nu scrie „nelimitat” în UI.
- Erorile furnizorului (credits/rate_limit/upstream/auth/config) rambursează cota internă (`refundQuota`). Nu simula răspunsuri AI.
- Loguri: doar status + tip (`[ai] gateway 402 (credits)`), niciodată cheia sau conținutul elevului.
- Teste: `src/lib/ai-gateway-erori.test.ts`.
- Rezervă gratuită: dacă există `GEMINI_API_KEY` (Google AI Studio, plan gratuit Flash), `callAi` trece automat pe Gemini când Lovable e epuizat/indisponibil (nu și la refuzuri de conținut). Model: `GEMINI_MODEL` (implicit `gemini-flash-latest`). `aiStare()` decide dacă se poate porni o sesiune.

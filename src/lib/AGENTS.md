# src/lib rules

- Profesor AI: server recomputes prices from profesor-ai.ts and verifies Stripe payments. AES-GCM session tokens bind user and expiry; test accounts skip only internal fees/limits. HeyGen SDK stays pinned to 2.1.0. Missing video is explicit (never cartoons); speech falls back to browser ro-RO voice, labelled as such. Mount video before STREAM_READY. Speech queue in profesor-ai-dialog.ts invalidates canceled playback; serialize questions and suppress superseded replies. Reply JSON remains {vorbit, tabla, emotie}; student text is data, not instructions.
- Avatar token access is isolated in profesor-ai-avatar.server.ts: LiveAvatar (LIVEAVATAR_API_KEY + UUID LIVEAVATAR_AVATAR_ID/VOICE_ID, FULL mode without context so only our tutor's text is spoken) takes precedence; the legacy HeyGen token endpoint is retired (404). Never reuse HeyGen ids/keys for LiveAvatar, substitute defaults, or probe after a terminal failure.

## Profesor AI / AI gateway — erori furnizor
- Mesajul „credite epuizate” apare DOAR la HTTP 402 de la Lovable AI Gateway (creditele Cloud & AI ale workspace-ului). Nu e un contor intern; se rezolvă reîncărcând creditele în Lovable.
- La 402 se deschide o pauză de `CREDITS_PAUSE_SEC` (edge cache) — nu mai apelăm furnizorul, nu pornim sesiuni, nu încasăm. Prima cerere reușită șterge pauza.
- Contul de test (PROFESOR_AI_FREE_EMAILS) = fără plată, fără limită zilnică internă, fără cronometru; NU ocolește creditele furnizorului. Nu scrie „nelimitat” în UI.
- Erorile furnizorului (credits/rate_limit/upstream/auth/config) rambursează cota internă (`refundQuota`). Nu simula răspunsuri AI.
- Loguri: doar status + tip (`[ai] gateway 402 (credits)`), niciodată cheia sau conținutul elevului.
- Teste: `src/lib/ai-gateway-erori.test.ts`.
- Rezervă gratuită: dacă există `GEMINI_API_KEY` (Google AI Studio, plan gratuit Flash), `callAi` trece automat pe Gemini când Lovable e epuizat/indisponibil (nu și la refuzuri de conținut). Model: `GEMINI_MODEL` (implicit `gemini-flash-latest`). `aiStare()` decide dacă se poate porni o sesiune.
- vite.config.ts rewrites the LiveAvatar SDK's `events` import to the npm package; Vite otherwise stubs it as a Node builtin and the client build fails.

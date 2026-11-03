# Verification — 3 November 2026

## Confirmed
- 256 unit tests passed across 46 files; automatic build reports build OK.
- 28 UI tests passed: 20 existing signup/confirmation/password/SEO tests, six updated photo tests, two temporary-upload-recovery tests. Auth and provider uploads in these tests are simulated.
- Real owner session: uploaded two original PNG files of 12,015,266 and 12,015,252 bytes; downloaded bytes matched SHA-256 hashes; photos survived refresh and removal/restoration of the session. Temporary test files were deleted. Session restoration is not a real password-login test.
- Avatar bucket no longer has the former 3 MB cap. JPG/PNG/WebP/GIF originals remain unchanged; unsupported image formats convert to PNG without intentional quality loss. The project-wide provider limit is unverified; unlimited uploads are not promised.
- Actual authenticated AI request answered 7 + 5 correctly ("doisprezece"), in approximately 1.5 seconds; server-observed response unlocked the review form. This does not verify audible conversation.
- Audio regressions cover shared utterance ID, failed socket signalling, late mic permissions after stop, validated interruption, idle timeouts and explicit cancellation.
- Live read-only health check passed six public pages, unique titles, descriptions, OG, canonical, Romanian language, one H1, robots, real 404 and 752 unique sitemap URLs.
- Google Search Console stored inspection says the homepage is indexed and canonical is the bare domain; 923 clicks and 37,894 impressions for October 4–31. No trend or ranking guarantee inferred.

## Not confirmed / blocked
- Real email signup confirmation and Google OAuth round trip require an interactive provider session and a controlled test inbox; simulated tests do not verify them.
- Real spoken conversation, interruption, consecutive lessons and iPhone audio still need an audible microphone test.
- AI reviews currently require a response witnessed by the server. Direct browser voice sessions cannot claim eligibility solely from client callbacks.
- Daily GitHub workflow is written with unit/UI tests, live SEO checks and failure issues, but repository synchronization, scheduled execution, notifications, commit/push/merge are unverified without repository access. Git commands were not used.
- Existing daily Semrush jobs reach the provider but fail with TOTAL LIMIT EXCEEDED; quota recovery is required. A successful cron dispatch is not a successful SEO report.
- Claude content and the separate baseline Semrush attachment have not been provided; no generic replacement articles were generated.
- Publishing was requested. Subsequent live checks still did not contain the new review section; deployment completion is not confirmed. Public pages remain reachable, but this alone does not prove the new version deployed.
- Existing unrelated open tasks remain listed in roadmap.md, including mailbox/provider setup, archive sources and advertisement delivery; this turn does not claim they are completed.
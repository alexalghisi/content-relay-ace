# Plan portare meditatiidirect.ro

Site-ul are zeci de pagini și funcționalități complexe (auth, profiluri profesori, chat, blog, BAC, admitere). Nu poate fi portat tot într-un singur mesaj — îl construim în iterații, începând cu fundația.

## Iterația 1 (acum) — Fundație + Homepage

1. **Activez Lovable Cloud** (PostgreSQL + auth + storage + server functions) — necesar pentru profesori, chat, useri.
2. **Conectez Firecrawl** ca să scrap-uiesc conținutul real de pe v0.
3. **Map** + scrape homepage și 5–10 pagini cheie pentru a extrage texte + branding (culori, fonturi, logo).
4. **Design system** în `src/styles.css`: verde principal (din site), tipografie sans modernă, raze, shadow-uri.
5. **Layout global** (header cu nav: Meditatii / Materii / Admitere / Tutoriale / BAC / Subiecte / Variante / Blog + Login / Sign Up; footer).
6. **Homepage** (`/`) cu hero, search bar (materie + oraș), bullets, secțiuni informative.
7. **Schema DB inițială**: `profiles`, `user_roles` (student/teacher/admin), `subjects`, `cities`, `teachers`, `teacher_subjects`.
8. **Auth pages**: `/login`, `/signup` (email/parolă + Google), `/reset-password`.
9. **Pagini-shell** pentru rutele principale (`/meditatii`, `/materii`, `/admitere`, `/blog`, `/meditatii-bac`, etc.) — populăm conținutul în iterațiile următoare.

## Iterația 2 — Listare profesori
- `/meditatii` cu filtre (materie, oraș, preț, online/offline)
- `/profesor/$slug` profil profesor cu bio, materii, recenzii, tarife
- Onboarding profesor (formular completare profil)
- Recenzii (read)

## Iterația 3 — Chat direct cu profesor
- Tabele `conversations`, `messages` cu Realtime
- UI chat (listă conversații + thread)
- Notificări nou mesaj

## Iterația 4 — Conținut educațional
- Pagini BAC / Admitere / Evaluare cu subiecte, variante, tutoriale
- Blog (read din DB sau MD)
- SEO complet (sitemap, og:image per pagină, JSON-LD)

## Iterația 5 — Polish
- Plăți / abonamente (dacă e cazul)
- Dashboard profesor (programări)
- Recenzii (write)
- Email-uri tranzacționale

## Detalii tehnice
- TanStack Start + Lovable Cloud (Supabase sub capotă, RLS pe toate tabelele, roluri în tabel separat `user_roles`).
- Server functions cu `requireSupabaseAuth` pentru orice operație autentificată.
- Firecrawl rulat doar la build/seed pentru a extrage conținutul; nu rulează în runtime client.
- Imagini generate cu imagegen unde nu pot fi preluate (placeholder-uri profesori, hero illustrations).

Confirmă să încep cu **Iterația 1**.
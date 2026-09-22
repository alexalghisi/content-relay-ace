# Abonarea la newsletter: confirmarea promisă, dar nefuncțională

## Problema (confirmată)

Când un elev se abonează la variante și rezolvări noi (pe pagina de arhivă BAC sau pe o pagină de rezolvare), îi spunem: „Ți-am trimis un email de confirmare — dă click pe link ca să activezi abonarea."

În realitate:
- nu se trimite niciun email,
- nu există nicio pagină de confirmare,
- abonarea rămâne pentru totdeauna neconfirmată, deci elevul nu primește niciodată nimic.

În plus, trimiterea de emailuri de pe site este momentan blocată: adresa de expediere `notify.meditatiidirect.ro` nu a trecut verificarea (au expirat cele 14 zile), așa că nici un email nu poate pleca până nu se completează setările la furnizorul de domeniu.

## Ce propun să facem

### 1. Deblocarea trimiterii de emailuri (necesită acțiunea ta)
La furnizorul unde ai domeniul meditatiidirect.ro trebuie adăugate exact înregistrările cerute de Lovable pentru subdomeniul de trimitere, apoi reverificat din setările proiectului. Fără acest pas, orice email (confirmare newsletter, notificări) rămâne netrimis. Îți dau înregistrările exacte când începem.

### 2. Fluxul real de abonare (dublă confirmare)
- Abonarea nu se mai face direct din browser, ci printr-o funcție de server care salvează adresa și trimite emailul de confirmare.
- Email de confirmare în română, cu brandul site-ului și un buton „Confirmă abonarea".
- Pagină nouă `/newsletter/confirm` care validează codul din link, activează abonarea și afișează un mesaj clar de reușită sau de link expirat/invalid.
- Pagină de dezabonare la `/unsubscribe`, cerută de regulile anti-spam și de GDPR.

### 3. Mesaje oneste în interfață
- Dacă emailul pleacă: mesajul actual rămâne.
- Dacă trimiterea eșuează (de ex. domeniul încă neverificat): adresa e salvată, iar elevul vede „Te-am trecut pe listă. Îți trimitem confirmarea imediat ce e gata sistemul de email" — fără să promitem un email care nu există.

## Detalii tehnice

- Funcție de server nouă `src/lib/newsletter.functions.ts`: validează emailul, inserează prin service role în `newsletter_subscribers` (upsert pe email, `confirmed_at` NULL), apoi apelează ruta internă de trimitere transacțională cu șablonul de confirmare; întoarce `{ emailSent: boolean }`.
- Șablon React Email `src/lib/email-templates/newsletter-confirm.tsx`, înregistrat în `src/lib/email-templates/registry.ts`.
- Rută nouă `src/routes/newsletter.confirm.tsx` (noindex): citește `?t=`, apelează o funcție de server care setează `confirmed_at = now()` acolo unde `confirm_token` se potrivește.
- Rută nouă `src/routes/unsubscribe.tsx` (noindex) conectată la endpointul de dezabonare deja scafoldat.
- Finalizarea infrastructurii de email deja scafoldate: variabilele de server în `vite.config.ts`, aliasurile pentru `entities`, și excluderea rutelor interne `/lovable/*` și `/email/unsubscribe` din redirecturile aplicației în `src/start.ts`.
- `src/components/newsletter-signup.tsx` apelează funcția de server în loc de insert direct din browser și afișează mesajul potrivit rezultatului.
- Migrație mică: index pe `confirm_token` și politică de UPDATE doar prin service role (confirmarea se face server-side).

## Ce rămâne neschimbat
Designul, restul paginilor, modelul „elevul cere, profesorul propune" și toate optimizările SEO existente.

# Upgrade SEO: arhivă BAC pe sesiuni + rezolvări explicate + unelte

Site-ul are deja fundația: pagini pe materie și an (`/bac/informatica/2024`), pagini materie×oraș, sitemap, robots, JSON-LD, canonical, `lang="ro"`. Planul de mai jos adaugă ce lipsește, fără să schimbe designul actual.

## Structura de rute (de confirmat)

Păstrate ca acum:
- `/bac` — toate materiile
- `/bac/{materie}` — toți anii unei materii
- `/bac/{materie}/{an}` — anul, cu cele 4 sesiuni

Noi:
- `/bac/{materie}/{an}/{sesiune}` — pagina unei variante: subiectul afișat în pagină + descărcare, baremul separat, buton „Vezi rezolvarea explicată”
- `/rezolvari` — toate rezolvările, cu filtre
- `/rezolvari/{materie}/{an}/{sesiune}` — rezolvarea pas cu pas
- `/simulare-bac/{materie}` — test cronometrat
- `/calculator-medie-bac` și `/calculator-nota-admitere`

Sesiuni: `iunie`, `august`, `speciala`, `simulare`. Materii: cele 16 din catalogul actual.

## Etapa 1 — Arhiva BAC pe sesiuni

- Tabele noi în baza de date: variantele (materie, an, sesiune, specializare, tip subiect/barem, fișier, are rezolvare) și rezolvările (conținut, dificultate, timp estimat, stare ciornă/verificat).
- Fișierele rămân găzduite la noi, în bucketul existent `bac-pdfs`, servite de pe meditatiidirect.ro.
- Pagina de variantă afișează PDF-ul direct în pagină, încărcat doar când ajungi la el (fără să încetinească pagina), cu buton de descărcare și variantă simplă pe telefon.
- Titlu, descriere, canonical, imagine de share și date structurate proprii fiecărei variante; firul de navigare vizibil.
- Linkuri între pagini: variantă ↔ rezolvare ↔ materie ↔ anul următor/anterior.
- Paginile apar automat în sitemap.

## Etapa 2 — Rezolvări explicate

- Pagina de rezolvare urmează șablonul cerut: rezumatul cerinței, pașii cu explicații, răspunsul final, greșeli frecvente, recapitulare.
- Fiecare subpunct se deschide la click („arată rezolvarea”) — mai mult timp petrecut pe pagină și mai multe ancore indexabile.
- Formule matematice redate corect și cod colorat pentru informatică.
- Avertisment vizibil pe fiecare rezolvare: generată automat și verificată editorial, cu buton de semnalare a erorilor. Rezolvările rămân marcate „ciornă” până le verifici.
- Conținutul rezolvărilor se generează pe loturi, la cerere — nu toate deodată.

## Etapa 3 — Unelte care aduc trafic și vizite repetate

În ordinea priorității:
1. Simulare BAC cronometrată pe materie, cu scor la final și link către rezolvare.
2. Calculator medie BAC și calculator notă admitere.
3. Numărătoare inversă până la BAC, pe prima pagină și pe paginile de materie.
4. Întrebări/comentarii sub fiecare rezolvare (moderate) și abonare la variante noi, cu dublă confirmare pe email.

## Ce nu schimbăm

Designul actual, modelul „elevul cere, profesorul propune”, paginile materie×oraș și prețuri. Nu inventăm recenzii sau note medii.

## Detalii tehnice

- Rutele noi: `src/routes/bac.$materie.$an.$sesiune.tsx`, `rezolvari.index.tsx`, `rezolvari.$materie.$an.$sesiune.tsx`, `simulare-bac.$materie.tsx`, `calculator-medie-bac.tsx`, `calculator-nota-admitere.tsx`.
- Tabele `bac_variante` și `bac_rezolvari` cu RLS: citire publică (`anon`) doar pentru rândurile publicate, scriere doar prin service role; GRANT explicit.
- Rezolvarea PDF-urilor se face prin `resolveBacPdfs` (deja existent), extins cu sesiunea.
- PDF-ul se montează prin `LazyPdfPreview` (deja existent).
- KaTeX pentru formule și Shiki/Prism pentru cod, încărcate doar pe paginile de rezolvare.
- Sitemap: se adaugă sesiunile, rezolvările și uneltele în `src/routes/sitemap[.]xml.ts`.
- 301 de la eventualele rute vechi `/resurse/bac/...` către noile pagini de variantă.

## Volum

Etapa 1 adaugă ~1.000 de pagini noi de variantă (16 materii × 17 ani × 4 sesiuni), indexate doar unde există fișier. Etapele 2–3 se livrează după validarea etapei 1.

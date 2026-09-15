# Plan: Marketplace Meditații Direct

## Obiectiv
Transformarea interfeței actuale într-un marketplace modern și credibil pentru elevi, părinți și profesori, păstrând funcțiile și conținutul SEO existente.

## Ce voi construi

### 1. Navigare comună
- Refac bara fixă cu logo, navigare principală și acțiunile „Autentificare”, „Creează cont” și „Devino profesor”.
- Păstrez stările pentru utilizatorii conectați și meniul mobil.

### 2. Pagina principală
- Hero cu mesajul cerut și căutare mare după materie, nivel și locație.
- Categorii populare, profesori recomandați, trei pași „Caută, Rezervă, Învață” și trei testimoniale demonstrative marcate ca atare.
- CTA-uri către căutare și înscrierea profesorilor, fără a elimina secțiunile SEO utile existente.

### 3. Listarea profesorilor
- Layout responsive cu filtre laterale pe desktop și panou compact pe mobil.
- Filtre funcționale pentru materie/căutare, preț, rating, disponibilitate și format online/fizic.
- Carduri moderne cu fotografie, verificare, materie, experiență, rating demonstrativ, locație, tarif și acces către profil.
- Datele reale disponibile sunt folosite primele; date mock sunt afișate ca demonstrație când lista este goală.

### 4. Profilul profesorului
- Header clar cu fotografie, verificare, rating, materii, locație și tarif.
- Secțiuni „Despre mine”, „Metodologie” și recenzii demonstrative.
- Widget de rezervare cu calendar, alegerea orei și confirmare vizuală; nu va crea o plată sau o rezervare reală în baza de date.
- Păstrez contactul și chatul existente.

### 5. Design și verificare
- Paletă albastru marin, alb și verde de validare, definită prin tokenii proiectului.
- Componente shadcn/ui și iconițe Lucide pentru acțiuni, filtre și calendar.
- Animații discrete, focus vizibil, dimensiuni stabile și adaptare completă mobil/desktop.
- Verificare în browser pentru pagina principală, listare, profil și meniul mobil.

## Detalii tehnice
- Păstrez TanStack Router, autentificarea, datele existente și URL-urile publice.
- Modific în principal `site-header`, pagina principală, `/meditatii`, profilul `/anunt/$slug` și tokenii vizuali globali.
- Metadatele existente rămân funcționale; fiecare pagină păstrează titlul, descrierea, Open Graph și canonical.

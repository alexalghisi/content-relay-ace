# Articole de blog în repo (`src/content/blog`)

Fiecare articol e un fișier Markdown. Apare automat pe `/blog`, la `/blog/{slug}` (cu JSON-LD `Article`
și `BreadcrumbList`) și în `/sitemap.xml`, alături de articolele din tabelul `blog_posts`. Dacă un slug
există în ambele locuri, câștigă fișierul. Codul: `src/lib/blog-markdown.ts` (parsare și validare, pur)
și `src/lib/blog-fisiere.ts` (încărcarea fișierelor).

## Numele fișierului

```
src/content/blog/{yyyy-mm-dd}-{slug}.md
```

- data = ziua publicării; un articol cu dată din viitor apare abia în ziua lui (ora României);
- slug-ul = restul numelui: litere mici, cifre și cratime, fără diacritice. URL-ul devine `/blog/{slug}`;
- nu refolosi un slug deja publicat (vezi și `BLOG_REDIRECTS` din `src/lib/seo-redirects.ts`).

## Frontmatter

```markdown
---
title: "Titlul articolului (≈ 50–70 de caractere)"
description: "Rezumat pentru Google și pentru lista de articole, 140–160 de caractere."
date: 2026-11-08            # obligatoriu să fie aceeași dată ca în numele fișierului
updated: 2026-11-20         # opțional, când rescrii articolul
category: BAC               # opțional
tags: [subiecte bac fizica, barem]
related:                    # opțional: linkurile din „Continuă cu”, format „/cale | Etichetă”
  - /subiecte-bac/materie/fizica | Subiecte BAC fizică
  - /meditatii-fizica | Meditații fizică
---

Textul articolului, în Markdown (GFM: titluri, liste, tabele, linkuri). HTML brut nu se afișează.
```

- `title`, `description` și conținutul sunt obligatorii; un fișier invalid nu se publică (și `bun test` pică);
- o secțiune `## Întrebări frecvente` cu întrebări `### …` produce și JSON-LD `FAQPage`
  (întrebările sunt vizibile în articol, deci schema e corectă).

## Reguli de conținut (le verifică `src/lib/blog-markdown.test.ts`)

- 900–1400 de cuvinte, în română, cu diacritice;
- fără clișee („în era digitală”, „în concluzie”, „nu în ultimul rând”, „călătorie”…);
- linkurile interne duc doar la rute existente; folosește paginile reale ale site-ului (subiecte BAC,
  calendarul examenelor, paginile de meditații pe materie);
- **fără cifre inventate**: prețuri, numere de profesori sau de elevi, procente de promovare. Prețurile reale
  sunt pe `/preturi-meditatii/{materie}`, calculate din datele platformei — trimite acolo în loc să scrii o sumă;
- datele de examen se iau din `src/data/calendar-2027.ts`, structura probelor din PDF-urile oficiale din `public/bac`.

## Un articol pe zi (job automat)

Jobul zilnic adaugă **un** fișier nou `{data-de-azi}-{slug}.md`, rulează `bun test` (validează formatul,
lungimea și linkurile) și deschide un PR. Nu modifică articolele existente și nu scrie în `blog_posts`.
Publicarea automată în baza de date rămâne oprită (`AUTO_BLOG_ENABLED`), fiindcă producea articole duplicate.

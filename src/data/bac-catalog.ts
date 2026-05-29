// Catalog complet BAC pentru rute SEO: materii × ani × sesiuni.
// 16 materii × 17 ani (2010–2026) = ~272 pagini SEO unice la /bac/{materie}/{an}.
// PDF-urile self-hosted se rezolvă din bucketul `bac-pdfs` la {materie}/{an}/{sesiune}-{tip}.pdf
// (tip: "subiect" | "barem"). Dacă nu există în Storage, pagina afișează doar
// informațiile SEO + CTA profesor (fără linkuri 404).
export interface BacSubject {
  slug: string;
  name: string;
  nameLower: string;
  short: string; // descriere scurtă SEO
}

export const BAC_SUBJECTS: BacSubject[] = [
  { slug: "romana",       name: "Limba și literatura română", nameLower: "română",      short: "proba scrisă obligatorie pentru toți candidații" },
  { slug: "matematica",   name: "Matematică",                 nameLower: "matematică",  short: "M_mate-info, M_șt-nat, M_tehnologic și M_pedagogic" },
  { slug: "istorie",      name: "Istorie",                    nameLower: "istorie",     short: "alternativă la matematică pentru profil uman" },
  { slug: "biologie",     name: "Biologie",                   nameLower: "biologie",    short: "anatomie + vegetală/animală, profil real" },
  { slug: "chimie",       name: "Chimie",                     nameLower: "chimie",      short: "organică sau anorganică, profil real" },
  { slug: "fizica",       name: "Fizică",                     nameLower: "fizică",      short: "mecanică, termodinamică, electricitate, optică" },
  { slug: "geografie",    name: "Geografie",                  nameLower: "geografie",   short: "Europa și România, profil uman" },
  { slug: "informatica",  name: "Informatică",                nameLower: "informatică", short: "C/C++ sau Pascal, profil mate-info" },
  { slug: "engleza",      name: "Engleză",                    nameLower: "engleză",     short: "proba C — competențe lingvistice" },
  { slug: "franceza",     name: "Franceză",                   nameLower: "franceză",    short: "proba C — competențe lingvistice" },
  { slug: "germana",      name: "Germană",                    nameLower: "germană",     short: "proba C — competențe lingvistice" },
  { slug: "logica",       name: "Logică și argumentare",      nameLower: "logică",      short: "alegere la proba E.d, profil uman" },
  { slug: "psihologie",   name: "Psihologie",                 nameLower: "psihologie",  short: "alegere la proba E.d, profil uman" },
  { slug: "sociologie",   name: "Sociologie",                 nameLower: "sociologie",  short: "alegere la proba E.d, profil uman" },
  { slug: "economie",     name: "Economie",                   nameLower: "economie",    short: "alegere la proba E.d, profil uman" },
  { slug: "filosofie",    name: "Filosofie",                  nameLower: "filosofie",   short: "alegere la proba E.d, profil uman" },
];

export const BAC_YEARS: number[] = Array.from({ length: 2026 - 2010 + 1 }, (_, i) => 2010 + i);

// Sesiunile principale pe care le acoperim pe fiecare pagină.
export const BAC_SESSIONS = [
  { slug: "iunie",     label: "Sesiunea iunie–iulie" },
  { slug: "august",    label: "Sesiunea august–septembrie" },
  { slug: "speciala",  label: "Sesiunea specială" },
  { slug: "simulare",  label: "Simulare națională" },
] as const;
export type BacSessionSlug = (typeof BAC_SESSIONS)[number]["slug"];

export const getBacSubject = (slug: string) => BAC_SUBJECTS.find((s) => s.slug === slug);
export const BAC_SUBJECT_SLUGS = BAC_SUBJECTS.map((s) => s.slug);

// URL Storage pentru un PDF (subiect sau barem) — convenție stabilă.
const SUPA_URL = "https://gmgcufdfwwvfnnzfazae.supabase.co";
export function bacPdfUrl(materie: string, an: number, sesiune: BacSessionSlug, tip: "subiect" | "barem") {
  return `${SUPA_URL}/storage/v1/object/public/bac-pdfs/${materie}/${an}/${sesiune}-${tip}.pdf`;
}

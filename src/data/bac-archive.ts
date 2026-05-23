// Subiecte și bareme BAC — GĂZDUITE PE PLATFORMA NOASTRĂ.
// Fiecare item are o rută internă pe MeditatiiDirect.ro și URL-uri directe către
// PDF-urile noastre din bucket-ul `bac-pdfs` (Lovable Cloud Storage).

import { bacPdfUrl, bacResursaPath } from "@/lib/pdf-urls";

export interface BacItem {
  slug: string;
  name: string;
  year: number;
  /** Ruta internă pentru pagina cu subiect + barem (vizualizare + download). */
  internal: string;
  /** URL direct către PDF-ul subiectului (găzduit la noi). */
  subjectPdf: string;
  /** URL direct către PDF-ul baremului (găzduit la noi). */
  baremPdf: string;
}

const SUBJECTS: { slug: string; name: string }[] = [
  { slug: "matematica-m1", name: "Matematică M_mate-info (M1)" },
  { slug: "matematica-m2", name: "Matematică M_științe-ale-naturii (M2)" },
  { slug: "matematica-m3", name: "Matematică M_tehnologic / pedagogic (M3)" },
  { slug: "romana", name: "Limba și literatura română" },
  { slug: "biologie", name: "Biologie vegetală și animală" },
  { slug: "fizica", name: "Fizică" },
  { slug: "chimie", name: "Chimie organică / anorganică" },
  { slug: "informatica", name: "Informatică (C/C++)" },
  { slug: "istorie", name: "Istorie" },
  { slug: "geografie", name: "Geografie" },
  { slug: "logica", name: "Logică, argumentare și comunicare" },
  { slug: "psihologie", name: "Psihologie" },
  { slug: "economie", name: "Economie" },
  { slug: "sociologie", name: "Sociologie" },
  { slug: "filosofie", name: "Filosofie" },
];

// Ani disponibili cu PDF efectiv în storage (subiecte oficiale găzduite la noi).
const AVAILABLE_YEARS = [2021, 2022, 2023, 2024, 2025];
// Toți anii pe care îi indexăm SEO (chiar dacă PDF-ul nu e încă disponibil pentru toți).
// Acoperim toată istoria Bacalaureatului modern, plus sesiunea viitoare 2026.
const ALL_YEARS: number[] = [];
for (let y = 2001; y <= 2026; y++) ALL_YEARS.push(y);

export const BAC_ARCHIVE: BacItem[] = SUBJECTS.flatMap((s) =>
  ALL_YEARS.map((year) => ({
    slug: s.slug,
    name: s.name,
    year,
    internal: bacResursaPath(s.slug, year),
    subjectPdf: bacPdfUrl(s.slug, year, "subiect"),
    baremPdf: bacPdfUrl(s.slug, year, "barem"),
  })),
);

export const BAC_SUBJECTS = SUBJECTS;
/** Toți anii indexați SEO (2001–2026). */
export const BAC_YEARS = ALL_YEARS;
/** Ani cu PDF efectiv în storage. */
export const BAC_AVAILABLE_YEARS = AVAILABLE_YEARS;

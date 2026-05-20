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

const YEARS = Array.from({ length: 17 }, (_, i) => 2010 + i); // 2010 → 2026

export const BAC_ARCHIVE: BacItem[] = SUBJECTS.flatMap((s) =>
  YEARS.map((year) => ({
    slug: s.slug,
    name: s.name,
    year,
    internal: bacResursaPath(s.slug, year),
    subjectPdf: bacPdfUrl(s.slug, year, "subiect"),
    baremPdf: bacPdfUrl(s.slug, year, "barem"),
  })),
);

export const BAC_SUBJECTS = SUBJECTS;
export const BAC_YEARS = YEARS;

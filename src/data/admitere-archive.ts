// Subiecte de ADMITERE — GĂZDUITE PE PLATFORMA NOASTRĂ.
// Fiecare facultate are pagini interne pe MeditatiiDirect.ro cu vizualizare și
// download direct din bucket-ul `admitere-pdfs` (Lovable Cloud Storage).

import { admiterePdfUrl, admitereResursaPath } from "@/lib/pdf-urls";

export interface AdmFaculty {
  slug: string;
  name: string;
  city: string;
  subject: string;
}

export const ADM_FACULTIES: AdmFaculty[] = [
  { slug: "umf-bucuresti-medicina", name: "UMF Carol Davila București — Medicină", city: "București", subject: "biologie + chimie organică" },
  { slug: "umf-cluj-medicina", name: "UMF Iuliu Hațieganu Cluj — Medicină", city: "Cluj-Napoca", subject: "biologie + chimie organică" },
  { slug: "umf-iasi-medicina", name: "UMF Grigore T. Popa Iași — Medicină", city: "Iași", subject: "biologie + chimie" },
  { slug: "umf-timisoara-medicina", name: "UMF Victor Babeș Timișoara — Medicină", city: "Timișoara", subject: "biologie + chimie sau fizică" },
  { slug: "upb-inginerie", name: "Universitatea Politehnica din București (UPB)", city: "București", subject: "matematică + fizică / algoritmică" },
  { slug: "utcn-inginerie", name: "Universitatea Tehnică Cluj-Napoca (UTCN)", city: "Cluj-Napoca", subject: "matematică / informatică" },
  { slug: "ase-bucuresti", name: "Academia de Studii Economice (ASE) București", city: "București", subject: "matematică / economie" },
  { slug: "drept-bucuresti", name: "Drept — Universitatea din București", city: "București", subject: "raționament logic + limba română" },
  { slug: "drept-cluj", name: "Drept — Universitatea Babeș-Bolyai Cluj", city: "Cluj-Napoca", subject: "raționament logic + limba română" },
  { slug: "fmi-bucuresti", name: "Facultatea de Matematică și Informatică — Universitatea din București", city: "București", subject: "matematică / informatică" },
];

const YEARS = Array.from({ length: 17 }, (_, i) => 2010 + i);

export interface AdmItem {
  slug: string;
  name: string;
  subject: string;
  city: string;
  year: number;
  /** Ruta internă către pagina cu vizualizare + download. */
  internal: string;
  /** URL direct către PDF-ul subiectului (găzduit la noi). */
  subjectPdf: string;
  /** URL direct către PDF-ul baremului (găzduit la noi). */
  baremPdf: string;
}

export const ADM_ARCHIVE: AdmItem[] = ADM_FACULTIES.flatMap((f) =>
  YEARS.map((year) => ({
    slug: f.slug,
    name: f.name,
    subject: f.subject,
    city: f.city,
    year,
    internal: admitereResursaPath(f.slug, year),
    subjectPdf: admiterePdfUrl(f.slug, year, "subiect"),
    baremPdf: admiterePdfUrl(f.slug, year, "barem"),
  })),
);

export const ADM_YEARS = YEARS;

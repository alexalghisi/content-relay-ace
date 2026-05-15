// Linkuri către PAGINILE OFICIALE de admitere ale facultăților din România.
// Fiecare universitate publică pe site-ul propriu subiectele de admitere din anii
// anteriori (de obicei la "Admitere" → "Arhivă" sau "Subiecte rezolvate").

export interface AdmFaculty {
  slug: string;
  name: string;
  city: string;
  subject: string;
  /** URL oficial către pagina de admitere a facultății */
  official: string;
}

export const ADM_FACULTIES: AdmFaculty[] = [
  { slug: "umf-bucuresti-medicina", name: "UMF Carol Davila București — Medicină", city: "București", subject: "biologie + chimie organică", official: "https://umfcd.ro/admitere/" },
  { slug: "umf-cluj-medicina", name: "UMF Iuliu Hațieganu Cluj — Medicină", city: "Cluj-Napoca", subject: "biologie + chimie organică", official: "https://umfcluj.ro/admitere/" },
  { slug: "umf-iasi-medicina", name: "UMF Grigore T. Popa Iași — Medicină", city: "Iași", subject: "biologie + chimie", official: "https://www.umfiasi.ro/ro/academic/admitere" },
  { slug: "umf-timisoara-medicina", name: "UMF Victor Babeș Timișoara — Medicină", city: "Timișoara", subject: "biologie + chimie sau fizică", official: "https://www.umft.ro/admitere/" },
  { slug: "upb-inginerie", name: "Universitatea Politehnica din București (UPB)", city: "București", subject: "matematică + fizică / algoritmică", official: "https://admitere.pub.ro/" },
  { slug: "utcn-inginerie", name: "Universitatea Tehnică Cluj-Napoca (UTCN)", city: "Cluj-Napoca", subject: "matematică / informatică", official: "https://admitere.utcluj.ro/" },
  { slug: "ase-bucuresti", name: "Academia de Studii Economice (ASE) București", city: "București", subject: "matematică / economie", official: "https://admitere.ase.ro/" },
  { slug: "drept-bucuresti", name: "Drept — Universitatea din București", city: "București", subject: "raționament logic + limba română", official: "https://drept.unibuc.ro/Admitere-s23-ro.htm" },
  { slug: "drept-cluj", name: "Drept — Universitatea Babeș-Bolyai Cluj", city: "Cluj-Napoca", subject: "raționament logic + limba română", official: "https://law.ubbcluj.ro/admitere/" },
  { slug: "fmi-bucuresti", name: "Facultatea de Matematică și Informatică — Universitatea din București", city: "București", subject: "matematică / informatică", official: "https://fmi.unibuc.ro/admitere/" },
];

const YEARS = Array.from({ length: 17 }, (_, i) => 2010 + i);

export interface AdmItem {
  slug: string;
  name: string;
  subject: string;
  city: string;
  year: number;
  /** URL oficial al facultății (arhiva subiectelor) */
  official: string;
}

export const ADM_ARCHIVE: AdmItem[] = ADM_FACULTIES.flatMap((f) =>
  YEARS.map((year) => ({ slug: f.slug, name: f.name, subject: f.subject, city: f.city, year, official: f.official })),
);

export const ADM_YEARS = YEARS;

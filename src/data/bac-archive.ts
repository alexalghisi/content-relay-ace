// Linkuri către SURSELE OFICIALE pentru subiectele și baremele de bacalaureat.
// Subiectele oficiale BAC sunt publicate de Ministerul Educației pe subiecte.edu.ro,
// arhivate per sesiune. Direcționăm userul către arhiva oficială a anului respectiv,
// unde poate descărca PDF-ul real al fiecărei materii și varianta (M1/M2/special).

export interface BacItem {
  slug: string;
  name: string;
  year: number;
  /** URL oficial către arhiva sesiunii (subiecte.edu.ro) */
  official: string;
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

// Pagina oficială de arhivă a sesiunilor BAC (toate materiile + bareme):
const officialFor = (year: number) => `https://subiecte.edu.ro/${year}/bacalaureat/`;

export const BAC_ARCHIVE: BacItem[] = SUBJECTS.flatMap((s) =>
  YEARS.map((year) => ({ slug: s.slug, name: s.name, year, official: officialFor(year) })),
);

export const BAC_SUBJECTS = SUBJECTS;
export const BAC_YEARS = YEARS;

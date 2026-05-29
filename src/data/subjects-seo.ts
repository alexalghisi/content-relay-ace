// Materii folosite pentru rutele SEO dinamice (combo materie × oraș, preț × materie).
// Sincronizat manual cu cele mai căutate materii pe Google (volum lunar > 100).
export interface SubjectSeo {
  slug: string;       // în URL
  name: string;       // cu diacritice
  nameLower: string;  // pentru text inline
  pretMin: number;    // lei/oră
  pretMax: number;
  pretMediu: number;
}

export const SUBJECTS_SEO: SubjectSeo[] = [
  { slug: "matematica", name: "Matematică", nameLower: "matematică", pretMin: 50, pretMax: 150, pretMediu: 80 },
  { slug: "romana",     name: "Română",     nameLower: "română",     pretMin: 40, pretMax: 130, pretMediu: 70 },
  { slug: "engleza",    name: "Engleză",    nameLower: "engleză",    pretMin: 50, pretMax: 200, pretMediu: 90 },
  { slug: "germana",    name: "Germană",    nameLower: "germană",    pretMin: 60, pretMax: 200, pretMediu: 100 },
  { slug: "franceza",   name: "Franceză",   nameLower: "franceză",   pretMin: 50, pretMax: 180, pretMediu: 80 },
  { slug: "fizica",     name: "Fizică",     nameLower: "fizică",     pretMin: 50, pretMax: 150, pretMediu: 80 },
  { slug: "chimie",     name: "Chimie",     nameLower: "chimie",     pretMin: 50, pretMax: 150, pretMediu: 80 },
  { slug: "biologie",   name: "Biologie",   nameLower: "biologie",   pretMin: 50, pretMax: 150, pretMediu: 80 },
  { slug: "informatica",name: "Informatică",nameLower: "informatică",pretMin: 60, pretMax: 200, pretMediu: 100 },
  { slug: "istorie",    name: "Istorie",    nameLower: "istorie",    pretMin: 40, pretMax: 130, pretMediu: 70 },
  { slug: "geografie",  name: "Geografie",  nameLower: "geografie",  pretMin: 40, pretMax: 130, pretMediu: 70 },
];

export const SUBJECT_SEO_SLUGS = SUBJECTS_SEO.map((s) => s.slug);
export const getSubjectSeo = (slug: string) => SUBJECTS_SEO.find((s) => s.slug === slug);

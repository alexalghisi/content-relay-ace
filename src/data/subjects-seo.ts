// Materii folosite pentru rutele SEO dinamice (combo materie × oraș, preț × materie).
// Sincronizat manual cu cele mai căutate materii pe Google (volum lunar > 100).
export interface SubjectSeo {
  slug: string;       // în URL
  name: string;       // cu diacritice
  nameLower: string;  // pentru text inline
  pretMin: number;    // lei/oră
  pretMax: number;
  pretMediu: number;
  /** Slug-uri folosite în baza de date (ads.subject_slug) — includem variantele istorice. */
  dbSlugs: string[];
}

const s = (
  slug: string, name: string, nameLower: string,
  pretMin: number, pretMax: number, pretMediu: number,
  dbSlugs: string[] = [],
): SubjectSeo => ({ slug, name, nameLower, pretMin, pretMax, pretMediu, dbSlugs: [slug, ...dbSlugs] });

export const SUBJECTS_SEO: SubjectSeo[] = [
  s("matematica", "Matematică", "matematică", 50, 150, 80),
  s("romana", "Română", "română", 40, 130, 70, ["limba-romana"]),
  s("engleza", "Engleză", "engleză", 50, 200, 90, ["limba-engleza"]),
  s("germana", "Germană", "germană", 60, 200, 100, ["limba-germana"]),
  s("franceza", "Franceză", "franceză", 50, 180, 80, ["limba-franceza"]),
  s("spaniola", "Spaniolă", "spaniolă", 50, 180, 80, ["limba-spaniola"]),
  s("italiana", "Italiană", "italiană", 50, 170, 80, ["limba-italiana"]),
  s("fizica", "Fizică", "fizică", 50, 150, 80),
  s("chimie", "Chimie", "chimie", 50, 150, 80),
  s("biologie", "Biologie", "biologie", 50, 150, 80),
  s("informatica", "Informatică", "informatică", 60, 200, 100),
  s("programare", "Programare", "programare", 70, 250, 120),
  s("python", "Python", "Python", 70, 250, 120),
  s("istorie", "Istorie", "istorie", 40, 130, 70),
  s("geografie", "Geografie", "geografie", 40, 130, 70),
  s("logica", "Logică", "logică", 40, 130, 70),
  s("psihologie", "Psihologie", "psihologie", 40, 140, 70),
  s("filosofie", "Filosofie", "filosofie", 40, 140, 70),
  s("economie", "Economie", "economie", 45, 150, 75),
  s("desen", "Desen", "desen", 45, 160, 80),
  s("muzica", "Muzică", "muzică", 50, 180, 90),
];

export const SUBJECT_SEO_SLUGS = SUBJECTS_SEO.map((x) => x.slug);
export const getSubjectSeo = (slug: string) => SUBJECTS_SEO.find((x) => x.slug === slug);

// Materii folosite pentru rutele SEO dinamice (combo materie × oraș, preț × materie).
// Sincronizat manual cu cele mai căutate materii pe Google (volum lunar > 100).
export interface SubjectSeo {
  slug: string; // în URL
  name: string; // cu diacritice
  nameLower: string; // pentru text inline
  /** Slug-uri folosite în baza de date (ads.subject_slug) — includem variantele istorice. */
  dbSlugs: string[];
}

// Fără prețuri aici: tarifele publice vin doar din src/lib/market-stats.functions.ts (date reale).
const s = (slug: string, name: string, nameLower: string, dbSlugs: string[] = []): SubjectSeo => ({
  slug,
  name,
  nameLower,
  dbSlugs: [slug, ...dbSlugs],
});

export const SUBJECTS_SEO: SubjectSeo[] = [
  s("matematica", "Matematică", "matematică"),
  s("romana", "Română", "română", ["limba-romana"]),
  s("engleza", "Engleză", "engleză", ["limba-engleza"]),
  s("germana", "Germană", "germană", ["limba-germana"]),
  s("franceza", "Franceză", "franceză", ["limba-franceza"]),
  s("spaniola", "Spaniolă", "spaniolă", ["limba-spaniola"]),
  s("italiana", "Italiană", "italiană", ["limba-italiana"]),
  s("fizica", "Fizică", "fizică"),
  s("chimie", "Chimie", "chimie"),
  s("biologie", "Biologie", "biologie"),
  s("informatica", "Informatică", "informatică"),
  s("programare", "Programare", "programare"),
  s("python", "Python", "Python"),
  s("istorie", "Istorie", "istorie"),
  s("geografie", "Geografie", "geografie"),
  s("logica", "Logică", "logică"),
  s("psihologie", "Psihologie", "psihologie"),
  s("filosofie", "Filosofie", "filosofie"),
  s("economie", "Economie", "economie"),
  s("desen", "Desen", "desen"),
  s("muzica", "Muzică", "muzică"),
];

export const SUBJECT_SEO_SLUGS = SUBJECTS_SEO.map((x) => x.slug);
export const getSubjectSeo = (slug: string) => SUBJECTS_SEO.find((x) => x.slug === slug);

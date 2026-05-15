// Top orașe din România pentru landing pages SEO.
// Sincronizat cu tabelul `cities` din DB.
export interface CityInfo {
  slug: string;
  name: string;       // forma cu diacritice pentru afișare
  county: string;
  population: string; // pentru conținut SEO unic per oraș
  matchLocation: string[]; // strings to match against ad.location (case-insensitive contains)
}

export const CITIES: CityInfo[] = [
  { slug: "bucuresti",   name: "București",   county: "București", population: "1.9 milioane", matchLocation: ["bucur"] },
  { slug: "cluj-napoca", name: "Cluj-Napoca", county: "Cluj",       population: "320.000",     matchLocation: ["cluj"] },
  { slug: "timisoara",   name: "Timișoara",  county: "Timiș",     population: "300.000",     matchLocation: ["timi"] },
  { slug: "iasi",        name: "Iași",        county: "Iași",       population: "290.000",     matchLocation: ["ias"] },
  { slug: "constanta",   name: "Constanța",  county: "Constanța", population: "280.000",     matchLocation: ["constan"] },
  { slug: "craiova",     name: "Craiova",     county: "Dolj",       population: "270.000",     matchLocation: ["craiova"] },
  { slug: "brasov",      name: "Brașov",     county: "Brașov",    population: "250.000",     matchLocation: ["brașov", "brasov"] },
  { slug: "galati",      name: "Galați",     county: "Galați",    population: "240.000",     matchLocation: ["galați", "galati"] },
  { slug: "ploiesti",    name: "Ploiești",   county: "Prahova",    population: "200.000",     matchLocation: ["ploie"] },
  { slug: "oradea",      name: "Oradea",      county: "Bihor",      population: "195.000",     matchLocation: ["oradea"] },
  { slug: "sibiu",       name: "Sibiu",       county: "Sibiu",      population: "150.000",     matchLocation: ["sibiu"] },
  { slug: "arad",        name: "Arad",        county: "Arad",       population: "160.000",     matchLocation: ["arad"] },
  { slug: "pitesti",     name: "Pitești",    county: "Argeș",     population: "150.000",     matchLocation: ["pite"] },
  { slug: "bacau",       name: "Bacău",      county: "Bacău",     population: "140.000",     matchLocation: ["bac"] },
];

export const CITY_SLUGS = CITIES.map((c) => c.slug);
export const getCityBySlug = (slug: string) => CITIES.find((c) => c.slug === slug);

// Top orașe din România pentru landing pages SEO locale.
// Fiecare oraș generează: /meditatii-in/{slug}, /profesori/{slug}, /meditatii/{materie}/{slug}
export interface CityInfo {
  slug: string;
  name: string;       // forma cu diacritice pentru afișare
  county: string;
  population: string; // pentru conținut SEO unic per oraș
  matchLocation: string[]; // strings to match against ad.location (case-insensitive contains)
}

export const CITIES: CityInfo[] = [
  { slug: "bucuresti",       name: "București",       county: "București", population: "1.9 milioane", matchLocation: ["bucur"] },
  { slug: "cluj-napoca",     name: "Cluj-Napoca",     county: "Cluj",       population: "320.000",     matchLocation: ["cluj"] },
  { slug: "timisoara",       name: "Timișoara",       county: "Timiș",      population: "300.000",     matchLocation: ["timi"] },
  { slug: "iasi",            name: "Iași",            county: "Iași",       population: "290.000",     matchLocation: ["ias"] },
  { slug: "constanta",       name: "Constanța",       county: "Constanța",  population: "280.000",     matchLocation: ["constan"] },
  { slug: "craiova",         name: "Craiova",         county: "Dolj",       population: "270.000",     matchLocation: ["craiova"] },
  { slug: "brasov",          name: "Brașov",          county: "Brașov",     population: "250.000",     matchLocation: ["brașov", "brasov"] },
  { slug: "galati",          name: "Galați",          county: "Galați",     population: "240.000",     matchLocation: ["galați", "galati"] },
  { slug: "ploiesti",        name: "Ploiești",        county: "Prahova",    population: "200.000",     matchLocation: ["ploie"] },
  { slug: "oradea",          name: "Oradea",          county: "Bihor",      population: "195.000",     matchLocation: ["oradea"] },
  { slug: "braila",          name: "Brăila",          county: "Brăila",     population: "180.000",     matchLocation: ["brăila", "braila"] },
  { slug: "arad",            name: "Arad",            county: "Arad",       population: "160.000",     matchLocation: ["arad"] },
  { slug: "pitesti",         name: "Pitești",         county: "Argeș",      population: "150.000",     matchLocation: ["pite"] },
  { slug: "sibiu",           name: "Sibiu",           county: "Sibiu",      population: "150.000",     matchLocation: ["sibiu"] },
  { slug: "bacau",           name: "Bacău",           county: "Bacău",      population: "140.000",     matchLocation: ["bacău", "bacau"] },
  { slug: "targu-mures",     name: "Târgu Mureș",     county: "Mureș",      population: "135.000",     matchLocation: ["târgu mureș", "targu mures", "tg mures", "tg. mures"] },
  { slug: "baia-mare",       name: "Baia Mare",       county: "Maramureș",  population: "125.000",     matchLocation: ["baia mare"] },
  { slug: "buzau",           name: "Buzău",           county: "Buzău",      population: "115.000",     matchLocation: ["buzău", "buzau"] },
  { slug: "botosani",        name: "Botoșani",        county: "Botoșani",   population: "105.000",     matchLocation: ["botoșani", "botosani"] },
  { slug: "satu-mare",       name: "Satu Mare",       county: "Satu Mare",  population: "100.000",     matchLocation: ["satu mare"] },
  { slug: "ramnicu-valcea",  name: "Râmnicu Vâlcea",  county: "Vâlcea",     population: "98.000",      matchLocation: ["râmnicu vâlcea", "ramnicu valcea", "rm valcea", "rm. valcea"] },
  { slug: "suceava",         name: "Suceava",         county: "Suceava",    population: "92.000",      matchLocation: ["suceava"] },
  { slug: "piatra-neamt",    name: "Piatra Neamț",    county: "Neamț",      population: "85.000",      matchLocation: ["piatra neamț", "piatra neamt"] },
  { slug: "drobeta-turnu-severin", name: "Drobeta-Turnu Severin", county: "Mehedinți", population: "85.000", matchLocation: ["drobeta", "turnu severin"] },
  { slug: "targoviste",      name: "Târgoviște",      county: "Dâmbovița",  population: "80.000",      matchLocation: ["târgoviște", "targoviste"] },
  { slug: "focsani",         name: "Focșani",         county: "Vrancea",    population: "78.000",      matchLocation: ["focșani", "focsani"] },
  { slug: "bistrita",        name: "Bistrița",        county: "Bistrița-Năsăud", population: "75.000", matchLocation: ["bistrița", "bistrita"] },
  { slug: "tulcea",          name: "Tulcea",          county: "Tulcea",     population: "73.000",      matchLocation: ["tulcea"] },
  { slug: "resita",          name: "Reșița",          county: "Caraș-Severin", population: "70.000",   matchLocation: ["reșița", "resita"] },
  { slug: "slatina",         name: "Slatina",         county: "Olt",        population: "70.000",      matchLocation: ["slatina"] },
  { slug: "alba-iulia",      name: "Alba Iulia",      county: "Alba",       population: "63.000",      matchLocation: ["alba iulia"] },
  { slug: "deva",            name: "Deva",            county: "Hunedoara",  population: "61.000",      matchLocation: ["deva"] },
  { slug: "giurgiu",         name: "Giurgiu",         county: "Giurgiu",    population: "54.000",      matchLocation: ["giurgiu"] },
  { slug: "zalau",           name: "Zalău",           county: "Sălaj",      population: "56.000",      matchLocation: ["zalău", "zalau"] },
];

export const CITY_SLUGS = CITIES.map((c) => c.slug);
export const getCityBySlug = (slug: string) => CITIES.find((c) => c.slug === slug);

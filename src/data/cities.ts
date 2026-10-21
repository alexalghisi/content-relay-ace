// Top orașe din România pentru landing pages SEO locale.
// Fiecare oraș generează: /meditatii-in/{slug}, /profesori/{slug}, /meditatii/{materie}/{slug}
export interface CityInfo {
  slug: string;
  name: string;       // forma cu diacritice pentru afișare
  county: string;
  population: string; // pentru conținut SEO unic per oraș
  matchLocation: string[]; // strings to match against ad.location (case-insensitive contains)
  landmark: string;   // liceu / universitate reper — folosit în titluri unice
  priceIndex: number; // multiplicator preț local (1.0 = medie națională)
}

export const CITIES: CityInfo[] = [
  { slug: "bucuresti",       name: "București",       county: "București", population: "1.9 milioane", matchLocation: ["bucur"], landmark: "Colegiul Sf. Sava & Univ. București", priceIndex: 1.20 },
  { slug: "cluj-napoca",     name: "Cluj-Napoca",     county: "Cluj",       population: "320.000",     matchLocation: ["cluj"], landmark: "UBB & Liceul Emil Racoviță", priceIndex: 1.15 },
  { slug: "timisoara",       name: "Timișoara",       county: "Timiș",      population: "300.000",     matchLocation: ["timi"], landmark: "UVT & CN Bănățean", priceIndex: 1.10 },
  { slug: "iasi",            name: "Iași",            county: "Iași",       population: "290.000",     matchLocation: ["ias"], landmark: "UAIC & CN Costache Negruzzi", priceIndex: 1.05 },
  { slug: "constanta",       name: "Constanța",       county: "Constanța",  population: "280.000",     matchLocation: ["constan"], landmark: "CN Mircea cel Bătrân", priceIndex: 1.05 },
  { slug: "craiova",         name: "Craiova",         county: "Dolj",       population: "270.000",     matchLocation: ["craiova"], landmark: "CN Carol I & Univ. Craiova", priceIndex: 1.00 },
  { slug: "brasov",          name: "Brașov",          county: "Brașov",     population: "250.000",     matchLocation: ["brașov", "brasov"], landmark: "CN Andrei Șaguna & Univ. Transilvania", priceIndex: 1.05 },
  { slug: "galati",          name: "Galați",          county: "Galați",     population: "240.000",     matchLocation: ["galați", "galati"], landmark: "CN Vasile Alecsandri", priceIndex: 0.95 },
  { slug: "ploiesti",        name: "Ploiești",        county: "Prahova",    population: "200.000",     matchLocation: ["ploie"], landmark: "CN I.L. Caragiale", priceIndex: 1.00 },
  { slug: "oradea",          name: "Oradea",          county: "Bihor",      population: "195.000",     matchLocation: ["oradea"], landmark: "CN Emanuil Gojdu", priceIndex: 1.00 },
  { slug: "braila",          name: "Brăila",          county: "Brăila",     population: "180.000",     matchLocation: ["brăila", "braila"], landmark: "CN Nicolae Bălcescu", priceIndex: 0.90 },
  { slug: "arad",            name: "Arad",            county: "Arad",       population: "160.000",     matchLocation: ["arad"], landmark: "CN Moise Nicoară", priceIndex: 0.95 },
  { slug: "pitesti",         name: "Pitești",         county: "Argeș",      population: "150.000",     matchLocation: ["pite"], landmark: "CN Zinca Golescu", priceIndex: 0.95 },
  { slug: "sibiu",           name: "Sibiu",           county: "Sibiu",      population: "150.000",     matchLocation: ["sibiu"], landmark: "CN Gheorghe Lazăr & ULBS", priceIndex: 1.05 },
  { slug: "bacau",           name: "Bacău",           county: "Bacău",      population: "140.000",     matchLocation: ["bacău", "bacau"], landmark: "CN Ferdinand I", priceIndex: 0.90 },
  { slug: "targu-mures",     name: "Târgu Mureș",     county: "Mureș",      population: "135.000",     matchLocation: ["târgu mureș", "targu mures", "tg mures", "tg. mures"], landmark: "CN Alexandru Papiu Ilarian", priceIndex: 0.95 },
  { slug: "baia-mare",       name: "Baia Mare",       county: "Maramureș",  population: "125.000",     matchLocation: ["baia mare"], landmark: "CN Gheorghe Șincai", priceIndex: 0.90 },
  { slug: "buzau",           name: "Buzău",           county: "Buzău",      population: "115.000",     matchLocation: ["buzău", "buzau"], landmark: "CN B.P. Hasdeu", priceIndex: 0.90 },
  { slug: "botosani",        name: "Botoșani",        county: "Botoșani",   population: "105.000",     matchLocation: ["botoșani", "botosani"], landmark: "CN A.T. Laurian", priceIndex: 0.85 },
  { slug: "satu-mare",       name: "Satu Mare",       county: "Satu Mare",  population: "100.000",     matchLocation: ["satu mare"], landmark: "CN Mihai Eminescu", priceIndex: 0.90 },
  { slug: "ramnicu-valcea",  name: "Râmnicu Vâlcea",  county: "Vâlcea",     population: "98.000",      matchLocation: ["râmnicu vâlcea", "ramnicu valcea", "rm valcea", "rm. valcea"], landmark: "CN Alexandru Lahovari", priceIndex: 0.90 },
  { slug: "suceava",         name: "Suceava",         county: "Suceava",    population: "92.000",      matchLocation: ["suceava"], landmark: "CN Ștefan cel Mare & USV", priceIndex: 0.90 },
  { slug: "piatra-neamt",    name: "Piatra Neamț",    county: "Neamț",      population: "85.000",      matchLocation: ["piatra neamț", "piatra neamt"], landmark: "CN Petru Rareș", priceIndex: 0.85 },
  { slug: "drobeta-turnu-severin", name: "Drobeta-Turnu Severin", county: "Mehedinți", population: "85.000", matchLocation: ["drobeta", "turnu severin"], landmark: "CN Traian", priceIndex: 0.85 },
  { slug: "targoviste",      name: "Târgoviște",      county: "Dâmbovița",  population: "80.000",      matchLocation: ["târgoviște", "targoviste"], landmark: "CN Ienăchiță Văcărescu", priceIndex: 0.85 },
  { slug: "focsani",         name: "Focșani",         county: "Vrancea",    population: "78.000",      matchLocation: ["focșani", "focsani"], landmark: "CN Unirea", priceIndex: 0.85 },
  { slug: "bistrita",        name: "Bistrița",        county: "Bistrița-Năsăud", population: "75.000", matchLocation: ["bistrița", "bistrita"], landmark: "CN Liviu Rebreanu", priceIndex: 0.85 },
  { slug: "tulcea",          name: "Tulcea",          county: "Tulcea",     population: "73.000",      matchLocation: ["tulcea"], landmark: "CN Spiru Haret", priceIndex: 0.85 },
  { slug: "resita",          name: "Reșița",          county: "Caraș-Severin", population: "70.000",   matchLocation: ["reșița", "resita"], landmark: "CN Diaconovici-Tietz", priceIndex: 0.85 },
  { slug: "slatina",         name: "Slatina",         county: "Olt",        population: "70.000",      matchLocation: ["slatina"], landmark: "CN Radu Greceanu", priceIndex: 0.85 },
  { slug: "alba-iulia",      name: "Alba Iulia",      county: "Alba",       population: "63.000",      matchLocation: ["alba iulia"], landmark: "CN Horea, Cloșca și Crișan", priceIndex: 0.90 },
  { slug: "deva",            name: "Deva",            county: "Hunedoara",  population: "61.000",      matchLocation: ["deva"], landmark: "CN Decebal", priceIndex: 0.85 },
  { slug: "giurgiu",         name: "Giurgiu",         county: "Giurgiu",    population: "54.000",      matchLocation: ["giurgiu"], landmark: "CN Ion Maiorescu", priceIndex: 0.90 },
  { slug: "zalau",           name: "Zalău",           county: "Sălaj",      population: "56.000",      matchLocation: ["zalău", "zalau"], landmark: "CN Silvania", priceIndex: 0.85 },
  { slug: "vaslui",          name: "Vaslui",          county: "Vaslui",     population: "55.000",      matchLocation: ["vaslui"], landmark: "CN Mihail Kogălniceanu", priceIndex: 0.80 },
  { slug: "hunedoara",       name: "Hunedoara",       county: "Hunedoara",  population: "54.000",      matchLocation: ["hunedoara"], landmark: "CN Iancu de Hunedoara", priceIndex: 0.82 },
  { slug: "calarasi",        name: "Călărași",        county: "Călărași",   population: "52.000",      matchLocation: ["călărași", "calarasi"], landmark: "CN Barbu Știrbei", priceIndex: 0.82 },
  { slug: "medias",          name: "Mediaș",          county: "Sibiu",      population: "47.000",      matchLocation: ["mediaș", "medias"], landmark: "CN Stephan Ludwig Roth", priceIndex: 0.85 },
  { slug: "slobozia",        name: "Slobozia",        county: "Ialomița",   population: "45.000",      matchLocation: ["slobozia"], landmark: "CN Mihai Viteazul", priceIndex: 0.80 },
  { slug: "sfantu-gheorghe", name: "Sfântu Gheorghe", county: "Covasna",    population: "54.000",      matchLocation: ["sfântu gheorghe", "sfantu gheorghe", "sf. gheorghe"], landmark: "CN Mihai Viteazul", priceIndex: 0.82 },
  { slug: "turda",           name: "Turda",           county: "Cluj",       population: "43.000",      matchLocation: ["turda"], landmark: "CN Mihai Viteazul", priceIndex: 0.88 },
  // Reședințe de județ lipsă + orașe mari (populație: recensământul 2021)
  { slug: "targu-jiu",       name: "Târgu Jiu",       county: "Gorj",       population: "73.500",      matchLocation: ["târgu jiu", "targu jiu", "tg jiu", "tg. jiu"], landmark: "CN Tudor Vladimirescu & Univ. Constantin Brâncuși", priceIndex: 0.88 },
  { slug: "alexandria",      name: "Alexandria",      county: "Teleorman",  population: "40.400",      matchLocation: ["alexandria"], landmark: "CN Alexandru Ioan Cuza", priceIndex: 0.82 },
  { slug: "miercurea-ciuc",  name: "Miercurea Ciuc",  county: "Harghita",   population: "34.500",      matchLocation: ["miercurea ciuc", "miercurea-ciuc"], landmark: "Liceul Teoretic Octavian Goga", priceIndex: 0.85 },
  { slug: "popesti-leordeni", name: "Popești-Leordeni", county: "Ilfov",   population: "53.400",      matchLocation: ["popești-leordeni", "popesti-leordeni", "popesti leordeni"], landmark: "zona metropolitană București", priceIndex: 1.10 },
  { slug: "voluntari",       name: "Voluntari",       county: "Ilfov",      population: "47.400",      matchLocation: ["voluntari"], landmark: "zona metropolitană București", priceIndex: 1.15 },
  { slug: "bragadiru",       name: "Bragadiru",       county: "Ilfov",      population: "40.100",      matchLocation: ["bragadiru"], landmark: "zona metropolitană București", priceIndex: 1.10 },
  { slug: "floresti",        name: "Florești",        county: "Cluj",       population: "peste 50.000", matchLocation: ["florești", "floresti"], landmark: "zona metropolitană Cluj-Napoca", priceIndex: 1.10 },
  { slug: "barlad",          name: "Bârlad",          county: "Vaslui",     population: "52.500",      matchLocation: ["bârlad", "barlad"], landmark: "CN Gheorghe Roșca Codreanu", priceIndex: 0.80 },
  { slug: "roman",           name: "Roman",           county: "Neamț",      population: "48.600",      matchLocation: ["roman,", "mun. roman", "municipiul roman"], landmark: "CN Roman-Vodă", priceIndex: 0.82 },
  { slug: "lugoj",           name: "Lugoj",           county: "Timiș",      population: "35.500",      matchLocation: ["lugoj"], landmark: "CN Coriolan Brediceanu", priceIndex: 0.85 },
  { slug: "medgidia",        name: "Medgidia",        county: "Constanța",  population: "34.600",      matchLocation: ["medgidia"], landmark: "CN Kemal Atatürk", priceIndex: 0.82 },
  { slug: "navodari",        name: "Năvodari",        county: "Constanța",  population: "34.400",      matchLocation: ["năvodari", "navodari"], landmark: "zona metropolitană Constanța", priceIndex: 0.90 },
  { slug: "onesti",          name: "Onești",          county: "Bacău",      population: "34.000",      matchLocation: ["onești", "onesti"], landmark: "CN Dimitrie Cantemir", priceIndex: 0.82 },
  { slug: "sighetu-marmatiei", name: "Sighetu Marmației", county: "Maramureș", population: "32.800", matchLocation: ["sighetu marmației", "sighetu marmatiei", "sighet"], landmark: "CN Dragoș Vodă", priceIndex: 0.82 },
  { slug: "tecuci",          name: "Tecuci",          county: "Galați",     population: "32.800",      matchLocation: ["tecuci"], landmark: "CN Calistrat Hogaș", priceIndex: 0.80 },
  { slug: "mangalia",        name: "Mangalia",        county: "Constanța",  population: "32.000",      matchLocation: ["mangalia"], landmark: "Liceul Teoretic Callatis", priceIndex: 0.88 },
  { slug: "dej",             name: "Dej",             county: "Cluj",       population: "31.500",      matchLocation: ["dej"], landmark: "CN Andrei Mureșanu", priceIndex: 0.85 },
  { slug: "odorheiu-secuiesc", name: "Odorheiu Secuiesc", county: "Harghita", population: "31.300",  matchLocation: ["odorheiu secuiesc", "odorhei"], landmark: "CN Tamási Áron", priceIndex: 0.85 },
  { slug: "petrosani",       name: "Petroșani",       county: "Hunedoara",  population: "31.000",      matchLocation: ["petroșani", "petrosani"], landmark: "CN Mihai Eminescu & Univ. din Petroșani", priceIndex: 0.80 },
  { slug: "pascani",         name: "Pașcani",         county: "Iași",       population: "30.800",      matchLocation: ["pașcani", "pascani"], landmark: "CN Mihail Sadoveanu", priceIndex: 0.80 },
  { slug: "reghin",          name: "Reghin",          county: "Mureș",      population: "29.700",      matchLocation: ["reghin"], landmark: "CN Petru Maior", priceIndex: 0.82 },
  { slug: "campina",         name: "Câmpina",         county: "Prahova",    population: "29.000",      matchLocation: ["câmpina", "campina"], landmark: "CN Nicolae Grigorescu", priceIndex: 0.85 },
  { slug: "campulung",       name: "Câmpulung",       county: "Argeș",      population: "27.600",      matchLocation: ["câmpulung", "campulung"], landmark: "CN Dinicu Golescu", priceIndex: 0.82 },
  { slug: "caracal",         name: "Caracal",         county: "Olt",        population: "27.400",      matchLocation: ["caracal"], landmark: "CN Ioniță Asan", priceIndex: 0.80 },
  { slug: "fagaras",         name: "Făgăraș",         county: "Brașov",     population: "26.300",      matchLocation: ["făgăraș", "fagaras"], landmark: "CN Radu Negru", priceIndex: 0.85 },
  { slug: "radauti",         name: "Rădăuți",         county: "Suceava",    population: "24.300",      matchLocation: ["rădăuți", "radauti"], landmark: "CN Eudoxiu Hurmuzachi", priceIndex: 0.80 },
  { slug: "sighisoara",      name: "Sighișoara",      county: "Mureș",      population: "23.900",      matchLocation: ["sighișoara", "sighisoara"], landmark: "CN Mircea Eliade", priceIndex: 0.85 },
  { slug: "falticeni",       name: "Fălticeni",       county: "Suceava",    population: "23.900",      matchLocation: ["fălticeni", "falticeni"], landmark: "CN Nicu Gane", priceIndex: 0.80 },
  { slug: "campia-turzii",   name: "Câmpia Turzii",   county: "Cluj",       population: "20.600",      matchLocation: ["câmpia turzii", "campia turzii"], landmark: "Liceul Teoretic Pavel Dan", priceIndex: 0.85 },
  { slug: "gherla",          name: "Gherla",          county: "Cluj",       population: "19.900",      matchLocation: ["gherla"], landmark: "Liceul Teoretic Petru Maior", priceIndex: 0.85 },
];

export const CITY_SLUGS = CITIES.map((c) => c.slug);
export const getCityBySlug = (slug: string) => CITIES.find((c) => c.slug === slug);

/** Alte orașe din același județ (pentru legături interne locale). */
export const citiesInCounty = (city: CityInfo) => CITIES.filter((c) => c.county === city.county && c.slug !== city.slug);

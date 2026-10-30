// Landing pages /meditatii-<oras>: conținut static, scris manual, unic pe oraș.
// Fără profesori, recenzii sau statistici inventate — doar repere publice (universități,
// cartiere, licee cunoscute) și explicația platformei. Datele reale apar pe /meditatii-in/<slug>.
export interface OrasHub {
  /** Slug-ul paginii: /meditatii-<path> (fără diacritice). */
  path: string;
  /** Slug-ul din src/data/cities.ts, folosit pentru /meditatii-in/<slug> și filtrul /meditatii. */
  citySlug: string;
  /** Numele fără diacritice pentru title (cuvânt-cheie). */
  plain: string;
  name: string;
  zone: string[];
  universitati: string[];
  licee: string[];
  context: string;
}

export const ORASE_HUB: OrasHub[] = [
  {
    path: "bucuresti",
    citySlug: "bucuresti",
    plain: "Bucuresti",
    name: "București",
    zone: ["Titan", "Drumul Taberei", "Militari", "Berceni", "Floreasca", "Dristor", "Pipera"],
    universitati: [
      "Universitatea din București",
      "Universitatea Politehnica București",
      "ASE București",
      "UMF „Carol Davila”",
    ],
    licee: [
      "Colegiul Național „Sfântul Sava”",
      "Colegiul Național „Mihai Viteazul”",
      "Liceul Teoretic Internațional de Informatică",
      "Colegiul Național „Gheorghe Lazăr”",
    ],
    context:
      "În București distanțele mari fac ca multe meditații să se țină online sau într-un cartier apropiat de școală. Cererile cele mai frecvente vin pentru Evaluarea Națională, BAC și admiterea la Politehnică, ASE, Drept și Medicină.",
  },
  {
    path: "iasi",
    citySlug: "iasi",
    plain: "Iasi",
    name: "Iași",
    zone: ["Copou", "Tătărași", "Nicolina", "Păcurari", "Alexandru cel Bun", "Podu Roș", "Galata"],
    universitati: [
      "Universitatea „Alexandru Ioan Cuza”",
      "Universitatea Tehnică „Gheorghe Asachi” (TUIASI)",
      "UMF „Grigore T. Popa”",
    ],
    licee: [
      "Colegiul Național „Costache Negruzzi”",
      "Colegiul Național Iași",
      "Colegiul Național „Emil Racoviță”",
      "Liceul Teoretic „Miron Costin”",
    ],
    context:
      "Iașiul e un oraș universitar mare, cu cerere constantă pentru admiterea la Medicină (UMF) și la Calculatoare (TUIASI), pe lângă pregătirea pentru BAC și Evaluarea Națională.",
  },
  {
    path: "timisoara",
    citySlug: "timisoara",
    plain: "Timisoara",
    name: "Timișoara",
    zone: [
      "Complexul Studențesc",
      "Fabric",
      "Iosefin",
      "Circumvalațiunii",
      "Girocului",
      "Calea Aradului",
      "Dumbrăvița",
    ],
    universitati: [
      "Universitatea de Vest",
      "Universitatea Politehnica Timișoara",
      "UMF „Victor Babeș”",
    ],
    licee: [
      "Colegiul Național Bănățean",
      "Colegiul Național „Constantin Diaconovici Loga”",
      "Liceul Teoretic „Grigore Moisil”",
      "Colegiul Național „Ana Aslan”",
    ],
    context:
      "În Timișoara, industria IT face ca informatica și matematica să fie foarte căutate, iar admiterea la Politehnică și la UMF „Victor Babeș” aduce multe cereri în clasele a XI-a și a XII-a.",
  },
  {
    path: "constanta",
    citySlug: "constanta",
    plain: "Constanta",
    name: "Constanța",
    zone: ["Tomis Nord", "Tomis III", "Faleză Nord", "Inel II", "Km 4-5", "Centru", "Mamaia"],
    universitati: [
      "Universitatea „Ovidius”",
      "Universitatea Maritimă din Constanța",
      "Academia Navală „Mircea cel Bătrân”",
    ],
    licee: [
      "Colegiul Național „Mircea cel Bătrân”",
      "Liceul Teoretic „Ovidius”",
      "Colegiul Național „Mihai Eminescu”",
    ],
    context:
      "În Constanța, pe lângă BAC și Evaluarea Națională, apar cereri pentru engleză (inclusiv pentru cariere maritime) și pentru admiterea la Medicina de la „Ovidius”.",
  },
  {
    path: "brasov",
    citySlug: "brasov",
    plain: "Brasov",
    name: "Brașov",
    zone: ["Răcădău", "Tractorul", "Astra", "Noua", "Centrul Civic", "Bartolomeu", "Florilor"],
    universitati: ["Universitatea Transilvania din Brașov"],
    licee: [
      "Colegiul Național „Andrei Șaguna”",
      "Colegiul Național „Unirea”",
      "Colegiul Național „Dr. Ioan Meșotă”",
      "Liceul Teoretic „Andrei Mureșanu”",
    ],
    context:
      "În Brașov, cererile sunt echilibrate între gimnaziu (Evaluarea Națională) și liceu (BAC, admitere la Universitatea Transilvania), cu interes mare pentru matematică și limbi străine.",
  },
  {
    path: "craiova",
    citySlug: "craiova",
    plain: "Craiova",
    name: "Craiova",
    zone: ["Brazda lui Novac", "Craiovița Nouă", "Rovine", "Valea Roșie", "Lăpuș", "Centru"],
    universitati: ["Universitatea din Craiova", "UMF Craiova"],
    licee: [
      "Colegiul Național „Carol I”",
      "Colegiul Național „Frații Buzești”",
      "Colegiul Național „Elena Cuza”",
      "Colegiul Național „Nicolae Titulescu”",
    ],
    context:
      "În Craiova, cererile vin mai ales pentru Evaluarea Națională, BAC la matematică și română, și pentru admiterea la UMF Craiova.",
  },
  {
    path: "galati",
    citySlug: "galati",
    plain: "Galati",
    name: "Galați",
    zone: ["Țiglina", "Mazepa", "Micro 19", "Micro 21", "Siderurgiștilor", "Centru"],
    universitati: ["Universitatea „Dunărea de Jos”"],
    licee: [
      "Colegiul Național „Vasile Alecsandri”",
      "Colegiul Național „Costache Negri”",
      "Colegiul Național „Mihail Kogălniceanu”",
    ],
    context:
      "În Galați, elevii caută frecvent meditații pentru Evaluarea Națională și BAC, iar mulți aleg ședințe online când programul școlar e încărcat.",
  },
  {
    path: "oradea",
    citySlug: "oradea",
    plain: "Oradea",
    name: "Oradea",
    zone: ["Rogerius", "Nufărul", "Ioșia", "Velența", "Decebal", "Centru"],
    universitati: ["Universitatea din Oradea"],
    licee: [
      "Colegiul Național „Emanuil Gojdu”",
      "Colegiul Național „Mihai Eminescu”",
      "Liceul Teoretic „Onisifor Ghibu”",
    ],
    context:
      "În Oradea, pe lângă materiile de examen, sunt cerute limbile străine, iar admiterea la Medicina și Ingineria de la Universitatea din Oradea aduce cereri în clasa a XII-a.",
  },
  {
    path: "sibiu",
    citySlug: "sibiu",
    plain: "Sibiu",
    name: "Sibiu",
    zone: ["Vasile Aaron", "Hipodrom", "Ștrand", "Terezian", "Turnișor", "Centru"],
    universitati: ["Universitatea „Lucian Blaga” (ULBS)"],
    licee: [
      "Colegiul Național „Gheorghe Lazăr”",
      "Colegiul Național „Samuel von Brukenthal”",
      "Colegiul Național „Octavian Goga”",
    ],
    context:
      "În Sibiu, cererile sunt pentru Evaluarea Națională, BAC și admiterea la ULBS, iar germana apare mai des decât în alte orașe datorită liceelor cu predare în limba germană.",
  },
  {
    path: "ploiesti",
    citySlug: "ploiesti",
    plain: "Ploiesti",
    name: "Ploiești",
    zone: ["Nord", "Malu Roșu", "Republicii", "Mihai Bravu", "Vest", "Centru"],
    universitati: ["Universitatea Petrol-Gaze din Ploiești"],
    licee: [
      "Colegiul Național „I.L. Caragiale”",
      "Colegiul Național „Mihai Viteazul”",
      "Colegiul Național „Alexandru Ioan Cuza”",
    ],
    context:
      "Fiind aproape de București, mulți elevi din Ploiești se pregătesc pentru admiterea la facultăți din Capitală; meditațiile online sunt o opțiune practică.",
  },
  {
    path: "arad",
    citySlug: "arad",
    plain: "Arad",
    name: "Arad",
    zone: ["Micălaca", "Aurel Vlaicu", "Gai", "Grădiște", "Podgoria", "Centru"],
    universitati: ["Universitatea „Aurel Vlaicu”", "Universitatea de Vest „Vasile Goldiș”"],
    licee: [
      "Colegiul Național „Moise Nicoară”",
      "Colegiul Național „Elena Ghiba Birta”",
      "Colegiul Național „Vasile Goldiș”",
    ],
    context:
      "În Arad, cererile vin pentru Evaluarea Națională și BAC, iar mulți elevi țintesc facultățile din Timișoara, așa că pregătirea pentru admitere e frecventă.",
  },
  {
    path: "pitesti",
    citySlug: "pitesti",
    plain: "Pitesti",
    name: "Pitești",
    zone: ["Trivale", "Găvana", "Prundu", "Războieni", "Craiovei", "Centru"],
    universitati: [
      "Universitatea Națională de Știință și Tehnologie Politehnica București — Centrul Universitar Pitești",
    ],
    licee: [
      "Colegiul Național „Zinca Golescu”",
      "Colegiul Național „I.C. Brătianu”",
      "Colegiul Național „Alexandru Odobescu”",
    ],
    context:
      "În Pitești, matematica și fizica sunt des cerute pentru profilurile tehnice, iar BAC-ul și Evaluarea Națională sunt principalele obiective.",
  },
  {
    path: "bacau",
    citySlug: "bacau",
    plain: "Bacau",
    name: "Bacău",
    zone: ["Cornișa", "Republicii", "Mioriței", "Bistrița Lac", "Centru"],
    universitati: ["Universitatea „Vasile Alecsandri” din Bacău"],
    licee: [
      "Colegiul Național „Ferdinand I”",
      "Colegiul Național „Gheorghe Vrânceanu”",
      "Colegiul Național „Vasile Alecsandri”",
    ],
    context:
      "În Bacău, elevii se pregătesc pentru Evaluarea Națională, BAC și admiterea la facultățile din Iași, motiv pentru care pregătirea online e des folosită.",
  },
  {
    path: "targu-mures",
    citySlug: "targu-mures",
    plain: "Targu Mures",
    name: "Târgu Mureș",
    zone: ["Tudor Vladimirescu", "Dâmbul Pietros", "Unirii", "Cornișa", "Centru"],
    universitati: ["UMFST „George Emil Palade”", "Universitatea de Arte din Târgu Mureș"],
    licee: [
      "Colegiul Național „Alexandru Papiu Ilarian”",
      "Colegiul Național „Unirea”",
      "Liceul Teoretic „Bolyai Farkas”",
    ],
    context:
      "Târgu Mureș are o facultate de medicină cunoscută, așa că biologia și chimia pentru admitere sunt foarte căutate, alături de pregătirea pentru BAC.",
  },
  {
    path: "baia-mare",
    citySlug: "baia-mare",
    plain: "Baia Mare",
    name: "Baia Mare",
    zone: ["Vasile Alecsandri", "Republicii", "Săsar", "Valea Roșie", "Centru"],
    universitati: ["Centrul Universitar Nord Baia Mare (UTCN)"],
    licee: [
      "Colegiul Național „Gheorghe Șincai”",
      "Colegiul Național „Vasile Lucaciu”",
      "Colegiul Național „Mihai Eminescu”",
    ],
    context:
      "În Baia Mare, mulți elevi țintesc facultățile din Cluj-Napoca, astfel că pregătirea pentru admitere și BAC e frecventă, adesea online.",
  },
  {
    path: "suceava",
    citySlug: "suceava",
    plain: "Suceava",
    name: "Suceava",
    zone: ["Burdujeni", "George Enescu", "Obcini", "Zamca", "Centru"],
    universitati: ["Universitatea „Ștefan cel Mare” (USV)"],
    licee: [
      "Colegiul Național „Ștefan cel Mare”",
      "Colegiul Național „Petru Rareș”",
      "Colegiul Național „Mihai Eminescu”",
    ],
    context:
      "În Suceava, pe lângă Evaluarea Națională și BAC, elevii se pregătesc pentru admiterea la USV sau la facultățile din Iași.",
  },
];

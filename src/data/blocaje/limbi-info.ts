import type { BlocajNode } from "./types";

// Engleză (gimnaziu → liceu) și informatică (liceu, limbaj C++/Python la nivel de idee).
export const ENGLEZA: BlocajNode[] = [
  {
    slug: "present-simple-vs-continuous",
    materie: "engleza",
    clase: [5, 6, 7],
    titlu: "Present Simple vs. Present Continuous",
    blocaj: "Nu știu când să spun „I work” și când „I am working”, și uit -s la persoana a III-a.",
    simptome: [
      "Scrii „he work” sau „she don't”.",
      "Folosești continuous pentru obiceiuri („I am going to school every day”).",
      "Nu recunoști cuvintele-semnal (always, now, at the moment).",
    ],
    lipsa: [],
    explicatie: [
      "Present Simple exprimă obiceiuri, rutine, adevăruri generale și programe fixe: I work, he works (−s/−es la he/she/it). Negativ și interogativ cu do/does: She doesn't work. Does she work? Cuvinte-semnal: always, usually, often, every day, never.",
      "Present Continuous (am/is/are + verb-ing) exprimă o acțiune în desfășurare acum sau în perioada actuală, și planuri ferme de viitor apropiat: I am working now; We are meeting tomorrow. Cuvinte-semnal: now, at the moment, today, Look!, Listen!",
      "Verbele de stare (know, like, want, believe, need, understand) nu se folosesc de obicei la continuous: I want (nu „I am wanting”).",
    ],
    exemplu: {
      enunt:
        "Completează: „My sister usually (go) to school by bus, but today she (walk) because the bus (be) late.”",
      pasi: [
        "„usually” → obicei → Present Simple, persoana a III-a: goes.",
        "„today” + acțiune în desfășurare → Present Continuous: is walking.",
        "Stare prezentă → Present Simple: is late.",
      ],
      raspuns: "goes; is walking; is",
    },
    verificare: {
      intrebare: "Alege forma corectă: „Listen! Someone ___ at the door.”",
      optiuni: ["knocks", "is knocking", "knock", "are knocking"],
      corect: 1,
      explicatie:
        "„Listen!” semnalează o acțiune care se petrece chiar acum → Present Continuous, singular: is knocking.",
    },
    urmeaza: ["past-simple-vs-present-perfect"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "past-simple-vs-present-perfect",
    materie: "engleza",
    clase: [7, 8, 9],
    titlu: "Past Simple vs. Present Perfect",
    blocaj: "Nu înțeleg diferența dintre „I saw” și „I have seen” și nu rețin verbele neregulate.",
    simptome: [
      "Spui „I have seen him yesterday”.",
      "Folosești forma a II-a în loc de a III-a după have („I have went”).",
      "Nu știi ce fac since/for/already/yet/just.",
    ],
    lipsa: ["present-simple-vs-continuous"],
    explicatie: [
      "Past Simple (verb-ed sau forma a II-a) descrie o acțiune terminată într-un moment precizat sau clar din trecut: I saw him yesterday. Cuvinte-semnal: yesterday, last week, in 2020, ago, when I was a child.",
      "Present Perfect (have/has + forma a III-a) leagă trecutul de prezent: experiență fără moment precizat (I have seen that film), rezultat vizibil acum (I have lost my keys), acțiune începută în trecut și neterminată (I have lived here for ten years). Cuvinte-semnal: ever, never, already, yet, just, since, for, so far.",
      "Regula practică: dacă în propoziție este sau se subînțelege un moment precis din trecut, Past Simple; dacă nu contează când, ci legătura cu prezentul, Present Perfect. Lista verbelor neregulate se învață în grupuri cu tipar (sing–sang–sung, ring–rang–rung).",
    ],
    exemplu: {
      enunt:
        "Completează: „I (never/be) to London, but my brother (go) there last summer. He (already/visit) it three times.”",
      pasi: [
        "Experiență, fără moment → Present Perfect: have never been.",
        "„last summer” → moment precis → Past Simple: went.",
        "„already” + până acum → Present Perfect: has already visited.",
      ],
      raspuns: "have never been; went; has already visited",
    },
    verificare: {
      intrebare: "Alege varianta corectă: „She ___ in this company since 2019.”",
      optiuni: ["works", "worked", "has worked", "is working"],
      corect: 2,
      explicatie:
        "„since 2019” arată o acțiune începută în trecut și continuată în prezent → Present Perfect.",
    },
    urmeaza: ["conditionals", "passive-voice", "reported-speech"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "conditionals",
    materie: "engleza",
    clase: [8, 9, 10],
    titlu: "Propozițiile condiționale (if-clauses)",
    blocaj:
      "Amestec timpurile la condiționale și nu știu când folosesc would, will sau would have.",
    simptome: [
      "Pui will după if („If it will rain…”).",
      "Nu faci diferența între „If I had money” (ipotetic acum) și „If I had had money” (trecut).",
      "Nu știi că after if, „were” se folosește pentru toate persoanele în registrul formal.",
    ],
    lipsa: ["past-simple-vs-present-perfect"],
    explicatie: [
      "Tipul 0 (adevăr general): If + Present Simple, Present Simple — If you heat ice, it melts. Tipul 1 (posibil, viitor): If + Present Simple, will + verb — If it rains, we will stay home.",
      "Tipul 2 (ipotetic sau improbabil în prezent/viitor): If + Past Simple, would + verb — If I had a car, I would drive to work. Tipul 3 (imposibil, trecut): If + Past Perfect, would have + forma a III-a — If I had studied, I would have passed.",
      "Niciodată will/would imediat după if. Ordinea propozițiilor se poate inversa fără virgulă: We will stay home if it rains.",
    ],
    exemplu: {
      enunt: "Completează: „If I (know) the answer yesterday, I (tell) you.”",
      pasi: [
        "„yesterday” → situație din trecut care nu s-a întâmplat → condițional tip 3.",
        "If + Past Perfect: had known.",
        "would have + forma a III-a: would have told.",
      ],
      raspuns: "had known; would have told",
    },
    verificare: {
      intrebare: "Alege varianta corectă: „If she ___ harder, she would pass the exam.”",
      optiuni: ["studies", "studied", "will study", "had studied"],
      corect: 1,
      explicatie: "„would pass” în propoziția principală → tip 2 → Past Simple după if: studied.",
    },
    urmeaza: [],
    nivelCerere: "Liceu",
  },
  {
    slug: "passive-voice",
    materie: "engleza",
    clase: [8, 9, 10],
    titlu: "Diateza pasivă (Passive Voice)",
    blocaj:
      "Nu știu să transform o propoziție din activ în pasiv și la ce timp pun verbul „to be”.",
    simptome: [
      "Uiți forma a III-a a verbului („The letter was write”).",
      "Pui „to be” la alt timp decât verbul din propoziția activă.",
      "Nu știi când se omite „by + agent”.",
    ],
    lipsa: ["past-simple-vs-present-perfect"],
    explicatie: [
      "Pasivul se formează cu „to be” la timpul verbului din activ + forma a III-a a verbului: Present Simple: is/are + V3; Past Simple: was/were + V3; Present Perfect: has/have been + V3; will: will be + V3; modale: can be + V3.",
      "Transformare: complementul direct din activ devine subiect în pasiv; subiectul din activ devine agent (by …) sau se omite dacă este necunoscut, evident sau neimportant (people, someone, they).",
      "Folosești pasivul când contează acțiunea sau obiectul ei, nu cine a făcut-o: The bridge was built in 1900. Verbele intranzitive (arrive, sleep, happen) nu au pasiv.",
    ],
    exemplu: {
      enunt: "Transformă la pasiv: „Someone has stolen my bike.”",
      pasi: [
        "Complementul direct „my bike” devine subiect.",
        "Timpul este Present Perfect → has been + V3.",
        "Agentul „someone” este necunoscut → se omite: My bike has been stolen.",
      ],
      raspuns: "My bike has been stolen.",
    },
    verificare: {
      intrebare:
        "Forma pasivă corectă a propoziției „They will announce the results tomorrow” este:",
      optiuni: [
        "The results will announced tomorrow.",
        "The results will be announced tomorrow.",
        "The results are announced tomorrow.",
        "The results will be announce tomorrow.",
      ],
      corect: 1,
      explicatie: "will + be + forma a III-a (announced).",
    },
    urmeaza: ["reported-speech"],
    nivelCerere: "Liceu",
  },
  {
    slug: "reported-speech",
    materie: "engleza",
    clase: [9, 10, 11],
    titlu: "Vorbirea indirectă (Reported Speech)",
    blocaj:
      "Nu știu cum se schimbă timpurile, pronumele și cuvintele ca „today” sau „here” când relatez ce a spus cineva.",
    simptome: [
      "Păstrezi timpul din citat („He said he is tired”).",
      "Nu schimbi „I” în „he/she”.",
      "La întrebări păstrezi ordinea interogativă („She asked where was he”).",
    ],
    lipsa: ["past-simple-vs-present-perfect"],
    explicatie: [
      "Când verbul de relatare este la trecut (said, told, asked), timpurile „dau un pas înapoi”: Present Simple → Past Simple; Present Continuous → Past Continuous; Past Simple/Present Perfect → Past Perfect; will → would; can → could; must → had to.",
      "Se schimbă și pronumele (I → he/she, my → his/her) și indicatorii de timp și loc: now → then, today → that day, yesterday → the day before, tomorrow → the next day, here → there, this → that.",
      "Întrebările devin propoziții afirmative (subiect înaintea verbului), introduse de if/whether pentru întrebările da/nu sau de cuvântul interogativ: „Where do you live?” → She asked me where I lived. Ordinele folosesc to + verb: „Sit down!” → He told me to sit down.",
    ],
    exemplu: {
      enunt: "Transformă: „I will call you tomorrow,” Ana said to me.",
      pasi: [
        "Verbul de relatare este la trecut → will → would.",
        "I → she; you → me; tomorrow → the next day.",
        "Ana told me (that) she would call me the next day.",
      ],
      raspuns: "Ana told me she would call me the next day.",
    },
    verificare: {
      intrebare: "Alege transformarea corectă pentru „Are you coming?” he asked.",
      optiuni: [
        "He asked if I was coming.",
        "He asked was I coming.",
        "He asked if I am coming.",
        "He asked that I was coming.",
      ],
      corect: 0,
      explicatie: "Întrebare da/nu → if; ordinea afirmativă; Present Continuous → Past Continuous.",
    },
    urmeaza: [],
    nivelCerere: "Liceu",
  },
];

export const INFORMATICA: BlocajNode[] = [
  {
    slug: "variabile-tipuri-de-date",
    materie: "informatica",
    clase: [9],
    titlu: "Variabile, tipuri de date și operatori",
    blocaj: "Nu înțeleg de ce 7 / 2 dă 3 și nu 3,5, și când folosesc int, float sau char.",
    simptome: [
      "Nu știi ce face operatorul % (rest).",
      "Compari cu = în loc de == în C++.",
      "Confunzi atribuirea (x = x + 1) cu o ecuație.",
    ],
    lipsa: ["divizibilitate"],
    explicatie: [
      "O variabilă este o cutie cu nume și tip, care ține o valoare ce se poate schimba. int ține numere întregi, float/double numere reale, char un caracter, bool adevărat/fals. x = x + 1 nu este o ecuație: înseamnă „pune în x vechea valoare plus 1”.",
      "Împărțirea a două numere întregi (în C++ și la // în Python) dă câtul întreg: 7 / 2 = 3. Restul se obține cu %: 7 % 2 = 1. Dacă vrei 3,5, cel puțin un operand trebuie să fie real: 7.0 / 2.",
      "== compară (întoarce adevărat/fals), = atribuie. Operatorii logici: && (și), || (sau), ! (nu) în C++; and, or, not în Python.",
    ],
    exemplu: {
      enunt:
        'Ce afișează secvența (C++)? int a = 17, b = 5; cout << a / b << " " << a % b << " " << (a / b) * b + a % b;',
      pasi: [
        "a / b = 17 / 5 = 3 (cât întreg).",
        "a % b = 17 % 5 = 2 (rest).",
        "(a / b) * b + a % b = 3 × 5 + 2 = 17 — relația cât–rest reface numărul.",
      ],
      raspuns: "3 2 17",
    },
    verificare: {
      intrebare: "Ce valoare are expresia 23 % 4 + 23 / 4 (variabile întregi)?",
      optiuni: ["8", "3", "8,75", "5"],
      corect: 0,
      explicatie: "23 % 4 = 3, 23 / 4 = 5 (întreg), 3 + 5 = 8.",
    },
    urmeaza: ["structuri-repetitive"],
    nivelCerere: "Liceu",
  },
  {
    slug: "structuri-repetitive",
    materie: "informatica",
    clase: [9],
    titlu: "Structuri repetitive: for, while, do-while",
    blocaj:
      "Nu știu când să folosesc for și când while, și buclele mele fie nu se opresc, fie rulează o dată în plus.",
    simptome: [
      "Uiți să modifici variabila de control în while (buclă infinită).",
      "Greșești cu 1 numărul de iterații (i <= n vs. i < n).",
      "Nu poți „urmări” pe hârtie ce se întâmplă pas cu pas.",
    ],
    lipsa: ["variabile-tipuri-de-date"],
    explicatie: [
      "for se folosește când știi dinainte câte repetări sunt (de la 1 la n). while când repetarea depinde de o condiție care se schimbă pe parcurs (cât timp numărul mai are cifre). do-while execută corpul cel puțin o dată, apoi verifică condiția.",
      "Trei întrebări pentru orice buclă: de unde pornește variabila de control? când se oprește? cum se modifică la fiecare pas? Dacă răspunsul la a treia lipsește, bucla este infinită.",
      "Cea mai bună metodă de depanare este tabelul de urmărire: scrii pe hârtie, pentru fiecare iterație, valorile variabilelor. Vezi imediat dacă ai o iterație în plus sau în minus.",
    ],
    exemplu: {
      enunt: "Ce afișează? s = 0; for (i = 1; i <= 4; i++) s = s + i * i; cout << s;",
      pasi: [
        "i = 1: s = 0 + 1 = 1.",
        "i = 2: s = 1 + 4 = 5.",
        "i = 3: s = 5 + 9 = 14.",
        "i = 4: s = 14 + 16 = 30. i devine 5, condiția 5 <= 4 este falsă, bucla se oprește.",
      ],
      raspuns: "30",
    },
    verificare: {
      intrebare: "De câte ori se execută corpul buclei: i = 10; while (i > 0) { i = i - 3; }",
      optiuni: ["3", "4", "10", "la infinit"],
      corect: 1,
      explicatie:
        "i ia valorile 10 → 7 → 4 → 1 → −2; corpul se execută pentru 10, 7, 4 și 1, adică de 4 ori.",
    },
    urmeaza: ["cifrele-unui-numar", "vectori-tablouri", "functii-recursivitate"],
    nivelCerere: "Liceu",
  },
  {
    slug: "cifrele-unui-numar",
    materie: "informatica",
    clase: [9],
    titlu: "Prelucrarea cifrelor unui număr",
    blocaj: "Nu știu cum să „scot” cifrele unui număr, să le număr sau să construiesc oglinditul.",
    simptome: [
      "Nu vezi legătura dintre n % 10 și ultima cifră.",
      "Pierzi prima cifră pentru că o cauți de la stânga.",
      "La oglindit nu știi cum se construiește numărul nou.",
    ],
    lipsa: ["structuri-repetitive", "divizibilitate"],
    explicatie: [
      "n % 10 este ultima cifră a lui n, iar n / 10 (împărțire întreagă) este numărul fără ultima cifră. Repetând „iau ultima cifră, tai ultima cifră” cât timp n > 0, parcurgi toate cifrele de la dreapta la stânga.",
      "Șablon: while (n > 0) { c = n % 10; /* prelucrezi c */ n = n / 10; }. Numărul de cifre: numeri iterațiile. Suma cifrelor: aduni c. Prima cifră: ultima valoare a lui c la ieșirea din buclă.",
      "Oglinditul se construiește din cifrele extrase: ogl = ogl * 10 + c. Pentru 123: ogl devine 3, apoi 32, apoi 321. Atenție la n = 0 (are o cifră) — tratează-l separat sau folosește do-while.",
    ],
    exemplu: {
      enunt: "Calculează pe hârtie oglinditul lui n = 405 cu algoritmul ogl = ogl * 10 + n % 10.",
      pasi: [
        "n = 405: c = 5, ogl = 0 × 10 + 5 = 5, n = 40.",
        "n = 40: c = 0, ogl = 5 × 10 + 0 = 50, n = 4.",
        "n = 4: c = 4, ogl = 50 × 10 + 4 = 504, n = 0 → stop.",
      ],
      raspuns: "504",
    },
    verificare: {
      intrebare:
        "Ce se afișează? n = 2024; s = 0; while (n > 0) { s += n % 10; n /= 10; } cout << s;",
      optiuni: ["2024", "8", "4", "6"],
      corect: 1,
      explicatie: "Suma cifrelor: 2 + 0 + 2 + 4 = 8.",
    },
    urmeaza: ["vectori-tablouri"],
    nivelCerere: "Liceu",
  },
  {
    slug: "vectori-tablouri",
    materie: "informatica",
    clase: [9, 10],
    titlu: "Vectori (tablouri unidimensionale)",
    blocaj:
      "Nu înțeleg indicii, nu știu să parcurg un vector și să găsesc maximul sau să număr elementele cu o proprietate.",
    simptome: [
      "Accesezi v[n] la un vector cu n elemente indexat de la 0.",
      "Inițializezi maximul cu 0 și greșești când toate elementele sunt negative.",
      "Nu știi să ștergi sau să inserezi un element.",
    ],
    lipsa: ["structuri-repetitive"],
    explicatie: [
      "Un vector este o listă de valori de același tip, așezate la indici consecutivi. În C++ indicii pornesc de la 0: pentru n elemente, indicii valizi sunt 0 … n − 1. Citirea și afișarea se fac cu un for peste indici.",
      "Șabloane de bază: maximul — inițializezi max = v[0], apoi pentru fiecare element, dacă v[i] > max, max = v[i]; numărarea — contor care crește când elementul are proprietatea; suma — acumulator.",
      "Ștergerea elementului de pe poziția p: muți elementele de la p + 1 până la n − 1 cu o poziție la stânga și scazi n. Inserarea pe poziția p: muți elementele de la n − 1 până la p cu o poziție la dreapta (pornind de la capăt!), pui valoarea, crești n.",
    ],
    exemplu: {
      enunt: "Pentru v = {3, −7, 12, 5}, găsește maximul și numără elementele pare.",
      pasi: [
        "max = v[0] = 3. i = 1: −7 > 3? nu. i = 2: 12 > 3? da, max = 12. i = 3: 5 > 12? nu.",
        "Pare: 3 nu, −7 nu, 12 da, 5 nu → contor = 1.",
      ],
      raspuns: "max = 12; 1 element par",
    },
    verificare: {
      intrebare:
        "Un vector v cu 5 elemente este declarat în C++ și indexat de la 0. Care acces este în afara vectorului?",
      optiuni: ["v[0]", "v[4]", "v[5]", "v[2]"],
      corect: 2,
      explicatie: "Indicii valizi sunt 0, 1, 2, 3, 4; v[5] este al șaselea element, inexistent.",
    },
    urmeaza: ["functii-recursivitate"],
    nivelCerere: "Liceu",
  },
  {
    slug: "functii-recursivitate",
    materie: "informatica",
    clase: [10],
    titlu: "Subprograme și recursivitate",
    blocaj: "Nu înțeleg cum o funcție se poate apela pe ea însăși și nu pot urmări ce returnează.",
    simptome: [
      "Uiți cazul de bază și funcția nu se oprește niciodată.",
      "Nu faci diferența între parametru transmis prin valoare și prin referință.",
      "Nu poți calcula pe hârtie f(4) pentru o funcție recursivă dată.",
    ],
    lipsa: ["structuri-repetitive", "vectori-tablouri"],
    explicatie: [
      "O funcție primește parametri, face un calcul și (eventual) returnează un rezultat. Transmiterea prin valoare copiază argumentul (modificările nu se văd în apelant); prin referință (int &x în C++) funcția lucrează direct pe variabila apelantului.",
      "O funcție recursivă se apelează pe sine cu un caz „mai mic” și are obligatoriu un caz de bază, în care răspunde direct, fără alt apel. Factorial: f(0) = 1 (caz de bază), f(n) = n × f(n − 1).",
      "Ca să urmărești un apel, scrie lanțul în jos până la cazul de bază, apoi întoarce-te în sus înlocuind valorile: f(3) = 3 × f(2) = 3 × 2 × f(1) = 3 × 2 × 1 × f(0) = 6.",
    ],
    exemplu: {
      enunt: "Fie f(n) = 0 dacă n = 0, altfel f(n) = n % 10 + f(n / 10). Calculează f(123).",
      pasi: [
        "f(123) = 3 + f(12).",
        "f(12) = 2 + f(1).",
        "f(1) = 1 + f(0) = 1 + 0 = 1.",
        "Înapoi: f(12) = 2 + 1 = 3; f(123) = 3 + 3 = 6 — suma cifrelor.",
      ],
      raspuns: "6",
    },
    verificare: {
      intrebare: "Fie g(n) = 1 dacă n ≤ 1, altfel g(n) = 2 × g(n − 1). Cât este g(4)?",
      optiuni: ["4", "8", "16", "2"],
      corect: 1,
      explicatie: "g(4) = 2 × g(3) = 2 × 2 × g(2) = 2 × 2 × 2 × g(1) = 8.",
    },
    urmeaza: [],
    nivelCerere: "Liceu",
  },
];

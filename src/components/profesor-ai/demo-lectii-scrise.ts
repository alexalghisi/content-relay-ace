/**
 * Written lessons for the /profesor-ai demo: the teacher presents the lesson,
 * the student only interrupts when something is unclear.
 * Editorial examples, not recordings.
 */
export type Bloc =
  | { tip: "prof"; text: string; tabla?: string }
  | { tip: "intrebare"; text: string };

export type LectieScrisa = { materie: string; nivel: string; titlu: string; blocuri: Bloc[] };

export const LECTII_SCRISE: LectieScrisa[] = [
  {
    materie: "Matematică M1",
    nivel: "BAC · Analiză",
    titlu: "Punctele de extrem ale unei funcții",
    blocuri: [
      {
        tip: "prof",
        text: "Azi învățăm cum găsim punctele de maxim și de minim ale unei funcții. Lucrăm pe exemplul f(x) = x³ − 3x.",
      },
      {
        tip: "prof",
        text: "Regula: punctele de extrem se caută acolo unde derivata se anulează și își schimbă semnul. Primul pas este derivata.",
        tabla: "f′(x) = 3x² − 3 = 3(x − 1)(x + 1)",
      },
      {
        tip: "prof",
        text: "Derivata se anulează în x = −1 și x = 1. Facem tabelul de semn: înainte de −1 derivata este pozitivă, între −1 și 1 negativă, după 1 din nou pozitivă.",
        tabla: "x: −∞  −1  1  +∞ │ f′: +  0  −  0  +",
      },
      { tip: "intrebare", text: "De unde știu că între −1 și 1 e negativă?" },
      {
        tip: "prof",
        text: "Iei orice valoare din interval, de exemplu x = 0: f′(0) = −3, deci negativă. Semnul se păstrează pe tot intervalul dintre două rădăcini.",
      },
      {
        tip: "prof",
        text: "Unde funcția trece din creștere în descreștere avem maxim, invers avem minim. Calculăm valorile și am terminat.",
        tabla: "Max în −1: f(−1) = 2 · Min în 1: f(1) = −2",
      },
    ],
  },
  {
    materie: "Chimie",
    nivel: "Clasa a 10-a",
    titlu: "Calcule stoechiometrice",
    blocuri: [
      {
        tip: "prof",
        text: "Un calcul stoechiometric pornește mereu de la ecuația reacției, egalată. Exemplu: câte grame de apă obținem din 4 g de hidrogen?",
        tabla: "2H₂ + O₂ → 2H₂O",
      },
      {
        tip: "prof",
        text: "Pasul doi: transformăm masa dată în moli, folosind masa molară. Pentru H₂, masa molară este 2 g/mol.",
        tabla: "n(H₂) = 4 g : 2 g/mol = 2 mol",
      },
      {
        tip: "prof",
        text: "Pasul trei: coeficienții din ecuație ne dau raportul de moli. 2 moli de H₂ dau 2 moli de H₂O.",
      },
      { tip: "intrebare", text: "De ce nu folosim direct gramele?" },
      {
        tip: "prof",
        text: "Pentru că reacția leagă particule, nu grame. Coeficienții spun câte molecule reacționează; molul este doar un număr fix de molecule.",
      },
      {
        tip: "prof",
        text: "Ultimul pas: din moli înapoi în grame, cu masa molară a apei, 18 g/mol.",
        tabla: "m(H₂O) = 2 mol · 18 g/mol = 36 g",
      },
    ],
  },
  {
    materie: "Informatică",
    nivel: "Clasa a 11-a",
    titlu: "Recursivitatea",
    blocuri: [
      {
        tip: "prof",
        text: "O funcție recursivă este o funcție care se apelează pe ea însăși, pe o problemă mai mică. Exemplul clasic este factorialul.",
        tabla: "n! = n · (n − 1)!",
      },
      {
        tip: "prof",
        text: "Orice recursivitate are două părți: cazul de bază, unde ne oprim, și pasul recursiv. Pentru factorial, cazul de bază este 0! = 1.",
        tabla: "int fact(int n) { if (n == 0) return 1; return n * fact(n - 1); }",
      },
      {
        tip: "prof",
        text: "Când apelăm fact(3), funcția așteaptă fact(2), care așteaptă fact(1), apoi fact(0). Apoi rezultatele se întorc în ordine inversă.",
        tabla: "fact(3) = 3 · 2 · 1 · 1 = 6",
      },
      { tip: "intrebare", text: "Ce se întâmplă dacă uit cazul de bază?" },
      {
        tip: "prof",
        text: "Funcția se apelează la nesfârșit, cu n negativ, până se umple stiva și programul se oprește cu eroare. De aceea scrii întâi condiția de oprire.",
      },
    ],
  },
  {
    materie: "Biologie",
    nivel: "BAC · Genetică",
    titlu: "Monohibridarea și pătratul lui Punnett",
    blocuri: [
      {
        tip: "prof",
        text: "La monohibridare urmărim o singură trăsătură. Exemplu: ochii căprui (A) domină ochii albaștri (a), iar ambii părinți sunt Aa.",
        tabla: "P: Aa × Aa",
      },
      {
        tip: "prof",
        text: "Fiecare părinte formează două tipuri de gameți, A și a, în proporții egale. Îi combinăm în pătratul lui Punnett.",
        tabla: "AA · Aa · aA · aa",
      },
      {
        tip: "prof",
        text: "Rezultă raportul genotipic 1 : 2 : 1. Fenotipic, doar aa are ochi albaștri.",
        tabla: "1 AA : 2 Aa : 1 aa → 75% căprui · 25% albaștri",
      },
      { tip: "intrebare", text: "Aa și aA nu sunt același lucru?" },
      {
        tip: "prof",
        text: "Ca genotip, da. Le scriem separat în pătrat pentru că apar pe două căi diferite (A de la mamă sau de la tată), de aceea Aa are probabilitatea dublă.",
      },
    ],
  },
  {
    materie: "Fizică",
    nivel: "BAC · Circuite",
    titlu: "Rezistoare legate în paralel",
    blocuri: [
      {
        tip: "prof",
        text: "În legarea în paralel, toate rezistoarele au aceeași tensiune la borne. Exemplu: 6 Ω și 3 Ω la 12 V.",
      },
      {
        tip: "prof",
        text: "Curentul prin fiecare ramură se află cu legea lui Ohm, apoi curenții se adună la nod.",
        tabla: "I₁ = 12/6 = 2 A · I₂ = 12/3 = 4 A · I = 6 A",
      },
      {
        tip: "prof",
        text: "Rezistența echivalentă iese din relația inverselor, sau direct U/I.",
        tabla: "1/R = 1/6 + 1/3 → R = 2 Ω",
      },
      { tip: "intrebare", text: "Cum poate fi 2 Ω mai mică decât ambele rezistențe?" },
      {
        tip: "prof",
        text: "Fiecare ramură nouă oferă curentului încă un drum, deci circuitul conduce mai ușor. În paralel, rezistența echivalentă este mereu sub cea mai mică rezistență.",
      },
    ],
  },
  {
    materie: "Istorie",
    nivel: "BAC · România modernă",
    titlu: "Unirea din 1859 ca proces",
    blocuri: [
      {
        tip: "prof",
        text: "Unirea Principatelor nu s-a încheiat în 1859; atunci a început. Pe 5 și 24 ianuarie 1859, Cuza este ales domn în Moldova și apoi în Țara Românească.",
        tabla: "1859: dubla alegere a lui Al. I. Cuza",
      },
      {
        tip: "prof",
        text: "Instituțiile au rămas însă separate până în 1862, când apar guvernul și adunarea unice, iar capitala devine București.",
        tabla: "1862: guvern unic, adunare unică",
      },
      {
        tip: "prof",
        text: "Reformele lui Cuza consolidează statul: secularizarea averilor mănăstirești (1863), reforma agrară și legea instrucțiunii (1864).",
      },
      { tip: "intrebare", text: "La BAC trebuie să scriu toate datele astea?" },
      {
        tip: "prof",
        text: "Nu doar datele. Se punctează argumentul: afirmația, faptul istoric care o susține și consecința. Datele sunt doar dovada.",
        tabla: "Argument = afirmație + fapt istoric + consecință",
      },
    ],
  },
  {
    materie: "Engleză",
    nivel: "Clasa a 8-a",
    titlu: "Present Perfect vs. Past Simple",
    blocuri: [
      {
        tip: "prof",
        text: "Past Simple descrie o acțiune încheiată, la un moment precizat în trecut.",
        tabla: "I visited London in 2023.",
      },
      {
        tip: "prof",
        text: "Present Perfect leagă trecutul de prezent: experiențe de viață sau rezultate vizibile acum, fără moment precizat.",
        tabla: "I have visited London. · She has lost her keys.",
      },
      {
        tip: "prof",
        text: "Cuvinte-semnal: yesterday, ago, last week cer Past Simple; ever, never, already, yet, just cer de obicei Present Perfect.",
      },
      { tip: "intrebare", text: "Pot spune „I have seen him yesterday”?" },
      {
        tip: "prof",
        text: "Nu. „Yesterday” fixează momentul în trecut, deci corect este „I saw him yesterday”. Present Perfect nu se folosește cu un timp trecut precizat.",
      },
    ],
  },
  {
    materie: "Limba română",
    nivel: "BAC · Eseu",
    titlu: "Structura eseului despre un personaj",
    blocuri: [
      {
        tip: "prof",
        text: "Eseul despre particularitățile unui personaj are patru repere obligatorii, iar fiecare trebuie susținut cu secvențe din text.",
      },
      {
        tip: "prof",
        text: "Primul: statutul social, psihologic și moral al personajului. Al doilea: o trăsătură ilustrată prin două episoade sau secvențe comentate.",
        tabla: "1. Statut · 2. Trăsătură + 2 secvențe",
      },
      {
        tip: "prof",
        text: "Al treilea: două elemente de construcție ale personajului, de exemplu caracterizarea directă și indirectă, conflictul sau incipitul. Al patrulea: o opinie argumentată.",
        tabla: "3. Două elemente de structură · 4. Opinie argumentată",
      },
      { tip: "intrebare", text: "Ce înseamnă „secvență comentată”?" },
      {
        tip: "prof",
        text: "Nu repovestești scena. Spui pe scurt ce se întâmplă, apoi explici ce dezvăluie despre personaj și cum o face autorul, de exemplu prin replici sau gesturi.",
      },
    ],
  },
];

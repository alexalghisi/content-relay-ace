import type { BlocajNode } from "./types";

// Fizică și chimie, gimnaziu → liceu. Prerechizitele pot trimite la noduri de matematică.
export const FIZICA: BlocajNode[] = [
  {
    slug: "unitati-de-masura",
    materie: "fizica",
    clase: [6, 7],
    titlu: "Unități de măsură și transformări",
    blocaj: "Mă încurc la transformări: nu știu câți cm² are un m² sau cum trec din km/h în m/s.",
    simptome: [
      "Înmulțești cu 100 la arii când trebuie cu 10 000.",
      "Amesteci unitățile într-o formulă (metri cu centimetri) și rezultatul iese aberant.",
      "Nu știi ce unitate are rezultatul final.",
    ],
    lipsa: ["fractii-zecimale-procente", "puteri"],
    explicatie: [
      "Unitățile de bază din SI: metru (lungime), kilogram (masă), secundă (timp). Prefixele se schimbă cu puteri ale lui 10: kilo = 10³, centi = 10⁻², mili = 10⁻³. 1 km = 1000 m, 1 m = 100 cm, 1 cm = 10 mm.",
      "La arii și volume, factorul se ridică la pătrat, respectiv la cub: 1 m² = 100 × 100 = 10 000 cm²; 1 m³ = 10⁶ cm³; 1 litru = 1 dm³ = 1000 cm³.",
      "Viteza: 1 km/h = 1000 m / 3600 s, deci împarți la 3,6 ca să treci din km/h în m/s (și înmulțești cu 3,6 invers). Regula de aur în probleme: transformă totul în unități SI înainte de calcul.",
    ],
    exemplu: {
      enunt: "Transformă 72 km/h în m/s și 2,5 m² în cm².",
      pasi: ["72 km/h = 72 ÷ 3,6 = 20 m/s.", "2,5 m² = 2,5 × 10 000 = 25 000 cm²."],
      raspuns: "20 m/s; 25 000 cm²",
    },
    verificare: {
      intrebare: "Câți cm³ are 0,5 litri?",
      optiuni: ["50", "500", "5000", "0,0005"],
      corect: 1,
      explicatie: "1 litru = 1000 cm³, deci 0,5 L = 500 cm³.",
    },
    urmeaza: ["viteza-miscare-rectilinie", "legea-lui-ohm", "caldura-si-temperatura"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "viteza-miscare-rectilinie",
    materie: "fizica",
    clase: [6, 7, 9],
    titlu: "Viteză, distanță, timp și mișcarea rectilinie uniformă",
    blocaj:
      "Nu știu să scot timpul sau distanța din formula vitezei și mă pierd la problemele cu două mobile.",
    simptome: [
      "Reții v = d/t, dar nu poți obține t = d/v.",
      "Amesteci km/h cu m și secunde.",
      "Problemele „pleacă unul spre celălalt” sau „îl ajunge din urmă” te blochează.",
    ],
    lipsa: ["unitati-de-masura", "ecuatii-gradul-1"],
    explicatie: [
      "În mișcarea rectilinie uniformă viteza este constantă: v = d/t. Din aceeași relație: d = v × t și t = d/v. Dacă ții minte triunghiul d deasupra lui v și t, acoperi mărimea căutată și citești formula.",
      "Două mobile care pornesc unul spre celălalt se apropie cu viteza v₁ + v₂; dacă merg în același sens, unul îl ajunge pe celălalt cu viteza relativă v₁ − v₂. Timpul de întâlnire = distanța inițială ÷ viteza de apropiere.",
      "Într-un grafic distanță–timp, panta dreptei este viteza; într-un grafic viteză–timp, aria de sub grafic este distanța parcursă.",
    ],
    exemplu: {
      enunt:
        "Două orașe sunt la 150 km. Din A pleacă o mașină cu 60 km/h, din B, în același moment, spre A, una cu 40 km/h. După cât timp se întâlnesc și la ce distanță de A?",
      pasi: [
        "Viteza de apropiere: 60 + 40 = 100 km/h.",
        "Timpul: t = 150 ÷ 100 = 1,5 h.",
        "Distanța de la A: 60 × 1,5 = 90 km.",
      ],
      raspuns: "1,5 h; 90 km de A",
    },
    verificare: {
      intrebare: "Un biciclist parcurge 36 km în 2 ore. Viteza lui în m/s este:",
      optiuni: ["18 m/s", "5 m/s", "10 m/s", "72 m/s"],
      corect: 1,
      explicatie: "v = 36/2 = 18 km/h = 18 ÷ 3,6 = 5 m/s.",
    },
    urmeaza: ["forte-principiile-mecanicii"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "forte-principiile-mecanicii",
    materie: "fizica",
    clase: [7, 9],
    titlu: "Forțe și principiile mecanicii newtoniene",
    blocaj: "Nu știu să desenez forțele care acționează asupra unui corp și să aplic F = m × a.",
    simptome: [
      "Uiți greutatea sau reacțiunea normală din desen.",
      "Confunzi masa (kg) cu greutatea (N).",
      "La plan înclinat nu știi să descompui greutatea.",
    ],
    lipsa: ["viteza-miscare-rectilinie", "trigonometrie"],
    explicatie: [
      "Principiul I: dacă forța rezultantă este zero, corpul stă sau se mișcă uniform rectiliniu. Principiul II: rezultanta forțelor produce accelerație, F = m × a (în N, kg, m/s²). Principiul III: forțele apar perechi — acțiunea și reacțiunea sunt egale și de sens contrar, dar acționează pe corpuri diferite.",
      "Greutatea G = m × g (g ≈ 9,8 m/s², adesea rotunjit la 10) este forța cu care Pământul atrage corpul. Reacțiunea normală N este perpendiculară pe suprafață; forța de frecare Ff = μ × N se opune mișcării.",
      "Metoda sigură: 1) desenezi toate forțele pe corp; 2) alegi axe (Ox pe direcția mișcării); 3) scrii F = m × a pe fiecare axă; 4) rezolvi. Pe plan înclinat cu unghiul α: G se descompune în G sin α (de-a lungul planului) și G cos α (perpendicular).",
    ],
    exemplu: {
      enunt:
        "Un corp de 2 kg este tras pe o masă orizontală cu forța 10 N; coeficientul de frecare este 0,2 (g = 10 m/s²). Află accelerația.",
      pasi: [
        "Pe verticală nu există mișcare: N = G = m g = 20 N.",
        "Frecarea: Ff = μ N = 0,2 × 20 = 4 N.",
        "Pe orizontală: F − Ff = m a → 10 − 4 = 2a → a = 3 m/s².",
      ],
      raspuns: "a = 3 m/s²",
    },
    verificare: {
      intrebare: "Un corp are masa 5 kg. Greutatea lui (g = 10 m/s²) este:",
      optiuni: ["5 N", "50 N", "0,5 N", "5 kg"],
      corect: 1,
      explicatie: "G = m × g = 5 × 10 = 50 N. Masa rămâne 5 kg, greutatea se măsoară în newtoni.",
    },
    urmeaza: ["lucrul-mecanic-energie"],
    nivelCerere: "Liceu",
  },
  {
    slug: "lucrul-mecanic-energie",
    materie: "fizica",
    clase: [7, 9, 10],
    titlu: "Lucru mecanic, energie și conservarea energiei",
    blocaj:
      "Nu înțeleg diferența dintre lucru mecanic, energie și putere, și nu știu când pot folosi conservarea energiei.",
    simptome: [
      "Confunzi joulul cu wattul.",
      "Nu știi că energia cinetică depinde de pătratul vitezei.",
      "La corpuri care cad sau alunecă nu vezi că energia potențială devine cinetică.",
    ],
    lipsa: ["forte-principiile-mecanicii"],
    explicatie: [
      "Lucrul mecanic al unei forțe constante: L = F × d × cos α (α = unghiul dintre forță și deplasare); se măsoară în jouli (J). Puterea este lucrul mecanic pe unitatea de timp: P = L/t, în wați (W).",
      "Energia cinetică Ec = m v²/2; energia potențială gravitațională Ep = m g h. Teorema variației energiei cinetice: lucrul mecanic total = variația energiei cinetice.",
      "Dacă acționează doar greutatea (fără frecare), energia mecanică Ec + Ep se conservă. Un corp lăsat să cadă de la înălțimea h ajunge jos cu v = √(2 g h), indiferent de masă.",
    ],
    exemplu: {
      enunt:
        "Un corp cade liber de la 20 m (g = 10 m/s², fără frecare). Cu ce viteză atinge solul?",
      pasi: [
        "Sus: Ep = m g h, Ec = 0. Jos: Ep = 0, Ec = m v²/2.",
        "Conservare: m g h = m v²/2 → v² = 2 g h = 2 × 10 × 20 = 400.",
        "v = 20 m/s (masa s-a simplificat).",
      ],
      raspuns: "20 m/s",
    },
    verificare: {
      intrebare: "Dacă viteza unui corp se dublează, energia lui cinetică:",
      optiuni: ["se dublează", "crește de 4 ori", "rămâne la fel", "crește de 8 ori"],
      corect: 1,
      explicatie: "Ec depinde de v²: (2v)² = 4v², deci energia crește de 4 ori.",
    },
    urmeaza: ["caldura-si-temperatura"],
    nivelCerere: "Liceu",
  },
  {
    slug: "legea-lui-ohm",
    materie: "fizica",
    clase: [8, 10],
    titlu: "Legea lui Ohm și circuite serie/paralel",
    blocaj:
      "Nu știu să aplic U = R × I și nu înțeleg cum se calculează rezistența echivalentă în serie și în paralel.",
    simptome: [
      "Aduni rezistențele și la gruparea în paralel.",
      "Nu știi ce mărime este aceeași prin rezistoarele în serie (intensitatea) și care în paralel (tensiunea).",
      "Confunzi tensiunea cu intensitatea.",
    ],
    lipsa: ["unitati-de-masura", "ecuatii-gradul-1", "fractii-ordinare"],
    explicatie: [
      "Legea lui Ohm pentru o porțiune de circuit: U = R × I (tensiunea în volți, rezistența în ohmi, intensitatea în amperi). Echivalent: I = U/R și R = U/I.",
      "În serie, aceeași intensitate trece prin toate rezistoarele, tensiunile se adună și rezistența echivalentă este suma: Rs = R₁ + R₂ + …. În paralel, toate rezistoarele au aceeași tensiune, intensitățile se adună și 1/Rp = 1/R₁ + 1/R₂ + …; pentru două rezistoare, Rp = R₁R₂/(R₁ + R₂).",
      "Rezistența echivalentă în paralel este mereu mai mică decât cea mai mică rezistență din grupare — e o verificare rapidă a calculului.",
    ],
    exemplu: {
      enunt:
        "Rezistoarele R₁ = 6 Ω și R₂ = 3 Ω sunt legate în paralel la o sursă de 12 V. Află rezistența echivalentă și intensitatea totală.",
      pasi: [
        "Rp = (6 × 3)/(6 + 3) = 18/9 = 2 Ω (mai mică decât 3 Ω ✔).",
        "I = U/Rp = 12/2 = 6 A.",
        "Verificare: I₁ = 12/6 = 2 A, I₂ = 12/3 = 4 A, suma 6 A. ✔",
      ],
      raspuns: "Rp = 2 Ω; I = 6 A",
    },
    verificare: {
      intrebare:
        "Printr-un rezistor de 20 Ω trece un curent de 0,5 A. Tensiunea la bornele lui este:",
      optiuni: ["40 V", "10 V", "0,025 V", "20,5 V"],
      corect: 1,
      explicatie: "U = R × I = 20 × 0,5 = 10 V.",
    },
    urmeaza: [],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "caldura-si-temperatura",
    materie: "fizica",
    clase: [8, 10],
    titlu: "Căldură, temperatură și calorimetrie",
    blocaj: "Nu înțeleg diferența dintre căldură și temperatură și nu știu să folosesc Q = m c Δt.",
    simptome: [
      "Spui că un corp „are căldură”.",
      "Uiți să transformi masa în kg sau temperatura în diferență.",
      "La amestecuri (apă caldă + apă rece) nu știi să scrii bilanțul.",
    ],
    lipsa: ["unitati-de-masura", "ecuatii-gradul-1"],
    explicatie: [
      "Temperatura descrie starea corpului (cât de agitate sunt moleculele); căldura este energia transferată între corpuri cu temperaturi diferite. Căldura se măsoară în jouli, temperatura în grade Celsius sau kelvini (ΔT în K = Δt în °C).",
      "Q = m c Δt: m masa (kg), c căldura specifică (J/(kg·K)), Δt variația temperaturii. Q > 0 când corpul primește căldură (se încălzește), Q < 0 când cedează.",
      "Bilanț calorimetric: căldura cedată de corpul cald = căldura primită de corpul rece (în modul). La schimbări de stare (topire, vaporizare) temperatura rămâne constantă și Q = m λ, cu λ căldura latentă.",
    ],
    exemplu: {
      enunt:
        "Câtă căldură primește 0,5 kg de apă încălzită de la 20 °C la 70 °C? (c_apă = 4200 J/(kg·K))",
      pasi: ["Δt = 70 − 20 = 50 K.", "Q = m c Δt = 0,5 × 4200 × 50.", "Q = 105 000 J = 105 kJ."],
      raspuns: "105 kJ",
    },
    verificare: {
      intrebare: "În timpul topirii gheții la 0 °C, temperatura amestecului gheață–apă:",
      optiuni: [
        "crește constant",
        "rămâne 0 °C până se topește toată gheața",
        "scade",
        "crește brusc",
      ],
      corect: 1,
      explicatie:
        "În timpul schimbării de stare, căldura primită este folosită pentru topire, nu pentru creșterea temperaturii.",
    },
    urmeaza: [],
    nivelCerere: "Liceu",
  },
];

export const CHIMIE: BlocajNode[] = [
  {
    slug: "structura-atomului",
    materie: "chimie",
    clase: [7, 8, 9],
    titlu: "Structura atomului și tabelul periodic",
    blocaj:
      "Nu știu să aflu numărul de protoni, neutroni și electroni și nu înțeleg ce îmi spune poziția în tabelul periodic.",
    simptome: [
      "Confunzi numărul atomic Z cu numărul de masă A.",
      "Nu știi câți electroni are un ion.",
      "Nu poți scrie configurația electronică pe straturi.",
    ],
    lipsa: [],
    explicatie: [
      "Z (numărul atomic) = numărul de protoni = numărul de electroni în atomul neutru. A (numărul de masă) = protoni + neutroni, deci neutroni = A − Z. Un ion pozitiv a pierdut electroni, unul negativ a câștigat.",
      "Electronii se așază pe straturi: maximum 2 pe primul, 8 pe al doilea, 8 pe al treilea (pentru primele 20 de elemente). Numărul straturilor ocupate dă perioada; numărul de electroni de pe ultimul strat dă grupa (pentru grupele principale) și determină valența.",
      "Elementele din aceeași grupă au proprietăți asemănătoare pentru că au același număr de electroni pe ultimul strat: metalele alcaline (grupa 1) cedează ușor un electron, halogenii (grupa 17) acceptă ușor unul.",
    ],
    exemplu: {
      enunt:
        "Pentru atomul de sodiu (Z = 11, A = 23) află numărul de protoni, neutroni, electroni și configurația pe straturi.",
      pasi: [
        "Protoni = Z = 11; electroni = 11 (atom neutru).",
        "Neutroni = A − Z = 23 − 11 = 12.",
        "Straturi: 2, 8, 1 → perioada 3, grupa 1; ionul Na⁺ are 10 electroni.",
      ],
      raspuns: "11 p⁺, 12 n⁰, 11 e⁻; configurația 2, 8, 1",
    },
    verificare: {
      intrebare: "Ionul Cl⁻ (Z = 17) are:",
      optiuni: ["17 electroni", "16 electroni", "18 electroni", "35 de electroni"],
      corect: 2,
      explicatie: "Atomul neutru are 17 electroni; ionul negativ a câștigat unul → 18.",
    },
    urmeaza: ["formule-chimice-valenta"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "formule-chimice-valenta",
    materie: "chimie",
    clase: [7, 8],
    titlu: "Valența și scrierea formulelor chimice",
    blocaj:
      "Nu știu să scriu formula unui compus (de ce Al₂O₃ și nu AlO?) și nu înțeleg ce este valența.",
    simptome: [
      "Scrii formulele „după ureche”.",
      "Nu știi valențele uzuale (O = II, H = I, Na = I, Ca = II, Al = III).",
      "Nu poți calcula valența unui element dintr-o formulă dată.",
    ],
    lipsa: ["structura-atomului", "divizibilitate"],
    explicatie: [
      "Valența arată câte legături poate forma un atom (câți atomi de hidrogen poate lega sau înlocui). Valențe de reținut: H I; O II; metale alcaline I; Mg, Ca, Zn II; Al III; Cl în cloruri I; grupe: (OH) I, (NO₃) I, (SO₄) II, (PO₄) III, (CO₃) II.",
      "Regula încrucișării: scrii simbolurile, pui valența fiecăruia deasupra, apoi valența unuia devine indicele celuilalt, simplificând dacă se poate. Al (III) și O (II) → Al₂O₃. Ca (II) și O (II) → Ca₂O₂ simplificat → CaO.",
      "Verificare: produsul valență × indice trebuie să fie egal pentru cele două părți ale compusului (Al: 3 × 2 = 6; O: 2 × 3 = 6).",
    ],
    exemplu: {
      enunt: "Scrie formula sulfatului de aluminiu (Al valența III, grupa SO₄ valența II).",
      pasi: [
        "Încrucișează: Al primește indicele 2, (SO₄) primește indicele 3.",
        "Formula: Al₂(SO₄)₃ — grupa se pune în paranteză pentru că apare de 3 ori.",
        "Verificare: 3 × 2 = 6 = 2 × 3. ✔",
      ],
      raspuns: "Al₂(SO₄)₃",
    },
    verificare: {
      intrebare: "Formula corectă a clorurii de calciu (Ca II, Cl I) este:",
      optiuni: ["CaCl", "Ca₂Cl", "CaCl₂", "Ca₂Cl₂"],
      corect: 2,
      explicatie: "Ca (II) → Cl primește indicele 2; Cl (I) → Ca primește indicele 1: CaCl₂.",
    },
    urmeaza: ["ecuatii-chimice-egalare", "mol-masa-molara"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "ecuatii-chimice-egalare",
    materie: "chimie",
    clase: [8, 9],
    titlu: "Egalarea ecuațiilor chimice",
    blocaj: "Scriu reactanții și produșii, dar nu reușesc să pun coeficienții corect.",
    simptome: [
      "Schimbi indicii din formule ca să îți iasă egalarea (H₂O → H₂O₂).",
      "Nu știi de unde să începi.",
      "Nu verifici la final numărul de atomi din fiecare element.",
    ],
    lipsa: ["formule-chimice-valenta", "divizibilitate"],
    explicatie: [
      "Legea conservării masei: numărul de atomi din fiecare element este același înainte și după reacție. Egalezi doar cu coeficienți (numerele din fața formulelor); indicii NU se modifică niciodată, pentru că ar schimba substanța.",
      "Strategie: 1) începe cu elementul care apare într-o singură formulă în fiecare membru; 2) lasă hidrogenul și oxigenul la final; 3) dacă obții coeficienți fracționari, înmulțește toată ecuația ca să devină întregi; 4) numără atomii la final.",
      "Pentru arderi (compus + O₂ → CO₂ + H₂O): egalezi carbonul, apoi hidrogenul, apoi oxigenul.",
    ],
    exemplu: {
      enunt: "Egalează: Al + O₂ → Al₂O₃.",
      pasi: [
        "Aluminiul: în dreapta 2 atomi → pune 2 în fața Al: 2Al + O₂ → Al₂O₃.",
        "Oxigenul: stânga 2, dreapta 3 → c.m.m.m.c. 6: 3O₂ și 2Al₂O₃.",
        "Refă aluminiul: dreapta 4 → 4Al + 3O₂ → 2Al₂O₃. Verificare: Al 4 = 4, O 6 = 6. ✔",
      ],
      raspuns: "4Al + 3O₂ → 2Al₂O₃",
    },
    verificare: {
      intrebare: "Coeficienții corecți pentru H₂ + O₂ → H₂O sunt:",
      optiuni: ["1, 1, 1", "2, 1, 2", "1, 2, 2", "2, 2, 1"],
      corect: 1,
      explicatie: "2H₂ + O₂ → 2H₂O: 4 H și 2 O în ambele părți.",
    },
    urmeaza: ["mol-masa-molara"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "mol-masa-molara",
    materie: "chimie",
    clase: [8, 9, 10],
    titlu: "Molul, masa molară și calculul stoechiometric",
    blocaj:
      "Nu înțeleg ce este molul și nu știu să calculez câte grame de produs rezultă dintr-o cantitate de reactant.",
    simptome: [
      "Confunzi masa (g) cu cantitatea de substanță (mol).",
      "Nu știi să calculezi masa molară dintr-o formulă.",
      "La probleme nu scrii raportul molar din ecuație.",
    ],
    lipsa: ["formule-chimice-valenta", "ecuatii-chimice-egalare", "rapoarte-proportii"],
    explicatie: [
      "Molul este „pachetul” chimistului: 6,022 × 10²³ particule. Masa unui mol (masa molară M, în g/mol) este numeric egală cu masa atomică/moleculară: M(H₂O) = 2 × 1 + 16 = 18 g/mol. Cantitatea de substanță n = m/M.",
      "Coeficienții ecuației chimice egalate dau raportul molar: în 2H₂ + O₂ → 2H₂O, 2 mol H₂ reacționează cu 1 mol O₂ și dau 2 mol H₂O.",
      "Algoritm: 1) egalează ecuația; 2) transformă masele date în moli (n = m/M); 3) aplică raportul molar; 4) transformă molii cerute înapoi în grame (m = n × M). La gaze în condiții normale, 1 mol ocupă 22,4 L.",
    ],
    exemplu: {
      enunt: "Ce masă de apă rezultă din arderea a 4 g de hidrogen? (H = 1, O = 16)",
      pasi: [
        "Ecuația: 2H₂ + O₂ → 2H₂O.",
        "n(H₂) = 4 g / 2 g/mol = 2 mol.",
        "Raport molar H₂ : H₂O = 2 : 2, deci n(H₂O) = 2 mol.",
        "m(H₂O) = 2 × 18 = 36 g.",
      ],
      raspuns: "36 g apă",
    },
    verificare: {
      intrebare: "Masa molară a CO₂ (C = 12, O = 16) este:",
      optiuni: ["28 g/mol", "44 g/mol", "32 g/mol", "22,4 g/mol"],
      corect: 1,
      explicatie: "12 + 2 × 16 = 44 g/mol.",
    },
    urmeaza: ["concentratia-solutiilor"],
    nivelCerere: "Liceu",
  },
  {
    slug: "concentratia-solutiilor",
    materie: "chimie",
    clase: [8, 9],
    titlu: "Concentrația procentuală și molară a soluțiilor",
    blocaj:
      "Nu știu să calculez concentrația unei soluții sau câtă substanță trebuie să dizolv pentru o anumită concentrație.",
    simptome: [
      "Împarți masa de substanță la masa de apă în loc de masa soluției.",
      "Nu știi ce se întâmplă cu concentrația la diluare.",
      "Confunzi concentrația procentuală cu cea molară.",
    ],
    lipsa: ["fractii-zecimale-procente", "mol-masa-molara"],
    explicatie: [
      "Concentrația procentuală c% = (masa dizolvată / masa soluției) × 100, iar masa soluției = masa dizolvată + masa solventului. O soluție 10% conține 10 g substanță în 100 g soluție (deci 90 g apă).",
      "Concentrația molară cM = n/V: moli de substanță dizolvată pe litru de soluție (mol/L).",
      "La diluare adaugi apă: masa dizolvată rămâne aceeași, masa soluției crește, concentrația scade. La amestecarea a două soluții, masa dizolvată totală este suma maselor dizolvate din fiecare.",
    ],
    exemplu: {
      enunt:
        "Se dizolvă 20 g de sare în 180 g de apă. Care este concentrația procentuală? Cât devine după ce adaugi încă 200 g de apă?",
      pasi: [
        "Masa soluției: 20 + 180 = 200 g. c% = 20/200 × 100 = 10%.",
        "După diluare, masa soluției devine 400 g; sarea rămâne 20 g.",
        "c% = 20/400 × 100 = 5%.",
      ],
      raspuns: "10%, apoi 5%",
    },
    verificare: {
      intrebare: "Câte grame de zahăr sunt în 250 g de soluție de concentrație 8%?",
      optiuni: ["8 g", "20 g", "31,25 g", "2 g"],
      corect: 1,
      explicatie: "8% din 250 g = 0,08 × 250 = 20 g.",
    },
    urmeaza: [],
    nivelCerere: "Gimnaziu",
  },
];

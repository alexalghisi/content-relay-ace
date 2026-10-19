import type { BlocajNode } from "./types";

// Matematică, clasele V–XII. Slug-urile sunt unice pe tot site-ul.
export const MATEMATICA: BlocajNode[] = [
  {
    slug: "ordinea-operatiilor",
    materie: "matematica",
    clase: [5],
    titlu: "Ordinea efectuării operațiilor",
    blocaj:
      "Calculez corect fiecare operație, dar rezultatul final iese greșit la exercițiile lungi.",
    simptome: [
      "Aduni înainte să înmulțești, „de la stânga la dreapta”.",
      "Nu știi ce faci mai întâi când sunt paranteze rotunde, pătrate și acolade.",
      "La exerciții cu puteri nu știi dacă ridici la putere înainte sau după înmulțire.",
    ],
    lipsa: [],
    explicatie: [
      "Regula este fixă și nu depinde de exercițiu: mai întâi parantezele (rotunde, apoi pătrate, apoi acolade), apoi puterile, apoi înmulțirile și împărțirile în ordinea în care apar, iar la final adunările și scăderile în ordinea în care apar.",
      "Înmulțirea și împărțirea sunt „la fel de importante” între ele — nu ai voie să faci toate înmulțirile înaintea împărțirilor; le faci de la stânga la dreapta. Același lucru pentru adunare și scădere.",
      "O greșeală frecventă: 2 + 3 × 4 nu este 20, ci 14, pentru că înmulțirea se face prima.",
    ],
    exemplu: {
      enunt: "Calculează: 100 − [2 × (3² + 1) − 4] ÷ 2.",
      pasi: [
        "Paranteza rotundă: 3² + 1 = 9 + 1 = 10 (mai întâi puterea).",
        "Paranteza pătrată: 2 × 10 − 4 = 20 − 4 = 16.",
        "Împărțirea: 16 ÷ 2 = 8.",
        "Scăderea: 100 − 8 = 92.",
      ],
      raspuns: "92",
    },
    verificare: {
      intrebare: "Cât este 20 − 8 ÷ 2 × 3?",
      optiuni: ["18", "8", "2", "6"],
      corect: 1,
      explicatie:
        "Împărțirea și înmulțirea se fac de la stânga la dreapta: 8 ÷ 2 = 4, apoi 4 × 3 = 12, iar 20 − 12 = 8.",
    },
    urmeaza: ["divizibilitate", "numere-intregi", "puteri"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "divizibilitate",
    materie: "matematica",
    clase: [5, 6],
    titlu: "Divizori, multipli, c.m.m.d.c. și c.m.m.m.c.",
    blocaj:
      "Nu știu să găsesc cel mai mic multiplu comun sau să descompun un număr în factori primi.",
    simptome: [
      "La adunarea fracțiilor nu reușești să aduci la același numitor.",
      "Confunzi c.m.m.d.c. (cel mai mare divizor comun) cu c.m.m.m.c. (cel mai mic multiplu comun).",
      "Nu recunoști rapid dacă un număr se împarte la 2, 3, 5 sau 9.",
    ],
    lipsa: ["ordinea-operatiilor"],
    explicatie: [
      "Un număr prim are exact doi divizori: 1 și el însuși (2, 3, 5, 7, 11, 13…). Orice număr natural mai mare ca 1 se scrie într-un singur fel ca produs de numere prime — asta se numește descompunere în factori primi.",
      "Criterii rapide: un număr este divizibil cu 2 dacă e par, cu 5 dacă se termină în 0 sau 5, cu 3 (sau 9) dacă suma cifrelor se împarte la 3 (sau 9).",
      "C.m.m.d.c. se obține luând factorii primi comuni la puterea cea mai mică; c.m.m.m.c. se obține luând toți factorii primi (comuni și necomuni) la puterea cea mai mare. C.m.m.m.c. este exact numitorul comun de care ai nevoie la fracții.",
    ],
    exemplu: {
      enunt: "Află c.m.m.d.c. și c.m.m.m.c. pentru 12 și 18.",
      pasi: [
        "Descompune: 12 = 2² × 3, 18 = 2 × 3².",
        "Factori comuni la puterea cea mai mică: 2 × 3 = 6, deci c.m.m.d.c.(12, 18) = 6.",
        "Toți factorii la puterea cea mai mare: 2² × 3² = 36, deci c.m.m.m.c.(12, 18) = 36.",
        "Verificare: 6 × 36 = 216 = 12 × 18. ✔",
      ],
      raspuns: "c.m.m.d.c. = 6, c.m.m.m.c. = 36",
    },
    verificare: {
      intrebare: "Care este cel mai mic multiplu comun al numerelor 8 și 12?",
      optiuni: ["4", "96", "24", "48"],
      corect: 2,
      explicatie:
        "8 = 2³ și 12 = 2² × 3. Luăm 2³ × 3 = 24. (4 este c.m.m.d.c., iar 96 este doar un multiplu comun, nu cel mai mic.)",
    },
    urmeaza: ["fractii-ordinare", "radicali"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "fractii-ordinare",
    materie: "matematica",
    clase: [5, 6],
    titlu: "Fracții ordinare: amplificare, simplificare, adunare",
    blocaj: "Mă încurc la adunarea fracțiilor cu numitori diferiți și la simplificare.",
    simptome: [
      "Aduni numărătorii și numitorii între ei (1/2 + 1/3 = 2/5 — greșit).",
      "Nu știi când o fracție este „ireductibilă”.",
      "Împărțirea a două fracții te blochează complet.",
    ],
    lipsa: ["divizibilitate"],
    explicatie: [
      "O fracție nu își schimbă valoarea dacă înmulțești (amplifici) sau împarți (simplifici) numărătorul și numitorul cu același număr. 2/4 = 1/2 = 50/100.",
      "Ca să aduni sau să scazi fracții, le aduci mai întâi la același numitor: cel mai simplu numitor comun este c.m.m.m.c. al numitorilor. Apoi aduni doar numărătorii.",
      "Înmulțirea este directă: numărător cu numărător, numitor cu numitor. Împărțirea cu o fracție înseamnă înmulțire cu fracția inversată: a/b ÷ c/d = a/b × d/c.",
    ],
    exemplu: {
      enunt: "Calculează 5/6 + 3/4.",
      pasi: [
        "c.m.m.m.c.(6, 4) = 12.",
        "Amplifică: 5/6 = 10/12 (cu 2), 3/4 = 9/12 (cu 3).",
        "Adună numărătorii: 10/12 + 9/12 = 19/12.",
        "19/12 este ireductibilă (19 e prim); ca număr mixt, 1 întreg și 7/12.",
      ],
      raspuns: "19/12",
    },
    verificare: {
      intrebare: "Cât este 2/3 ÷ 4/9?",
      optiuni: ["8/27", "3/2", "2/3", "6/12"],
      corect: 1,
      explicatie:
        "Împărțirea devine înmulțire cu inversa: 2/3 × 9/4 = 18/12, care se simplifică cu 6 la 3/2.",
    },
    urmeaza: ["fractii-zecimale-procente", "rapoarte-proportii", "numere-rationale"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "fractii-zecimale-procente",
    materie: "matematica",
    clase: [5, 6],
    titlu: "Fracții zecimale și procente",
    blocaj:
      "Nu știu să transform o fracție în număr zecimal sau să calculez un procent dintr-o sumă.",
    simptome: [
      "Nu vezi că 0,25, 1/4 și 25% sunt același lucru.",
      "Greșești poziția virgulei la înmulțirea cu 10, 100, 1000.",
      "Problemele cu reduceri de preț („20% reducere”) te blochează.",
    ],
    lipsa: ["fractii-ordinare"],
    explicatie: [
      "O fracție zecimală este o fracție cu numitorul 10, 100, 1000… scrisă cu virgulă: 7/10 = 0,7; 35/100 = 0,35. Orice fracție ordinară se transformă în zecimală împărțind numărătorul la numitor.",
      "Procentul înseamnă „din o sută”: p% = p/100. Ca să calculezi p% dintr-un număr N, înmulțești: p/100 × N. 20% din 150 = 20/100 × 150 = 30.",
      "La înmulțirea cu 10, 100, 1000 virgula se mută la dreapta cu 1, 2, 3 poziții; la împărțire se mută la stânga.",
    ],
    exemplu: {
      enunt: "Un ghiozdan costă 180 lei și are o reducere de 15%. Cât costă după reducere?",
      pasi: [
        "Reducerea: 15% din 180 = 15/100 × 180 = 27 lei.",
        "Prețul nou: 180 − 27 = 153 lei.",
        "Scurtătură: prețul nou este 85% din 180 = 0,85 × 180 = 153.",
      ],
      raspuns: "153 lei",
    },
    verificare: {
      intrebare: "Cât este 3/8 scris ca număr zecimal?",
      optiuni: ["0,38", "0,375", "0,3", "3,8"],
      corect: 1,
      explicatie: "3 ÷ 8 = 0,375. Poți verifica: 0,375 × 8 = 3.",
    },
    urmeaza: ["rapoarte-proportii", "arii-perimetre"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "numere-intregi",
    materie: "matematica",
    clase: [6],
    titlu: "Numere întregi: operații cu numere negative",
    blocaj: "Mă încurc la semne: nu știu cât face −3 − 5 sau (−2) × (−4).",
    simptome: [
      "Confunzi „minus minus” de la scădere cu înmulțirea semnelor.",
      "La ecuații, când treci un termen în partea cealaltă, uiți să schimbi semnul.",
      "Nu poți spune care este mai mare: −7 sau −2.",
    ],
    lipsa: ["ordinea-operatiilor"],
    explicatie: [
      "Gândește-te la axa numerelor: a aduna un număr pozitiv înseamnă a te deplasa la dreapta, a aduna un număr negativ înseamnă a te deplasa la stânga. −3 − 5 înseamnă „pornesc de la −3 și mă mai duc 5 la stânga”: −8.",
      "Scăderea unui număr negativ este o adunare: 4 − (−6) = 4 + 6 = 10. Două minusuri alăturate devin plus.",
      "La înmulțire și împărțire: semne la fel → rezultat pozitiv; semne diferite → rezultat negativ. (−2) × (−4) = 8, dar (−2) × 4 = −8.",
    ],
    exemplu: {
      enunt: "Calculează: −6 + (−3) × (−2) − 10 ÷ (−5).",
      pasi: [
        "Înmulțirea: (−3) × (−2) = 6 (semne la fel → plus).",
        "Împărțirea: 10 ÷ (−5) = −2 (semne diferite → minus).",
        "Expresia devine: −6 + 6 − (−2).",
        "−6 + 6 = 0, iar 0 − (−2) = 0 + 2 = 2.",
      ],
      raspuns: "2",
    },
    verificare: {
      intrebare: "Cât este −4 − (−9)?",
      optiuni: ["−13", "5", "−5", "13"],
      corect: 1,
      explicatie: "Scăderea unui negativ este adunare: −4 + 9 = 5.",
    },
    urmeaza: ["numere-rationale", "puteri", "ecuatii-gradul-1"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "numere-rationale",
    materie: "matematica",
    clase: [6, 7],
    titlu: "Numere raționale: fracții cu semn",
    blocaj:
      "Când apar și fracții, și numere negative în același exercițiu, nu mai știu de unde să încep.",
    simptome: [
      "Operații ca −1/2 + 3/4 ies mereu cu semn greșit.",
      "Nu știi unde „stă” minusul la o fracție (−a/b = (−a)/b = a/(−b)).",
      "Te pierzi la calcule cu paranteze și fracții.",
    ],
    lipsa: ["numere-intregi", "fractii-ordinare"],
    explicatie: [
      "Un număr rațional este o fracție a/b cu a, b întregi și b ≠ 0. Regulile de semn sunt exact cele de la numere întregi, iar regulile de calcul exact cele de la fracții — trebuie doar aplicate împreună, pe rând.",
      "Strategie sigură: 1) stabilești semnul fiecărui termen; 2) aduci la numitor comun; 3) aduni numărătorii ca numere întregi (cu semn); 4) simplifici la final.",
      "Minusul unei fracții îl poți pune la numărător: −3/4 = (−3)/4. Așa nu mai pierzi semnul la adunare.",
    ],
    exemplu: {
      enunt: "Calculează −1/2 + 3/4 − 5/6.",
      pasi: [
        "Numitor comun: c.m.m.m.c.(2, 4, 6) = 12.",
        "Amplifică: −6/12 + 9/12 − 10/12.",
        "Adună numărătorii: −6 + 9 − 10 = −7.",
        "Rezultat: −7/12 (ireductibilă).",
      ],
      raspuns: "−7/12",
    },
    verificare: {
      intrebare: "Cât este (−2/3) × (−3/4)?",
      optiuni: ["−1/2", "1/2", "−6/7", "6/12"],
      corect: 1,
      explicatie: "Semne la fel → plus. 2 × 3 / (3 × 4) = 6/12 = 1/2.",
    },
    urmeaza: ["calcul-algebric", "ecuatii-gradul-1"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "puteri",
    materie: "matematica",
    clase: [5, 6, 7],
    titlu: "Puteri cu exponent natural și întreg",
    blocaj: "Nu știu regulile: cât face 2³ × 2⁴ sau (x²)³, și ce înseamnă exponent negativ.",
    simptome: [
      "Înmulțești bazele sau exponenții la întâmplare (2³ × 2⁴ = 4⁷ — greșit).",
      "Crezi că 2⁻¹ este −2.",
      "La formule de calcul prescurtat nu poți scrie (2x)² corect.",
    ],
    lipsa: ["numere-intregi"],
    explicatie: [
      "aⁿ înseamnă a înmulțit cu el însuși de n ori. De aici decurg toate regulile: aᵐ × aⁿ = aᵐ⁺ⁿ (aceeași bază, se adună exponenții), aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐ·ⁿ, (a × b)ⁿ = aⁿ × bⁿ.",
      "a⁰ = 1 pentru orice a ≠ 0, iar a⁻ⁿ = 1/aⁿ. Exponentul negativ nu face numărul negativ, ci îl „răstoarnă”: 2⁻³ = 1/8.",
      "Regulile funcționează doar pentru aceeași bază. 2³ × 3² nu se poate „combina” — îl calculezi: 8 × 9 = 72.",
    ],
    exemplu: {
      enunt: "Simplifică: (2³ × 2⁵) ÷ (2²)³.",
      pasi: [
        "Numărătorul: 2³ × 2⁵ = 2⁸.",
        "Numitorul: (2²)³ = 2⁶.",
        "Împărțirea: 2⁸ ÷ 2⁶ = 2² = 4.",
      ],
      raspuns: "4",
    },
    verificare: {
      intrebare: "Cât este (3x²)³?",
      optiuni: ["3x⁶", "27x⁵", "27x⁶", "9x⁶"],
      corect: 2,
      explicatie: "Fiecare factor se ridică la cub: 3³ = 27 și (x²)³ = x⁶.",
    },
    urmeaza: ["formule-calcul-prescurtat", "radicali", "logaritmi"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "rapoarte-proportii",
    materie: "matematica",
    clase: [6],
    titlu: "Rapoarte, proporții și regula de trei simplă",
    blocaj:
      "La probleme de tipul „dacă 3 caiete costă 12 lei, cât costă 7 caiete?” nu știu ce să înmulțesc cu ce.",
    simptome: [
      "Nu știi să scrii o proporție corect (a/b = c/d) și să aplici „produsul mezilor egal cu produsul extremilor”.",
      "Confunzi mărimile direct proporționale cu cele invers proporționale.",
      "Problemele cu scară a hărții sau cu rețete te blochează.",
    ],
    lipsa: ["fractii-ordinare"],
    explicatie: [
      "Un raport este o împărțire a/b. O proporție este egalitatea a două rapoarte: a/b = c/d. Proprietatea fundamentală: a × d = b × c (produsul extremilor egal cu produsul mezilor). Din ea afli orice termen necunoscut.",
      "Două mărimi sunt direct proporționale dacă atunci când una crește de n ori, cealaltă crește tot de n ori (caiete ↔ preț). Sunt invers proporționale dacă una crește de n ori și cealaltă scade de n ori (număr de muncitori ↔ zile de lucru).",
      "Regula de trei simplă este doar o proporție scrisă pe două rânduri. Scrie mărimile de același fel una sub alta și verifică dacă sunt direct sau invers proporționale înainte să calculezi.",
    ],
    exemplu: {
      enunt: "3 caiete costă 12 lei. Cât costă 7 caiete la același preț?",
      pasi: [
        "Mărimile sunt direct proporționale (mai multe caiete → mai mulți lei).",
        "Scrie proporția: 3/12 = 7/x.",
        "Produsul mezilor = produsul extremilor: 3 × x = 12 × 7 = 84.",
        "x = 84 ÷ 3 = 28.",
      ],
      raspuns: "28 lei",
    },
    verificare: {
      intrebare:
        "4 muncitori termină un gard în 6 zile. În câte zile îl termină 8 muncitori, lucrând în același ritm?",
      optiuni: ["12 zile", "3 zile", "2 zile", "48 de zile"],
      corect: 1,
      explicatie:
        "Mărimi invers proporționale: de două ori mai mulți muncitori → de două ori mai puține zile. 4 × 6 = 8 × x, deci x = 3.",
    },
    urmeaza: ["asemanarea-triunghiurilor", "functii-liniare"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "calcul-algebric",
    materie: "matematica",
    clase: [7, 8],
    titlu: "Calcul algebric: termeni asemenea și paranteze",
    blocaj: "Nu știu să reduc termenii asemenea sau să desfac corect parantezele cu minus în față.",
    simptome: [
      "Aduni 3x cu 2x² ca și cum ar fi la fel.",
      "La −(2x − 5) uiți să schimbi semnul la toți termenii.",
      "Înmulțirea (x + 2)(x − 3) îți iese cu termeni lipsă.",
    ],
    lipsa: ["numere-rationale", "puteri"],
    explicatie: [
      "Termenii asemenea au exact aceeași parte literală (aceleași litere la aceleași puteri): 3x și −5x sunt asemenea, 3x și 3x² nu. Reducerea înseamnă adunarea coeficienților: 3x − 5x = −2x.",
      "Minusul din fața unei paranteze schimbă semnul fiecărui termen dinăuntru: −(2x − 5) = −2x + 5. Un număr din fața parantezei se înmulțește cu fiecare termen (distributivitate): 3(x − 4) = 3x − 12.",
      "La înmulțirea a două paranteze, fiecare termen din prima se înmulțește cu fiecare termen din a doua, apoi reduci: (x + 2)(x − 3) = x² − 3x + 2x − 6 = x² − x − 6.",
    ],
    exemplu: {
      enunt: "Adu la forma cea mai simplă: 2(3x − 1) − (x − 4) + 5x.",
      pasi: [
        "Desfă parantezele: 6x − 2 − x + 4 + 5x.",
        "Grupează termenii cu x: 6x − x + 5x = 10x.",
        "Grupează numerele: −2 + 4 = 2.",
        "Rezultat: 10x + 2.",
      ],
      raspuns: "10x + 2",
    },
    verificare: {
      intrebare: "Care este forma redusă a expresiei 4x − (3x − 7) + 2?",
      optiuni: ["x − 5", "x + 9", "7x + 9", "x + 5"],
      corect: 1,
      explicatie: "4x − 3x + 7 + 2 = x + 9. Minusul din fața parantezei a schimbat −7 în +7.",
    },
    urmeaza: ["ecuatii-gradul-1", "formule-calcul-prescurtat", "progresii"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "formule-calcul-prescurtat",
    materie: "matematica",
    clase: [7, 8],
    titlu: "Formule de calcul prescurtat",
    blocaj:
      "Nu rețin (a + b)² și a² − b², iar la descompunerea în factori nu văd ce formulă să aplic.",
    simptome: [
      "Scrii (a + b)² = a² + b² (lipsește termenul 2ab).",
      "Nu recunoști x² − 9 ca pe o diferență de pătrate.",
      "La simplificarea fracțiilor algebrice nu știi să descompui numitorul.",
    ],
    lipsa: ["calcul-algebric", "puteri"],
    explicatie: [
      "Cele trei formule de bază: (a + b)² = a² + 2ab + b²; (a − b)² = a² − 2ab + b²; (a − b)(a + b) = a² − b². Toate ies dacă înmulțești parantezele termen cu termen — dacă uiți o formulă, o poți reconstrui.",
      "Citite invers, formulele servesc la descompunerea în factori: x² − 9 = (x − 3)(x + 3); x² + 6x + 9 = (x + 3)².",
      "Cum recunoști pătratul unui binom: doi termeni sunt pătrate perfecte, iar al treilea este dublul produsului bazelor. La x² + 6x + 9: x² și 9 = 3² sunt pătrate, iar 6x = 2 × x × 3.",
    ],
    exemplu: {
      enunt: "Simplifică fracția (x² − 16) / (x² + 8x + 16), pentru x ≠ −4.",
      pasi: [
        "Numărătorul este diferență de pătrate: x² − 16 = (x − 4)(x + 4).",
        "Numitorul este pătratul unui binom: x² + 8x + 16 = (x + 4)².",
        "Simplifică cu (x + 4): rezultatul este (x − 4)/(x + 4).",
      ],
      raspuns: "(x − 4)/(x + 4)",
    },
    verificare: {
      intrebare: "Cât este (2x − 3)²?",
      optiuni: ["4x² − 9", "4x² − 12x + 9", "4x² + 9", "2x² − 12x + 9"],
      corect: 1,
      explicatie: "(a − b)² = a² − 2ab + b² cu a = 2x, b = 3: 4x² − 12x + 9.",
    },
    urmeaza: ["ecuatia-gradul-2", "radicali"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "ecuatii-gradul-1",
    materie: "matematica",
    clase: [6, 7, 8],
    titlu: "Ecuații de gradul I",
    blocaj:
      "La ecuații ca 3x + 5 = 20 sau 2(x − 1) = x + 7 nu știu ce „trec dincolo” și cu ce semn.",
    simptome: [
      "Uiți să schimbi semnul termenului mutat în celălalt membru.",
      "Împarți doar o parte a ecuației la coeficientul lui x.",
      "Nu verifici soluția la final, deci nu îți dai seama că ai greșit.",
    ],
    lipsa: ["numere-intregi", "calcul-algebric"],
    explicatie: [
      "O ecuație este o balanță: orice faci într-un membru trebuie să faci și în celălalt. „Trecerea dincolo cu semn schimbat” este doar scurtătura pentru „scad același număr din ambele părți”.",
      "Pașii standard: 1) desfaci parantezele; 2) aduni termenii cu x într-un membru și numerele în celălalt; 3) reduci termenii asemenea; 4) împarți ambii membri la coeficientul lui x; 5) verifici înlocuind soluția în ecuația inițială.",
      "Dacă obții ceva de forma 0 = 5, ecuația nu are soluție; dacă obții 0 = 0, orice x este soluție.",
    ],
    exemplu: {
      enunt: "Rezolvă ecuația 2(x − 1) = x + 7.",
      pasi: [
        "Desfă paranteza: 2x − 2 = x + 7.",
        "Trece x în stânga și −2 în dreapta: 2x − x = 7 + 2.",
        "Reduce: x = 9.",
        "Verificare: 2(9 − 1) = 16 și 9 + 7 = 16. ✔",
      ],
      raspuns: "x = 9",
    },
    verificare: {
      intrebare: "Care este soluția ecuației 5x − 4 = 2x + 11?",
      optiuni: ["x = 5", "x = 7/3", "x = −5", "x = 15"],
      corect: 0,
      explicatie: "5x − 2x = 11 + 4 → 3x = 15 → x = 5.",
    },
    urmeaza: ["sisteme-ecuatii", "functii-liniare", "ecuatia-gradul-2"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "radicali",
    materie: "matematica",
    clase: [7, 8],
    titlu: "Radicali: scoaterea factorilor și raționalizarea",
    blocaj: "Nu știu cum să simplific √50 sau să scap de radicalul de la numitor.",
    simptome: [
      "Crezi că √(a + b) = √a + √b.",
      "Nu poți aduna √8 cu √2 pentru că nu le aduci la aceeași formă.",
      "Nu știi ce înseamnă raționalizarea numitorului.",
    ],
    lipsa: ["puteri", "divizibilitate"],
    explicatie: [
      "√a este numărul pozitiv care ridicat la pătrat dă a. Reguli valabile: √(a × b) = √a × √b și √(a/b) = √a/√b. Regulă FALSĂ: √(a + b) ≠ √a + √b (verifică: √(9 + 16) = 5, dar 3 + 4 = 7).",
      "Scoaterea factorilor de sub radical: descompui numărul și scoți pătratele perfecte. √50 = √(25 × 2) = 5√2. Radicalii se pot aduna doar dacă au aceeași parte de sub radical: 2√2 + 3√2 = 5√2.",
      "Raționalizarea înseamnă să elimini radicalul de la numitor amplificând: 1/√3 = √3/3 (amplificat cu √3). Pentru numitor de forma a + √b amplifici cu conjugatul a − √b și folosești diferența de pătrate.",
    ],
    exemplu: {
      enunt: "Calculează √8 + √18 − √2 și apoi raționalizează 2/√2.",
      pasi: [
        "√8 = √(4 × 2) = 2√2; √18 = √(9 × 2) = 3√2.",
        "2√2 + 3√2 − √2 = 4√2.",
        "2/√2 = 2√2/(√2 × √2) = 2√2/2 = √2.",
      ],
      raspuns: "4√2 și √2",
    },
    verificare: {
      intrebare: "Cât este √75 adus la forma cea mai simplă?",
      optiuni: ["3√5", "25√3", "5√3", "√(25 + 50)"],
      corect: 2,
      explicatie: "75 = 25 × 3, deci √75 = √25 × √3 = 5√3.",
    },
    urmeaza: ["teorema-pitagora", "ecuatia-gradul-2", "trigonometrie"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "sisteme-ecuatii",
    materie: "matematica",
    clase: [8, 9],
    titlu: "Sisteme de două ecuații cu două necunoscute",
    blocaj:
      "Nu știu când să folosesc metoda substituției și când pe cea a reducerii, și mă pierd pe drum.",
    simptome: [
      "Înlocuiești x într-o ecuație cu o expresie care conține tot x.",
      "La metoda reducerii înmulțești o singură ecuație și uiți să înmulțești toți termenii ei.",
      "Problemele cu text (două necunoscute) nu le poți traduce în ecuații.",
    ],
    lipsa: ["ecuatii-gradul-1"],
    explicatie: [
      "Metoda substituției: scoți o necunoscută dintr-o ecuație (de preferat una cu coeficient 1) și o înlocuiești în cealaltă ecuație. Rămâi cu o ecuație de gradul I cu o singură necunoscută.",
      "Metoda reducerii: înmulțești ecuațiile cu numere astfel încât o necunoscută să aibă coeficienți opuși, apoi aduni ecuațiile membru cu membru. Necunoscuta respectivă „dispare”.",
      "Alegerea metodei: substituție când o necunoscută are coeficient 1 sau −1; reducere când coeficienții sunt „mari”. Orice metodă e corectă dacă verifici soluția în ambele ecuații.",
    ],
    exemplu: {
      enunt: "Rezolvă sistemul: x + y = 10 și 2x − y = 2.",
      pasi: [
        "Metoda reducerii: y are coeficienți +1 și −1, deci adună ecuațiile: 3x = 12, x = 4.",
        "Înlocuiește în prima: 4 + y = 10, y = 6.",
        "Verificare în a doua: 2 × 4 − 6 = 2. ✔",
      ],
      raspuns: "x = 4, y = 6",
    },
    verificare: {
      intrebare: "Soluția sistemului x − y = 1 și x + 2y = 7 este:",
      optiuni: ["x = 3, y = 2", "x = 2, y = 3", "x = 4, y = 3", "x = 5, y = 1"],
      corect: 0,
      explicatie: "Din prima, x = y + 1. În a doua: y + 1 + 2y = 7 → 3y = 6 → y = 2, x = 3.",
    },
    urmeaza: ["matrici-determinanti", "functii-liniare"],
    nivelCerere: "Evaluare Națională",
  },
  {
    slug: "functii-liniare",
    materie: "matematica",
    clase: [8],
    titlu: "Funcția de gradul I și graficul ei",
    blocaj:
      "Nu înțeleg ce este f(x) = 2x − 3, cum îi desenez graficul și ce înseamnă că un punct „aparține” graficului.",
    simptome: [
      "Nu știi că graficul unei funcții de gradul I este o dreaptă și că ajung două puncte ca s-o desenezi.",
      "Nu poți afla punctul de intersecție cu axa Ox (unde f(x) = 0).",
      "Confunzi f(2) (valoarea funcției în 2) cu rezolvarea ecuației f(x) = 2.",
    ],
    lipsa: ["ecuatii-gradul-1", "rapoarte-proportii"],
    explicatie: [
      "O funcție este o regulă care fiecărui x îi asociază un singur număr f(x). f(x) = 2x − 3 înseamnă: „ia x, dublează-l, scade 3”. Deci f(2) = 1, f(0) = −3.",
      "Graficul funcției f(x) = ax + b este o dreaptă. Pentru a o desena, calculezi două puncte (de obicei x = 0 și punctul în care f(x) = 0) și le unești. a este panta: dacă a > 0 dreapta urcă, dacă a < 0 coboară.",
      "Un punct A(x₀, y₀) aparține graficului dacă f(x₀) = y₀. Verifici înlocuind: A(2, 1) aparține graficului lui f(x) = 2x − 3 pentru că f(2) = 1.",
    ],
    exemplu: {
      enunt:
        "Fie f(x) = −x + 4. Află intersecțiile graficului cu axele și verifică dacă punctul M(1, 3) aparține graficului.",
      pasi: [
        "Cu axa Oy: x = 0 → f(0) = 4 → punctul (0, 4).",
        "Cu axa Ox: f(x) = 0 → −x + 4 = 0 → x = 4 → punctul (4, 0).",
        "Verificare M(1, 3): f(1) = −1 + 4 = 3 = y₀, deci M aparține graficului.",
      ],
      raspuns: "(0, 4), (4, 0); M aparține graficului",
    },
    verificare: {
      intrebare: "Pentru f(x) = 3x − 6, în ce punct taie graficul axa Ox?",
      optiuni: ["(0, −6)", "(2, 0)", "(−2, 0)", "(6, 0)"],
      corect: 1,
      explicatie: "Pe axa Ox, y = 0: 3x − 6 = 0 → x = 2. Punctul (0, −6) este intersecția cu Oy.",
    },
    urmeaza: ["functii-generalitati", "geometrie-analitica"],
    nivelCerere: "Evaluare Națională",
  },
  {
    slug: "unghiuri-triunghiuri",
    materie: "matematica",
    clase: [6, 7],
    titlu: "Unghiuri și suma unghiurilor în triunghi",
    blocaj:
      "Nu reușesc să aflu un unghi necunoscut în triunghi sau la drepte paralele tăiate de o secantă.",
    simptome: [
      "Nu folosești faptul că unghiurile unui triunghi însumează 180°.",
      "Nu recunoști unghiurile alterne interne și corespondente.",
      "La triunghiul isoscel uiți că unghiurile de la bază sunt egale.",
    ],
    lipsa: ["ordinea-operatiilor"],
    explicatie: [
      "În orice triunghi, suma unghiurilor este 180°. Dacă știi două unghiuri, al treilea e 180° minus suma lor. Un unghi exterior este egal cu suma celor două unghiuri interioare neadiacente.",
      "Triunghiul isoscel are două laturi egale și unghiurile de la bază egale; cel echilateral are toate unghiurile de 60°; cel dreptunghic are un unghi de 90°, iar celelalte două însumează 90°.",
      "Două drepte paralele tăiate de o secantă formează unghiuri alterne interne egale și unghiuri corespondente egale; unghiurile interne de aceeași parte a secantei însumează 180°.",
    ],
    exemplu: {
      enunt: "În triunghiul ABC isoscel cu AB = AC, unghiul A are 40°. Află unghiurile B și C.",
      pasi: [
        "AB = AC, deci unghiurile de la bază B și C sunt egale.",
        "B + C = 180° − 40° = 140°.",
        "B = C = 140° ÷ 2 = 70°.",
      ],
      raspuns: "B = C = 70°",
    },
    verificare: {
      intrebare:
        "Într-un triunghi dreptunghic, unul dintre unghiurile ascuțite are 35°. Cât are celălalt unghi ascuțit?",
      optiuni: ["145°", "65°", "55°", "45°"],
      corect: 2,
      explicatie:
        "Unghiurile ascuțite ale unui triunghi dreptunghic însumează 90°: 90° − 35° = 55°.",
    },
    urmeaza: ["teorema-pitagora", "asemanarea-triunghiurilor"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "arii-perimetre",
    materie: "matematica",
    clase: [5, 6, 7],
    titlu: "Perimetre și arii ale figurilor plane",
    blocaj: "Confund aria cu perimetrul și nu rețin formulele pentru triunghi, romb, trapez.",
    simptome: [
      "Aduni laturile când ți se cere aria.",
      "La triunghi uiți să împarți la 2.",
      "Nu știi că înălțimea trebuie să fie perpendiculară pe bază.",
    ],
    lipsa: ["fractii-zecimale-procente"],
    explicatie: [
      "Perimetrul este lungimea conturului (se măsoară în cm, m); aria este suprafața acoperită (se măsoară în cm², m²). Dacă unitatea are „pătrat”, e arie.",
      "Formule de bază: dreptunghi A = L × l; pătrat A = l²; paralelogram A = bază × înălțime; triunghi A = (bază × înălțime) ÷ 2; romb A = (d₁ × d₂) ÷ 2; trapez A = (B + b) × h ÷ 2; cerc A = π r² și lungimea cercului 2πr.",
      "Toate formulele vin din aria dreptunghiului: triunghiul este jumătate de paralelogram, iar trapezul este un „dreptunghi cu baza medie”. Înțelegerea asta te scapă de memorare mecanică.",
    ],
    exemplu: {
      enunt: "Un trapez are bazele de 10 cm și 6 cm și înălțimea de 4 cm. Află aria.",
      pasi: ["A = (B + b) × h ÷ 2.", "A = (10 + 6) × 4 ÷ 2 = 16 × 4 ÷ 2.", "A = 64 ÷ 2 = 32 cm²."],
      raspuns: "32 cm²",
    },
    verificare: {
      intrebare:
        "Un triunghi are baza de 12 cm și înălțimea corespunzătoare de 5 cm. Aria lui este:",
      optiuni: ["60 cm²", "30 cm²", "17 cm²", "34 cm²"],
      corect: 1,
      explicatie: "A = (12 × 5) ÷ 2 = 30 cm². 60 ar fi aria dreptunghiului cu aceleași dimensiuni.",
    },
    urmeaza: ["corpuri-geometrice", "teorema-pitagora"],
    nivelCerere: "Gimnaziu",
  },
  {
    slug: "teorema-pitagora",
    materie: "matematica",
    clase: [7, 8],
    titlu: "Teorema lui Pitagora",
    blocaj: "Nu știu când pot aplica teorema lui Pitagora și care latură este ipotenuza.",
    simptome: [
      "Aplici a² + b² = c² într-un triunghi care nu este dreptunghic.",
      "Pui ipotenuza în locul unei catete în formulă.",
      "Rezultatul rămâne sub radical și nu știi să-l simplifici.",
    ],
    lipsa: ["puteri", "radicali", "unghiuri-triunghiuri"],
    explicatie: [
      "Teorema funcționează doar în triunghiul dreptunghic. Ipotenuza este latura opusă unghiului drept — întotdeauna cea mai lungă. Catetele sunt laturile care formează unghiul drept.",
      "Enunț: ipotenuza² = cateta₁² + cateta₂². Dacă cauți o catetă: cateta² = ipotenuza² − cealaltă catetă².",
      "Triplete de reținut: (3, 4, 5), (5, 12, 13), (6, 8, 10), (8, 15, 17). Reciproca: dacă laturile verifică relația, triunghiul este dreptunghic.",
    ],
    exemplu: {
      enunt:
        "Un triunghi dreptunghic are ipotenuza de 13 cm și o catetă de 5 cm. Află cealaltă catetă.",
      pasi: [
        "cateta² = 13² − 5² = 169 − 25 = 144.",
        "cateta = √144 = 12 cm.",
        "Verificare: 5² + 12² = 25 + 144 = 169 = 13². ✔",
      ],
      raspuns: "12 cm",
    },
    verificare: {
      intrebare: "Diagonala unui pătrat cu latura de 4 cm are lungimea:",
      optiuni: ["8 cm", "4√2 cm", "2√2 cm", "16 cm"],
      corect: 1,
      explicatie:
        "Diagonala este ipotenuza unui triunghi dreptunghic cu catetele 4 și 4: d² = 16 + 16 = 32, d = √32 = 4√2.",
    },
    urmeaza: ["trigonometrie", "corpuri-geometrice", "geometrie-analitica"],
    nivelCerere: "Evaluare Națională",
  },
  {
    slug: "asemanarea-triunghiurilor",
    materie: "matematica",
    clase: [7, 8],
    titlu: "Teorema lui Thales și asemănarea triunghiurilor",
    blocaj:
      "La probleme cu paralele în triunghi nu știu ce rapoarte să scriu și care laturi se corespund.",
    simptome: [
      "Scrii raportul laturilor în ordine greșită (nu respecți corespondența vârfurilor).",
      "Nu vezi triunghiurile asemenea „ascunse” într-o figură.",
      "Confunzi teorema lui Thales cu teorema fundamentală a asemănării.",
    ],
    lipsa: ["rapoarte-proportii", "unghiuri-triunghiuri"],
    explicatie: [
      "Teorema lui Thales: o paralelă la o latură a triunghiului determină pe celelalte două laturi segmente proporționale. Dacă DE ∥ BC (D pe AB, E pe AC), atunci AD/DB = AE/EC.",
      "Două triunghiuri sunt asemenea dacă au unghiurile egale două câte două; atunci laturile care se opun unghiurilor egale sunt proporționale. Scrierea ΔABC ~ ΔDEF spune exact care vârf corespunde cu care: A↔D, B↔E, C↔F, deci AB/DE = BC/EF = AC/DF.",
      "Teorema fundamentală a asemănării: paralela la o latură formează cu celelalte două un triunghi asemenea cu cel inițial — din ea afli lungimea paralelei (nu doar segmentele de pe laturi, ca la Thales).",
    ],
    exemplu: {
      enunt:
        "În triunghiul ABC, D ∈ AB, E ∈ AC și DE ∥ BC. AD = 4 cm, DB = 6 cm, AE = 6 cm. Află EC.",
      pasi: ["Thales: AD/DB = AE/EC.", "4/6 = 6/EC → 4 × EC = 36.", "EC = 9 cm."],
      raspuns: "EC = 9 cm",
    },
    verificare: {
      intrebare: "ΔABC ~ ΔMNP cu AB = 6, MN = 9, BC = 8. Cât este NP?",
      optiuni: ["11", "12", "6", "10"],
      corect: 1,
      explicatie: "AB/MN = BC/NP → 6/9 = 8/NP → NP = 72/6 = 12.",
    },
    urmeaza: ["trigonometrie", "corpuri-geometrice"],
    nivelCerere: "Evaluare Națională",
  },
  {
    slug: "corpuri-geometrice",
    materie: "matematica",
    clase: [8],
    titlu: "Corpuri geometrice: arii și volume",
    blocaj:
      "Nu rețin formulele pentru prismă, piramidă, cilindru, con și nu văd cum calculez apotema sau înălțimea.",
    simptome: [
      "Confunzi aria laterală cu aria totală.",
      "Nu știi ce este apotema piramidei și cum se calculează din înălțime și apotema bazei.",
      "Uiți de „÷ 3” la volumul piramidei și al conului.",
    ],
    lipsa: ["arii-perimetre", "teorema-pitagora"],
    explicatie: [
      "Două idei acoperă aproape totul: corpurile „drepte” (prismă, cilindru) au V = aria bazei × înălțime, iar cele „ascuțite” (piramidă, con) au V = aria bazei × înălțime ÷ 3.",
      "Aria laterală este suma ariilor fețelor laterale; aria totală = aria laterală + aria bazei (sau bazelor, dacă sunt două). Pentru piramida regulată: Al = perimetrul bazei × apotema piramidei ÷ 2.",
      "Aproape fiecare necunoscută (apotema piramidei, generatoarea conului, diagonala paralelipipedului) se află cu Pitagora într-un triunghi dreptunghic ascuns: apotema piramidei² = înălțimea² + apotema bazei².",
    ],
    exemplu: {
      enunt:
        "O piramidă patrulateră regulată are latura bazei 6 cm și înălțimea 4 cm. Află volumul și apotema.",
      pasi: [
        "Aria bazei: 6² = 36 cm².",
        "Volumul: 36 × 4 ÷ 3 = 48 cm³.",
        "Apotema bazei (jumătate din latură): 3 cm. Apotema piramidei: √(4² + 3²) = √25 = 5 cm.",
      ],
      raspuns: "V = 48 cm³, apotema = 5 cm",
    },
    verificare: {
      intrebare: "Un cilindru are raza bazei 3 cm și înălțimea 10 cm. Volumul lui este:",
      optiuni: ["30π cm³", "90π cm³", "60π cm³", "300π cm³"],
      corect: 1,
      explicatie: "V = π r² h = π × 9 × 10 = 90π cm³.",
    },
    urmeaza: ["trigonometrie"],
    nivelCerere: "Evaluare Națională",
  },
  {
    slug: "ecuatia-gradul-2",
    materie: "matematica",
    clase: [9, 10],
    titlu: "Ecuația de gradul al II-lea",
    blocaj: "Nu știu să aplic formula cu discriminantul sau când să descompun în factori direct.",
    simptome: [
      "Greșești semnul lui b în formula x = (−b ± √Δ)/(2a).",
      "Nu știi ce înseamnă Δ < 0 (nicio soluție reală).",
      "Relațiile lui Viète (suma și produsul rădăcinilor) nu îți spun nimic.",
    ],
    lipsa: ["formule-calcul-prescurtat", "radicali"],
    explicatie: [
      "Forma generală: ax² + bx + c = 0, a ≠ 0. Discriminantul Δ = b² − 4ac decide: Δ > 0 → două soluții reale diferite; Δ = 0 → o soluție dublă; Δ < 0 → nicio soluție reală.",
      "Soluțiile: x₁,₂ = (−b ± √Δ) / (2a). Atenție la semne: dacă b = −5, atunci −b = 5.",
      "Scurtături: dacă c = 0, dai factor comun x; dacă b = 0, rezolvi x² = −c/a; dacă găsești ușor două numere cu suma −b/a și produsul c/a, acelea sunt rădăcinile (relațiile lui Viète).",
    ],
    exemplu: {
      enunt: "Rezolvă x² − 5x + 6 = 0.",
      pasi: [
        "a = 1, b = −5, c = 6. Δ = (−5)² − 4 × 1 × 6 = 25 − 24 = 1.",
        "x₁,₂ = (5 ± 1) / 2 → x₁ = 3, x₂ = 2.",
        "Verificare cu Viète: 3 + 2 = 5 = −b/a și 3 × 2 = 6 = c/a. ✔",
      ],
      raspuns: "x ∈ {2, 3}",
    },
    verificare: {
      intrebare: "Câte soluții reale are ecuația x² + 2x + 5 = 0?",
      optiuni: ["Două", "Una", "Niciuna", "O infinitate"],
      corect: 2,
      explicatie: "Δ = 4 − 20 = −16 < 0, deci nu există soluții reale.",
    },
    urmeaza: ["inecuatii-semnul-functiei", "numere-complexe", "functii-generalitati"],
    nivelCerere: "Liceu",
  },
  {
    slug: "inecuatii-semnul-functiei",
    materie: "matematica",
    clase: [9, 10],
    titlu: "Inecuații și semnul funcției de gradul I și II",
    blocaj:
      "Rezolv ecuația, dar nu știu să scriu mulțimea soluțiilor pentru x² − 4 > 0 sau (x − 1)(x + 3) ≤ 0.",
    simptome: [
      "Împarți o inecuație la un număr negativ fără să inversezi semnul.",
      "Nu știi să faci tabelul de semn.",
      "Scrii soluția ca un număr, nu ca un interval.",
    ],
    lipsa: ["ecuatia-gradul-2"],
    explicatie: [
      "Semnul funcției de gradul I f(x) = ax + b: zero în x = −b/a, semn contrar lui a la stânga rădăcinii și semnul lui a la dreapta.",
      "Semnul funcției de gradul II f(x) = ax² + bx + c cu Δ > 0: semnul lui a în afara rădăcinilor, semn contrar lui a între rădăcini. Dacă Δ < 0, funcția are peste tot semnul lui a.",
      "Pentru o inecuație: aduci totul într-un membru, afli rădăcinile, faci tabelul de semn și citești intervalele cerute. Verifică mereu dacă inegalitatea este strictă (paranteze rotunde) sau nestrictă (paranteze pătrate la rădăcini).",
    ],
    exemplu: {
      enunt: "Rezolvă inecuația x² − 4 > 0.",
      pasi: [
        "Rădăcinile: x² − 4 = 0 → x = −2 sau x = 2.",
        "a = 1 > 0, deci funcția este pozitivă în afara rădăcinilor și negativă între ele.",
        "Soluția: x ∈ (−∞, −2) ∪ (2, +∞). Intervale deschise, pentru că inegalitatea este strictă.",
      ],
      raspuns: "x ∈ (−∞, −2) ∪ (2, +∞)",
    },
    verificare: {
      intrebare: "Mulțimea soluțiilor inecuației −2x + 6 ≥ 0 este:",
      optiuni: ["[3, +∞)", "(−∞, 3]", "(−∞, −3]", "[−3, +∞)"],
      corect: 1,
      explicatie: "−2x ≥ −6, iar la împărțirea cu −2 se inversează semnul: x ≤ 3.",
    },
    urmeaza: ["functii-generalitati", "limite-de-functii"],
    nivelCerere: "Liceu",
  },
  {
    slug: "functii-generalitati",
    materie: "matematica",
    clase: [9, 10],
    titlu: "Funcții: domeniu, monotonie, citirea graficului",
    blocaj:
      "Nu înțeleg ce înseamnă domeniul de definiție, funcție crescătoare sau cum citesc informații de pe un grafic.",
    simptome: [
      "Nu excluzi din domeniu valorile care anulează numitorul sau fac radicalul negativ.",
      "Confunzi f(x) = 0 cu f(0).",
      "Nu poți spune dintr-un grafic pe ce interval funcția crește.",
    ],
    lipsa: ["functii-liniare", "inecuatii-semnul-functiei"],
    explicatie: [
      "Domeniul de definiție este mulțimea valorilor lui x pentru care formula are sens: numitorul ≠ 0, expresia de sub radical de ordin par ≥ 0, argumentul logaritmului > 0.",
      "f este crescătoare pe un interval dacă pentru x₁ < x₂ avem f(x₁) ≤ f(x₂) (graficul „urcă” citit de la stânga la dreapta); descrescătoare dacă graficul coboară.",
      "Pe grafic: intersecția cu Ox sunt punctele cu f(x) = 0 (zerourile); intersecția cu Oy este punctul (0, f(0)); maximul sau minimul este cel mai înalt sau cel mai jos punct.",
    ],
    exemplu: {
      enunt: "Află domeniul de definiție al funcției f(x) = √(x − 2) / (x − 5).",
      pasi: [
        "Radicalul: x − 2 ≥ 0 → x ≥ 2.",
        "Numitorul: x − 5 ≠ 0 → x ≠ 5.",
        "Domeniul: [2, 5) ∪ (5, +∞).",
      ],
      raspuns: "D = [2, 5) ∪ (5, +∞)",
    },
    verificare: {
      intrebare: "Domeniul maxim de definiție al funcției f(x) = 1/(x² − 9) este:",
      optiuni: ["ℝ", "ℝ \\ {3}", "ℝ \\ {−3, 3}", "(−3, 3)"],
      corect: 2,
      explicatie: "x² − 9 = 0 pentru x = 3 și x = −3; ambele se exclud.",
    },
    urmeaza: ["limite-de-functii", "logaritmi", "trigonometrie"],
    nivelCerere: "Liceu",
  },
  {
    slug: "progresii",
    materie: "matematica",
    clase: [9],
    titlu: "Progresii aritmetice și geometrice",
    blocaj:
      "Nu știu cum aflu al n-lea termen sau suma primilor n termeni și confund rația de la cele două progresii.",
    simptome: [
      "Nu recunoști tipul progresiei din primii termeni.",
      "Aplici formula sumei de la progresia aritmetică la cea geometrică.",
      "Te încurci la indicii termenilor (aₙ vs. aₙ₊₁).",
    ],
    lipsa: ["calcul-algebric", "puteri"],
    explicatie: [
      "Progresie aritmetică: fiecare termen se obține adunând aceeași rație r. aₙ = a₁ + (n − 1)r, iar Sₙ = (a₁ + aₙ) × n / 2. Test: diferența între termeni consecutivi este constantă.",
      "Progresie geometrică: fiecare termen se obține înmulțind cu aceeași rație q. bₙ = b₁ × qⁿ⁻¹, iar Sₙ = b₁(qⁿ − 1)/(q − 1) pentru q ≠ 1. Test: raportul între termeni consecutivi este constant.",
      "Proprietăți utile: într-o progresie aritmetică termenul din mijloc este media aritmetică a vecinilor; într-una geometrică, pătratul lui este produsul vecinilor.",
    ],
    exemplu: {
      enunt: "Progresia aritmetică are a₁ = 3 și r = 4. Află a₁₀ și S₁₀.",
      pasi: ["a₁₀ = 3 + 9 × 4 = 39.", "S₁₀ = (3 + 39) × 10 / 2 = 42 × 5 = 210."],
      raspuns: "a₁₀ = 39, S₁₀ = 210",
    },
    verificare: {
      intrebare: "Într-o progresie geometrică b₁ = 2 și q = 3. Cât este b₅?",
      optiuni: ["14", "486", "162", "243"],
      corect: 2,
      explicatie: "b₅ = b₁ × q⁴ = 2 × 81 = 162.",
    },
    urmeaza: ["combinatorica", "limite-de-functii"],
    nivelCerere: "Liceu",
  },
  {
    slug: "trigonometrie",
    materie: "matematica",
    clase: [9, 10],
    titlu: "Trigonometrie: valori remarcabile și cercul trigonometric",
    blocaj:
      "Nu rețin sin, cos, tg pentru 30°, 45°, 60° și nu înțeleg cum devin negative în celelalte cadrane.",
    simptome: [
      "Confunzi sinusul cu cosinusul în triunghiul dreptunghic.",
      "Nu știi ce semn are cos 120°.",
      "Formula sin²x + cos²x = 1 nu îți spune cum afli cos x din sin x.",
    ],
    lipsa: ["teorema-pitagora", "radicali"],
    explicatie: [
      "În triunghiul dreptunghic: sin = cateta opusă / ipotenuză, cos = cateta alăturată / ipotenuză, tg = cateta opusă / cateta alăturată. Valorile remarcabile: sin 30° = 1/2, sin 45° = √2/2, sin 60° = √3/2; cosinusul le are în ordine inversă (cos 30° = √3/2, cos 60° = 1/2).",
      "Pe cercul trigonometric, cos este abscisa (x) și sin este ordonata (y) a punctului. De aici semnele: în cadranul II (90°–180°) cos < 0 și sin > 0; în cadranul III ambele negative; în IV sin < 0 și cos > 0.",
      "Reducerea la primul cadran: cos 120° = −cos 60° = −1/2, sin 150° = sin 30° = 1/2. Identitatea fundamentală sin²x + cos²x = 1 te lasă să afli una din valori din cealaltă (cu semnul dat de cadran).",
    ],
    exemplu: {
      enunt: "Știind că sin x = 3/5 și x ∈ (90°, 180°), află cos x și tg x.",
      pasi: [
        "cos²x = 1 − sin²x = 1 − 9/25 = 16/25 → cos x = ±4/5.",
        "x este în cadranul II, unde cos < 0 → cos x = −4/5.",
        "tg x = sin x / cos x = (3/5) / (−4/5) = −3/4.",
      ],
      raspuns: "cos x = −4/5, tg x = −3/4",
    },
    verificare: {
      intrebare: "Cât este sin 150°?",
      optiuni: ["−1/2", "√3/2", "1/2", "−√3/2"],
      corect: 2,
      explicatie:
        "150° = 180° − 30°, iar în cadranul II sinusul este pozitiv: sin 150° = sin 30° = 1/2.",
    },
    urmeaza: ["numere-complexe", "geometrie-analitica", "derivate"],
    nivelCerere: "Liceu",
  },
  {
    slug: "geometrie-analitica",
    materie: "matematica",
    clase: [10, 11],
    titlu: "Geometrie analitică: ecuația dreptei, pantă, distanțe",
    blocaj:
      "Nu știu să scriu ecuația unei drepte prin două puncte sau să verific dacă două drepte sunt paralele ori perpendiculare.",
    simptome: [
      "Nu știi ce reprezintă panta m în y = mx + n.",
      "Nu poți calcula distanța dintre două puncte.",
      "Confunzi condiția de paralelism (m₁ = m₂) cu cea de perpendicularitate (m₁ × m₂ = −1).",
    ],
    lipsa: ["functii-liniare", "teorema-pitagora"],
    explicatie: [
      "Panta dreptei prin A(x₁, y₁) și B(x₂, y₂) este m = (y₂ − y₁)/(x₂ − x₁): cât urcă dreapta pentru fiecare unitate la dreapta. Ecuația dreptei prin A cu panta m: y − y₁ = m(x − x₁).",
      "Distanța dintre A și B este Pitagora pe coordonate: AB = √((x₂ − x₁)² + (y₂ − y₁)²). Mijlocul lui AB are coordonatele ((x₁ + x₂)/2, (y₁ + y₂)/2).",
      "Drepte paralele ↔ pante egale; drepte perpendiculare ↔ produsul pantelor este −1. Trei puncte sunt coliniare dacă panta AB = panta BC.",
    ],
    exemplu: {
      enunt: "Scrie ecuația dreptei prin A(1, 2) și B(3, 8) și află lungimea AB.",
      pasi: [
        "m = (8 − 2)/(3 − 1) = 6/2 = 3.",
        "y − 2 = 3(x − 1) → y = 3x − 1.",
        "AB = √((3 − 1)² + (8 − 2)²) = √(4 + 36) = √40 = 2√10.",
      ],
      raspuns: "y = 3x − 1; AB = 2√10",
    },
    verificare: {
      intrebare: "Dreapta perpendiculară pe y = 2x + 1 are panta:",
      optiuni: ["2", "−2", "1/2", "−1/2"],
      corect: 3,
      explicatie: "m₁ × m₂ = −1 → 2 × m₂ = −1 → m₂ = −1/2.",
    },
    urmeaza: ["derivate"],
    nivelCerere: "Liceu",
  },
  {
    slug: "logaritmi",
    materie: "matematica",
    clase: [10],
    titlu: "Logaritmi și ecuații exponențiale",
    blocaj: "Nu înțeleg ce este un logaritm și nu știu să rezolv 2ˣ = 32 sau log₂(x) = 5.",
    simptome: [
      "Nu vezi legătura dintre 2⁵ = 32 și log₂ 32 = 5.",
      "Aduni logaritmii când trebuie să îi înmulțești (log(a × b) = log a + log b).",
      "Uiți condițiile de existență (argumentul > 0).",
    ],
    lipsa: ["puteri", "functii-generalitati"],
    explicatie: [
      "log_a b este exponentul la care trebuie ridicat a ca să obții b: log₂ 32 = 5 pentru că 2⁵ = 32. Logaritmul este operația inversă ridicării la putere, așa cum împărțirea este inversa înmulțirii.",
      "Proprietăți: log_a(xy) = log_a x + log_a y; log_a(x/y) = log_a x − log_a y; log_a(xⁿ) = n log_a x; log_a a = 1; log_a 1 = 0. Condiții: a > 0, a ≠ 1, argumentul > 0.",
      "Ecuații exponențiale: aduci ambii membri la aceeași bază și egalezi exponenții (2ˣ = 32 = 2⁵ → x = 5). Ecuații logaritmice: pui condițiile de existență, apoi transformi în ecuație exponențială.",
    ],
    exemplu: {
      enunt: "Rezolvă log₃(x − 1) = 2.",
      pasi: [
        "Condiție de existență: x − 1 > 0 → x > 1.",
        "Definiție: x − 1 = 3² = 9.",
        "x = 10, care verifică x > 1.",
      ],
      raspuns: "x = 10",
    },
    verificare: {
      intrebare: "Cât este log₂ 8 + log₂ 4?",
      optiuni: ["12", "5", "32", "3"],
      corect: 1,
      explicatie:
        "log₂ 8 = 3 și log₂ 4 = 2, deci suma este 5. Echivalent: log₂(8 × 4) = log₂ 32 = 5.",
    },
    urmeaza: ["limite-de-functii", "derivate"],
    nivelCerere: "Liceu",
  },
  {
    slug: "numere-complexe",
    materie: "matematica",
    clase: [10],
    titlu: "Numere complexe: forma algebrică",
    blocaj: "Nu înțeleg ce este i și cum împart două numere complexe.",
    simptome: [
      "Nu știi că i² = −1 și calculezi greșit i³, i⁴.",
      "La împărțire nu amplifici cu conjugatul.",
      "Nu poți afla modulul unui număr complex.",
    ],
    lipsa: ["ecuatia-gradul-2", "radicali"],
    explicatie: [
      "i este numărul cu proprietatea i² = −1. Un număr complex are forma z = a + bi, cu a partea reală și b partea imaginară. Puterile lui i se repetă din 4 în 4: i¹ = i, i² = −1, i³ = −i, i⁴ = 1.",
      "Adunarea și înmulțirea se fac ca la calcul algebric, înlocuind i² cu −1. Conjugatul lui z = a + bi este z̄ = a − bi, iar z × z̄ = a² + b² (număr real).",
      "Împărțirea: amplifici cu conjugatul numitorului ca să obții un numitor real. Modulul: |z| = √(a² + b²).",
    ],
    exemplu: {
      enunt: "Calculează (3 + 2i) / (1 − i).",
      pasi: [
        "Amplifică cu conjugatul 1 + i: (3 + 2i)(1 + i) / ((1 − i)(1 + i)).",
        "Numitorul: 1² − i² = 1 + 1 = 2.",
        "Numărătorul: 3 + 3i + 2i + 2i² = 3 + 5i − 2 = 1 + 5i.",
        "Rezultatul: (1 + 5i)/2 = 1/2 + (5/2)i.",
      ],
      raspuns: "1/2 + (5/2)i",
    },
    verificare: {
      intrebare: "Cât este (2 + i)(2 − i)?",
      optiuni: ["3", "5", "4 − i²", "4 + 4i"],
      corect: 1,
      explicatie: "Diferență de pătrate: 4 − i² = 4 − (−1) = 5.",
    },
    urmeaza: ["matrici-determinanti"],
    nivelCerere: "Liceu",
  },
  {
    slug: "combinatorica",
    materie: "matematica",
    clase: [10],
    titlu: "Combinatorică: permutări, aranjamente, combinări",
    blocaj: "Nu știu când contează ordinea și când nu, deci nu știu ce formulă aleg.",
    simptome: [
      "Folosești combinări când problema cere aranjamente (sau invers).",
      "Nu știi să calculezi rapid cu factoriale (5!/3!).",
      "Problemele de tip „câte numere de 3 cifre distincte…” te blochează.",
    ],
    lipsa: ["puteri"],
    explicatie: [
      "n! = 1 × 2 × … × n este numărul de moduri în care poți ordona n obiecte (permutări). 0! = 1 prin convenție.",
      "Aranjamente A(n, k) = n!/(n − k)!: alegi k obiecte din n ȘI ordinea contează (podium, parole, numere formate din cifre). Combinări C(n, k) = n!/(k!(n − k)!): alegi k obiecte din n și ordinea NU contează (echipe, comisii, submulțimi).",
      "Întrebarea-cheie: dacă schimb ordinea elementelor alese, obțin altceva? Da → aranjamente; nu → combinări. Dacă aleg toate elementele și doar le ordonez → permutări.",
    ],
    exemplu: {
      enunt:
        "Dintr-o clasă de 10 elevi se alege un comitet de 3. Câte comitete sunt posibile? Dar dacă cei 3 ocupă funcții diferite (președinte, secretar, casier)?",
      pasi: [
        "Comitet fără funcții: ordinea nu contează → C(10, 3) = 10!/(3! × 7!) = (10 × 9 × 8)/(3 × 2 × 1) = 120.",
        "Cu funcții distincte: ordinea contează → A(10, 3) = 10 × 9 × 8 = 720.",
        "Observă: 720 = 120 × 3!, fiecare comitet poate fi ordonat în 6 moduri.",
      ],
      raspuns: "120 comitete; 720 cu funcții",
    },
    verificare: {
      intrebare: "Câte numere de trei cifre distincte se pot forma cu cifrele 1, 2, 3, 4, 5?",
      optiuni: ["10", "125", "60", "15"],
      corect: 2,
      explicatie: "Ordinea contează (123 ≠ 321): A(5, 3) = 5 × 4 × 3 = 60.",
    },
    urmeaza: ["matrici-determinanti"],
    nivelCerere: "Liceu",
  },
  {
    slug: "matrici-determinanti",
    materie: "matematica",
    clase: [11],
    titlu: "Matrici și determinanți",
    blocaj:
      "Nu știu să înmulțesc două matrici și nu înțeleg cum se calculează un determinant de ordin 3.",
    simptome: [
      "Înmulțești element cu element (ca la adunare).",
      "Nu știi că A × B ≠ B × A în general.",
      "La determinantul de ordin 3 pierzi termeni sau semne.",
    ],
    lipsa: ["sisteme-ecuatii", "numere-complexe"],
    explicatie: [
      "Înmulțirea A × B există doar dacă numărul de coloane ale lui A = numărul de linii ale lui B. Elementul de pe linia i, coloana j al produsului este „linia i din A înmulțită scalar cu coloana j din B”.",
      "Determinantul de ordin 2: |a b; c d| = ad − bc. Pentru ordin 3 folosești regula lui Sarrus (copiezi primele două coloane în dreapta și aduni produsele de pe diagonalele „principale” minus cele de pe diagonalele „secundare”) sau dezvoltarea după o linie.",
      "Determinantul spune dacă o matrice este inversabilă (det ≠ 0) și dacă un sistem liniar are soluție unică (regula lui Cramer).",
    ],
    exemplu: {
      enunt: "Calculează determinantul matricei cu liniile (1, 2, 3), (0, 1, 4), (5, 6, 0).",
      pasi: [
        "Sarrus, produsele „principale”: 1×1×0 + 2×4×5 + 3×0×6 = 0 + 40 + 0 = 40.",
        "Produsele „secundare”: 3×1×5 + 1×4×6 + 2×0×0 = 15 + 24 + 0 = 39.",
        "det = 40 − 39 = 1.",
      ],
      raspuns: "det = 1",
    },
    verificare: {
      intrebare: "Determinantul matricei cu liniile (2, 3) și (1, 4) este:",
      optiuni: ["11", "5", "−5", "10"],
      corect: 1,
      explicatie: "2 × 4 − 3 × 1 = 8 − 3 = 5.",
    },
    urmeaza: ["limite-de-functii"],
    nivelCerere: "Liceu",
  },
  {
    slug: "limite-de-functii",
    materie: "matematica",
    clase: [11],
    titlu: "Limite de funcții și cazurile de nedeterminare",
    blocaj: "Când înlocuiesc obțin 0/0 sau ∞/∞ și nu știu ce să fac mai departe.",
    simptome: [
      "Crezi că 0/0 înseamnă că limita nu există.",
      "Nu știi să dai factor comun forțat la ∞/∞.",
      "Nu recunoști limitele remarcabile (sin x / x → 1 când x → 0).",
    ],
    lipsa: ["functii-generalitati", "formule-calcul-prescurtat", "progresii"],
    explicatie: [
      "Primul pas este mereu înlocuirea directă. Dacă obții un număr, aceea este limita. Dacă obții 0/0, ∞/∞, ∞ − ∞, 0 × ∞, ai un caz de nedeterminare: NU înseamnă că limita nu există, ci că trebuie transformată expresia.",
      "0/0 la fracții de polinoame: descompui în factori și simplifici factorul care se anulează. ∞/∞ la polinoame: dai factor comun forțat puterea cea mai mare a lui x la numărător și la numitor; limita depinde doar de gradele și coeficienții dominanți.",
      "Limite remarcabile de ținut minte: sin x / x → 1, (1 + 1/x)ˣ → e când x → ∞, ln(1 + x)/x → 1, (eˣ − 1)/x → 1 când x → 0.",
    ],
    exemplu: {
      enunt: "Calculează lim (x → 2) (x² − 4)/(x − 2).",
      pasi: [
        "Înlocuire directă: (4 − 4)/(2 − 2) = 0/0 — nedeterminare.",
        "Descompune: x² − 4 = (x − 2)(x + 2).",
        "Simplifică cu (x − 2): limita devine lim (x → 2) (x + 2) = 4.",
      ],
      raspuns: "4",
    },
    verificare: {
      intrebare: "Cât este lim (x → ∞) (3x² + x)/(x² − 5)?",
      optiuni: ["0", "3", "∞", "−3/5"],
      corect: 1,
      explicatie:
        "Grade egale la numărător și numitor → limita este raportul coeficienților dominanți: 3/1 = 3.",
    },
    urmeaza: ["derivate"],
    nivelCerere: "Liceu",
  },
  {
    slug: "derivate",
    materie: "matematica",
    clase: [11, 12],
    titlu: "Derivate: reguli de calcul și aplicații",
    blocaj:
      "Nu rețin formulele de derivare și nu știu să aplic regula produsului, a câtului sau a funcției compuse.",
    simptome: [
      "Derivezi un produs ca pe o sumă ((fg)' = f'g' — greșit).",
      "La funcții compuse uiți să înmulțești cu derivata „interiorului”.",
      "Nu știi ce legătură este între semnul derivatei și monotonia funcției.",
    ],
    lipsa: ["limite-de-functii", "trigonometrie", "logaritmi", "geometrie-analitica"],
    explicatie: [
      "Derivata măsoară viteza de variație: f'(x₀) este panta tangentei la grafic în x₀. Formule de bază: (xⁿ)' = n xⁿ⁻¹, (eˣ)' = eˣ, (ln x)' = 1/x, (sin x)' = cos x, (cos x)' = −sin x, (c)' = 0.",
      "Reguli: (f + g)' = f' + g'; (c f)' = c f'; (f g)' = f'g + f g'; (f/g)' = (f'g − f g')/g²; funcție compusă: (f(g(x)))' = f'(g(x)) × g'(x) — derivezi „exteriorul”, apoi înmulțești cu derivata „interiorului”.",
      "Aplicații: f' > 0 pe un interval → f crescătoare; f' < 0 → descrescătoare; punctele în care f' se anulează și își schimbă semnul sunt puncte de extrem (maxim sau minim).",
    ],
    exemplu: {
      enunt: "Derivează f(x) = x² × eˣ și g(x) = sin(3x² + 1).",
      pasi: [
        "f este produs: f' = (x²)' × eˣ + x² × (eˣ)' = 2x eˣ + x² eˣ = eˣ(x² + 2x).",
        "g este funcție compusă: exteriorul sin, interiorul 3x² + 1.",
        "g' = cos(3x² + 1) × (3x² + 1)' = 6x cos(3x² + 1).",
      ],
      raspuns: "f' = eˣ(x² + 2x); g' = 6x cos(3x² + 1)",
    },
    verificare: {
      intrebare: "Derivata funcției f(x) = ln(x² + 1) este:",
      optiuni: ["1/(x² + 1)", "2x/(x² + 1)", "2x ln(x² + 1)", "1/(2x)"],
      corect: 1,
      explicatie: "(ln u)' = u'/u cu u = x² + 1 și u' = 2x.",
    },
    urmeaza: ["integrale"],
    nivelCerere: "Bacalaureat",
  },
  {
    slug: "integrale",
    materie: "matematica",
    clase: [12],
    titlu: "Primitive și integrale definite",
    blocaj:
      "Nu știu să găsesc primitiva unei funcții și nu înțeleg cum se aplică formula Leibniz–Newton.",
    simptome: [
      "Uiți constanta C la primitive sau uiți să împarți la noul exponent.",
      "Nu vezi că integrarea este inversa derivării.",
      "La integrala definită calculezi F(a) − F(b) în loc de F(b) − F(a).",
    ],
    lipsa: ["derivate"],
    explicatie: [
      "F este primitiva lui f dacă F' = f. De aceea tabelul de primitive este tabelul de derivate citit invers: ∫xⁿ dx = xⁿ⁺¹/(n + 1) + C (n ≠ −1), ∫1/x dx = ln|x| + C, ∫eˣ dx = eˣ + C, ∫cos x dx = sin x + C, ∫sin x dx = −cos x + C.",
      "Formula Leibniz–Newton: ∫ₐᵇ f(x) dx = F(b) − F(a). Integrala definită este un număr (aria cu semn dintre grafic și axa Ox), nu o funcție.",
      "Verificare rapidă: derivează primitiva găsită — trebuie să obții exact funcția de sub integrală.",
    ],
    exemplu: {
      enunt: "Calculează ∫₀² (3x² + 2x) dx.",
      pasi: [
        "Primitiva: F(x) = x³ + x² (verificare: F' = 3x² + 2x ✔).",
        "F(2) = 8 + 4 = 12; F(0) = 0.",
        "Integrala = 12 − 0 = 12.",
      ],
      raspuns: "12",
    },
    verificare: {
      intrebare: "Cât este ∫₁ᵉ (1/x) dx?",
      optiuni: ["e − 1", "1", "0", "ln e − 1"],
      corect: 1,
      explicatie: "Primitiva lui 1/x este ln x; ln e − ln 1 = 1 − 0 = 1.",
    },
    urmeaza: [],
    nivelCerere: "Bacalaureat",
  },
];

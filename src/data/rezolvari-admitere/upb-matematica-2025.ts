import type { RezolvareAdmitere } from "@/data/rezolvari-verificate/types";

const VERIFICA = "python3 -I scripts/verificare-rezolvari/admitere-upb-matematica-2025/verifica.py";

export const UPB_MATEMATICA_2025: RezolvareAdmitere = {
  examen: "admitere",
  universitate: "upb",
  universitateNume: "Universitatea Națională de Știință și Tehnologie POLITEHNICA București",
  materie: "matematica",
  an: 2025,
  sesiune: "iulie",
  proba:
    "Chestionar de concurs — Algebră și Elemente de Analiză Matematică (AAM), Varianta S, 14 iulie 2025",
  programa:
    "Admitere UNSTPB: Algebră și Elemente de Analiză Matematică, test grilă cu 6 variante de răspuns",
  varianta: null,
  specializare: "admitere",
  titlu:
    "Rezolvare admitere Politehnica București 2025 (iulie), Matematică AAM Varianta S — pas cu pas",
  descriere:
    "Rezolvarea completă, explicată pas cu pas, a chestionarului de admitere UNSTPB din 14 iulie 2025 la Algebră și Elemente de Analiză Matematică, Varianta S: ecuații exponențiale, combinări, progresii, determinanți, derivate, limite, arii cu asimptote, relațiile lui Viète, parte întreagă și ecuații cu module. Toate cele 10 răspunsuri au fost verificate simbolic.",
  status: "publicat",
  dificultate: "mediu",
  timpMinute: 180,
  actualizat: "2026-10-23",
  documente: {
    subiect: "upb/matematica/2025-iulie-subiect.pdf",
    sursaUrl:
      "http://www.physics.pub.ro/Admitere/2025/Algebra_si_Elemente_de_Analiza_Matematica_AAM_(Varianta_S).pdf",
    notaBarem:
      "Nu afișăm aici o grilă oficială de răspunsuri. Rezolvarea de mai jos este a noastră, verificată independent, și nu înlocuiește baremul publicat de universitate.",
  },
  sursa: {
    emitent: "Universitatea Națională de Știință și Tehnologie POLITEHNICA București",
    detalii:
      "Chestionar de concurs, disciplina Algebră și Elemente de Analiză Matematică (AAM), Varianta S, 14 iulie 2025 (antetul documentului oficial).",
  },
  verificari: [
    {
      ce: "Toate cele 10 răspunsuri: fiecare rezultat este calculat independent și trebuie să coincidă cu exact una dintre cele 6 variante tipărite, anume cea indicată în rezolvare (inclusiv căutare exhaustivă la itemul 9 și analiza pe porțiuni la itemul 10)",
      metoda: "Calcul simbolic cu SymPy (Python 3)",
      comanda: VERIFICA,
      data: "2026-10-23",
      rezultat: "PASS",
    },
  ],
  punctajTotal: 90,
  notaPunctaj:
    "Fiecare dintre cele 10 itemi are tipărit „9 pct.”, deci itemii însumează 90 de puncte (subiectul nu tipărește un punctaj din oficiu). Fiecare item are un singur răspuns corect din cele 6 variante a)–f).",
  sectiuni: [
    {
      titlu: "Chestionar — Varianta S",
      puncte: 90,
      itemi: [
        {
          id: "q1",
          eticheta: "Problema 1",
          puncte: 9,
          cerinta: "Soluția ecuației 2ˣ⁺¹ + 2ˣ = 12.",
          ceSeCere: "Să găsești x scoțând factor comun puterea 2ˣ.",
          notiuni: [
            "proprietățile puterilor",
            "ecuații exponențiale",
            "injectivitatea funcției exponențiale",
          ],
          pasi: [
            "2ˣ⁺¹ = 2 · 2ˣ, deci membrul stâng devine 2 · 2ˣ + 2ˣ = 3 · 2ˣ.",
            "3 · 2ˣ = 12 ⇒ 2ˣ = 4 = 2².",
            "Funcția exponențială este injectivă, deci x = 2.",
          ],
          raspuns: "**a) x = 2**",
          verificare:
            "SymPy rezolvă 2ˣ⁺¹ + 2ˣ − 12 = 0 și întoarce o singură soluție, x = 2; controlul direct: 2³ + 2² = 8 + 4 = 12.",
          greseli: [
            "Scrierea 2ˣ⁺¹ + 2ˣ = 2²ˣ⁺¹ (puterile nu se adună așa).",
            "Confuzia 2ˣ⁺¹ = 2ˣ + 1.",
          ],
        },
        {
          id: "q2",
          eticheta: "Problema 2",
          puncte: 9,
          cerinta: "Numărul natural n pentru care C(n, 2) = 6.",
          ceSeCere: "Să scrii formula combinărilor și să rezolvi ecuația de gradul al doilea în n.",
          notiuni: [
            "combinări: C(n, 2) = n(n − 1)/2",
            "condiția n ≥ 2",
            "ecuația de gradul al doilea",
          ],
          pasi: [
            "Condiție: n natural, n ≥ 2.",
            "C(n, 2) = n(n − 1)/2 = 6 ⇒ n(n − 1) = 12 ⇒ n² − n − 12 = 0.",
            "Δ = 1 + 48 = 49, rădăcinile sunt n = 4 și n = −3.",
            "Doar n = 4 respectă condiția.",
          ],
          raspuns: "**a) n = 4**",
          verificare:
            "SymPy: rădăcinile lui n(n − 1)/2 − 6 sunt −3 și 4; doar 4 este natural ≥ 2, iar binomial(4, 2) = 6.",
          greseli: ["Folosirea aranjamentelor A(n, 2) = n(n − 1) = 6, de unde n = 3 (varianta c)."],
        },
        {
          id: "q3",
          eticheta: "Problema 3",
          puncte: 9,
          cerinta: "(aₙ) progresie aritmetică cu rația r = 3 și a₃ = 7. Calculați a₅.",
          ceSeCere: "Să treci de la al treilea termen la al cincilea adăugând rația de două ori.",
          notiuni: ["progresie aritmetică: aₙ = a₁ + (n − 1)r", "aₖ = aⱼ + (k − j)r"],
          pasi: ["a₅ = a₃ + 2r.", "a₅ = 7 + 2 · 3 = 13."],
          raspuns: "**a) 13**",
          verificare: "SymPy: din a₁ + 2 · 3 = 7 rezultă a₁ = 1, deci a₅ = 1 + 4 · 3 = 13.",
          greseli: ["Adunarea rației o singură dată (a₅ = 10, varianta b)."],
        },
        {
          id: "q4",
          eticheta: "Problema 4",
          puncte: 9,
          cerinta:
            "Rezolvați ecuația |x 6; 1 2| = 0 (determinant de ordinul 2, linia 1: x, 6; linia 2: 1, 2).",
          ceSeCere: "Să calculezi determinantul și să-l egalezi cu 0.",
          notiuni: ["determinantul de ordinul 2: ad − bc"],
          pasi: ["Determinantul este x · 2 − 6 · 1 = 2x − 6.", "2x − 6 = 0 ⇒ x = 3."],
          raspuns: "**a) x = 3**",
          verificare: "SymPy calculează det = 2x − 6 și o singură soluție, x = 3.",
          greseli: ["Înmulțirea pe aceeași linie în loc de diagonale: 6x − 2 = 0."],
        },
        {
          id: "q5",
          eticheta: "Problema 5",
          puncte: 9,
          cerinta: "f: ℝ → ℝ, f(x) = eˣ + x². Calculați f′(1).",
          ceSeCere: "Să derivezi și să înlocuiești x = 1.",
          notiuni: ["(eˣ)′ = eˣ", "(xⁿ)′ = n·xⁿ⁻¹", "derivata sumei"],
          pasi: ["f′(x) = eˣ + 2x.", "f′(1) = e + 2."],
          raspuns: "**a) e + 2**",
          verificare: "SymPy: diff(eˣ + x², x) evaluat în 1 dă e + 2, egal doar cu varianta a).",
          greseli: ["Calculul lui f(1) = e + 1 în loc de f′(1) (varianta f)."],
        },
        {
          id: "q6",
          eticheta: "Problema 6",
          puncte: 9,
          cerinta: "Calculați l = lim (x → 2) (x² − 3x + 2)/(x − 2).",
          ceSeCere: "Să ridici nedeterminarea 0/0 prin descompunere în factori.",
          notiuni: ["nedeterminarea 0/0", "descompunerea trinomului de gradul al doilea"],
          pasi: [
            "Pentru x = 2 numărătorul și numitorul sunt 0: nedeterminare 0/0.",
            "x² − 3x + 2 = (x − 1)(x − 2).",
            "Simplificăm cu x − 2 (x ≠ 2): limita devine lim (x → 2) (x − 1) = 1.",
          ],
          raspuns: "**a) l = 1**",
          verificare:
            "SymPy calculează limita direct: 1. Același rezultat dă și regula lui l'Hôpital: (2x − 3) în 2 = 1.",
          greseli: ["Declararea limitei 0 pentru că numărătorul se anulează în 2."],
        },
        {
          id: "q7",
          eticheta: "Problema 7",
          puncte: 9,
          cerinta:
            "f: (1, ∞) → ℝ, f(x) = x + 1/(x − 1). Aria suprafeței plane dintre graficul lui f, asimptota oblică și dreptele x = 2, x = 3.",
          ceSeCere:
            "Să găsești asimptota oblică și să integrezi diferența dintre f și ea pe [2, 3].",
          notiuni: [
            "asimptota oblică y = mx + n: m = lim f(x)/x, n = lim (f(x) − mx)",
            "aria dintre două grafice: ∫ |f − g|",
            "∫ 1/(x − 1) dx = ln|x − 1|",
          ],
          pasi: [
            "m = lim (x → ∞) f(x)/x = lim (1 + 1/(x(x − 1))) = 1.",
            "n = lim (x → ∞) (f(x) − x) = lim 1/(x − 1) = 0, deci asimptota oblică este y = x.",
            "Pe [2, 3]: f(x) − x = 1/(x − 1) > 0, deci graficul este deasupra asimptotei.",
            "Aria = ∫₂³ 1/(x − 1) dx = ln(x − 1) |₂³ = ln 2 − ln 1 = ln 2.",
          ],
          raspuns: "**a) ln 2**",
          verificare:
            "SymPy: limitele dau m = 1, n = 0; minimul lui f(x) − x pe [2, 3] este pozitiv, iar ∫₂³ (f(x) − x) dx = ln 2.",
          greseli: [
            "Integrarea lui f în loc de f − asimptotă.",
            "Calculul ln(x − 1) între 2 și 3 ca ln 3 − ln 2 (uitând de „− 1”).",
          ],
        },
        {
          id: "q8",
          eticheta: "Problema 8",
          puncte: 9,
          cerinta:
            "x₁, x₂, x₃ sunt rădăcinile lui f = X³ + mX + 6, m < 0. Dacă x₁⁴ + x₂⁴ + x₃⁴ = 98, calculați |x₁| + |x₂| + |x₃|.",
          ceSeCere: "Să exprimi suma puterilor a patra prin m, să afli m, apoi rădăcinile.",
          notiuni: [
            "relațiile lui Viète",
            "sume de puteri ale rădăcinilor",
            "descompunerea polinomului",
          ],
          pasi: [
            "Viète: s₁ = x₁ + x₂ + x₃ = 0, s₂ = x₁x₂ + x₁x₃ + x₂x₃ = m, s₃ = x₁x₂x₃ = −6.",
            "x₁² + x₂² + x₃² = s₁² − 2s₂ = −2m.",
            "Σ(xᵢxⱼ)² = s₂² − 2·s₁·s₃ = m² (pentru că s₁ = 0).",
            "Σxᵢ⁴ = (Σxᵢ²)² − 2·Σ(xᵢxⱼ)² = 4m² − 2m² = 2m².",
            "2m² = 98 ⇒ m² = 49, iar din m < 0 rezultă m = −7.",
            "f = X³ − 7X + 6; f(1) = 0, deci f = (X − 1)(X² + X − 6) = (X − 1)(X − 2)(X + 3).",
            "Rădăcinile sunt 1, 2, −3, iar |1| + |2| + |−3| = 6.",
          ],
          raspuns: "**a) 6**",
          verificare:
            "SymPy: identitățile lui Newton dau Σxᵢ⁴ = 2m²; singura soluție negativă este m = −7; rădăcinile lui X³ − 7X + 6 sunt −3, 1, 2 (cu 81 + 1 + 16 = 98), iar suma modulelor este 6.",
          greseli: [
            "Răspunsul 0, adică x₁ + x₂ + x₃, uitând de module (varianta d).",
            "Ignorarea condiției m < 0 (m = 7 dă alt polinom, cu o singură rădăcină reală).",
          ],
        },
        {
          id: "q9",
          eticheta: "Problema 9",
          puncte: 9,
          cerinta:
            "Numărul soluțiilor reale ale ecuației [(2x − 1)/3] + [(4x + 1)/6] = (5x − 4)/3, unde [a] este partea întreagă a lui a.",
          ceSeCere:
            "Să observi că membrul drept trebuie să fie întreg, să mărginești acel întreg și să verifici fiecare caz.",
          notiuni: ["partea întreagă: a − 1 < [a] ≤ a", "substituția cu un număr întreg"],
          pasi: [
            "Membrul stâng e întreg, deci (5x − 4)/3 = k ∈ ℤ, adică x = (3k + 4)/5.",
            "Notăm A = (2x − 1)/3, B = (4x + 1)/6. Atunci A + B = (8x − 1)/6, iar cu x = (3k + 4)/5 obținem A + B = (8k + 9)/10.",
            "Din A − 1 < [A] ≤ A și B − 1 < [B] ≤ B: A + B − 2 < k ≤ A + B.",
            "k ≤ (8k + 9)/10 ⇒ 2k ≤ 9 ⇒ k ≤ 4; (8k + 9)/10 − 2 < k ⇒ −11 < 2k ⇒ k ≥ −5. Rămân k ∈ {−5, …, 4}.",
            "Verificăm fiecare k: k = −2 (x = −2/5): [−3/5] + [−1/10] = −1 − 1 = −2 ✓; k = −1 (x = 1/5): [−1/5] + [3/10] = −1 + 0 = −1 ✓; k = 0 (x = 4/5): [1/5] + [7/10] = 0 ✓; k = 1 (x = 7/5): [3/5] + [11/10] = 0 + 1 = 1 ✓; k = 2 (x = 2): [1] + [3/2] = 1 + 1 = 2 ✓.",
            "Celelalte valori nu merg: k = −5 dă −4, k = −4 dă −3, k = −3 dă −2, k = 3 dă 2, k = 4 dă 3.",
            "Soluțiile sunt x ∈ {−2/5, 1/5, 4/5, 7/5, 2}: 5 soluții.",
          ],
          raspuns: "**a) 5**",
          verificare:
            "Căutare exhaustivă cu numere raționale exacte (SymPy) pentru toate k între −1000 și 1000, mult peste margine: exact 5 soluții, −2/5, 1/5, 4/5, 7/5, 2.",
          greseli: [
            "Tratarea părții întregi ca pe o paranteză obișnuită (se obține o singură soluție).",
            "Verificarea doar a valorilor întregi ale lui x.",
          ],
        },
        {
          id: "q10",
          eticheta: "Problema 10",
          puncte: 9,
          cerinta:
            "Valoarea parametrului real m pentru care ecuația ||x − 1| − 2| − 3| = mx are o infinitate de soluții.",
          ceSeCere:
            "Să explicitezi funcția din stânga pe intervale și să găsești o porțiune de dreaptă care trece prin origine.",
          notiuni: [
            "explicitarea modulului",
            "funcții liniare pe porțiuni",
            "intersecția a două drepte",
          ],
          pasi: [
            "Fie g(x) = ||x − 1| − 2| − 3|. Explicităm din interior spre exterior.",
            "x ≤ −4: g(x) = −x − 4; −4 ≤ x ≤ −1: g(x) = x + 4; −1 ≤ x ≤ 1: g(x) = 2 − x.",
            "1 ≤ x ≤ 3: |x − 1| − 2 = x − 3 ≤ 0, deci ||x − 1| − 2| = 3 − x și g(x) = |−x| = x.",
            "3 ≤ x ≤ 6: g(x) = 6 − x; x ≥ 6: g(x) = x − 6.",
            "Dreapta y = mx trece prin origine. Dacă ea nu coincide cu nicio porțiune a graficului, intersectează fiecare porțiune în cel mult un punct, deci are un număr finit de soluții.",
            "Singura porțiune aflată pe o dreaptă prin origine este g(x) = x pe [1, 3] (celelalte au termen liber −4, 4, 2, 6, −6). Pentru m = 1 toate x ∈ [1, 3] sunt soluții.",
          ],
          raspuns: "**a) m = 1**",
          verificare:
            "SymPy: pe fiecare dintre cele 6 porțiuni am calculat panta și termenul liber; doar porțiunea [1, 3] are termen liber 0, cu panta 1. Control: g(x) = x pentru toate x = 1; 1,1; …; 3.",
          greseli: [
            "Desfacerea modulelor „deodată”, fără a ține cont de semnul fiecărei expresii.",
            "Alegerea pantei unei porțiuni care nu trece prin origine (de ex. m = −1 de pe 2 − x).",
          ],
        },
      ],
    },
  ],
};

import type { Lectie } from "./demo-repertoriu";

export const LECTII_BAC: Lectie[] = [
  {
    materie: "Matematică",
    nivel: "Evaluare Națională · clasa a VIII-a",
    sursa: "EN VIII 2023, sesiunea iunie, Varianta 1, subiectul III, problema 6.b — https://cdn.edupedu.ro/wp-content/uploads/2023/06/ENVIII_Matematica_2023_var_01_LRO.pdf (barem: https://cdn.edupedu.ro/wp-content/uploads/2023/06/ENVIII_Matematica_2023_bar_01_LRO.pdf)",
    replici: [
      { cine: "prof", text: "La Evaluarea Națională 2023, sesiunea iunie, subiectul III, problema 6: cubul ABCDA′B′C′D′ are muchia de 10 cm. Calculează distanța de la C la planul (BDC′).", tabla: "AB = 10 cm  →  d(C, (BDC′)) = ?" },
      { cine: "elev", text: "Păi distanța e chiar CC′, adică 10 centimetri." },
      { cine: "prof", text: "Nu: CC′ nu e perpendiculară pe planul (BDC′), doar îl atinge în C′. Ia O, centrul pătratului ABCD. Ce relație are BD cu CO și cu CC′?", tabla: "O = AC ∩ BD" },
      { cine: "elev", text: "BD e perpendiculară pe AC, deci pe CO, și pe CC′, care e perpendiculară pe bază." },
      { cine: "prof", text: "Deci BD ⊥ (CC′O). Ducem CP ⊥ C′O; atunci CP e perpendiculară și pe BD, deci pe tot planul. Calculează CO și C′O.", tabla: "BD ⊥ (CC′O), CP ⊥ C′O  ⇒  CP ⊥ (BDC′)" },
      { cine: "elev", text: "CO e jumătate din diagonală, 5√2 cm, iar C′O = √(50 + 100) = 5√6 cm." },
      { cine: "prof", text: "Corect. În triunghiul dreptunghic CC′O, CP e înălțimea din unghiul drept: produsul catetelor supra ipotenuză. Cât obții?", tabla: "CP = CO · CC′ / C′O" },
      { cine: "elev", text: "5√2 ori 10, supra 5√6, adică 10 supra √3, deci 10√3 supra 3 centimetri." },
      { cine: "prof", text: "Exact ca în barem: d(C, (BDC′)) = 10√3/3 cm. Greșeala clasică e să iei CC′, care nu e perpendiculară pe plan.", tabla: "d(C, (BDC′)) = 10√3/3 cm" },
    ],
  },
  {
    materie: "Matematică M1",
    nivel: "Bacalaureat · Analiză",
    sursa: "BAC 2019, M_mate-info, Varianta 8 (sesiunea nu e menționată în PDF), subiectul III.1 (b, c) — https://api.educato.com/storage/v1/object/public/past_exams/bac/Varianta%2008%202019%20MI.pdf",
    replici: [
      { cine: "prof", text: "La bacalaureatul din 2019, mate-info, varianta 8, subiectul III.1: f(x) = eˣ(x² + 4x + 1). Când are ecuația f(x) = a exact trei soluții reale?", tabla: "f(x) = eˣ(x² + 4x + 1);  f(x) = a are exact 3 soluții?" },
      { cine: "elev", text: "Întâi derivata: f′(x) = eˣ(2x + 4)?" },
      { cine: "prof", text: "Ai uitat că e un produs: se derivează și eˣ. Aplică regula (u·v)′ = u′v + uv′ și dă factor comun eˣ.", tabla: "(u·v)′ = u′v + uv′" },
      { cine: "elev", text: "f′(x) = eˣ(x² + 6x + 5), adică eˣ(x + 1)(x + 5)." },
      { cine: "prof", text: "Bun, asta cere și punctul b: tangenta e paralelă cu Ox în x = −5 și x = −1. Cum variază f?", tabla: "f′(x) = eˣ(x + 1)(x + 5) = 0 ⇔ x ∈ {−5, −1}" },
      { cine: "elev", text: "Crește până la −5, scade între −5 și −1, apoi crește iar." },
      { cine: "prof", text: "Acum valorile cheie: f(−5), f(−1) și limitele la −∞ și la +∞.", tabla: "x: −∞ ↗ −5 ↘ −1 ↗ +∞" },
      { cine: "elev", text: "f(−5) = 6/e⁵, f(−1) = −2/e; la −∞ tinde la 0, la +∞ tinde la +∞." },
      { cine: "prof", text: "Deci dreapta y = a taie graficul de trei ori doar între 0 și maximul local. Pentru a = 0 ai doar două soluții. Concluzia?", tabla: "lim(x→−∞) f(x) = 0⁺,  f(−5) = 6/e⁵,  f(−1) = −2/e" },
      { cine: "elev", text: "a aparține intervalului deschis de la 0 la 6/e⁵." },
    ],
  },
  {
    materie: "Matematică M1",
    nivel: "Bacalaureat · Integrale",
    sursa: "BAC 2019, M_mate-info, Varianta 8 (sesiunea nu e menționată în PDF), subiectul III.2.c — https://api.educato.com/storage/v1/object/public/past_exams/bac/Varianta%2008%202019%20MI.pdf",
    replici: [
      { cine: "prof", text: "La bacalaureatul din 2019, mate-info, varianta 8, subiectul III.2.c, ai datele în tablă. Află a > e dacă aria de sub graficul lui g, între e și a, este 2a.", tabla: "f:(1, +∞) → ℝ, f(x) = 1/ln x;  g = 1/f;  aria(g, Ox, x = e, x = a) = 2a,  a > e" },
      { cine: "elev", text: "Păi g(x) = ln x, iar aria e integrala lui ln x de la e la a." },
      { cine: "prof", text: "Corect, și ln x e pozitiv pe interval. Cum integrezi ln x? Nu e în tabelul de primitive.", tabla: "𝒜 = ∫ₑᵃ ln x dx" },
      { cine: "elev", text: "Prin părți: u = ln x, v′ = 1. Iese x ln x − x." },
      { cine: "prof", text: "Exact. Acum aplică Leibniz–Newton între e și a.", tabla: "∫ ln x dx = x ln x − x + C" },
      { cine: "elev", text: "a ln a − a, minus e. Deci aria e a ln a − a − e." },
      { cine: "prof", text: "Atenție la x = e: e·ln e − e = e − e = 0. Deci aria este doar a ln a − a.", tabla: "(x ln x − x)|ₓ₌ₑ = e − e = 0" },
      { cine: "elev", text: "Atunci a ln a − a = 2a, deci a ln a = 3a." },
      { cine: "prof", text: "Împarte la a, care e pozitiv. Ce obții?", tabla: "a ln a − a = 2a  ⇒  ln a = 3" },
      { cine: "elev", text: "ln a = 3, deci a = e³, care e într-adevăr mai mare decât e." },
    ],
  },
  {
    materie: "Matematică",
    nivel: "Bacalaureat · Probabilități",
    sursa: "BAC 2019, M_mate-info, Varianta 8 (sesiunea nu e menționată în PDF), subiectul I.4 — https://api.educato.com/storage/v1/object/public/past_exams/bac/Varianta%2008%202019%20MI.pdf",
    replici: [
      { cine: "prof", text: "La bacalaureatul din 2019, mate-info, varianta 8, subiectul I.4: alegi un număr n din mulțimea numerelor naturale de o cifră. Care e probabilitatea ca n(n + 1) ≥ 42?", tabla: "n ∈ ℕ, de o cifră;  P(n(n + 1) ≥ 42) = ?" },
      { cine: "elev", text: "Numerele de o cifră sunt de la 1 la 9, deci 9 cazuri posibile." },
      { cine: "prof", text: "Ai uitat de 0: e număr natural și are o cifră. Câte cazuri posibile ai, de fapt?", tabla: "{0, 1, 2, …, 9}" },
      { cine: "elev", text: "Atunci 10 cazuri posibile." },
      { cine: "prof", text: "Corect. Acum cazurile favorabile. Încearcă n = 5 și n = 6." },
      { cine: "elev", text: "5 ori 6 face 30, prea puțin. 6 ori 7 face 42, e bun." },
      { cine: "prof", text: "Și cum n(n + 1) crește odată cu n, care sunt toate cazurile favorabile?", tabla: "5·6 = 30 < 42;  6·7 = 42 ≥ 42" },
      { cine: "elev", text: "6, 7, 8 și 9, deci 4 cazuri favorabile." },
      { cine: "prof", text: "Deci probabilitatea, cazuri favorabile supra cazuri posibile?", tabla: "P = nr. cazuri favorabile / nr. cazuri posibile" },
      { cine: "elev", text: "P = 4/10, adică 2/5." },
    ],
  },
  {
    materie: "Informatică",
    nivel: "Bacalaureat · Algoritmi",
    sursa: "BAC 2023, sesiunea august, Informatică MI C/C++, Varianta 7, subiectul II.1.a — https://cdn.edupedu.ro/wp-content/uploads/2023/08/E_d_Informatica_2023_sp_MI_C_var_07_LRO.pdf (barem: https://cdn.edupedu.ro/wp-content/uploads/2023/08/E_d_Informatica_2023_sp_MI_bar_07_LRO.pdf)",
    replici: [
      { cine: "prof", text: "La bacalaureat 2023, sesiunea august, informatică, subiectul II.1a: algoritmul din tablă. Ce afișează dacă se citesc, în ordine, 3, 746, 82, 3067, 67, 78, 178?", tabla: "citește n; x←0; cât timp n>0: citește a,b; c←a; p←1; cât timp a>9: a←[a/10]; p←p*10 ■; a←a*p+b; dacă a≠c atunci x←x+1 ■; n←n−1 ■; scrie x" },
      { cine: "elev", text: "Ce face bucla cu a mai mare ca 9?" },
      { cine: "prof", text: "Taie cifre din a până rămâne prima cifră, iar p crește de 10 ori la fiecare tăiere. Apoi a ← a·p + b se compară cu vechiul a.", tabla: "n = 3 perechi: (746, 82), (3067, 67), (78, 178)" },
      { cine: "elev", text: "Prima pereche: 746 devine 7, p = 100, deci a = 700 + 82 = 782." },
      { cine: "prof", text: "782 e diferit de 746, deci x devine 1. A doua pereche?", tabla: "782 ≠ 746  ⇒  x = 1" },
      { cine: "elev", text: "3067 devine 3, p = 1000, a = 3000 + 67 = 3067. Egal, deci x rămâne 1." },
      { cine: "prof", text: "Bine. Ultima pereche: 78 și 178." },
      { cine: "elev", text: "78 devine 7, p = 10, a = 70 + 178 = 248. Tot x = 1, cred." },
      { cine: "prof", text: "Verifică condiția: 248 e diferit de 78, deci x crește. Ce se afișează?", tabla: "248 ≠ 78  ⇒  x = 2" },
      { cine: "elev", text: "x = 2, deci algoritmul afișează 2." },
    ],
  },
  {
    materie: "Informatică",
    nivel: "Bacalaureat · Recursivitate",
    sursa: "BAC 2023, sesiunea august, Informatică MI C/C++, Varianta 7, subiectul I.2 — https://cdn.edupedu.ro/wp-content/uploads/2023/08/E_d_Informatica_2023_sp_MI_C_var_07_LRO.pdf (barem: https://cdn.edupedu.ro/wp-content/uploads/2023/08/E_d_Informatica_2023_sp_MI_bar_07_LRO.pdf)",
    replici: [
      { cine: "prof", text: "La bacalaureat 2023, sesiunea august, subiectul I.2, ai funcția recursivă din tablă. Variantele sunt 1, 2, 9 și 18. Cât returnează f(3, 2)?", tabla: "int f(int x,int y){ int z; if(y==0) return 1; z=f(x,y/2); if(y%2!=0) return z*z*x; return z*z; }" },
      { cine: "elev", text: "y = 2, deci z = f(3, 1). Cred că 18, înmulțim cu x." },
      { cine: "prof", text: "Înmulțirea cu x apare doar când y e impar. Ia apelurile de jos în sus: cât e f(3, 0)?", tabla: "f(3,2) → f(3,1) → f(3,0)" },
      { cine: "elev", text: "f(3, 0) = 1, e cazul de bază." },
      { cine: "prof", text: "Acum f(3, 1): z = 1, iar y = 1 e impar. Ce returnează?" },
      { cine: "elev", text: "z·z·x, adică 1·1·3 = 3." },
      { cine: "prof", text: "Revii în f(3, 2): z = 3, iar y = 2 e par.", tabla: "y par → z*z;  y impar → z*z*x" },
      { cine: "elev", text: "Returnează z·z = 9, deci varianta c." },
      { cine: "prof", text: "Corect, c. Observă că funcția calculează x la puterea y prin exponențiere rapidă: 3² = 9.", tabla: "f(x, y) = xʸ  ⇒  f(3, 2) = 9  (c)" },
    ],
  },
  {
    materie: "Fizică",
    nivel: "Bacalaureat · Circuite",
    sursa: "BAC 2025, sesiunea august, Fizică teoretic/vocațional, Varianta 4, C. Producerea și utilizarea curentului continuu, subiectul III (a, c, d) — https://cdn.edupedu.ro/wp-content/uploads/2025/08/E_d_fizica_teoretic_vocational_2025_var_04_LRO.pdf (barem: https://cdn.edupedu.ro/wp-content/uploads/2025/08/E_d_fizica_teoretic_vocational_2025_bar_04_LRO.pdf)",
    replici: [
      { cine: "prof", text: "La bacalaureat 2025, sesiunea august, electricitate, subiectul III: becul B₁ are nominal 9 W și 0,6 A, sursa are r = 2,5 Ω, ampermetrul arată 1 A.", tabla: "B₁: P₁ = 9 W, I₁ = 0,6 A;  r = 2,5 Ω;  I_A = 1 A;  becurile funcționează la valori nominale" },
      { cine: "elev", text: "Rezistența lui B₁: P supra I, adică 9 / 0,6 = 15 Ω." },
      { cine: "prof", text: "P/I îți dă tensiunea, 15 V, nu rezistența. Pentru rezistență folosește P = R·I².", tabla: "U₁ = P₁/I₁ = 15 V;  R₁ = P₁/I₁²" },
      { cine: "elev", text: "R₁ = 9 / 0,36 = 25 Ω." },
      { cine: "prof", text: "Corect. În schemă, tensiunea la bornele sursei este chiar tensiunea becului B₁, 15 V. Cât e tensiunea electromotoare?", tabla: "E = U + r·I" },
      { cine: "elev", text: "E = U + r·I = 15 + 2,5 · 1 = 17,5 V." },
      { cine: "prof", text: "Bun. Ultima cerință: randamentul transferului de energie de la sursă la circuitul exterior.", tabla: "η = P_ext / P_tot = U/E" },
      { cine: "elev", text: "η = U/E = 15 / 17,5 ≈ 0,86, adică 86%." },
      { cine: "prof", text: "Exact ca în barem: R₁ = 25 Ω, E = 17,5 V și η ≈ 86%.", tabla: "R₁ = 25 Ω;  E = 17,5 V;  η ≈ 86%" },
    ],
  },
  {
    materie: "Fizică",
    nivel: "Bacalaureat · Mecanică",
    sursa: "BAC 2025, sesiunea august, Fizică teoretic/vocațional, Varianta 4, A. Mecanică, subiectul III (a, b, c) — https://cdn.edupedu.ro/wp-content/uploads/2025/08/E_d_fizica_teoretic_vocational_2025_var_04_LRO.pdf (barem: https://cdn.edupedu.ro/wp-content/uploads/2025/08/E_d_fizica_teoretic_vocational_2025_bar_04_LRO.pdf)",
    replici: [
      { cine: "prof", text: "La bacalaureat 2025, sesiunea august, mecanică, subiectul III: corp de 2 kg, lăsat din repaus de la 3,2 m, ajunge în B cu 7 m/s. Lucrul frecării pe AB?", tabla: "m = 2 kg, h = 3,2 m, v_B = 7 m/s, g = 10 m/s²" },
      { cine: "elev", text: "Energia în A e mgh = 2 · 10 · 3,2 = 64 J." },
      { cine: "prof", text: "Bun, asta era și cerința a. Cât e energia cinetică în B?", tabla: "E_A = mgh = 64 J" },
      { cine: "elev", text: "mv²/2 = 2 · 49 / 2 = 49 J. Deci frecarea a făcut 15 J." },
      { cine: "prof", text: "Atenție la semn! Frecarea se opune mișcării și scade energia mecanică, deci lucrul ei e negativ.", tabla: "L_f = E_cB − E_A = 49 − 64 = −15 J" },
      { cine: "elev", text: "Atunci L_f = −15 J." },
      { cine: "prof", text: "Corect. Pe porțiunea orizontală BC, μ = 0,35 și corpul se oprește în C. Cât e distanța BC?", tabla: "μ = 0,35;  E_cB = μmg·d" },
      { cine: "elev", text: "Frecarea consumă energia cinetică: μmg·d = 49 J și μmg = 7 N, deci BC = 7 m." },
      { cine: "prof", text: "Perfect: L_f = −15 J și d = 7 m, exact ca în barem.", tabla: "L_f = −15 J;  BC = 7 m" },
    ],
  },
  {
    materie: "Chimie",
    nivel: "Bacalaureat · Soluții",
    sursa: "BAC 2025, sesiunea august, Chimie anorganică, Varianta 4, subiectul II, C.5 — https://cdn.edupedu.ro/wp-content/uploads/2025/08/E_d_chimie_anorganica_2025_var_04_LRO.pdf (barem: https://cdn.edupedu.ro/wp-content/uploads/2025/08/E_d_chimie_anorganica_2025_bar_04_LRO.pdf)",
    replici: [
      { cine: "prof", text: "La bacalaureat 2025, sesiunea august, chimie anorganică, subiectul C.5: amesteci 400 mL HCl 0,2 M cu 200 mL HCl 0,1 M și apă, până la 1000 mL. Concentrația molară finală?", tabla: "400 mL HCl 0,2 M + 200 mL HCl 0,1 M + H₂O → 1000 mL" },
      { cine: "elev", text: "Fac media: 0,2 plus 0,1, totul supra 2, adică 0,15 M." },
      { cine: "prof", text: "Nu poți face media concentrațiilor: volumele diferă și se mai adaugă apă. Ce se conservă la amestecare?" },
      { cine: "elev", text: "Numărul de moli de HCl." },
      { cine: "prof", text: "Exact. Câți moli aduce prima soluție?", tabla: "n = c · V" },
      { cine: "elev", text: "0,2 mol/L ori 0,4 L, adică 0,08 mol." },
      { cine: "prof", text: "Și a doua soluție?", tabla: "n₁ = 0,2 · 0,4 = 0,08 mol" },
      { cine: "elev", text: "0,1 ori 0,2 L, adică 0,02 mol. În total 0,1 mol." },
      { cine: "prof", text: "Volumul final e 1 L. Deci concentrația soluției S?", tabla: "c = n_total / V_final = 0,1 mol / 1 L" },
      { cine: "elev", text: "c = 0,1 M." },
    ],
  },
  {
    materie: "Chimie",
    nivel: "Bacalaureat · Chimie organică",
    sursa: "BAC 2025, sesiunea august, Chimie organică, Varianta 4, subiectul II, C.4 — https://cdn.edupedu.ro/wp-content/uploads/2025/08/E_d_chimie_organica_2025_var_04_LRO.pdf (barem: https://cdn.edupedu.ro/wp-content/uploads/2025/08/E_d_chimie_organica_2025_bar_04_LRO.pdf)",
    replici: [
      { cine: "prof", text: "La bacalaureat 2025, sesiunea august, chimie organică, subiectul C.4: 3,9 g de etină reacționează total cu soluție de brom 5%, formând doar produsul saturat. Ce masă de soluție se consumă?", tabla: "3,9 g C₂H₂ + Br₂ (soluție 5%) → produs saturat" },
      { cine: "elev", text: "Etina are masa molară 26, deci 3,9 / 26 = 0,15 mol." },
      { cine: "prof", text: "Corect. Câți moli de brom cere fiecare mol de etină ca să obții produsul saturat?", tabla: "M(C₂H₂) = 26 g/mol" },
      { cine: "elev", text: "Un mol de brom la un mol de etină, deci 0,15 mol Br₂." },
      { cine: "prof", text: "Cu un mol obții 1,2-dibromoetena, care încă are dublă legătură. Pentru produsul saturat?", tabla: "HC≡CH + 2Br₂ → CHBr₂–CHBr₂" },
      { cine: "elev", text: "Doi moli de brom, se formează 1,1,2,2-tetrabromoetanul. Deci 0,3 mol Br₂." },
      { cine: "prof", text: "Bun. Masa de brom, cu M = 160 g/mol?" },
      { cine: "elev", text: "0,3 · 160 = 48 g de brom." },
      { cine: "prof", text: "Soluția are 5% brom. Ce masă de soluție conține cele 48 g?", tabla: "m_s = m_d · 100 / c" },
      { cine: "elev", text: "48 · 100 / 5 = 960 g de soluție." },
    ],
  },
  {
    materie: "Biologie",
    nivel: "Bacalaureat · Genetică",
    sursa: "BAC 2025, sesiunea august, Biologie vegetală și animală, Varianta 4, subiectul II.B (a, b, c) — https://cdn.edupedu.ro/wp-content/uploads/2025/08/E_d_bio_veg_anim_2025_var_04_LRO.pdf (barem: https://cdn.edupedu.ro/wp-content/uploads/2025/08/E_d_bio_veg_anim_2025_bar_04_LRO.pdf)",
    replici: [
      { cine: "prof", text: "La bacalaureat 2025, sesiunea august, biologie vegetală, subiectul II.B: măr cu fructe roșii, mici, heterozigot pentru culoare, încrucișat cu măr cu fructe verzi, mari, homozigot pentru mărime.", tabla: "R = roșu > r = verde;  M = mare > m = mic" },
      { cine: "elev", text: "Primul e Rrmm. Al doilea e RrMM." },
      { cine: "prof", text: "Verde e caracter recesiv, deci apare doar la homozigotul rr. Iar mărimea mare, homozigot, e MM.", tabla: "P: Rrmm × rrMM" },
      { cine: "elev", text: "Atunci al doilea părinte e rrMM." },
      { cine: "prof", text: "Corect. Ce tipuri de gameți formează fiecare părinte?" },
      { cine: "elev", text: "Primul dă Rm și rm, al doilea doar rM." },
      { cine: "prof", text: "Bun. Combină gameții. Ce procent din F1 are fructe verzi și ce genotip au?", tabla: "Rm × rM → RrMm;   rm × rM → rrMm" },
      { cine: "elev", text: "rm cu rM dă rrMm, adică jumătate, 50%." },
      { cine: "prof", text: "Și ce genotip au descendenții cu ambele caractere dominante?", tabla: "F1: 50% RrMm (roșii, mari), 50% rrMm (verzi, mari)" },
      { cine: "elev", text: "RrMm: fructe roșii și mari." },
    ],
  },
  {
    materie: "Biologie",
    nivel: "Bacalaureat · Fiziologie",
    sursa: "BAC 2025, sesiunea august, Anatomie și fiziologie umană, genetică și ecologie umană, Varianta 4, subiectul II.B (a, b, c) — https://cdn.edupedu.ro/wp-content/uploads/2025/08/E_d_anat_fiz_gen_ec_um_2025_var_04_LRO.pdf (barem: https://cdn.edupedu.ro/wp-content/uploads/2025/08/E_d_anat_fiz_gen_ec_um_2025_bar_04_LRO.pdf)",
    replici: [
      { cine: "prof", text: "La bacalaureat 2025, sesiunea august, anatomie, subiectul II.B: un pacient are în plasmă ambele tipuri de aglutinine, altul are pe hematii doar aglutinogenul A. Ce grupe de sânge au?", tabla: "pacient 1: α și β în plasmă;  pacient 2: doar A pe hematii" },
      { cine: "elev", text: "Primul le are pe amândouă, deci e grupa AB." },
      { cine: "prof", text: "Confunzi aglutininele din plasmă cu aglutinogenele de pe hematii. Dacă plasma are α și β, ce aglutinogene pot fi pe hematii?", tabla: "A ↔ β,  B ↔ α,  AB ↔ —,  0 ↔ α, β" },
      { cine: "elev", text: "Niciunul, deci primul e grupa 0. Al doilea, cu aglutinogen A, e grupa A." },
      { cine: "prof", text: "Corect. Ce grupă ar avea un donator comun pentru amândoi, la o transfuzie în cantitate mică?" },
      { cine: "elev", text: "Grupa A, ca al doilea pacient?" },
      { cine: "prof", text: "Gândește-te la primul pacient: plasma lui conține α, care ar aglutina hematiile cu aglutinogen A." },
      { cine: "elev", text: "Atunci grupa 0: hematiile nu au aglutinogene, deci nu sunt aglutinate." },
      { cine: "prof", text: "Exact, donatorul universal. Și ce se întâmplă la o transfuzie incompatibilă în sistemul AB0?", tabla: "donator comun: grupa 0 (I)" },
      { cine: "elev", text: "Hematiile donatorului sunt aglutinate și distruse, adică hemoliză, cu risc de șoc." },
    ],
  },
  {
    materie: "Istorie",
    nivel: "Bacalaureat · România modernă",
    sursa: "BAC 2025, sesiunea iunie-iulie, Istorie, Varianta 1, subiectul III (eseu) — https://cdn.edupedu.ro/wp-content/uploads/2025/06/E_c_istorie_2025_var_01_LRO.pdf (barem: https://cdn.edupedu.ro/wp-content/uploads/2025/06/E_c_istorie_2025_bar_01_LRO.pdf)",
    replici: [
      { cine: "prof", text: "La bacalaureat 2025, sesiunea iunie, istorie, subiectul III: eseu despre statul român modern. Prima cerință: o acțiune a românilor din perioada 1857–1859. Ce alegi?", tabla: "1857–1859 · 1861–1866 · 1875–1885 · 1916–1918" },
      { cine: "elev", text: "Marea Unire din 1918." },
      { cine: "prof", text: "Atenție la interval: 1857–1859. Ce s-a petrecut atunci în Moldova și Țara Românească?" },
      { cine: "elev", text: "Adunările ad-hoc, apoi dubla alegere a lui Alexandru Ioan Cuza, în 1859." },
      { cine: "prof", text: "Bun, cu o relație cauză–efect. Apoi: o măsură adoptată în 1861–1866 și două aspecte ale ei.", tabla: "măsură: Constituția din 1866 / Legea rurală din 1864" },
      { cine: "elev", text: "Constituția din 1866: statul se numește România, iar forma de guvernământ e monarhia constituțională." },
      { cine: "prof", text: "Excelent. Două evenimente la care România participă în relațiile internaționale, între 1875 și 1885?" },
      { cine: "elev", text: "Convenția cu Rusia din 1877 și lupta de la Plevna." },
      { cine: "prof", text: "Ultima: un punct de vedere despre politica externă din 1916–1918, susținut de un fapt istoric și conectori precum „deoarece” și „așadar”.", tabla: "punct de vedere + fapt istoric + „deoarece” + „așadar”" },
      { cine: "elev", text: "În 1916 România intră în război alături de Antantă, deoarece voia Transilvania. Așadar, politica externă servea idealul național." },
    ],
  },
  {
    materie: "Geografie",
    nivel: "Bacalaureat · Climă",
    sursa: "BAC 2025, sesiunea iunie-iulie, Geografie, Varianta 1, subiectul I.D (statul 18 = Republica Moldova, statul 20 = Norvegia, conform baremului) — https://cdn.edupedu.ro/wp-content/uploads/2025/06/E_d_geografie_2025_var_01_LRO.pdf (barem: https://cdn.edupedu.ro/wp-content/uploads/2025/06/E_d_geografie_2025_bar_01_LRO.pdf)",
    replici: [
      { cine: "prof", text: "La bacalaureat 2025, sesiunea iunie, geografie, subiectul I.D: prezintă trei diferențe între clima statului 18 de pe hartă, Republica Moldova, și a statului 20, Norvegia.", tabla: "18 = Republica Moldova;  20 = Norvegia" },
      { cine: "elev", text: "Norvegia e mai la nord, mai rece, deci are mai puține precipitații." },
      { cine: "prof", text: "Invers: coasta Norvegiei primește mase de aer umed din Atlantic, deci precipitații bogate. Și ce curent oceanic îi încălzește țărmul?" },
      { cine: "elev", text: "Curentul Nord-Atlantic, continuarea Golfstreamului." },
      { cine: "prof", text: "Corect. Prima diferență: Moldova are precipitații mai reduse decât Norvegia. A doua, legată de temperaturi?", tabla: "precipitații: 18 < 20" },
      { cine: "elev", text: "Moldova are amplitudini termice mai mari: veri calde și ierni geroase." },
      { cine: "prof", text: "Bine. A treia: tipul de climă sau vânturile dominante.", tabla: "amplitudine termică: 18 > 20" },
      { cine: "elev", text: "Moldova are climă temperat-continentală, iar coasta Norvegiei climă temperat-oceanică, cu vânturi de vest." },
      { cine: "prof", text: "Perfect. Baremul punctează doar diferențele formulate comparativ, deci scrie „mai reduse decât”, „mai mari decât”, nu descrieri separate.", tabla: "climă: temperat-continentală (18) vs temperat-oceanică (20)" },
    ],
  },
  {
    materie: "Limba română",
    nivel: "Bacalaureat · Poezie",
    sursa: "BAC 2022, Limba și literatura română, profil real/tehnologic, Varianta 3, subiectul III — https://cdn.edupedu.ro/wp-content/uploads/2023/08/E_a_romana_real_tehn_2022_var_03.pdf (barem: https://cdn.edupedu.ro/wp-content/uploads/2023/08/E_a_romana_real_tehn_2022_bar_03.pdf)",
    replici: [
      { cine: "prof", text: "La bacalaureatul din 2022, profil real, varianta 3, subiectul III: eseu de minimum 400 de cuvinte despre un text poetic studiat de Mihai Eminescu. Ce poezie alegi?", tabla: "Eseu, minimum 400 de cuvinte — text poetic de Mihai Eminescu" },
      { cine: "elev", text: "Luceafărul. E romantic pentru că vorbește despre iubire." },
      { cine: "prof", text: "Iubirea apare în toate curentele, deci nu încadrează textul. Cere două trăsături specifice romantismului.", tabla: "1. două trăsături → romantism" },
      { cine: "elev", text: "Antiteza dintre lumea cosmică a lui Hyperion și lumea terestră a Cătălinei. Și amestecul genurilor." },
      { cine: "prof", text: "Bine, amestecul de epic, liric și dramatic. A doua cerință: două imagini sau idei poetice relevante pentru temă. Care e tema?", tabla: "2. două imagini / idei poetice" },
      { cine: "elev", text: "Condiția geniului, care nu poate fi fericit în lumea oamenilor." },
      { cine: "prof", text: "Exact. Comentează, de pildă, zborul lui Hyperion spre Demiurg și atitudinea lui din final, rece și detașată.", tabla: "3. două elemente de compoziție / limbaj" },
      { cine: "elev", text: "Iar la compoziție: cele patru tablouri și simetria dintre primul și ultimul." },
      { cine: "prof", text: "Foarte bine. Adaugă un element de limbaj: o metaforă, un epitet sau prozodia. Fiecare cerință se punctează doar cu analiză, nu cu simplă enumerare.", tabla: "titlu · incipit · opoziții și simetrii · motive · figuri semantice · prozodie" },
    ],
  },
  {
    materie: "Economie",
    nivel: "Bacalaureat · Elasticitate",
    sursa: "BAC 2025, sesiunea iunie-iulie, Economie, Varianta 1, subiectul II.A (a, b, c) — https://cdn.edupedu.ro/wp-content/uploads/2025/06/E_d_economie_2025_var_01_LRO.pdf (barem: https://cdn.edupedu.ro/wp-content/uploads/2025/06/E_d_economie_2025_bar_01_LRO.pdf)",
    replici: [
      { cine: "prof", text: "La bacalaureat 2025, sesiunea iunie, economie, subiectul II.A: prețul trece prin 30, 20, 10, 5 u.m. Completezi cantitățile oferite și calculezi elasticitatea ofertei între momentele 1 și 4.", tabla: "P (u.m./buc.): 30 → 20 → 10 → 5" },
      { cine: "elev", text: "Dacă prețul scade, oferta crește, deci pun 50 de bucăți la 30 și 100 la 5." },
      { cine: "prof", text: "Ai inversat legea ofertei: producătorii oferă mai mult la preț mai mare. Cantitatea oferită scade odată cu prețul.", tabla: "legea ofertei: P↓ ⇒ Qo↓" },
      { cine: "elev", text: "Atunci 100 de bucăți la prețul 30 și 50 de bucăți la prețul 5." },
      { cine: "prof", text: "Bun, valorile sunt fictive, dar trebuie să respecte legea. Care e formula coeficientului de elasticitate a ofertei?", tabla: "Ke = ΔQo% / ΔP%" },
      { cine: "elev", text: "Variația procentuală a cantității oferite împărțită la variația procentuală a prețului." },
      { cine: "prof", text: "Exact. Calculează cu valorile tale.", tabla: "ΔQo% = (50 − 100)/100 = −50%;  ΔP% = (5 − 30)/30 ≈ −83,3%" },
      { cine: "elev", text: "Cantitatea scade cu 50%, prețul cu 83,3%. Coeficientul e 50 / 83,3 = 0,6." },
      { cine: "prof", text: "Corect, ofertă inelastică. Cerința c: un coeficient de elasticitate a cererii de 0,8 ce tip de cerere arată?", tabla: "Ke = 0,6 < 1" },
      { cine: "elev", text: "E subunitar, deci cererea e inelastică." },
    ],
  },
];

export const ROSTIRE_BAC: Record<string, string> = {
  "La Evaluarea Națională 2023, sesiunea iunie, subiectul III, problema 6: cubul ABCDA′B′C′D′ are muchia de 10 cm. Calculează distanța de la C la planul (BDC′).":
    "La Evaluarea Națională două mii douăzeci și trei, sesiunea iunie, subiectul trei, problema șase: cubul A B C D, A prim B prim C prim D prim, are muchia de zece centimetri. Calculează distanța de la C la planul B D C prim.",
  "Păi distanța e chiar CC′, adică 10 centimetri.":
    "Păi distanța e chiar C C prim, adică zece centimetri.",
  "Nu: CC′ nu e perpendiculară pe planul (BDC′), doar îl atinge în C′. Ia O, centrul pătratului ABCD. Ce relație are BD cu CO și cu CC′?":
    "Nu: C C prim nu e perpendiculară pe planul B D C prim, doar îl atinge în C prim. Ia O, centrul pătratului A B C D. Ce relație are B D cu C O și cu C C prim?",
  "BD e perpendiculară pe AC, deci pe CO, și pe CC′, care e perpendiculară pe bază.":
    "B D e perpendiculară pe A C, deci pe C O, și pe C C prim, care e perpendiculară pe bază.",
  "Deci BD ⊥ (CC′O). Ducem CP ⊥ C′O; atunci CP e perpendiculară și pe BD, deci pe tot planul. Calculează CO și C′O.":
    "Deci B D este perpendiculară pe planul C C prim O. Ducem C P perpendiculară pe C prim O; atunci C P e perpendiculară și pe B D, deci pe tot planul. Calculează C O și C prim O.",
  "CO e jumătate din diagonală, 5√2 cm, iar C′O = √(50 + 100) = 5√6 cm.":
    "C O e jumătate din diagonală, cinci radical din doi centimetri, iar C prim O e radical din cincizeci plus o sută, adică cinci radical din șase centimetri.",
  "Corect. În triunghiul dreptunghic CC′O, CP e înălțimea din unghiul drept: produsul catetelor supra ipotenuză. Cât obții?":
    "Corect. În triunghiul dreptunghic C C prim O, C P e înălțimea din unghiul drept: produsul catetelor supra ipotenuză. Cât obții?",
  "5√2 ori 10, supra 5√6, adică 10 supra √3, deci 10√3 supra 3 centimetri.":
    "Cinci radical din doi ori zece, supra cinci radical din șase, adică zece supra radical din trei, deci zece radical din trei supra trei centimetri.",
  "Exact ca în barem: d(C, (BDC′)) = 10√3/3 cm. Greșeala clasică e să iei CC′, care nu e perpendiculară pe plan.":
    "Exact ca în barem: distanța de la C la planul B D C prim este zece radical din trei supra trei centimetri. Greșeala clasică e să iei C C prim, care nu e perpendiculară pe plan.",
  "La bacalaureatul din 2019, mate-info, varianta 8, subiectul III.1: f(x) = eˣ(x² + 4x + 1). Când are ecuația f(x) = a exact trei soluții reale?":
    "La bacalaureatul din două mii nouăsprezece, mate-info, varianta opt, subiectul trei punct unu: f de x egal e la x înmulțit cu x pătrat plus patru x plus unu. Când are ecuația f de x egal a exact trei soluții reale?",
  "Întâi derivata: f′(x) = eˣ(2x + 4)?":
    "Întâi derivata: f prim de x egal e la x înmulțit cu doi x plus patru?",
  "Ai uitat că e un produs: se derivează și eˣ. Aplică regula (u·v)′ = u′v + uv′ și dă factor comun eˣ.":
    "Ai uitat că e un produs: se derivează și e la x. Aplică regula: u ori v, totul derivat, egal u prim ori v plus u ori v prim, și dă factor comun e la x.",
  "f′(x) = eˣ(x² + 6x + 5), adică eˣ(x + 1)(x + 5).":
    "f prim de x egal e la x înmulțit cu x pătrat plus șase x plus cinci, adică e la x ori x plus unu ori x plus cinci.",
  "Bun, asta cere și punctul b: tangenta e paralelă cu Ox în x = −5 și x = −1. Cum variază f?":
    "Bun, asta cere și punctul b: tangenta e paralelă cu axa O x în x egal minus cinci și x egal minus unu. Cum variază f?",
  "Crește până la −5, scade între −5 și −1, apoi crește iar.":
    "Crește până la minus cinci, scade între minus cinci și minus unu, apoi crește iar.",
  "Acum valorile cheie: f(−5), f(−1) și limitele la −∞ și la +∞.":
    "Acum valorile cheie: f de minus cinci, f de minus unu și limitele la minus infinit și la plus infinit.",
  "f(−5) = 6/e⁵, f(−1) = −2/e; la −∞ tinde la 0, la +∞ tinde la +∞.":
    "f de minus cinci egal șase supra e la a cincea, f de minus unu egal minus doi supra e; la minus infinit tinde la zero, la plus infinit tinde la plus infinit.",
  "Deci dreapta y = a taie graficul de trei ori doar între 0 și maximul local. Pentru a = 0 ai doar două soluții. Concluzia?":
    "Deci dreapta y egal a taie graficul de trei ori doar între zero și maximul local. Pentru a egal zero ai doar două soluții. Concluzia?",
  "a aparține intervalului deschis de la 0 la 6/e⁵.":
    "a aparține intervalului deschis de la zero la șase supra e la a cincea.",
  "La bacalaureatul din 2019, mate-info, varianta 8, subiectul III.2.c, ai datele în tablă. Află a > e dacă aria de sub graficul lui g, între e și a, este 2a.":
    "La bacalaureatul din două mii nouăsprezece, mate-info, varianta opt, subiectul trei punct doi c, ai datele în tablă. Află a mai mare decât e dacă aria de sub graficul lui g, între e și a, este doi a.",
  "Păi g(x) = ln x, iar aria e integrala lui ln x de la e la a.":
    "Păi g de x egal logaritm natural din x, iar aria e integrala lui logaritm natural din x de la e la a.",
  "Corect, și ln x e pozitiv pe interval. Cum integrezi ln x? Nu e în tabelul de primitive.":
    "Corect, și logaritmul natural din x e pozitiv pe interval. Cum integrezi logaritm natural din x? Nu e în tabelul de primitive.",
  "Prin părți: u = ln x, v′ = 1. Iese x ln x − x.":
    "Prin părți: u egal logaritm natural din x, v prim egal unu. Iese x logaritm natural din x minus x.",
  "Exact. Acum aplică Leibniz–Newton între e și a.":
    "Exact. Acum aplică formula Leibniz–Newton între e și a.",
  "a ln a − a, minus e. Deci aria e a ln a − a − e.":
    "a logaritm natural din a minus a, minus e. Deci aria e a logaritm natural din a minus a minus e.",
  "Atenție la x = e: e·ln e − e = e − e = 0. Deci aria este doar a ln a − a.":
    "Atenție la x egal e: e ori logaritm natural din e minus e înseamnă e minus e, adică zero. Deci aria este doar a logaritm natural din a minus a.",
  "Atunci a ln a − a = 2a, deci a ln a = 3a.":
    "Atunci a logaritm natural din a minus a egal doi a, deci a logaritm natural din a egal trei a.",
  "ln a = 3, deci a = e³, care e într-adevăr mai mare decât e.":
    "Logaritm natural din a egal trei, deci a egal e la a treia, care e într-adevăr mai mare decât e.",
  "La bacalaureatul din 2019, mate-info, varianta 8, subiectul I.4: alegi un număr n din mulțimea numerelor naturale de o cifră. Care e probabilitatea ca n(n + 1) ≥ 42?":
    "La bacalaureatul din două mii nouăsprezece, mate-info, varianta opt, subiectul unu punct patru: alegi un număr n din mulțimea numerelor naturale de o cifră. Care e probabilitatea ca n ori n plus unu să fie mai mare sau egal cu patruzeci și doi?",
  "Numerele de o cifră sunt de la 1 la 9, deci 9 cazuri posibile.":
    "Numerele de o cifră sunt de la unu la nouă, deci nouă cazuri posibile.",
  "Ai uitat de 0: e număr natural și are o cifră. Câte cazuri posibile ai, de fapt?":
    "Ai uitat de zero: e număr natural și are o cifră. Câte cazuri posibile ai, de fapt?",
  "Atunci 10 cazuri posibile.":
    "Atunci zece cazuri posibile.",
  "Corect. Acum cazurile favorabile. Încearcă n = 5 și n = 6.":
    "Corect. Acum cazurile favorabile. Încearcă n egal cinci și n egal șase.",
  "5 ori 6 face 30, prea puțin. 6 ori 7 face 42, e bun.":
    "Cinci ori șase face treizeci, prea puțin. Șase ori șapte face patruzeci și doi, e bun.",
  "Și cum n(n + 1) crește odată cu n, care sunt toate cazurile favorabile?":
    "Și cum n ori n plus unu crește odată cu n, care sunt toate cazurile favorabile?",
  "6, 7, 8 și 9, deci 4 cazuri favorabile.":
    "Șase, șapte, opt și nouă, deci patru cazuri favorabile.",
  "P = 4/10, adică 2/5.":
    "P egal patru supra zece, adică doi supra cinci.",
  "La bacalaureat 2023, sesiunea august, informatică, subiectul II.1a: algoritmul din tablă. Ce afișează dacă se citesc, în ordine, 3, 746, 82, 3067, 67, 78, 178?":
    "La bacalaureat două mii douăzeci și trei, sesiunea august, informatică, subiectul doi punct unu a: algoritmul din tablă. Ce afișează dacă se citesc, în ordine, trei, șapte sute patruzeci și șase, optzeci și doi, trei mii șaizeci și șapte, șaizeci și șapte, șaptezeci și opt, o sută șaptezeci și opt?",
  "Ce face bucla cu a mai mare ca 9?":
    "Ce face bucla cu a mai mare ca nouă?",
  "Taie cifre din a până rămâne prima cifră, iar p crește de 10 ori la fiecare tăiere. Apoi a ← a·p + b se compară cu vechiul a.":
    "Taie cifre din a până rămâne prima cifră, iar p crește de zece ori la fiecare tăiere. Apoi a primește a ori p plus b și se compară cu vechiul a.",
  "Prima pereche: 746 devine 7, p = 100, deci a = 700 + 82 = 782.":
    "Prima pereche: șapte sute patruzeci și șase devine șapte, p egal o sută, deci a egal șapte sute plus optzeci și doi, adică șapte sute optzeci și doi.",
  "782 e diferit de 746, deci x devine 1. A doua pereche?":
    "Șapte sute optzeci și doi e diferit de șapte sute patruzeci și șase, deci x devine unu. A doua pereche?",
  "3067 devine 3, p = 1000, a = 3000 + 67 = 3067. Egal, deci x rămâne 1.":
    "Trei mii șaizeci și șapte devine trei, p egal o mie, a egal trei mii plus șaizeci și șapte, adică trei mii șaizeci și șapte. Egal, deci x rămâne unu.",
  "Bine. Ultima pereche: 78 și 178.":
    "Bine. Ultima pereche: șaptezeci și opt și o sută șaptezeci și opt.",
  "78 devine 7, p = 10, a = 70 + 178 = 248. Tot x = 1, cred.":
    "Șaptezeci și opt devine șapte, p egal zece, a egal șaptezeci plus o sută șaptezeci și opt, adică două sute patruzeci și opt. Tot x egal unu, cred.",
  "Verifică condiția: 248 e diferit de 78, deci x crește. Ce se afișează?":
    "Verifică condiția: două sute patruzeci și opt e diferit de șaptezeci și opt, deci x crește. Ce se afișează?",
  "x = 2, deci algoritmul afișează 2.":
    "x egal doi, deci algoritmul afișează doi.",
  "La bacalaureat 2023, sesiunea august, subiectul I.2, ai funcția recursivă din tablă. Variantele sunt 1, 2, 9 și 18. Cât returnează f(3, 2)?":
    "La bacalaureat două mii douăzeci și trei, sesiunea august, subiectul unu punct doi, ai funcția recursivă din tablă. Variantele sunt unu, doi, nouă și optsprezece. Cât returnează f de trei și doi?",
  "y = 2, deci z = f(3, 1). Cred că 18, înmulțim cu x.":
    "y egal doi, deci z egal f de trei și unu. Cred că optsprezece, înmulțim cu x.",
  "Înmulțirea cu x apare doar când y e impar. Ia apelurile de jos în sus: cât e f(3, 0)?":
    "Înmulțirea cu x apare doar când y e impar. Ia apelurile de jos în sus: cât e f de trei și zero?",
  "f(3, 0) = 1, e cazul de bază.":
    "f de trei și zero egal unu, e cazul de bază.",
  "Acum f(3, 1): z = 1, iar y = 1 e impar. Ce returnează?":
    "Acum f de trei și unu: z egal unu, iar y egal unu e impar. Ce returnează?",
  "z·z·x, adică 1·1·3 = 3.":
    "z ori z ori x, adică unu ori unu ori trei, egal trei.",
  "Revii în f(3, 2): z = 3, iar y = 2 e par.":
    "Revii în f de trei și doi: z egal trei, iar y egal doi e par.",
  "Returnează z·z = 9, deci varianta c.":
    "Returnează z ori z, adică nouă, deci varianta c.",
  "Corect, c. Observă că funcția calculează x la puterea y prin exponențiere rapidă: 3² = 9.":
    "Corect, c. Observă că funcția calculează x la puterea y prin exponențiere rapidă: trei la pătrat egal nouă.",
  "La bacalaureat 2025, sesiunea august, electricitate, subiectul III: becul B₁ are nominal 9 W și 0,6 A, sursa are r = 2,5 Ω, ampermetrul arată 1 A.":
    "La bacalaureat două mii douăzeci și cinci, sesiunea august, electricitate, subiectul trei: becul B unu are nominal nouă wați și zero virgulă șase amperi, sursa are rezistența interioară de doi virgulă cinci ohmi, ampermetrul arată un amper.",
  "Rezistența lui B₁: P supra I, adică 9 / 0,6 = 15 Ω.":
    "Rezistența lui B unu: P supra I, adică nouă supra zero virgulă șase, egal cincisprezece ohmi.",
  "P/I îți dă tensiunea, 15 V, nu rezistența. Pentru rezistență folosește P = R·I².":
    "P supra I îți dă tensiunea, cincisprezece volți, nu rezistența. Pentru rezistență folosește P egal R ori I la pătrat.",
  "R₁ = 9 / 0,36 = 25 Ω.":
    "R unu egal nouă supra zero virgulă treizeci și șase, adică douăzeci și cinci de ohmi.",
  "Corect. În schemă, tensiunea la bornele sursei este chiar tensiunea becului B₁, 15 V. Cât e tensiunea electromotoare?":
    "Corect. În schemă, tensiunea la bornele sursei este chiar tensiunea becului B unu, cincisprezece volți. Cât e tensiunea electromotoare?",
  "E = U + r·I = 15 + 2,5 · 1 = 17,5 V.":
    "E egal U plus r ori I, adică cincisprezece plus doi virgulă cinci ori unu, egal șaptesprezece virgulă cinci volți.",
  "η = U/E = 15 / 17,5 ≈ 0,86, adică 86%.":
    "Randamentul e U supra E, cincisprezece supra șaptesprezece virgulă cinci, aproximativ zero virgulă optzeci și șase, adică optzeci și șase la sută.",
  "Exact ca în barem: R₁ = 25 Ω, E = 17,5 V și η ≈ 86%.":
    "Exact ca în barem: R unu egal douăzeci și cinci de ohmi, E egal șaptesprezece virgulă cinci volți și randamentul aproximativ optzeci și șase la sută.",
  "La bacalaureat 2025, sesiunea august, mecanică, subiectul III: corp de 2 kg, lăsat din repaus de la 3,2 m, ajunge în B cu 7 m/s. Lucrul frecării pe AB?":
    "La bacalaureat două mii douăzeci și cinci, sesiunea august, mecanică, subiectul trei: un corp de doi kilograme pornește din repaus de la înălțimea de trei virgulă doi metri și ajunge în B cu șapte metri pe secundă. Cât e lucrul forței de frecare pe porțiunea A B?",
  "Energia în A e mgh = 2 · 10 · 3,2 = 64 J.":
    "Energia în A e m g h, adică doi ori zece ori trei virgulă doi, egal șaizeci și patru de jouli.",
  "mv²/2 = 2 · 49 / 2 = 49 J. Deci frecarea a făcut 15 J.":
    "m v pătrat supra doi, adică doi ori patruzeci și nouă supra doi, egal patruzeci și nouă de jouli. Deci frecarea a făcut cincisprezece jouli.",
  "Atunci L_f = −15 J.":
    "Atunci lucrul forței de frecare e minus cincisprezece jouli.",
  "Corect. Pe porțiunea orizontală BC, μ = 0,35 și corpul se oprește în C. Cât e distanța BC?":
    "Corect. Pe porțiunea orizontală B C, coeficientul de frecare e zero virgulă treizeci și cinci și corpul se oprește în C. Cât e distanța B C?",
  "Frecarea consumă energia cinetică: μmg·d = 49 J și μmg = 7 N, deci BC = 7 m.":
    "Frecarea consumă energia cinetică: miu m g ori d egal patruzeci și nouă de jouli și miu m g egal șapte newtoni, deci B C egal șapte metri.",
  "Perfect: L_f = −15 J și d = 7 m, exact ca în barem.":
    "Perfect: lucrul forței de frecare e minus cincisprezece jouli și distanța e șapte metri, exact ca în barem.",
  "La bacalaureat 2025, sesiunea august, chimie anorganică, subiectul C.5: amesteci 400 mL HCl 0,2 M cu 200 mL HCl 0,1 M și apă, până la 1000 mL. Concentrația molară finală?":
    "La bacalaureat două mii douăzeci și cinci, sesiunea august, chimie anorganică, subiectul C cinci: amesteci patru sute de mililitri de acid clorhidric zero virgulă doi molar cu două sute de mililitri de acid clorhidric zero virgulă unu molar și apă distilată, până la o mie de mililitri. Care e concentrația molară finală?",
  "Fac media: 0,2 plus 0,1, totul supra 2, adică 0,15 M.":
    "Fac media: zero virgulă doi plus zero virgulă unu, totul supra doi, adică zero virgulă cincisprezece molar.",
  "Numărul de moli de HCl.":
    "Numărul de moli de acid clorhidric.",
  "0,2 mol/L ori 0,4 L, adică 0,08 mol.":
    "Zero virgulă doi moli pe litru ori zero virgulă patru litri, adică zero virgulă zero opt moli.",
  "0,1 ori 0,2 L, adică 0,02 mol. În total 0,1 mol.":
    "Zero virgulă unu ori zero virgulă doi litri, adică zero virgulă zero doi moli. În total zero virgulă unu moli.",
  "Volumul final e 1 L. Deci concentrația soluției S?":
    "Volumul final e un litru. Deci concentrația soluției S?",
  "c = 0,1 M.":
    "c egal zero virgulă unu molar.",
  "La bacalaureat 2025, sesiunea august, chimie organică, subiectul C.4: 3,9 g de etină reacționează total cu soluție de brom 5%, formând doar produsul saturat. Ce masă de soluție se consumă?":
    "La bacalaureat două mii douăzeci și cinci, sesiunea august, chimie organică, subiectul C patru: trei virgulă nouă grame de etină reacționează total cu soluție de brom de concentrație cinci la sută, formând doar produsul saturat. Ce masă de soluție se consumă?",
  "Etina are masa molară 26, deci 3,9 / 26 = 0,15 mol.":
    "Etina are masa molară douăzeci și șase, deci trei virgulă nouă supra douăzeci și șase, egal zero virgulă cincisprezece moli.",
  "Un mol de brom la un mol de etină, deci 0,15 mol Br₂.":
    "Un mol de brom la un mol de etină, deci zero virgulă cincisprezece moli de brom.",
  "Cu un mol obții 1,2-dibromoetena, care încă are dublă legătură. Pentru produsul saturat?":
    "Cu un mol obții unu, doi dibromoetena, care încă are dublă legătură. Pentru produsul saturat?",
  "Doi moli de brom, se formează 1,1,2,2-tetrabromoetanul. Deci 0,3 mol Br₂.":
    "Doi moli de brom, se formează unu, unu, doi, doi tetrabromoetanul. Deci zero virgulă trei moli de brom.",
  "Bun. Masa de brom, cu M = 160 g/mol?":
    "Bun. Masa de brom, cu masa molară o sută șaizeci de grame pe mol?",
  "0,3 · 160 = 48 g de brom.":
    "Zero virgulă trei ori o sută șaizeci, egal patruzeci și opt de grame de brom.",
  "Soluția are 5% brom. Ce masă de soluție conține cele 48 g?":
    "Soluția are cinci la sută brom. Ce masă de soluție conține cele patruzeci și opt de grame?",
  "48 · 100 / 5 = 960 g de soluție.":
    "Patruzeci și opt ori o sută supra cinci, egal nouă sute șaizeci de grame de soluție.",
  "La bacalaureat 2025, sesiunea august, biologie vegetală, subiectul II.B: măr cu fructe roșii, mici, heterozigot pentru culoare, încrucișat cu măr cu fructe verzi, mari, homozigot pentru mărime.":
    "La bacalaureat două mii douăzeci și cinci, sesiunea august, biologie vegetală, subiectul doi B: măr cu fructe roșii, mici, heterozigot pentru culoare, încrucișat cu măr cu fructe verzi, mari, homozigot pentru mărime.",
  "Primul e Rrmm. Al doilea e RrMM.":
    "Primul e R mare, r mic, m mic, m mic. Al doilea e R mare, r mic, M mare, M mare.",
  "Verde e caracter recesiv, deci apare doar la homozigotul rr. Iar mărimea mare, homozigot, e MM.":
    "Verde e caracter recesiv, deci apare doar la homozigotul r mic, r mic. Iar mărimea mare, homozigot, e M mare, M mare.",
  "Atunci al doilea părinte e rrMM.":
    "Atunci al doilea părinte e r mic, r mic, M mare, M mare.",
  "Primul dă Rm și rm, al doilea doar rM.":
    "Primul dă R mare m mic și r mic m mic, al doilea doar r mic M mare.",
  "Bun. Combină gameții. Ce procent din F1 are fructe verzi și ce genotip au?":
    "Bun. Combină gameții. Ce procent din F unu are fructe verzi și ce genotip au?",
  "rm cu rM dă rrMm, adică jumătate, 50%.":
    "r mic m mic cu r mic M mare dă r mic, r mic, M mare, m mic, adică jumătate, cincizeci la sută.",
  "RrMm: fructe roșii și mari.":
    "R mare, r mic, M mare, m mic: fructe roșii și mari.",
  "La bacalaureat 2025, sesiunea august, anatomie, subiectul II.B: un pacient are în plasmă ambele tipuri de aglutinine, altul are pe hematii doar aglutinogenul A. Ce grupe de sânge au?":
    "La bacalaureat două mii douăzeci și cinci, sesiunea august, anatomie, subiectul doi B: un pacient are în plasmă ambele tipuri de aglutinine, altul are pe hematii doar aglutinogenul A. Ce grupe de sânge au?",
  "Primul le are pe amândouă, deci e grupa AB.":
    "Primul le are pe amândouă, deci e grupa A B.",
  "Confunzi aglutininele din plasmă cu aglutinogenele de pe hematii. Dacă plasma are α și β, ce aglutinogene pot fi pe hematii?":
    "Confunzi aglutininele din plasmă cu aglutinogenele de pe hematii. Dacă plasma are alfa și beta, ce aglutinogene pot fi pe hematii?",
  "Niciunul, deci primul e grupa 0. Al doilea, cu aglutinogen A, e grupa A.":
    "Niciunul, deci primul e grupa zero. Al doilea, cu aglutinogen A, e grupa A.",
  "Gândește-te la primul pacient: plasma lui conține α, care ar aglutina hematiile cu aglutinogen A.":
    "Gândește-te la primul pacient: plasma lui conține alfa, care ar aglutina hematiile cu aglutinogen A.",
  "Atunci grupa 0: hematiile nu au aglutinogene, deci nu sunt aglutinate.":
    "Atunci grupa zero: hematiile nu au aglutinogene, deci nu sunt aglutinate.",
  "Exact, donatorul universal. Și ce se întâmplă la o transfuzie incompatibilă în sistemul AB0?":
    "Exact, donatorul universal. Și ce se întâmplă la o transfuzie incompatibilă în sistemul A B zero?",
  "La bacalaureat 2025, sesiunea iunie, istorie, subiectul III: eseu despre statul român modern. Prima cerință: o acțiune a românilor din perioada 1857–1859. Ce alegi?":
    "La bacalaureat două mii douăzeci și cinci, sesiunea iunie, istorie, subiectul trei: eseu despre statul român modern. Prima cerință: o acțiune a românilor din perioada o mie opt sute cincizeci și șapte, o mie opt sute cincizeci și nouă. Ce alegi?",
  "Marea Unire din 1918.":
    "Marea Unire din o mie nouă sute optsprezece.",
  "Atenție la interval: 1857–1859. Ce s-a petrecut atunci în Moldova și Țara Românească?":
    "Atenție la interval: o mie opt sute cincizeci și șapte, o mie opt sute cincizeci și nouă. Ce s-a petrecut atunci în Moldova și Țara Românească?",
  "Adunările ad-hoc, apoi dubla alegere a lui Alexandru Ioan Cuza, în 1859.":
    "Adunările ad-hoc, apoi dubla alegere a lui Alexandru Ioan Cuza, în o mie opt sute cincizeci și nouă.",
  "Bun, cu o relație cauză–efect. Apoi: o măsură adoptată în 1861–1866 și două aspecte ale ei.":
    "Bun, cu o relație cauză–efect. Apoi: o măsură adoptată între o mie opt sute șaizeci și unu și o mie opt sute șaizeci și șase, și două aspecte ale ei.",
  "Constituția din 1866: statul se numește România, iar forma de guvernământ e monarhia constituțională.":
    "Constituția din o mie opt sute șaizeci și șase: statul se numește România, iar forma de guvernământ e monarhia constituțională.",
  "Excelent. Două evenimente la care România participă în relațiile internaționale, între 1875 și 1885?":
    "Excelent. Două evenimente la care România participă în relațiile internaționale, între o mie opt sute șaptezeci și cinci și o mie opt sute optzeci și cinci?",
  "Convenția cu Rusia din 1877 și lupta de la Plevna.":
    "Convenția cu Rusia din o mie opt sute șaptezeci și șapte și lupta de la Plevna.",
  "Ultima: un punct de vedere despre politica externă din 1916–1918, susținut de un fapt istoric și conectori precum „deoarece” și „așadar”.":
    "Ultima: un punct de vedere despre politica externă din o mie nouă sute șaisprezece, o mie nouă sute optsprezece, susținut de un fapt istoric și conectori precum deoarece și așadar.",
  "În 1916 România intră în război alături de Antantă, deoarece voia Transilvania. Așadar, politica externă servea idealul național.":
    "În o mie nouă sute șaisprezece România intră în război alături de Antantă, deoarece voia Transilvania. Așadar, politica externă servea idealul național.",
  "La bacalaureat 2025, sesiunea iunie, geografie, subiectul I.D: prezintă trei diferențe între clima statului 18 de pe hartă, Republica Moldova, și a statului 20, Norvegia.":
    "La bacalaureat două mii douăzeci și cinci, sesiunea iunie, geografie, subiectul unu D: prezintă trei diferențe între clima statului optsprezece de pe hartă, Republica Moldova, și a statului douăzeci, Norvegia.",
  "La bacalaureatul din 2022, profil real, varianta 3, subiectul III: eseu de minimum 400 de cuvinte despre un text poetic studiat de Mihai Eminescu. Ce poezie alegi?":
    "La bacalaureatul din două mii douăzeci și doi, profil real, varianta trei, subiectul trei: eseu de minimum patru sute de cuvinte despre un text poetic studiat de Mihai Eminescu. Ce poezie alegi?",
  "La bacalaureat 2025, sesiunea iunie, economie, subiectul II.A: prețul trece prin 30, 20, 10, 5 u.m. Completezi cantitățile oferite și calculezi elasticitatea ofertei între momentele 1 și 4.":
    "La bacalaureat două mii douăzeci și cinci, sesiunea iunie, economie, subiectul doi A: prețul trece prin treizeci, douăzeci, zece, cinci unități monetare. Completezi cantitățile oferite și calculezi elasticitatea ofertei între momentele unu și patru.",
  "Dacă prețul scade, oferta crește, deci pun 50 de bucăți la 30 și 100 la 5.":
    "Dacă prețul scade, oferta crește, deci pun cincizeci de bucăți la treizeci și o sută la cinci.",
  "Atunci 100 de bucăți la prețul 30 și 50 de bucăți la prețul 5.":
    "Atunci o sută de bucăți la prețul treizeci și cincizeci de bucăți la prețul cinci.",
  "Cantitatea scade cu 50%, prețul cu 83,3%. Coeficientul e 50 / 83,3 = 0,6.":
    "Cantitatea scade cu cincizeci la sută, prețul cu optzeci și trei virgulă trei la sută. Coeficientul e cincizeci supra optzeci și trei virgulă trei, adică zero virgulă șase.",
  "Corect, ofertă inelastică. Cerința c: un coeficient de elasticitate a cererii de 0,8 ce tip de cerere arată?":
    "Corect, ofertă inelastică. Cerința c: un coeficient de elasticitate a cererii de zero virgulă opt ce tip de cerere arată?",
};

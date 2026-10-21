export type Replica = { cine: "elev" | "prof"; text: string; tabla?: string };
export type Lectie = { materie: string; nivel: string; replici: Replica[] };

// Editorial examples, not recordings or generated student conversations.
export const LECTII_SUPLIMENTARE: Lectie[] = [
  {
    materie: "Istorie", nivel: "BAC · România modernă", replici: [
      { cine: "prof", text: "Cum ai demonstra că Unirea din 1859 a fost începutul unui proces, nu finalul lui?" },
      { cine: "elev", text: "Cuza a fost ales în ambele principate, dar instituțiile nu erau încă unite." },
      { cine: "prof", text: "Exact. Separă alegerea domnului de unificarea administrativă. Ce reper ai folosi pentru a doua?", tabla: "1859: dubla alegere → 1862: guvern și adunare unice" },
      { cine: "elev", text: "Anul 1862, când apare guvernul unic." },
      { cine: "prof", text: "Bine. Leagă acum reforma agrară de consolidarea statului, fără să enumeri doar date." },
      { cine: "elev", text: "Reforma din 1864 schimbă relațiile dintre țărani și proprietari și întărește rolul statului." },
      { cine: "prof", text: "Ai un argument, nu doar o cronologie. Încheie cu o consecință și un exemplu concret.", tabla: "Argument = afirmație + fapt istoric + consecință" },
    ],
  },
  {
    materie: "Geografie", nivel: "BAC · Climă", replici: [
      { cine: "elev", text: "De ce plouă mai mult pe versantul vestic al unui munte decât în depresiunea de după el?" },
      { cine: "prof", text: "Urmărește o masă de aer umed care urcă muntele. Când urcă, se încălzește sau se răcește?", tabla: "Aer umed → ascensiune → răcire → condensare" },
      { cine: "elev", text: "Se răcește și vaporii condensează." },
      { cine: "prof", text: "Așa apar precipitațiile pe versantul expus. După culme, aerul coboară. Ce se schimbă?" },
      { cine: "elev", text: "Se încălzește și devine mai uscat." },
      { cine: "prof", text: "Da: umiditatea relativă scade. Acesta este efectul de umbră pluviometrică. Formulează explicația în două propoziții.", tabla: "Versant expus: precipitații ↑ · versant adăpostit: precipitații ↓" },
      { cine: "elev", text: "Aerul urcă și pierde apă pe primul versant. Coboară mai uscat pe celălalt." },
      { cine: "prof", text: "Corect. Direcția vântului și relieful explică diferența, nu doar altitudinea." },
    ],
  },
  {
    materie: "Informatică", nivel: "BAC · Algoritmi", replici: [
      { cine: "prof", text: "Ai un milion de numere ordonate. Cum găsești un număr fără să le verifici pe toate?" },
      { cine: "elev", text: "Mă uit la numărul din mijloc." },
      { cine: "prof", text: "Și dacă ținta e mai mică?", tabla: "m = st + (dr − st) / 2" },
      { cine: "elev", text: "Păstrez jumătatea din stânga." },
      { cine: "prof", text: "Exact. La fiecare pas elimini jumătate. Aproximativ câți pași îți trebuie pentru un milion?", tabla: "2²⁰ = 1.048.576 · complexitate O(log n)" },
      { cine: "elev", text: "Cam 20, nu un milion." },
      { cine: "prof", text: "Da. Acum verificarea importantă: ai putea folosi metoda pe un vector neordonat?" },
      { cine: "elev", text: "Nu, comparația cu mijlocul nu-mi spune în ce jumătate este ținta." },
      { cine: "prof", text: "Perfect. Ordonarea este condiția care face eliminarea jumătății corectă." },
    ],
  },
  {
    materie: "Fizică", nivel: "BAC · Circuite", replici: [
      { cine: "elev", text: "Am rezistențe de 6 și 3 ohmi în paralel, la 12 volți. Cum aflu curentul total?" },
      { cine: "prof", text: "În paralel, tensiunea este aceeași pe ambele ramuri. Ce curent trece prin fiecare?", tabla: "I₁ = U/R₁ · I₂ = U/R₂" },
      { cine: "elev", text: "2 amperi și 4 amperi." },
      { cine: "prof", text: "Corect. La nod, curenții se adună. Cât obții?" },
      { cine: "elev", text: "6 amperi." },
      { cine: "prof", text: "Verificăm prin rezistența echivalentă: 12 împărțit la 6 înseamnă 2 ohmi. De ce e mai mică decât fiecare rezistență?", tabla: "I = 6 A · R echiv. = 2 Ω" },
      { cine: "elev", text: "Curentul are două căi, nu una." },
      { cine: "prof", text: "Exact. Dacă ai fi obținut 9 ohmi, ai fi folosit din greșeală formula pentru serie." },
    ],
  },
  {
    materie: "Chimie", nivel: "BAC · Soluții", replici: [
      { cine: "prof", text: "Diluezi 100 de mililitri de soluție 2 moli pe litru până la 500 de mililitri. Ce se păstrează?" },
      { cine: "elev", text: "Cantitatea de substanță dizolvată, dacă adaug doar apă." },
      { cine: "prof", text: "Da. Transformă primul volum în litri și calculează molii.", tabla: "n = c₁V₁ = 2 · 0,1 = 0,2 mol" },
      { cine: "elev", text: "0,2 moli." },
      { cine: "prof", text: "Acum îi distribui în jumătate de litru. Care e concentrația finală?" },
      { cine: "elev", text: "0,4 moli pe litru." },
      { cine: "prof", text: "Corect. Volumul a crescut de cinci ori, concentrația a scăzut de cinci ori.", tabla: "c₂ = 0,2 / 0,5 = 0,4 mol/L" },
      { cine: "elev", text: "Deci adaug 400 de mililitri?" },
      { cine: "prof", text: "În laborator completezi până la volumul final de 500 de mililitri; volumele amestecate nu sunt întotdeauna perfect aditive." },
    ],
  },
  {
    materie: "Biologie", nivel: "BAC · Fiziologie", replici: [
      { cine: "elev", text: "Dacă arterele duc sânge oxigenat, de ce artera pulmonară duce sânge neoxigenat?" },
      { cine: "prof", text: "Ai găsit limita regulii. Arterele se definesc prin direcția circulației, nu prin oxigen. Din ce cameră pleacă artera pulmonară?", tabla: "Arteră: pleacă din inimă · venă: vine spre inimă" },
      { cine: "elev", text: "Din ventriculul drept." },
      { cine: "prof", text: "Da, spre plămâni. Acolo are loc schimbul de gaze. Prin ce vase revine sângele la inimă?" },
      { cine: "elev", text: "Prin venele pulmonare, în atriul stâng." },
      { cine: "prof", text: "Corect. Spune acum traseul complet al circulației mici.", tabla: "Ventricul drept → artere pulmonare → plămâni → vene pulmonare → atriu stâng" },
      { cine: "elev", text: "Ventricul drept, artere pulmonare, plămâni, vene pulmonare, atriu stâng." },
      { cine: "prof", text: "Perfect. Ai înlocuit o regulă incompletă cu definiția corectă." },
    ],
  },
  {
    materie: "Limba română", nivel: "BAC · Poezie", replici: [
      { cine: "prof", text: "În „Plumb”, cum ai lega repetiția de starea eului liric, fără să spui doar că e o figură de stil?" },
      { cine: "elev", text: "Cuvântul repetat sugerează greutate și apăsare." },
      { cine: "prof", text: "Bun. Ce legătură vezi între decorul exterior și trăirea interioară?", tabla: "Decor funerar ↔ apăsare interioară · simbolism" },
      { cine: "elev", text: "Decorul pare să reflecte singurătatea și lipsa unei ieșiri." },
      { cine: "prof", text: "Exact. Construiește o frază cu procedeu, exemplu și interpretare." },
      { cine: "elev", text: "Repetarea simbolului plumbului transformă decorul într-o imagine a apăsării sufletești." },
      { cine: "prof", text: "Asta este analiză. La eseu, dezvolt-o cu un reper din text, nu cu o listă de epitete.", tabla: "Procedeu → reper textual → semnificație" },
    ],
  },
  {
    materie: "Engleză", nivel: "Liceu · B2", replici: [
      { cine: "elev", text: "Cum spun că regret că nu am învățat pentru examen?" },
      { cine: "prof", text: "Folosim o situație imaginară din trecut. Încearcă începutul: If I had…", tabla: "If + past perfect → would have + past participle" },
      { cine: "elev", text: "If I had studied, I would pass." },
      { cine: "prof", text: "Prima parte e bună. Dar și rezultatul este în trecut: I would have passed. Refă propoziția." },
      { cine: "elev", text: "If I had studied, I would have passed the exam." },
      { cine: "prof", text: "Exactly. Acum inversăm ordinea. Mai ai nevoie de virgulă?", tabla: "I would have passed the exam if I had studied." },
      { cine: "elev", text: "Nu, dacă partea cu if vine la final." },
      { cine: "prof", text: "Corect. Fă acum un exemplu al tău despre un tren pierdut." },
    ],
  },
  {
    materie: "Matematică", nivel: "BAC · Probabilități", replici: [
      { cine: "prof", text: "Arunci două zaruri. Suma 7 și suma 12 sunt la fel de probabile?" },
      { cine: "elev", text: "Cred că da, fiecare e o sumă posibilă." },
      { cine: "prof", text: "Numărăm perechile, nu sumele. În câte moduri obții 12?", tabla: "36 de perechi ordonate echiprobabile" },
      { cine: "elev", text: "Doar cu 6 și 6." },
      { cine: "prof", text: "Iar pentru 7 ai 1 cu 6, 2 cu 5 și celelalte perechi, inclusiv în ordine inversă." },
      { cine: "elev", text: "Sunt șase perechi. Deci 6 din 36, adică o șesime." },
      { cine: "prof", text: "Da. Suma 12 are probabilitatea o treizeci și șesime. Care era greșeala inițială?", tabla: "P(S=7)=1/6 · P(S=12)=1/36" },
      { cine: "elev", text: "Am considerat sumele echiprobabile, deși nu sunt." },
      { cine: "prof", text: "Exact. Alegerea corectă a rezultatelor elementare este cheia." },
    ],
  },
  {
    materie: "Matematică M1", nivel: "BAC · Integrale", replici: [
      { cine: "elev", text: "Integrala lui x de la minus unu la unu e zero. Înseamnă că aria e zero?" },
      { cine: "prof", text: "Nu: integrala ține cont de semn. Cum arată graficul pe cele două jumătăți?", tabla: "∫₋₁¹ x dx = 0" },
      { cine: "elev", text: "Sub axă în stânga și deasupra în dreapta." },
      { cine: "prof", text: "Cele două contribuții se anulează. Pentru aria geometrică integrăm valoarea absolută." },
      { cine: "elev", text: "Sunt două triunghiuri, fiecare cu aria o jumătate." },
      { cine: "prof", text: "Exact: aria totală este 1. Când vezi că funcția schimbă semnul, împarte intervalul.", tabla: "A = ∫₋₁⁰ (−x) dx + ∫₀¹ x dx = 1" },
      { cine: "elev", text: "Deci integrală zero nu înseamnă lipsa unei suprafețe." },
      { cine: "prof", text: "Corect. Ai separat aria orientată de aria geometrică." },
    ],
  },
  {
    materie: "Economie", nivel: "BAC · Elasticitate", replici: [
      { cine: "prof", text: "Prețul crește cu 10%, iar cantitatea cerută scade cu 20%. Venitul vânzătorului crește automat?" },
      { cine: "elev", text: "Nu sunt sigur. Prețul e mai mare, dar vinde mai puțin." },
      { cine: "prof", text: "Exact. Folosește 100 de lei și 100 de produse ca punct de plecare.", tabla: "V₀ = 100 · 100 = 10.000 lei" },
      { cine: "elev", text: "După schimbare: 110 lei și 80 de produse, deci 8.800 lei." },
      { cine: "prof", text: "Venitul scade cu 12%. Raportul variațiilor procentuale are modulul 2: cererea este elastică.", tabla: "|E| = 20/10 = 2 · V₁ = 8.800 lei" },
      { cine: "elev", text: "Deci prețul mai mare poate reduce venitul." },
      { cine: "prof", text: "Da. Explică mereu efectul asupra cantității, nu te opri la preț." },
    ],
  },
  {
    materie: "Logică", nivel: "BAC · Argumentare", replici: [
      { cine: "elev", text: "Toți medicii sunt absolvenți. Ana e absolventă. Rezultă că Ana e medic?" },
      { cine: "prof", text: "Gândește-te la un absolvent de arhitectură. Respectă premisele fără să fie medic?", tabla: "Medici ⊆ Absolvenți" },
      { cine: "elev", text: "Da. Deci concluzia nu e obligatorie." },
      { cine: "prof", text: "Corect. Apartenența la mulțimea mai mare nu garantează apartenența la submulțime. Cum repari a doua premisă?" },
      { cine: "elev", text: "Ana este medic. Atunci pot spune că este absolventă." },
      { cine: "prof", text: "Exact. Ai acum un argument valid. Validitatea privește legătura logică, nu verificarea biografiei Anei.", tabla: "Toți M sunt A · Ana este M → Ana este A" },
    ],
  },
];

/** A shuffled deck visits every example once; its first item avoids the previous lesson. */
export function amestecaLectii(total: number, precedenta: number | null, random = Math.random): number[] {
  const ordine = Array.from({ length: total }, (_, i) => i);
  for (let i = ordine.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [ordine[i], ordine[j]] = [ordine[j], ordine[i]];
  }
  if (ordine.length > 1 && ordine[0] === precedenta) {
    [ordine[0], ordine[1]] = [ordine[1], ordine[0]];
  }
  return ordine;
}
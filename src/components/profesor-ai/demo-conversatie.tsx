import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";

type Replica = { cine: "elev" | "prof"; text: string; tabla?: string };
type Lectie = { materie: string; nivel: string; replici: Replica[] };

// Scripted example lessons (illustrative demo, not real student conversations).
const LECTII: Lectie[] = [
  {
    materie: "Matematică",
    nivel: "Clasa a 8-a",
    replici: [
      { cine: "prof", text: "Bună! Sunt Hannah. Ce vrei să lucrăm azi?" },
      { cine: "elev", text: "Nu înțeleg ecuațiile de gradul întâi. Gen 3x + 5 = 20." },
      { cine: "prof", text: "Ne gândim la ecuație ca la o balanță. Ce putem scoate din ambele părți ca să rămână doar 3x?", tabla: "3x + 5 = 20" },
      { cine: "elev", text: "Scad 5? Și rămâne 3x = 15." },
      { cine: "prof", text: "Exact! Acum, dacă de trei ori x face 15, cât e x?", tabla: "3x = 15" },
      { cine: "elev", text: "x = 5." },
      { cine: "prof", text: "Perfect. Verificăm: 3 ori 5 plus 5 face 20. Încearcă singur: 2x − 4 = 10.", tabla: "x = 5 ✓   →   2x − 4 = 10" },
      { cine: "elev", text: "Adun 4, 2x = 14, deci x = 7." },
      { cine: "prof", text: "Bravo, ai prins metoda! Mergem la una cu paranteze?" },
    ],
  },
  {
    materie: "Limba română",
    nivel: "BAC",
    replici: [
      { cine: "prof", text: "Salut! La ce te pot ajuta?" },
      { cine: "elev", text: "Cum încep un eseu despre „Moromeții”? Mereu mă blochez la introducere." },
      { cine: "prof", text: "Începem cu o idee, nu cu biografia autorului. Tu ce crezi că pierde Ilie Moromete la final?", tabla: "Introducere = context + idee principală" },
      { cine: "elev", text: "Familia? Și controlul asupra timpului." },
      { cine: "prof", text: "Foarte bine. Asta e teza ta: romanul arată destrămarea familiei tradiționale. Formulează o frază cu ea.", tabla: "Teză: destrămarea familiei tradiționale" },
      { cine: "elev", text: "Romanul surprinde prăbușirea unei lumi în care tatăl credea că timpul are răbdare." },
      { cine: "prof", text: "Excelent, chiar ai legat-o de citatul celebru! Acum alegem două scene care o susțin.", tabla: "Scena cinei · Plecarea fiilor" },
    ],
  },
  {
    materie: "Engleză",
    nivel: "Clasa a 6-a",
    replici: [
      { cine: "prof", text: "Hi! Ce exersăm azi la engleză?" },
      { cine: "elev", text: "Nu știu când pun -s la verbe." },
      { cine: "prof", text: "La prezentul simplu, -s apare doar la he, she și it. Cum spui „ea joacă tenis”?", tabla: "he / she / it → verb + s" },
      { cine: "elev", text: "She play tennis." },
      { cine: "prof", text: "Aproape! Ea e „she”, deci verbul primește -s. Mai încearcă.", tabla: "She play❌ → She plays ✓" },
      { cine: "elev", text: "She plays tennis!" },
      { cine: "prof", text: "Perfect! Acum: „noi citim cărți”. Pui -s?" },
      { cine: "elev", text: "Nu, e „we”. We read books." },
      { cine: "prof", text: "Exact. Ai înțeles regula. Facem trei propoziții despre familia ta?" },
    ],
  },
  {
    materie: "Fizică",
    nivel: "Clasa a 9-a",
    replici: [
      { cine: "prof", text: "Bună! Cu ce începem?" },
      { cine: "elev", text: "O mașină merge 120 km în 2 ore. Care e viteza?" },
      { cine: "prof", text: "Viteza înseamnă distanță împărțită la timp. Tu ce calcul ai face?", tabla: "v = d / t" },
      { cine: "elev", text: "120 împărțit la 2, deci 60." },
      { cine: "prof", text: "Corect: 60 de kilometri pe oră. Dar în metri pe secundă?", tabla: "v = 120 km / 2 h = 60 km/h" },
      { cine: "elev", text: "Hmm, nu știu să transform." },
      { cine: "prof", text: "Un kilometru are 1000 de metri, o oră are 3600 de secunde. Împarte 60 la 3,6.", tabla: "60 km/h = 60 : 3,6 ≈ 16,7 m/s" },
      { cine: "elev", text: "Aproape 16,7 metri pe secundă." },
      { cine: "prof", text: "Exact! Reține trucul: din km/h în m/s împarți la 3,6." },
    ],
  },
  {
    materie: "Matematică M1",
    nivel: "BAC · Analiză",
    replici: [
      { cine: "elev", text: "Am f(x) = x³ − 3x. Cum aflu punctele de extrem?" },
      { cine: "prof", text: "Extremele apar unde derivata se anulează. Calculează tu f′(x).", tabla: "f(x) = x³ − 3x" },
      { cine: "elev", text: "f′(x) = 3x² − 3." },
      { cine: "prof", text: "Corect. Când e zero?", tabla: "f′(x) = 3x² − 3 = 3(x − 1)(x + 1)" },
      { cine: "elev", text: "La x = 1 și x = −1." },
      { cine: "prof", text: "Acum semnul: înainte de −1 derivata e pozitivă, între −1 și 1 negativă, după 1 pozitivă. Ce tip de punct e −1?", tabla: "x: −∞  −1  1  +∞ │ f′: +  0  −  0  +" },
      { cine: "elev", text: "Funcția crește apoi scade, deci maxim." },
      { cine: "prof", text: "Exact. Maxim în −1, cu f(−1) = 2, și minim în 1, cu f(1) = −2. Așa se punctează complet la BAC.", tabla: "Max (−1, 2) · Min (1, −2)" },
    ],
  },
  {
    materie: "Chimie",
    nivel: "Clasa a 10-a",
    replici: [
      { cine: "elev", text: "Câte grame de apă se obțin din 4 g de hidrogen?" },
      { cine: "prof", text: "Începem cu ecuația reacției. O poți scrie egalată?" },
      { cine: "elev", text: "2H₂ + O₂ → 2H₂O." },
      { cine: "prof", text: "Perfect. Câți moli înseamnă 4 g de H₂, dacă masa molară e 2?", tabla: "2H₂ + O₂ → 2H₂O" },
      { cine: "elev", text: "2 moli." },
      { cine: "prof", text: "Raportul dintre H₂ și H₂O e 2 la 2. Câți moli de apă rezultă?", tabla: "n(H₂) = 4 g : 2 g/mol = 2 mol" },
      { cine: "elev", text: "Tot 2 moli, deci 2 ori 18 = 36 g." },
      { cine: "prof", text: "Excelent! 36 de grame de apă. Data viitoare adăugăm un reactant în exces.", tabla: "m(H₂O) = 2 mol · 18 g/mol = 36 g" },
    ],
  },
  {
    materie: "Informatică",
    nivel: "Clasa a 11-a",
    replici: [
      { cine: "elev", text: "Nu înțeleg recursivitatea. Cum calculez factorialul recursiv?" },
      { cine: "prof", text: "Orice funcție recursivă are o condiție de oprire. Când e factorialul evident?", tabla: "n! = n · (n − 1)!" },
      { cine: "elev", text: "Când n e 0, rezultatul e 1." },
      { cine: "prof", text: "Exact, asta e cazul de bază. Altfel, funcția se cheamă pe ea însăși cu n − 1.", tabla: "int fact(int n) { if (n == 0) return 1; return n * fact(n - 1); }" },
      { cine: "elev", text: "Deci fact(3) e 3 ori fact(2)?" },
      { cine: "prof", text: "Da. Continuă tu lanțul până la capăt.", tabla: "fact(3) = 3 · fact(2)" },
      { cine: "elev", text: "3 · 2 · 1 · fact(0), adică 6." },
      { cine: "prof", text: "Perfect! Fără cazul de bază, funcția nu s-ar opri niciodată. Încercăm acum Fibonacci?" },
    ],
  },
  {
    materie: "Biologie",
    nivel: "BAC · Genetică",
    replici: [
      { cine: "elev", text: "Ochii căprui (A) domină pe cei albaștri (a). Doi părinți Aa. Ce copii pot avea?" },
      { cine: "prof", text: "Facem pătratul lui Punnett. Ce gameți dă fiecare părinte?", tabla: "Aa × Aa" },
      { cine: "elev", text: "A și a." },
      { cine: "prof", text: "Bine. Combină-i: ce genotipuri ies?", tabla: "AA · Aa · aA · aa" },
      { cine: "elev", text: "Un AA, două Aa și un aa." },
      { cine: "prof", text: "Corect. Ce procent dintre copii vor avea ochi albaștri?", tabla: "1 AA : 2 Aa : 1 aa" },
      { cine: "elev", text: "Doar aa, deci 25%." },
      { cine: "prof", text: "Exact: fenotipic 3 la 1, căprui față de albaștri. Așa se rezolvă subiectul III.", tabla: "75% căprui · 25% albaștri" },
    ],
  },
];

export function DemoConversatie() {
  const [idx, setIdx] = useState<number | null>(null);
  const [n, setN] = useState(1);

  useEffect(() => setIdx(Math.floor(Math.random() * LECTII.length)), []);

  const lectie = LECTII[idx ?? 0];
  useEffect(() => {
    if (idx === null) return;
    if (n >= lectie.replici.length) {
      const t = setTimeout(() => urmatoarea(), 5000);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setN((x) => x + 1), 2200);
    return () => clearTimeout(t);
  }, [n, idx]); // eslint-disable-line react-hooks/exhaustive-deps

  function urmatoarea() {
    setIdx((i) => ((i ?? 0) + 1 + Math.floor(Math.random() * (LECTII.length - 1))) % LECTII.length);
    setN(1);
  }

  const vizibile = lectie.replici.slice(0, n);
  const tabla = [...vizibile].reverse().find((r) => r.tabla)?.tabla;
  const scrie = n < lectie.replici.length;

  return (
    <div className="card-soft overflow-hidden" aria-label="Exemplu de lecție cu Profesorul AI">
      <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
        <p className="text-sm font-bold">
          Exemplu de lecție · {lectie.materie} <span className="font-normal text-muted-foreground">· {lectie.nivel}</span>
        </p>
        <button type="button" onClick={urmatoarea} className="btn-outline h-8 px-3 text-xs">
          <RefreshCw className="mr-1 h-3 w-3" /> Altă lecție
        </button>
      </div>
      <div className="min-h-12 border-b border-border bg-foreground px-4 py-3 font-mono text-sm text-background">
        {tabla ? <>Tabla: {tabla}</> : <span className="opacity-60">Tabla</span>}
      </div>
      <div className="flex h-80 flex-col justify-end gap-2 overflow-hidden p-4">
        {vizibile.slice(-4).map((r, i) => (
          <div
            key={`${idx}-${n}-${i}`}
            className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-6 ${
              r.cine === "prof" ? "self-start bg-primary-soft" : "self-end bg-primary text-primary-foreground"
            }`}
          >
            <span className="block text-[11px] font-bold opacity-70">{r.cine === "prof" ? "Hannah · Profesor AI" : "Elev"}</span>
            {r.text}
          </div>
        ))}
        {scrie && <p className="text-xs text-muted-foreground animate-pulse">{lectie.replici[n].cine === "prof" ? "Hannah vorbește…" : "Elevul răspunde…"}</p>}
      </div>
    </div>
  );
}

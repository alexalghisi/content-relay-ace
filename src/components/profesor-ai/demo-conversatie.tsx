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
        {vizibile.slice(-6).map((r, i) => (
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

// Afișarea unei rezolvări verificate din src/data/rezolvari-verificate.
// Tot conținutul este HTML randat pe server (indexabil și lizibil fără JavaScript și fără AI);
// butoanele Meditatorului AI sunt doar o scurtătură opțională lângă fiecare exercițiu.
import { useNavigate } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Bot, CheckCircle2, FileCheck2, Lightbulb, ShieldCheck, TriangleAlert } from "lucide-react";
import { MEDITATOR_CONTEXT_KEY } from "@/components/ai/simulare-ai";
import {
  idExercitiu,
  type ItemRezolvat,
  type RezolvareVerificata,
} from "@/data/rezolvari-verificate";

function Md({ text }: { text: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children }) => <span>{children}</span>,
        code: ({ children }) => (
          <code className="rounded bg-muted px-1 py-0.5 text-[0.9em]">{children}</code>
        ),
        a: ({ href, children }) => (
          <a href={href} className="text-primary underline">
            {children}
          </a>
        ),
      }}
    >
      {text}
    </ReactMarkdown>
  );
}

const INTREBARI = (item: ItemRezolvat) => [
  {
    eticheta: "Explică-mi mai simplu",
    text: `Explică-mi mai simplu ${item.eticheta}, pas cu pas.`,
  },
  {
    eticheta: "Dă-mi un indiciu",
    text: `Dă-mi doar un indiciu pentru ${item.eticheta}, fără să-mi spui răspunsul.`,
  },
  { eticheta: "Altă metodă", text: `Arată-mi o altă metodă de rezolvare pentru ${item.eticheta}.` },
  {
    eticheta: "Exercițiu asemănător",
    text: `Dă-mi un exercițiu asemănător cu ${item.eticheta}, să-l rezolv singur.`,
  },
  ...(item.cod?.limbaj === "cpp"
    ? [
        {
          eticheta: "Explică-mi codul",
          text: `Explică-mi linie cu linie codul de la ${item.eticheta}.`,
        },
      ]
    : []),
];

function IntreabaMeditatorul({
  rezolvare,
  item,
}: {
  rezolvare: RezolvareVerificata;
  item: ItemRezolvat;
}) {
  const navigate = useNavigate();
  const deschide = (intrebare: string) => {
    try {
      // Trimitem doar id-ul exercițiului; serverul construiește contextul din conținutul verificat.
      sessionStorage.setItem(
        MEDITATOR_CONTEXT_KEY,
        JSON.stringify({
          materie: rezolvare.materie,
          exercitiu: idExercitiu(rezolvare, item),
          intrebare,
        }),
      );
    } catch {
      /* fără sessionStorage: Meditatorul pornește fără context */
    }
    navigate({ to: "/meditator-ai" });
  };
  return (
    <div className="mt-5 rounded-xl border border-primary/20 bg-primary-soft/30 p-4">
      <p className="flex items-center gap-2 text-sm font-medium">
        <Bot className="h-4 w-4 text-primary" /> Nu e clar? Întreabă Meditatorul AI despre acest
        exercițiu
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {INTREBARI(item).map((q) => (
          <button
            key={q.eticheta}
            type="button"
            onClick={() => deschide(q.text)}
            className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium hover:border-primary/40 hover:text-primary"
          >
            {q.eticheta}
          </button>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        Necesită cont gratuit, cu un număr limitat de mesaje pe zi. AI-ul poate greși — rezolvarea
        verificată rămâne cea de pe această pagină.
      </p>
    </div>
  );
}

function Item({ rezolvare, item }: { rezolvare: RezolvareVerificata; item: ItemRezolvat }) {
  return (
    <section
      id={item.id}
      aria-labelledby={`${item.id}-h`}
      className="scroll-mt-24 border-t border-border pt-8"
    >
      <h3 id={`${item.id}-h`} className="text-lg font-semibold">
        {item.eticheta}{" "}
        <span className="text-sm font-normal text-muted-foreground">({item.puncte} p)</span>
      </h3>
      <p className="mt-2 rounded-lg bg-muted/50 p-3 text-sm">
        <span className="font-medium">Cerința, pe scurt: </span>
        {item.cerinta}
      </p>
      <p className="mt-3 text-sm">
        <span className="font-medium">Ce se cere: </span>
        <Md text={item.ceSeCere} />
      </p>
      {item.notiuni.length > 0 && (
        <p className="mt-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Noțiuni: </span>
          {item.notiuni.map((n, i) => (
            <span key={n}>
              {i > 0 && " · "}
              <Md text={n} />
            </span>
          ))}
        </p>
      )}
      <h4 className="mt-4 text-sm font-semibold">Rezolvare pas cu pas</h4>
      <ol className="mt-2 list-decimal space-y-2 pl-6 text-[0.95rem] leading-relaxed">
        {item.pasi.map((p, i) => (
          <li key={i}>
            <Md text={p} />
          </li>
        ))}
      </ol>
      {item.cod && (
        <pre className="mt-4 overflow-x-auto rounded-xl border border-border bg-muted/40 p-4 text-sm leading-relaxed">
          <code data-lang={item.cod.limbaj}>{item.cod.sursa}</code>
        </pre>
      )}
      {item.complexitate && (
        <p className="mt-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Complexitate: </span>
          {item.complexitate}
        </p>
      )}
      <p className="mt-4 flex items-start gap-2 rounded-lg border border-primary/30 bg-primary-soft/40 p-3">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <span>
          <span className="font-semibold">Răspuns final: </span>
          <Md text={item.raspuns} />
        </span>
      </p>
      <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
        <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
        <span>
          <span className="font-medium text-foreground">Verificare: </span>
          {item.verificare}
        </span>
      </p>
      {item.greseli.length > 0 && (
        <div className="mt-3 text-sm">
          <p className="flex items-center gap-2 font-medium">
            <TriangleAlert className="h-4 w-4 text-primary" /> Greșeli frecvente
          </p>
          <ul className="mt-1 list-disc space-y-1 pl-6 text-muted-foreground">
            {item.greseli.map((g) => (
              <li key={g}>
                <Md text={g} />
              </li>
            ))}
          </ul>
        </div>
      )}
      <IntreabaMeditatorul rezolvare={rezolvare} item={item} />
    </section>
  );
}

export function RezolvareVerificataView({
  rezolvare,
  pdfSubiect,
}: {
  rezolvare: RezolvareVerificata;
  pdfSubiect: string;
}) {
  const r = rezolvare;
  return (
    <>
      <section className="mt-6 grid gap-4 rounded-2xl border border-border bg-card p-5 text-sm sm:grid-cols-2">
        <div>
          <p className="font-semibold">Subiectul oficial</p>
          <p className="mt-1 text-muted-foreground">
            {r.proba}, {r.varianta != null ? `Varianta ${r.varianta}` : "Simulare"}. {r.programa}.
          </p>
          <p className="mt-1 text-muted-foreground">Emitent: {r.sursa.emitent}.</p>
          <a
            href={pdfSubiect}
            target="_blank"
            rel="noopener"
            className="mt-2 inline-flex text-primary underline"
          >
            Deschide subiectul oficial (PDF)
          </a>
        </div>
        <div>
          <p className="flex items-center gap-2 font-semibold">
            <ShieldCheck className="h-4 w-4 text-primary" /> Cum am verificat rezolvarea
          </p>
          <ul className="mt-1 space-y-1 text-muted-foreground">
            {r.verificari.map((v) => (
              <li key={v.ce}>
                <span className="font-medium text-foreground">{v.rezultat}</span> — {v.ce}.{" "}
                {v.metoda} ({v.data}).
              </li>
            ))}
          </ul>
        </div>
        <p className="text-muted-foreground sm:col-span-2">
          <span className="font-medium text-foreground">Despre barem: </span>
          {r.documente.notaBarem}
        </p>
      </section>

      <nav aria-label="Cuprins" className="mt-6 rounded-xl border border-border p-4 text-sm">
        <p className="font-semibold">Cuprins</p>
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
          {r.sectiuni
            .flatMap((s) => s.itemi)
            .map((i) => (
              <li key={i.id}>
                <a href={`#${i.id}`} className="text-primary hover:underline">
                  {i.eticheta.replace("Subiectul ", "")}
                </a>
              </li>
            ))}
        </ul>
      </nav>

      {r.sectiuni.map((s) => (
        <section key={s.titlu} className="mt-10" aria-label={s.titlu}>
          <h2 className="text-2xl font-bold">
            {s.titlu}{" "}
            <span className="text-base font-normal text-muted-foreground">
              ({s.puncte} de puncte)
            </span>
          </h2>
          <div className="mt-4 space-y-8">
            {s.itemi.map((i) => (
              <Item key={i.id} rezolvare={r} item={i} />
            ))}
          </div>
        </section>
      ))}

      <p className="mt-10 flex items-start gap-2 rounded-xl border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
        <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <span>
          <span className="font-medium text-foreground">Punctaj: </span>
          {r.notaPunctaj}
        </span>
      </p>
    </>
  );
}

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Bot, Loader2, Send, Trash2, UserRound } from "lucide-react";
import { intreabaMeditatorul } from "@/lib/simulare-ai.functions";
import { AI_MATERII, LIMITA_MESAJE_ZI, type AiMaterie } from "@/lib/simulare-ai";
import { MEDITATOR_CONTEXT_KEY } from "@/components/ai/simulare-ai";

type Msg = { role: "user" | "assistant"; content: string };

const SUGESTII = [
  "Explică-mi pe înțeles cum rezolv o ecuație de gradul 2.",
  "Nu înțeleg când folosesc Present Perfect și când Past Simple.",
  "Cum structurez un eseu despre un roman interbelic la BAC?",
  "De ce 0,999… este egal cu 1?",
];

export function MeditatorAi() {
  const [materie, setMaterie] = useState<AiMaterie | "">("");
  const [context, setContext] = useState<string | undefined>();
  const [mesaje, setMesaje] = useState<Msg[]>([]);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [eroare, setEroare] = useState("");
  const [ramase, setRamase] = useState<number | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // Venit din Simularea AI: preluăm contextul testului (o singură dată).
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(MEDITATOR_CONTEXT_KEY);
      if (!raw) return;
      sessionStorage.removeItem(MEDITATOR_CONTEXT_KEY);
      const c = JSON.parse(raw) as { materie?: AiMaterie; context?: string };
      if (c.materie) setMaterie(c.materie);
      if (c.context) {
        setContext(c.context);
        setText("Am terminat testul. Explică-mi, pe rând, greșelile pe care le-am făcut.");
      }
    } catch {
      /* fără context */
    }
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [mesaje, busy]);

  const trimite = async (e?: FormEvent, preset?: string) => {
    e?.preventDefault();
    const q = (preset ?? text).trim();
    if (!q || busy) return;
    const next = [...mesaje, { role: "user" as const, content: q.slice(0, 3000) }].slice(-16);
    setMesaje(next);
    setText("");
    setBusy(true);
    setEroare("");
    try {
      const r = await intreabaMeditatorul({
        data: { materie: materie || undefined, context, mesaje: next },
      });
      if (!r.ok) {
        setEroare(r.error);
        setMesaje(mesaje);
        setText(q);
        return;
      }
      setMesaje((m) => [...m, { role: "assistant", content: r.data.raspuns }]);
      if (r.ramase !== undefined) setRamase(r.ramase);
    } catch {
      setEroare("Nu am putut trimite mesajul. Încearcă din nou.");
      setMesaje(mesaje);
      setText(q);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="card-soft flex flex-col overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3">
        <span className="inline-flex items-center gap-2 text-sm font-semibold">
          <Bot className="h-5 w-5 text-primary" /> Meditatorul AI
        </span>
        <div className="flex items-center gap-2">
          <select
            value={materie}
            onChange={(e) => setMaterie(e.target.value as AiMaterie | "")}
            aria-label="Materia"
            className="h-9 rounded-lg border border-border bg-background px-2 text-xs"
          >
            <option value="">Orice materie</option>
            {AI_MATERII.map((m) => (
              <option key={m.slug} value={m.slug}>
                {m.name}
              </option>
            ))}
          </select>
          {mesaje.length > 0 && (
            <button
              type="button"
              onClick={() => {
                setMesaje([]);
                setContext(undefined);
                setEroare("");
              }}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground hover:text-destructive"
              aria-label="Conversație nouă"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <div className="max-h-[60vh] min-h-72 space-y-4 overflow-y-auto px-4 py-5" aria-live="polite">
        {mesaje.length === 0 && (
          <div>
            <p className="text-sm text-muted-foreground">
              {context
                ? "Am primit rezultatul testului tău. Trimite mesajul de mai jos și luăm greșelile pe rând."
                : "Întreabă orice de la școală: o noțiune, un exercițiu, o temă de eseu. Îți explic pas cu pas."}
            </p>
            {!context && (
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {SUGESTII.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => void trimite(undefined, s)}
                    className="rounded-xl border border-border bg-background px-3 py-2.5 text-left text-sm hover:border-primary/40 hover:text-primary"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        {mesaje.map((m, i) => (
          <div key={i} className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
            <span
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${m.role === "user" ? "bg-muted" : "bg-primary text-primary-foreground"}`}
            >
              {m.role === "user" ? <UserRound className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
            </span>
            <div
              className={`min-w-0 max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${m.role === "user" ? "bg-primary-soft whitespace-pre-line" : "bg-background border border-border"}`}
            >
              {m.role === "user" ? (
                m.content
              ) : (
                <div className="prose prose-sm max-w-none break-words [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:my-2 [&_ul]:list-disc [&_ul]:pl-5">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} skipHtml>
                    {m.content}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        ))}
        {busy && (
          <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" /> Meditatorul scrie…
          </p>
        )}
        {eroare && <p className="text-sm font-medium text-destructive">{eroare}</p>}
        <div ref={endRef} />
      </div>

      <form onSubmit={trimite} className="flex items-end gap-2 border-t border-border p-3">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              void trimite();
            }
          }}
          maxLength={3000}
          rows={2}
          placeholder="Scrie întrebarea ta…"
          className="min-h-12 flex-1 resize-none rounded-xl border border-border bg-background p-3 text-sm"
        />
        <button
          type="submit"
          disabled={busy || !text.trim()}
          className="btn-primary h-12 w-12 shrink-0 p-0"
          aria-label="Trimite"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
      <p className="px-4 pb-3 text-xs text-muted-foreground">
        {ramase !== null
          ? `${ramase} mesaje rămase azi`
          : `${LIMITA_MESAJE_ZI} mesaje pe zi gratuit`}{" "}
        · AI-ul poate greși. Pentru lecții cu un om,{" "}
        <Link to="/meditatii" className="text-primary hover:underline">
          cere un meditator
        </Link>
        .
      </p>
    </div>
  );
}

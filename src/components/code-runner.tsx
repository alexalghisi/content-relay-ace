// Panou interactiv „Rulează codul” — apare lângă programele din rezolvările verificate.
// Codul pornește de la sursa verificată de pe pagină; elevul o poate modifica și rula
// cu propria intrare. Necesită cont gratuit (serverul verifică autentificarea și cota zilnică).
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Loader2, Play, TerminalSquare } from "lucide-react";
import { ruleazaCod } from "@/lib/code-runner.functions";
import { supabase } from "@/integrations/supabase/client";

type Stare =
  | { tip: "idle" }
  | { tip: "ruleaza" }
  | {
      tip: "gata";
      status: string;
      stdout: string;
      stderr: string;
      timeMs: number | null;
      memoryKb: number | null;
    }
  | { tip: "eroare"; mesaj: string };

export function CodeRunner({ sursaInitiala }: { sursaInitiala: string }) {
  const [cod, setCod] = useState(sursaInitiala);
  const [intrare, setIntrare] = useState("");
  const [stare, setStare] = useState<Stare>({ tip: "idle" });

  async function ruleaza() {
    setStare({ tip: "ruleaza" });
    try {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        setStare({ tip: "eroare", mesaj: "autentificare" });
        return;
      }
      const r = await ruleazaCod({ data: { lang: "cpp", code: cod, input: intrare } });
      setStare({
        tip: "gata",
        status: r.status,
        stdout: r.stdout,
        stderr: r.stderr,
        timeMs: r.timeMs,
        memoryKb: r.memoryKb,
      });
    } catch (e) {
      setStare({
        tip: "eroare",
        mesaj: e instanceof Error ? e.message : "Rularea a eșuat. Încearcă din nou.",
      });
    }
  }

  return (
    <div className="mt-4 rounded-xl border border-border bg-card p-4">
      <p className="flex items-center gap-2 text-sm font-semibold">
        <TerminalSquare className="h-4 w-4 text-primary" /> Rulează codul online (C++)
      </p>
      <p className="mt-1 text-xs text-muted-foreground">
        Pornește de la sursa verificată de mai sus — o poți modifica și rula cu propria intrare.
        Necesită cont gratuit; ai 30 de rulări pe zi.
      </p>
      <label className="mt-3 block text-xs font-medium text-muted-foreground" htmlFor="runner-cod">
        Codul sursă
      </label>
      <textarea
        id="runner-cod"
        value={cod}
        onChange={(e) => setCod(e.target.value)}
        spellCheck={false}
        className="mt-1 h-48 w-full rounded-lg border border-border bg-muted/40 p-3 font-mono text-xs leading-relaxed focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <label className="mt-3 block text-xs font-medium text-muted-foreground" htmlFor="runner-in">
        Date de intrare (ca la tastatură)
      </label>
      <textarea
        id="runner-in"
        value={intrare}
        onChange={(e) => setIntrare(e.target.value)}
        spellCheck={false}
        placeholder="ex. 18 24"
        className="mt-1 h-16 w-full rounded-lg border border-border bg-muted/40 p-3 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-primary"
      />
      <div className="mt-3 flex items-center gap-3">
        <button
          type="button"
          onClick={ruleaza}
          disabled={stare.tip === "ruleaza"}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60"
        >
          {stare.tip === "ruleaza" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Play className="h-4 w-4" />
          )}
          {stare.tip === "ruleaza" ? "Se rulează…" : "Rulează"}
        </button>
        {stare.tip === "gata" && stare.timeMs != null && (
          <span className="text-xs text-muted-foreground">
            {stare.timeMs} ms
            {stare.memoryKb != null ? ` · ${Math.round(stare.memoryKb / 1024)} MB` : ""}
          </span>
        )}
      </div>
      {stare.tip === "eroare" && (
        <p className="mt-3 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm">
          {stare.mesaj === "autentificare" ? (
            <>
              Ai nevoie de cont gratuit ca să rulezi codul.{" "}
              <Link to="/login" className="font-medium text-primary underline">
                Autentifică-te
              </Link>{" "}
              și revino aici.
            </>
          ) : (
            stare.mesaj
          )}
        </p>
      )}
      {stare.tip === "gata" && (
        <div className="mt-3 space-y-2">
          <p className="text-xs font-medium">
            Rezultat: <span className="text-primary">{stare.status}</span>
          </p>
          {stare.stdout && (
            <pre className="overflow-x-auto rounded-lg border border-border bg-muted/40 p-3 font-mono text-xs whitespace-pre-wrap">
              {stare.stdout}
            </pre>
          )}
          {stare.stderr && (
            <pre className="overflow-x-auto rounded-lg border border-destructive/30 bg-destructive/5 p-3 font-mono text-xs whitespace-pre-wrap">
              {stare.stderr}
            </pre>
          )}
          {!stare.stdout && !stare.stderr && (
            <p className="text-xs text-muted-foreground">Programul nu a afișat nimic.</p>
          )}
        </div>
      )}
    </div>
  );
}

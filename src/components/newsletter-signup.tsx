import { useState } from "react";
import { Mail } from "lucide-react";
import { subscribeToNewsletter } from "@/lib/newsletter.functions";
import { BAC_SUBJECTS } from "@/data/bac-catalog";

/** Abonare la variante și rezolvări noi. Dublă confirmare: rândul rămâne neconfirmat
 * până când elevul apasă linkul din emailul de confirmare. */
export function NewsletterSignup({ defaultSubject, className = "" }: { defaultSubject?: string; className?: string }) {
  const [email, setEmail] = useState("");
  const [materie, setMaterie] = useState(defaultSubject ?? "");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: email.trim().toLowerCase(), materii: materie ? [materie] : [] });
    if (error) {
      if (error.code === "23505") {
        setState("done");
        setMsg("Ești deja pe listă — îți trimitem variantele noi pe email.");
        return;
      }
      setState("error");
      setMsg("Nu am putut salva adresa. Verifică emailul și încearcă din nou.");
      return;
    }
    setState("done");
    setMsg("Gata! Ți-am trimis un email de confirmare — dă click pe link ca să activezi abonarea.");
  }

  if (state === "done") {
    return (
      <div className={`rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 ${className}`}>
        <p className="font-medium">{msg}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`rounded-2xl border border-border bg-card p-6 ${className}`}>
      <h2 className="flex items-center gap-2 text-xl font-semibold">
        <Mail className="h-5 w-5 text-primary" aria-hidden /> Primești variantele și rezolvările noi
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Un email scurt când publicăm subiecte sau rezolvări noi la materia ta. Te poți dezabona oricând, dintr-un click.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto_auto]">
        <label className="text-sm">
          <span className="sr-only">Email</span>
          <input type="email" required className="field-input" placeholder="adresa ta de email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="text-sm">
          <span className="sr-only">Materie</span>
          <select className="field-input" value={materie} onChange={(e) => setMaterie(e.target.value)} aria-label="Materia care te interesează">
            <option value="">Toate materiile</option>
            {BAC_SUBJECTS.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </label>
        <button type="submit" disabled={state === "sending"}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:opacity-60">
          {state === "sending" ? "Se trimite…" : "Abonează-mă"}
        </button>
      </div>
      {state === "error" && <p className="mt-2 text-sm text-destructive">{msg}</p>}
      <p className="mt-2 text-xs text-muted-foreground">Prin abonare ești de acord cu politica de confidențialitate. Nu trimitem spam.</p>
    </form>
  );
}

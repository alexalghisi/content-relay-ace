import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MailCheck } from "lucide-react";
import { toast } from "sonner";
import { trimiteResetareParola } from "@/lib/inregistrare.functions";

export const Route = createFileRoute("/parola-uitata")({
  validateSearch: z.object({ email: z.string().max(255).optional() }),
  head: () => ({
    meta: [
      { title: "Am uitat parola — MeditatiiDirect.ro" },
      { name: "description", content: "Primești pe email un link ca să-ți alegi o parolă nouă pentru contul MeditatiiDirect.ro." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ParolaUitata,
});

function ParolaUitata() {
  const { email: emailInitial } = Route.useSearch();
  const [email, setEmail] = useState(emailInitial ?? "");
  const [loading, setLoading] = useState(false);
  const [trimis, setTrimis] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = z.string().trim().email().max(255).safeParse(email);
    if (!parsed.success) { toast.error("Scrie adresa de email a contului."); return; }
    setLoading(true);
    const r = await trimiteResetareParola({ data: { email: parsed.data, origin: window.location.origin } })
      .catch(() => ({ ok: false as const, error: "Conexiunea a eșuat. Verifică internetul și încearcă din nou." }));
    setLoading(false);
    if (!r.ok) { toast.error(r.error); return; }
    setTrimis(true);
  };

  if (trimis) {
    return (
      <section className="container-page max-w-md py-12 sm:py-16">
        <h1 className="flex items-center gap-2 text-3xl font-bold">
          <MailCheck className="h-7 w-7 text-primary" aria-hidden="true" /> Verifică-ți emailul
        </h1>
        <p className="mt-3 text-muted-foreground">
          Dacă există un cont cu adresa <strong className="text-foreground">{email.trim()}</strong>, ți-am trimis un link ca să-ți
          alegi o parolă nouă. Linkul e valabil o oră. Dacă nu îl găsești, verifică și folderul Spam sau Promoții.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Te-ai înscris cu Google? Atunci nu ai parolă pe site — folosește butonul „Continuă cu Google” la autentificare.
        </p>
        <button onClick={() => setTrimis(false)} className="mt-6 w-full h-12 rounded-full border border-border bg-background hover:bg-muted text-sm font-medium">
          Trimite din nou
        </button>
        <p className="mt-6 text-sm text-muted-foreground">
          <Link to="/login" className="text-primary font-medium hover:underline">Înapoi la autentificare</Link>
        </p>
      </section>
    );
  }

  return (
    <section className="container-page max-w-md py-12 sm:py-16">
      <h1 className="text-3xl font-bold">Ai uitat parola?</h1>
      <p className="mt-2 text-muted-foreground">Scrie emailul contului și îți trimitem un link ca să alegi o parolă nouă.</p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div>
          <label htmlFor="reset-email" className="text-sm font-medium">Email</label>
          <input id="reset-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" required />
        </div>
        <button type="submit" disabled={loading} className="btn-primary w-full h-12 disabled:opacity-60">
          {loading ? "Se trimite..." : "Trimite linkul de resetare"}
        </button>
      </form>
      <p className="mt-6 text-sm text-muted-foreground">
        Ți-ai amintit parola? <Link to="/login" className="text-primary font-medium hover:underline">Autentifică-te</Link>
      </p>
    </section>
  );
}

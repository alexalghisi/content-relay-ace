import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { PasswordInput } from "@/components/password-input";
import { eroareParolaRo, PAROLA_MIN, verificaParolaNoua } from "@/lib/parola";

export const Route = createFileRoute("/resetare-parola")({
  validateSearch: z.object({
    token_hash: z.string().max(200).optional(),
    type: z.literal("recovery").optional(),
  }),
  head: () => ({
    meta: [
      { title: "Parolă nouă — MeditatiiDirect.ro" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ResetareParola,
});

type Stare = "verific" | "formular" | "gata" | "expirat";
const camp = "w-full h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

function ResetareParola() {
  const { token_hash } = Route.useSearch();
  const navigate = useNavigate();
  const [stare, setStare] = useState<Stare>("verific");
  const [parola, setParola] = useState("");
  const [confirmare, setConfirmare] = useState("");
  const [eroare, setEroare] = useState("");
  const [loading, setLoading] = useState(false);
  const pornit = useRef(false);

  useEffect(() => {
    if (pornit.current) return;
    pornit.current = true;
    (async () => {
      if (!token_hash) {
        setStare("expirat");
        return;
      }
      const { error } = await supabase.auth.verifyOtp({ token_hash, type: "recovery" });
      if (error) {
        setStare("expirat");
        return;
      }
      // Tokenul nu mai rămâne în bara de adrese / istoric.
      window.history.replaceState(null, "", "/resetare-parola");
      setStare("formular");
    })();
  }, [token_hash]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const problema = verificaParolaNoua(parola, confirmare);
    if (problema) { setEroare(problema); return; }
    setEroare("");
    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password: parola }).catch(() => ({ error: { message: "network" } }));
    setLoading(false);
    if (error) { setEroare(eroareParolaRo(error.message)); return; }
    setStare("gata");
    toast.success("Parola a fost schimbată.");
  };

  return (
    <section className="container-page max-w-md py-12 sm:py-16">
      {stare === "verific" && (
        <p className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" /> Verificăm linkul…
        </p>
      )}
      {stare === "expirat" && (
        <>
          <h1 className="text-3xl font-bold">Linkul nu mai este valabil</h1>
          <p className="mt-3 text-muted-foreground">
            Linkul de resetare a expirat sau a fost deja folosit. Cere unul nou — durează câteva secunde.
          </p>
          <Link to="/parola-uitata" className="btn-primary mt-6 inline-flex h-12 px-7">Cere un link nou</Link>
        </>
      )}
      {stare === "formular" && (
        <>
          <h1 className="text-3xl font-bold">Alege o parolă nouă</h1>
          <p className="mt-2 text-muted-foreground">Minim {PAROLA_MIN} caractere. O vei folosi de acum la autentificare.</p>
          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div>
              <label htmlFor="parola-noua" className="text-sm font-medium">Parola nouă</label>
              <PasswordInput id="parola-noua" autoComplete="new-password" value={parola} onChange={(e) => setParola(e.target.value)} className={camp} required />
            </div>
            <div>
              <label htmlFor="parola-confirmare" className="text-sm font-medium">Scrie din nou parola nouă</label>
              <PasswordInput id="parola-confirmare" autoComplete="new-password" value={confirmare} onChange={(e) => setConfirmare(e.target.value)} className={camp} required />
            </div>
            {eroare && <p role="alert" className="rounded-xl bg-destructive/10 px-4 py-2 text-sm text-destructive">{eroare}</p>}
            <button type="submit" disabled={loading} className="btn-primary w-full h-12 disabled:opacity-60">
              {loading ? "Se salvează..." : "Salvează parola nouă"}
            </button>
          </form>
        </>
      )}
      {stare === "gata" && (
        <>
          <h1 className="flex items-center gap-2 text-3xl font-bold">
            <CheckCircle2 className="h-7 w-7 text-primary" aria-hidden="true" /> Parola a fost schimbată
          </h1>
          <p className="mt-3 text-muted-foreground">Ești autentificat. De acum folosești parola nouă.</p>
          <button onClick={() => navigate({ to: "/" })} className="btn-primary mt-6 h-12 px-7">Mergi la pagina principală</button>
        </>
      )}
    </section>
  );
}

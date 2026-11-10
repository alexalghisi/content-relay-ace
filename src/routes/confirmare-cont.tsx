import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { VerificareTelefon } from "@/components/profesor-ai/verificare-telefon";
import { TELEFON_LA_INREGISTRARE } from "@/lib/telefon-inregistrare";

// Confirmarea e-mailului este urmată de verificarea telefonului când regula este activă.
const DUPA_EMAIL = TELEFON_LA_INREGISTRARE ? "telefon" : "gata";

export const Route = createFileRoute("/confirmare-cont")({
  validateSearch: z.object({
    token_hash: z.string().max(200).optional(),
    type: z.enum(["signup", "magiclink"]).optional(),
  }),
  head: () => ({
    meta: [
      { title: "Confirmare cont — MeditatiiDirect.ro" },
      { name: "description", content: "Confirmă e-mailul și numărul de telefon prin SMS pentru contul tău MeditatiiDirect.ro." },
      { property: "og:title", content: "Confirmare cont — MeditatiiDirect.ro" },
      { property: "og:description", content: "Confirmarea e-mailului și verificarea telefonului pentru activarea contului." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ConfirmareCont,
});

type Stare = "verific" | "telefon" | "gata" | "eroare";

function ConfirmareCont() {
  const { token_hash } = Route.useSearch();
  const [stare, setStare] = useState<Stare>("verific");
  const pornit = useRef(false);

  useEffect(() => {
    if (pornit.current) return;
    pornit.current = true;
    (async () => {
      if (!token_hash) {
        const { data } = await supabase.auth.getSession();
        setStare(data.session ? DUPA_EMAIL : "eroare");
        return;
      }
      // "email" acoperă atât confirmarea de înregistrare, cât și linkul retrimis (magiclink).
      const { error } = await supabase.auth.verifyOtp({ token_hash, type: "email" });
      if (error) {
        const { data } = await supabase.auth.getSession();
        setStare(data.session ? DUPA_EMAIL : "eroare");
        return;
      }
      // Tokenul nu mai rămâne în bara de adrese / istoric.
      window.history.replaceState(null, "", "/confirmare-cont");
      setStare(DUPA_EMAIL);
    })();
  }, [token_hash]);

  return (
    <section className="container-page max-w-md py-12 sm:py-16">
      {stare === "verific" && (
        <p className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" /> Confirmăm contul…
        </p>
      )}
      {stare === "eroare" && (
        <>
          <h1 className="text-3xl font-bold">Linkul nu mai este valabil</h1>
          <p className="mt-3 text-muted-foreground">
            Linkul de confirmare a expirat sau a fost deja folosit. Autentifică-te; dacă emailul nu
            e confirmat, îți putem trimite un link nou.
          </p>
          <Link to="/login" className="btn-primary mt-6 inline-flex h-12 px-7">
            Autentificare
          </Link>
        </>
      )}
      {stare === "telefon" && (
        <>
          <h1 className="flex items-center gap-2 text-3xl font-bold">
            <CheckCircle2 className="h-7 w-7 text-primary" aria-hidden="true" /> Email confirmat
          </h1>
          <p className="mt-3 text-muted-foreground">
            Ultimul pas: confirmă numărul de telefon cu codul primit prin SMS.
          </p>
          <VerificareTelefon
            cuAdresa={false}
            titlu="Verifică-ți telefonul"
            descriere="Îți trimitem un cod de 6 cifre prin SMS. Un număr poate fi folosit la un singur cont. Contul se activează după confirmarea telefonului."
            onVerificat={() => setStare("gata")}
          />
        </>
      )}
      {stare === "gata" && (
        <>
          <h1 className="flex items-center gap-2 text-3xl font-bold">
            <CheckCircle2 className="h-7 w-7 text-primary" aria-hidden="true" /> Contul este gata
          </h1>
          <p className="mt-3 text-muted-foreground">
            {TELEFON_LA_INREGISTRARE ? "Emailul și telefonul sunt confirmate." : "Emailul este confirmat."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/meditatii" className="btn-primary h-12 px-7">
              Postează o cerere
            </Link>
            <Link to="/cont" className="btn-outline h-12 px-7">
              Contul meu
            </Link>
          </div>
        </>
      )}
    </section>
  );
}

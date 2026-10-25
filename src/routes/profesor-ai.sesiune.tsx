import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { SesiuneProfesorAiAuto } from "@/components/profesor-ai/sesiune-live";
import { PA_TOKEN_KEY, salveazaToken } from "@/components/profesor-ai/configurator";
import { profesorAiConfirma, profesorAiSesiune } from "@/lib/profesor-ai.functions";
import type { PaConfig } from "@/lib/profesor-ai";

type Search = { s?: string; plata?: string };

export const Route = createFileRoute("/profesor-ai/sesiune")({
  validateSearch: (q: Record<string, unknown>): Search => ({
    s: typeof q.s === "string" ? q.s : undefined,
    plata: typeof q.plata === "string" ? q.plata : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Sesiune Profesor AI | MeditatiiDirect.ro" },
      { name: "description", content: "Sesiunea ta privată cu Profesorul AI de pe MeditatiiDirect.ro." },
      { property: "og:title", content: "Sesiune Profesor AI | MeditatiiDirect.ro" },
      { property: "og:description", content: "Lecție privată cu întrebări și explicații adaptate nivelului tău." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/profesor-ai" }],
  }),
  component: () => (
    <section className="container-page py-6 sm:py-10">
      <AccesTest />
    </section>
  ),
});

function AccesTest() {
  const { user, loading } = useAuth();
  if (loading) return <div className="card-soft h-64 animate-pulse" aria-busy="true" />;
  if (!user) return <h1 className="py-16 text-center text-2xl font-bold">Autentifică-te ca să începi lecția.</h1>;
  return <Pornire />;
}

function Pornire() {
  const search = Route.useSearch();
  const [stare, setStare] = useState<
    | { tip: "incarcare" }
    | { tip: "eroare"; mesaj: string }
    | { tip: "gata"; token: string; config: PaConfig; exp: number; gratuit: boolean }
  >({ tip: "incarcare" });

  useEffect(() => {
    let anulat = false;
    (async () => {
      let token = search.s;
      if (!token && search.plata) {
        const r = await profesorAiConfirma({ data: { plata: search.plata } }).catch(() => null);
        if (!r || !r.ok)
          return (
            !anulat &&
            setStare({ tip: "eroare", mesaj: r && !r.ok ? r.error : "Nu am putut verifica plata." })
          );
        token = r.data.token;
        salveazaToken(token);
      }
      if (!token) {
        try {
          token = sessionStorage.getItem(PA_TOKEN_KEY) ?? undefined;
        } catch {
          token = undefined;
        }
      }
      if (!token) return !anulat && setStare({ tip: "eroare", mesaj: "Nu ai o sesiune activă." });
      const r = await profesorAiSesiune({ data: { token } }).catch(() => null);
      if (anulat) return;
      if (!r || !r.ok)
        return setStare({
          tip: "eroare",
          mesaj: r && !r.ok ? r.error : "Sesiunea nu a putut fi deschisă.",
        });
      setStare({ tip: "gata", token, ...r.data });
    })();
    return () => {
      anulat = true;
    };
  }, [search.s, search.plata]);

  if (stare.tip === "incarcare")
    return (
      <div className="grid min-h-[50vh] place-items-center text-muted-foreground">
        <Loader2 className="h-8 w-8 animate-spin" aria-label="Se pregătește sesiunea" />
      </div>
    );
  if (stare.tip === "eroare")
    return (
      <div className="card-soft mx-auto max-w-lg p-8 text-center">
        <h1 className="text-xl font-bold">{stare.mesaj}</h1>
        <Link to="/profesor-ai" className="btn-primary mt-5 h-11 px-6">
          Alege o sesiune
        </Link>
      </div>
    );
  return (
    <SesiuneProfesorAiAuto
      token={stare.token}
      config={stare.config}
      exp={stare.exp}
      gratuit={stare.gratuit}
    />
  );
}

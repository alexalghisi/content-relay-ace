import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";

type Stat = { utilizatori: number; confirmati: number; verificati: number; au_folosit: number; lectii: number };

export const Route = createFileRoute("/admin/statistici")({
  head: () => ({
    meta: [
      { title: "Statistici Profesor AI — Administrare | Meditații Direct" },
      { name: "description", content: "Utilizatori înregistrați și folosirea Profesorului AI." },
      { property: "og:title", content: "Statistici Profesor AI — Administrare" },
      { property: "og:description", content: "Utilizatori înregistrați și folosirea Profesorului AI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Pagina,
});

const pct = (a: number, b: number) => (b ? `${((a / b) * 100).toFixed(1)}%` : "—");

function Pagina() {
  const { user, loading } = useAuth();
  const [s, setS] = useState<Stat | null>(null);
  const [eroare, setEroare] = useState(false);
  useEffect(() => {
    if (!user) return;
    supabase.rpc("profesor_ai_statistici").then(({ data, error }) => {
      if (error || !data?.[0]) return setEroare(true);
      const r = data[0];
      setS({ utilizatori: Number(r.utilizatori), confirmati: Number(r.confirmati), verificati: Number(r.verificati), au_folosit: Number(r.au_folosit), lectii: Number(r.lectii) });
    });
  }, [user]);

  if (loading) return null;
  if (!user || eroare) return <h1 className="container-page py-16 text-2xl font-bold">Acces doar pentru administrator.</h1>;
  if (!s) return <div className="container-page py-16 text-muted-foreground">Se încarcă…</div>;
  const carduri = [
    ["Conturi înregistrate", String(s.utilizatori), `${s.confirmati} cu e-mail confirmat`],
    ["Au verificat telefonul", String(s.verificati), `${pct(s.verificati, s.utilizatori)} din conturi`],
    ["Au folosit Profesor AI", String(s.au_folosit), `${pct(s.au_folosit, s.utilizatori)} din conturi`],
    ["Lecții pornite", String(s.lectii), "de la activarea evidenței"],
  ];
  return (
    <section className="container-page py-12">
      <h1 className="text-3xl font-bold">Statistici Profesor AI</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {carduri.map(([t, v, d]) => (
          <div key={t} className="card-soft p-5">
            <p className="text-sm text-muted-foreground">{t}</p>
            <p className="mt-2 text-3xl font-bold">{v}</p>
            <p className="mt-1 text-xs text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

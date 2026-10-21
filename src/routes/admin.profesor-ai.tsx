import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";
import { lectieGratuitaStatistici } from "@/lib/lectie-gratuita.functions";

type Statistici = Awaited<ReturnType<typeof lectieGratuitaStatistici>>;

export const Route = createFileRoute("/admin/profesor-ai")({
  head: () => ({
    meta: [
      { title: "Profesor AI — statistici lecție gratuită | Meditații Direct" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: StatisticiProfesorAi,
});

function StatisticiProfesorAi() {
  const { user, loading } = useAuth();
  const [r, setR] = useState<Statistici | null>(null);

  useEffect(() => {
    if (!user) return;
    lectieGratuitaStatistici()
      .then(setR)
      .catch(() => setR({ ok: false, error: "Conexiunea a eșuat." }));
  }, [user]);

  if (loading) return null;
  if (!user) return <p className="container-page py-10">Autentifică-te ca administrator.</p>;
  if (!r) return <p className="container-page py-10">Se încarcă…</p>;
  if (!r.ok) return <p className="container-page py-10 text-destructive">{r.error}</p>;

  const s = r.data;
  const carduri = [
    { eticheta: "Conturi create", valoare: s.conturi, detaliu: "toți utilizatorii" },
    {
      eticheta: "Telefon verificat",
      valoare: s.verificate,
      detaliu: `${s.verificareDinConturi}% din conturi`,
    },
    {
      eticheta: "Au folosit cele 15 minute",
      valoare: s.folosite,
      detaliu: `${s.utilizareDinConturi}% din conturi · ${s.utilizareDinVerificate}% din verificate`,
    },
  ];

  return (
    <section className="container-page py-10">
      <h1 className="text-3xl font-bold">Profesor AI — lecția gratuită de 15 minute</h1>
      <dl className="mt-6 grid gap-4 sm:grid-cols-3">
        {carduri.map((c) => (
          <div key={c.eticheta} className="card-soft p-5">
            <dt className="text-sm text-muted-foreground">{c.eticheta}</dt>
            <dd className="mt-1 text-3xl font-bold">{c.valoare}</dd>
            <dd className="text-xs text-muted-foreground">{c.detaliu}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CalendarDays, Clock, Mail, Phone, Wallet } from "lucide-react";
import { getRequestWithProposals, type RequestWithProposals } from "@/lib/proposals.functions";

export const Route = createFileRoute("/cererea-mea/$id")({
  validateSearch: (search: Record<string, unknown>) => ({ t: typeof search.t === "string" ? search.t : "" }),
  head: () => ({
    meta: [
      { title: "Propunerile primite la cererea ta | Meditații Direct" },
      { name: "description", content: "Vezi propunerile trimise de profesori la cererea ta de meditații." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: MyRequestPage,
});

function MyRequestPage() {
  const { id } = Route.useParams();
  const { t } = Route.useSearch();
  const [data, setData] = useState<RequestWithProposals | null>(null);

  useEffect(() => {
    getRequestWithProposals({ data: { id, token: t } })
      .then(setData)
      .catch(() => setData({ request: null, proposals: [] }));
  }, [id, t]);

  if (!data) return <section className="container-page py-16 text-center text-muted-foreground">Se încarcă…</section>;

  if (!data.request) {
    return (
      <section className="container-page py-16">
        <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 text-center">
          <h1 className="text-2xl font-bold">Link invalid sau expirat</h1>
          <p className="mt-2 text-sm text-muted-foreground">Folosește linkul primit după trimiterea cererii.</p>
          <Link to="/meditatii" className="btn-primary mt-6 inline-flex h-11 px-5">Trimite o cerere nouă</Link>
        </div>
      </section>
    );
  }

  const r = data.request;
  return (
    <section className="container-page py-10">
      <h1 className="text-3xl font-bold">Cererea ta: {r.subject}</h1>
      <p className="mt-2 text-muted-foreground">
        {r.level ?? "Nivel nespecificat"} · {r.is_online ? "Online" : r.city ?? "Oraș nespecificat"} ·{" "}
        {new Date(r.created_at).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })}
      </p>

      <h2 className="mt-9 text-xl font-bold">Propuneri primite ({data.proposals.length})</h2>
      {data.proposals.length === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-border p-10 text-center">
          <p className="font-bold">Încă nu ai primit propuneri</p>
          <p className="mt-1 text-sm text-muted-foreground">Profesorii îți trimit propuneri cu dată, oră și tarif. Salvează acest link și revino.</p>
        </div>
      ) : (
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {data.proposals.map((p) => (
            <article key={p.id} className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-bold">{p.teacher?.display_name ?? "Profesor"}</h3>
              {p.teacher?.headline && <p className="text-sm text-muted-foreground">{p.teacher.headline}</p>}
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                {p.proposed_date && (
                  <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />
                    {new Date(p.proposed_date).toLocaleDateString("ro-RO", { day: "numeric", month: "long" })}</span>
                )}
                {p.proposed_time && <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {p.proposed_time.slice(0, 5)}</span>}
                {p.price_per_hour && <span className="inline-flex items-center gap-1"><Wallet className="h-3.5 w-3.5" /> {p.price_per_hour} lei/oră</span>}
              </div>
              <p className="mt-3 whitespace-pre-line text-sm leading-6 text-muted-foreground">{p.message}</p>
              <div className="mt-4 border-t border-border pt-4 text-sm">
                {p.teacher?.contact_email && (
                  <a href={`mailto:${p.teacher.contact_email}`} className="inline-flex items-center gap-1 text-primary hover:underline"><Mail className="h-4 w-4" /> {p.teacher.contact_email}</a>
                )}
                {p.teacher?.contact_phone && (
                  <> · <a href={`tel:${p.teacher.contact_phone}`} className="inline-flex items-center gap-1 text-primary hover:underline"><Phone className="h-4 w-4" /> {p.teacher.contact_phone}</a></>
                )}
                {p.teacher?.slug && (
                  <div className="mt-2">
                    <Link to="/profesor/$slug" params={{ slug: p.teacher.slug }} className="text-sm text-primary hover:underline">Vezi profilul profesorului</Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

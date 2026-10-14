import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CalendarDays, Clock, Mail, Phone, Star, Wallet } from "lucide-react";
import { acceptProposal, closeMyRequest, getRequestWithProposals, rateProposal, type RequestWithProposals } from "@/lib/proposals.functions";

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
  const closed = data.request.status === "closed";
  const accept = async (proposalId: string) => {
    if (!confirm("Accepți această propunere? Cererea se închide și nu mai apare la alți profesori.")) return;
    const res = await acceptProposal({ data: { requestId: id, token: t, proposalId } }).catch(() => ({ ok: false }));
    if (res.ok) setData(await getRequestWithProposals({ data: { id, token: t } }));
    else alert("Nu s-a putut accepta propunerea. Încearcă din nou.");
  };
  const closeReq = async () => {
    if (!confirm("Închizi cererea? Profesorii nu o vor mai vedea.")) return;
    const res = await closeMyRequest({ data: { requestId: id, token: t } }).catch(() => ({ ok: false }));
    if (res.ok) setData(await getRequestWithProposals({ data: { id, token: t } }));
  };
  return (
    <section className="container-page py-10">
      <h1 className="text-3xl font-bold">Cererea ta: {r.subject}</h1>
      <p className="mt-2 text-muted-foreground">
        {r.level ?? "Nivel nespecificat"} · {r.is_online ? "Online" : r.city ?? "Oraș nespecificat"} ·{" "}
        {new Date(r.created_at).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className={closed ? "rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground" : "rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary"}>
          {closed ? "Închisă — nu mai apare la profesori" : "Deschisă — profesorii o pot vedea"}
        </span>
        {!closed && <button type="button" onClick={closeReq} className="btn-outline h-9 px-4 text-sm">Închide cererea</button>}
      </div>

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
              {p.status === "accepted" ? (
                <p className="mt-4 inline-flex items-center rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-success">✓ Propunere acceptată</p>
              ) : !closed ? (
                <button type="button" onClick={() => accept(p.id)} className="btn-primary mt-4 h-10 px-4 text-sm">Accept acest profesor</button>
              ) : null}
              <RatingBox requestId={id} token={t} proposalId={p.id} initial={p.rating} />
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function RatingBox({ requestId, token, proposalId, initial }: { requestId: string; token: string; proposalId: string; initial: number | null }) {
  const [value, setValue] = useState<number>(initial ?? 0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [saved, setSaved] = useState(initial != null);
  const [busy, setBusy] = useState(false);

  const send = async (rating: number) => {
    setValue(rating);
    setBusy(true);
    const res = await rateProposal({ data: { requestId, token, proposalId, rating, comment } }).catch(() => ({ ok: false }));
    setBusy(false);
    if (res.ok) setSaved(true);
  };

  return (
    <div className="mt-4 rounded-lg bg-muted/50 p-3">
      <p className="text-xs font-semibold text-muted-foreground">
        {saved ? "Evaluarea ta" : "Cum a decurs discuția cu acest profesor?"}
      </p>
      <div className="mt-1.5 flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            disabled={busy}
            aria-label={`${star} stele`}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => void send(star)}
            className="p-0.5"
          >
            <Star className={`h-5 w-5 ${(hover || value) >= star ? "fill-warning text-warning" : "text-muted-foreground/40"}`} />
          </button>
        ))}
        {saved && <span className="ml-2 text-xs text-success">Mulțumim!</span>}
      </div>
      {saved && value === 5 && (
        <p className="mt-2 text-xs text-muted-foreground">
          Ți-a plăcut? Ne ajută mult o recenzie publică:{" "}
          <a href="https://www.trustpilot.com/evaluate/meditatiidirect.ro" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline">
            lasă o recenzie pe Trustpilot
          </a>
        </p>
      )}
      {!saved && (
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Un cuvânt despre colaborare (opțional)"
          className="mt-2 h-9 w-full rounded-lg border border-border bg-background px-3 text-xs outline-hidden focus:ring-2 focus:ring-ring"
        />
      )}
    </div>
  );
}

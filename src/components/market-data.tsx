import { BadgeCheck, Star, ShieldCheck, Users, Wallet, Clock } from "lucide-react";
import type { ComboStats, TrustStats } from "@/lib/market-stats.functions";

const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" });

type Pret = NonNullable<ComboStats["price"]>;

/** Valoarea locală dacă există, altfel cea națională (marcată), altfel null. */
function localSauNational<T>(local: T | null | undefined, national: T | null | undefined) {
  if (local != null) return { v: local, national: false };
  if (national != null) return { v: national, national: true };
  return null;
}

const timpPropunere = (h: number) =>
  h < 1
    ? "sub o oră"
    : h < 48
      ? `circa ${h} ${h === 1 ? "oră" : "ore"}`
      : `circa ${Math.round(h / 24)} ${Math.round(h / 24) === 1 ? "zi" : "zile"}`;

/**
 * Întrebările frecvente ale unei pagini materie × oraș, din date reale. Când orașul are prea puține
 * date, răspunsurile folosesc agregatele naționale ale materiei și spun explicit asta.
 */
export function comboFaqs(
  s: ComboStats,
  subject: string,
  city: string,
  national?: ComboStats | null,
) {
  const faqs: { q: string; a: string }[] = [];
  const pret = (p: Pret, unde: string) =>
    `Pe MeditatiiDirect, cele ${p.n} tarife reale pentru ${subject} ${unde} (anunțuri, oferte și propuneri trimise elevilor) sunt între ${p.min} și ${p.max} lei/oră, cu o valoare mediană de ${p.median} lei/oră.`;
  faqs.push({
    q: `Cât costă meditațiile la ${subject} în ${city}?`,
    a: s.price
      ? `${pret(s.price, `în ${city} și online`)} Date actualizate la ${fmtDate(s.updatedAt)}.`
      : national?.price
        ? `${pret(national.price, `din toată țara`)} Sunt incluși și profesorii care predau online elevilor din ${city}. Date actualizate la ${fmtDate(national.updatedAt)}.`
        : `Tariful îl propune fiecare profesor în ofertă, înainte să accepți. Depinde de nivel (gimnaziu, liceu, BAC), de format (online sau la domiciliu) și de experiența profesorului; în cerere poți trece bugetul tău.`,
  });
  faqs.push({
    q: `Pot face meditații la ${subject} online sau doar față în față în ${city}?`,
    a: s.listings
      ? `Din cele ${s.listings} anunțuri active care acoperă ${city}, ${s.onlineListings} oferă ședințe online și ${s.localListings} sunt publicate de profesori din ${city}. În cerere poți alege online, față în față sau ambele.`
      : `În cerere alegi online, față în față sau ambele; profesorii care acoperă ${city} îți trimit propuneri potrivite.`,
  });
  if (s.priceOnline || s.priceInPerson) {
    const part = (label: string, x: ComboStats["price"]) =>
      x
        ? `${label}: mediană ${x.median} lei/oră (${x.min}–${x.max}, ${x.n} ${x.n === 1 ? "anunț" : "anunțuri"})`
        : `${label}: fără anunțuri cu tarif publicat`;
    faqs.push({
      q: `Sunt meditațiile online la ${subject} mai ieftine decât cele față în față în ${city}?`,
      a: `Din anunțurile active pe MeditatiiDirect — ${part("online", s.priceOnline)}; ${part(`față în față în ${city}`, s.priceInPerson)}. Actualizat la ${fmtDate(s.updatedAt)}.`,
    });
  }
  faqs.push({
    q: `Câte ședințe pe săptămână sunt recomandate la ${subject}?`,
    a: `Frecvența o stabilești direct cu profesorul în propunere. Pe platformă, fiecare propunere vine cu o dată și o oră concretă, iar ritmul îl ajustați după primele ședințe.`,
  });
  if (s.requestsTotal) {
    faqs.push({
      q: `Câți elevi caută meditații la ${subject} în ${city}?`,
      a: `Până la ${fmtDate(s.updatedAt)}, elevii au postat ${s.requestsTotal} ${s.requestsTotal === 1 ? "cerere" : "cereri"} la ${subject} pentru ${city} sau online.`,
    });
  } else if (national?.requestsTotal) {
    faqs.push({
      q: `Câți elevi caută meditații la ${subject} pe MeditatiiDirect?`,
      a: `Până la ${fmtDate(national.updatedAt)}, elevii din toată țara au postat ${national.requestsTotal} ${national.requestsTotal === 1 ? "cerere" : "cereri"} la ${subject}. O cerere din ${city} ajunge la aceiași profesori, inclusiv la cei care predau online.`,
    });
  }
  const prop =
    s.firstProposalHours != null && s.answeredRequests > 0
      ? { x: s, nat: false }
      : national?.firstProposalHours != null && national.answeredRequests > 0
        ? { x: national, nat: true }
        : null;
  if (prop) {
    const { x, nat } = prop;
    faqs.push({
      q: `În cât timp primesc prima propunere la ${subject}?`,
      a: `Pe MeditatiiDirect, jumătate dintre cererile la ${subject}${nat ? " (din toată țara)" : ""} cu cel puțin o propunere au primit primul răspuns în ${timpPropunere(x.firstProposalHours!)} (calculat din ${x.answeredRequests} ${x.answeredRequests === 1 ? "cerere reală" : "cereri reale"}, actualizat la ${fmtDate(x.updatedAt)}). Profesorii sunt anunțați prin e-mail imediat ce apare o cerere la materia lor.`,
    });
  }
  return faqs;
}

/** Cererile recente, anonimizate: materie, nivel, oraș (sau online), buget, zi — fără nume sau contacte. */
export function CereriRecente({
  cereri,
  subject,
  titlu,
}: {
  cereri: ComboStats["recentRequests"];
  subject: string;
  titlu: string;
}) {
  if (!cereri.length) return null;
  return (
    <div className="mt-6" data-testid="cereri-recente">
      <h3 className="text-lg font-semibold">{titlu}</h3>
      <ul className="mt-3 divide-y divide-border rounded-xl border border-border">
        {cereri.map((r, i) => (
          <li key={i} className="flex flex-wrap justify-between gap-2 px-4 py-3 text-sm">
            <span>
              {r.subject ?? subject}
              {r.level ? ` · ${r.level}` : ""} · {r.place}
            </span>
            <span className="text-muted-foreground">
              {r.budget ? `buget ${r.budget} lei/oră · ` : ""}
              {fmtDate(r.date)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ComboDataBlock({
  s,
  subject,
  city,
  national,
  embedded = false,
}: {
  s: ComboStats;
  subject: string;
  city: string;
  national?: ComboStats | null;
  /** Inside another container (e.g. SeoLanding children). */ embedded?: boolean;
}) {
  const pret = localSauNational(s.price, national?.price);
  const rating = localSauNational(s.rating, national?.rating);
  const prop =
    s.firstProposalHours != null
      ? { h: s.firstProposalHours, n: s.answeredRequests, national: false }
      : national?.firstProposalHours != null
        ? { h: national.firstProposalHours, n: national.answeredRequests, national: true }
        : null;
  const cereriNationale = !!national && s.recentRequests.length < national.recentRequests.length;
  const cereri = cereriNationale ? national!.recentRequests : s.recentRequests;
  const tag = (
    <span className="ml-1 rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium uppercase">
      național
    </span>
  );
  return (
    <section
      className={embedded ? "mt-10" : "container-page py-8"}
      aria-labelledby="date-reale"
      data-testid="date-reale"
    >
      <h2 id="date-reale" className="text-2xl font-bold">
        Date reale: meditații {subject} în {city}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Calculate din anunțurile, ofertele și cererile de pe MeditatiiDirect · actualizat la{" "}
        {fmtDate(s.updatedAt)}
        {national
          ? ` · unde ${city} are prea puține date, afișăm valorile pentru ${subject} din toată țara (marcate „național”)`
          : ""}
      </p>
      <dl className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card-soft p-5">
          <dt className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4 text-primary" /> Profesori activi
          </dt>
          <dd className="mt-1 text-2xl font-bold">{s.teachers + s.listings}</dd>
          <dd className="text-xs text-muted-foreground">
            {s.listings} anunțuri · {s.teachers} profiluri (din {city} sau online)
          </dd>
        </div>
        {pret && (
          <div className="card-soft p-5">
            <dt className="flex items-center gap-2 text-sm text-muted-foreground">
              <Wallet className="h-4 w-4 text-primary" /> Tarif real (lei/oră){pret.national && tag}
            </dt>
            <dd className="mt-1 text-2xl font-bold">{pret.v.median}</dd>
            <dd className="text-xs text-muted-foreground">
              minim {pret.v.min} · maxim {pret.v.max} · {pret.v.n} tarife
            </dd>
          </div>
        )}
        {prop && (
          <div className="card-soft p-5">
            <dt className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" /> Prima propunere{prop.national && tag}
            </dt>
            <dd className="mt-1 text-2xl font-bold">
              {prop.h < 1
                ? "< 1 oră"
                : prop.h < 48
                  ? `~${prop.h} ore`
                  : `~${Math.round(prop.h / 24)} zile`}
            </dd>
            <dd className="text-xs text-muted-foreground">mediana pe {prop.n} cereri cu răspuns</dd>
          </div>
        )}
        <div className="card-soft p-5">
          <dt className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" /> Cereri de la elevi
          </dt>
          <dd className="mt-1 text-2xl font-bold">{s.requestsTotal}</dd>
          <dd className="text-xs text-muted-foreground">
            în {city} sau online{national ? ` · ${national.requestsTotal} în toată țara` : ""}
          </dd>
        </div>
        {rating && (
          <div className="card-soft p-5">
            <dt className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="h-4 w-4 text-primary" /> Evaluare medie{rating.national && tag}
            </dt>
            <dd className="mt-1 text-2xl font-bold">{rating.v.avg.toFixed(1)} / 5</dd>
            <dd className="text-xs text-muted-foreground">{rating.v.count} evaluări de la elevi</dd>
          </div>
        )}
      </dl>
      {(s.priceOnline || s.priceInPerson || s.teachersByLevel.length > 0) && (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {(s.priceOnline || s.priceInPerson) && (
            <div className="card-soft p-5">
              <h3 className="text-lg font-semibold">Tarif real după format</h3>
              <ul className="mt-2 space-y-1 text-sm">
                {s.priceOnline && (
                  <li>
                    Online: mediană {s.priceOnline.median} lei/oră ({s.priceOnline.min}–
                    {s.priceOnline.max}, {s.priceOnline.n} anunțuri)
                  </li>
                )}
                {s.priceInPerson && (
                  <li>
                    Față în față în {city}: mediană {s.priceInPerson.median} lei/oră (
                    {s.priceInPerson.min}–{s.priceInPerson.max}, {s.priceInPerson.n} anunțuri)
                  </li>
                )}
              </ul>
            </div>
          )}
          {s.teachersByLevel.length > 0 && (
            <div className="card-soft p-5">
              <h3 className="text-lg font-semibold">Profesori după nivel</h3>
              <ul className="mt-2 space-y-1 text-sm">
                {s.teachersByLevel.slice(0, 6).map((l) => (
                  <li key={l.level}>
                    {l.level}: {l.count} {l.count === 1 ? "profesor" : "profesori"}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      <CereriRecente
        cereri={cereri}
        subject={subject}
        titlu={
          cereriNationale
            ? `Cereri recente la ${subject} din toată țara (anonimizate)`
            : `Cereri recente la ${subject} în ${city} sau online (anonimizate)`
        }
      />
    </section>
  );
}

export function TrustBlock({ t }: { t: TrustStats }) {
  return (
    <section className="container-page py-8" aria-labelledby="incredere">
      <h2 id="incredere" className="text-2xl font-bold">
        De ce să ai încredere în MeditatiiDirect
      </h2>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <div className="card-soft p-5">
          <h3 className="flex items-center gap-2 font-semibold">
            <ShieldCheck className="h-4 w-4 text-primary" /> Cum verificăm profesorii
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Fiecare profil de profesor se publică abia după ce este verificat de echipa noastră.
            Datele de contact rămân ascunse în chat până la prima ședință, ca să comunici în
            siguranță prin platformă.
          </p>
        </div>
        <div className="card-soft p-5">
          <h3 className="flex items-center gap-2 font-semibold">
            <Star className="h-4 w-4 text-primary" /> Cum funcționează evaluările
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Doar elevul care a primit o propunere o poate evalua, cu 1–5 stele, din pagina privată a
            cererii lui. Nu publicăm recenzii fără o interacțiune reală.
          </p>
        </div>
        <div className="card-soft p-5">
          <h3 className="flex items-center gap-2 font-semibold">
            <BadgeCheck className="h-4 w-4 text-primary" /> În cifre
          </h3>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>{t.teachers} profesori cu profil publicat</li>
            <li>{t.requests} cereri postate de elevi</li>
            {t.completed > 0 && <li>{t.completed} cereri finalizate cu un profesor ales</li>}
            {t.avgRating != null && (
              <li>
                {t.avgRating.toFixed(1)} / 5 din {t.ratings} evaluări
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

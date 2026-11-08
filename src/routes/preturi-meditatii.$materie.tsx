// Pagină pentru intenția comercială „pret meditatii {materie}” / „cat costa meditatii {materie}”.
// Toate cifrele vin din src/lib/market-stats.functions.ts (anunțuri, oferte și propuneri reale, la nivel național);
// fără date suficiente nu afișăm prețuri — explicăm de ce depinde tariful.
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { getSubjectSeo, SUBJECTS_SEO } from "@/data/subjects-seo";
import { getComboStats, type ComboStats } from "@/lib/market-stats.functions";
import { faqJsonLd } from "@/components/seo-landing";
import { faraDiacritice } from "@/lib/pagina-locala";
import { HUB_MATERIE, ORASE_MARI } from "@/lib/linkuri-contextuale";
import { getCityBySlug } from "@/data/cities";

const SITE = "https://meditatiidirect.ro";
// Cloudflare Workers freeze the clock at 0 in module scope: read the year per request.
const anul = () => Math.max(2026, new Date().getFullYear());

const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" });

function faqsPret(nume: string, s: ComboStats | null) {
  const p = s?.price;
  return [
    {
      q: `Cât costă meditațiile la ${nume}?`,
      a: p
        ? `Pe MeditatiiDirect, cele ${p.n} tarife reale pentru ${nume} (anunțuri active, oferte și propuneri trimise elevilor, din toată țara) sunt între ${p.min} și ${p.max} lei/oră, cu mediana de ${p.median} lei/oră. Date actualizate la ${fmtDate(s!.updatedAt)}.`
        : `Tariful îl propune fiecare profesor în ofertă, înainte să accepți. Depinde de nivel (gimnaziu, liceu, BAC, admitere), de format (online sau la domiciliu), de oraș și de experiența profesorului.`,
    },
    {
      q: `Sunt meditațiile online la ${nume} mai ieftine?`,
      a:
        s?.priceOnline && s.priceInPerson
          ? `Din anunțurile active: online, mediana e ${s.priceOnline.median} lei/oră (${s.priceOnline.n} anunțuri); față în față, ${s.priceInPerson.median} lei/oră (${s.priceInPerson.n} anunțuri).`
          : `Adesea, pentru că profesorul nu are drum de făcut, dar nu întotdeauna. În cerere poți alege online, față în față sau ambele și compari ofertele primite.`,
    },
    {
      q: "De ce diferă prețurile între profesori?",
      a: "Contează nivelul cerut, miza (o recuperare la gimnaziu față de pregătirea pentru admitere), formatul, durata ședinței și cât de ocupat e profesorul. Compară prețul pe oră și întreabă ce include: corectarea temelor, materiale, variante de examen.",
    },
    {
      q: "Plătesc comision platformei?",
      a: "Nu. Elevii nu plătesc nimic platformei, iar plata lecțiilor se face direct profesorului.",
    },
  ];
}

export const Route = createFileRoute("/preturi-meditatii/$materie")({
  loader: async ({ params }) => {
    const subject = getSubjectSeo(params.materie);
    if (!subject) throw notFound();
    let stats: ComboStats | null = null;
    try {
      stats = await getComboStats({
        data: {
          subjectSlugs: subject.dbSlugs,
          subjectName: subject.nameLower,
          cityName: "România",
          cityMatch: [],
        },
      });
    } catch (err) {
      console.error("price page stats failed", err);
    }
    return { subject, stats };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { subject, stats } = loaderData;
    const url = `${SITE}/preturi-meditatii/${subject.slug}`;
    const plain = faraDiacritice(subject.nameLower).toLowerCase();
    const p = stats?.price;
    const title = `Pret meditatii ${plain} ${anul()} — tarife reale pe oră`;
    const desc = p
      ? `Cât costă meditațiile la ${subject.nameLower}: mediana reală e ${p.median} lei/oră, din ${p.n} tarife de pe MeditatiiDirect (${p.min}–${p.max} lei). Online vs. acasă și ce influențează prețul.`
      : `Cât costă meditațiile la ${subject.nameLower} în ${anul()}: de ce depinde tariful, cum compari ofertele online și acasă și ce întrebi profesorul înainte de prima ședință.`;
    const faqs = faqsPret(subject.nameLower, stats);
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        ...(p
          ? [
              {
                type: "application/ld+json",
                children: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Service",
                  name: `Meditații ${subject.name}`,
                  description: desc,
                  url,
                  provider: { "@type": "Organization", name: "MeditatiiDirect", url: SITE },
                  offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "RON",
                    lowPrice: p.min,
                    highPrice: p.max,
                    offerCount: p.n,
                  },
                }),
              },
            ]
          : []),
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE}/` },
              {
                "@type": "ListItem",
                position: 2,
                name: "Prețuri meditații",
                item: `${SITE}/preturi-meditatii`,
              },
              { "@type": "ListItem", position: 3, name: subject.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: PricePage,
});

function PricePage() {
  const { subject, stats } = Route.useLoaderData();
  const p = stats?.price;
  const faqs = faqsPret(subject.nameLower, stats);
  const hub = HUB_MATERIE[subject.slug];
  return (
    <main className="container-page py-10 lg:py-14">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link to="/" className="hover:text-primary">
              Acasă
            </Link>
          </li>
          <li>›</li>
          <li>
            <Link to="/preturi-meditatii" className="hover:text-primary">
              Prețuri meditații
            </Link>
          </li>
          <li>›</li>
          <li className="text-foreground">{subject.name}</li>
        </ol>
      </nav>
      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">
          Preț meditații {subject.nameLower} în {anul()}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          {p ? (
            <>
              Pe MeditatiiDirect, tarifele reale la <strong>{subject.nameLower}</strong> sunt între{" "}
              <strong>
                {p.min} și {p.max} lei/oră
              </strong>
              , cu mediana de <strong>{p.median} lei/oră</strong> — calculat din {p.n} tarife
              (anunțuri active, oferte și propuneri trimise elevilor).
            </>
          ) : (
            <>
              Tariful la <strong>{subject.nameLower}</strong> îl propune fiecare profesor, în
              ofertă, înainte să accepți. Mai jos găsești de ce depinde și cum compari ofertele.
            </>
          )}
        </p>
        {stats && (
          <p className="mt-2 text-xs text-muted-foreground">
            Actualizat la {fmtDate(stats.updatedAt)}.
          </p>
        )}
        {!stats && (
          <p role="status" className="mt-2 text-sm text-muted-foreground">
            Datele de pe platformă nu pot fi încărcate momentan; reîncarcă pagina în câteva minute.
          </p>
        )}
      </header>

      {p && (
        <section className="mt-8 grid gap-4 sm:grid-cols-3" aria-label="Tarife reale">
          <div className="card-soft p-5">
            <p className="text-sm text-muted-foreground">Minim</p>
            <p className="mt-1 text-3xl font-bold text-primary">{p.min} lei</p>
            <p className="text-xs text-muted-foreground">/oră, cel mai mic tarif publicat</p>
          </div>
          <div className="card-soft border-primary/40 p-5">
            <p className="text-sm text-muted-foreground">Median</p>
            <p className="mt-1 text-3xl font-bold text-primary">{p.median} lei</p>
            <p className="text-xs text-muted-foreground">
              /oră, jumătate din tarife sunt sub această valoare
            </p>
          </div>
          <div className="card-soft p-5">
            <p className="text-sm text-muted-foreground">Maxim</p>
            <p className="mt-1 text-3xl font-bold text-primary">{p.max} lei</p>
            <p className="text-xs text-muted-foreground">/oră, cel mai mare tarif publicat</p>
          </div>
        </section>
      )}

      {(stats?.priceOnline || stats?.priceInPerson) && (
        <section className="mt-6 card-soft p-5">
          <h2 className="text-lg font-semibold">Online sau față în față</h2>
          <ul className="mt-2 space-y-1 text-sm">
            {stats?.priceOnline && (
              <li>
                Online: mediană {stats.priceOnline.median} lei/oră ({stats.priceOnline.min}–
                {stats.priceOnline.max}, {stats.priceOnline.n} anunțuri)
              </li>
            )}
            {stats?.priceInPerson && (
              <li>
                Față în față: mediană {stats.priceInPerson.median} lei/oră (
                {stats.priceInPerson.min}–{stats.priceInPerson.max}, {stats.priceInPerson.n}{" "}
                anunțuri)
              </li>
            )}
          </ul>
        </section>
      )}

      <section className="mt-10 max-w-3xl space-y-4 text-foreground/90">
        <h2 className="text-2xl font-bold">
          De ce diferă prețurile la meditații {subject.nameLower}?
        </h2>
        <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
          <li>
            <strong>Nivelul și miza</strong> — recuperare la gimnaziu, Evaluarea Națională, BAC sau
            admitere.
          </li>
          <li>
            <strong>Formatul</strong> — online nu include drumul; la domiciliu, timpul de deplasare
            intră de obicei în preț.
          </li>
          <li>
            <strong>Durata ședinței</strong> — compară prețul pe oră, nu pe ședință.
          </li>
          <li>
            <strong>Experiența și programul profesorului</strong> — înainte de examene, locurile se
            ocupă repede.
          </li>
        </ul>
        <p className="text-muted-foreground">
          Vezi tarifele și pe oraș:{" "}
          {ORASE_MARI.slice(0, 4).map((o, i) => (
            <span key={o}>
              {i > 0 && ", "}
              <Link
                to="/meditatii/$materie/$oras"
                params={{ materie: subject.slug, oras: o }}
                className="text-primary underline"
              >
                {subject.nameLower} {getCityBySlug(o)!.name}
              </Link>
            </span>
          ))}
          .
        </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-bold">Întrebări frecvente</h2>
        <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5 open:bg-muted/30">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                {f.q}
                <span className="text-muted-foreground transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Prețuri și pe alte materii</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {SUBJECTS_SEO.filter((s) => s.slug !== subject.slug)
            .slice(0, 10)
            .map((s) => (
              <Link
                key={s.slug}
                to="/preturi-meditatii/$materie"
                params={{ materie: s.slug }}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
              >
                Preț meditații {s.nameLower}
              </Link>
            ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 sm:p-8">
        <h2 className="text-xl font-semibold">
          Primește oferte de la profesori de {subject.nameLower}
        </h2>
        <p className="mt-2 text-muted-foreground">
          Treci bugetul în cerere; profesorii îți răspund cu tariful lor. Gratuit, fără comision.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            to="/meditatii"
            search={{ materie: subject.slug } as never}
            className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Cere ofertă gratuit
          </Link>
          {hub && (
            <Link
              to={hub}
              className="inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40"
            >
              Meditații {subject.nameLower}
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}

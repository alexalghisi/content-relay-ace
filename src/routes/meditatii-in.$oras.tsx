import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { MapPin, Wifi, BadgeCheck, Star } from "lucide-react";
import { AdsterraNativeBanner, AdsterraBannerResponsive } from "@/components/ads/adsterra";
import { CITIES, getCityBySlug, citiesInCounty, type CityInfo } from "@/data/cities";
import { SUBJECTS_SEO } from "@/data/subjects-seo";
import { faqJsonLd } from "@/components/seo-landing";
import {
  getComboStats,
  getTrustStats,
  MIN_LISTINGS_FOR_INDEX,
  type ComboStats,
} from "@/lib/market-stats.functions";
import { TrustBlock } from "@/components/market-data";

interface Ad {
  id: string;
  title: string;
  description: string | null;
  location: string | null;
  is_online: boolean;
  price_per_hour: number | null;
  is_promoted: boolean;
  subject_name: string | null;
  subject_slug: string | null;
  seo_slug: string | null;
  legacy_teachers?: { full_name: string; avatar_url: string | null } | null;
}

const SITE = "https://meditatiidirect.ro";
const ALL_SUBJECT_SLUGS = [...new Set(SUBJECTS_SEO.flatMap((s) => s.dbSlugs))];

async function fetchCityData(city: CityInfo) {
  const { data } = await supabase
    .from("ads")
    .select(
      "id,title,description,location,is_online,price_per_hour,is_promoted,subject_name,subject_slug,seo_slug,legacy_teachers(full_name,avatar_url)",
    )
    .eq("status", "active")
    .order("is_promoted", { ascending: false })
    .order("views_count", { ascending: false })
    .limit(1000);
  const all = (data ?? []) as unknown as Ad[];
  const local = all.filter((a) =>
    city.matchLocation.some((m) => (a.location ?? "").toLowerCase().includes(m)),
  );
  const perSubject: Record<string, number> = {};
  for (const s of SUBJECTS_SEO) {
    perSubject[s.slug] = all.filter(
      (a) =>
        a.subject_slug &&
        s.dbSlugs.includes(a.subject_slug) &&
        (a.is_online ||
          city.matchLocation.some((m) => (a.location ?? "").toLowerCase().includes(m))),
    ).length;
  }
  const online = all.filter((a) => a.is_online && !local.includes(a)).slice(0, 6);
  return { local: local.slice(0, 30), localTotal: local.length, online, perSubject };
}

export const Route = createFileRoute("/meditatii-in/$oras")({
  beforeLoad: ({ params }) => {
    if (!getCityBySlug(params.oras)) throw notFound();
  },
  loader: async ({ params }) => {
    const city = getCityBySlug(params.oras);
    if (!city) throw notFound();
    const [ads, stats, trust] = await Promise.all([
      fetchCityData(city),
      getComboStats({
        data: {
          subjectSlugs: ALL_SUBJECT_SLUGS,
          subjectName: "",
          cityName: city.name,
          cityMatch: city.matchLocation,
        },
      }),
      getTrustStats(),
    ]);
    return { ads, stats, trust };
  },
  head: ({ params, loaderData }) => {
    const city = getCityBySlug(params.oras);
    if (!city || !loaderData) return { meta: [] };
    const { ads, stats } = loaderData;
    const url = `${SITE}/meditatii-in/${params.oras}`;
    const pr = stats.price;
    const n = ads.localTotal;
    const isCluj = city.slug === "cluj-napoca";
    const title = isCluj
      ? `Anunțuri meditații Cluj-Napoca${n ? ` — ${n} profesori` : ""}${pr ? `, ${pr.min}-${pr.max} lei/oră` : ""}`
      : `Meditații ${city.name}${n >= 3 ? ` — ${n} profesori` : " — profesori particulari"}${pr ? `, ${pr.min}-${pr.max} lei/oră` : ""} | MeditatiiDirect`;
    const realBit = pr ? ` Tarife reale ${pr.min}–${pr.max} lei/oră (median ${pr.median}).` : "";
    const desc = `Meditații în ${city.name} (${city.county}), la domiciliu sau online: matematică, română, engleză, BAC, Evaluare Națională și admitere.${realBit} Postezi gratuit cererea și primești propuneri de la profesori.`;
    const faqs = cityFaqs(city, stats, n);
    const faqLd = faqJsonLd(faqs);
    const breadcrumbLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Meditații", item: `${SITE}/meditatii` },
        { "@type": "ListItem", position: 3, name: `Meditații ${city.name}`, item: url },
      ],
    };
    const serviceLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#serviciu`,
      name: `Meditații ${city.name}`,
      serviceType: "Meditații particulare",
      description: desc,
      url,
      provider: { "@type": "Organization", name: "MeditatiiDirect", url: `${SITE}/` },
      areaServed: {
        "@type": "City",
        name: city.name,
        containedInPlace: { "@type": "AdministrativeArea", name: `${city.county}, România` },
      },
      availableChannel: { "@type": "ServiceChannel", serviceUrl: `${SITE}/meditatii` },
      ...(pr
        ? {
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "RON",
              lowPrice: pr.min,
              highPrice: pr.max,
              offerCount: pr.n,
            },
          }
        : {}),
    };
    const itemListLd = ads.local.length
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `Anunțuri meditații ${city.name}`,
          numberOfItems: ads.local.length,
          itemListElement: ads.local.slice(0, 20).map((a, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE}/anunt/${a.seo_slug || a.id}`,
            name: a.title,
          })),
        }
      : null;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "geo.region", content: "RO" },
        { name: "geo.placename", content: city.name },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "ro_RO" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "alternate", hrefLang: "ro-RO", href: url },
        { rel: "alternate", hrefLang: "x-default", href: url },
      ],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(faqLd) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbLd) },
        { type: "application/ld+json", children: JSON.stringify(serviceLd) },
        ...(itemListLd
          ? [{ type: "application/ld+json", children: JSON.stringify(itemListLd) }]
          : []),
      ],
    };
  },
  component: CityPage,
});

const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" });

function cityFaqs(city: CityInfo, s: ComboStats, localTotal: number) {
  const nearby = citiesInCounty(city).map((c) => c.name);
  return [
    {
      q: `Cât costă meditațiile în ${city.name}?`,
      a: s.price
        ? `Pe MeditatiiDirect, cele ${s.price.n} tarife reale care acoperă ${city.name} (anunțuri, oferte și propuneri trimise elevilor) sunt între ${s.price.min} și ${s.price.max} lei/oră, cu mediana de ${s.price.median} lei/oră. Date actualizate la ${fmtDate(s.updatedAt)}.`
        : `Încă nu avem suficiente tarife reale pentru ${city.name}. Postează gratuit o cerere cu bugetul tău, iar profesorii îți răspund cu propriul tarif.`,
    },
    {
      q: `Câți profesori de meditații sunt în ${city.name}?`,
      a: localTotal
        ? `În acest moment sunt ${localTotal} ${localTotal === 1 ? "anunț activ publicat" : "anunțuri active publicate"} de profesori din ${city.name}, plus ${s.onlineListings} anunțuri cu meditații online, disponibile oricărui elev din ${city.county}.`
        : `Încă nu există anunțuri publicate de profesori din ${city.name}, dar ${s.onlineListings} profesori oferă meditații online pentru elevii din ${city.county}. Postează cererea și te anunțăm când apare o propunere.`,
    },
    {
      q: `Pot face meditații online dacă locuiesc în ${city.name}?`,
      a: `Da. În cerere alegi „online”, „față în față” sau ambele. Profesorii care predau online îți pot trimite propuneri indiferent de oraș; lecțiile se țin de obicei pe Google Meet sau Zoom.`,
    },
    {
      q: `Pentru ce examene găsesc pregătire în ${city.name}?`,
      a: `Pentru Evaluarea Națională (clasa a VIII-a), Bacalaureat, admitere la liceu și la facultate${city.landmark.includes("Univ") ? ` (inclusiv ${city.landmark.split("&").pop()!.trim()})` : ""}, dar și pentru recuperarea materiei la orice clasă.`,
    },
    ...(nearby.length
      ? [
          {
            q: `Găsesc meditații și în localitățile din apropiere de ${city.name}?`,
            a: `Da, avem pagini dedicate și pentru ${nearby.join(", ")} (județul ${city.county}). Mulți profesori se deplasează în localitățile apropiate sau predau online.`,
          },
        ]
      : []),
  ];
}

function AdCard({ ad }: { ad: Ad }) {
  return (
    <article className="card-soft p-5 flex flex-col hover:border-primary/40 hover:shadow-[var(--shadow-pop)] transition">
      {ad.is_promoted && (
        <span className="self-start mb-3 inline-flex items-center gap-1 rounded-full bg-primary-soft px-2 py-0.5 text-xs font-medium text-primary">
          <Star className="h-3 w-3" /> Promovat
        </span>
      )}
      <div className="flex items-start gap-3">
        {ad.legacy_teachers?.avatar_url ? (
          <img
            src={ad.legacy_teachers.avatar_url}
            alt={ad.legacy_teachers.full_name}
            className="h-12 w-12 rounded-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="grid h-12 w-12 place-items-center rounded-full bg-primary-soft text-primary font-semibold">
            {(ad.legacy_teachers?.full_name ?? "P").charAt(0)}
          </div>
        )}
        <div className="min-w-0">
          <p className="text-sm font-semibold truncate">
            {ad.legacy_teachers?.full_name ?? "Profesor"}
          </p>
          {ad.subject_name && <p className="text-xs text-muted-foreground">{ad.subject_name}</p>}
        </div>
      </div>
      <h3 className="mt-3 text-base font-semibold leading-snug line-clamp-2">{ad.title}</h3>
      <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{ad.description}</p>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        {ad.location && (
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" /> {ad.location}
          </span>
        )}
        {ad.is_online && (
          <span className="inline-flex items-center gap-1 text-primary">
            <Wifi className="h-3.5 w-3.5" /> Online
          </span>
        )}
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div>
          {ad.price_per_hour ? (
            <>
              <p className="text-xl font-bold">{ad.price_per_hour} lei</p>
              <p className="text-xs text-muted-foreground">/ oră</p>
            </>
          ) : null}
        </div>
        <Link
          to="/anunt/$slug"
          params={{ slug: ad.seo_slug || ad.id }}
          className="btn-primary h-10 px-4 text-sm"
        >
          Vezi detalii
        </Link>
      </div>
    </article>
  );
}

function CityPage() {
  const { oras } = Route.useParams();
  const city = getCityBySlug(oras)!;
  const { ads, stats, trust } = Route.useLoaderData();
  const faqs = cityFaqs(city, stats, ads.localTotal);
  const sameCounty = citiesInCounty(city);
  const subjects = [...SUBJECTS_SEO].sort(
    (a, b) => (ads.perSubject[b.slug] ?? 0) - (ads.perSubject[a.slug] ?? 0),
  );
  const pr = stats.price;

  return (
    <>
      <div className="container-page pt-4">
        <AdsterraBannerResponsive />
      </div>

      <article className="container-page py-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Acasă
          </Link>
          {" / "}
          <Link to="/meditatii" className="hover:text-foreground">
            Meditații
          </Link>
          {" / "}
          <span className="text-foreground">{city.name}</span>
        </nav>

        <header className="mt-4 max-w-3xl">
          <p className="inline-flex items-center gap-1 text-xs font-medium text-primary">
            <BadgeCheck className="h-4 w-4" /> Cerere gratuită • Fără comision
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
            {city.slug === "cluj-napoca"
              ? "Anunțuri meditații Cluj-Napoca"
              : `Meditații ${city.name}`}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Cauți un profesor de meditații în <strong>{city.name}</strong> ({city.county})? Postezi
            o singură dată ce ai nevoie — materia, clasa, online sau față în față și bugetul — iar
            profesorii îți trimit propuneri cu dată, oră și tarif.{" "}
            {pr ? (
              <>
                Tarifele reale de pe platformă pentru {city.name}:{" "}
                <strong>
                  {pr.min}–{pr.max} lei/oră
                </strong>{" "}
                (median {pr.median} lei).{" "}
              </>
            ) : null}
            Gratuit, fără comision.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/meditatii" search={{ oras: city.slug }} className="btn-primary">
              Postează cererea în {city.name}
            </Link>
            {city.slug === "cluj-napoca" && (
              <Link to="/meditatii-cluj" className="btn-outline">
                Ghid meditații Cluj
              </Link>
            )}
            <Link to="/meditatii-online" className="btn-outline">
              Meditații online
            </Link>
          </div>
        </header>

        <section className="mt-10" aria-labelledby="materii-oras">
          <h2 id="materii-oras" className="text-2xl font-bold">
            Meditații pe materii în {city.name}
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((s) => {
              const n = ads.perSubject[s.slug] ?? 0;
              return (
                <li key={s.slug}>
                  <Link
                    to="/meditatii/$materie/$oras"
                    params={{ materie: s.slug, oras: city.slug }}
                    className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm hover:border-primary/40 hover:text-primary"
                  >
                    <span>
                      Meditații {s.nameLower} {city.name}
                    </span>
                    {n >= MIN_LISTINGS_FOR_INDEX && (
                      <span className="text-xs text-muted-foreground">{n} anunțuri</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="mt-10" aria-labelledby="date-oras">
          <h2 id="date-oras" className="text-2xl font-bold">
            Meditații în {city.name} în cifre
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Calculate din anunțurile, ofertele și cererile reale de pe MeditatiiDirect · actualizat
            la {fmtDate(stats.updatedAt)}
          </p>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card-soft p-5">
              <dt className="text-sm text-muted-foreground">Anunțuri din {city.name}</dt>
              <dd className="mt-1 text-2xl font-bold">{ads.localTotal}</dd>
              <dd className="text-xs text-muted-foreground">+ {stats.onlineListings} online</dd>
            </div>
            <div className="card-soft p-5">
              <dt className="text-sm text-muted-foreground">Tarif median</dt>
              <dd className="mt-1 text-2xl font-bold">{pr ? `${pr.median} lei` : "—"}</dd>
              <dd className="text-xs text-muted-foreground">
                {pr
                  ? `${pr.min}–${pr.max} lei/oră · ${pr.n} tarife`
                  : "încă fără tarife suficiente"}
              </dd>
            </div>
            <div className="card-soft p-5">
              <dt className="text-sm text-muted-foreground">Cereri de la elevi</dt>
              <dd className="mt-1 text-2xl font-bold">{stats.requestsTotal}</dd>
              <dd className="text-xs text-muted-foreground">în {city.name} sau online</dd>
            </div>
            <div className="card-soft p-5">
              <dt className="text-sm text-muted-foreground">Prima propunere</dt>
              <dd className="mt-1 text-2xl font-bold">
                {stats.firstProposalHours != null
                  ? stats.firstProposalHours < 1
                    ? "< 1 oră"
                    : stats.firstProposalHours < 48
                      ? `~${stats.firstProposalHours} ore`
                      : `~${Math.round(stats.firstProposalHours / 24)} zile`
                  : "—"}
              </dd>
              <dd className="text-xs text-muted-foreground">
                {stats.answeredRequests
                  ? `mediana pe ${stats.answeredRequests} cereri`
                  : "încă fără răspunsuri"}
              </dd>
            </div>
          </dl>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Profesori de meditații din {city.name}</h2>
          {ads.local.length === 0 ? (
            <div className="mt-6 card-soft p-6">
              <p className="text-muted-foreground">
                Încă nu există anunțuri publicate de profesori din {city.name}. Postează cererea
                gratuit — profesorii care predau online sau se deplasează în {city.name} îți pot
                trimite propuneri.
              </p>
              <Link to="/meditatii" search={{ oras: city.slug }} className="btn-primary mt-4">
                Postează cererea
              </Link>
            </div>
          ) : (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ads.local.map((ad) => (
                <AdCard key={ad.id} ad={ad} />
              ))}
            </div>
          )}
        </section>

        {ads.online.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-bold">Meditații online pentru elevii din {city.name}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ads.online.map((ad) => (
                <AdCard key={ad.id} ad={ad} />
              ))}
            </div>
            <Link to="/meditatii-online" className="mt-4 inline-block text-primary underline">
              Toți profesorii care predau online
            </Link>
          </section>
        )}

        <div className="my-10">
          <AdsterraNativeBanner />
        </div>

        <section className="mt-10 max-w-3xl">
          <h2 className="text-2xl font-bold">Cum găsești profesorul potrivit în {city.name}</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted-foreground">
            <li>
              Postezi cererea gratuit: materia, clasa, „online” sau „față în față” în {city.name} și
              bugetul orientativ.
            </li>
            <li>Profesorii care predau materia îți trimit propuneri cu dată, oră și tarif.</li>
            <li>Discuți în chat, faci prima ședință și evaluezi propunerea cu 1–5 stele.</li>
          </ol>
          <h3 className="mt-6 text-lg font-semibold">Pregătire pentru examene</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Elevii din {city.name} (reper: {city.landmark}) caută cel mai des pregătire pentru{" "}
            <Link to="/meditatii-evaluare-nationala" className="text-primary underline">
              Evaluarea Națională
            </Link>
            ,{" "}
            <Link to="/meditatii-bac" className="text-primary underline">
              Bacalaureat
            </Link>{" "}
            și admitere. Gratuit, pe site găsești și{" "}
            <Link to="/subiecte-bac" className="text-primary underline">
              subiecte BAC cu bareme
            </Link>
            ,{" "}
            <Link to="/simulare-bacalaureat" className="text-primary underline">
              simulări
            </Link>{" "}
            și{" "}
            <Link to="/harta-blocajelor" className="text-primary underline">
              Harta Blocajelor
            </Link>
            , care îți arată ce noțiune îți lipsește.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Vrei să exersezi și între ședințe?{" "}
            <Link to="/profesor-ai" className="text-primary underline">
              Profesorul AI
            </Link>{" "}
            explică pe loc orice lecție, la orice oră; primele 15 minute sunt gratuite pentru
            fiecare elev.
          </p>
        </section>

        <TrustBlock t={trust} />

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-bold">
            Întrebări frecvente despre meditațiile în {city.name}
          </h2>
          <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-card">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5 open:bg-muted/30">
                <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                  {f.q}
                  <span className="text-muted-foreground transition group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {sameCounty.length > 0 && (
          <section className="mt-12">
            <h2 className="text-lg font-semibold">Meditații în județul {city.county}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {sameCounty.map((c) => (
                <Link
                  key={c.slug}
                  to="/meditatii-in/$oras"
                  params={{ oras: c.slug }}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
                >
                  Meditații {c.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-8">
          <h2 className="text-lg font-semibold">Meditații în alte orașe</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {CITIES.filter((c) => c.slug !== city.slug && c.county !== city.county).map((c) => (
              <Link
                key={c.slug}
                to="/meditatii-in/$oras"
                params={{ oras: c.slug }}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
              >
                Meditații {c.name}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}

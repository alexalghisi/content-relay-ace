import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { MapPin, Wifi, BadgeCheck, Star } from "lucide-react";
import { AdsterraNativeBanner, AdsterraBannerResponsive } from "@/components/ads/adsterra";
import { CITIES, getCityBySlug, citiesInCounty, type CityInfo } from "@/data/cities";
import { SUBJECTS_SEO, getSubjectSeo } from "@/data/subjects-seo";
import { hubPentruOras, type OrasHub } from "@/data/orase-hub";
import { ghiduriPentruOras } from "@/data/ghiduri-locale";
import { faqJsonLd } from "@/components/seo-landing";
import {
  getComboStats,
  getTrustStats,
  MIN_LISTINGS_FOR_INDEX,
  type ComboStats,
} from "@/lib/market-stats.functions";
import { CereriRecente, TrustBlock } from "@/components/market-data";
import {
  descriereOras,
  necesitaDateNationale,
  paginaLocalaIndexabila,
  titluOras,
} from "@/lib/pagina-locala";

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
// Cloudflare Workers freeze the clock at 0 in module scope: read the year per request.
const anul = () => Math.max(2026, new Date().getFullYear());
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
    try {
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
      // Puține date locale → completăm cu agregatele naționale (marcate ca atare pe pagină).
      const national = necesitaDateNationale(stats)
        ? await getComboStats({
            data: {
              subjectSlugs: ALL_SUBJECT_SLUGS,
              subjectName: "",
              cityName: "România",
              cityMatch: [],
            },
          })
        : null;
      return { data: { ads, stats, trust, national } };
    } catch (err) {
      // Nu prezentăm o citire eșuată ca pe o pagină goală: pagina spune explicit că datele lipsesc.
      console.error("city page data failed", err);
      return { data: null };
    }
  },
  head: ({ params, loaderData }) => {
    const city = getCityBySlug(params.oras);
    if (!city || !loaderData) return { meta: [] };
    const url = `${SITE}/meditatii-in/${params.oras}`;
    if (!loaderData.data) {
      const hubLocal = hubPentruOras(city.slug);
      const title = titluOras(city.name, anul());
      const desc = descriereOras({ oras: city.name, pret: null, profesoriLocali: false });
      return {
        meta: [
          ...(hubLocal || ghiduriPentruOras(city.slug).length
            ? []
            : [{ name: "robots", content: "noindex, follow" }]),
          { title },
          { name: "description", content: desc },
          { property: "og:title", content: title },
          { property: "og:description", content: desc },
          { property: "og:url", content: url },
        ],
        links: [{ rel: "canonical", href: url }],
      };
    }
    const { ads, stats } = loaderData.data;
    const pr = stats.price;
    const n = ads.localTotal;
    // Pagina canonică pentru „meditatii {oraș}” (vechiul /meditatii-{oras} face 301 aici).
    const title = titluOras(city.name, anul());
    const desc = descriereOras({ oras: city.name, pret: pr, profesoriLocali: n > 0 });
    const faqs = cityFaqs(city, stats, n, loaderData.data.national);
    const hub = hubPentruOras(city.slug);
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
    const listate = [...ads.local, ...ads.online];
    const itemListLd = listate.length
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `Anunțuri meditații pentru elevii din ${city.name}`,
          numberOfItems: Math.min(listate.length, 20),
          itemListElement: listate.slice(0, 20).map((a, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE}/anunt/${a.seo_slug || a.id}`,
            name: a.title,
          })),
        }
      : null;
    return {
      meta: [
        // Fără conținut real specific orașului (anunțuri locale sau profesori + cereri din oraș) → noindex.
        // Aceeași regulă în sitemap (src/lib/pagina-locala.ts).
        ...(paginaLocalaIndexabila({
          localAds: n,
          onlineAds: ads.online.length,
          cityRequests: stats.cityRequests,
          // Conținut local scris de mână (repere, licee, ghiduri pe materii) → pagină unică.
          ghid: !!hub || ghiduriPentruOras(city.slug).length > 0,
        })
          ? []
          : [{ name: "robots", content: "noindex, follow" }]),
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

function cityFaqs(city: CityInfo, s: ComboStats, localTotal: number, national?: ComboStats | null) {
  const nearby = citiesInCounty(city).map((c) => c.name);
  const hub = hubPentruOras(city.slug);
  return [
    {
      q: `Cât costă meditațiile în ${city.name}?`,
      a: s.price
        ? `Pe MeditatiiDirect, cele ${s.price.n} tarife reale care acoperă ${city.name} (anunțuri, oferte și propuneri trimise elevilor) sunt între ${s.price.min} și ${s.price.max} lei/oră, cu mediana de ${s.price.median} lei/oră. Date actualizate la ${fmtDate(s.updatedAt)}.`
        : national?.price
          ? `Pe MeditatiiDirect, cele ${national.price.n} tarife reale din toată țara (anunțuri, oferte și propuneri, inclusiv ale profesorilor care predau online) sunt între ${national.price.min} și ${national.price.max} lei/oră, cu mediana de ${national.price.median} lei/oră. Date actualizate la ${fmtDate(national.updatedAt)}.`
          : `Tariful îl propune fiecare profesor în ofertă, înainte să accepți; depinde de materie, nivel, format (online sau la domiciliu) și experiență. În cerere poți trece bugetul tău.`,
    },
    {
      q: `Câți profesori de meditații sunt în ${city.name}?`,
      a: localTotal
        ? `În acest moment sunt ${localTotal} ${localTotal === 1 ? "anunț activ publicat" : "anunțuri active publicate"} de profesori din ${city.name}, plus ${s.onlineListings} anunțuri cu meditații online, disponibile oricărui elev din ${city.slug === "bucuresti" ? city.name : `județul ${city.county}`}.`
        : `Pe MeditatiiDirect sunt ${s.onlineListings} anunțuri active cu meditații online, deschise și elevilor din ${city.name}${city.slug !== "bucuresti" ? ` și din județul ${city.county}` : ""}. Când postezi o cerere, ea ajunge și la profesorii care se deplasează în ${city.name}.`,
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
    ...(hub?.faqs ?? []),
  ];
}

/** Conținutul local scris de mână (mutat de pe vechea pagină /meditatii-{oras}). */
function ContinutLocal({ city, hub }: { city: CityInfo; hub: OrasHub }) {
  const ghiduri = ghiduriPentruOras(city.slug);
  return (
    <section className="mt-10 max-w-3xl" id="ghid-local" data-testid="continut-local">
      <h2 className="text-2xl font-bold">Ghid local: meditații în {city.name}</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">{hub.context}</p>
      <h3 className="mt-6 text-lg font-semibold">Zone acoperite</h3>
      <p className="mt-2 text-muted-foreground">
        Poți cere meditații la domiciliu în cartiere ca {hub.zone.join(", ")}, sau{" "}
        <Link to="/meditatii-online" className="text-primary underline">
          meditații online
        </Link>
        , oriunde în oraș. Scrie zona în cerere, ca profesorii care se pot deplasa să te găsească.
      </p>
      <h3 className="mt-6 text-lg font-semibold">Licee și universități din {city.name}</h3>
      <p className="mt-2 text-muted-foreground">
        Elevii din {city.name} se pregătesc des pentru licee precum:
      </p>
      <ul className="mt-2 grid gap-1 text-muted-foreground sm:grid-cols-2">
        {hub.licee.map((l) => (
          <li key={l}>• {l}</li>
        ))}
      </ul>
      <p className="mt-3 text-muted-foreground">
        și pentru admiterea la: {hub.universitati.join(", ")}. Mediile de admitere se verifică pe
        site-ul oficial al {city.name === "București" ? "ISMB" : "ISJ"} sau al universității.
      </p>
      {ghiduri.length > 0 && (
        <>
          <h3 className="mt-6 text-lg font-semibold">Ghiduri pe materii pentru {city.name}</h3>
          <p className="mt-2 text-muted-foreground">
            Pentru fiecare materie avem o pagină cu profesorii din {city.name}, tarifele reale de pe
            platformă și un ghid despre ce să ceri (examen, admitere, cartier, online):
          </p>
          <ul className="mt-2 grid gap-1 sm:grid-cols-2">
            {ghiduri.map((g) => (
              <li key={g.materie}>
                •{" "}
                <Link
                  to="/meditatii/$materie/$oras"
                  params={{ materie: g.materie, oras: city.slug }}
                  className="text-primary underline"
                >
                  Meditații {getSubjectSeo(g.materie)?.nameLower ?? g.materie} în {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {hub.linkuri && hub.linkuri.length > 0 && (
        <p className="mt-4 flex flex-wrap gap-2">
          {hub.linkuri.map((l) => (
            <a
              key={l.to}
              href={l.to}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </p>
      )}
    </section>
  );
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

/** Pagina fără datele din baza de date (citire eșuată): conținutul local rămâne, fără cifre. */
function CityFallback({ city }: { city: CityInfo }) {
  const hub = hubPentruOras(city.slug);
  return (
    <article className="container-page py-8">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Meditații {city.name}</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Postezi o singură dată ce ai nevoie — materia, clasa, online sau față în față și bugetul —
          iar profesorii îți trimit propuneri cu dată, oră și tarif. Gratuit, fără comision.
        </p>
        <Link to="/meditatii" search={{ oras: city.slug }} className="btn-primary mt-5">
          Postează cererea în {city.name}
        </Link>
      </header>
      <section className="mt-10 rounded-2xl border border-border bg-muted/30 p-6" role="status">
        <h2 className="text-lg font-semibold">Anunțurile nu pot fi încărcate momentan</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Reîncarcă pagina în câteva minute. Între timp poți posta cererea: ajunge la profesorii de
          pe platformă, inclusiv la cei care predau online.
        </p>
      </section>
      {hub && <ContinutLocal city={city} hub={hub} />}
    </article>
  );
}

function CityPage() {
  const { oras } = Route.useParams();
  const city = getCityBySlug(oras)!;
  const { data } = Route.useLoaderData();
  if (!data) return <CityFallback city={city} />;
  const { ads, stats, trust, national } = data;
  const faqs = cityFaqs(city, stats, ads.localTotal, national);
  const hub = hubPentruOras(city.slug);
  const cereriNationale =
    !!national && stats.recentRequests.length < national.recentRequests.length;
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
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">Meditații {city.name}</h1>
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
            {hub && (
              <a href="#ghid-local" className="btn-outline">
                Ghid local {city.name}
              </a>
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
              <dt className="text-sm text-muted-foreground">
                Tarif median{!pr && national?.price ? " (toată țara)" : ""}
              </dt>
              <dd className="mt-1 text-2xl font-bold">
                {pr ? `${pr.median} lei` : national?.price ? `${national.price.median} lei` : "—"}
              </dd>
              <dd className="text-xs text-muted-foreground">
                {pr
                  ? `${pr.min}–${pr.max} lei/oră · ${pr.n} tarife`
                  : national?.price
                    ? `${national.price.min}–${national.price.max} lei/oră · ${national.price.n} tarife`
                    : "tariful îl propune profesorul"}
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

        {ads.local.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-bold">Profesori de meditații din {city.name}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ads.local.map((ad) => (
                <AdCard key={ad.id} ad={ad} />
              ))}
            </div>
          </section>
        )}

        {ads.online.length > 0 && (
          <section className="mt-10" data-testid="profesori-online">
            <h2 className="text-2xl font-bold">
              Profesori care predau online — disponibili și pentru elevii din {city.name}
            </h2>
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

        <CereriRecente
          cereri={cereriNationale ? national!.recentRequests : stats.recentRequests}
          subject="meditații"
          titlu={
            cereriNationale
              ? "Cereri recente de la elevi din toată țara (anonimizate)"
              : `Cereri recente de la elevi din ${city.name} sau online (anonimizate)`
          }
        />

        {ads.local.length === 0 && ads.online.length === 0 && (
          <section className="mt-10 card-soft p-6">
            <h2 className="text-lg font-semibold">Cum găsești un profesor pentru {city.name}</h2>
            <p className="mt-2 text-muted-foreground">
              Postezi cererea gratuit, cu materia, clasa și bugetul. Ea ajunge la profesorii
              materiei de pe platformă, inclusiv la cei care predau online sau se deplasează în{" "}
              {city.name}.
            </p>
            <Link to="/meditatii" search={{ oras: city.slug }} className="btn-primary mt-4">
              Postează cererea
            </Link>
          </section>
        )}

        {hub && <ContinutLocal city={city} hub={hub} />}

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

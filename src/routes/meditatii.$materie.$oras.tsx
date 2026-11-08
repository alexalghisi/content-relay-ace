// Combo dinamic materie × oraș: /meditatii/$materie/$oras
// Conținut real: anunțuri din oraș, profesori care predau online (din toată țara), cereri recente
// anonimizate și tarife reale — locale sau, când orașul are prea puține date, naționale (marcate).
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";
import { getSubjectSeo, type SubjectSeo } from "@/data/subjects-seo";
import { getCityBySlug, type CityInfo } from "@/data/cities";
import { getGhidLocal } from "@/data/ghiduri-locale";
import { AdsterraNativeBanner } from "@/components/ads/adsterra";
import { BadgeCheck, MapPin, Wifi } from "lucide-react";
import { ComboDataBlock, TrustBlock, comboFaqs } from "@/components/market-data";
import {
  getComboPageData,
  type AnuntCard,
  type ComboPageData,
} from "@/lib/pagina-locala.functions";
import { descriereCombo, paginaLocalaIndexabila, titluCombo } from "@/lib/pagina-locala";

const SITE = "https://meditatiidirect.ro";
const ANUL = new Date().getFullYear();

const seedFor = (subject: SubjectSeo, city: CityInfo) =>
  (subject.slug + city.slug).split("").reduce((a, c) => a + c.charCodeAt(0), 0) % 4;

function h1For(subject: SubjectSeo, city: CityInfo) {
  return [
    `Meditații ${subject.name} în ${city.name}`,
    `Profesori de ${subject.nameLower} în ${city.name}`,
    `Meditații ${subject.nameLower} ${city.name} — ${city.county}`,
    `${subject.name} particulară în ${city.name}: profesori și cereri reale`,
  ][seedFor(subject, city)]!;
}

function faqsFor(
  subject: SubjectSeo,
  city: CityInfo,
  data: ComboPageData | null,
  ghid: ReturnType<typeof getGhidLocal> | null,
) {
  const baza = data ? comboFaqs(data.stats, subject.nameLower, city.name, data.national) : [];
  return ghid ? [...ghid.faq, ...baza.slice(0, 2)] : baza;
}

export const Route = createFileRoute("/meditatii/$materie/$oras")({
  loader: async ({ params }) => {
    const subject = getSubjectSeo(params.materie);
    const city = getCityBySlug(params.oras);
    if (!subject || !city) throw notFound();
    let data: ComboPageData | null = null;
    try {
      data = await getComboPageData({ data: { materie: subject.slug, oras: city.slug } });
    } catch (err) {
      // Nu prezentăm o citire eșuată ca pe o pagină goală: afișăm explicit că datele lipsesc momentan.
      console.error("combo page data failed", err);
    }
    return { subject, city, data, ghid: getGhidLocal(subject.slug, city.slug) ?? null };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { subject, city, data, ghid } = loaderData;
    const url = `${SITE}/meditatii/${subject.slug}/${city.slug}`;
    const pretLocal = data?.stats.price ?? null;
    const pret = pretLocal ?? data?.national?.price ?? null;
    const title = ghid ? ghid.title : titluCombo(subject.nameLower, city.name, ANUL);
    const desc = ghid
      ? ghid.description
      : descriereCombo({
          materie: subject.nameLower,
          oras: city.name,
          pret,
          pretNational: !pretLocal && !!pret,
          profesoriLocali: (data?.local.length ?? 0) > 0,
        });
    const h1 = ghid ? ghid.h1 : h1For(subject, city);
    const faqs = faqsFor(subject, city, data, ghid);
    const indexabil = data
      ? paginaLocalaIndexabila({
          localAds: data.local.length,
          onlineAds: data.online.length,
          cityRequests: data.stats.cityRequests,
          ghid: !!ghid,
        })
      : !!ghid;

    const anunturi = data ? [...data.local, ...data.online] : [];
    const itemListLd = anunturi.length
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `Profesori de ${subject.nameLower} pentru elevii din ${city.name}`,
          numberOfItems: Math.min(anunturi.length, 20),
          itemListElement: anunturi.slice(0, 20).map((a, i) => ({
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
        // Pagina intră în index doar cu conținut real și specific orașului (src/lib/pagina-locala.ts);
        // sitemap-ul folosește aceeași regulă.
        ...(indexabil ? [] : [{ name: "robots", content: "noindex, follow" }]),
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
        { name: "x-h1", content: h1 },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "alternate", hrefLang: "ro-RO", href: url },
        { rel: "alternate", hrefLang: "ro", href: url },
        { rel: "alternate", hrefLang: "x-default", href: url },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Meditații ${subject.name} ${city.name}`,
            description: desc,
            url,
            areaServed: { "@type": "City", name: city.name },
            provider: { "@type": "Organization", name: "MeditatiiDirect", url: SITE },
            // Doar tarifele care acoperă orașul — nu cele naționale.
            ...(pretLocal
              ? {
                  offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "RON",
                    lowPrice: pretLocal.min,
                    highPrice: pretLocal.max,
                    offerCount: pretLocal.n,
                  },
                }
              : {}),
          }),
        },
        ...(itemListLd
          ? [{ type: "application/ld+json", children: JSON.stringify(itemListLd) }]
          : []),
        ...(faqs.length
          ? [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }]
          : []),
      ],
    };
  },
  component: ComboPage,
});

function AnuntCardView({ a }: { a: AnuntCard }) {
  return (
    <Link
      to="/anunt/$slug"
      params={{ slug: a.seo_slug || a.id }}
      className="card-soft flex flex-col p-5 transition hover:border-primary/40 hover:shadow-[var(--shadow-pop)]"
    >
      <div className="flex items-center gap-3">
        {a.avatar_url ? (
          <img
            src={a.avatar_url}
            alt={a.teacher_name ?? "Profesor"}
            loading="lazy"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
        ) : (
          <div className="grid h-11 w-11 place-items-center rounded-full bg-primary-soft font-semibold text-primary">
            {(a.teacher_name ?? "P").charAt(0)}
          </div>
        )}
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{a.teacher_name ?? "Profesor"}</p>
          <p className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <BadgeCheck className="h-3 w-3 text-primary" /> Anunț activ
          </p>
        </div>
        {a.is_promoted && (
          <span className="ml-auto rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-medium text-primary">
            Promovat
          </span>
        )}
      </div>
      <p className="mt-3 line-clamp-2 text-sm font-medium">{a.title}</p>
      <div className="mt-4 flex items-end justify-between text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          {a.location && (
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {a.location}
            </span>
          )}
          {a.is_online && (
            <span className="inline-flex items-center gap-1 text-primary">
              <Wifi className="h-3 w-3" /> Online
            </span>
          )}
        </span>
        {a.price_per_hour ? (
          <span className="text-base font-bold text-foreground">{a.price_per_hour} lei/h</span>
        ) : null}
      </div>
    </Link>
  );
}

function ComboPage() {
  const { subject, city, data, ghid } = Route.useLoaderData();
  const url = `${SITE}/meditatii/${subject.slug}/${city.slug}`;
  const pretLocal = data?.stats.price ?? null;
  const pretNational = !pretLocal ? (data?.national?.price ?? null) : null;
  const faqs = faqsFor(subject, city, data, ghid);
  const fara = !!data && !data.local.length && !data.online.length;

  return (
    <>
      <SeoLanding
        pageUrl={url}
        breadcrumbParent={{ name: "Meditații", url: `${SITE}/meditatii` }}
        linkContext={{ materie: subject.slug, oras: city.slug }}
        h1={ghid ? ghid.h1 : h1For(subject, city)}
        intro={
          ghid
            ? ghid.intro
            : `Cauți meditații la ${subject.nameLower} în ${city.name} (${city.county})? Descrie o singură dată ce ai nevoie, iar profesorii îți trimit propuneri cu dată, oră și tarif. ${
                pretLocal
                  ? `Tarifele reale de pe platformă pentru ${city.name}: ${pretLocal.min}–${pretLocal.max} lei/oră (median ${pretLocal.median} lei). `
                  : pretNational
                    ? `La ${subject.nameLower}, tarifele reale de pe platformă din toată țara sunt ${pretNational.min}–${pretNational.max} lei/oră (median ${pretNational.median} lei). `
                    : ""
              }Online sau la domiciliu. Gratuit, fără comision.`
        }
        faqs={faqs}
        bullets={[
          `${subject.name} pentru clasele V–XII, Evaluarea Națională, BAC și admitere`,
          `Pentru elevii din ${city.name} și din ${city.county}`,
          `Online (Zoom / Google Meet) sau la domiciliu în ${city.name}`,
          pretLocal
            ? `Tarif median real ${pretLocal.median} lei/oră, din ${pretLocal.n} tarife`
            : `Tariful îl propune profesorul, tu alegi`,
        ]}
        ctaPrimary={{
          to: "/meditatii",
          label: `Cere ofertă pentru ${subject.nameLower} în ${city.name}`,
          search: { materie: subject.slug, oras: city.slug },
        }}
        ctaSecondary={{ to: "/pentru-profesori", label: "Sunt profesor — vreau cererile" }}
        ctaFooter={{
          title: `Primește propuneri de la profesori de ${subject.nameLower} pentru ${city.name}`,
          body: "Completezi cererea în 2 minute și primești propuneri cu dată, oră și tarif. Gratuit, fără comision.",
          to: "/meditatii",
          label: "Cere ofertă gratuit",
          search: { materie: subject.slug, oras: city.slug },
        }}
      >
        {!data && (
          <section className="mt-10 rounded-2xl border border-border bg-muted/30 p-6" role="status">
            <h2 className="text-lg font-semibold">Anunțurile nu pot fi încărcate momentan</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Reîncarcă pagina în câteva minute. Între timp poți posta cererea: ajunge la profesorii
              de {subject.nameLower} de pe platformă, inclusiv la cei care predau online.
            </p>
          </section>
        )}

        {data && data.local.length > 0 && (
          <section
            className="mt-10"
            aria-labelledby="profesori-locali"
            data-testid="profesori-locali"
          >
            <h2 id="profesori-locali" className="mb-6 text-2xl font-bold">
              Profesori de {subject.nameLower} din {city.name}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.local.map((a) => (
                <AnuntCardView key={a.id} a={a} />
              ))}
            </div>
          </section>
        )}

        {data && data.online.length > 0 && (
          <section
            className="mt-10"
            aria-labelledby="profesori-online"
            data-testid="profesori-online"
          >
            <h2 id="profesori-online" className="text-2xl font-bold">
              Profesori care predau online — disponibili și pentru elevii din {city.name}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Anunțuri active de {subject.nameLower} cu ședințe online, publicate de profesori din
              toată țara.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.online.map((a) => (
                <AnuntCardView key={a.id} a={a} />
              ))}
            </div>
            <Link
              to="/meditatii-online"
              className="mt-4 inline-block text-sm text-primary underline"
            >
              Toți profesorii care predau online
            </Link>
          </section>
        )}

        {ghid && (
          <section className="mt-10" aria-labelledby="ghid-local">
            <h2 id="ghid-local" className="text-2xl font-bold">
              Ghid: meditații {subject.nameLower} în {city.name}
            </h2>
            <div className="mt-4 grid gap-6 lg:grid-cols-3">
              {ghid.sectiuni.map((sec) => (
                <article key={sec.titlu} className="card-soft p-5">
                  <h3 className="font-bold">{sec.titlu}</h3>
                  {sec.paragrafe.map((par, i) => (
                    <p key={i} className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {par}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </section>
        )}

        {data && (
          <ComboDataBlock
            s={data.stats}
            subject={subject.nameLower}
            city={city.name}
            national={data.national}
            embedded
          />
        )}

        {fara && (
          <section className="mt-10 card-soft p-6">
            <h2 className="text-lg font-semibold">
              Cum găsești un profesor de {subject.nameLower} pentru {city.name}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Postezi cererea cu clasa, obiectivul (de exemplu Evaluarea Națională sau BAC) și
              bugetul. Cererea ajunge la profesorii de {subject.nameLower} de pe platformă, inclusiv
              la cei care predau online, iar ei îți trimit propuneri cu dată, oră și tarif.
            </p>
          </section>
        )}
      </SeoLanding>

      {/* Banda pentru profesori — cererile din acest oraș ajung în panoul lor */}
      <section className="container-page py-8">
        <div className="card-soft flex flex-col items-start gap-4 bg-gradient-to-br from-primary-soft to-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="text-lg font-bold">
              Predai {subject.nameLower} în {city.name}?
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Creezi cont gratuit, completezi profilul și vezi cererile elevilor din {city.county}.
              Fără comision — tu stabilești tariful.
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/pentru-profesori" className="btn-primary h-11 px-5">
              Devino profesor
            </Link>
            <Link to="/cereri" className="btn-outline h-11 px-5">
              Vezi cererile
            </Link>
          </div>
        </div>
      </section>

      {data && <TrustBlock t={data.trust} />}

      <div className="container-page">
        <AdsterraNativeBanner />
      </div>
    </>
  );
}

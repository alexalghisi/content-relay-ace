// Rute SEO "plate": /meditatii-{materie}-{oras} (301 → /meditatii/{materie}/{oras}) și
// /meditatii-{materie}-online (noindex). Paginile consolidate (src/lib/seo-redirects.ts) primesc 301
// și aici, nu doar în src/server.ts. Orice alt URL necunoscut primește pagina 404 (noindex).
import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd, type FaqItem } from "@/components/seo-landing";
import { LeadCta } from "@/components/lead-cta";
import { SUBJECTS_SEO, getSubjectSeo } from "@/data/subjects-seo";
import { CITIES, getCityBySlug } from "@/data/cities";
import { getComboStats, pretAfisabil, type ComboStats } from "@/lib/market-stats.functions";
import { consolidatedTarget } from "@/lib/seo-redirects";

const SITE = "https://meditatiidirect.ro";

type Parsed =
  | { kind: "combo"; materie: string; oras: string }
  | { kind: "online"; materie: string }
  | { kind: "none" };

const CITY_ALIASES: Record<string, string> = {
  cluj: "cluj-napoca",
  "targu-mures": "targu-mures",
  "tg-mures": "targu-mures",
  "rm-valcea": "ramnicu-valcea",
  severin: "drobeta-turnu-severin",
};

const resolveCity = (slug: string) => getCityBySlug(CITY_ALIASES[slug] ?? slug);

function parse(pathname: string): Parsed {
  const seg = pathname.replace(/^\/+|\/+$/g, "");
  if (!seg.startsWith("meditatii-")) return { kind: "none" };
  const rest = seg.slice("meditatii-".length);
  for (const s of SUBJECTS_SEO) {
    if (rest === `${s.slug}-online`) return { kind: "online", materie: s.slug };
    if (rest.startsWith(`${s.slug}-`)) {
      const city = rest.slice(s.slug.length + 1);
      const resolved = resolveCity(city);
      if (resolved) return { kind: "combo", materie: s.slug, oras: resolved.slug };
    }
  }
  return { kind: "none" };
}

function build(parsed: Parsed, stats: ComboStats | null) {
  if (parsed.kind !== "online") return null;
  const s = getSubjectSeo(parsed.materie)!;
  // Doar tarife reale ale anunțurilor online (market-stats); altfel niciun număr.
  const p = pretAfisabil(stats?.priceOnline);
  const url = `${SITE}/meditatii-${s.slug}-online`;
  const title = `Meditații ${s.name} Online — Profesori din toată țara`;
  const description = p
    ? `Meditații ${s.nameLower} online cu profesori din toată România. Lecții pe Zoom sau Meet; tarif median real ${p.median} lei/oră, din ${p.n} anunțuri. Fără comision.`
    : `Meditații ${s.nameLower} online cu profesori din toată România. Lecții pe Zoom sau Meet, tariful îl propune profesorul în ofertă. Fără comision.`;
  const faqs: FaqItem[] = [
    {
      q: `Cât costă o oră de meditații ${s.nameLower} online?`,
      a: p
        ? `Din cele ${p.n} anunțuri online active pentru ${s.nameLower} de pe MeditatiiDirect, tarifele sunt între ${p.min} și ${p.max} lei/oră, cu mediana de ${p.median} lei/oră. Date actualizate la ${stats!.updatedAt}.`
        : `Tariful îl stabilește fiecare profesor în oferta lui, înainte să accepți; depinde de nivel (gimnaziu, liceu, BAC, admitere) și de experiență. Postezi gratuit o cerere și compari propunerile primite.`,
    },
    {
      q: "Pe ce platformă se țin lecțiile online?",
      a: "Cei mai mulți profesori folosesc Zoom, Google Meet sau Microsoft Teams, împreună cu o tablă digitală. Aplicația se stabilește direct cu profesorul, înainte de prima ședință.",
    },
    {
      q: "Meditațiile online sunt la fel de eficiente ca cele față în față?",
      a: "Da, pentru majoritatea elevilor. Online se economisește timpul de transport, lecția poate fi înregistrată pentru recapitulare, iar accesul la profesori buni nu mai depinde de orașul în care locuiești.",
    },
    {
      q: "De ce am nevoie pentru o lecție online?",
      a: "Un laptop sau o tabletă, conexiune stabilă la internet, căști cu microfon și, ideal, un caiet sau o tabletă grafică pentru exerciții. Nu ai nevoie de niciun cont plătit.",
    },
    {
      q: "Cum plătesc profesorul?",
      a: "Plata se face direct între tine și profesor, prin transfer bancar sau altă metodă agreată de voi. MeditatiiDirect nu percepe comision și nu intermediază plățile.",
    },
    {
      q: `Pot găsi profesor de ${s.nameLower} pentru clasa a VIII-a sau BAC?`,
      a: `Da. Profesorii precizează în anunț nivelurile la care predau: gimnaziu, Evaluare Națională, liceu, Bacalaureat și pregătire pentru admitere.`,
    },
  ];
  return {
    url,
    title: title.slice(0, 60),
    description,
    h1: `Meditații ${s.name} online în România`,
    intro: `Găsești profesori de ${s.nameLower} care predau online, din toată țara. Compari experiența și tariful din ofertă, apoi discuți direct cu profesorul — fără comision și fără intermediari.`,
    bullets: [
      p
        ? `Tarif median real online: ${p.median} lei/oră (${p.n} anunțuri)`
        : "Tariful îl propune profesorul în ofertă",
      "Lecții pe Zoom, Google Meet sau Teams",
      "Program flexibil, inclusiv seara și în weekend",
      "Contact direct, fără comision",
    ],
    faqs,
    serviceLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: `Meditații ${s.name} online`,
      name: `Meditații ${s.name} online`,
      description,
      url,
      provider: { "@id": `${SITE}/#org` },
      areaServed: { "@type": "Country", name: "România" },
      ...(p
        ? {
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "RON",
              lowPrice: p.min,
              highPrice: p.max,
              offerCount: p.n,
            },
          }
        : {}),
    },
    subject: s,
  };
}

export const Route = createFileRoute("/$")({
  loader: async ({ params }) => {
    const path = "/" + ((params as { _splat?: string })._splat ?? "");
    const merged = consolidatedTarget(path.replace(/\/+$/, ""));
    if (merged) throw redirect({ href: merged, statusCode: 301 });
    const parsed = parse(path);
    // URL-urile "plate" materie+oraș redirecționează 301 către pagina canonică materie/oraș.
    if (parsed.kind === "combo") {
      throw redirect({
        to: "/meditatii/$materie/$oras",
        params: { materie: parsed.materie, oras: parsed.oras },
        statusCode: 301,
      });
    }
    if (parsed.kind === "none") throw notFound();
    const s = getSubjectSeo(parsed.materie)!;
    let stats: ComboStats | null = null;
    try {
      stats = await getComboStats({
        data: {
          subjectSlugs: s.dbSlugs,
          subjectName: s.nameLower,
          cityName: "România",
          cityMatch: [],
        },
      });
    } catch (err) {
      console.error("online page stats failed", err);
    }
    return { path, stats };
  },
  head: ({ loaderData }) => {
    const data = loaderData ? build(parse(loaderData.path), loaderData.stats) : null;
    if (!data) {
      return {
        meta: [
          { title: "Pagina nu a fost găsită — MeditatiiDirect.ro" },
          { name: "robots", content: "noindex, follow" },
        ],
      };
    }
    return {
      meta: [
        // Paginile „materie-online” sunt șabloane aproape identice între materii → noindex.
        ...(data.url.endsWith("-online") ? [{ name: "robots", content: "noindex, follow" }] : []),
        { title: data.title },
        { name: "description", content: data.description },
        { property: "og:title", content: data.title },
        { property: "og:description", content: data.description },
        { property: "og:url", content: data.url },
        { property: "og:type", content: "website" },
        { name: "twitter:title", content: data.title },
        { name: "twitter:description", content: data.description },
      ],
      links: [{ rel: "canonical", href: data.url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(data.serviceLd) },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(data.faqs)) },
      ],
    };
  },
  component: SplatPage,
});

function SplatPage() {
  const { path, stats } = Route.useLoaderData();
  const data = build(parse(path), stats);

  if (!data) {
    return (
      <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Pagina nu a fost găsită</h2>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          Pagina căutată nu există sau a fost mutată. Încearcă una dintre paginile populare de mai
          jos.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {[
            { to: "/", label: "Acasă" },
            { to: "/anunturi-meditatii", label: "Anunțuri meditații" },
            { to: "/meditatii", label: "Caută profesor" },
            { to: "/preturi-meditatii", label: "Prețuri meditații" },
            { to: "/blog", label: "Blog" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  const s = data.subject;

  return (
    <>
      <SeoLanding
        pageUrl={data.url}
        breadcrumbParent={{ name: "Meditații", url: `${SITE}/meditatii` }}
        h1={data.h1}
        intro={data.intro}
        bullets={data.bullets}
        ctaPrimary={{ to: "/meditatii", label: "Găsește profesor" }}
        ctaSecondary={{ to: "/anunturi-meditatii", label: "Vezi anunțurile" }}
        sections={[
          {
            title: `De ce meditații ${s.nameLower} online`,
            body: (
              <>
                <p>
                  Meditațiile online la {s.nameLower} elimină timpul de deplasare și îți dau acces
                  la profesori din toată țara, nu doar din orașul tău. Lecțiile se țin pe tablă
                  digitală, cu materiale trimise înainte și exerciții rezolvate în timp real.
                </p>
                <p>
                  Este varianta preferată de elevii din localități mici, unde oferta locală de
                  profesori este limitată.
                </p>
              </>
            ),
          },
          {
            title: "Cât durează pregătirea",
            body: (
              <>
                <p>
                  Pentru menținerea mediei, o ședință săptămânală este suficientă. Pentru Evaluare
                  Națională sau Bacalaureat la {s.nameLower}, profesorii recomandă două ședințe pe
                  săptămână, începute cu 4–6 luni înainte de examen, cu simulări lunare pe modelul
                  oficial.
                </p>
                <p>
                  Vezi{" "}
                  <Link to="/variante-bacalaureat" className="text-primary underline">
                    variantele de bacalaureat
                  </Link>{" "}
                  și{" "}
                  <Link to="/subiecte-bac-2026" className="text-primary underline">
                    subiectele BAC 2026
                  </Link>{" "}
                  pentru a-ți evalua nivelul înainte de prima ședință.
                </p>
              </>
            ),
          },
          {
            title: "Cum alegi profesorul potrivit",
            body: (
              <>
                <p>
                  Compară experiența didactică, nivelurile la care predă și tariful din ofertă. Cere
                  o ședință de probă și stabilește clar obiectivul: recuperare, menținerea mediei
                  sau notă mare la examen.
                </p>
                <p>
                  Tarifele reale pentru {s.nameLower} sunt pe{" "}
                  <Link
                    to="/preturi-meditatii/$materie"
                    params={{ materie: s.slug }}
                    className="text-primary underline"
                  >
                    pagina de prețuri {s.nameLower}
                  </Link>
                  .
                </p>
              </>
            ),
          },
        ]}
        faqs={data.faqs}
        related={[
          { to: "/anunturi-meditatii", label: "Anunțuri meditații" },
          { to: "/preturi-meditatii", label: "Prețuri meditații" },
          { to: "/meditatii-online", label: "Meditații online" },
          { to: "/pregatire-bacalaureat", label: "Pregătire Bacalaureat" },
          { to: "/profesori", label: "Profesori verificați" },
        ]}
      />
      <div className="container-page pb-14">
        <LeadCta defaultSubject={s.slug} />
        <div className="mt-8 flex flex-wrap gap-2">
          {CITIES.slice(0, 10).map((x) => (
            <Link
              key={x.slug}
              to="/meditatii/$materie/$oras"
              params={{ materie: s.slug, oras: x.slug }}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
            >
              Meditații {s.nameLower} {x.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

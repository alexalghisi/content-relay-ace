// Rute SEO "plate": /meditatii-{materie}-{oras} și /meditatii-{materie}-online
// Orice alt URL necunoscut primește pagina 404 (noindex).
import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd, type FaqItem } from "@/components/seo-landing";
import { LeadCta } from "@/components/lead-cta";
import { SUBJECTS_SEO, getSubjectSeo } from "@/data/subjects-seo";
import { CITIES, getCityBySlug } from "@/data/cities";

const SITE = "https://meditatiidirect.ro";

type Parsed = { kind: "combo"; materie: string; oras: string } | { kind: "online"; materie: string } | { kind: "none" };

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

function build(parsed: Parsed) {
  if (parsed.kind === "none") return null;
  const s = getSubjectSeo(parsed.materie)!;

  if (parsed.kind === "online") {
    const url = `${SITE}/meditatii-${s.slug}-online`;
    const title = `Meditații ${s.name} Online — Profesori Verificați 2026`;
    const description = `Meditații ${s.nameLower} online cu profesori verificați din toată România. Lecții pe Zoom sau Meet, ${s.pretMin}–${s.pretMax} lei/oră, fără comision. Prima lecție se stabilește direct cu profesorul.`;
    const faqs: FaqItem[] = [
      {
        q: `Cât costă o oră de meditații ${s.nameLower} online?`,
        a: `Tarifele pentru meditații ${s.nameLower} online pornesc de la ${s.pretMin} lei/oră pentru gimnaziu și ajung la ${s.pretMax} lei/oră pentru pregătire intensivă de BAC sau admitere. Media pe platformă este de aproximativ ${s.pretMediu} lei/oră.`,
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
      intro: `Găsești profesori de ${s.nameLower} care predau exclusiv online, din toată țara. Compari experiența, tariful și recenziile, apoi contactezi profesorul direct — fără comision și fără intermediari.`,
      bullets: [
        `Tarife între ${s.pretMin} și ${s.pretMax} lei/oră`,
        "Lecții pe Zoom, Google Meet sau Teams",
        "Profesori verificați, cu identitate confirmată",
        "Program flexibil, inclusiv seara și în weekend",
        "Materiale digitale incluse de majoritatea profesorilor",
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
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "RON",
          lowPrice: s.pretMin,
          highPrice: s.pretMax,
          availability: "https://schema.org/InStock",
        },
      },
      related: [
        { to: "/meditatii-online", label: "Toate meditațiile online" },
        { to: "/anunturi-meditatii", label: "Anunțuri meditații" },
        { to: "/preturi-meditatii", label: "Prețuri meditații" },
        { to: "/profesori", label: "Profesori verificați" },
        { to: "/blog", label: "Blog & subiecte BAC" },
      ],
      subject: s,
      city: null as null | ReturnType<typeof getCityBySlug>,
    };
  }

  const c = getCityBySlug(parsed.oras)!;
  const url = `${SITE}/meditatii-${s.slug}-${c.slug}`;
  const pMin = Math.round(s.pretMin * c.priceIndex);
  const pMax = Math.round(s.pretMax * c.priceIndex);
  const pMed = Math.round(s.pretMediu * c.priceIndex);
  const title = `Meditații ${s.name} ${c.name} — profesori verificați`;
  const description = `Meditații ${s.nameLower} în ${c.name}: profesori verificați, ${pMin}–${pMax} lei/oră, acasă sau online. Contactezi profesorul direct, fără comision. Anunțuri actualizate zilnic.`;
  const faqs: FaqItem[] = [
    {
      q: `Cât costă meditațiile la ${s.nameLower} în ${c.name}?`,
      a: `În ${c.name} tarifele pentru meditații ${s.nameLower} sunt între ${pMin} și ${pMax} lei/oră, cu o medie de aproximativ ${pMed} lei/oră. Prețul depinde de nivel (gimnaziu, liceu, BAC, admitere), de experiența profesorului și de locul lecției.`,
    },
    {
      q: `Unde se țin meditațiile de ${s.nameLower} în ${c.name}?`,
      a: `Poți alege lecții la domiciliul profesorului, la tine acasă sau online. Mulți profesori din zona ${c.landmark} acceptă ambele variante, iar deplasarea poate fi inclusă sau taxată separat.`,
    },
    {
      q: "Cum știu că profesorul este de încredere?",
      a: "Fiecare profesor de pe MeditatiiDirect trece printr-o verificare a identității și a experienței didactice. În plus, poți citi recenziile lăsate de elevi și părinți în profilul profesorului.",
    },
    {
      q: `Câte ore de meditații la ${s.nameLower} sunt necesare?`,
      a: `Pentru recuperarea materiei curente, o ședință pe săptămână este de obicei suficientă. Pentru Evaluare Națională sau Bacalaureat, profesorii recomandă două ședințe săptămânal, începute cu cel puțin 4–6 luni înainte de examen.`,
    },
    {
      q: "Plătesc ceva platformei?",
      a: "Nu. Căutarea, contactarea profesorilor și publicarea anunțurilor de bază sunt gratuite. Plătești doar tariful convenit cu profesorul, direct lui.",
    },
    {
      q: `Găsesc profesori de ${s.nameLower} și în afara orașului ${c.name}?`,
      a: `Da. Dacă în ${c.name} nu găsești imediat profesorul potrivit, filtrează după meditații online — profesorii predau din toată România, iar disponibilitatea este mult mai mare.`,
    },
  ];
  return {
    url,
    title,
    description,
    h1: `Meditații ${s.name} în ${c.name}`,
    intro: `Profesori de ${s.nameLower} din ${c.name} (județul ${c.county}, ${c.population} locuitori), verificați de echipa noastră. Tarife între ${pMin} și ${pMax} lei/oră, lecții acasă sau online, contact direct cu profesorul.`,
    bullets: [
      `Tarif mediu în ${c.name}: ${pMed} lei/oră`,
      `Profesori din toate zonele orașului, inclusiv lângă ${c.landmark}`,
      "Pregătire pentru gimnaziu, liceu, Evaluare Națională și BAC",
      "Lecții la domiciliu sau online",
      "Recenzii reale de la elevi și părinți",
      "Fără comision și fără abonament",
    ],
    faqs,
    serviceLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: `Meditații ${s.name}`,
      name: `Meditații ${s.name} în ${c.name}`,
      description,
      url,
      provider: { "@id": `${SITE}/#org` },
      areaServed: {
        "@type": "City",
        name: c.name,
        address: { "@type": "PostalAddress", addressLocality: c.name, addressRegion: c.county, addressCountry: "RO" },
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "RON",
        lowPrice: pMin,
        highPrice: pMax,
        availability: "https://schema.org/InStock",
      },
    },
    related: [
      { to: "/meditatii-in/$oras", label: `Meditații în ${c.name}` },
      { to: "/profesori/$oras", label: `Profesori din ${c.name}` },
      { to: "/anunturi-meditatii", label: "Anunțuri meditații" },
      { to: "/preturi-meditatii", label: "Prețuri meditații" },
    ],
    subject: s,
    city: c,
  };
}

export const Route = createFileRoute("/$")({
  loader: ({ params }) => {
    const path = "/" + ((params as { _splat?: string })._splat ?? "");
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
    return { path };
  },
  head: ({ loaderData }) => {
    const data = loaderData ? build(parse(loaderData.path)) : null;
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
  const { path } = Route.useLoaderData();
  const data = build(parse(path));

  if (!data) {
    return (
      <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Pagina nu a fost găsită</h2>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          Pagina căutată nu există sau a fost mutată. Încearcă una dintre paginile populare de mai jos.
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
  const c = data.city;

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
            title: c ? `De ce meditații la ${s.nameLower} în ${c.name}` : `De ce meditații ${s.nameLower} online`,
            body: c ? (
              <>
                <p>
                  {c.name} are o competiție reală la admiterea în liceele de top, iar programa la {s.nameLower} lasă
                  puțin timp pentru recapitulare la clasă. Un profesor particular reia noțiunile în ritmul elevului,
                  identifică lacunele exacte și lucrează pe subiecte de examen din anii anteriori.
                </p>
                <p>
                  Majoritatea profesorilor din {c.name} predau atât elevilor de gimnaziu, cât și celor de liceu, iar
                  pentru clasele terminale organizează ședințe de 90 sau 120 de minute, cu teme între lecții.
                </p>
              </>
            ) : (
              <>
                <p>
                  Meditațiile online la {s.nameLower} elimină timpul de deplasare și îți dau acces la profesori din
                  toată țara, nu doar din orașul tău. Lecțiile se țin pe tablă digitală, cu materiale trimise înainte și
                  exerciții rezolvate în timp real.
                </p>
                <p>
                  Este varianta preferată de elevii din localități mici, unde oferta locală de profesori este limitată.
                </p>
              </>
            ),
          },
          {
            title: "Cât durează pregătirea",
            body: (
              <>
                <p>
                  Pentru menținerea mediei, o ședință săptămânală este suficientă. Pentru Evaluare Națională sau
                  Bacalaureat la {s.nameLower}, profesorii recomandă două ședințe pe săptămână, începute cu 4–6 luni
                  înainte de examen, cu simulări lunare pe modelul oficial.
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
                  Compară experiența didactică, nivelurile la care predă, tariful și recenziile. Cere o ședință de probă
                  și stabilește clar obiectivul: recuperare, menținerea mediei sau notă mare la examen.
                </p>
                <p>
                  Poți verifica tarifele actuale pe{" "}
                  <Link to="/preturi-meditatii" className="text-primary underline">
                    pagina de prețuri meditații
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
        <LeadCta defaultSubject={s.slug} defaultCity={c?.slug} />
        <div className="mt-8 flex flex-wrap gap-2">
          {CITIES.slice(0, 10)
            .filter((x) => x.slug !== c?.slug)
            .map((x) => (
              <a
                key={x.slug}
                href={`/meditatii-${s.slug}-${x.slug}`}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
              >
                Meditații {s.nameLower} {x.name}
              </a>
            ))}
        </div>
      </div>
    </>
  );
}

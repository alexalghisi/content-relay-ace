// Combo dinamic materie × oraș: /meditatii/$materie/$oras
// Pagina pull-uiește anunțuri reale + ItemList JSON-LD => conținut bogat + indexare puternică pentru long-tail.
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";
import { getSubjectSeo, SUBJECTS_SEO } from "@/data/subjects-seo";
import { getCityBySlug, CITIES } from "@/data/cities";
import { supabase } from "@/integrations/supabase/client";
import { EmptyResults } from "@/components/empty-results";
import { AdsterraNativeBanner } from "@/components/ads/adsterra";
import { BadgeCheck, MapPin, Wifi } from "lucide-react";
import { getComboStats, getTrustStats, MIN_LISTINGS_FOR_INDEX } from "@/lib/market-stats.functions";
import { ComboDataBlock, TrustBlock, comboFaqs } from "@/components/market-data";

const SITE = "https://meditatiidirect.ro";

interface LocalAd {
  id: string;
  title: string;
  seo_slug: string | null;
  price_per_hour: number | null;
  location: string | null;
  is_online: boolean;
  is_promoted: boolean;
  teacher_name: string | null;
  avatar_url: string | null;
}

async function fetchAdsForCombo(subjectSlugs: string[], city: { name: string; matchLocation: string[] }): Promise<LocalAd[]> {
  // Filtrăm pe materie + locație: orice anunț al cărui `location` conține una din variantele orașului
  // sau e online. Limităm la 24 pentru indexare densă.
  const orFilter = city.matchLocation
    .map((m) => `location.ilike.%${m}%`)
    .concat(["is_online.eq.true"])
    .join(",");

  const { data } = await supabase
    .from("ads")
    .select("id,title,seo_slug,price_per_hour,location,is_online,is_promoted,legacy_teachers(full_name,avatar_url)")
    .eq("status", "active")
    .in("subject_slug", subjectSlugs)
    .or(orFilter)
    .order("is_promoted", { ascending: false })
    .order("views_count", { ascending: false })
    .limit(24);

  return ((data ?? []) as unknown as Array<{
    id: string; title: string; seo_slug: string | null;
    price_per_hour: number | null; location: string | null;
    is_online: boolean; is_promoted: boolean;
    legacy_teachers: { full_name: string; avatar_url: string | null } | null;
  }>).map((a) => ({
    id: a.id,
    title: a.title,
    seo_slug: a.seo_slug,
    price_per_hour: a.price_per_hour,
    location: a.location,
    is_online: a.is_online,
    is_promoted: a.is_promoted,
    teacher_name: a.legacy_teachers?.full_name ?? null,
    avatar_url: a.legacy_teachers?.avatar_url ?? null,
  }));
}

export const Route = createFileRoute("/meditatii/$materie/$oras")({
  loader: async ({ params }) => {
    const subject = getSubjectSeo(params.materie);
    const city = getCityBySlug(params.oras);
    if (!subject || !city) throw notFound();
    const [ads, stats, trust] = await Promise.all([
      fetchAdsForCombo(subject.dbSlugs, city),
      getComboStats({ data: { subjectSlugs: subject.dbSlugs, subjectName: subject.nameLower, cityName: city.name, cityMatch: city.matchLocation } }),
      getTrustStats(),
    ]);
    return { subject, city, ads, stats, trust };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { subject, city, ads, stats } = loaderData;
    const url = `${SITE}/meditatii/${subject.slug}/${city.slug}`;
    const count = ads.length;
    // Preț local ajustat cu indicele orașului — face fiecare pagină unică (nu doar boilerplate)
    // Only real prices from our own listings/offers/proposals — never estimates.
    const pr = stats.price;
    const priceTxt = pr ? `${pr.min}-${pr.max} lei/oră` : "tarife de la profesori";
    // Rotăm 4 template-uri de titlu pe baza hash-ului deterministic (materie+oraș)
    // ⇒ 34 orașe × 11 materii = 374 combinații, fiecare cu title/H1/desc unic.
    const seed = (subject.slug + city.slug).split("").reduce((a, c) => a + c.charCodeAt(0), 0);
    const variant = seed % 4;
    const countLbl = count >= 5 ? `${count} profesori` : "Profesori";
    const titleTemplates = [
      `Meditații ${subject.name} ${city.name} — ${countLbl}, ${priceTxt}`,
      `Profesori ${subject.name} ${city.name}: online sau la domiciliu | MeditatiiDirect`,
      `Meditații ${subject.nameLower} în ${city.name} — prețuri reale 2026`,
      `${subject.name} ${city.name}: profesori particulari verificați`,
    ];
    const h1Templates = [
      `Meditații ${subject.name} în ${city.name}`,
      `Profesori de ${subject.nameLower} în ${city.name}`,
      `Meditații ${subject.nameLower} ${city.name} — ${city.county}`,
      `${subject.name} particulară în ${city.name}: profesori verificați`,
    ];
    const realBit = pr ? ` Tarif median real ${pr.median} lei/oră (${pr.min}–${pr.max}, din ${pr.n} oferte).` : "";
    const descTemplates = [
      `${count} anunțuri active de ${subject.nameLower} pentru ${city.name}.${realBit} Online sau la domiciliu, fără comision.`,
      `Cauți meditații ${subject.nameLower} în ${city.name}? Postezi cererea gratuit și profesorii îți trimit propuneri cu dată și tarif.${realBit}`,
      `Meditații ${subject.name} ${city.name}: date reale despre profesori, prețuri și cereri, actualizate zilnic.${realBit}`,
      `Profesori de ${subject.nameLower} în ${city.name}, online sau față în față.${realBit} Contact prin platformă, fără comision.`,
    ];
    const title = titleTemplates[variant];
    const desc = descTemplates[variant];
    const h1 = h1Templates[variant];

    const itemListLd = count > 0 ? {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `Meditații ${subject.name} în ${city.name}`,
      numberOfItems: count,
      itemListElement: ads.slice(0, 20).map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE}/anunt/${a.seo_slug || a.id}`,
        name: a.title,
      })),
    } : null;

    return {
      meta: [
        { title }, { name: "description", content: desc },
        // Thin content guard: fără profesori listați, pagina nu intră în index (dar linkurile sunt urmate).
        ...(count < MIN_LISTINGS_FOR_INDEX ? [{ name: "robots", content: "noindex, follow" }] : []),
        { name: "keywords", content: `meditatii ${subject.slug} ${city.slug}, meditatii ${subject.nameLower} ${city.name}, profesor ${subject.nameLower} ${city.name}, pret meditatii ${subject.nameLower} ${city.name}, meditatii ${subject.nameLower} ${city.name} online, anunturi meditatii ${city.name}, profesori ${subject.nameLower} ${city.county.toLowerCase()}` },
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
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "Service",
          name: `Meditații ${subject.name} ${city.name}`,
          description: desc, url, areaServed: { "@type": "City", name: city.name },
          provider: { "@type": "Organization", name: "MeditatiiDirect", url: SITE },
          ...(pr ? { offers: { "@type": "AggregateOffer", priceCurrency: "RON", lowPrice: pr.min, highPrice: pr.max, offerCount: pr.n } } : {}),
        }) },
        ...(itemListLd ? [{ type: "application/ld+json", children: JSON.stringify(itemListLd) }] : []),
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(comboFaqs(stats, subject.nameLower, city.name))) },
      ],
    };
  },
  component: ComboPage,
});

function ComboPage() {
  const { subject, city, ads, stats, trust } = Route.useLoaderData();
  const url = `${SITE}/meditatii/${subject.slug}/${city.slug}`;

  // Cross-link silos: aceeași materie în alte orașe + alte materii în același oraș
  const otherCities = CITIES.filter((c) => c.slug !== city.slug).slice(0, 8);
  const otherSubjects = SUBJECTS_SEO.filter((s) => s.slug !== subject.slug).slice(0, 8);

  const seed = (subject.slug + city.slug).split("").reduce((a: number, c: string) => a + c.charCodeAt(0), 0);
  const variant = seed % 4;
  const pr = stats.price;
  const h1Options = [
    `Meditații ${subject.name} în ${city.name}`,
    `Profesori de ${subject.nameLower} în ${city.name}`,
    `Meditații ${subject.nameLower} ${city.name} — ${city.county}`,
    `${subject.name} particulară în ${city.name}: profesori verificați`,
  ];

  return (
    <>
      <SeoLanding
        pageUrl={url}
        breadcrumbParent={{ name: "Meditații", url: `${SITE}/meditatii` }}
        h1={h1Options[variant]}
        intro={`Cauți meditații la ${subject.nameLower} în ${city.name} (${city.county}, ${city.population} locuitori — reper ${city.landmark})? Descrie o singură dată ce ai nevoie, iar profesorii verificați îți trimit propuneri cu dată, oră și tarif. ${pr ? `Tarifele reale de pe platformă: ${pr.min}–${pr.max} lei/oră (median ${pr.median} lei). ` : ""}Online sau la domiciliu. Gratuit, fără comision.`}
        faqs={comboFaqs(stats, subject.nameLower, city.name)}
        bullets={[
          `${subject.name} pentru toate nivelurile: clasele V–XII, BAC 2026, admitere`,
          `Pentru elevii din ${city.name} și din liceele din ${city.county}`,
          `Online (Zoom / Google Meet) sau la domiciliu în ${city.name}`,
          pr ? `Tarif median real ${pr.median} lei/oră, din ${pr.n} oferte` : `Tariful îl propune profesorul, tu alegi`,
        ]}
        ctaPrimary={{
          to: "/meditatii",
          label: `Cere ofertă pentru ${subject.nameLower} în ${city.name}`,
          search: { materie: subject.slug, oras: city.slug },
        }}
        ctaSecondary={{ to: "/pentru-profesori", label: "Sunt profesor — vreau cererile" }}
        ctaFooter={{
          title: `Primește propuneri de la profesori de ${subject.nameLower} din ${city.name}`,
          body: "Completezi cererea în 2 minute și primești propuneri cu dată, oră și tarif. Gratuit, fără comision.",
          to: "/meditatii",
          label: "Cere ofertă gratuit",
          search: { materie: subject.slug, oras: city.slug },
        }}
      />

      <ComboDataBlock s={stats} subject={subject.nameLower} city={city.name} />

      {/* Anunțuri reale — conținut indexabil bogat */}
      {ads.length > 0 && (
        <section className="container-page py-8">
          <h2 className="text-2xl font-bold mb-6">
            Profesori de {subject.nameLower} disponibili în {city.name}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ads.map((a: LocalAd) => (
              <Link
                key={a.id}
                to="/anunt/$slug"
                params={{ slug: a.seo_slug || a.id }}
                className="card-soft p-5 hover:border-primary/40 hover:shadow-[var(--shadow-pop)] transition flex flex-col"
              >
                <div className="flex items-center gap-3">
                  {a.avatar_url ? (
                    <img src={a.avatar_url} alt={a.teacher_name ?? "Profesor"} loading="lazy" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
                  ) : (
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-primary-soft text-primary font-semibold">
                      {(a.teacher_name ?? "P").charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate">{a.teacher_name ?? "Profesor verificat"}</p>
                    <p className="text-xs text-muted-foreground inline-flex items-center gap-1">
                      <BadgeCheck className="h-3 w-3 text-primary" /> Verificat
                    </p>
                  </div>
                  {a.is_promoted && (
                    <span className="ml-auto rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-medium text-primary">Top</span>
                  )}
                </div>
                <p className="mt-3 text-sm font-medium line-clamp-2">{a.title}</p>
                <div className="mt-4 flex items-end justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    {a.is_online ? <><Wifi className="h-3 w-3" /> Online</> : <><MapPin className="h-3 w-3" /> {a.location}</>}
                  </span>
                  {a.price_per_hour && <span className="text-base font-bold text-foreground">{a.price_per_hour} lei/h</span>}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {ads.length === 0 && (
        <div className="container-page">
          <EmptyResults
            title={`Încă nu avem anunțuri de ${subject.nameLower} în ${city.name}`}
            description={`Profesorii de ${subject.nameLower} din ${city.name} (${city.county}) își publică anunțurile continuu, iar lista se actualizează zilnic. Până atunci ai două soluții rapide: alege meditații online la ${subject.nameLower} — profesorii predau din toată țara, la aceleași tarife sau mai mici — ori postează o cerere și te contactează profesorii interesați. Găsești mai jos și resursele gratuite de pregătire (variante de BAC, subiecte de admitere, ghiduri) pe care le poți folosi imediat.`}
          />
        </div>
      )}



      {/* Banda pentru profesori — cererile din acest oraș ajung în panoul lor */}
      <section className="container-page py-8">
        <div className="card-soft flex flex-col items-start gap-4 bg-gradient-to-br from-primary-soft to-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="text-lg font-bold">Predai {subject.nameLower} în {city.name}?</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Creezi cont gratuit, completezi profilul și vezi cererile elevilor din {city.county}. Fără comision — tu stabilești tariful.
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/pentru-profesori" className="btn-primary h-11 px-5">Devino profesor</Link>
            <Link to="/cereri" className="btn-outline h-11 px-5">Vezi cererile</Link>
          </div>
        </div>
      </section>

      <TrustBlock t={trust} />

      <div className="container-page"><AdsterraNativeBanner /></div>

      {/* Silos: link intern bidirecțional pentru autoritate */}
      <section className="container-page py-10 border-t border-border mt-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold mb-3">Meditații {subject.name} în alte orașe</h2>
            <div className="flex flex-wrap gap-2">
              {otherCities.map((c) => (
                <Link
                  key={c.slug}
                  to="/meditatii/$materie/$oras"
                  params={{ materie: subject.slug, oras: c.slug }}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
                >
                  {subject.name} {c.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Alte materii în {city.name}</h2>
            <div className="flex flex-wrap gap-2">
              {otherSubjects.map((s) => (
                <Link
                  key={s.slug}
                  to="/meditatii/$materie/$oras"
                  params={{ materie: s.slug, oras: city.slug }}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
                >
                  {s.name} {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Combo dinamic materie × oraș: /meditatii/$materie/$oras
// Pagina pull-uiește anunțuri reale + ItemList JSON-LD => conținut bogat + indexare puternică pentru long-tail.
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";
import { getSubjectSeo, SUBJECTS_SEO } from "@/data/subjects-seo";
import { getCityBySlug, CITIES } from "@/data/cities";
import { supabase } from "@/integrations/supabase/client";
import { BadgeCheck, MapPin, Wifi } from "lucide-react";

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

async function fetchAdsForCombo(subjectSlug: string, city: { name: string; matchLocation: string[] }): Promise<LocalAd[]> {
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
    .eq("subject_slug", subjectSlug)
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
    const ads = await fetchAdsForCombo(subject.slug, city);
    return { subject, city, ads };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { subject, city, ads } = loaderData;
    const url = `${SITE}/meditatii/${subject.slug}/${city.slug}`;
    const count = ads.length;
    const countLabel = count > 0 ? `${count}+ profesori` : "profesori verificați";
    const title = `Meditații ${subject.name} ${city.name} 2026 — ${countLabel} | ${subject.pretMin}-${subject.pretMax} lei/oră`;
    const desc = `${countLabel} de ${subject.nameLower} în ${city.name}. Tarife reale ${subject.pretMin}–${subject.pretMax} lei/oră, mediu ${subject.pretMediu} lei. Online sau acasă, contact direct, fără comision. Anunțuri actualizate zilnic.`;

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
        { name: "keywords", content: `meditatii ${subject.slug} ${city.slug}, meditatii ${subject.nameLower} ${city.name}, profesor ${subject.nameLower} ${city.name}, pret meditatii ${subject.nameLower} ${city.name}, meditatii ${subject.nameLower} ${city.name} online, anunturi meditatii ${city.name}` },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "Service",
          name: `Meditații ${subject.name} ${city.name}`,
          description: desc, url, areaServed: { "@type": "City", name: city.name },
          provider: { "@type": "Organization", name: "MeditatiiDirect", url: SITE },
          offers: {
            "@type": "AggregateOffer", priceCurrency: "RON",
            lowPrice: subject.pretMin, highPrice: subject.pretMax,
            offerCount: Math.max(count, 10),
          },
        }) },
        ...(itemListLd ? [{ type: "application/ld+json", children: JSON.stringify(itemListLd) }] : []),
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd([
          { q: `Cât costă meditațiile la ${subject.nameLower} în ${city.name}?`,
            a: `Tarifele în ${city.name} variază între ${subject.pretMin} și ${subject.pretMax} lei/oră, cu o medie de ${subject.pretMediu} lei. Profesorii titulari cu experiență la BAC/olimpiadă sunt în partea superioară a intervalului.` },
          { q: `Pot face meditații ${subject.nameLower} online în ${city.name}?`,
            a: `Da, majoritatea profesorilor de ${subject.nameLower} din ${city.name} oferă atât meditații online (Zoom, Google Meet) cât și ședințe la domiciliu.` },
          { q: `Cum aleg un profesor de ${subject.nameLower} bun în ${city.name}?`,
            a: `Verifică experiența, rezultatele elevilor anteriori, recenziile și solicită o oră de probă. Pe MeditatiiDirect.ro toți profesorii sunt verificați manual de echipa noastră.` },
          { q: `Câți profesori de ${subject.nameLower} sunt în ${city.name}?`,
            a: `Avem ${count > 0 ? count : "zeci de"} profesori activi de ${subject.nameLower} care acoperă ${city.name} (${city.county}, ${city.population} locuitori), atât online cât și față în față.` },
        ])) },
      ],
    };
  },
  component: ComboPage,
});

function ComboPage() {
  const { subject, city, ads } = Route.useLoaderData();
  const url = `${SITE}/meditatii/${subject.slug}/${city.slug}`;

  // Cross-link silos: aceeași materie în alte orașe + alte materii în același oraș
  const otherCities = CITIES.filter((c) => c.slug !== city.slug).slice(0, 8);
  const otherSubjects = SUBJECTS_SEO.filter((s) => s.slug !== subject.slug).slice(0, 8);

  return (
    <>
      <SeoLanding
        pageUrl={url}
        breadcrumbParent={{ name: "Meditații", url: `${SITE}/meditatii` }}
        h1={`Meditații ${subject.name} în ${city.name}`}
        intro={`${ads.length > 0 ? `${ads.length} profesori activi` : "Profesori verificați"} de ${subject.nameLower} în ${city.name} (${city.county}, ${city.population} locuitori). Tarife transparente ${subject.pretMin}–${subject.pretMax} lei/oră (mediu ${subject.pretMediu} lei), online prin Zoom/Meet sau față în față la domiciliu. Contactezi profesorul direct, fără cont obligatoriu și fără comision din ședință.`}
        bullets={[
          `${subject.name} pentru toate nivelurile: clasele V–XII, BAC 2026, admitere`,
          `Profesori titulari și absolvenți cu rezultate dovedite în ${city.name}`,
          `Online (Zoom / Google Meet) sau la domiciliu în ${city.name}`,
          `Preț mediu ${subject.pretMediu} lei/oră — comparabil cu piața locală din ${city.county}`,
        ]}
        ctaPrimary={{ to: "/meditatii", label: `Vezi toți profesorii de ${subject.nameLower}` }}
        ctaSecondary={{ to: "/caut-profesor", label: "Postează cerere" }}
      />

      {/* Anunțuri reale — conținut indexabil bogat */}
      {ads.length > 0 && (
        <section className="container-page py-8">
          <h2 className="text-2xl font-bold mb-6">
            Profesori de {subject.nameLower} disponibili în {city.name}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ads.map((a) => (
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

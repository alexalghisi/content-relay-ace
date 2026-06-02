// Pagină SEO dinamică: Profesori particulari în {oras}
// 14 pagini noi → target "profesori particulari bucuresti", "profesori meditatii cluj", etc.
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";
import { getCityBySlug, CITIES } from "@/data/cities";
import { SUBJECTS_SEO } from "@/data/subjects-seo";
import { supabase } from "@/integrations/supabase/client";
import { BadgeCheck, MapPin } from "lucide-react";

const SITE = "https://meditatiidirect.ro";

interface LocalTeacher {
  id: string;
  full_name: string;
  avatar_url: string | null;
  location: string | null;
  experience_years: number | null;
}

async function fetchTeachersForCity(city: { matchLocation: string[] }): Promise<LocalTeacher[]> {
  const orFilter = city.matchLocation.map((m) => `location.ilike.%${m}%`).join(",");
  const { data } = await supabase
    .from("legacy_teachers")
    .select("id,full_name,avatar_url,location,experience_years")
    .eq("is_teacher", true)
    .or(orFilter)
    .not("avatar_url", "is", null)
    .order("experience_years", { ascending: false, nullsFirst: false })
    .limit(24);
  return (data ?? []) as LocalTeacher[];
}

export const Route = createFileRoute("/profesori/$oras")({
  loader: async ({ params }) => {
    const city = getCityBySlug(params.oras);
    if (!city) throw notFound();
    const teachers = await fetchTeachersForCity(city);
    return { city, teachers };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { city, teachers } = loaderData;
    const url = `${SITE}/profesori/${city.slug}`;
    const count = teachers.length;
    const countLabel = count > 0 ? `${count}+ profesori` : "Profesori verificați";
    const title = `Profesori Particulari ${city.name} 2026 — ${countLabel} | MeditatiiDirect.ro`;
    const desc = `${countLabel} particulari în ${city.name} (${city.county}). Matematică, română, engleză, fizică, BAC, admitere. Recenzii reale, tarife de la 30 lei/oră, contact direct fără comision.`;
    const faqs = [
      { q: `Câți profesori particulari sunt în ${city.name}?`, a: `Avem ${count > 0 ? count : "zeci de"} profesori particulari activi în ${city.name} (${city.county}, ${city.population} locuitori), la toate materiile principale.` },
      { q: `Cât costă un profesor particular în ${city.name}?`, a: `Tarifele în ${city.name} pornesc de la 30 lei/oră (gimnaziu) și ajung la 200 lei/oră pentru profesori titulari de BAC sau admitere. Media este 80–100 lei/oră.` },
      { q: `Pot face meditații online cu un profesor din ${city.name}?`, a: `Da, majoritatea profesorilor noștri din ${city.name} oferă atât meditații față în față cât și online prin Zoom sau Google Meet.` },
      { q: `Sunt profesorii din ${city.name} verificați?`, a: `Da. Fiecare profesor afișat pe MeditatiiDirect.ro are identitatea și diploma verificate manual de echipa noastră înainte de publicarea profilului.` },
    ];
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { name: "keywords", content: `profesori ${city.slug}, profesori particulari ${city.name}, meditatii ${city.name}, profesori meditatii ${city.name}, meditatori ${city.name}, ore particulare ${city.name}, profesor matematica ${city.name}, profesor romana ${city.name}, profesor engleza ${city.name}` },
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
          "@context": "https://schema.org", "@type": "LocalBusiness",
          name: `Profesori particulari ${city.name} — MeditatiiDirect.ro`,
          description: desc, url,
          areaServed: { "@type": "City", name: city.name },
          address: { "@type": "PostalAddress", addressLocality: city.name, addressRegion: city.county, addressCountry: "RO" },
        }) },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: SITE + "/" },
            { "@type": "ListItem", position: 2, name: "Profesori", item: SITE + "/profesori" },
            { "@type": "ListItem", position: 3, name: city.name, item: url },
          ],
        }) },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-20 text-center">
      <h1 className="text-2xl font-bold">Orașul nu e în lista noastră</h1>
      <Link to="/profesori" className="mt-4 inline-flex rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground">Toți profesorii</Link>
    </div>
  ),
  component: ProfesoriOrasPage,
});

function ProfesoriOrasPage() {
  const { city, teachers } = Route.useLoaderData();
  const otherCities = CITIES.filter((c) => c.slug !== city.slug);

  return (
    <>
      <SeoLanding
        pageUrl={`${SITE}/profesori/${city.slug}`}
        breadcrumbParent={{ name: "Profesori", url: `${SITE}/profesori` }}
        h1={`Profesori particulari în ${city.name}`}
        intro={`${teachers.length > 0 ? `${teachers.length} profesori particulari activi` : "Profesori particulari verificați"} în ${city.name} (${city.county}, ${city.population} locuitori). Matematică, română, engleză, fizică, chimie, biologie, BAC, admitere. Contact direct, tarife transparente de la 30 lei/oră.`}
        bullets={[
          `Profesori titulari și doctoranzi verificați manual în ${city.name}`,
          `Toate materiile importante: BAC, Evaluare Națională, admitere`,
          `Online (Zoom / Meet) sau față în față în ${city.name}`,
          `Recenzii reale, neșterse, validate de echipa noastră`,
          `Fără comision din ședință — plătești direct profesorului`,
        ]}
        ctaPrimary={{ to: "/meditatii", label: `Vezi profesorii din ${city.name}` }}
        ctaSecondary={{ to: "/caut-profesor", label: "Postează cerere" }}
      />

      {teachers.length > 0 && (
        <section className="container-page py-8">
          <h2 className="text-2xl font-bold mb-6">Profesori disponibili în {city.name}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((t) => (
              <div key={t.id} className="card-soft p-5">
                <div className="flex items-center gap-3">
                  {t.avatar_url ? (
                    <img src={t.avatar_url} alt={t.full_name} loading="lazy" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                  ) : (
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-primary-soft text-primary font-semibold">{t.full_name.charAt(0)}</div>
                  )}
                  <div className="min-w-0">
                    <p className="font-semibold truncate">{t.full_name}</p>
                    <p className="text-xs text-muted-foreground inline-flex items-center gap-1">
                      <BadgeCheck className="h-3 w-3 text-primary" /> Verificat
                      {t.location && <> · <MapPin className="h-3 w-3" /> {t.location}</>}
                    </p>
                  </div>
                </div>
                {t.experience_years != null && t.experience_years > 0 && (
                  <p className="mt-3 text-sm text-muted-foreground">{t.experience_years} ani experiență</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Silos: materii × oraș curent + alte orașe */}
      <section className="container-page py-10 border-t border-border mt-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold mb-3">Profesori pe materie în {city.name}</h2>
            <div className="flex flex-wrap gap-2">
              {SUBJECTS_SEO.map((s) => (
                <Link key={s.slug} to="/meditatii/$materie/$oras" params={{ materie: s.slug, oras: city.slug }}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary">
                  {s.name} {city.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-3">Profesori în alte orașe</h2>
            <div className="flex flex-wrap gap-2">
              {otherCities.map((c) => (
                <Link key={c.slug} to="/profesori/$oras" params={{ oras: c.slug }}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary">
                  Profesori {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

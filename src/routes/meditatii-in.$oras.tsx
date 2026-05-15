import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { MapPin, Wifi, BadgeCheck, Star } from "lucide-react";
import { AdsterraNativeBanner, AdsterraBannerResponsive } from "@/components/ads/adsterra";
import { CITIES, getCityBySlug } from "@/data/cities";

interface Ad {
  id: string; title: string; description: string | null; location: string | null;
  is_online: boolean; price_per_hour: number | null; is_promoted: boolean;
  subject_name: string | null; subject_slug: string | null; seo_slug: string | null;
  legacy_teachers?: { full_name: string; avatar_url: string | null } | null;
}

export const Route = createFileRoute("/meditatii-in/$oras")({
  beforeLoad: ({ params }) => {
    if (!getCityBySlug(params.oras)) throw notFound();
  },
  head: ({ params }) => {
    const city = getCityBySlug(params.oras);
    if (!city) return { meta: [] };
    const url = `https://meditatiidirect.ro/meditatii-in/${params.oras}`;
    const title = `Meditații ${city.name} 2026 — Profesori verificați | MeditatiiDirect.ro`;
    const desc = `Meditații în ${city.name} cu profesori verificați. Matematică, română, engleză, BAC, admitere. Contact direct, fără comision. De la 30 lei/oră.`;
    const faqLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: `Cât costă meditațiile în ${city.name}?`, acceptedAnswer: { "@type": "Answer", text: `Prețul mediu al meditațiilor în ${city.name} este între 50 și 120 lei pe oră, în funcție de materie, nivelul elevului și experiența profesorului. Pentru materii precum matematica de BAC sau pregătirea pentru admitere la medicină, prețurile pot ajunge la 150-200 lei/oră.` } },
        { "@type": "Question", name: `Cum găsesc un profesor de meditații bun în ${city.name}?`, acceptedAnswer: { "@type": "Answer", text: `Pe MeditatiiDirect.ro găsești profesori verificați din ${city.name} pentru toate materiile și nivelurile. Filtrează după materie, citește descrierea și contactează direct profesorul, fără comision și fără intermediari.` } },
        { "@type": "Question", name: `Există meditații online în ${city.name}?`, acceptedAnswer: { "@type": "Answer", text: `Da, mulți profesori din ${city.name} oferă atât meditații față în față, cât și meditații online prin Zoom, Google Meet sau Skype. Filtrează "Doar online" pentru a vedea exclusiv anunțurile cu meditații remote.` } },
        { "@type": "Question", name: `Ce materii pot studia cu meditații în ${city.name}?`, acceptedAnswer: { "@type": "Answer", text: `În ${city.name} găsești meditații pentru: matematică, română, engleză, fizică, chimie, biologie, informatică, istorie, geografie, franceză, germană și pregătire pentru BAC, evaluare națională, admitere la medicină, UPB, ASE, Drept.` } },
      ],
    };
    const breadcrumbLd = {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acasă", item: "https://meditatiidirect.ro/" },
        { "@type": "ListItem", position: 2, name: "Meditații", item: "https://meditatiidirect.ro/meditatii" },
        { "@type": "ListItem", position: 3, name: `Meditații ${city.name}`, item: url },
      ],
    };
    const localBusinessLd = {
      "@context": "https://schema.org", "@type": "LocalBusiness",
      name: `MeditatiiDirect — Meditații ${city.name}`,
      description: desc,
      url,
      areaServed: { "@type": "City", name: city.name },
      address: { "@type": "PostalAddress", addressLocality: city.name, addressRegion: city.county, addressCountry: "RO" },
      priceRange: "30-200 RON",
    };
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { name: "keywords", content: `meditatii ${city.name.toLowerCase()}, profesori meditatii ${city.name.toLowerCase()}, meditatii bac ${city.name.toLowerCase()}, meditatii admitere ${city.name.toLowerCase()}, anunturi meditatii ${city.name.toLowerCase()}` },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(faqLd) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbLd) },
        { type: "application/ld+json", children: JSON.stringify(localBusinessLd) },
      ],
    };
  },
  component: CityPage,
});

function CityPage() {
  const { oras } = Route.useParams();
  const city = getCityBySlug(oras)!;
  const [ads, setAds] = useState<Ad[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    supabase
      .from("ads")
      .select("id,title,description,location,is_online,price_per_hour,is_promoted,subject_name,subject_slug,seo_slug,legacy_teachers(full_name,avatar_url)")
      .eq("status", "active")
      .order("is_promoted", { ascending: false })
      .limit(150)
      .then(({ data }) => {
        const all = (data ?? []) as unknown as Ad[];
        const filtered = all.filter((a) => {
          const loc = (a.location ?? "").toLowerCase();
          return city.matchLocation.some((m) => loc.includes(m));
        });
        setAds(filtered);
        setLoading(false);
      });
  }, [oras, city]);

  return (
    <>
      <div className="container-page pt-4"><AdsterraBannerResponsive /></div>

      <article className="container-page py-8">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Acasă</Link>
          {" / "}
          <Link to="/meditatii" className="hover:text-foreground">Meditații</Link>
          {" / "}
          <span className="text-foreground">{city.name}</span>
        </nav>

        <header className="mt-4 max-w-3xl">
          <p className="inline-flex items-center gap-1 text-xs font-medium text-primary">
            <BadgeCheck className="h-4 w-4" /> Profesori verificați • Fără comision
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Meditații {city.name} — Profesori verificați 2026
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Cauți un profesor de meditații în <strong>{city.name}</strong>? Pe MeditatiiDirect.ro găsești {ads.length}+ anunțuri active cu profesori verificați din {city.county}, pentru toate materiile și nivelurile — de la clasele primare până la BAC, evaluare națională și admitere la facultate. Contact direct cu profesorul, fără intermediari și fără comision.
          </p>
        </header>

        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Materii populare în {city.name}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              ["matematica", "Matematică"],
              ["romana", "Română"],
              ["engleza", "Engleză"],
              ["fizica", "Fizică"],
              ["chimie", "Chimie"],
              ["biologie", "Biologie"],
              ["informatica", "Informatică"],
              ["istorie", "Istorie"],
              ["franceza", "Franceză"],
              ["germana", "Germană"],
            ].map(([slug, label]) => (
              <Link key={slug} to="/meditatii" search={{ materie: slug, oras: city.slug }}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary">
                {label} {city.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Anunțuri meditații în {city.name}</h2>
          {loading ? (
            <p className="mt-6 text-muted-foreground">Se încarcă anunțurile...</p>
          ) : ads.length === 0 ? (
            <div className="mt-6 card-soft p-6">
              <p className="text-muted-foreground">Momentan nu există anunțuri active filtrate pentru {city.name}.</p>
              <Link to="/meditatii" className="btn-primary mt-4">Vezi toate anunțurile</Link>
            </div>
          ) : (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ads.map((ad) => (
                <article key={ad.id} className="card-soft p-5 flex flex-col hover:border-primary/40 hover:shadow-[var(--shadow-pop)] transition">
                  {ad.is_promoted && (
                    <span className="self-start mb-3 inline-flex items-center gap-1 rounded-full bg-primary-soft px-2 py-0.5 text-xs font-medium text-primary">
                      <Star className="h-3 w-3" /> Promovat
                    </span>
                  )}
                  <div className="flex items-start gap-3">
                    {ad.legacy_teachers?.avatar_url ? (
                      <img src={ad.legacy_teachers.avatar_url} alt={ad.legacy_teachers.full_name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                    ) : (
                      <div className="grid h-12 w-12 place-items-center rounded-full bg-primary-soft text-primary font-semibold">
                        {(ad.legacy_teachers?.full_name ?? "P").charAt(0)}
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="text-sm font-semibold truncate">{ad.legacy_teachers?.full_name ?? "Profesor"}</p>
                      <p className="text-xs text-muted-foreground inline-flex items-center gap-1">
                        <BadgeCheck className="h-3.5 w-3.5 text-primary" /> Verificat
                      </p>
                    </div>
                  </div>
                  <h3 className="mt-3 text-base font-semibold leading-snug line-clamp-2">{ad.title}</h3>
                  {ad.subject_name && (
                    <span className="mt-2 self-start rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">{ad.subject_name}</span>
                  )}
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{ad.description}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    {ad.location && <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {ad.location}</span>}
                    {ad.is_online && <span className="inline-flex items-center gap-1 text-primary"><Wifi className="h-3.5 w-3.5" /> Online</span>}
                  </div>
                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      {ad.price_per_hour && (
                        <>
                          <p className="text-xl font-bold">{ad.price_per_hour} lei</p>
                          <p className="text-xs text-muted-foreground">/ oră</p>
                        </>
                      )}
                    </div>
                    <Link to="/anunt/$slug" params={{ slug: ad.seo_slug || ad.id }} className="btn-primary h-10 px-4 text-sm">
                      Vezi detalii
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <div className="my-10"><AdsterraNativeBanner /></div>

        <section className="mt-10 max-w-3xl prose">
          <h2 className="text-2xl font-bold">De ce să alegi MeditatiiDirect pentru meditații în {city.name}</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            {city.name} este al {city.slug === "bucuresti" ? "1-lea" : "doilea"} centru educațional din {city.county === "București" ? "țară" : "regiune"}, cu o populație de aproximativ {city.population} de locuitori și mii de elevi care se pregătesc anual pentru BAC, evaluarea națională sau admiterea la facultate. Cererea de meditații în {city.name} a crescut constant în ultimii ani, în special pentru materiile fundamentale (matematică, română, engleză) și pentru pregătirea de admitere la facultățile de top.
          </p>
          <h3 className="mt-6 text-lg font-semibold">Profesori de meditații verificați în {city.name}</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Toți profesorii care își publică anunțuri pe MeditatiiDirect sunt verificați manual înainte de afișare. Verificăm experiența didactică, nivelul de pregătire și autenticitatea contului. Astfel, găsești în {city.name} doar profesori reali, cu experiență, care își iau în serios meseria.
          </p>
          <h3 className="mt-6 text-lg font-semibold">Prețuri meditații {city.name} 2026</h3>
          <ul className="mt-2 text-muted-foreground space-y-1">
            <li>• Clasele primare (I-IV): 40-70 lei/oră</li>
            <li>• Gimnaziu (V-VIII), pregătire evaluare națională: 60-100 lei/oră</li>
            <li>• Liceu, pregătire BAC: 80-150 lei/oră</li>
            <li>• Pregătire admitere medicină / UPB / Drept: 100-200 lei/oră</li>
            <li>• Meditații online: cu 10-20% mai ieftine decât cele față în față</li>
          </ul>
          <h3 className="mt-6 text-lg font-semibold">Cum funcționează platforma</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            1. Cauți după materie sau filtrezi anunțurile din {city.name}. <br />
            2. Citești descrierea profesorului, prețul, experiența și recenziile. <br />
            3. Contactezi profesorul direct prin chat sau telefon. <br />
            4. Stabiliți programul, modul de desfășurare (online sau față în față) și plata. <br />
            <strong>MeditatiiDirect nu percepe niciun comision</strong> — banii merg integral către profesor.
          </p>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-bold">Întrebări frecvente despre meditațiile în {city.name}</h2>
          <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-card">
            {[
              { q: `Cât costă meditațiile în ${city.name}?`, a: `Prețul mediu al meditațiilor în ${city.name} este între 50 și 120 lei pe oră, în funcție de materie, nivelul elevului și experiența profesorului.` },
              { q: `Cum găsesc un profesor bun în ${city.name}?`, a: `Filtrează anunțurile după materie, citește descrierea, vezi prețul și experiența și contactează profesorul direct prin chat sau telefon.` },
              { q: `Există meditații online în ${city.name}?`, a: `Da, mulți profesori din ${city.name} oferă meditații atât față în față, cât și online prin Zoom, Google Meet sau Skype.` },
              { q: `Ce materii sunt cele mai cerute în ${city.name}?`, a: `Cele mai căutate sunt matematica, româna, engleza, fizica, chimia și informatica — atât pentru BAC, cât și pentru evaluarea națională și admiterea la facultate.` },
            ].map((f) => (
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

        <section className="mt-12">
          <h2 className="text-lg font-semibold">Meditații în alte orașe</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {CITIES.filter((c) => c.slug !== city.slug).map((c) => (
              <Link key={c.slug} to="/meditatii-in/$oras" params={{ oras: c.slug }}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary">
                Meditații {c.name}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}

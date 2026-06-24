import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AdsterraNativeBanner, AdsterraBannerResponsive } from "@/components/ads/adsterra";
import { MapPin, Wifi, Star, BadgeCheck, Search } from "lucide-react";

interface Ad {
  id: string;
  title: string;
  description: string | null;
  location: string | null;
  is_online: boolean;
  price_per_hour: number | null;
  is_promoted: boolean;
  views_count: number;
  subject_slug: string | null;
  subject_name: string | null;
  seo_slug: string | null;
  teacher_id: string | null;
  legacy_teachers?: { full_name: string; avatar_url: string | null; experience_years: number | null } | null;
}

interface Subject { slug: string; name: string; icon: string | null; }

type SearchParams = { materie?: string; oras?: string; q?: string };

export const Route = createFileRoute("/meditatii")({
  validateSearch: (s: Record<string, unknown>): SearchParams => ({
    materie: typeof s.materie === "string" ? s.materie : undefined,
    oras: typeof s.oras === "string" ? s.oras : undefined,
    q: typeof s.q === "string" ? s.q : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Anunțuri Meditații 2026 — Profesori Verificați | MeditatiiDirect" },
      { name: "description", content: "Anunțuri meditații cu profesori verificați: matematică, română, engleză, fizică. Online sau acasă, în toată România. Fără comision, de la 30 lei/oră." },
      { name: "keywords", content: "meditatii, anunturi meditatii, profesori meditatii, meditatii online, meditatii bucuresti, meditatii cluj, meditatii iasi, meditatii timisoara, meditatii bac, meditatii admitere, meditatii matematica, meditatii romana, meditatii engleza, meditatii fizica, meditatii informatica, meditatii acasa, profesori particulari, ore particulare" },
      { property: "og:title", content: "Meditații în România — Profesori Particulari Verificați" },
      { property: "og:description", content: "Anunțuri reale, profesori verificați, contact direct fără comision. De la 30 lei/oră." },
      { property: "og:url", content: "https://meditatiidirect.ro/meditatii" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Meditații în România — Profesori Particulari Verificați" },
      { name: "twitter:description", content: "Anunțuri reale, profesori verificați, contact direct fără comision." },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/meditatii" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Meditații în România",
          url: "https://meditatiidirect.ro/meditatii",
          description: "Toate anunțurile de meditații cu profesori verificați din România.",
          isPartOf: { "@id": "https://meditatiidirect.ro/#website" },
          about: { "@type": "Service", serviceType: "Meditații / ore particulare", areaServed: { "@type": "Country", name: "România" } },
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Acasă", item: "https://meditatiidirect.ro/" },
              { "@type": "ListItem", position: 2, name: "Meditații", item: "https://meditatiidirect.ro/meditatii" },
            ],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Ce sunt meditațiile pe MeditatiiDirect.ro?", acceptedAnswer: { "@type": "Answer", text: "Sunt anunțuri publicate de profesori verificați din toată România, care oferă ore particulare la diverse materii — online sau față în față. Contactezi profesorul direct prin chat, fără intermediari și fără comision." } },
            { "@type": "Question", name: "Cât costă o meditație în România?", acceptedAnswer: { "@type": "Answer", text: "Tarifele încep de la 30 lei/oră pentru gimnaziu și pot ajunge la 200 lei/oră pentru pregătire de admitere la facultăți competitive (Medicină, UPB, ASE)." } },
            { "@type": "Question", name: "Pot găsi anunțuri meditații în orașul meu?", acceptedAnswer: { "@type": "Answer", text: "Da. Avem anunțuri în București, Cluj-Napoca, Iași, Timișoara, Brașov, Constanța, Sibiu, Oradea, Craiova și restul județelor. Pentru localități mici recomandăm filtrul doar online." } },
            { "@type": "Question", name: "Trebuie să plătesc ceva pentru a contacta profesorul?", acceptedAnswer: { "@type": "Answer", text: "Nu. Contactarea profesorilor este 100% gratuită. Plătești doar tariful afișat de profesor, direct la el. MeditatiiDirect nu percepe comision." } },
            { "@type": "Question", name: "Profesorii sunt verificați?", acceptedAnswer: { "@type": "Answer", text: "Da, fiecare profesor este verificat manual: identitate, experiență didactică și recenzii reale de la elevi anteriori." } },
          ],
        }),
      },
    ],
  }),
  component: ListingPage,
});


function ListingPage() {
  const search = Route.useSearch();
  const [ads, setAds] = useState<Ad[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState(search.q ?? "");
  const [materie, setMaterie] = useState(search.materie ?? "");
  const [onlineOnly, setOnlineOnly] = useState(false);

  useEffect(() => {
    setLoading(true);
    supabase
      .from("ads")
      .select("id,title,description,location,is_online,price_per_hour,is_promoted,views_count,subject_slug,subject_name,seo_slug,teacher_id,legacy_teachers(full_name,avatar_url,experience_years)")
      .eq("status", "active")
      .order("is_promoted", { ascending: false })
      .order("views_count", { ascending: false })
      .limit(200)
      .then(({ data }) => {
        setAds((data ?? []) as unknown as Ad[]);
        setLoading(false);
      });
    supabase.from("subjects").select("slug,name,icon").order("sort_order").then(({ data }) => setSubjects(data ?? []));
  }, []);

  const filtered = useMemo(() => {
    return ads.filter((a) => {
      if (materie) {
        const slug = a.subject_slug ?? "";
        if (!slug.includes(materie) && !materie.includes(slug)) return false;
      }
      if (onlineOnly && !a.is_online) return false;
      if (q) {
        const s = (a.title + " " + (a.description ?? "") + " " + (a.location ?? "") + " " + (a.legacy_teachers?.full_name ?? "")).toLowerCase();
        if (!s.includes(q.toLowerCase())) return false;
      }
      return true;
    });
  }, [ads, materie, onlineOnly, q]);

  return (
    <>
      <div className="container-page pt-4">
        <AdsterraBannerResponsive />
      </div>

      <section className="container-page py-8">
        <header className="max-w-3xl">
          <h1 className="text-3xl font-bold sm:text-4xl">Meditații cu profesori particulari verificați în România</h1>
          <p className="mt-2 text-muted-foreground">
            Anunțuri de meditații publicate de profesori verificați: meditații matematică, meditații română, meditații engleză, meditații fizică, meditații informatică și meditații BAC. Alege profesorul potrivit pe materie, oraș sau meditații online, contactezi profesorul direct, fără comision.
          </p>
        </header>

        {/* FILTERS */}
        <div className="card-soft mt-6 p-3 sm:p-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto_auto]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Caută după nume, materie..."
              className="h-11 w-full rounded-xl border border-border bg-background pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <select value={materie} onChange={(e) => setMaterie(e.target.value)} aria-label="Filtrează anunțurile după materie" className="h-11 rounded-xl border border-border bg-background px-3 text-sm">
            <option value="">Toate materiile</option>
            {subjects.map((s) => (
              <option key={s.slug} value={s.slug}>{s.icon} {s.name}</option>
            ))}
          </select>
          <label className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 h-11 text-sm cursor-pointer">
            <input type="checkbox" checked={onlineOnly} onChange={(e) => setOnlineOnly(e.target.checked)} className="accent-primary" />
            Doar online
          </label>
          <button onClick={() => { setQ(""); setMaterie(""); setOnlineOnly(false); }} className="btn-outline h-11">Resetează</button>
        </div>

        {/* RESULTS */}
        {loading ? (
          <div className="mt-8 text-center text-muted-foreground">Se încarcă anunțurile...</div>
        ) : filtered.length === 0 ? (
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">Niciun anunț găsit. Încearcă alte filtre.</p>
          </div>
        ) : (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((ad, i) => (
              <article key={ad.id} className="card-soft p-5 flex flex-col hover:border-primary/40 hover:shadow-[var(--shadow-pop)] transition">
                {ad.is_promoted && (
                  <span className="self-start mb-3 inline-flex items-center gap-1 rounded-full bg-primary-soft px-2 py-0.5 text-xs font-medium text-primary">
                    <Star className="h-3 w-3" /> Promovat
                  </span>
                )}
                <div className="flex items-start gap-3">
                  {ad.legacy_teachers?.avatar_url ? (
                    <img src={ad.legacy_teachers.avatar_url} alt={`Profesor ${ad.legacy_teachers.full_name} — ${ad.subject_name ?? "meditații"}`} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                  ) : (
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-primary-soft text-primary font-semibold">
                      {(ad.legacy_teachers?.full_name ?? "P").charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate">{ad.legacy_teachers?.full_name ?? "Profesor"}</p>
                    <p className="text-xs text-muted-foreground inline-flex items-center gap-1">
                      <BadgeCheck className="h-3.5 w-3.5 text-primary" /> Profesor verificat
                    </p>
                  </div>
                </div>
                <h2 className="mt-3 text-base font-semibold leading-snug line-clamp-2">{ad.title}</h2>
                {ad.subject_name && (
                  <span className="mt-2 self-start rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
                    {ad.subject_name}
                  </span>
                )}
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{ad.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  {ad.location && (
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {ad.location}</span>
                  )}
                  {ad.is_online && (
                    <span className="inline-flex items-center gap-1 text-primary"><Wifi className="h-3.5 w-3.5" /> Online</span>
                  )}
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    {ad.price_per_hour && (
                      <>
                        <p className="text-xl font-bold text-foreground">{ad.price_per_hour} lei</p>
                        <p className="text-xs text-muted-foreground">/ oră</p>
                      </>
                    )}
                  </div>
                  <Link
                    to="/anunt/$slug"
                    params={{ slug: ad.seo_slug || ad.id }}
                    className="btn-primary h-10 px-4 text-sm"
                  >
                    Vezi detalii
                  </Link>
                </div>
                {/* Insert native ad after every 6th card */}
                {i > 0 && (i + 1) % 6 === 0 && (
                  <div className="absolute" />
                )}
              </article>
            ))}
          </div>
        )}
      </section>

      <div className="container-page">
        <AdsterraNativeBanner />
      </div>
    </>
  );
}

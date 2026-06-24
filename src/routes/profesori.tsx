import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";
import { supabase } from "@/integrations/supabase/client";
import { SUBJECTS_SEO } from "@/data/subjects-seo";
import { CITIES } from "@/data/cities";
import { BadgeCheck, Star } from "lucide-react";

const URL_ = "https://meditatiidirect.ro/profesori";
const TITLE = "Profesori Particulari Verificați — Meditații în România | MeditatiiDirect";
const DESC = "Profesori particulari verificați pentru meditații: profesori de matematică, română, engleză, fizică, informatică, BAC și admitere. Contact direct cu profesorul, recenzii reale, fără comision, de la 30 lei/oră.";

const faqs = [
  { q: "Sunt profesorii verificați?", a: "Da. Verificăm manual identitatea, diploma și experiența fiecărui profesor înainte ca profilul să fie publicat. Profesorii validați au badge „Verificat\" pe pagină." },
  { q: "Cât costă o oră cu un profesor particular?", a: "Tarifele pornesc de la 30 lei/oră (gimnaziu, provincie) și ajung la 200 lei/oră pentru profesori titulari cu rezultate la BAC sau admitere la Medicină în București." },
  { q: "Pot lucra cu un profesor doar online?", a: "Da. Filtrul „Online\" îți arată toți profesorii care fac meditații pe Zoom, Google Meet sau platforme similare, indiferent de oraș." },
  { q: "Cum aleg cel mai bun profesor?", a: "Compară experiența, recenziile, prețul și disponibilitatea. Fă o oră de probă cu 2–3 candidați înainte să te decizi pe termen lung." },
  { q: "Plătesc vreun comision platformei?", a: "Nu. Contactul și plata se fac direct cu profesorul. MeditatiiDirect.ro nu percepe comision din ședință." },
];

interface TopTeacher {
  id: string;
  full_name: string;
  avatar_url: string | null;
  experience_years: number | null;
  location: string | null;
}


export const Route = createFileRoute("/profesori")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "profesori, profesor particular, meditatori, profesori meditatii, profesori verificati, profesori matematica, profesori romana, profesori engleza, profesori bac, profesori online, profesori bucuresti, profesori cluj, ore particulare" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL_ },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL_ }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org", "@type": "ItemList",
        name: "Profesori particulari verificați România",
        description: DESC, url: URL_, 
      }) },
    ],
  }),
  component: ProfesoriPage,
});

function ProfesoriPage() {
  const [teachers, setTeachers] = useState<TopTeacher[]>([]);

  useEffect(() => {
    supabase
      .from("legacy_teachers")
      .select("id,full_name,avatar_url,experience_years,location")
      .eq("is_teacher", true)
      .not("avatar_url", "is", null)
      .order("experience_years", { ascending: false, nullsFirst: false })
      .limit(12)
      .then(({ data }) => setTeachers((data ?? []) as TopTeacher[]));
  }, []);


  return (
    <>
      <SeoLanding
        pageUrl={URL_}
        h1="Profesori particulari verificați în România"
        intro="Profesori particulari verificați, la 20+ materii, din toată țara. Vezi profilul complet, experiența, recenziile elevilor anteriori și tarifele înainte să iei legătura. Contact direct, fără cont obligatoriu și fără comision din ședință."
        bullets={[
          "profesori particulari activi cu identitate și diplomă verificate",
          "Recenzii reale de la elevi și părinți",
          "20+ materii: matematică, română, engleză, BAC, admitere",
          "Online (Zoom / Meet) sau față în față în orașul tău",
          "Tarife transparente, de la 30 lei/oră",
        ]}
        ctaPrimary={{ to: "/meditatii", label: "Vezi toți profesorii" }}
        ctaSecondary={{ to: "/caut-profesor", label: "Postează cerere" }}
        faqs={faqs}
      />

      {teachers.length > 0 && (
        <section className="container-page py-10">
          <h2 className="text-2xl font-bold mb-6">Profesori cu cele mai bune recenzii</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teachers.map((t) => (
              <div key={t.id} className="card-soft p-5">
                <div className="flex items-center gap-3">
                  {t.avatar_url ? (
                    <img src={t.avatar_url} alt={t.full_name} loading="lazy" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                  ) : (
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-primary-soft text-primary font-semibold">
                      {t.full_name.charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="font-semibold truncate">{t.full_name}</p>
                    <p className="text-xs text-muted-foreground inline-flex items-center gap-1">
                      <BadgeCheck className="h-3 w-3 text-primary" /> Verificat
                      {t.location && <> · {t.location}</>}
                    </p>
                  </div>
                </div>
                {t.experience_years !== null && t.experience_years > 0 && (
                  <p className="mt-3 text-sm inline-flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-muted-foreground">{t.experience_years} ani experiență</span>
                  </p>
                )}
              </div>
            ))}

          </div>
        </section>
      )}

      {/* Silos: link intern bidirecțional spre toate combo-urile materie × oraș */}
      <section className="container-page py-10 border-t border-border">
        <h2 className="text-2xl font-bold mb-6">Profesori după materie și oraș</h2>
        <div className="space-y-6">
          {SUBJECTS_SEO.slice(0, 8).map((s) => (
            <div key={s.slug}>
              <h3 className="font-semibold mb-2">Profesori {s.nameLower}</h3>
              <div className="flex flex-wrap gap-2">
                {CITIES.slice(0, 10).map((c) => (
                  <Link
                    key={`${s.slug}-${c.slug}`}
                    to="/meditatii/$materie/$oras"
                    params={{ materie: s.slug, oras: c.slug }}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs hover:border-primary/40 hover:text-primary"
                  >
                    {s.name} {c.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

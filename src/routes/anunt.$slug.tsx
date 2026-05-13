import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { MapPin, Wifi, BadgeCheck, Clock, GraduationCap, ArrowLeft, Phone, Mail } from "lucide-react";
import { AdsterraNativeBanner, AdsterraBannerResponsive } from "@/components/ads/adsterra";

interface Teacher { id: string; full_name: string; avatar_url: string | null; experience_years: number | null; education: string | null; phone: string | null; email: string | null; bio: string | null; }
interface AdDetail {
  id: string; title: string; description: string | null; location: string | null;
  is_online: boolean; price_per_hour: number | null; session_duration: number | null;
  subject_name: string | null; subject_slug: string | null; subcategories: string | null;
  seo_slug: string | null; views_count: number;
  legacy_teachers: Teacher | null;
}

export const Route = createFileRoute("/anunt/$slug")({
  component: AdPage,
  head: ({ params }) => ({
    meta: [
      { title: `Meditații — ${decodeURIComponent(params.slug).replace(/-/g, " ")} | MeditatiiDirect.ro` },
      { name: "description", content: "Detalii anunț meditații cu profesor verificat. Contact direct, preț, recenzii și locație. Fără comision." },
    ],
  }),
});

function AdPage() {
  const { slug } = Route.useParams();
  const [ad, setAd] = useState<AdDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    (async () => {
      const sel = "id,title,description,location,is_online,price_per_hour,session_duration,subject_name,subject_slug,subcategories,seo_slug,views_count,legacy_teachers(id,full_name,avatar_url,experience_years,education,phone,email,bio)";
      let { data } = await supabase.from("ads").select(sel).eq("seo_slug", slug).maybeSingle();
      if (!data) {
        const r = await supabase.from("ads").select(sel).eq("id", slug).maybeSingle();
        data = r.data;
      }
      setAd(data as unknown as AdDetail);
      setLoading(false);
    })();
  }, [slug]);

  if (loading) return <div className="container-page py-16 text-center text-muted-foreground">Se încarcă...</div>;
  if (!ad) return (
    <div className="container-page py-16 text-center">
      <p className="text-muted-foreground">Anunțul nu a fost găsit.</p>
      <Link to="/meditatii" className="btn-primary mt-4">Vezi toate anunțurile</Link>
    </div>
  );

  const t = ad.legacy_teachers;
  const subcats = (ad.subcategories ?? "").split(",").map(s => s.trim()).filter(Boolean);

  return (
    <>
      <div className="container-page pt-4"><AdsterraBannerResponsive /></div>

      <article className="container-page py-8">
        <Link to="/meditatii" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Înapoi la anunțuri
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="flex items-start gap-4">
              {t?.avatar_url ? (
                <img src={t.avatar_url} alt={t.full_name} className="h-20 w-20 rounded-full object-cover" />
              ) : (
                <div className="grid h-20 w-20 place-items-center rounded-full bg-primary-soft text-primary text-2xl font-semibold">
                  {(t?.full_name ?? "P").charAt(0)}
                </div>
              )}
              <div>
                <p className="text-sm text-muted-foreground inline-flex items-center gap-1">
                  <BadgeCheck className="h-4 w-4 text-primary" /> Profesor verificat
                </p>
                <h1 className="mt-1 text-2xl font-bold sm:text-3xl">{t?.full_name ?? "Profesor"}</h1>
                {ad.subject_name && (
                  <p className="mt-1 text-sm text-muted-foreground">{ad.subject_name}</p>
                )}
              </div>
            </div>

            <h2 className="mt-8 text-xl font-semibold">{ad.title}</h2>

            <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
              {ad.location && <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {ad.location}</span>}
              {ad.is_online && <span className="inline-flex items-center gap-1 text-primary"><Wifi className="h-4 w-4" /> Online disponibil</span>}
              {ad.session_duration && <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {ad.session_duration} min/ședință</span>}
              {t?.experience_years ? <span className="inline-flex items-center gap-1"><GraduationCap className="h-4 w-4" /> {t.experience_years} ani experiență</span> : null}
            </div>

            {subcats.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {subcats.map(s => (
                  <span key={s} className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground">{s}</span>
                ))}
              </div>
            )}

            <div className="mt-8 prose max-w-none">
              <h3 className="text-base font-semibold">Despre meditații</h3>
              <p className="mt-2 text-foreground/90 whitespace-pre-line leading-relaxed">{ad.description}</p>
            </div>

            {t?.bio && t.bio !== "-" && (
              <div className="mt-8">
                <h3 className="text-base font-semibold">Despre profesor</h3>
                <p className="mt-2 text-muted-foreground whitespace-pre-line leading-relaxed">{t.bio}</p>
              </div>
            )}

            <div className="mt-10"><AdsterraNativeBanner /></div>
          </div>

          {/* Sticky contact card */}
          <aside>
            <div className="card-soft p-6 sticky top-24">
              {ad.price_per_hour && (
                <div>
                  <p className="text-3xl font-bold text-foreground">{ad.price_per_hour} lei</p>
                  <p className="text-sm text-muted-foreground">per oră</p>
                </div>
              )}
              <button
                onClick={() => setShowContact(true)}
                className="btn-primary mt-5 w-full h-12"
              >
                Vezi datele de contact
              </button>
              {showContact && t && (
                <div className="mt-4 space-y-2 text-sm">
                  {t.phone && (
                    <a href={`tel:${t.phone}`} className="flex items-center gap-2 rounded-lg border border-border p-3 hover:bg-muted">
                      <Phone className="h-4 w-4 text-primary" /> {t.phone}
                    </a>
                  )}
                  {t.email && (
                    <a href={`mailto:${t.email}`} className="flex items-center gap-2 rounded-lg border border-border p-3 hover:bg-muted truncate">
                      <Mail className="h-4 w-4 text-primary" /> {t.email}
                    </a>
                  )}
                </div>
              )}
              <p className="mt-4 text-xs text-muted-foreground">
                Contact direct, fără intermediari și fără comision.
              </p>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}

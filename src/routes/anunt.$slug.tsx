import { validateRequest, clip } from "@/lib/request-validation";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";
import { MapPin, Wifi, BadgeCheck, Clock, GraduationCap, ArrowLeft, Phone, MessageCircle, Star, CalendarCheck } from "lucide-react";
import { AdsterraNativeBanner, AdsterraBannerResponsive } from "@/components/ads/adsterra";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

interface Teacher { id: string; full_name: string; avatar_url: string | null; experience_years: number | null; education: string | null; phone: string | null; bio: string | null; auth_user_id: string | null; }
interface AdDetail {
  id: string; title: string; description: string | null; location: string | null;
  is_online: boolean; price_per_hour: number | null; session_duration: number | null;
  subject_name: string | null; subject_slug: string | null; subcategories: string | null;
  seo_slug: string | null; views_count: number;
  legacy_teachers: Teacher | null;
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const Route = createFileRoute("/anunt/$slug")({
  component: AdPage,
  head: ({ params }) => {
    const isUuid = UUID_RE.test(params.slug);
    const human = decodeURIComponent(params.slug).replace(/-/g, " ");
    const meta = [
      { title: `Meditații ${human} | Profesor verificat | MeditatiiDirect.ro` },
      { name: "description", content: `Anunț meditații cu profesor verificat: ${human}. Contact direct, preț per oră, recenzii reale. Fără comision, fără intermediari.` },
      { property: "og:title", content: `Meditații ${human} — MeditatiiDirect.ro` },
      { property: "og:description", content: `Profesor verificat. Contact direct, fără comision.` },
      { property: "og:type", content: "article" },
    ];
    if (isUuid) {
      meta.push({ name: "robots", content: "noindex, follow" });
      return { meta };
    }
    return {
      meta,
      links: [{ rel: "canonical", href: `https://meditatiidirect.ro/anunt/${params.slug}` }],
    };
  },
});

function AdPage() {
  const { slug } = Route.useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [ad, setAd] = useState<AdDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const [starting, setStarting] = useState(false);

  useEffect(() => {
    (async () => {
      const teacherCols = user
        ? "id,full_name,avatar_url,experience_years,education,phone,bio,auth_user_id"
        : "id,full_name,avatar_url,experience_years,education,bio,auth_user_id";
      const sel = `id,title,description,location,is_online,price_per_hour,session_duration,subject_name,subject_slug,subcategories,seo_slug,views_count,legacy_teachers(${teacherCols})`;
      let { data } = await supabase.from("ads").select(sel).eq("seo_slug", slug).maybeSingle();
      if (!data) {
        const r = await supabase.from("ads").select(sel).eq("id", slug).maybeSingle();
        data = r.data;
        const d = data as unknown as { seo_slug: string | null } | null;
        if (d?.seo_slug && d.seo_slug !== slug) {
          navigate({ to: "/anunt/$slug", params: { slug: d.seo_slug }, replace: true });
          return;
        }
      }
      setAd(data as unknown as AdDetail);
      setLoading(false);
    })();
  }, [slug, navigate, user]);

  const startChat = async () => {
    if (!user) { toast.info("Conectează-te ca să trimiți mesaj"); navigate({ to: "/login" }); return; }
    if (!ad?.legacy_teachers?.auth_user_id) { toast.info("Acest profesor nu are încă chat activ. Folosește datele de contact."); setShowContact(true); return; }
    if (ad.legacy_teachers.auth_user_id === user.id) { toast.info("Nu îți poți trimite mesaj ție însuți."); return; }
    setStarting(true);
    const teacherUserId = ad.legacy_teachers.auth_user_id;
    const { data: existing } = await supabase.from("conversations")
      .select("id").eq("ad_id", ad.id).eq("student_id", user.id).eq("teacher_id", teacherUserId).maybeSingle();
    if (existing) { navigate({ to: "/mesaje/$id", params: { id: existing.id } }); return; }
    const { data: created, error } = await supabase.from("conversations").insert({
      ad_id: ad.id, student_id: user.id, teacher_id: teacherUserId,
      legacy_teacher_id: ad.legacy_teachers.id,
    }).select("id").single();
    setStarting(false);
    if (error || !created) { toast.error(error?.message ?? "Eroare"); return; }
    navigate({ to: "/mesaje/$id", params: { id: created.id } });
  };

  if (loading) return <div className="container-page py-16 text-center text-muted-foreground">Se încarcă...</div>;
  if (!ad) return (
    <div className="container-page py-16 text-center">
      <p className="text-muted-foreground">Anunțul nu a fost găsit.</p>
      <Link to="/meditatii" className="btn-primary mt-4">Vezi toate anunțurile</Link>
    </div>
  );

  const t = ad.legacy_teachers;
  const subcats = (ad.subcategories ?? "").split(",").map(s => s.trim()).filter(Boolean);

  // JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Meditații private",
    "name": ad.title,
    "description": ad.description ?? undefined,
    "provider": t ? {
      "@type": "Person", "name": t.full_name,
      "image": t.avatar_url ?? undefined,
      "address": ad.location ? { "@type": "PostalAddress", "addressLocality": ad.location, "addressCountry": "RO" } : undefined,
    } : undefined,
    "areaServed": ad.is_online ? "Online" : ad.location ?? "România",
    "offers": ad.price_per_hour ? {
      "@type": "Offer", "price": ad.price_per_hour, "priceCurrency": "RON",
      "url": `https://meditatiidirect.ro/anunt/${ad.seo_slug ?? ad.id}`,
    } : undefined,
  };
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Acasă", "item": "https://meditatiidirect.ro/" },
      { "@type": "ListItem", "position": 2, "name": "Meditații", "item": "https://meditatiidirect.ro/meditatii" },
      { "@type": "ListItem", "position": 3, "name": ad.title },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

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
                {ad.subject_name && <p className="mt-1 text-sm text-muted-foreground">{ad.subject_name}</p>}
                <p className="mt-2 inline-flex items-center gap-1 text-sm font-semibold"><Star className="h-4 w-4 fill-warning text-warning" /> Profil nou pe platformă</p>
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

            <div className="mt-8">
              <h3 className="text-base font-semibold">Metodologie de predare</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">Lecțiile sunt adaptate obiectivului elevului și includ explicații, exerciții aplicate și feedback la finalul fiecărei ședințe. Detaliile exacte se stabilesc direct cu profesorul.</p>
            </div>

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
              <button onClick={startChat} disabled={starting} className="btn-primary mt-5 w-full h-12 inline-flex items-center justify-center gap-2 disabled:opacity-60">
                <MessageCircle className="h-4 w-4" /> {starting ? "Se deschide..." : "Trimite mesaj"}
              </button>
              <button onClick={() => setShowContact(true)} className="btn-outline mt-2 w-full h-11">
                Vezi datele de contact
              </button>
              {showContact && t && (
                <div className="mt-4 space-y-2 text-sm">
                  {t.phone && (
                    <a href={`tel:${t.phone}`} className="flex items-center gap-2 rounded-lg border border-border p-3 hover:bg-muted">
                      <Phone className="h-4 w-4 text-primary" /> {t.phone}
                    </a>
                  )}
                </div>
              )}
              <p className="mt-4 text-xs text-muted-foreground">Contact direct, fără intermediari și fără comision.</p>
              <div className="mt-6 border-t border-border pt-5">
                <p className="text-sm font-bold">Alege o dată</p>
                <BookingWidget compact ad={ad} />
              </div>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}

function BookingWidget({ compact = false, ad }: { compact?: boolean; ad: AdDetail }) {
  const { user } = useAuth();
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const times = ["09:00", "12:30", "16:00", "18:30"];

  useEffect(() => {
    if (user?.email && !email) setEmail(user.email);
  }, [user, email]);

  const send = async () => {
    if (!date || !time) return;
    if (!name.trim() || !email.trim()) {
      toast.error("Completează numele și adresa de email ca profesorul să te poată contacta.");
      return;
    }
    const subj = (clip(ad.subject_name ?? ad.title, 120) ?? "Meditații").padEnd(2, ".");
    const invalid = validateRequest({ subject: subj, name, email, phone });
    if (invalid) {
      toast.error(invalid);
      return;
    }
    setSending(true);
    const dateLabel = date.toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" });
    const budget = ad.price_per_hour != null && ad.price_per_hour >= 0 && ad.price_per_hour <= 10000 ? ad.price_per_hour : null;
    const requestId = crypto.randomUUID();
    const { error } = await supabase.from("student_requests").insert({
      id: requestId,
      subject: subj,
      level: null,
      city: ad.is_online ? null : clip(ad.location, 120),
      is_online: ad.is_online,
      budget_per_hour: budget,
      details: clip(`Solicitare de rezervare pentru anunțul „${ad.title}”. Interval dorit: ${dateLabel}, ora ${time}.`, 4000),
      contact_name: name.trim(),
      contact_email: email.trim(),
      contact_phone: clip(phone, 40),
    });
    setSending(false);
    if (error) {
      toast.error("Nu am putut trimite cererea. Încearcă din nou sau folosește butonul de contact.");
      return;
    }
    setSent(true);
    toast.success("Cererea a fost trimisă. Profesorii verificați o pot vedea și îți răspund pe email.");
  };

  if (sent) {
    return <div className="mt-3 rounded-xl border border-border bg-muted/40 p-4 text-sm">
      <p className="font-semibold">Cererea ta a fost trimisă</p>
      <p className="mt-1 text-muted-foreground">Vei primi răspuns pe {email}. Poți trimite și un mesaj direct profesorului.</p>
    </div>;
  }

  return <div className="mt-3">
    <div className="pointer-events-auto overflow-x-auto"><Calendar mode="single" selected={date} onSelect={setDate} disabled={{ before: new Date() }} className={compact ? "p-0" : "mx-auto p-3"} /></div>
    <div className="mt-4 grid grid-cols-2 gap-2">{times.map((slot) => <Button key={slot} type="button" variant={time === slot ? "default" : "outline"} onClick={() => setTime(slot)}>{slot}</Button>)}</div>
    {date && time && (
      <div className="mt-4 space-y-2">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Numele tău *" className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email *" className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm" />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefon (opțional)" className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm" />
      </div>
    )}
    <Button className="mt-4 h-11 w-full" disabled={!date || !time || sending} onClick={send}><CalendarCheck /> {sending ? "Se trimite..." : "Solicită rezervarea"}</Button>
    <p className="mt-2 text-xs text-muted-foreground">Cererea ajunge la profesorii verificați, care îți răspund direct pe email.</p>
  </div>;
}


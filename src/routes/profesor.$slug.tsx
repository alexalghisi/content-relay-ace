import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BadgeCheck, CalendarDays, GraduationCap, Mail, MapPin, Phone, User, Video } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth";

const DAYS = ["Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă", "Duminică"];

interface PublicProfile {
  user_id: string;
  display_name: string;
  avatar_url: string | null;
  headline: string | null;
  about: string | null;
  subjects: string[];
  levels: string[];
  city: string | null;
  experience_years: number | null;
  rate_min: number | null;
  rate_max: number | null;
  online_available: boolean;
  in_person_available: boolean;
  contact_email: string | null;
  contact_phone?: string | null;
}
interface Slot { id: string; weekday: number; start_time: string; end_time: string }
interface Offer { id: string; title: string; subject: string; level: string | null; description: string | null; price_per_hour: number | null; is_online: boolean; is_in_person: boolean }

export const Route = createFileRoute("/profesor/$slug")({
  head: ({ params }) => {
    const human = decodeURIComponent(params.slug).replace(/-/g, " ").replace(/\s+[0-9a-f]{6}$/i, "");
    const title = `${human} — profesor meditații | MeditatiiDirect.ro`;
    const description = `Profil de profesor pe MeditatiiDirect.ro: materii predate, disponibilitate și oferte de meditații. Contact direct, fără comision.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: `https://meditatiidirect.ro/profesor/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `https://meditatiidirect.ro/profesor/${params.slug}` }],
    };
  },
  component: PublicTeacherPage,
});

function PublicTeacherPage() {
  const { slug } = Route.useParams();
  const { user } = useAuth();
  const [profile, setProfile] = useState<PublicProfile | null>(null);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const cols = "user_id,display_name,avatar_url,headline,about,subjects,levels,city,experience_years,rate_min,rate_max,online_available,in_person_available,contact_email" + (user ? ",contact_phone" : "");
      const { data } = await supabase.from("teacher_profiles").select(cols).eq("slug", slug).eq("is_published", true).maybeSingle();
      const p = (data as unknown as PublicProfile | null) ?? null;
      setProfile(p);
      if (p) {
        const [{ data: av }, { data: of }] = await Promise.all([
          supabase.from("teacher_availability").select("id,weekday,start_time,end_time").eq("user_id", p.user_id).order("weekday"),
          supabase.from("teacher_offers").select("id,title,subject,level,description,price_per_hour,is_online,is_in_person").eq("user_id", p.user_id).eq("status", "published"),
        ]);
        setSlots((av as Slot[] | null) ?? []);
        setOffers((of as Offer[] | null) ?? []);
      }
      setLoading(false);
    })();
  }, [slug, user]);

  if (loading) return <section className="container-page py-16 text-muted-foreground">Se încarcă…</section>;

  if (!profile) {
    return (
      <section className="container-page py-16 text-center">
        <h1 className="text-2xl font-bold">Profilul nu este disponibil</h1>
        <p className="mt-2 text-muted-foreground">Profesorul nu există sau profilul nu este publicat.</p>
        <Link to="/meditatii" className="btn-primary mt-6 inline-flex h-11 items-center px-5">Publică o cerere</Link>
      </section>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.display_name,
    jobTitle: profile.headline ?? "Profesor meditații",
    description: profile.about ?? undefined,
    address: profile.city ? { "@type": "PostalAddress", addressLocality: profile.city, addressCountry: "RO" } : undefined,
    knowsAbout: profile.subjects,
    url: `https://meditatiidirect.ro/profesor/${slug}`,
  };

  return (
    <section className="container-page max-w-4xl py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="flex flex-wrap items-center gap-5">
        {profile.avatar_url ? (
          <img src={profile.avatar_url} alt={`Fotografie ${profile.display_name}`} className="h-24 w-24 rounded-full border border-border object-cover" />
        ) : (
          <div className="grid h-24 w-24 place-items-center rounded-full bg-muted text-muted-foreground"><User className="h-10 w-10" /></div>
        )}
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl">{profile.display_name}</h1>
          {profile.headline && <p className="mt-1 text-muted-foreground">{profile.headline}</p>}
          <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted-foreground">
            {profile.city && <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {profile.city}</span>}
            {profile.online_available && <span className="inline-flex items-center gap-1 text-primary"><Video className="h-4 w-4" /> Online</span>}
            {profile.in_person_available && <span className="inline-flex items-center gap-1"><GraduationCap className="h-4 w-4" /> Față în față</span>}
            {profile.experience_years != null && <span className="inline-flex items-center gap-1"><BadgeCheck className="h-4 w-4" /> {profile.experience_years} ani experiență</span>}
          </div>
        </div>
      </header>

      {(profile.rate_min || profile.rate_max) && (
        <p className="mt-5 text-lg font-semibold">
          Tarif: {profile.rate_min ?? "—"}{profile.rate_max ? `–${profile.rate_max}` : ""} lei/oră
        </p>
      )}

      {profile.subjects.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {profile.subjects.map((s) => <span key={s} className="rounded-full bg-primary-soft px-3 py-1 text-sm font-semibold text-primary">{s}</span>)}
          {profile.levels.map((l) => <span key={l} className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">{l}</span>)}
        </div>
      )}

      {profile.about && (
        <div className="card-soft mt-7 p-5 sm:p-6">
          <h2 className="text-lg font-semibold">Despre mine și metoda de predare</h2>
          <p className="mt-2 whitespace-pre-line text-sm leading-7 text-muted-foreground">{profile.about}</p>
        </div>
      )}

      <div className="card-soft mt-6 p-5 sm:p-6">
        <h2 className="inline-flex items-center gap-2 text-lg font-semibold"><CalendarDays className="h-4 w-4 text-primary" /> Disponibilitate săptămânală</h2>
        {slots.length === 0 ? (
          <p className="mt-2 text-sm text-muted-foreground">Program flexibil — scrie-i profesorului pentru un interval potrivit.</p>
        ) : (
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {DAYS.map((d, i) => {
              const daySlots = slots.filter((s) => s.weekday === i);
              return (
                <div key={d} className="rounded-xl border border-border p-3">
                  <p className="text-sm font-semibold">{d}</p>
                  {daySlots.length === 0 ? (
                    <p className="mt-1 text-xs text-muted-foreground">Indisponibil</p>
                  ) : (
                    <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                      {daySlots.map((s) => <li key={s.id}>{s.start_time.slice(0, 5)}–{s.end_time.slice(0, 5)}</li>)}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {offers.length > 0 && (
        <div className="card-soft mt-6 p-5 sm:p-6">
          <h2 className="text-lg font-semibold">Oferte publicate</h2>
          <ul className="mt-4 space-y-3">
            {offers.map((o) => (
              <li key={o.id} className="rounded-xl border border-border p-4">
                <p className="font-semibold">{o.title}</p>
                <p className="text-sm text-muted-foreground">
                  {o.subject}{o.level ? ` · ${o.level}` : ""}{o.price_per_hour ? ` · ${o.price_per_hour} lei/oră` : ""}
                  {o.is_online ? " · Online" : ""}{o.is_in_person ? " · Față în față" : ""}
                </p>
                {o.description && <p className="mt-2 text-sm leading-6 text-muted-foreground">{o.description}</p>}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="card-soft mt-6 p-5 sm:p-6">
        <h2 className="text-lg font-semibold">Contact</h2>
        <div className="mt-3 flex flex-wrap gap-4 text-sm">
          {profile.contact_email && (
            <a href={`mailto:${profile.contact_email}`} className="inline-flex items-center gap-2 text-primary hover:underline"><Mail className="h-4 w-4" /> {profile.contact_email}</a>
          )}
          {user && profile.contact_phone && (
            <a href={`tel:${profile.contact_phone}`} className="inline-flex items-center gap-2 text-primary hover:underline"><Phone className="h-4 w-4" /> {profile.contact_phone}</a>
          )}
          {!user && (
            <Link to="/login" className="text-muted-foreground hover:underline">Autentifică-te pentru a vedea telefonul</Link>
          )}
        </div>
      </div>
    </section>
  );
}

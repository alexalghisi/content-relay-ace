import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Search, Check, MessageCircle, ShieldCheck, Wifi, UserPlus, Star, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import heroImg from "@/assets/hero-tutoring.jpg";
import { AdsterraNativeBanner, AdsterraBannerResponsive } from "@/components/ads/adsterra";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meditații 2026 — Profesori Verificați | MeditatiiDirect" },
      { property: "og:url", content: "https://meditatiidirect.ro/" },
      { name: "description", content: "Profesori verificați pentru matematică, română, engleză, BAC 2026 și admitere. Online sau acasă. Contact direct, fără comision, de la 30 lei/oră." },
      { name: "keywords", content: "meditatii, meditatii online, profesori, profesori particulari, anunturi meditatii, meditatii matematica, meditatii romana, meditatii engleza, meditatii fizica, meditatii chimie, meditatii informatica, meditatii bac, meditatii bac 2026, meditatii admitere, meditatii evaluare nationala, meditatii bucuresti, meditatii cluj, meditatii iasi, meditatii timisoara, meditatii brasov, meditatii constanta, ore particulare, profesor particular, meditatii acasa, meditatii ieftine" },
      { property: "og:title", content: "Meditații cu Profesori Verificați în România — MeditatiiDirect.ro" },
      { property: "og:description", content: "1000+ profesori verificați, 20+ materii, toată România. Chat direct cu profesorul, fără intermediari. De la 30 lei/oră." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Meditații cu Profesori Verificați în România" },
      { name: "twitter:description", content: "1000+ profesori verificați, 20+ materii, contact direct fără comision." },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Cât costă o oră de meditații online în România?",
            acceptedAnswer: { "@type": "Answer", text: "Tarifele pornesc de la 30 lei/oră în provincie pentru gimnaziu și ajung la 150–200 lei/oră pentru pregătire intensivă BAC sau admitere la Medicină în București. Prețul mediu național al unei ore de meditații este 60–80 lei." } },
          { "@type": "Question", name: "Cum găsesc un profesor particular bun?",
            acceptedAnswer: { "@type": "Answer", text: "Pe MeditatiiDirect.ro filtrezi după materie, oraș și online/față-în-față. Toți profesorii sunt verificați manual (identitate, diplomă, experiență) și au badge „Verificat\". Citești recenzii reale de la alți elevi și contactezi direct profesorul, fără comision." } },
          { "@type": "Question", name: "Meditațiile online sunt eficiente?",
            acceptedAnswer: { "@type": "Answer", text: "Da. Studiile arată că meditațiile online prin Zoom, Google Meet sau Whiteboard au aceeași eficiență ca cele față-în-față, cu economie de timp pe drum și materiale digitale partajate instant. Sunt ideale pentru BAC, Evaluare Națională și admitere." } },
          { "@type": "Question", name: "Ce materii oferiți pentru BAC 2026?",
            acceptedAnswer: { "@type": "Answer", text: "Pregătire completă BAC 2026 la matematică (M1/M2), română, istorie, biologie, chimie, fizică, informatică, geografie, engleză, franceză și logică. Avem profesori specializați pe fiecare profil — real, uman, vocațional." } },
          { "@type": "Question", name: "Pot face meditații fără să plătesc comision?",
            acceptedAnswer: { "@type": "Answer", text: "Da. MeditatiiDirect.ro NU percepe comision nici elevului, nici profesorului. Contactezi direct profesorul prin chat, iar plata se face integral către el, la tariful afișat (de la 30 lei/oră)." } },
          { "@type": "Question", name: "Cum funcționează platforma MeditatiiDirect?",
            acceptedAnswer: { "@type": "Answer", text: "1) Cauți după materie și oraș sau online. 2) Compari profesorii verificați după recenzii, preț și experiență. 3) Trimiți mesaj direct prin chat. 4) Stabiliți programul și începeți. Fără înregistrare obligatorie pentru a căuta, fără comisioane ascunse." } },
          { "@type": "Question", name: "Există profesori verificați pentru Evaluare Națională?",
            acceptedAnswer: { "@type": "Answer", text: "Da, avem sute de profesori specializați pe Evaluarea Națională clasa a 8-a — matematică și română — cu rezultate dovedite. Filtrează după „Evaluare Națională\" pentru a vedea doar profesorii cu experiență pe acest examen." } },
          { "@type": "Question", name: "Pot găsi meditații ieftine în Cluj, București sau Iași?",
            acceptedAnswer: { "@type": "Answer", text: "Da. În toate orașele mari (București, Cluj-Napoca, Iași, Timișoara, Brașov, Constanța) ai profesori cu tarife începând de la 40-50 lei/oră pentru gimnaziu și liceu. Filtrul „preț crescător\" îți arată cele mai ieftine meditații disponibile." } },
        ],
      }),
    }],
  }),
  component: HomePage,
});

interface Subject { id: string; slug: string; name: string; icon: string | null; }
interface City { id: string; slug: string; name: string; }
interface FeaturedAd {
  id: string; title: string; price_per_hour: number | null; location: string | null;
  is_online: boolean; is_promoted: boolean; subject_name: string | null; seo_slug: string | null;
  legacy_teachers: { full_name: string; avatar_url: string | null } | null;
}

function HomePage() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [featured, setFeatured] = useState<FeaturedAd[]>([]);
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    supabase.from("subjects").select("id,slug,name,icon").order("sort_order").then(({ data }) => setSubjects(data ?? []));
    supabase.from("cities").select("id,slug,name").order("sort_order").then(({ data }) => setCities(data ?? []));
    supabase
      .from("ads")
      .select("id,title,price_per_hour,location,is_online,is_promoted,subject_name,seo_slug,legacy_teachers(full_name,avatar_url)")
      .eq("status", "active")
      .order("is_promoted", { ascending: false })
      .order("views_count", { ascending: false })
      .limit(6)
      .then(({ data }) => setFeatured((data ?? []) as unknown as FeaturedAd[]));
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (subject) params.set("materie", subject);
    if (city) params.set("oras", city);
    navigate({ to: "/meditatii", search: Object.fromEntries(params) as never });
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-soft/60 via-background to-background" />
        <div className="container-page pt-14 pb-20 lg:pt-24 lg:pb-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft/60 px-3 py-1 text-xs font-medium text-primary">
                <ShieldCheck className="h-3.5 w-3.5" /> Profesori verificați • Recenzii reale
              </div>
              <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Meditații cu <span className="text-primary">profesori verificați</span> în România
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Găsește meditații la <Link className="underline decoration-primary/40 underline-offset-4 hover:text-foreground" to="/meditatii-matematica">matematică</Link>,{" "}
                <Link className="underline decoration-primary/40 underline-offset-4 hover:text-foreground" to="/meditatii-romana">română</Link> și{" "}
                <Link className="underline decoration-primary/40 underline-offset-4 hover:text-foreground" to="/meditatii-engleza">engleză</Link>.
                Online sau față în față pentru BAC 2026, admitere la facultate și Evaluare Națională.
                Chat direct cu profesorul — fără intermediari. De la 30 lei/oră.
              </p>

              {/* SEARCH */}
              <form onSubmit={handleSearch} className="mt-8 card-soft p-3 sm:p-4 grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  aria-label="Alege materia pentru meditații"
                  className="h-12 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Selectează materia</option>
                  {subjects.map((s) => (
                    <option key={s.id} value={s.slug}>{s.icon} {s.name}</option>
                  ))}
                </select>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  aria-label="Alege orașul sau caută online"
                  className="h-12 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Toată România (online)</option>
                  {cities.map((c) => (
                    <option key={c.id} value={c.slug}>{c.name}</option>
                  ))}
                </select>
                <button type="submit" className="btn-primary h-12 px-6">
                  <Search className="mr-2 h-4 w-4" /> Caută
                </button>
              </form>

              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {[
                  "Chat direct cu profesorul",
                  "Profesori verificați",
                  "Ore online disponibile",
                  "Înscriere gratuită",
                  "Recenzii reale",
                ].map((t) => (
                  <li key={t} className="check-row">
                    <Check className="h-4 w-4 text-primary" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
              <img
                src={heroImg}
                alt="Elev și profesor verificat în meditație online"
                width={1280}
                height={960}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="rounded-3xl border border-border shadow-[var(--shadow-card)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SUBJECTS */}
      <section className="container-page py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Cele mai căutate materii</h2>
            <p className="mt-2 text-muted-foreground">20+ materii cu profesori în toată țara.</p>
          </div>
          <Link to="/materii" className="hidden sm:inline-flex text-sm font-medium text-primary hover:underline">
            Vezi toate <ArrowRight className="ml-1 inline h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {subjects.slice(0, 10).map((s) => (
            <Link
              key={s.id}
              to="/meditatii"
              search={{ materie: s.slug } as never}
              className="card-soft p-4 hover:border-primary/40 hover:shadow-[var(--shadow-pop)] transition"
            >
              <div className="text-2xl">{s.icon}</div>
              <div className="mt-2 font-medium text-sm">{s.name}</div>
              <div className="text-xs text-muted-foreground">Vezi profesori →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED ADS — real teachers from DB */}
      {featured.length > 0 && (
        <section className="container-page py-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Profesori populari acum</h2>
              <p className="mt-2 text-muted-foreground">Cele mai vizitate anunțuri săptămâna asta.</p>
            </div>
            <Link to="/meditatii" className="hidden sm:inline-flex text-sm font-medium text-primary hover:underline">
              Toate anunțurile <ArrowRight className="ml-1 inline h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((a) => (
              <Link
                key={a.id}
                to="/anunt/$slug"
                params={{ slug: a.seo_slug || a.id }}
                className="card-soft p-5 hover:border-primary/40 hover:shadow-[var(--shadow-pop)] transition flex flex-col"
              >
                <div className="flex items-center gap-3">
                  {a.legacy_teachers?.avatar_url ? (
                    <img src={a.legacy_teachers.avatar_url} alt={`Profesor ${a.legacy_teachers.full_name} — ${a.subject_name ?? "meditații"}`} className="h-11 w-11 rounded-full object-cover" loading="lazy" />
                  ) : (
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-primary-soft text-primary font-semibold">
                      {(a.legacy_teachers?.full_name ?? "P").charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate">{a.legacy_teachers?.full_name ?? "Profesor"}</p>
                    <p className="text-xs text-muted-foreground">{a.subject_name}</p>
                  </div>
                  {a.is_promoted && (
                    <span className="ml-auto rounded-full bg-primary-soft px-2 py-0.5 text-[10px] font-medium text-primary">Top</span>
                  )}
                </div>
                <p className="mt-3 text-sm font-medium line-clamp-2">{a.title}</p>
                <div className="mt-4 flex items-end justify-between">
                  <span className="text-xs text-muted-foreground">{a.is_online ? "Online" : a.location}</span>
                  {a.price_per_hour && <span className="text-base font-bold">{a.price_per_hour} lei/h</span>}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* AD: banner responsive după featured */}
      <div className="container-page">
        <AdsterraBannerResponsive />
      </div>

      {/* HOW IT WORKS */}
      <section className="container-page py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Cum funcționează</h2>
          <p className="mt-2 text-muted-foreground">Trei pași până la prima ta lecție.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { i: <Search className="h-6 w-6" />, t: "1. Caută profesorul potrivit", d: "Filtrează după materie, oraș, preț și disponibilitate online." },
            { i: <MessageCircle className="h-6 w-6" />, t: "2. Discută direct", d: "Trimite mesaj profesorului prin chat. Fără intermediari, fără comisioane." },
            { i: <Star className="h-6 w-6" />, t: "3. Învață și lasă o recenzie", d: "După lecție, ajută alți elevi cu o recenzie reală." },
          ].map((s) => (
            <div key={s.t} className="card-soft p-6">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-primary-soft text-primary">{s.i}</div>
              <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXAMS */}
      <section className="container-page py-16">
        <div className="card-soft overflow-hidden">
          <div className="grid gap-8 p-8 lg:grid-cols-[1.2fr_1fr] lg:p-12 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">
                BAC 2026 • Admitere • Evaluare Națională
              </div>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Pregătire pentru examene majore</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Subiecte rezolvate, variante oficiale, simulări și profesori specializați în pregătirea pentru BAC,
                admitere la facultăți (Medicină, Politehnică, Drept, ASE) și Evaluare Națională.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link to="/meditatii-bac" className="btn-primary">Pregătire BAC</Link>
                <Link to="/admitere" className="btn-outline">Admitere facultate</Link>
                <Link to="/meditatii-evaluare-nationala" className="btn-outline">Evaluare Națională</Link>
              </div>
            </div>
            <ul className="grid gap-3">
              {[
                { t: "Subiecte BAC rezolvate", to: "/subiecte-bac" },
                { t: "Variante BAC 2026", to: "/variante-bacalaureat" },
                { t: "Simulare bacalaureat", to: "/simulare-bacalaureat" },
                { t: "Grile medicină", to: "/grile-medicina" },
                { t: "Grile UPB", to: "/grile-upb" },
                { t: "Subiecte admitere", to: "/subiecte-admitere" },
              ].map((x) => (
                <li key={x.to}>
                  <Link to={x.to} className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-sm hover:border-primary/40 hover:bg-muted/50">
                    <span>{x.t}</span>
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AD: native banner între secțiuni */}
      <div className="container-page">
        <AdsterraNativeBanner />
      </div>

      {/* FAQ vizibil — întrebări frecvente */}
      <section className="container-page py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Întrebări frecvente despre meditații</h2>
          <p className="mt-3 text-muted-foreground">Răspunsuri rapide pentru elevi și părinți care caută profesori particulari în România.</p>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-background">
            {[
              { q: "Cât costă o oră de meditații online în România?", a: "Tarifele pornesc de la 30 lei/oră în provincie pentru gimnaziu și ajung la 150–200 lei/oră pentru pregătire intensivă BAC sau admitere la Medicină în București. Prețul mediu național este 60–80 lei/oră." },
              { q: "Cum găsesc un profesor particular bun?", a: "Filtrezi după materie, oraș și online/față-în-față. Toți profesorii sunt verificați manual (identitate, diplomă, experiență) și au badge „Verificat\". Citești recenzii reale și contactezi direct profesorul, fără comision." },
              { q: "Meditațiile online sunt eficiente?", a: "Da. Au aceeași eficiență ca cele față-în-față, cu economie de timp pe drum și materiale digitale partajate instant. Sunt ideale pentru BAC, Evaluare Națională și admitere." },
              { q: "Ce materii oferiți pentru BAC 2026?", a: "Pregătire completă BAC 2026 la matematică (M1/M2), română, istorie, biologie, chimie, fizică, informatică, geografie, engleză, franceză și logică." },
              { q: "Pot face meditații fără să plătesc comision?", a: "Da. MeditatiiDirect.ro NU percepe comision nici elevului, nici profesorului. Plata se face integral către profesor, la tariful afișat (de la 30 lei/oră)." },
              { q: "Cum funcționează platforma MeditatiiDirect?", a: "Cauți, compari profesorii verificați după recenzii și preț, trimiți mesaj direct prin chat și stabiliți programul. Fără comisioane ascunse." },
              { q: "Există profesori pentru Evaluare Națională?", a: "Da, sute de profesori specializați pe Evaluare Națională clasa a 8-a — matematică și română — cu rezultate dovedite." },
              { q: "Pot găsi meditații ieftine în Cluj, București sau Iași?", a: "Da. În toate orașele mari ai profesori cu tarife de la 40-50 lei/oră. Filtrul „preț crescător\" arată cele mai ieftine meditații disponibile." },
            ].map((item) => (
              <details key={item.q} className="group px-6 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                  {item.q}
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOR TEACHERS */}
      <section className="container-page py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-soft p-8">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-primary-soft text-primary">
              <UserPlus className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Ești profesor?</h3>
            <p className="mt-2 text-muted-foreground">
              Publică-ți profilul gratuit, primește mesaje direct de la elevi și păstrează 100% din tarif.
              Fără comisioane, fără intermediari.
            </p>
            <Link to="/pentru-profesori" className="btn-primary mt-5">Începe gratuit</Link>
          </div>
          <div className="card-soft p-8">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-primary-soft text-primary">
              <Wifi className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Meditații online disponibile</h3>
            <p className="mt-2 text-muted-foreground">
              Învață de oriunde din țară. Profesori verificați cu experiență în lecții online — Zoom, Google Meet, Whiteboard.
            </p>
            <Link to="/meditatii-online" className="btn-outline mt-5">Vezi profesori online</Link>
          </div>
        </div>
      </section>
    </>
  );
}

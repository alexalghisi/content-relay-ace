import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Search, Check, MessageCircle, ShieldCheck, Wifi, UserPlus, Star, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import heroImg from "@/assets/hero-tutoring.jpg";
import { AdsterraNativeBanner, AdsterraBannerResponsive } from "@/components/ads/adsterra";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meditații Online și Acasă — Profesori Verificați | MeditatiiDirect.ro" },
      { name: "description", content: "Găsește meditații la matematică, română, engleză cu profesori verificați. Online sau față în față, BAC 2026, admitere și Evaluare Națională. De la 30 lei/oră." },
      { name: "keywords", content: "meditatii, meditatii online, profesori, meditatii matematica, meditatii romana, meditatii engleza, BAC 2026, admitere facultate, evaluare nationala, meditatii bucuresti, meditatii cluj, meditatii iasi" },
      { property: "og:title", content: "Meditații cu Profesori Verificați în România" },
      { property: "og:description", content: "Chat direct cu profesorul, fără intermediari. 20+ materii, toată România." },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "MeditatiiDirect.ro",
          url: "https://meditatiidirect.ro/",
          inLanguage: "ro-RO",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://meditatiidirect.ro/meditatii?materie={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "MeditatiiDirect.ro",
          url: "https://meditatiidirect.ro/",
          logo: "https://meditatiidirect.ro/favicon.ico",
          areaServed: "RO",
          sameAs: ["https://meditatiidirect.ro/"],
        }),
      },
    ],
  }),
  component: HomePage,
});

interface Subject { id: string; slug: string; name: string; icon: string | null; }
interface City { id: string; slug: string; name: string; }

function HomePage() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    supabase.from("subjects").select("id,slug,name,icon").order("sort_order").then(({ data }) => setSubjects(data ?? []));
    supabase.from("cities").select("id,slug,name").order("sort_order").then(({ data }) => setCities(data ?? []));
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

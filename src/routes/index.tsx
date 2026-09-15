import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, BadgeCheck, BookOpen, CalendarCheck, Check, MapPin, Search, ShieldCheck, Sparkles, Star, UserRound, Video } from "lucide-react";
import heroImg from "@/assets/hero-tutoring.jpg";
import { MOCK_TEACHERS, POPULAR_SUBJECTS, TESTIMONIALS } from "@/data/marketplace-mock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meditații Direct — Găsește profesorul potrivit" },
      { name: "description", content: "Găsește profesori verificați pentru meditații online sau în orașul tău. Compară profiluri, prețuri și recenzii, apoi rezervă simplu." },
      { property: "og:title", content: "Meditații Direct — Profesori verificați" },
      { property: "og:description", content: "Compară profesori, prețuri și disponibilitate pentru meditații în România." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/" }],
  }),
  component: HomePage,
});

const LEVELS = ["Școală generală", "Evaluare Națională", "Liceu", "Bacalaureat", "Admitere facultate"];
const LOCATIONS = ["Online", "București", "Cluj-Napoca", "Timișoara", "Iași", "Brașov", "Constanța"];

function HomePage() {
  const navigate = useNavigate({ from: "/" });
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [location, setLocation] = useState("");
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate({ to: "/meditatii", search: { materie: subject || undefined, oras: location === "Online" ? undefined : location || undefined, q: level || undefined } });
  };

  return <>
    <section className="relative overflow-hidden border-b border-border bg-primary-soft/45">
      <div className="container-page grid min-h-[620px] items-center gap-10 py-12 lg:grid-cols-[1.05fr_.95fr] lg:py-18">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background px-3 py-1.5 text-xs font-semibold text-primary shadow-sm"><ShieldCheck className="h-4 w-4" /> Peste 500 de profesori verificați</div>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">Găsește profesorul perfect pentru <span className="text-primary">succesul tău</span></h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Compară profesori verificați, programe și tarife. Alege meditații online sau în orașul tău și începe să înveți cu încredere.</p>
          <form onSubmit={submit} className="mt-8 grid gap-2 rounded-2xl border border-border bg-background p-2 shadow-[var(--shadow-card)] sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]">
            <select aria-label="Materie" value={subject} onChange={(e) => setSubject(e.target.value)} className="h-13 rounded-xl border-0 bg-muted px-4 text-sm outline-hidden focus:ring-2 focus:ring-ring"><option value="">Materie</option>{POPULAR_SUBJECTS.map((item) => <option value={item.slug} key={item.slug}>{item.name}</option>)}</select>
            <select aria-label="Nivel" value={level} onChange={(e) => setLevel(e.target.value)} className="h-13 rounded-xl border-0 bg-muted px-4 text-sm outline-hidden focus:ring-2 focus:ring-ring"><option value="">Nivel</option>{LEVELS.map((item) => <option key={item}>{item}</option>)}</select>
            <select aria-label="Locație" value={location} onChange={(e) => setLocation(e.target.value)} className="h-13 rounded-xl border-0 bg-muted px-4 text-sm outline-hidden focus:ring-2 focus:ring-ring"><option value="">Locație</option>{LOCATIONS.map((item) => <option key={item}>{item}</option>)}</select>
            <button className="btn-primary h-13 px-6" type="submit"><Search className="mr-2 h-4 w-4" /> Caută</button>
          </form>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-success" /> Fără comision</span><span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-success" /> Profiluri verificate</span><span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-success" /> Contact direct</span></div>
        </div>
        <div className="relative hidden lg:block">
          <img src={heroImg} alt="Elevă învață alături de un profesor la o ședință de meditații" width="960" height="720" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]" fetchPriority="high" />
          <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-xl border border-border bg-background p-4 shadow-[var(--shadow-card)]"><span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-success"><BadgeCheck className="h-5 w-5" /></span><div><p className="text-sm font-bold">Profesori verificați</p><p className="text-xs text-muted-foreground">Experiență și identitate validate</p></div></div>
        </div>
      </div>
    </section>

    <section className="container-page py-16"><div className="flex items-end justify-between gap-4"><div><p className="text-sm font-semibold text-primary">Începe cu materia potrivită</p><h2 className="mt-2 text-3xl font-bold">Categorii populare</h2></div><Link to="/materii" className="hidden items-center gap-1 text-sm font-semibold text-primary sm:flex">Toate materiile <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">{POPULAR_SUBJECTS.map((item) => <Link key={item.slug} to="/meditatii" search={{ materie: item.slug }} className="group rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"><span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-sm font-bold text-primary">{item.icon}</span><h3 className="mt-4 text-sm font-bold">{item.name}</h3><p className="mt-1 text-xs leading-5 text-muted-foreground">{item.description}</p><p className="mt-3 text-xs font-medium text-primary">{item.count} profesori</p></Link>)}</div></section>

    <section className="border-y border-border bg-muted/40"><div className="container-page py-16"><div className="mx-auto max-w-2xl text-center"><p className="text-sm font-semibold text-primary">Selecție atentă</p><h2 className="mt-2 text-3xl font-bold">Profesori recomandați</h2><p className="mt-3 text-muted-foreground">Profiluri demonstrative pentru a explora experiența marketplace-ului.</p></div><div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{MOCK_TEACHERS.slice(0,3).map((teacher) => <article key={teacher.id} className="rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"><div className="flex items-center gap-3"><span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{teacher.initials}</span><div className="min-w-0"><h3 className="truncate font-bold">{teacher.name}</h3><p className="text-sm text-muted-foreground">{teacher.subject}</p></div><BadgeCheck className="ml-auto h-5 w-5 shrink-0 text-success" /></div><p className="mt-4 text-sm leading-6 text-muted-foreground">{teacher.tagline}</p><div className="mt-4 flex items-center gap-4 text-sm"><span className="inline-flex items-center gap-1 font-semibold"><Star className="h-4 w-4 fill-warning text-warning" /> {teacher.rating}</span><span className="inline-flex items-center gap-1 text-muted-foreground"><MapPin className="h-4 w-4" /> {teacher.location}</span></div><div className="mt-5 flex items-center justify-between border-t border-border pt-4"><span><strong className="text-xl">{teacher.price} lei</strong><span className="text-xs text-muted-foreground"> / oră</span></span><Link to="/meditatii" search={{ materie: teacher.subjectSlug }} className="btn-outline h-10 px-4">Vezi profil</Link></div></article>)}</div></div></section>

    <section className="container-page py-18"><div className="text-center"><p className="text-sm font-semibold text-primary">Simplu și transparent</p><h2 className="mt-2 text-3xl font-bold">Cum funcționează</h2></div><div className="relative mt-10 grid gap-5 md:grid-cols-3">{[
      { icon: Search, title: "Caută", text: "Filtrează profesorii după materie, nivel, preț și disponibilitate." },
      { icon: CalendarCheck, title: "Rezervă", text: "Alege data și ora potrivite, apoi discută direct cu profesorul." },
      { icon: BookOpen, title: "Învață", text: "Participă la lecție online sau fizic și urmărește-ți progresul." },
    ].map((item, index) => <div key={item.title} className="relative rounded-xl border border-border bg-card p-7 text-center"><span className="absolute right-4 top-4 text-4xl font-bold text-primary-soft">0{index + 1}</span><span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary"><item.icon className="h-5 w-5" /></span><h3 className="mt-5 text-lg font-bold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p></div>)}</div></section>

    <section className="bg-primary py-16 text-primary-foreground"><div className="container-page"><div className="mx-auto max-w-2xl text-center"><Sparkles className="mx-auto h-7 w-7" /><h2 className="mt-3 text-3xl font-bold">Povești de succes</h2><p className="mt-3 text-primary-foreground/75">Exemple de recenzii afișate în versiunea demonstrativă.</p></div><div className="mt-9 grid gap-4 md:grid-cols-3">{TESTIMONIALS.map((item) => <blockquote key={item.name} className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/8 p-6"><div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-warning text-warning" />)}</div><p className="mt-4 text-sm leading-6">„{item.quote}”</p><footer className="mt-5 flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-full bg-primary-foreground/15 text-xs font-bold">{item.initials}</span><span><strong className="block text-sm">{item.name}</strong><span className="text-xs text-primary-foreground/70">{item.role}</span></span></footer></blockquote>)}</div></div></section>

    <section className="container-page py-16"><div className="grid items-center gap-7 rounded-2xl border border-border bg-accent p-8 md:grid-cols-[1fr_auto] md:p-10"><div><div className="flex items-center gap-2 text-success"><UserRound className="h-5 w-5" /><span className="text-sm font-bold">Pentru profesori</span></div><h2 className="mt-3 text-3xl font-bold">Transformă experiența ta în progres pentru elevi</h2><p className="mt-3 max-w-2xl text-muted-foreground">Creează un profil profesionist, stabilește-ți programul și discută direct cu elevii potriviți.</p></div><Link to="/pentru-profesori" className="btn-primary h-12 px-7">Devino profesor <ArrowRight className="ml-2 h-4 w-4" /></Link></div></section>
  </>;
}
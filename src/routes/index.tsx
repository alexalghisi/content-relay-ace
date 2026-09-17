import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, BadgeCheck, BookOpen, Check, Megaphone, MessageSquareText, Search, ShieldCheck, UserRound } from "lucide-react";
import heroImg from "@/assets/hero-tutoring.jpg";
import { POPULAR_SUBJECTS } from "@/data/marketplace-mock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meditații Direct — Profesorii vin la tine cu propuneri" },
      { name: "description", content: "Descrii o singură dată ce vrei să înveți, iar profesorii verificați îți trimit propuneri direct. Gratuit, fără comision, online sau în orașul tău." },
      { property: "og:title", content: "Meditații Direct — Cere ofertă de la profesori" },
      { property: "og:description", content: "Postezi cererea, profesorii verificați îți trimit propuneri. Fără comision." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/" }],
  }),
  component: HomePage,
});

const LEVELS = ["Gimnaziu", "Evaluare Națională", "Liceu", "Bacalaureat", "Admitere facultate"];
const LOCATIONS = [
  { slug: "online", name: "Online" },
  ...CITIES.slice(0, 12).map((c) => ({ slug: c.slug, name: c.name })),
];

function HomePage() {
  const navigate = useNavigate({ from: "/" });
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [location, setLocation] = useState("");
  const submit = (event: FormEvent) => {
    event.preventDefault();
    navigate({ to: "/meditatii", search: { materie: subject || undefined, oras: location === "Online" ? undefined : location || undefined, q: level || undefined } });
  };

  return <>
    <section className="relative overflow-hidden border-b border-border bg-primary-soft/45">
      <div className="container-page grid min-h-[620px] items-center gap-10 py-12 lg:grid-cols-[1.05fr_.95fr] lg:py-18">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background px-3 py-1.5 text-xs font-semibold text-primary shadow-sm"><ShieldCheck className="h-4 w-4" /> Profesori verificați · fără comision</div>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">Găsește profesorul perfect pentru <span className="text-primary">succesul tău</span></h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Nu mai căuta prin zeci de profile. Descrii o singură dată ce ai nevoie, iar profesorii verificați îți trimit propuneri cu tarife și program.</p>
          <form onSubmit={submit} className="mt-8 grid gap-2 rounded-2xl border border-border bg-background p-2 shadow-[var(--shadow-card)] sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]">
            <select aria-label="Materie" value={subject} onChange={(e) => setSubject(e.target.value)} className="h-13 rounded-xl border-0 bg-muted px-4 text-sm outline-hidden focus:ring-2 focus:ring-ring"><option value="">Materie</option>{POPULAR_SUBJECTS.map((item) => <option value={item.slug} key={item.slug}>{item.name}</option>)}</select>
            <select aria-label="Nivel" value={level} onChange={(e) => setLevel(e.target.value)} className="h-13 rounded-xl border-0 bg-muted px-4 text-sm outline-hidden focus:ring-2 focus:ring-ring"><option value="">Nivel</option>{LEVELS.map((item) => <option key={item}>{item}</option>)}</select>
            <select aria-label="Locație" value={location} onChange={(e) => setLocation(e.target.value)} className="h-13 rounded-xl border-0 bg-muted px-4 text-sm outline-hidden focus:ring-2 focus:ring-ring"><option value="">Locație</option>{LOCATIONS.map((item) => <option key={item}>{item}</option>)}</select>
            <button className="btn-primary h-13 px-6" type="submit"><Search className="mr-2 h-4 w-4" /> Cere ofertă</button>
          </form>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-success" /> Gratuit pentru elevi</span><span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-success" /> Profesori verificați</span><span className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-success" /> Contact direct, fără intermediari</span></div>
        </div>
        <div className="relative hidden lg:block">
          <img src={heroImg} alt="Elevă învață alături de un profesor la o ședință de meditații" width="960" height="720" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]" fetchPriority="high" />
          <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-xl border border-border bg-background p-4 shadow-[var(--shadow-card)]"><span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-success"><BadgeCheck className="h-5 w-5" /></span><div><p className="text-sm font-bold">Profesori verificați</p><p className="text-xs text-muted-foreground">Experiență și identitate validate</p></div></div>
        </div>
      </div>
    </section>

    <section className="container-page py-16"><div className="flex items-end justify-between gap-4"><div><p className="text-sm font-semibold text-primary">Începe cu materia potrivită</p><h2 className="mt-2 text-3xl font-bold">Categorii populare</h2></div><Link to="/materii" className="hidden items-center gap-1 text-sm font-semibold text-primary sm:flex">Toate materiile <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">{POPULAR_SUBJECTS.map((item) => <Link key={item.slug} to="/meditatii" search={{ materie: item.slug }} className="group rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"><span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-sm font-bold text-primary">{item.icon}</span><h3 className="mt-4 text-sm font-bold">{item.name}</h3><p className="mt-1 text-xs leading-5 text-muted-foreground">{item.description}</p><p className="mt-3 text-xs font-medium text-primary">Cere ofertă →</p></Link>)}</div></section>

    <section className="border-y border-border bg-muted/40"><div className="container-page py-18"><div className="text-center"><p className="text-sm font-semibold text-primary">Simplu și transparent</p><h2 className="mt-2 text-3xl font-bold">Cum funcționează</h2><p className="mx-auto mt-3 max-w-xl text-muted-foreground">Elevii vin cu cererea, profesorii cu propunerea. Tu alegi.</p></div><div className="relative mt-10 grid gap-5 md:grid-cols-3">{[
      { icon: Megaphone, title: "Descrii cererea", text: "Spui materia, nivelul, orașul sau online și bugetul. Durează 2 minute și e gratuit." },
      { icon: MessageSquareText, title: "Primești propuneri", text: "Profesorii verificați interesați te contactează direct cu tariful și programul lor." },
      { icon: BookOpen, title: "Alegi și înveți", text: "Compari propunerile, discuți direct cu profesorul potrivit și începi lecțiile." },
    ].map((item, index) => <div key={item.title} className="relative rounded-xl border border-border bg-card p-7 text-center"><span className="absolute right-4 top-4 text-4xl font-bold text-primary-soft">0{index + 1}</span><span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary"><item.icon className="h-5 w-5" /></span><h3 className="mt-5 text-lg font-bold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p></div>)}</div><div className="mt-9 text-center"><Link to="/meditatii" className="btn-primary h-12 px-7">Postează cererea ta <ArrowRight className="ml-2 h-4 w-4" /></Link></div></div></section>

    <section className="container-page py-16"><div className="grid items-center gap-7 rounded-2xl border border-border bg-accent p-8 md:grid-cols-[1fr_auto] md:p-10"><div><div className="flex items-center gap-2 text-success"><UserRound className="h-5 w-5" /><span className="text-sm font-bold">Pentru profesori</span></div><h2 className="mt-3 text-3xl font-bold">Elevii vin cu cererea, tu vii cu propunerea</h2><p className="mt-3 max-w-2xl text-muted-foreground">Vezi cererile recente de la elevi și părinți, contactează-i direct și îți umpli programul fără intermediari.</p></div><Link to="/pentru-profesori" className="btn-primary h-12 px-7">Devino profesor <ArrowRight className="ml-2 h-4 w-4" /></Link></div></section>
  </>;
}

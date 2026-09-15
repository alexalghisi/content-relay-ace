import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { BadgeCheck, CalendarDays, ChevronDown, Filter, MapPin, Search, SlidersHorizontal, Star, Video } from "lucide-react";
import { MOCK_TEACHERS, POPULAR_SUBJECTS } from "@/data/marketplace-mock";

type SearchParams = { materie?: string; oras?: string; q?: string };
export const Route = createFileRoute("/meditatii/")({
  validateSearch: (search: Record<string, unknown>): SearchParams => ({ materie: typeof search.materie === "string" ? search.materie : undefined, oras: typeof search.oras === "string" ? search.oras : undefined, q: typeof search.q === "string" ? search.q : undefined }),
  head: () => ({ meta: [
    { title: "Profesori Meditații — Compară și rezervă | Meditații Direct" },
    { name: "description", content: "Compară profesori pentru meditații după materie, preț, rating, disponibilitate și format. Profiluri verificate, online sau în orașul tău." },
    { property: "og:title", content: "Profesori pentru meditații | Meditații Direct" },
    { property: "og:description", content: "Găsește profesorul potrivit folosind filtre clare și profiluri verificate." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "https://meditatiidirect.ro/meditatii" }] }),
  component: ListingPage,
});

const DAYS = ["Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă", "Duminică"];

function ListingPage() {
  const search = Route.useSearch();
  const [query, setQuery] = useState(search.q ?? "");
  const [subject, setSubject] = useState(search.materie ?? "");
  const [price, setPrice] = useState(120);
  const [rating, setRating] = useState(0);
  const [format, setFormat] = useState("toate");
  const [day, setDay] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const teachers = useMemo(() => MOCK_TEACHERS.filter((teacher) => {
    const q = query.toLowerCase();
    if (q && !`${teacher.name} ${teacher.subject} ${teacher.location}`.toLowerCase().includes(q)) return false;
    if (subject && teacher.subjectSlug !== subject) return false;
    if (teacher.price > price || teacher.rating < rating) return false;
    if (format === "online" && !teacher.online) return false;
    if (format === "fizic" && teacher.online) return false;
    if (day && !teacher.availability.some((availableDay) => availableDay === day)) return false;
    return true;
  }), [query, subject, price, rating, format, day]);

  const reset = () => { setQuery(""); setSubject(""); setPrice(120); setRating(0); setFormat("toate"); setDay(""); };
  const filters = <div className="space-y-7">
    <div><label className="text-sm font-bold" htmlFor="subject">Materie</label><select id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="mt-2 h-11 w-full rounded-lg border border-border bg-background px-3 text-sm"><option value="">Toate materiile</option>{POPULAR_SUBJECTS.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}</select></div>
    <div><div className="flex justify-between text-sm"><label className="font-bold" htmlFor="price">Preț maxim</label><span className="font-semibold text-primary">{price} lei/oră</span></div><input id="price" type="range" min="50" max="150" step="5" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="mt-3 w-full accent-primary" /><div className="flex justify-between text-xs text-muted-foreground"><span>50 lei</span><span>150 lei</span></div></div>
    <fieldset><legend className="text-sm font-bold">Recenzii</legend><div className="mt-3 space-y-2">{[4.8,4.5,4].map((value) => <label key={value} className="flex cursor-pointer items-center gap-2 text-sm"><input type="radio" name="rating" checked={rating === value} onChange={() => setRating(value)} className="accent-primary" /><span className="inline-flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-warning text-warning" />)}</span><span>{value}+</span></label>)}</div></fieldset>
    <fieldset><legend className="text-sm font-bold">Format</legend><div className="mt-3 grid grid-cols-3 gap-2">{[["toate","Toate"],["online","Online"],["fizic","Fizic"]].map(([value,label]) => <button type="button" key={value} onClick={() => setFormat(value)} className={`h-9 rounded-lg border text-xs font-medium transition-colors ${format === value ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:bg-muted"}`}>{label}</button>)}</div></fieldset>
    <div><label className="text-sm font-bold" htmlFor="day">Disponibilitate</label><select id="day" value={day} onChange={(e) => setDay(e.target.value)} className="mt-2 h-11 w-full rounded-lg border border-border bg-background px-3 text-sm"><option value="">Orice zi</option>{DAYS.map((item) => <option key={item}>{item}</option>)}</select></div>
    <button onClick={reset} className="btn-outline w-full">Resetează filtrele</button>
  </div>;

  return <section className="container-page py-8 sm:py-10">
    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><nav className="text-xs text-muted-foreground"><Link to="/">Acasă</Link> / Profesori</nav><h1 className="mt-3 text-3xl font-bold sm:text-4xl">Găsește profesorul potrivit</h1><p className="mt-2 max-w-2xl text-muted-foreground">Compară profiluri, tarife și disponibilitate. Toți profesorii afișați sunt exemple demonstrative.</p></div><button onClick={() => setFiltersOpen((open) => !open)} className="btn-outline md:hidden"><Filter className="mr-2 h-4 w-4" /> Filtre <ChevronDown className="ml-2 h-4 w-4" /></button></div>
    <div className="mt-7 grid gap-7 md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)]">
      <aside className={`${filtersOpen ? "block" : "hidden"} rounded-xl border border-border bg-card p-5 md:block md:self-start md:sticky md:top-24`}><div className="mb-6 flex items-center gap-2"><SlidersHorizontal className="h-4 w-4 text-primary" /><h2 className="font-bold">Filtre</h2></div>{filters}</aside>
      <div className="min-w-0"><div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3"><div className="relative"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Caută după nume, materie sau oraș" className="h-12 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm outline-hidden focus:ring-2 focus:ring-ring" /></div><div className="grid h-12 place-items-center rounded-xl border border-border px-4 text-sm font-medium">{teachers.length} rezultate</div></div>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">{teachers.map((teacher) => <article key={teacher.id} className="flex min-w-0 flex-col rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"><div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3"><span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{teacher.initials}</span><div className="min-w-0"><div className="flex items-center gap-1"><h2 className="truncate font-bold">{teacher.name}</h2><BadgeCheck className="h-4 w-4 shrink-0 text-success" /></div><p className="text-sm text-muted-foreground">{teacher.subject}</p><span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold"><Star className="h-4 w-4 fill-warning text-warning" /> {teacher.rating} <span className="font-normal text-muted-foreground">({teacher.reviews})</span></span></div><span className="text-right"><strong className="block text-lg">{teacher.price} lei</strong><span className="text-xs text-muted-foreground">/ oră</span></span></div><p className="mt-4 min-h-12 text-sm leading-6 text-muted-foreground">{teacher.tagline}</p><div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground"><span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {teacher.location}</span>{teacher.online && <span className="inline-flex items-center gap-1 text-primary"><Video className="h-3.5 w-3.5" /> Online</span>}<span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" /> {teacher.availability.slice(0,2).join(", ")}</span></div><div className="mt-5 flex items-center justify-between border-t border-border pt-4"><span className="text-xs font-medium text-success">Disponibil săptămâna aceasta</span><Link to="/anunt/$slug" params={{ slug: teacher.slug }} className="btn-primary h-10 px-4">Vezi profil</Link></div></article>)}</div>
        {teachers.length === 0 && <div className="mt-5 rounded-xl border border-dashed border-border p-10 text-center"><Search className="mx-auto h-8 w-8 text-muted-foreground" /><h2 className="mt-3 font-bold">Nu am găsit profesori</h2><p className="mt-1 text-sm text-muted-foreground">Încearcă să lărgești criteriile de căutare.</p><button onClick={reset} className="btn-primary mt-5">Resetează filtrele</button></div>}
      </div>
    </div>
  </section>;
}
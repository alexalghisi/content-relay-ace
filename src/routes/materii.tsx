import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { BookOpen, Search } from "lucide-react";
import { faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/materii";
const TITLE = "Toate materiile pentru meditații — 20+ discipline | MeditatiiDirect.ro";
const DESC = "Găsește meditator pentru orice materie: matematică, română, engleză, fizică, informatică, chimie, biologie, istorie, germană, franceză și multe altele. Profesori verificați, contact direct.";

// Fallback static — dacă Supabase nu răspunde, tot vedem ceva real (bun pentru SEO/SSR).
const STATIC_SUBJECTS: { slug: string; name: string; icon: string; level: string; desc: string }[] = [
  { slug: "matematica", name: "Matematică", icon: "📐", level: "Gimnaziu, Liceu, Facultate", desc: "Algebră, geometrie, analiză matematică, BAC M1/M2, admitere UPB / ASE / UTCN." },
  { slug: "romana", name: "Limba și literatura română", icon: "📖", level: "Gimnaziu, Liceu", desc: "Eseu, comentariu literar, gramatică, EN VIII, BAC, olimpiade." },
  { slug: "engleza", name: "Engleză", icon: "🇬🇧", level: "Toate nivelurile", desc: "Conversațional, Cambridge, IELTS, TOEFL, business English, BAC." },
  { slug: "germana", name: "Germană", icon: "🇩🇪", level: "Toate nivelurile", desc: "A1–C2, Goethe-Zertifikat, pregătire pentru studii în Germania." },
  { slug: "franceza", name: "Franceză", icon: "🇫🇷", level: "Toate nivelurile", desc: "DELF, DALF, conversație, BAC francofon." },
  { slug: "spaniola", name: "Spaniolă", icon: "🇪🇸", level: "Toate nivelurile", desc: "Conversație, DELE, gramatică." },
  { slug: "italiana", name: "Italiană", icon: "🇮🇹", level: "Toate nivelurile", desc: "CILS, conversație, gramatică." },
  { slug: "informatica", name: "Informatică", icon: "💻", level: "Liceu, Facultate", desc: "C/C++, Python, Java, structuri de date, algoritmi, BAC, ACM, .lic, admitere." },
  { slug: "fizica", name: "Fizică", icon: "⚛️", level: "Liceu, Facultate", desc: "Mecanică, electricitate, optică, termodinamică, BAC, admitere UPB." },
  { slug: "chimie", name: "Chimie", icon: "🧪", level: "Liceu, Facultate", desc: "Chimie organică, anorganică, BAC, admitere Medicină." },
  { slug: "biologie", name: "Biologie", icon: "🧬", level: "Liceu, Facultate", desc: "Anatomie, genetică, ecologie, BAC, admitere UMF." },
  { slug: "istorie", name: "Istorie", icon: "🏛️", level: "Gimnaziu, Liceu", desc: "Pregătire BAC, olimpiade, istorie modernă și contemporană." },
  { slug: "geografie", name: "Geografie", icon: "🌍", level: "Gimnaziu, Liceu", desc: "Geografia României, Europei, fizică, umană, BAC." },
  { slug: "logica", name: "Logică și argumentare", icon: "🧠", level: "Liceu", desc: "BAC, raționament, admitere Drept." },
  { slug: "psihologie", name: "Psihologie", icon: "🧩", level: "Liceu", desc: "BAC, admitere psihologie, teorii fundamentale." },
  { slug: "economie", name: "Economie", icon: "📊", level: "Liceu, Facultate", desc: "Microeconomie, macroeconomie, BAC, admitere ASE." },
  { slug: "sociologie", name: "Sociologie", icon: "👥", level: "Liceu", desc: "BAC, teorii, metodologie." },
  { slug: "filosofie", name: "Filosofie", icon: "🤔", level: "Liceu", desc: "BAC, eseuri, curente filosofice." },
  { slug: "muzica", name: "Muzică", icon: "🎵", level: "Toate nivelurile", desc: "Pian, chitară, vioară, canto, teorie muzicală." },
  { slug: "desen", name: "Desen și artă", icon: "🎨", level: "Toate nivelurile", desc: "Desen tehnic, pictură, admitere arte." },
  { slug: "scoala-primara", name: "Școală primară", icon: "✏️", level: "Clasele I–IV", desc: "Pregătire generală, citit, scris, matematică, comunicare." },
];

const FAQS = [
  { q: "Ce materii pot studia pe MeditatiiDirect.ro?", a: "Peste 20 de materii: matematică, română, engleză, germană, franceză, italiană, spaniolă, informatică, fizică, chimie, biologie, istorie, geografie, logică, psihologie, economie, muzică, desen și pregătire pentru școala primară. Adăugăm constant materii noi în funcție de cererile elevilor." },
  { q: "Cum aleg materia potrivită?", a: "Dă click pe materia care te interesează și vezi toți meditatorii activi pentru ea, cu profil, prețuri și recenzii. Poți filtra după oraș, online vs. în persoană și nivel (gimnaziu, liceu, BAC, admitere, facultate)." },
  { q: "Pot găsi profesor pentru o materie nișată?", a: "Da. Avem profesori inclusiv pentru materii rar cerute precum logică, sociologie, filosofie, muzică, desen tehnic. Dacă nu găsești ceva, scrie-ne pe pagina de contact și încercăm să te conectăm cu un meditator." },
];

export const Route = createFileRoute("/materii")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) }],
  }),
  component: MateriiPage,
});

interface DbSubject { slug: string; name: string; icon: string | null; description: string | null; }

function MateriiPage() {
  const [db, setDb] = useState<DbSubject[]>([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    supabase.from("subjects").select("slug,name,icon,description").order("sort_order").then(({ data }) => {
      setDb(data ?? []);
    });
  }, []);

  // Merge: dacă DB are materii, le folosim ca sursă primară, dar completăm cu nivelul/descrierea statică
  const merged = (db.length ? db.map((d) => {
    const s = STATIC_SUBJECTS.find((x) => x.slug === d.slug);
    return { slug: d.slug, name: d.name, icon: d.icon ?? s?.icon ?? "📘", level: s?.level ?? "Toate nivelurile", desc: d.description ?? s?.desc ?? "" };
  }) : STATIC_SUBJECTS);

  const filtered = q ? merged.filter((m) => (m.name + " " + m.desc).toLowerCase().includes(q.toLowerCase())) : merged;

  return (
    <article className="container-page py-10 lg:py-14">
      <header className="max-w-3xl">
        <p className="inline-flex items-center gap-1 text-xs font-medium text-primary">
          <BookOpen className="h-4 w-4" /> {merged.length} materii disponibile
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Toate materiile pentru meditații</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          De la matematică și română până la informatică, limbi străine, științe și artă — găsești profesor verificat
          pentru orice nivel: clasele primare, gimnaziu, liceu, BAC, admitere și facultate. Contact direct, fără comision.
        </p>
      </header>

      <div className="mt-8 max-w-md relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Caută materia..."
          className="h-11 w-full rounded-xl border border-border bg-background pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <Link
            key={s.slug}
            to="/meditatii"
            search={{ materie: s.slug }}
            className="card-soft p-5 hover:border-primary/40 hover:shadow-[var(--shadow-pop)] transition group"
          >
            <div className="flex items-start gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-2xl">
                {s.icon}
              </span>
              <div className="min-w-0">
                <h2 className="text-base font-semibold group-hover:text-primary">{s.name}</h2>
                <p className="text-xs text-muted-foreground">{s.level}</p>
              </div>
            </div>
            {s.desc && <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{s.desc}</p>}
            <p className="mt-3 text-xs font-medium text-primary">Vezi profesori →</p>
          </Link>
        ))}
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-bold">Întrebări frecvente</h2>
        <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-card">
          {FAQS.map((f) => (
            <details key={f.q} className="group p-5 open:bg-muted/30">
              <summary className="cursor-pointer list-none font-medium text-foreground flex items-center justify-between">
                {f.q}
                <span className="text-muted-foreground transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Search, Library } from "lucide-react";
import { listUniversities } from "@/lib/admission-papers";

const URL_BASE = "https://meditatiidirect.ro/subiecte-admitere";
const TITLE = "Subiecte Admitere Facultate 2026 — Arhivă PDF oficială | MeditatiiDirect.ro";
const DESC = "Arhivă completă cu subiecte și bareme de admitere la facultățile din România: Medicină (UMF), Politehnică, Drept, ASE, Informatică. PDF oficial, descărcare gratuită.";

export const Route = createFileRoute("/subiecte-admitere")({
  head: () => ({
    meta: [
      { title: TITLE }, { name: "description", content: DESC },
      { name: "keywords", content: "subiecte admitere facultate, subiecte admitere medicina, subiecte admitere upb, subiecte admitere drept, subiecte admitere ase, subiecte admitere utcn, barem admitere, admitere 2026 pdf" },
      { property: "og:title", content: TITLE }, { property: "og:description", content: DESC },
      { property: "og:url", content: URL_BASE }, { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE }, { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL_BASE }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "CollectionPage",
      name: TITLE, description: DESC, url: URL_BASE, inLanguage: "ro-RO",
      provider: { "@type": "Organization", name: "MeditatiiDirect.ro", url: "https://meditatiidirect.ro" },
    }) }],
  }),
  component: HubPage,
});

function HubPage() {
  const [unis, setUnis] = useState<{ slug: string; name: string; count: number }[]>([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => { listUniversities().then((r) => { setUnis(r); setLoading(false); }).catch(() => setLoading(false)); }, []);
  const filtered = q ? unis.filter((u) => u.name.toLowerCase().includes(q.toLowerCase())) : unis;
  return (
    <main className="container-page py-10 lg:py-14">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link to="/" className="hover:text-primary">Acasă</Link></li>
          <li>›</li>
          <li className="text-foreground">Subiecte admitere facultate</li>
        </ol>
      </nav>
      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Subiecte admitere facultate — arhivă completă</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Subiecte oficiale și bareme de admitere de la toate universitățile din România: Medicină (UMF),
          Politehnică (UPB, UTCN), Drept, ASE, Matematică-Informatică. <strong>PDF gratuit, găzduit pe MeditatiiDirect.ro.</strong>
        </p>
        <div className="mt-6 flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2">
          <Search className="h-5 w-5 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Caută universitate (ex: UMF Cluj)…"
            className="w-full bg-transparent text-sm outline-none" />
        </div>
      </header>
      <section className="mt-8">
        <h2 className="text-xl font-semibold flex items-center gap-2"><Library className="h-5 w-5" /> Universități</h2>
        {loading ? <p className="mt-4 text-sm text-muted-foreground">Se încarcă arhiva…</p> :
          filtered.length === 0 ? (
            <div className="mt-4 rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
              <p>Arhiva se populează — fișierele PDF se adaugă progresiv. Între timp, vezi:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link to="/admitere" className="text-primary hover:underline">Ghid admitere facultate</Link>
                <Link to="/grile-medicina" className="text-primary hover:underline">Grile Medicină</Link>
                <Link to="/grile-upb" className="text-primary hover:underline">Grile UPB</Link>
              </div>
            </div>
          ) : (
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((u) => (
                <li key={u.slug}>
                  <Link to="/subiecte-admitere/$universitate" params={{ universitate: u.slug }}
                    className="card-soft block p-4 hover:border-primary/40 transition">
                    <p className="font-semibold">{u.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{u.count} {u.count === 1 ? "document" : "documente"}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
      </section>
      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold">Cum folosești arhiva</h2>
        <ol className="mt-3 space-y-2 list-decimal pl-5 text-muted-foreground">
          <li>Alege universitatea unde vrei să dai admiterea.</li>
          <li>Selectează materia (biologie, matematică, raționament logic etc.).</li>
          <li>Deschide anul dorit — vezi subiectul în browser și descarcă PDF-ul oficial + baremul.</li>
          <li>Lucrează cu un <Link to="/meditatii" className="text-primary hover:underline">profesor verificat</Link> pentru pregătire personalizată.</li>
        </ol>
      </section>
    </main>
  );
}

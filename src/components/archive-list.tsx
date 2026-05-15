import { Download, FileText } from "lucide-react";
import { useMemo, useState } from "react";

interface BacRow { slug: string; name: string; year: number; subiect: string; barem: string; }
interface AdmRow { slug: string; name: string; subject: string; year: number; pdf: string; }

export function BacArchive({ items }: { items: BacRow[] }) {
  const subjects = useMemo(() => {
    const s = new Map<string, string>();
    items.forEach((i) => s.set(i.slug, i.name));
    return Array.from(s, ([slug, name]) => ({ slug, name }));
  }, [items]);
  const years = useMemo(() => Array.from(new Set(items.map((i) => i.year))).sort((a, b) => b - a), [items]);
  const [activeYear, setActiveYear] = useState(years[0]);

  const filtered = items.filter((i) => i.year === activeYear);

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold">Arhivă variante BAC 2010 – 2026</h2>
      <p className="mt-2 text-muted-foreground">
        Subiecte oficiale și bareme la {subjects.length} materii × {years.length} ani de bacalaureat. Toate PDF-urile sunt gratuite, indexate și descărcabile.
      </p>

      <div className="mt-5 flex flex-wrap gap-2" role="tablist" aria-label="Ani BAC">
        {years.map((y) => (
          <button
            key={y}
            role="tab"
            aria-selected={y === activeYear}
            onClick={() => setActiveYear(y)}
            className={`rounded-full border px-3 py-1.5 text-sm transition ${
              y === activeYear ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary/40"
            }`}
          >
            {y}
          </button>
        ))}
      </div>

      <h3 className="mt-6 text-lg font-semibold">Bacalaureat {activeYear} — toate materiile</h3>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((i) => (
          <div key={i.slug} className="card-soft p-4">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                <FileText className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-tight">{i.name}</p>
                <p className="text-xs text-muted-foreground">BAC {i.year}</p>
                <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs">
                  <a href={i.subiect} target="_blank" rel="noopener" download className="inline-flex items-center gap-1 text-primary hover:underline">
                    <Download className="h-3 w-3" /> Subiect PDF
                  </a>
                  <a href={i.barem} target="_blank" rel="noopener" download className="inline-flex items-center gap-1 text-primary hover:underline">
                    <Download className="h-3 w-3" /> Barem PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AdmitereArchive({ items }: { items: AdmRow[] }) {
  const facs = useMemo(() => {
    const s = new Map<string, { name: string; subject: string }>();
    items.forEach((i) => s.set(i.slug, { name: i.name, subject: i.subject }));
    return Array.from(s, ([slug, v]) => ({ slug, ...v }));
  }, [items]);
  const [activeFac, setActiveFac] = useState(facs[0].slug);
  const filtered = items.filter((i) => i.slug === activeFac).sort((a, b) => b.year - a.year);
  const current = facs.find((f) => f.slug === activeFac)!;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold">Arhivă subiecte admitere 2010 – 2026</h2>
      <p className="mt-2 text-muted-foreground">
        Probe de admitere la {facs.length} facultăți de top din România, cu materii, structura subiectului și strategie de pregătire — descărcabile în PDF.
      </p>

      <div className="mt-5 flex flex-wrap gap-2" role="tablist" aria-label="Facultăți admitere">
        {facs.map((f) => (
          <button
            key={f.slug}
            role="tab"
            aria-selected={f.slug === activeFac}
            onClick={() => setActiveFac(f.slug)}
            className={`rounded-full border px-3 py-1.5 text-sm transition ${
              f.slug === activeFac ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary/40"
            }`}
          >
            {f.name}
          </button>
        ))}
      </div>

      <h3 className="mt-6 text-lg font-semibold">{current.name}</h3>
      <p className="text-sm text-muted-foreground">Probă: {current.subject}</p>

      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((i) => (
          <a key={i.year} href={i.pdf} target="_blank" rel="noopener" download className="card-soft p-4 flex items-start gap-3 hover:border-primary/40 transition">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
              <FileText className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold">Admitere {i.year}</p>
              <p className="text-xs text-muted-foreground">{i.name}</p>
              <p className="mt-1 inline-flex items-center gap-1 text-xs text-primary"><Download className="h-3 w-3" /> Descarcă PDF</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

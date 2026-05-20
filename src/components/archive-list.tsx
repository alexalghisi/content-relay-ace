import { Link } from "@tanstack/react-router";
import { Download, FileText, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";

interface BacRow { slug: string; name: string; year: number; internal: string; subjectPdf: string; baremPdf: string; }
interface AdmRow { slug: string; name: string; subject: string; city?: string; year: number; internal: string; subjectPdf: string; baremPdf: string; }

function OfficialNotice() {
  return (
    <div className="mt-4 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary-soft/40 p-4 text-sm">
      <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
      <p className="text-muted-foreground">
        Toate PDF-urile sunt <strong className="text-foreground">găzduite pe MeditatiiDirect.ro</strong> —
        subiecte și bareme verificate, gata de descărcat fără să părăsești platforma.
      </p>
    </div>
  );
}

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
        Subiecte și bareme pentru {subjects.length} materii, în fiecare an din 2010 până în 2026 —
        găzduite direct pe MeditatiiDirect.ro. Selectează anul, deschide materia, descarci PDF-ul.
      </p>

      <OfficialNotice />

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
          <Link
            key={i.slug + i.year}
            to="/resurse/bac/$materie/$an"
            params={{ materie: i.slug, an: String(i.year) }}
            className="card-soft p-4 flex items-start gap-3 hover:border-primary/40 transition"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
              <FileText className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-tight">{i.name}</p>
              <p className="text-xs text-muted-foreground">BAC {i.year} — subiect + barem</p>
              <p className="mt-1 inline-flex items-center gap-1 text-xs text-primary">
                <Download className="h-3 w-3" /> Vezi & descarcă PDF
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function AdmitereArchive({ items }: { items: AdmRow[] }) {
  const facs = useMemo(() => {
    const s = new Map<string, { name: string; subject: string; city?: string }>();
    items.forEach((i) => s.set(i.slug, { name: i.name, subject: i.subject, city: i.city }));
    return Array.from(s, ([slug, v]) => ({ slug, ...v }));
  }, [items]);
  const [activeFac, setActiveFac] = useState(facs[0].slug);
  const filtered = items.filter((i) => i.slug === activeFac).sort((a, b) => b.year - a.year);
  const current = facs.find((f) => f.slug === activeFac)!;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold">Arhivă subiecte admitere 2010 – 2026</h2>
      <p className="mt-2 text-muted-foreground">
        {facs.length} facultăți de top din România. Toate subiectele sunt găzduite pe MeditatiiDirect.ro —
        alege facultatea, alege anul, descarcă PDF-ul.
      </p>

      <OfficialNotice />

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

      <div className="mt-6 card-soft p-5">
        <h3 className="text-lg font-semibold">{current.name}</h3>
        <p className="text-sm text-muted-foreground">Probă: {current.subject}{current.city ? ` · ${current.city}` : ""}</p>
      </div>

      <h4 className="mt-6 text-base font-semibold">Subiecte din anii anteriori</h4>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((i) => (
          <Link
            key={i.year}
            to="/resurse/admitere/$facultate/$an"
            params={{ facultate: i.slug, an: String(i.year) }}
            className="card-soft p-4 flex items-start gap-3 hover:border-primary/40 transition"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
              <FileText className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold">Admitere {i.year}</p>
              <p className="text-xs text-muted-foreground">Subiect + barem</p>
              <p className="mt-1 inline-flex items-center gap-1 text-xs text-primary"><Download className="h-3 w-3" /> Vezi & descarcă PDF</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Hub rezolvări: /rezolvari
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Clock, Gauge } from "lucide-react";
import { listRezolvari } from "@/lib/bac-content.functions";
import { BAC_SUBJECTS, BAC_SESSIONS, getBacSubject } from "@/data/bac-catalog";

const SITE = "https://meditatiidirect.ro";

export const Route = createFileRoute("/rezolvari/")({
  loader: async () => {
    try {
      return await listRezolvari();
    } catch {
      return { items: [] as Awaited<ReturnType<typeof listRezolvari>>["items"] };
    }
  },
  head: () => {
    const url = `${SITE}/rezolvari`;
    const title = "Rezolvări BAC explicate pas cu pas — toate materiile | MeditatiiDirect.ro";
    const desc =
      "Rezolvări complete la subiectele de bacalaureat: raționamentul pas cu pas, răspunsul final și greșelile frecvente. Gratuit, pentru toate materiile și sesiunile.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: RezolvariHub,
  errorComponent: () => (
    <main className="container-page py-16">
      <h1 className="text-2xl font-bold">Rezolvările nu au putut fi încărcate</h1>
    </main>
  ),
});

function RezolvariHub() {
  const { items } = Route.useLoaderData();
  const [materie, setMaterie] = useState("");
  const [an, setAn] = useState("");

  const years = useMemo(() => Array.from(new Set(items.map((i) => i.an))).sort((a, b) => b - a), [items]);
  const filtered = items.filter((i) => (!materie || i.materie === materie) && (!an || String(i.an) === an));

  return (
    <main className="container-page py-10 lg:py-14">
      <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex items-center gap-1">
          <li><Link to="/" className="hover:text-primary">Acasă</Link></li><li>›</li>
          <li className="text-foreground">Rezolvări BAC</li>
        </ol>
      </nav>

      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Rezolvări BAC explicate pas cu pas</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Nu doar răspunsul — și raționamentul. Fiecare rezolvare are cerința rezumată, pașii explicați, răspunsul final și capcanele în care cad cei mai mulți elevi.
        </p>
      </header>

      <div className="mt-6 flex flex-wrap gap-3">
        <label className="text-sm">
          <span className="sr-only">Materie</span>
          <select className="field-input min-w-48" value={materie} onChange={(e) => setMaterie(e.target.value)} aria-label="Filtrează după materie">
            <option value="">Toate materiile</option>
            {BAC_SUBJECTS.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="sr-only">An</span>
          <select className="field-input min-w-32" value={an} onChange={(e) => setAn(e.target.value)} aria-label="Filtrează după an">
            <option value="">Toți anii</option>
            {years.map((y) => (
              <option key={y} value={String(y)}>{y}</option>
            ))}
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <section className="card-soft mt-8 p-6">
          <h2 className="text-lg font-semibold">Primele rezolvări sunt în pregătire</h2>
          <p className="mt-2 text-muted-foreground">
            Publicăm rezolvările pe loturi, după verificare editorială. Până atunci ai subiectele și baremele oficiale în arhiva BAC.
          </p>
          <Link to="/bac" className="mt-4 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
            Deschide arhiva BAC
          </Link>
        </section>
      ) : (
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((i) => {
            const subject = getBacSubject(i.materie);
            const session = BAC_SESSIONS.find((s) => s.slug === i.sesiune);
            return (
              <li key={`${i.materie}-${i.an}-${i.sesiune}`}>
                <Link to="/rezolvari/$materie/$an/$sesiune" params={{ materie: i.materie, an: String(i.an), sesiune: i.sesiune }}
                  className="card-soft block p-5 hover:border-primary/40">
                  <p className="font-semibold">{subject?.name ?? i.materie} {i.an}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{session?.label ?? i.sesiune}</p>
                  <p className="mt-3 flex items-center gap-3 text-xs text-primary">
                    <span className="inline-flex items-center gap-1"><Gauge className="h-3 w-3" /> {i.dificultate}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {i.timp_estimat_minute} min</span>
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}

      <section className="mt-12 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Te blochezi la un subiect anume?</h2>
        <p className="mt-2 text-muted-foreground">Descrii cererea, iar profesorii verificați îți trimit propuneri cu dată, oră și tarif.</p>
        <Link to="/meditatii" className="mt-4 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
          Cere ofertă gratuit
        </Link>
      </section>
    </main>
  );
}

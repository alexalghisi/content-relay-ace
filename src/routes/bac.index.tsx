// Hub global BAC: /bac — toate materiile.
import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { BAC_SUBJECTS, BAC_YEARS } from "@/data/bac-catalog";

const SITE = "https://meditatiidirect.ro";

export const Route = createFileRoute("/bac/")({
  head: () => {
    const url = `${SITE}/bac`;
    const title = `Subiecte BAC 2010–2026 — Toate materiile, toate sesiunile (PDF) | MeditatiiDirect.ro`;
    const desc = `Arhivă completă subiecte BAC ${BAC_YEARS[0]}–${BAC_YEARS[BAC_YEARS.length - 1]}: ${BAC_SUBJECTS.length} materii, toate variantele și baremele oficiale. Descărcare PDF gratuită.`;
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: BacHub,
});

function BacHub() {
  return (
    <main className="container-page py-10 lg:py-14">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Subiecte BAC 2010–2026 — arhivă completă</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          {BAC_SUBJECTS.length} materii × {BAC_YEARS.length} ani de subiecte oficiale și bareme de bacalaureat. Toate sesiunile (iunie, august, specială, simulare națională). PDF gratuit, fără cont.
        </p>
      </header>
      <section className="mt-8">
        <h2 className="text-xl font-semibold flex items-center gap-2"><BookOpen className="h-5 w-5" /> Alege materia</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {BAC_SUBJECTS.map((s) => (
            <li key={s.slug}>
              <Link to="/bac/$materie" params={{ materie: s.slug }} className="card-soft block p-5 hover:border-primary/40">
                <p className="text-lg font-semibold">{s.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.short}</p>
                <p className="mt-2 text-xs text-primary">{BAC_YEARS.length} ani disponibili →</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

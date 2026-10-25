import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, GitBranch } from "lucide-react";
import { BlocajCard, BlocajeBreadcrumb } from "@/components/blocaje/blocaj-card";
import { breadcrumbLd, SITE } from "@/lib/blocaje-seo";
import {
  BLOCAJE_MATERII,
  blocajeForMaterie,
  clasaRoman,
  getBlocaj,
  getBlocajMaterie,
  type BlocajNode,
} from "@/data/blocaje";

export const Route = createFileRoute("/harta-blocajelor/$materie/")({
  loader: ({ params }) => {
    const m = getBlocajMaterie(params.materie);
    if (!m) throw notFound();
    // Head is built here so the blocaje dataset stays in this route's lazy chunk.
    return { materie: m.slug, head: materieHead(m.slug) };
  },
  head: ({ loaderData }) =>
    loaderData?.head ?? {
      meta: [
        { title: "Pagina nu a fost găsită | MeditatiiDirect.ro" },
        { name: "robots", content: "noindex" },
      ],
    },
  notFoundComponent: () => (
    <div className="container-page py-16 text-center">
      <h1 className="text-2xl font-bold">Nu avem încă o hartă pentru această materie</h1>
      <p className="mt-2 text-muted-foreground">Vezi materiile disponibile în Harta Blocajelor.</p>
      <Link to="/harta-blocajelor" className="btn-primary mt-6">
        Înapoi la hartă
      </Link>
    </div>
  ),
  component: Page,
});

/** Grupează pe clasa minimă în care apare blocajul, în ordinea programei. */
function groupByClasa(nodes: BlocajNode[]) {
  const map = new Map<number, BlocajNode[]>();
  for (const n of nodes) {
    const c = Math.min(...n.clase);
    map.set(c, [...(map.get(c) ?? []), n]);
  }
  return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
}

function Page() {
  const { materie } = Route.useLoaderData();
  const m = getBlocajMaterie(materie)!;
  const nodes = blocajeForMaterie(m.slug);
  const groups = groupByClasa(nodes);
  const starts = nodes.filter((n) => n.lipsa.every((s) => getBlocaj(s)?.materie !== m.slug));

  return (
    <article className="container-page py-10 lg:py-14">
      <BlocajeBreadcrumb
        items={[{ name: "Harta Blocajelor", to: "/harta-blocajelor" }, { name: m.name }]}
      />

      <header className="max-w-3xl">
        <p className="inline-flex items-center gap-1 text-xs font-medium text-primary">
          <GitBranch className="h-4 w-4" /> {nodes.length} blocaje · clasele{" "}
          {clasaRoman(groups[0][0])}–{clasaRoman(Math.max(...nodes.flatMap((n) => n.clase)))}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Harta Blocajelor la {m.nameLower}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {m.descriere} Alege blocajul care seamănă cel mai bine cu ce ți se întâmplă; pagina lui
          îți arată de unde pornește problema.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to={m.landing} className="btn-outline h-11 px-5">
            Meditații {m.nameLower}
          </Link>
          <Link
            to="/meditatii"
            search={{ materie: m.slug }}
            className="btn-primary h-11 px-5 inline-flex items-center gap-2"
          >
            Cere un meditator <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      {starts.length > 0 && (
        <section className="mt-10 card-soft p-5 sm:p-6">
          <h2 className="font-semibold">Punctele de pornire</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Noțiunile de la care începe lanțul la {m.nameLower}. Dacă oricare dintre ele nu e
            sigură, celelalte blocaje vin de aici.
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {starts.map((n) => (
              <li key={n.slug}>
                <Link
                  to="/harta-blocajelor/$materie/$blocaj"
                  params={{ materie: n.materie, blocaj: n.slug }}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
                >
                  {n.titlu}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {groups.map(([c, list]) => (
        <section key={c} className="mt-12" aria-labelledby={`clasa-${c}`}>
          <h2 id={`clasa-${c}`} className="text-2xl font-bold">
            Clasa a {clasaRoman(c)}-a
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((n) => (
              <BlocajCard
                key={n.slug}
                n={n}
                hint={
                  n.lipsa.length
                    ? `Se sprijină pe: ${n.lipsa
                        .map((s) => getBlocaj(s)?.titlu)
                        .filter(Boolean)
                        .join("; ")}`
                    : "Punct de pornire"
                }
              />
            ))}
          </div>
        </section>
      ))}

      <section className="mt-14">
        <h2 className="text-lg font-semibold">Alte materii</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {BLOCAJE_MATERII.filter((x) => x.slug !== m.slug).map((x) => (
            <Link
              key={x.slug}
              to="/harta-blocajelor/$materie"
              params={{ materie: x.slug }}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
            >
              {x.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 card-soft bg-gradient-to-br from-primary-soft to-card p-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold">
              Ai nevoie de cineva care să explice pe înțelesul tău?
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Postezi gratuit cererea de meditații la {m.nameLower} și primești propuneri cu tarif
              și program de la profesori.
            </p>
          </div>
          <Link to="/meditatii" search={{ materie: m.slug }} className="btn-primary h-11 px-5">
            Cere meditații {m.nameLower}
          </Link>
        </div>
      </section>
    </article>
  );
}

function materieHead(slug: string) {
  const m = getBlocajMaterie(slug);
  if (!m) return undefined;
  const nodes = blocajeForMaterie(m.slug);
  const path = `/harta-blocajelor/${m.slug}`;
  const url = `${SITE}${path}`;
  const title = `Harta Blocajelor la ${m.nameLower}: ${nodes.length} blocaje explicate | MeditatiiDirect.ro`;
  const description = `Unde te blochezi la ${m.nameLower} și ce noțiune lipsește de obicei: ${nodes
    .slice(0, 4)
    .map((n) => n.titlu.toLowerCase())
    .join(", ")} și altele. Explicație, exemplu rezolvat și verificare pentru fiecare.`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Harta Blocajelor", path: "/harta-blocajelor" },
            { name: m.name, path },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `Harta Blocajelor la ${m.nameLower}`,
          url,
          numberOfItems: nodes.length,
          itemListElement: nodes.map((n, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: n.titlu,
            url: `${SITE}/harta-blocajelor/${n.materie}/${n.slug}`,
          })),
        }),
      },
    ],
  };
}

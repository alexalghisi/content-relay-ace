import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GitBranch,
  Lightbulb,
  Link2,
  MessageSquareText,
} from "lucide-react";
import { BlocajCard, BlocajeBreadcrumb } from "@/components/blocaje/blocaj-card";
import { breadcrumbLd, SITE } from "@/lib/blocaje-seo";
import { VerificareRapida } from "@/components/blocaje/verificare-rapida";
import {
  claseLabel,
  dependentsOf,
  getBlocaj,
  getBlocajMaterie,
  nextOf,
  prerequisitesOf,
} from "@/data/blocaje";

export const Route = createFileRoute("/harta-blocajelor/$materie/$blocaj")({
  loader: ({ params }) => {
    const n = getBlocaj(params.blocaj);
    // Un slug există o singură dată pe site; URL-ul canonic îl are sub materia lui.
    if (!n || n.materie !== params.materie) throw notFound();
    return { slug: n.slug };
  },
  head: ({ loaderData }) => {
    const n = loaderData ? getBlocaj(loaderData.slug) : undefined;
    const m = n && getBlocajMaterie(n.materie);
    if (!n || !m)
      return {
        meta: [
          { title: "Pagina nu a fost găsită | MeditatiiDirect.ro" },
          { name: "robots", content: "noindex" },
        ],
      };
    const path = `/harta-blocajelor/${n.materie}/${n.slug}`;
    const url = `${SITE}${path}`;
    const title = `${n.titlu} (${m.nameLower}, ${claseLabel(n.clase)}) — ce noțiune îți lipsește | MeditatiiDirect.ro`;
    const description = `„${n.blocaj}” ${
      n.lipsa.length
        ? `De obicei lipsește: ${prerequisitesOf(n)
            .map((p) => p.titlu.toLowerCase())
            .join(", ")}. `
        : ""
    }Explicație clară, exemplu rezolvat pas cu pas și un exercițiu de verificare.`;
    return {
      meta: [
        { title },
        { name: "description", content: description.slice(0, 300) },
        { property: "og:title", content: title },
        { property: "og:description", content: description.slice(0, 300) },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description.slice(0, 300) },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Harta Blocajelor", path: "/harta-blocajelor" },
              { name: m.name, path: `/harta-blocajelor/${m.slug}` },
              { name: n.titlu, path },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LearningResource",
            name: n.titlu,
            headline: `${n.titlu} — explicație, exemplu rezolvat și verificare`,
            description: description.slice(0, 300),
            url,
            inLanguage: "ro-RO",
            learningResourceType: ["Explicație", "Exemplu rezolvat", "Exercițiu de verificare"],
            educationalLevel: n.clase.map((c) => `Clasa a ${c}-a`),
            about: { "@type": "Thing", name: m.name },
            teaches: n.titlu,
            audience: { "@type": "EducationalAudience", educationalRole: "student" },
            isAccessibleForFree: true,
            isPartOf: {
              "@type": "CollectionPage",
              name: "Harta Blocajelor",
              url: `${SITE}/harta-blocajelor`,
            },
            publisher: { "@id": `${SITE}/#org` },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-16 text-center">
      <h1 className="text-2xl font-bold">Acest blocaj nu există încă pe hartă</h1>
      <p className="mt-2 text-muted-foreground">
        Caută-l în lista completă sau descrie-l într-o cerere de meditații.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <Link to="/harta-blocajelor" className="btn-primary">
          Harta Blocajelor
        </Link>
        <Link to="/meditatii" className="btn-outline">
          Cere meditații
        </Link>
      </div>
    </div>
  ),
  component: Page,
});

function SectionTitle({
  icon: Icon,
  children,
}: {
  icon: typeof Lightbulb;
  children: React.ReactNode;
}) {
  return (
    <h2 className="inline-flex items-center gap-2 text-xl font-bold">
      <Icon className="h-5 w-5 text-primary" /> {children}
    </h2>
  );
}

function Page() {
  const { slug } = Route.useLoaderData();
  const n = getBlocaj(slug)!;
  const m = getBlocajMaterie(n.materie)!;
  const lipsa = prerequisitesOf(n);
  const urmeaza = nextOf(n);
  const dependents = dependentsOf(n).filter((d) => !urmeaza.some((u) => u.slug === d.slug));
  const cereSearch = { materie: m.slug, q: n.nivelCerere, blocaj: n.slug };

  return (
    <article className="container-page py-10 lg:py-14">
      <BlocajeBreadcrumb
        items={[
          { name: "Harta Blocajelor", to: "/harta-blocajelor" },
          { name: m.name, to: `/harta-blocajelor/${m.slug}` },
          { name: n.titlu },
        ]}
      />

      <header className="max-w-3xl">
        <p className="text-xs font-medium text-primary">
          {m.name} · {claseLabel(n.clase)}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{n.titlu}</h1>
        <blockquote className="mt-4 border-l-4 border-primary/40 pl-4 text-lg italic leading-relaxed text-muted-foreground">
          „{n.blocaj}”
        </blockquote>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="min-w-0 space-y-12">
          <section aria-labelledby="simptome">
            <SectionTitle icon={AlertCircle}>Semne că blocajul vine de aici</SectionTitle>
            <ul className="mt-4 space-y-2">
              {n.simptome.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-2 text-sm leading-relaxed text-foreground/90"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="lipsa">
            <SectionTitle icon={GitBranch}>Noțiunea care lipsește de obicei</SectionTitle>
            {lipsa.length ? (
              <>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Înainte să refaci exerciții de tipul acesta, verifică dacă stăpânești noțiunile de
                  mai jos. De cele mai multe ori, blocajul se rezolvă acolo, nu aici.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {lipsa.map((p) => (
                    <BlocajCard key={p.slug} n={p} showMaterie={p.materie !== n.materie} />
                  ))}
                </div>
              </>
            ) : (
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Acesta este un punct de pornire: nu se sprijină pe alte noțiuni din hartă. Dacă
                explicația de mai jos nu e clară, problema e de obicei de exercițiu — rezolvă
                exemplul pe caiet, pas cu pas.
              </p>
            )}
          </section>

          <section aria-labelledby="explicatie">
            <SectionTitle icon={Lightbulb}>Explicația, pe scurt</SectionTitle>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-foreground/90">
              {n.explicatie.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="exemplu">
            <SectionTitle icon={BookOpen}>Exemplu rezolvat</SectionTitle>
            <div className="card-soft mt-4 p-5 sm:p-6">
              <p className="font-medium leading-relaxed">{n.exemplu.enunt}</p>
              <ol className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/90">
                {n.exemplu.pasi.map((p, i) => (
                  <li key={p} className="flex gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary-soft text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground">
                Răspuns: {n.exemplu.raspuns}
              </p>
            </div>
          </section>

          <section aria-labelledby="verificare">
            <SectionTitle icon={CheckCircle2}>Verificare rapidă</SectionTitle>
            <p className="mt-2 text-sm text-muted-foreground">
              Răspunsul rămâne doar în pagina ta; nu este trimis sau salvat.
            </p>
            <div className="mt-4">
              <VerificareRapida v={n.verificare} />
            </div>
          </section>

          {(urmeaza.length > 0 || dependents.length > 0) && (
            <section aria-labelledby="urmeaza">
              <SectionTitle icon={Link2}>Ce poți învăța în continuare</SectionTitle>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Noțiunile de mai jos se construiesc pe <strong>{n.titlu.toLowerCase()}</strong>.
                Dacă verificarea a ieșit bine, poți trece la ele.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[...urmeaza, ...dependents].map((x) => (
                  <BlocajCard key={x.slug} n={x} showMaterie={x.materie !== n.materie} />
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="card-soft bg-gradient-to-br from-primary-soft to-card p-5">
            <h2 className="inline-flex items-center gap-2 font-bold">
              <MessageSquareText className="h-5 w-5 text-primary" /> Nu se leagă nici așa?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Postezi gratuit o cerere pentru {m.nameLower}, cu blocajul acesta precompletat.
              Profesorii interesați îți trimit propuneri cu tarif și program; tu alegi și discuți
              direct.
            </p>
            <Link to="/meditatii" search={cereSearch} className="btn-primary mt-4 h-11 w-full px-5">
              Găsește un meditator <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to={m.landing} className="btn-outline mt-2 h-11 w-full px-5">
              Meditații {m.nameLower}
            </Link>
          </div>
          <div className="card-soft p-5 text-sm">
            <p className="font-semibold">Pe hartă</p>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li>
                <Link
                  to="/harta-blocajelor/$materie"
                  params={{ materie: m.slug }}
                  className="hover:text-primary hover:underline"
                >
                  Toate blocajele la {m.nameLower}
                </Link>
              </li>
              <li>
                <Link to="/harta-blocajelor" className="hover:text-primary hover:underline">
                  Alege altă materie
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}

// Hub per materie: /bac/$materie — doar anii care au efectiv subiect în arhiva noastră.
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { getBacSubject, BAC_SESSIONS, BAC_YEARS } from "@/data/bac-catalog";
import { getVarianteMaterie, type VariantaDisponibila } from "@/lib/bac-content.functions";
import { BacCountdown } from "@/components/bac-countdown";

const SITE = "https://meditatiidirect.ro";

interface AnDisponibil {
  an: number;
  sesiuni: string[];
  cuBarem: number;
}

function groupaPeAni(variante: VariantaDisponibila[]): AnDisponibil[] {
  const map = new Map<number, AnDisponibil>();
  for (const v of variante) {
    const row = map.get(v.an) ?? { an: v.an, sesiuni: [], cuBarem: 0 };
    row.sesiuni.push(BAC_SESSIONS.find((s) => s.slug === v.sesiune)?.label ?? v.sesiune);
    if (v.are_barem) row.cuBarem += 1;
    map.set(v.an, row);
  }
  return [...map.values()].sort((a, b) => b.an - a.an);
}

export const Route = createFileRoute("/bac/$materie/")({
  loader: async ({ params }) => {
    const subject = getBacSubject(params.materie);
    if (!subject) throw notFound();
    let variante: VariantaDisponibila[] = [];
    try {
      const r = await getVarianteMaterie({ data: { materie: subject.slug } });
      variante = r.variante;
    } catch {
      /* fără date — pagina afișează doar materiile disponibile */
    }
    return { subject, variante, ani: groupaPeAni(variante) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { subject, ani } = loaderData;
    const url = `${SITE}/bac/${subject.slug}`;
    const title = `Subiecte BAC ${subject.name} ${ani.length ? `${ani[0].an}–${ani[ani.length - 1].an}` : "2010–2026"} — PDF cu barem | MeditatiiDirect.ro`;
    const desc = ani.length
      ? `Arhivă subiecte BAC ${subject.nameLower}: ${ani.length} ani cu subiect verificat (${ani.map((a) => a.an).join(", ")}), cu sau fără barem. PDF gratuit, fără cont.`
      : `Arhivă subiecte BAC ${subject.nameLower}: încă nu avem un subiect verificat pentru această materie. Vezi celelalte materii disponibile.`;
    return {
      meta: [
        { title }, { name: "description", content: desc },
        ...(ani.length ? [] : [{ name: "robots", content: "noindex, follow" }]),
        { name: "keywords", content: `subiecte bac ${subject.nameLower}, variante bac ${subject.nameLower}, barem bac ${subject.nameLower}, bacalaureat ${subject.nameLower}` },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{
        type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org", "@type": "CollectionPage",
          name: title, description: desc, url, inLanguage: "ro-RO",
          about: subject.name,
          hasPart: ani.map((a) => ({
            "@type": "LearningResource",
            name: `Subiecte BAC ${subject.name} ${a.an}`,
            url: `${SITE}/bac/${subject.slug}/${a.an}`,
            learningResourceType: "Exam",
            educationalLevel: "Liceu — clasa a XII-a",
            isAccessibleForFree: true,
          })),
        }),
      }],
    };
  },
  component: BacSubjectHub,
});

function BacSubjectHub() {
  const { subject, ani } = Route.useLoaderData();
  const aniDisponibili = new Set(ani.map((a) => a.an));
  const aniLipsa = BAC_YEARS.filter((y) => !aniDisponibili.has(y));

  return (
    <main className="container-page py-10 lg:py-14">
      <Link to="/subiecte-bac" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Toate materiile BAC
      </Link>
      <header className="mt-4 max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Subiecte BAC {subject.name} — arhivă</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          {ani.length ? (
            <>Am găzduit și verificat <strong>{ani.length}</strong> {ani.length === 1 ? "an" : "ani"} de subiecte la
              {" "}<strong>{subject.nameLower}</strong> ({subject.short}): {ani.map((a) => a.an).join(", ")}.
              {" "}Baremul apare doar acolo unde l-am găsit și verificat.</>
          ) : (
            <>Pentru <strong>{subject.nameLower}</strong> ({subject.short}) încă nu avem niciun subiect verificat în arhivă.
              {" "}Publicăm doar fișiere citite și verificate — spunem sincer când ceva lipsește.</>
          )}
        </p>
      </header>
      <BacCountdown className="mt-6" />

      <nav aria-label="Unelte" className="mt-6 flex flex-wrap gap-2">
        <Link to="/simulare-bac/$materie" params={{ materie: subject.slug }} className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
          Simulare cronometrată la {subject.nameLower}
        </Link>
        <Link to="/rezolvari" className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">Rezolvări explicate</Link>
        <Link to="/calculator-medie-bac" className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">Calculator medie BAC</Link>
      </nav>

      {ani.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold flex items-center gap-2"><GraduationCap className="h-5 w-5" /> Selectează anul</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {ani.map((a) => (
              <li key={a.an}>
                <Link to="/bac/$materie/$an" params={{ materie: subject.slug, an: String(a.an) }}
                  className="card-soft block p-4 hover:border-primary/40">
                  <p className="font-semibold">BAC {subject.nameLower} {a.an}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {a.sesiuni.length} {a.sesiuni.length === 1 ? "sesiune" : "sesiuni"} · {a.cuBarem} {a.cuBarem === 1 ? "barem" : "bareme"}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {aniLipsa.length > 0 && (
        <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
          {!ani.length ? "Niciun an nu este încă disponibil" : "Încă nu avem fișiere verificate pentru"}: {aniLipsa.join(", ")}.
          {" "}Pe măsură ce găsim și verificăm subiectele oficiale, le publicăm aici.
        </p>
      )}

      <section className="mt-10 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6 sm:p-8">
        <h2 className="text-xl font-semibold">Pregătire BAC {subject.nameLower} cu profesor</h2>
        <p className="mt-2 text-muted-foreground">
          Descrii o dată ce ai nevoie. Profesorii de {subject.nameLower} răspund cu propuneri care au dată, oră și tarif,
          apoi discutați în chat înainte să alegeți.
        </p>
        <Link to="/meditatii" className="mt-4 inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
          Cere ofertă pentru {subject.nameLower}
        </Link>
      </section>
    </main>
  );
}

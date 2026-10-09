// Hub global BAC: /bac — toate materiile, cu câte variante reale avem pentru fiecare.
import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { BAC_SUBJECTS } from "@/data/bac-catalog";
import { getArhivaBAC } from "@/lib/bac-content.functions";
import { AdsterraBanner728, AdsterraNativeBanner } from "@/components/ads/adsterra";
import { AdSenseSlot } from "@/components/ads/adsense";
import { BacCountdown } from "@/components/bac-countdown";
import { NewsletterSignup } from "@/components/newsletter-signup";

const SITE = "https://meditatiidirect.ro";

interface ContorMaterie {
  materie: string;
  ani: number;
  sesiuni: number;
  cuBarem: number;
  ultimul_an: number;
}

export const Route = createFileRoute("/bac/")({
  loader: async () => {
    let materii: ContorMaterie[] = [];
    try {
      const r = await getArhivaBAC();
      materii = r.materii;
    } catch {
      /* fără date — afișăm materiile fără numărătoare */
    }
    return { materii };
  },
  head: ({ loaderData }) => {
    const url = `${SITE}/bac`;
    const materii = loaderData?.materii ?? [];
    const total = materii.reduce((s, m) => s + m.sesiuni, 0);
    const cuSubiecte = materii.filter((m) => m.sesiuni > 0).length;
    const title = `Subiecte BAC cu barem — arhivă PDF gratuită | MeditatiiDirect.ro`;
    const desc = total
      ? `Arhivă de subiecte și bareme de bacalaureat: ${total} variante verificate în ${cuSubiecte} materii, PDF gratuit, fără cont. Adăugăm variante pe măsură ce le verificăm.`
      : `Arhivă de subiecte și bareme de bacalaureat în PDF, gratuit și fără cont. Publicăm doar fișiere verificate.`;
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
  const { materii } = Route.useLoaderData();
  const contor = new Map(materii.map((m) => [m.materie, m]));
  const total = materii.reduce((s, m) => s + m.sesiuni, 0);
  const cuSubiecte = materii.filter((m) => m.sesiuni > 0).length;

  return (
    <main className="container-page py-10 lg:py-14">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Subiecte BAC cu barem — arhivă PDF</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          {total
            ? <>Am verificat și găzduit <strong>{total}</strong> de variante de bacalaureat în <strong>{cuSubiecte}</strong> materii,
                cu subiect și, unde există, barem. PDF gratuit, fără cont.</>
            : <>Arhivă de subiecte și bareme de bacalaureat în PDF, gratuit și fără cont.
                Publicăm doar fișierele pe care le-am citit și verificat.</>}
        </p>
      </header>
      <BacCountdown className="mt-6" />

      <nav aria-label="Unelte BAC" className="mt-6 flex flex-wrap gap-2">
        <Link to="/rezolvari" className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">Rezolvări explicate</Link>
        <Link to="/calculator-medie-bac" className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">Calculator medie BAC</Link>
        <Link to="/calculator-nota-admitere" className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary/40">Calculator notă admitere</Link>
      </nav>

      <AdsterraBanner728 className="mt-6" />
      <section className="mt-8">
        <h2 className="text-xl font-semibold flex items-center gap-2"><BookOpen className="h-5 w-5" /> Alege materia</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {BAC_SUBJECTS.map((s) => {
            const c = contor.get(s.slug);
            return (
              <li key={s.slug}>
                <Link to="/bac/$materie" params={{ materie: s.slug }} className="card-soft block p-5 hover:border-primary/40">
                  <p className="text-lg font-semibold">{s.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.short}</p>
                  <p className="mt-2 text-xs text-primary">
                    {c && c.sesiuni > 0
                      ? `${c.ani} ${c.ani === 1 ? "an" : "ani"} · ${c.sesiuni} ${c.sesiuni === 1 ? "sesiune" : "sesiuni"} →`
                      : "încă fără subiect verificat →"}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <NewsletterSignup className="mt-12" />
      <AdsterraNativeBanner className="mt-10" />
      <AdSenseSlot format="auto" className="mt-6" />
    </main>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Bot, Clock, MapPin, Sparkles, Target } from "lucide-react";
import { faqJsonLd } from "@/components/seo-landing";
import { BlocajeBreadcrumb } from "@/components/blocaje/blocaj-card";
import { LoginGate } from "@/components/ai/login-gate";
import { SimulareAi } from "@/components/ai/simulare-ai";
import { breadcrumbLd, SITE } from "@/lib/blocaje-seo";
import { AI_MATERII, AI_MATERIE_SLUGS, LIMITA_TESTE_ZI, type AiMaterie } from "@/lib/simulare-ai";

const PATH = "/simulare-ai";
const URL = `${SITE}${PATH}`;
const TITLE = "Simulare test online cu corectare AI: notă + explicații | MeditatiiDirect.ro";
const DESCRIPTION =
  "Alegi materia, clasa și durata, iar AI-ul îți generează un test nou, cu cronometru. La final primești nota și afli, pentru fiecare greșeală, unde ai greșit, ce și de ce. Gratuit, pentru clasele V–XII, Evaluare Națională și BAC.";

const FAQS = [
  {
    q: "Cum funcționează simularea cu AI?",
    a: "Alegi materia, clasa, durata (15, 30, 45 sau 60 de minute) și, dacă vrei, un capitol. Primești un test nou, cu întrebări grilă și probleme cu răspuns scris. Cronometrul pornește imediat, iar când predai lucrarea (sau când expiră timpul) testul e corectat automat.",
  },
  {
    q: "Cum se calculează nota?",
    a: "Grilele se corectează exact, după răspunsul corect. Problemele cu răspuns scris sunt punctate de AI după un barem pe pași, cu punctaj parțial. Nota este pe scara 1–10, cu un punct din oficiu, ca la examenele naționale.",
  },
  {
    q: "Ce primesc după corectare?",
    a: "Pentru fiecare răspuns greșit: unde a apărut greșeala, ce anume e greșit și de ce, plus răspunsul corect sau rezolvarea model. Primești și lista noțiunilor de recuperat, cu link spre explicațiile din Harta Blocajelor, și poți discuta greșelile cu Meditatorul AI.",
  },
  {
    q: "Este gratuit? De ce trebuie cont?",
    a: `Da, poți face ${LIMITA_TESTE_ZI} teste pe zi gratuit. Contul ne ajută să păstrăm limita zilnică corectă pentru toți elevii; nu publicăm rezultatele.`,
  },
  {
    q: "Pot avea încredere în întrebări?",
    a: "Testele sunt generate și corectate de AI, cu reguli stricte de verificare, dar pot apărea și greșeli. Folosește simularea ca antrenament; pentru subiectele oficiale vezi arhiva BAC și Evaluare Națională, iar pentru lămuriri un meditator.",
  },
];

export const Route = createFileRoute("/simulare-ai")({
  validateSearch: (s: Record<string, unknown>): { materie?: AiMaterie } => ({
    materie:
      typeof s.materie === "string" && (AI_MATERIE_SLUGS as string[]).includes(s.materie)
        ? (s.materie as AiMaterie)
        : undefined,
  }),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbLd([{ name: "Simulare cu AI", path: PATH }])),
      },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LearningResource",
          name: "Simulare test online cu corectare AI",
          description: DESCRIPTION,
          url: URL,
          inLanguage: "ro-RO",
          learningResourceType: "Practice quiz",
          isAccessibleForFree: true,
          educationalLevel: "Clasele V–XII, Evaluare Națională, Bacalaureat",
          about: AI_MATERII.map((m) => m.name),
          provider: { "@type": "Organization", name: "MeditatiiDirect", url: SITE },
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { materie } = Route.useSearch();
  return (
    <article className="container-page py-10 lg:py-14">
      <BlocajeBreadcrumb items={[{ name: "Simulare cu AI" }]} />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <header>
          <p className="inline-flex items-center gap-1 text-xs font-medium text-primary">
            <Sparkles className="h-4 w-4" /> Nou · test generat pentru tine
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Simulare test cu corectare AI
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Alegi materia, clasa și cât timp ai. Primești un test nou, lucrezi cu cronometrul
            pornit, iar la final afli nota și, pentru fiecare greșeală,{" "}
            <strong className="text-foreground">unde, ce și de ce</strong> ai greșit.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              { icon: Clock, t: "15, 30, 45 sau 60 de minute, cu predare automată la final" },
              {
                icon: Target,
                t: "Notă de la 1 la 10, grile corectate exact, probleme punctate pe barem",
              },
              { icon: MapPin, t: "Fiecare greșeală explicată: unde apare, ce e greșit, de ce" },
              { icon: Bot, t: "Discuți greșelile cu Meditatorul AI sau ceri un meditator real" },
            ].map(({ icon: Icon, t }) => (
              <li key={t} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> <span>{t}</span>
              </li>
            ))}
          </ul>
        </header>
        <LoginGate ce="începi simularea">
          <SimulareAi materieInitiala={materie} />
        </LoginGate>
      </div>

      <section className="mt-16 max-w-3xl" aria-labelledby="faq">
        <h2 id="faq" className="text-2xl font-bold">
          Întrebări frecvente
        </h2>
        <div className="mt-5 space-y-3">
          {FAQS.map((f) => (
            <details key={f.q} className="card-soft p-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-lg font-semibold">Simulare cu AI pe materii</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {AI_MATERII.map((m) => (
            <Link
              key={m.slug}
              to="/simulare-ai"
              search={{ materie: m.slug }}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
            >
              {m.name}
            </Link>
          ))}
          <Link
            to="/simulare-bacalaureat"
            className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
          >
            Simulare BAC pe subiecte oficiale
          </Link>
          <Link
            to="/meditator-ai"
            className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-primary/40 hover:text-primary"
          >
            Meditatorul AI
          </Link>
        </div>
      </section>
    </article>
  );
}

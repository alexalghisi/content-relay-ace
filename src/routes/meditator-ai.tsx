import { createFileRoute, Link } from "@tanstack/react-router";
import { Bot, Clock, MessageSquareText, ShieldCheck } from "lucide-react";
import { faqJsonLd } from "@/components/seo-landing";
import { BlocajeBreadcrumb } from "@/components/blocaje/blocaj-card";
import { LoginGate } from "@/components/ai/login-gate";
import { MeditatorAi } from "@/components/ai/meditator-ai";
import { breadcrumbLd, SITE } from "@/lib/blocaje-seo";
import { LIMITA_MESAJE_ZI } from "@/lib/simulare-ai";

const PATH = "/meditator-ai";
const URL = `${SITE}${PATH}`;
const TITLE = "Meditator AI gratuit: explicații pas cu pas la orice materie | MeditatiiDirect.ro";
const DESCRIPTION =
  "Întreabă Meditatorul AI orice de la școală: matematică, română, engleză, fizică, chimie, biologie, informatică. Explică pas cu pas, pe programa din România, și te ajută să înțelegi, nu doar să copiezi rezultatul.";

const FAQS = [
  {
    q: "Ce poate face Meditatorul AI?",
    a: "Explică noțiuni pe înțeles, rezolvă împreună cu tine exerciții pas cu pas, îți verifică rezolvarea și te ajută să-ți structurezi un eseu. La final îți pune o întrebare scurtă ca să vadă dacă ai înțeles.",
  },
  {
    q: "Îmi face tema?",
    a: "Te ghidează spre rezolvare. Îți dă rezolvarea completă când o ceri după ce ai încercat sau ca să-ți verifici răspunsul, pentru că scopul este să înveți.",
  },
  {
    q: "Este gratuit?",
    a: `Da, ai ${LIMITA_MESAJE_ZI} de mesaje pe zi gratuit, cu un cont MeditatiiDirect. Conversațiile nu sunt publicate.`,
  },
  {
    q: "Înlocuiește un profesor?",
    a: "Nu. AI-ul poate greși și nu te cunoaște ca un profesor. E util pentru întrebări rapide; pentru recuperare sau pregătire de examen, un meditator real îți face un plan și te urmărește în timp.",
  },
];

export const Route = createFileRoute("/meditator-ai")({
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
        children: JSON.stringify(breadcrumbLd([{ name: "Meditator AI", path: PATH }])),
      },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <article className="container-page py-10 lg:py-14">
      <BlocajeBreadcrumb items={[{ name: "Meditator AI" }]} />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
        <header>
          <p className="inline-flex items-center gap-1 text-xs font-medium text-primary">
            <Bot className="h-4 w-4" /> Nou · disponibil oricând
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Meditatorul AI
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Un profesor răbdător, la orice oră: îți explică pas cu pas, pe programa din România, și
            verifică dacă ai înțeles. Vii de la o simulare? Îți ia greșelile pe rând.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              {
                icon: MessageSquareText,
                t: "Explicații pe înțeles, cu exemplu și întrebare de verificare",
              },
              { icon: Clock, t: `${LIMITA_MESAJE_ZI} de mesaje pe zi, gratuit` },
              { icon: ShieldCheck, t: "Doar subiecte școlare; conversațiile nu se publică" },
            ].map(({ icon: Icon, t }) => (
              <li key={t} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> <span>{t}</span>
              </li>
            ))}
          </ul>
          <Link to="/simulare-ai" className="btn-outline mt-6 h-11 px-5">
            Fă mai întâi o simulare cu notă
          </Link>
        </header>
        <LoginGate ce="vorbești cu Meditatorul AI">
          <MeditatorAi />
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
        <p className="mt-6 text-sm text-muted-foreground">
          Preferi un om?{" "}
          <Link to="/meditatii" className="font-medium text-primary hover:underline">
            Postează gratuit o cerere de meditații
          </Link>{" "}
          și primești propuneri de la profesori.
        </p>
      </section>
    </article>
  );
}

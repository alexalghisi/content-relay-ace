import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Copy, Gift, Share2, Users } from "lucide-react";
import { faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/invita-un-coleg";
const TITLE = "Invită un coleg profesor — program de recomandare | MeditatiiDirect.ro";
const DESC =
  "Recomandă MeditatiiDirect.ro unui coleg profesor: el primește cont gratuit, tu primești o lună de acces prioritar la cererile elevilor. Mesaje gata scrise, le trimiți într-un click.";

const SHARE_URL = "https://meditatiidirect.ro/vreau-sa-dau-meditatii";

const templates = [
  {
    label: "WhatsApp / SMS",
    text: `Salut! Dau meditații prin MeditatiiDirect.ro și mi se pare mult mai simplu decât anunțurile clasice: elevii postează ce au nevoie (materie, nivel, oraș sau online, buget), iar eu trimit o propunere cu data, ora și tariful meu. Contul e gratuit și nu se reține comision. Dacă te interesează: ${SHARE_URL}`,
  },
  {
    label: "Grup de Facebook pentru profesori",
    text: `Bună tuturor! Pentru cine caută elevi noi: pe MeditatiiDirect.ro modelul e invers față de site-urile clasice — elevul postează cererea, profesorul trimite propunerea (dată, oră, tarif, mesaj). Nu concurezi într-o listă lungă de profile, răspunzi doar la cererile care ți se potrivesc. Cont gratuit, fără comision, tu stabilești prețul. Mai multe aici: ${SHARE_URL}`,
  },
  {
    label: "LinkedIn",
    text: `Predau și colaborez cu MeditatiiDirect.ro, o platformă românească de meditații construită pe un model simplu: elevul descrie ce are nevoie, profesorii trimit propuneri concrete (dată, oră, tarif), iar elevul alege și discută direct în chat. Fără comision, fără abonament. Dacă predai sau cunoști profesori care caută elevi: ${SHARE_URL}`,
  },
  {
    label: "Mesaj către un coleg din școală",
    text: `Salut! Știu că dai ore particulare — îți las un site pe care îl folosesc: MeditatiiDirect.ro. Primești cererile elevilor direct (materie, nivel, oraș, buget) și răspunzi cu propunerea ta. E gratuit și nu îți ia comision din tarif. Înscriere: ${SHARE_URL}`,
  },
  {
    label: "Anunț pentru cancelarie / grup de studenți",
    text: `Cauți elevi pentru meditații? Pe MeditatiiDirect.ro elevii postează cererile, iar tu trimiți propunerea ta cu dată, oră și tarif. Cont gratuit, zero comision, program stabilit de tine. Te înscrii în mai puțin de un minut: ${SHARE_URL}`,
  },
];

const faqs = [
  {
    q: "Ce primește colegul pe care îl invit?",
    a: "Cont gratuit de profesor, profil public dacă îl publică, acces la cererile deschise ale elevilor și posibilitatea de a trimite propuneri. Fără comision din tarif.",
  },
  {
    q: "Ce primesc eu pentru recomandare?",
    a: "O lună de acces prioritar la cererile noi din materiile tale, după ce colegul își publică profilul și trimite prima propunere. Ne scrii pe contact@meditatiidirect.ro cu numele colegului.",
  },
  {
    q: "Pot invita oricâți colegi?",
    a: "Da. Invitațiile trebuie trimise personal, de tine, către oameni pe care îi cunoști. Nu folosim și nu acceptăm liste de contacte colectate automat.",
  },
];

export const Route = createFileRoute("/invita-un-coleg")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: InvitePage,
});

function CopyBlock({ label, text }: { label: string; text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="card-soft p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold">{label}</h3>
        <button
          type="button"
          className="btn-outline h-9 shrink-0 px-3 text-xs"
          onClick={() => {
            void navigator.clipboard?.writeText(text).then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            });
          }}
        >
          {copied ? <Check className="mr-1 h-3.5 w-3.5" /> : <Copy className="mr-1 h-3.5 w-3.5" />}
          {copied ? "Copiat" : "Copiază"}
        </button>
      </div>
      <p className="mt-3 whitespace-pre-line text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}

function InvitePage() {
  return (
    <article className="container-page py-10 lg:py-14">
      <nav aria-label="Breadcrumb" className="mb-5 text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li><a href="/" className="hover:text-primary">Acasă</a></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground/80">Invită un coleg</li>
        </ol>
      </nav>

      <header className="max-w-3xl">
        <p className="inline-flex items-center gap-1 text-xs font-medium text-primary">
          <Gift className="h-4 w-4" /> Program de recomandare
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Invită un coleg profesor
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Cei mai buni profesori vin din recomandări. Trimite linkul de mai jos unui coleg care dă meditații: el
          primește cont gratuit, iar tu primești o lună de acces prioritar la cererile noi din materiile tale.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <code className="rounded-lg border border-border bg-muted/40 px-3 py-2 text-sm">{SHARE_URL}</code>
          <button
            type="button"
            className="btn-primary h-10 px-4 text-sm"
            onClick={() => void navigator.clipboard?.writeText(SHARE_URL)}
          >
            <Share2 className="mr-1.5 h-4 w-4" /> Copiază linkul
          </button>
        </div>
      </header>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <div className="card-soft p-6">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
            <Share2 className="h-5 w-5" />
          </span>
          <h2 className="mt-4 font-bold">1. Trimiți linkul</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Pe WhatsApp, în cancelarie, într-un grup de profesori sau pe LinkedIn. Ai mai jos mesaje gata scrise.
          </p>
        </div>
        <div className="card-soft p-6">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
            <Users className="h-5 w-5" />
          </span>
          <h2 className="mt-4 font-bold">2. Colegul își face cont</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Completează profilul, adaugă disponibilitatea și trimite prima propunere la o cerere.
          </p>
        </div>
        <div className="card-soft p-6">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
            <Gift className="h-5 w-5" />
          </span>
          <h2 className="mt-4 font-bold">3. Primești bonusul</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Ne scrii pe contact@meditatiidirect.ro cu numele colegului și îți activăm luna de acces prioritar.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">Mesaje gata de trimis</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Copiază varianta potrivită și personalizeaz-o. Trimite-le doar oamenilor pe care îi cunoști.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {templates.map((t) => <CopyBlock key={t.label} {...t} />)}
        </div>
      </section>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-bold">Întrebări frecvente</h2>
        <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5 open:bg-muted/30">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                {f.q}<span className="text-muted-foreground transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="card-soft mt-14 bg-gradient-to-br from-primary-soft to-card p-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold">Nu ai încă un cont de profesor?</h2>
            <p className="mt-1 text-sm text-muted-foreground">Îl faci în mai puțin de un minut, gratuit.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/signup" className="btn-primary h-11 px-5">Creează cont</Link>
            <Link to="/vreau-sa-dau-meditatii" className="btn-outline h-11 px-5">Vreau să dau meditații</Link>
          </div>
        </div>
      </section>
    </article>
  );
}

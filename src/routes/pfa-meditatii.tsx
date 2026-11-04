import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

// Google Trends (RO, 12 luni): „pfa meditatii” este o căutare în creștere.
export const Route = createFileRoute("/pfa-meditatii")(
  seoPage({
    path: "/pfa-meditatii",
    title: "PFA pentru meditații: ce trebuie să știi ca profesor | MeditatiiDirect.ro",
    description:
      "Vrei să dai meditații legal? Ce înseamnă PFA sau întreprindere individuală pentru meditații, ce întrebi la contabil și cum găsești primii elevi pe MeditatiiDirect.ro.",
    h1: "PFA pentru meditații: ghid pentru profesori",
    intro:
      "Dacă dai meditații în mod regulat, veniturile trebuie declarate. Cea mai folosită formă este PFA-ul (persoană fizică autorizată). Mai jos ai pașii generali și întrebările de pus unui contabil.",
    bullets: [
      "Pașii generali pentru a înființa un PFA",
      "Ce să clarifici cu un contabil înainte",
      "Cum îți găsești elevii după înființare",
    ],
    sections: [
      {
        title: "De ce PFA pentru meditații",
        body: (
          <p>
            Meditațiile ținute constant, contra cost, sunt o activitate independentă. Un PFA îți
            permite să emiți documente pentru plăți, să lucrezi cu părinți care cer chitanță sau
            factură și să ai veniturile în regulă la ANAF.
          </p>
        ),
      },
      {
        title: "Pașii generali",
        body: (
          <ol className="list-decimal space-y-1 pl-5">
            <li>Alegi codul CAEN potrivit pentru alte forme de învățământ.</li>
            <li>Depui actele la Registrul Comerțului (online sau la ghișeu).</li>
            <li>
              Alegi sistemul de impozitare: normă de venit (dacă județul o permite) sau sistem real.
            </li>
            <li>Depui anual Declarația unică la ANAF.</li>
          </ol>
        ),
      },
      {
        title: "Ce întrebi la contabil",
        body: (
          <p>
            Ce sistem de impozitare e mai avantajos pentru venitul tău estimat, ce contribuții
            (CASS, CAS) datorezi la pragurile din anul curent și dacă activitatea ta e compatibilă
            cu un contract de profesor titular. Regulile fiscale se schimbă, așa că verifică
            pragurile actuale.
          </p>
        ),
      },
    ],
    faqs: [
      {
        q: "Am nevoie de PFA ca să dau meditații?",
        a: "Pentru venituri obținute constant din meditații ai nevoie de o formă legală de organizare, cel mai des PFA sau întreprindere individuală. Un contabil îți poate spune ce variantă ți se potrivește.",
      },
      {
        q: "Pot da meditații dacă sunt profesor titular?",
        a: "Da, mulți profesori dau meditații în afara orelor de la școală. Verifică regulile școlii și pe cele privind elevii proprii.",
      },
      {
        q: "Unde găsesc elevi după ce am PFA-ul?",
        a: "Îți faci gratuit cont de profesor pe MeditatiiDirect.ro și trimiți propuneri la cererile elevilor din zona ta sau online.",
      },
    ],
    ctaPrimary: { to: "/pentru-profesori", label: "Devino profesor pe platformă" },
    related: [
      { to: "/castiga-din-meditatii", label: "Câștigă din meditații" },
      { to: "/vreau-sa-dau-meditatii", label: "Vreau să dau meditații" },
      { to: "/cereri", label: "Cereri de la elevi" },
    ],
  }),
);

import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";

const URL = "https://meditatiidirect.ro/admitere";
const TITLE = "Admitere facultate 2026 — Medicină, UPB, UTCN, Drept | MeditatiiDirect.ro";
const DESC = "Pregătire admitere facultate 2026: Medicină (UMF), Politehnică (UPB), UTCN, Drept, ASE. Profesori specializați + grile și subiecte model PDF.";

const faqs = [
  { q: "Care sunt cele mai grele admiteri în 2026?", a: "Statistic, Medicina (UMF Carol Davila), Calculatoare UPB și Drept București au cele mai mari rate de respingere. Rate de admitere sub 20% la unele specializări." },
  { q: "Când încep pregătirea pentru admitere?", a: "Ideal cu 9–12 luni înainte. Pentru Medicină chiar din vara dinaintea clasei a XII-a. Cu un meditator dedicat poți recupera și în 4–6 luni." },
  { q: "Mai contează BAC-ul la admitere?", a: "Da, foarte mult. Multe universități admit exclusiv pe baza notei de BAC (cu pondere mare pe materii specifice). Pentru cele cu concurs, BAC-ul rămâne adesea criteriu de departajare." },
];

export const Route = createFileRoute("/admitere")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) }],
  }),
  component: () => (
    <SeoLanding
      h1="Admitere facultate 2026"
      intro="Pregătire completă pentru admiterea la facultățile de top din România: Medicină, Politehnică, UTCN, Drept, ASE. Profesori specializați pe fiecare profil și materiale gratuite."
      bullets={[
        "Medicină — UMF București, Cluj, Iași, Timișoara",
        "Politehnică — UPB, UTCN, UPT, ASE",
        "Drept — București, Cluj, Iași",
        "ASE — Cibernetică, Finanțe, Marketing",
        "Profesori cu experiență în pregătire pentru concurs",
      ]}
      ctaPrimary={{ to: "/meditatii", label: "Caută profesor admitere" }}
      pdfs={[
        { href: "/pdfs/admitere-2026-grile-medicina.pdf", title: "Grile Medicină 2026" },
        { href: "/pdfs/admitere-2026-upb-matematica-fizica.pdf", title: "UPB — Matematică + Fizică" },
        { href: "/pdfs/admitere-2026-utcn-matematica.pdf", title: "UTCN — Matematică" },
        { href: "/pdfs/admitere-2026-drept-simulare.pdf", title: "Drept — Simulare" },
      ]}
      faqs={faqs}
      related={[
        { to: "/grile-admitere-medicina-2026", label: "Grile Medicină 2026" },
        { to: "/grile-medicina", label: "Grile medicină" },
        { to: "/grile-upb", label: "Grile UPB" },
        { to: "/simulare-utcn-2026", label: "Simulare UTCN" },
        { to: "/simulare-drept-2026", label: "Simulare Drept" },
        { to: "/subiecte-admitere", label: "Subiecte admitere" },
      ]}
    />
  ),
});

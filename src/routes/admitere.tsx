import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, faqJsonLd } from "@/components/seo-landing";
import { AdmitereArchive } from "@/components/archive-list";
import { ADM_ARCHIVE } from "@/data/admitere-archive";

const URL = "https://meditatiidirect.ro/admitere";
const TITLE = "Admitere facultate 2010–2026 — Subiecte Medicină, UPB, UTCN, Drept, ASE | MeditatiiDirect.ro";
const DESC = "Arhivă subiecte admitere facultate 2010–2026: Medicină (UMF București, Cluj, Iași, Timișoara), Politehnică UPB, UTCN, ASE, Drept București/Cluj, Informatică. Peste 170 PDF-uri + meditatori verificați.";

const faqs = [
  { q: "La ce facultăți găsesc subiecte de admitere?", a: "10 facultăți de top din România: UMF București, Cluj, Iași, Timișoara (Medicină), UPB și UTCN (inginerie/calculatoare), ASE (cibernetică/finanțe), Drept București și Cluj, Informatică București — fiecare cu probe din 2010 până în 2026." },
  { q: "Care sunt cele mai grele admiteri în 2026?", a: "Statistic, Medicina (UMF Carol Davila), Calculatoare UPB, Drept București și Informatică București au cele mai mari rate de respingere — sub 20% la unele specializări." },
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
  component: Page,
});

function Page() {
  return (
    <>
      <SeoLanding
        h1="Admitere facultate 2010 – 2026"
        intro="Pregătire completă pentru admiterea la facultățile de top din România: Medicină, Politehnică, UTCN, Drept, ASE, Informatică. Profesori specializați pe fiecare profil + arhivă subiecte de admitere din 2010 până în 2026, gratis în PDF."
        bullets={[
          "Medicină — UMF București, Cluj, Iași, Timișoara",
          "Politehnică — UPB, UTCN, UPT, ASE",
          "Drept — București, Cluj",
          "Informatică & Cibernetică — Universitatea București, ASE",
          "Profesori cu experiență în pregătire pentru concurs",
          "170+ PDF-uri cu probe și strategie",
        ]}
        ctaPrimary={{ to: "/meditatii", label: "Caută profesor admitere" }}
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
      <div className="container-page">
        <AdmitereArchive items={ADM_ARCHIVE} />
      </div>
    </>
  );
}

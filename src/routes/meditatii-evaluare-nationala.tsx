import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";
import { FAQ_EN, SECTIUNI_EN } from "@/data/continut-pagini";

export const Route = createFileRoute("/meditatii-evaluare-nationala")(seoPage({
  path: "/meditatii-evaluare-nationala",
  title: "Meditații Evaluare Națională 2027 — matematică și română, online sau acasă",
  description: "Pregătire pentru Evaluarea Națională 2027 la matematică și română: ce se dă, plan până la simulare, subiecte oficiale gratuite și profesori verificați care îți trimit propuneri.",
  h1: "Meditații pentru Evaluarea Națională 2027",
  intro: "Pregătire la matematică și română pentru elevii de clasa a VIII-a: recapitularea claselor V–VII, lucru pe subiectele oficiale și simulări cronometrate. Postezi gratuit o cerere și primești propuneri de la profesori verificați, online sau acasă.",
  bullets: [
    "Matematică: algebră, geometrie, rezolvări complete pe pași",
    "Română: înțelegerea textului, gramatică, redactare",
    "Plan legat de calendarul 2027: simulare 16–18 martie, examen 22–25 iunie",
    "Modelul oficial 2027 și subiectele 2026, rezolvate pas cu pas pe site",
  ],
  ctaPrimary: { to: "/meditatii", search: { materie: "matematica" }, label: "Cere meditații pentru EN" },
  ctaSecondary: { to: "/calendar-evaluare-nationala-2027", label: "Calendar Evaluare Națională 2027" },
  sections: SECTIUNI_EN,
  faqs: FAQ_EN,
  related: [
    { to: "/subiecte-evaluare-nationala", label: "Subiecte Evaluare Națională rezolvate" },
    { to: "/subiecte-evaluare-nationala/model-2027-matematica", label: "Model EN 2027 matematică rezolvat" },
    { to: "/subiecte-evaluare-nationala/model-2027-romana", label: "Model EN 2027 română rezolvat" },
    { to: "/evaluare-nationala", label: "Evaluarea Națională: reguli și medie" },
    { to: "/calendar-evaluare-nationala-2027", label: "Calendar EN 2027" },
    { to: "/admitere-liceu-2027", label: "Admitere liceu 2027" },
    { to: "/meditatii-clasa-8", label: "Meditații clasa a VIII-a" },
    { to: "/meditatii-matematica", label: "Meditații matematică" },
    { to: "/meditatii-romana", label: "Meditații română" },
  ],
}));

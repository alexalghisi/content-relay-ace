import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/meditatii-scoala")(seoPage({
  path: "/meditatii-scoala",
  title: "Meditații Școală — Profesori Verificați pentru Toate Clasele | MeditatiiDirect.ro",
  description: "★ Meditații pentru elevi de școală generală și liceu: matematică, română, engleză, fizică, chimie. Profesori și învățători verificați, acasă sau online, de la 30 lei/oră.",
  h1: "Meditații pentru școală — clasele I–XII",
  intro: "Peste 1000 de profesori și învățători verificați oferă meditații pentru elevi de școală generală, gimnaziu și liceu. Caută după materie, oraș sau clasă și contactează direct profesorul potrivit școlii copilului tău.",
  bullets: [
    "Învățători pentru clasele I–IV — pregătire temeinică",
    "Profesori gimnaziu (V–VIII) — toate materiile școlare",
    "Profesori liceu (IX–XII) — pregătire BAC și admitere",
    "Programa școlară oficială MEN — manuale aprobate",
    "Recuperare materie, teme, teste și extemporale",
    "Acasă, la școală sau online (Zoom / Meet)",
  ],
  faqs: [
    { q: "De la ce clasă pot lua meditații pentru școală?", a: "Avem profesori și învățători pentru toate clasele, de la pregătire pentru clasa pregătitoare până la clasa a XII-a și pregătire pentru BAC." },
    { q: "Profesorii predau după programa școlară oficială?", a: "Da, toți profesorii lucrează după programa MEN și manualele aprobate de școală. Pentru fiecare elev se face un plan adaptat materiei predate la școală." },
    { q: "Cât costă o meditație pentru școală?", a: "Tarifele încep de la 30 lei/oră pentru clasele I–IV, 40–60 lei/oră pentru gimnaziu și 50–100 lei/oră pentru liceu și pregătire BAC." },
  ],
  related: [
    { to: "/meditatii-gimnaziu", label: "Meditații gimnaziu" },
    { to: "/meditatii-liceu", label: "Meditații liceu" },
    { to: "/meditatii-clasa-8", label: "Meditații clasa a 8-a" },
    { to: "/meditatii-clasa-12", label: "Meditații clasa a 12-a" },
    { to: "/meditatii-evaluare-nationala", label: "Evaluare Națională" },
    { to: "/meditatii-bac", label: "Pregătire BAC" },
  ],
}));

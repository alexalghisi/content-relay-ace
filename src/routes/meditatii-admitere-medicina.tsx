import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/meditatii-admitere-medicina")(seoPage({
  path: "/meditatii-admitere-medicina",
  title: "Meditații Admitere Medicină 2026 — UMF București, Cluj, Iași | MeditatiiDirect.ro",
  description: "Pregătire admitere UMF 2026: biologie + chimie. Profesori verificați și medici rezidenți. Grile rezolvate gratuit.",
  h1: "Meditații admitere medicină 2026",
  intro: "Pregătire pentru admitere la UMF Carol Davila, UMF Cluj, UMF Iași, UMF Timișoara. Biologie + chimie organică/anorganică cu grile-test săptămânale.",
  bullets: ["UMF București, Cluj, Iași, Timișoara, Craiova", "Biologie Anatomie + Genetică", "Chimie organică & anorganică", "Grile rezolvate + simulări lunare"],
  faqs: [
    { q: "Câte ore pe săptămână pentru admitere UMF?", a: "Recomandăm 4–6 ore/săptămână (2–3h biologie + 2–3h chimie) începute cu cel puțin 9 luni înainte de examen." },
  ],
  related: [
    { to: "/grile-medicina", label: "Grile medicină" },
    { to: "/grile-admitere-medicina-2026", label: "Grile admitere medicină 2026" },
    { to: "/meditatii-biologie", label: "Meditații biologie" },
    { to: "/meditatii-chimie", label: "Meditații chimie" },
  ],
}));

import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/meditatii-admitere-politehnica")(seoPage({
  path: "/meditatii-admitere-politehnica",
  title: "Meditații Admitere Politehnică 2027 — UPB, UTCN, UPT | MeditatiiDirect.ro",
  description: "Pregătire admitere UPB, UTCN, UPT, Politehnica Iași. Matematică + fizică/informatică cu profesori verificați. Grile gratuite.",
  h1: "Meditații admitere Politehnică 2026",
  intro: "Pregătire pentru admitere la UPB, UTCN, UPT, TUIASI. Matematică algebră + analiză, fizică sau informatică, pe subiectele de admitere din anii anteriori.",
  bullets: ["UPB București, UTCN Cluj, UPT Timișoara, TUIASI Iași", "Matematică (algebră + analiză)", "Fizică sau informatică (C++)", "Grile rezolvate + simulări"],
  related: [
    { to: "/grile-upb", label: "Grile UPB" },
    { to: "/simulare-utcn-2026", label: "Simulare UTCN 2026" },
    { to: "/meditatii-matematica", label: "Meditații matematică" },
    { to: "/meditatii-fizica", label: "Meditații fizică" },
  ],
}));

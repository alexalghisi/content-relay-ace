import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/meditatii-clasa-12")(seoPage({
  path: "/meditatii-clasa-12",
  title: "Meditații Clasa a 12-a — Pregătire BAC 2026 | MeditatiiDirect.ro",
  description: "Meditații clasa a 12-a pentru BAC 2026 și admitere facultate. Toate materiile, profesori verificați online sau la domiciliu.",
  h1: "Meditații clasa a 12-a — BAC + admitere 2026",
  intro: "Pregătire dublă pentru BAC 2026 și admitere la facultate (medicină, politehnică, drept, ASE). Plan strategic personalizat.",
  bullets: ["BAC toate filierele", "Admitere facultate paralel cu BAC", "Simulări lunare", "1000+ profesori verificați"],
  related: [
    { to: "/meditatii-bac", label: "Meditații BAC" },
    { to: "/meditatii-admitere-medicina", label: "Admitere medicină" },
    { to: "/meditatii-admitere-politehnica", label: "Admitere politehnică" },
  ],
}));

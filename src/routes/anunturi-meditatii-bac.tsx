import { createFileRoute } from "@tanstack/react-router";
import { seoPage } from "@/lib/seo-page";

export const Route = createFileRoute("/anunturi-meditatii-bac")(seoPage({
  path: "/anunturi-meditatii-bac",
  title: "Anunțuri meditații BAC 2026 — Profesori verificați | MeditatiiDirect.ro",
  description: "Cele mai noi anunțuri de meditații BAC 2026 la toate materiile. Profesori verificați, tarife transparente, contact direct.",
  h1: "Anunțuri meditații BAC 2026",
  intro: "Răsfoiește anunțurile actualizate zilnic de profesori verificați pentru pregătirea BAC 2026. Filtre după materie, oraș și tarif.",
  bullets: ["Anunțuri actualizate zilnic", "Toate materiile BAC", "Filtre după oraș + tarif + online/fizic"],
  ctaPrimary: { to: "/anunturi-meditatii", label: "Vezi toate anunțurile" },
  related: [
    { to: "/meditatii-bac", label: "Meditații BAC" },
    { to: "/simulari-bacalaureat-2026", label: "Simulări BAC 2026" },
    { to: "/anunturi-meditatii", label: "Toate anunțurile" },
  ],
}));

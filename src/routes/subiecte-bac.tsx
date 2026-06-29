import { createFileRoute, redirect } from "@tanstack/react-router";

// Pagina veche a fost unificată cu /variante-bacalaureat (același conținut).
// Păstrăm ruta ca redirect permanent pentru SEO și backlink-uri externe.
export const Route = createFileRoute("/subiecte-bac")({
  beforeLoad: () => {
    throw redirect({ to: "/variante-bacalaureat", statusCode: 301 });
  },
  head: () => ({
    meta: [
      { title: "Subiecte BAC — mutat pe Variante bacalaureat | MeditatiiDirect.ro" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "https://meditatiidirect.ro/variante-bacalaureat" }],
  }),
  component: () => null,
});

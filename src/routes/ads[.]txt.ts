import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// ads.txt pentru Google AdSense (IAB Authorized Digital Sellers).
// Citește publisher ID-ul din env. Dacă nu e setat, returnează un fișier
// gol cu instrucțiuni — astfel încât crawlerul AdSense să nu primească 404.
//
// Setează `VITE_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX` în .env pentru
// a publica linia oficială. Linia recomandată de Google:
//   google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0

export const Route = createFileRoute("/ads.txt")({
  server: {
    handlers: {
      GET: async () => {
        const client = (process.env.VITE_ADSENSE_CLIENT ||
          process.env.ADSENSE_CLIENT ||
          "") as string;
        const pubId = client.replace(/^ca-/, "").trim();

        // Returnăm întotdeauna text/plain cu o linie validă când publisher-ul e setat,
        // altfel un placeholder util pentru crawlerul AdSense (nu 404, nu HTML).
        const body = pubId
          ? `google.com, ${pubId}, DIRECT, f08c47fec0942fa0\n`
          : `# MeditatiiDirect.ro ads.txt\n# Setează secretul VITE_ADSENSE_CLIENT (ca-pub-XXXXXXXXXXXXXXXX) pentru a publica linia DIRECT.\n# Vezi: https://support.google.com/adsense/answer/7532444\n`;

        return new Response(body, {
          status: 200,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
            "X-Robots-Tag": "noindex",
          },
        });
      },

    },
  },
});

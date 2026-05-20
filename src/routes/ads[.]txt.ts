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

        const body = pubId
          ? `google.com, ${pubId}, DIRECT, f08c47fec0942fa0\n`
          : `# ads.txt placeholder — setează VITE_ADSENSE_CLIENT în env pentru a activa\n`;

        return new Response(body, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

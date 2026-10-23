// Translates visible site texts (Romanian → the visitor's language). Public, but bounded:
// at most TR_MAX_TEXTE strings / TR_MAX_TOTAL characters per request, and every string is cached
// on the edge for 30 days, so each text is paid for once per language.
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { parseTraduceri, TR_LIMBI, TR_MAX_CARACTERE, TR_MAX_TEXTE, TR_MAX_TOTAL } from "@/lib/traducere";

const body = z.object({
  lang: z.enum(Object.keys(TR_LIMBI) as [string, ...string[]]),
  texte: z.array(z.string().min(1).max(TR_MAX_CARACTERE)).min(1).max(TR_MAX_TEXTE),
});

const MODEL = () => process.env["TRADUCERE_MODEL"] || "google/gemini-2.5-flash-lite";

function edge(): Cache | undefined {
  try {
    return (globalThis as unknown as { caches?: { default?: Cache } }).caches?.default;
  } catch {
    return undefined;
  }
}

async function cheie(lang: string, text: string): Promise<Request> {
  const h = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  const hex = [...new Uint8Array(h)].map((b) => b.toString(16).padStart(2, "0")).join("");
  return new Request(`https://traduceri.meditatiidirect.ro/v1/${lang}/${hex}`);
}

function prompt(limba: string): string {
  return `You translate the user interface and content of MeditatiiDirect.ro, a Romanian tutoring marketplace, from Romanian into ${limba}.
You receive a JSON array of strings. Return ONLY a JSON array with exactly the same number of strings, in the same order, each one translated.
Rules: natural, short UI wording; keep numbers, prices (lei), dates, e-mails, URLs, emoji and punctuation; keep the brand names MeditatiiDirect, MeditatiiDirect.ro, Profesor AI and Hannah unchanged; keep Romanian exam names understandable (e.g. "Bacalaureat" → the ${limba} equivalent of the Romanian baccalaureate exam); if a string is already in ${limba} or is a proper name, return it unchanged. Never add explanations.`;
}

async function cheamaModel(lang: string, texte: string[]): Promise<string[] | null> {
  const limba = TR_LIMBI[lang];
  const key = process.env["LOVABLE_API_KEY"];
  if (key) {
    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json", "X-Lovable-AIG-SDK": "fetch" },
      body: JSON.stringify({
        model: MODEL(),
        temperature: 0.1,
        max_tokens: 8000,
        messages: [
          { role: "system", content: prompt(limba) },
          { role: "user", content: JSON.stringify(texte) },
        ],
      }),
    }).catch(() => null);
    if (res?.ok) {
      const j = (await res.json().catch(() => null)) as { choices?: { message?: { content?: string } }[] } | null;
      const out = parseTraduceri(j?.choices?.[0]?.message?.content ?? "", texte.length);
      if (out) return out;
    } else console.warn(`[traducere] gateway ${res?.status ?? "net"}`);
  }
  const g = process.env["GEMINI_API_KEY"];
  if (!g) return null;
  const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent", {
    method: "POST",
    headers: { "x-goog-api-key": g, "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: prompt(limba) }] },
      contents: [{ role: "user", parts: [{ text: JSON.stringify(texte) }] }],
      generationConfig: { temperature: 0.1, maxOutputTokens: 8000, responseMimeType: "application/json" },
    }),
  }).catch(() => null);
  if (!res?.ok) return null;
  const j = (await res.json().catch(() => null)) as { candidates?: { content?: { parts?: { text?: string }[] } }[] } | null;
  return parseTraduceri(j?.candidates?.[0]?.content?.parts?.map((p) => p.text ?? "").join("") ?? "", texte.length);
}

export const Route = createFileRoute("/api/traducere")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const p = body.safeParse(await request.json().catch(() => null));
        if (!p.success) return Response.json({ error: "Cerere invalidă." }, { status: 400 });
        const { lang, texte } = p.data;
        if (texte.reduce((n, t) => n + t.length, 0) > TR_MAX_TOTAL) return Response.json({ error: "Prea mult text." }, { status: 413 });
        const c = edge();
        const chei = await Promise.all(texte.map((t) => cheie(lang, t)));
        const out: (string | null)[] = await Promise.all(
          chei.map(async (k) => {
            const r = c ? await c.match(k).catch(() => undefined) : undefined;
            return r ? await r.text() : null;
          }),
        );
        const lipsa = texte.map((t, i) => (out[i] === null ? i : -1)).filter((i) => i >= 0);
        if (lipsa.length) {
          const tr = await cheamaModel(lang, lipsa.map((i) => texte[i]));
          if (!tr) return Response.json({ error: "Traducerea nu este disponibilă acum." }, { status: 503 });
          await Promise.all(
            lipsa.map(async (i, k) => {
              out[i] = tr[k];
              if (c) await c.put(chei[i], new Response(tr[k], { headers: { "Cache-Control": "max-age=2592000" } })).catch(() => {});
            }),
          );
        }
        return Response.json({ traduceri: out }, { headers: { "cache-control": "no-store" } });
      },
    },
  },
});

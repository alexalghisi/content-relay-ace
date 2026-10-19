// Acces server-only la Lovable AI Gateway (format Anthropic Messages) + utilitare
// pentru funcțiile AI publice: limită zilnică per cont și token criptat pentru teste.
// Nu importa acest fișier din cod de client.

export const AI_MODEL = "anthropic/claude-sonnet-5";
const GATEWAY = "https://ai.gateway.lovable.dev/v1/messages";

export class AiError extends Error {
  constructor(
    message: string,
    public userMessage: string,
  ) {
    super(message);
  }
}

type Msg = { role: "user" | "assistant"; content: string };

/** Apel non-interactiv; citește răspunsul în flux ca să nu depindă de limite de timp ale gateway-ului. */
export async function callAi(opts: {
  system: string;
  messages: Msg[];
  maxTokens: number;
}): Promise<string> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) throw new AiError("LOVABLE_API_KEY missing", "Funcția AI nu este configurată încă.");
  const res = await fetch(GATEWAY, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "X-Lovable-AIG-SDK": "fetch",
    },
    body: JSON.stringify({
      model: AI_MODEL,
      max_tokens: opts.maxTokens,
      stream: true,
      system: opts.system,
      messages: opts.messages,
    }),
  });
  if (!res.ok || !res.body) {
    const status = res.status;
    if (status === 402)
      throw new AiError(
        `gateway ${status}`,
        "Creditele AI ale platformei s-au terminat. Revino mai târziu.",
      );
    if (status === 429)
      throw new AiError(
        `gateway ${status}`,
        "Sunt multe cereri acum. Încearcă din nou peste un minut.",
      );
    throw new AiError(`gateway ${status}`, "Serviciul AI nu a răspuns. Încearcă din nou.");
  }
  const reader = res.body.getReader();
  const dec = new TextDecoder();
  let buf = "";
  let text = "";
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buf += dec.decode(value, { stream: true });
    let idx: number;
    while ((idx = buf.indexOf("\n")) >= 0) {
      const line = buf.slice(0, idx).trim();
      buf = buf.slice(idx + 1);
      if (!line.startsWith("data:")) continue;
      try {
        const ev = JSON.parse(line.slice(5));
        if (ev.type === "content_block_delta" && ev.delta?.type === "text_delta")
          text += ev.delta.text;
        else if (ev.type === "message_delta" && ev.delta?.stop_reason === "refusal")
          throw new AiError("refusal", "Nu pot răspunde la această cerere.");
        else if (ev.type === "error")
          throw new AiError(
            "stream error",
            "Serviciul AI a întâmpinat o eroare. Încearcă din nou.",
          );
      } catch (e) {
        if (e instanceof AiError) throw e;
        /* cadru incomplet — ignorat */
      }
    }
  }
  return text.trim();
}

/** Extrage primul obiect JSON dintr-un răspuns (tolerează ```json ... ```). */
export function extractJson(text: string): unknown {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end <= start)
    throw new AiError("no json", "Răspunsul AI nu a putut fi citit. Încearcă din nou.");
  try {
    return JSON.parse(text.slice(start, end + 1));
  } catch {
    throw new AiError("bad json", "Răspunsul AI nu a putut fi citit. Încearcă din nou.");
  }
}

// ── Limită zilnică per cont ───────────────────────────────────────────
// Fără tabel nou: contorul stă în cache-ul edge Cloudflare (per zi, per cont). Nu e perfect
// atomic și e per locație, dar plafonează costul; în dev (fără cache) nu limitează.

const todayRo = () => new Date(Date.now() + 3 * 3600_000).toISOString().slice(0, 10);

export async function takeQuota(
  userId: string,
  kind: string,
  limit: number,
): Promise<{ ok: boolean; left: number }> {
  try {
    const c = (globalThis as unknown as { caches?: { default?: Cache } }).caches?.default;
    if (!c) return { ok: true, left: limit };
    const req = new Request(`https://quota.meditatiidirect.ro/${kind}/${todayRo()}/${userId}`);
    const hit = await c.match(req);
    const used = hit ? Number(await hit.text()) || 0 : 0;
    if (used >= limit) return { ok: false, left: 0 };
    await c.put(
      req,
      new Response(String(used + 1), { headers: { "Cache-Control": "max-age=90000" } }),
    );
    return { ok: true, left: limit - used - 1 };
  } catch {
    return { ok: true, left: limit };
  }
}

// ── Token criptat (AES-GCM) ───────────────────────────────────────────
// Testul generat (cu baremul) se trimite clientului doar criptat; la corectare îl decriptăm,
// deci baremul nu e vizibil în browser și endpoint-ul nu poate fi folosit ca proxy AI generic.

async function key(): Promise<CryptoKey> {
  const secret = process.env["AI_TEST_SECRET"] || process.env["LOVABLE_API_KEY"] || "dev-only";
  const raw = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(`simulare-ai:${secret}`),
  );
  return crypto.subtle.importKey("raw", raw, "AES-GCM", false, ["encrypt", "decrypt"]);
}

const b64u = (b: Uint8Array) => {
  let s = "";
  for (const x of b) s += String.fromCharCode(x);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};
const fromB64u = (s: string) =>
  Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0));

export async function seal(obj: unknown): Promise<string> {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = new Uint8Array(
    await crypto.subtle.encrypt(
      { name: "AES-GCM", iv },
      await key(),
      new TextEncoder().encode(JSON.stringify(obj)),
    ),
  );
  return `${b64u(iv)}.${b64u(ct)}`;
}

export async function unseal<T>(token: string): Promise<T | null> {
  try {
    const [iv, ct] = token.split(".");
    const pt = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: fromB64u(iv) },
      await key(),
      fromB64u(ct),
    );
    return JSON.parse(new TextDecoder().decode(pt)) as T;
  } catch {
    return null;
  }
}

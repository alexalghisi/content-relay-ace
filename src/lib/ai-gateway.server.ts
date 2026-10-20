// Acces server-only la Lovable AI Gateway (format Anthropic Messages) + utilitare
// pentru funcțiile AI publice: limită zilnică per cont și token criptat pentru teste.
// Nu importa acest fișier din cod de client.

export const AI_MODEL = "anthropic/claude-sonnet-5";
const GATEWAY = "https://ai.gateway.lovable.dev/v1/messages";

/** Tipul erorii AI — decide mesajul pentru elev, logarea și dacă se returnează cota internă. */
export type AiErrorKind =
  | "config" // lipsește cheia gateway-ului
  | "auth" // cheie respinsă de gateway (401/403) — problemă de configurare, nu a elevului
  | "credits" // 402: soldul AI al workspace-ului Lovable e epuizat
  | "rate_limit" // 429: prea multe cereri la furnizor
  | "upstream" // 5xx / rețea / stream întrerupt
  | "refusal"
  | "bad_response";

export class AiError extends Error {
  constructor(
    message: string,
    public userMessage: string,
    public kind: AiErrorKind = "upstream",
    public retryAfterSec?: number,
  ) {
    super(message);
  }
}

// ── Disponibilitatea furnizorului (circuit breaker) ───────────────────
// După un 402 (credite epuizate) nu mai trimitem fiecare mesaj la gateway: marcăm furnizorul
// „indisponibil” în cache-ul edge pentru CREDITS_PAUSE_SEC. După expirare, următoarea cerere
// reîncearcă real; dacă creditele au fost reîncărcate, totul reia singur, fără intervenție.
export const CREDITS_PAUSE_SEC = 300;
const STATUS_URL = "https://ai-status.meditatiidirect.ro/gateway";

function edgeCache(): Cache | undefined {
  try {
    return (globalThis as unknown as { caches?: { default?: Cache } }).caches?.default;
  } catch {
    return undefined;
  }
}

export async function aiIndisponibil(): Promise<{ kind: AiErrorKind; until: number } | null> {
  const c = edgeCache();
  if (!c) return null;
  try {
    const hit = await c.match(new Request(STATUS_URL));
    if (!hit) return null;
    const v = (await hit.json()) as { kind: AiErrorKind; until: number };
    return v.until > Date.now() ? v : null;
  } catch {
    return null;
  }
}

async function marcheazaIndisponibil(kind: AiErrorKind, sec: number) {
  const c = edgeCache();
  if (!c) return;
  try {
    await c.put(
      new Request(STATUS_URL),
      new Response(JSON.stringify({ kind, until: Date.now() + sec * 1000 }), {
        headers: { "Cache-Control": `max-age=${sec}`, "Content-Type": "application/json" },
      }),
    );
  } catch {
    /* fără cache: doar nu scurtcircuităm */
  }
}

async function marcheazaDisponibil() {
  try {
    await edgeCache()?.delete(new Request(STATUS_URL));
  } catch {
    /* ignorat */
  }
}

export const MESAJ_CREDITE =
  "Profesorul AI este temporar indisponibil: creditele AI ale platformei s-au epuizat. Nu ți s-a consumat nimic din limită; încearcă din nou puțin mai târziu.";

/** Mapează un răspuns HTTP eșuat al gateway-ului într-o eroare controlată. Exportat pentru teste. */
export function eroareDinStatus(status: number, retryAfter: string | null): AiError {
  const ra = retryAfter && /^\d+$/.test(retryAfter) ? Number(retryAfter) : undefined;
  if (status === 402) return new AiError(`gateway ${status}`, MESAJ_CREDITE, "credits");
  if (status === 429)
    return new AiError(
      `gateway ${status}`,
      `Sunt multe cereri acum. Încearcă din nou peste ${ra && ra < 600 ? `${ra} secunde` : "un minut"}.`,
      "rate_limit",
      ra ?? 60,
    );
  if (status === 401 || status === 403)
    return new AiError(
      `gateway ${status}`,
      "Funcția AI nu este configurată corect. Am anunțat administratorul.",
      "auth",
    );
  return new AiError(
    `gateway ${status}`,
    "Serviciul AI nu a răspuns. Încearcă din nou.",
    "upstream",
  );
}

type Msg = { role: "user" | "assistant"; content: string };

/** Apel non-interactiv; citește răspunsul în flux ca să nu depindă de limite de timp ale gateway-ului. */
type AiOpts = { system: string; messages: Msg[]; maxTokens: number };

const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta/models";
/** Model Gemini (plan gratuit Google AI Studio = doar Flash). Suprascris cu GEMINI_MODEL. */
export const geminiModel = () => process.env["GEMINI_MODEL"] || "gemini-flash-latest";
const areGemini = () => !!process.env["GEMINI_API_KEY"];
const areLovable = () => !!process.env["LOVABLE_API_KEY"];

/** Erori după care încercăm furnizorul de rezervă (Gemini). Refuzurile de conținut nu. */
const treceLaRezerva = (e: AiError) =>
  ["credits", "rate_limit", "upstream", "auth", "config"].includes(e.kind);

/**
 * Poate răspunde AI-ul acum? Da dacă Gemini e configurat (rezervă) sau dacă Lovable e configurat
 * și nu e în pauză după „credite epuizate”. Folosit înainte de a porni/încasa o sesiune.
 */
export async function aiStare(): Promise<
  { ok: true } | { ok: false; kind: AiErrorKind; mesaj: string }
> {
  if (areGemini()) return { ok: true };
  if (!areLovable())
    return { ok: false, kind: "config", mesaj: "Profesorul AI nu este configurat încă." };
  const pauza = await aiIndisponibil();
  return pauza ? { ok: false, kind: pauza.kind, mesaj: MESAJ_CREDITE } : { ok: true };
}

/** Apel AI: Lovable AI Gateway; dacă e epuizat/indisponibil și există GEMINI_API_KEY → Gemini. */
export async function callAi(opts: AiOpts): Promise<string> {
  try {
    return await callLovable(opts);
  } catch (e) {
    if (!(e instanceof AiError) || !areGemini() || !treceLaRezerva(e)) throw e;
    return callGemini(opts);
  }
}

/** Mapează un răspuns HTTP eșuat de la Gemini. Plan gratuit epuizat = 429 RESOURCE_EXHAUSTED. */
export function eroareGemini(status: number, corp: string): AiError {
  if (status === 400 && /API_KEY_INVALID|API key not valid/i.test(corp))
    return eroareDinStatus(401, null);
  if (status === 429) {
    const m = corp.match(/"retryDelay"\s*:\s*"(\d+)(?:\.\d+)?s"/);
    return eroareDinStatus(429, m ? m[1] : null);
  }
  return eroareDinStatus(status, null);
}

export async function callGemini(opts: AiOpts): Promise<string> {
  const key = process.env["GEMINI_API_KEY"];
  if (!key)
    throw new AiError("GEMINI_API_KEY missing", "Funcția AI nu este configurată încă.", "config");
  let res: Response;
  try {
    res = await fetch(`${GEMINI_BASE}/${encodeURIComponent(geminiModel())}:generateContent`, {
      method: "POST",
      headers: { "x-goog-api-key": key, "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: opts.system }] },
        contents: opts.messages.map((m) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        })),
        // Modelele Flash „gândesc” din bugetul de ieșire; lăsăm loc ca răspunsul să nu fie tăiat.
        generationConfig: { maxOutputTokens: opts.maxTokens + 4096 },
      }),
    });
  } catch {
    throw new AiError("gemini network", "Serviciul AI nu a răspuns. Încearcă din nou.", "upstream");
  }
  if (!res.ok) {
    const err = eroareGemini(res.status, await res.text().catch(() => ""));
    console.warn(`[ai] gemini ${res.status} (${err.kind})`);
    throw err;
  }
  type Part = { text?: string; thought?: boolean };
  const j = (await res.json().catch(() => null)) as {
    promptFeedback?: { blockReason?: string };
    candidates?: { finishReason?: string; content?: { parts?: Part[] } }[];
  } | null;
  if (!j) throw new AiError("gemini json", "Serviciul AI a răspuns greșit.", "bad_response");
  const c = j.candidates?.[0];
  if (j.promptFeedback?.blockReason || /SAFETY|PROHIBITED|BLOCKLIST/.test(c?.finishReason ?? ""))
    throw new AiError("gemini refusal", "Nu pot răspunde la această cerere.", "refusal");
  const text = (c?.content?.parts ?? [])
    .filter((p) => !p.thought && typeof p.text === "string")
    .map((p) => p.text)
    .join("")
    .trim();
  if (!text) throw new AiError("gemini empty", "Serviciul AI a răspuns greșit.", "bad_response");
  return text;
}

async function callLovable(opts: AiOpts): Promise<string> {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey)
    throw new AiError("LOVABLE_API_KEY missing", "Funcția AI nu este configurată încă.", "config");
  const pauza = await aiIndisponibil();
  if (pauza) throw new AiError("gateway paused", MESAJ_CREDITE, pauza.kind);
  let res: Response;
  try {
    res = await fetch(GATEWAY, {
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
  } catch {
    throw new AiError("network", "Serviciul AI nu a răspuns. Încearcă din nou.", "upstream");
  }
  if (!res.ok || !res.body) {
    const err = eroareDinStatus(res.status, res.headers.get("retry-after"));
    // Log sigur: doar codul și tipul — fără cheie, fără conținutul elevului.
    console.warn(`[ai] gateway ${res.status} (${err.kind})`);
    if (err.kind === "credits") await marcheazaIndisponibil("credits", CREDITS_PAUSE_SEC);
    throw err;
  }
  await marcheazaDisponibil();
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
          throw new AiError("refusal", "Nu pot răspunde la această cerere.", "refusal");
        else if (ev.type === "error")
          throw new AiError(
            "stream error",
            "Serviciul AI a întâmpinat o eroare. Încearcă din nou.",
            "upstream",
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
    throw new AiError(
      "no json",
      "Răspunsul AI nu a putut fi citit. Încearcă din nou.",
      "bad_response",
    );
  try {
    return JSON.parse(text.slice(start, end + 1));
  } catch {
    throw new AiError(
      "bad json",
      "Răspunsul AI nu a putut fi citit. Încearcă din nou.",
      "bad_response",
    );
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

/**
 * Returnează o unitate din cotă când cererea AI a eșuat din vina furnizorului (credite, 429, rețea),
 * ca elevul să nu piardă mesaje din limita zilnică pentru răspunsuri pe care nu le-a primit.
 */
export async function refundQuota(userId: string, kind: string): Promise<void> {
  try {
    const c = edgeCache();
    if (!c) return;
    const req = new Request(`https://quota.meditatiidirect.ro/${kind}/${todayRo()}/${userId}`);
    const hit = await c.match(req);
    const used = hit ? Number(await hit.text()) || 0 : 0;
    if (used <= 0) return;
    await c.put(
      req,
      new Response(String(used - 1), { headers: { "Cache-Control": "max-age=90000" } }),
    );
  } catch {
    /* best-effort */
  }
}

/** Erori după care cota internă se returnează (elevul nu a primit răspuns din motive externe). */
export const eroareFurnizor = (e: unknown) =>
  e instanceof AiError && ["credits", "rate_limit", "upstream", "auth", "config"].includes(e.kind);

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

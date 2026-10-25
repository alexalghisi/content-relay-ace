// Gemini Live (speech-to-speech, ~sub-second replies, built-in turn-taking) + LiveAvatar LITE
// (the avatar only lip-syncs the audio Gemini produces). The browser talks to Gemini directly with
// a short-lived, single-use token, so the API key never leaves the server.
import type { PaConfig } from "./profesor-ai";
import { tutorPrompt } from "./profesor-ai-tutor.server";
import { LIVEAVATAR_TOKEN_URL, liveAvatarConfig } from "./profesor-ai-avatar.server";

export const LIVE_MODEL = () => process.env["PROFESOR_AI_LIVE_MODEL"] || "gemini-3.8-live";
/** Female Gemini voice; it speaks Romanian natively. */
export const LIVE_VOICE = () => process.env["PROFESOR_AI_LIVE_VOICE"] || "Aoede";

const TABLA_LIVE = `- Formulele, pașii, codul și enunțurile le scrii pe tablă cu funcția scrie_pe_tabla (text simplu, simboluri Unicode, fără LaTeX, maxim 12 rânduri; tabla se înlocuiește de fiecare dată). Nu citești tabla cu voce tare simbol cu simbol și nu scrii întrebări pe tablă.`;

/** Same teacher as the text pipeline, adapted for a voice-native model with a board tool. */
export function livePrompt(c: PaConfig, durata: number, seed: number): string {
  return tutorPrompt(c, durata, seed)
    .split("\n")
    .map((l) => (l.includes("TABLA:") ? TABLA_LIVE : l))
    .join("\n") +
    "\nVorbești natural și fluent, fără pauze lungi. Când elevul te întrerupe, te oprești și îl asculți.";
}

export const BOARD_TOOL = {
  functionDeclarations: [
    {
      name: "scrie_pe_tabla",
      description: "Scrie pe tabla elevului formule, pași, cod sau enunțuri (înlocuiește conținutul tablei).",
      parameters: { type: "OBJECT", properties: { text: { type: "STRING", description: "Conținutul tablei" } }, required: ["text"] },
    },
  ],
};

export function liveSetup(system: string) {
  return {
    model: `models/${LIVE_MODEL()}`,
    generationConfig: {
      responseModalities: ["AUDIO"],
      speechConfig: { languageCode: "ro-RO", voiceConfig: { prebuiltVoiceConfig: { voiceName: LIVE_VOICE() } } },
    },
    systemInstruction: { parts: [{ text: system }] },
    tools: [BOARD_TOOL],
    inputAudioTranscription: {},
    outputAudioTranscription: {},
    contextWindowCompression: { slidingWindow: {} },
    sessionResumption: {},
  };
}

export async function createGeminiLiveToken(minutes: number): Promise<{ token: string } | { error: string; status?: number }> {
  const key = process.env["GEMINI_API_KEY"];
  if (!key) return { error: "GEMINI_API_KEY lipsește." };
  const now = Date.now();
  const res = await fetch("https://generativelanguage.googleapis.com/v1beta/auth_tokens", {
    method: "POST",
    headers: { "x-goog-api-key": key, "Content-Type": "application/json" },
    body: JSON.stringify({
      // Reconnects (session resumption) need a few extra uses.
      uses: 20,
      expireTime: new Date(now + (minutes + 10) * 60_000).toISOString(),
      newSessionExpireTime: new Date(now + (minutes + 5) * 60_000).toISOString(),
    }),
  }).catch(() => null);
  if (!res?.ok) {
    const body = res ? (await res.text().catch(() => "")).slice(0, 300) : "";
    console.warn(`[profesor-ai] live token HTTP ${res?.status ?? "network"} ${body}`);
    return { error: "Gemini Live nu a emis accesul.", status: res?.status };
  }
  const j = (await res.json().catch(() => null)) as { name?: string } | null;
  return j?.name ? { token: j.name } : { error: "Gemini Live nu a emis accesul." };
}

/** LiveAvatar LITE: no voice/STT on their side, the avatar lip-syncs our PCM audio. */
export async function createLiteAvatarToken(maxSeconds: number): Promise<string | null> {
  const cfg = liveAvatarConfig(process.env);
  if (!cfg.key || !cfg.avatarId) return null;
  const call = (secunde: number) => fetch(LIVEAVATAR_TOKEN_URL, {
    method: "POST",
    headers: { "X-API-KEY": cfg.key ?? "", "Content-Type": "application/json", accept: "application/json" },
    body: JSON.stringify({ mode: "LITE", avatar_id: cfg.avatarId, video_settings: { quality: "high", encoding: "H264" }, max_session_duration: secunde }),
  }).catch(() => null);
  let res = await call(maxSeconds);
  if (res?.status === 400) {
    const cap = /maximum allowed \((\d+)s\)/.exec(await res.clone().text().catch(() => ""));
    if (cap) res = await call(Number(cap[1]));
  }
  if (!res?.ok) {
    console.warn(`[profesor-ai] liveavatar LITE HTTP ${res?.status ?? "network"} ${res ? (await res.text().catch(() => "")).slice(0, 300) : ""}`);
    return null;
  }
  const j = (await res.json().catch(() => null)) as { data?: { session_token?: string } } | null;
  return j?.data?.session_token ?? null;
}

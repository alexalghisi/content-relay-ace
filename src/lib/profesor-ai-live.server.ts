// Gemini Live (speech-to-speech, ~sub-second replies, built-in turn-taking) + LiveAvatar LITE
// (the avatar only lip-syncs the audio Gemini produces). The browser talks to Gemini directly with
// a short-lived, single-use token, so the API key never leaves the server.
import type { PaConfig } from "./profesor-ai";
import { tutorPrompt } from "./profesor-ai-tutor.server";
import { LIVEAVATAR_TOKEN_URL, liveAvatarConfig } from "./profesor-ai-avatar.server";

export const LIVE_MODEL = () => process.env["PROFESOR_AI_LIVE_MODEL"] || "gemini-3.8-live";
/** Female Gemini voice; it speaks Romanian natively. */
export const LIVE_VOICE = () => process.env["PROFESOR_AI_LIVE_VOICE"] || "Aoede";

const TABLA_LIVE = `- Tabla: tot ce e vizual scrii pe tablă cu funcția scrie_pe_tabla (se înlocuiește de fiecare dată), în Markdown cu LaTeX. Matematica o scrii DOAR în LaTeX între $...$ (în rând) sau $$...$$ (pe rând separat): fracții \\frac{a}{b}, puteri, radicali, sisteme cu \\begin{cases}, iar o matrice 2×2 sau 3×3 ÎNTOTDEAUNA cu \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} (câte un rând al matricei pe fiecare rând), niciodată pe o singură linie. Datele pe coloane le pui în tabel Markdown (| col | col |), codul în bloc \`\`\` cu limbajul, pașii în listă numerotată. Maxim ~15 rânduri. Nu citești tabla simbol cu simbol și nu scrii întrebări pe tablă.
- Desene: când ajută o imagine (figură geometrică, grafic de funcție, axă, schemă, circuit, celulă, hartă simplă), folosești funcția deseneaza cu un SVG simplu și corect (viewBox, linii, etichete text lizibile, fără script). Desenul apare sub video, lângă tablă.`;

/** Same teacher as the text pipeline, adapted for a voice-native model with a board tool. */
const DOAR_ROMANA = "LIMBA: vorbești EXCLUSIV în limba română, de la prima până la ultima replică. Chiar dacă elevul vorbește, citește sau pare să vorbească în italiană, engleză sau altă limbă, tu răspunzi tot în română. Nu schimbi niciodată limba. (Excepție: la ora de limbă străină poți spune cuvinte sau exemple în limba respectivă, dar explicațiile sunt în română.)";

export function livePrompt(c: PaConfig, durata: number, seed: number): string {
  return DOAR_ROMANA + "\n\n" + tutorPrompt({ ...c, limba: "ro" }, durata, seed)
    .split("\n")
    .map((l) => (l.includes("TABLA:") ? TABLA_LIVE : l))
    .join("\n") +
    "\n" + DOAR_ROMANA + "\nPEDAGOGIE: nu ceri niciodată rezultatul unui exercițiu înainte să fi explicat metoda. Ordinea e mereu: 1) explici ideea pe scurt, 2) rezolvi TU un exemplu complet, pas cu pas, scris pe tablă, 3) abia apoi dai elevului un exercițiu asemănător și îi spui „ia-ți timp, gândește-te, spune-mi când ai un răspuns”, 4) aștepți în liniște, 5) dacă greșește sau se blochează, îi dai un indiciu, nu rezultatul. Nu răspunzi tu în locul elevului și nu treci mai departe până nu încearcă. Dacă elevul îți dă o problemă de la teme, NU i-o rezolvi tu: îl întrebi ce știe deja, îl duci cu întrebări mici pas cu pas până o rezolvă EL. După ce reușește, îi dai o problemă asemănătoare dar diferită (alte numere, altă formulare) ca să verifici că a înțeles metoda, nu doar exemplul; abia când o rezolvă singur treci mai departe. Scopul e ca elevul să se descurce singur la test, nu să aibă tema făcută.\nVorbești natural și fluent, fără pauze lungi. Când elevul te întrerupe, te oprești și îl asculți.";
}

export const BOARD_TOOL = {
  functionDeclarations: [
    {
      name: "scrie_pe_tabla",
      description: "Scrie pe tabla elevului formule, pași, cod sau enunțuri (înlocuiește conținutul tablei).",
      parameters: { type: "OBJECT", properties: { text: { type: "STRING", description: "Conținutul tablei: Markdown + LaTeX ($...$, $$...$$)" } }, required: ["text"] },
    },
    {
      name: "deseneaza",
      description: "Afișează elevului un desen: figură geometrică, grafic, schemă. Primește cod SVG complet.",
      parameters: { type: "OBJECT", properties: { svg: { type: "STRING", description: "Cod SVG complet, <svg viewBox=...>...</svg>, fără script" } }, required: ["svg"] },
    },
  ],
};

export function liveSetup(system: string) {
  return {
    model: `models/${LIVE_MODEL()}`,
    generationConfig: {
      responseModalities: ["AUDIO"],
      speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: LIVE_VOICE() } } },
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

export const OPENAI_MODEL = () => process.env["PROFESOR_AI_OPENAI_MODEL"] || "gpt-realtime-2.1";
export const OPENAI_VOICE = () => process.env["PROFESOR_AI_OPENAI_VOICE"] || "marin";

/** Short-lived OpenAI Realtime client secret with the whole session (prompt, voice, tools) baked in. */
export async function createOpenAiSecret(system: string, minutes: number): Promise<{ token: string; model: string } | { error: string }> {
  const key = process.env["OPENAI_API_KEY"];
  if (!key) return { error: "OPENAI_API_KEY lipsește." };
  const model = OPENAI_MODEL();
  const tools = BOARD_TOOL.functionDeclarations.map((f) => ({
    type: "function",
    name: f.name,
    description: f.description,
    parameters: { type: "object", properties: Object.fromEntries(Object.entries(f.parameters.properties).map(([k, v]) => [k, { type: "string", description: v.description }])), required: f.parameters.required },
  }));
  const res = await fetch("https://api.openai.com/v1/realtime/client_secrets", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      expires_after: { anchor: "created_at", seconds: Math.min(7200, (minutes + 10) * 60) },
      session: {
        type: "realtime",
        model,
        instructions: system,
        output_modalities: ["audio"],
        audio: {
          input: {
            format: { type: "audio/pcm", rate: 24000 },
            transcription: { model: "gpt-4o-mini-transcribe", language: "ro" },
            noise_reduction: { type: "near_field" },
            turn_detection: { type: "semantic_vad", eagerness: "low", create_response: true, interrupt_response: true },
          },
          output: { format: { type: "audio/pcm", rate: 24000 }, voice: OPENAI_VOICE() },
        },
        tools,
        tool_choice: "auto",
      },
    }),
  }).catch(() => null);
  if (!res?.ok) {
    console.warn(`[profesor-ai] openai secret HTTP ${res?.status ?? "network"} ${res ? (await res.text().catch(() => "")).slice(0, 300) : ""}`);
    return { error: "OpenAI Realtime nu a emis accesul." };
  }
  const j = (await res.json().catch(() => null)) as { value?: string } | null;
  return j?.value ? { token: j.value, model } : { error: "OpenAI Realtime nu a emis accesul." };
}

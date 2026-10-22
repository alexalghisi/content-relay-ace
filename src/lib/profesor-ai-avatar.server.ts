/** LiveAvatar (HeyGen's successor platform). The legacy HeyGen streaming endpoint is retired. */
export const LIVEAVATAR_TOKEN_URL = "https://api.liveavatar.com/v1/sessions/token";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** Owner choice: LiveAvatar preset "Hannah (Friendly)" with her own voice "Hannah" (spoken in ro). */
export const HANNAH_FRIENDLY = "1d91e311-781e-42ab-bcbf-07801119a67b";
export const HANNAH_VOICE = "72568766-68eb-490b-9375-57301d24c8f1";

/** Flash is ElevenLabs' low-latency model (~75 ms vs ~1 s for multilingual_v2) and speaks Romanian. */
export const RO_VOICE_SETTINGS = { model: "eleven_flash_v2_5", stability: 0.6, similarity_boost: 0.8, speed: 1.0 };
/** Older, slower model kept only as a repair if LiveAvatar rejects the flash model. */
export const RO_VOICE_SETTINGS_LENT = { ...RO_VOICE_SETTINGS, model: "eleven_multilingual_v2" };

export type AvatarAccess = { provider: "liveavatar"; token: string };

const unavailable = (error: string) => ({ heygen: null as null | AvatarAccess, error });

/** LIVEAVATAR_* secrets win; HEYGEN_* secrets are accepted as the same LiveAvatar credentials. */
export function liveAvatarConfig(env: Record<string, string | undefined>) {
  return {
    key: env["LIVEAVATAR_API_KEY"] ?? env["HEYGEN_API_KEY"],
    // Owner chooses the avatar and voice; never auto-picked, never legacy HeyGen IDs.
    avatarId: env["LIVEAVATAR_AVATAR_ID"] || HANNAH_FRIENDLY,
    voiceId: env["LIVEAVATAR_VOICE_ID"] || HANNAH_VOICE,
  };
}

/**
 * LiveAvatar FULL session without a context ("restricted mode"): the avatar only speaks the
 * text our tutor sends, while LiveAvatar still detects and transcribes the student's voice.
 */
export async function createLiveAvatarAccess(
  config: { key?: string; avatarId?: string; voiceId?: string; maxSeconds?: number; language?: string },
  request: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = fetch,
) {
  if (!config.key) return unavailable("Cheia LiveAvatar nu este configurată.");
  if (!config.avatarId || !config.voiceId)
    return unavailable("Avatarul video nu a fost ales încă. Lecția continuă cu tabla și voce în română.");
  const call = (maxSeconds: number, voiceSettings = RO_VOICE_SETTINGS) => request(LIVEAVATAR_TOKEN_URL, {
    method: "POST",
    headers: { "X-API-KEY": config.key ?? "", "Content-Type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      mode: "FULL",
      avatar_id: config.avatarId,
      // Romanian is mandatory: STT + TTS language "ro"; ElevenLabs multilingual model speaks
      // Romanian text with native pronunciation even for voices catalogued as English.
      avatar_persona: { voice_id: config.voiceId, language: config.language ?? "ro", voice_settings: voiceSettings },
      video_settings: { quality: "high", encoding: "H264" },
      interactivity_type: "CONVERSATIONAL",
      max_session_duration: maxSeconds,
    }),
  }).catch(() => null);
  let secunde = config.maxSeconds ?? 1800;
  let res = await call(secunde);
  // The account plan caps session length: repair the request once with the cap LiveAvatar states.
  if (res?.status === 400) {
    const cap = /max_session_duration[^"]*maximum allowed \((\d+)s\)/.exec(await res.clone().text().catch(() => ""));
    if (cap) {
      console.warn(`[profesor-ai] liveavatar: planul contului limitează sesiunea la ${cap[1]}s`);
      secunde = Number(cap[1]);
      res = await call(secunde);
    }
  }
  // Voice model not accepted: repair once with the slower multilingual model rather than losing the video.
  if (res?.status === 400 || res?.status === 422) {
    const corp = await res.clone().text().catch(() => "");
    if (/model|voice_settings/i.test(corp)) {
      console.warn("[profesor-ai] liveavatar: modelul de voce flash respins, trec la multilingual");
      res = await call(secunde, RO_VOICE_SETTINGS_LENT);
    }
  }
  if (!res?.ok) {
    const body = res ? (await res.text().catch(() => "")).slice(0, 500) : "";
    console.error(`[profesor-ai] liveavatar HTTP ${res?.status ?? "network"} ${body}`);
    const ids = !UUID.test(config.avatarId) || !UUID.test(config.voiceId)
      ? " Codurile salvate au formatul vechi HeyGen; LiveAvatar folosește coduri noi (UUID)."
      : "";
    if (res?.status === 401 || res?.status === 403)
      return unavailable("LiveAvatar respinge cheia salvată (cheie invalidă). Administratorul trebuie să pună cheia din app.liveavatar.com/developers. Poți continua în scris.");
    if (res?.status === 402)
      return unavailable("Contul LiveAvatar nu are credite pentru o sesiune video. Poți continua în scris.");
    if (res?.status === 400 || res?.status === 404 || res?.status === 422)
      return unavailable(`LiveAvatar nu acceptă avatarul sau vocea salvate.${ids} Poți continua în scris.`);
    if (res?.status === 429)
      return unavailable("LiveAvatar limitează momentan pornirea sesiunilor video. Încearcă mai târziu; poți continua în scris.");
    return unavailable("LiveAvatar nu a putut porni avatarul video. Lecția poate continua în scris.");
  }
  const j = await res.json().catch(() => null) as { data?: { session_token?: unknown } } | null;
  const token = j?.data?.session_token;
  if (typeof token !== "string" || !token.trim())
    return unavailable("LiveAvatar nu a emis accesul pentru avatarul video.");
  const access: AvatarAccess = { provider: "liveavatar", token };
  return { error: undefined, heygen: access };
}

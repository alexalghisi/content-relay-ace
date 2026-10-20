/** LiveAvatar (HeyGen's successor platform). The legacy HeyGen streaming endpoint is retired. */
export const LIVEAVATAR_TOKEN_URL = "https://api.liveavatar.com/v1/sessions/token";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export type AvatarAccess = { provider: "liveavatar"; token: string };

const unavailable = (error: string) => ({ heygen: null as null | AvatarAccess, error });

/** LIVEAVATAR_* secrets win; HEYGEN_* secrets are accepted as the same LiveAvatar credentials. */
export function liveAvatarConfig(env: Record<string, string | undefined>) {
  return {
    key: env["LIVEAVATAR_API_KEY"] ?? env["HEYGEN_API_KEY"],
    avatarId: env["LIVEAVATAR_AVATAR_ID"] ?? env["HEYGEN_AVATAR_ID"],
    voiceId: env["LIVEAVATAR_VOICE_ID"] ?? env["HEYGEN_VOICE_ID"],
  };
}

/**
 * LiveAvatar FULL session without a context ("restricted mode"): the avatar only speaks the
 * text our tutor sends, while LiveAvatar still detects and transcribes the student's voice.
 */
export async function createLiveAvatarAccess(
  config: { key?: string; avatarId?: string; voiceId?: string; maxSeconds?: number },
  request: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = fetch,
) {
  if (!config.key) return unavailable("Cheia LiveAvatar nu este configurată.");
  if (!config.avatarId || !config.voiceId)
    return unavailable("Avatarul și vocea din LiveAvatar trebuie alese înainte de pornire.");
  const res = await request(LIVEAVATAR_TOKEN_URL, {
    method: "POST",
    headers: { "X-API-KEY": config.key, "Content-Type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      mode: "FULL",
      avatar_id: config.avatarId,
      avatar_persona: { voice_id: config.voiceId, language: "ro" },
      video_settings: { quality: "high", encoding: "H264" },
      interactivity_type: "CONVERSATIONAL",
      max_session_duration: config.maxSeconds ?? 1800,
    }),
  }).catch(() => null);
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

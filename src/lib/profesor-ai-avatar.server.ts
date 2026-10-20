/** Legacy HeyGen contract; never substitute LiveAvatar credentials or selections. */
export const HEYGEN_TOKEN_URL = "https://api.heygen.com/v1/streaming.create_token";
/** LiveAvatar (HeyGen's successor platform): separate account, key and UUID catalog. */
export const LIVEAVATAR_TOKEN_URL = "https://api.liveavatar.com/v1/sessions/token";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export type AvatarAccess =
  | { provider: "heygen"; token: string; avatarId: string; voiceId: string }
  | { provider: "liveavatar"; token: string };

const unavailable = (error: string) => ({ heygen: null as null | AvatarAccess, error });

export async function createHeygenAccess(
  config: { key?: string; avatarId?: string; voiceId?: string },
  request: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = fetch,
) {
  if (!config.key) return unavailable("Serviciul de avatar video nu este configurat.");
  if (!config.avatarId || !config.voiceId)
    return unavailable("Avatarul și vocea în română trebuie configurate înainte de pornire.");
  const res = await request(HEYGEN_TOKEN_URL, {
    method: "POST",
    headers: { "x-api-key": config.key, "Content-Type": "application/json" },
  }).catch(() => null);
  if (!res?.ok) {
    console.error(`[profesor-ai] avatar HTTP ${res?.status ?? "network"}`);
    if (res?.status === 404)
      return unavailable("HeyGen a retras serviciul vechi de avatar interactiv (404). Avatarul video pornește după ce administratorul adaugă cheia LiveAvatar și alege în LiveAvatar avatarul și vocea. Poți continua în scris.");
    if (res?.status === 401 || res?.status === 403)
      return unavailable("HeyGen nu autorizează accesul video. Administratorul trebuie să verifice cheia și accesul API al contului. Poți continua în scris.");
    if (res?.status === 429)
      return unavailable("HeyGen limitează momentan pornirea sesiunilor video. Încearcă mai târziu; poți continua în scris.");
    return unavailable("HeyGen nu a putut porni avatarul video. Lecția poate continua în scris.");
  }
  const j = await res.json().catch(() => null) as { data?: { token?: unknown } } | null;
  if (typeof j?.data?.token !== "string" || !j.data.token.trim())
    return unavailable("HeyGen nu a emis accesul pentru avatarul video.");
  const access: AvatarAccess = { provider: "heygen", token: j.data.token, avatarId: config.avatarId, voiceId: config.voiceId };
  return { error: undefined, heygen: access };
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
  if (!UUID.test(config.avatarId) || !UUID.test(config.voiceId))
    return unavailable("Avatarul sau vocea au formatul vechi HeyGen. LiveAvatar folosește alte coduri: alege același avatar și aceeași voce în LiveAvatar.");
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
    console.error(`[profesor-ai] liveavatar HTTP ${res?.status ?? "network"}`);
    if (res?.status === 401 || res?.status === 403)
      return unavailable("LiveAvatar nu acceptă cheia configurată. Administratorul trebuie să copieze cheia din app.liveavatar.com/developers. Poți continua în scris.");
    if (res?.status === 402)
      return unavailable("Contul LiveAvatar nu are credite pentru o sesiune video. Poți continua în scris.");
    if (res?.status === 404 || res?.status === 400 || res?.status === 422)
      return unavailable("LiveAvatar nu găsește avatarul sau vocea aleasă în acest cont. Avatarul și vocea nu au fost înlocuite. Poți continua în scris.");
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

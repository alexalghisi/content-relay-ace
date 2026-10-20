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

type LaAvatar = { id: string; name: string; status?: string; default_voice?: { id: string; name: string } | null };
type LaVoice = { id: string; name: string; language?: string | null; gender?: string | null };
type Fetcher = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

/** Pure choice: female teacher preset avatar, Romanian voice if one exists, else the avatar's own voice (spoken in "ro"). */
export function chooseLiveAvatar(avatars: LaAvatar[], voices: LaVoice[]) {
  const active = avatars.filter((a) => !a.status || a.status === "ACTIVE");
  const rank = (n: string) => {
    const s = n.toLowerCase();
    if (s.includes("teacher") && s.includes("sitting")) return 0;
    if (s.includes("teacher")) return 1;
    if (s.includes("professor") || s.includes("tutor")) return 2;
    return 9;
  };
  const maleVoice = new Set(voices.filter((v) => v.gender === "male").map((v) => v.id));
  const pool = active
    .filter((a) => rank(a.name) < 9 && !(a.default_voice && maleVoice.has(a.default_voice.id)))
    .sort((a, b) => rank(a.name) - rank(b.name));
  const avatar = pool[0];
  if (!avatar) return null;
  const ro = voices.find((v) => (v.language ?? "").toLowerCase().startsWith("ro") && v.gender === "female")
    ?? voices.find((v) => (v.language ?? "").toLowerCase().startsWith("ro"));
  const voice = ro ?? (avatar.default_voice ? { id: avatar.default_voice.id, name: avatar.default_voice.name } : null);
  if (!voice) return null;
  return { avatarId: avatar.id, avatarName: avatar.name, voiceId: voice.id, voiceName: voice.name, romanianVoice: !!ro };
}

let cached: { avatarId: string; voiceId: string } | null = null;

async function listAll<T>(url: string, key: string, request: Fetcher): Promise<T[]> {
  const out: T[] = [];
  let next: string | null = url;
  for (let i = 0; next && i < 10; i++) {
    const res = await request(next, { headers: { "X-API-KEY": key, accept: "application/json" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const j = (await res.json()) as { data?: { results?: T[]; next?: string | null } };
    out.push(...(j.data?.results ?? []));
    next = j.data?.next ?? null;
  }
  return out;
}

/** Keeps valid configured UUIDs; otherwise picks (and caches) a teacher avatar + voice from the LiveAvatar catalogue. */
export async function resolveLiveAvatarIds(
  config: { key?: string; avatarId?: string; voiceId?: string },
  request: Fetcher = fetch,
) {
  const okA = !!config.avatarId && UUID.test(config.avatarId);
  const okV = !!config.voiceId && UUID.test(config.voiceId);
  if ((okA && okV) || !config.key) return config;
  if (!cached) {
    try {
      const [avatars, voices] = await Promise.all([
        listAll<LaAvatar>("https://api.liveavatar.com/v1/avatars/public?page_size=100", config.key, request),
        listAll<LaVoice>("https://api.liveavatar.com/v1/voices?page_size=100", config.key, request),
      ]);
      const c = chooseLiveAvatar(avatars, voices);
      if (!c) return config;
      console.log(`[profesor-ai] liveavatar auto-ales: avatar "${c.avatarName}", voce "${c.voiceName}"${c.romanianVoice ? " (ro)" : " (vorbește în ro)"}`);
      cached = { avatarId: c.avatarId, voiceId: c.voiceId };
    } catch (e) {
      console.error(`[profesor-ai] liveavatar catalog ${(e as Error).message}`);
      return config;
    }
  }
  return { ...config, avatarId: okA ? config.avatarId : cached.avatarId, voiceId: okV ? config.voiceId : cached.voiceId };
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
  const call = (maxSeconds: number) => request(LIVEAVATAR_TOKEN_URL, {
    method: "POST",
    headers: { "X-API-KEY": config.key, "Content-Type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      mode: "FULL",
      avatar_id: config.avatarId,
      avatar_persona: { voice_id: config.voiceId, language: "ro" },
      video_settings: { quality: "high", encoding: "H264" },
      interactivity_type: "CONVERSATIONAL",
      max_session_duration: maxSeconds,
    }),
  }).catch(() => null);
  let res = await call(config.maxSeconds ?? 1800);
  // The account plan caps session length: repair the request once with the cap LiveAvatar states.
  if (res?.status === 400) {
    const cap = /max_session_duration[^"]*maximum allowed \((\d+)s\)/.exec(await res.clone().text().catch(() => ""));
    if (cap) {
      console.warn(`[profesor-ai] liveavatar: planul contului limitează sesiunea la ${cap[1]}s`);
      res = await call(Number(cap[1]));
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

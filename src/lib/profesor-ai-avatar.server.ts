/** Legacy HeyGen contract; never substitute LiveAvatar credentials or selections. */
export const HEYGEN_TOKEN_URL = "https://api.heygen.com/v1/streaming.create_token";

export async function createHeygenAccess(
  config: { key?: string; avatarId?: string; voiceId?: string },
  request: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> = fetch,
) {
  const unavailable = (error: string) => ({
    heygen: null as null | { token: string; avatarId: string; voiceId: string },
    error,
  });
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
      return unavailable("HeyGen nu găsește serviciul video configurat (404). Administratorul trebuie să confirme accesul Interactive Avatar sau migrarea la LiveAvatar; avatarul și vocea alese nu au fost înlocuite. Poți continua în scris.");
    if (res?.status === 401 || res?.status === 403)
      return unavailable("HeyGen nu autorizează accesul video. Administratorul trebuie să verifice cheia și accesul API al contului. Poți continua în scris.");
    if (res?.status === 429)
      return unavailable("HeyGen limitează momentan pornirea sesiunilor video. Încearcă mai târziu; poți continua în scris.");
    return unavailable("HeyGen nu a putut porni avatarul video. Lecția poate continua în scris.");
  }
  const j = await res.json().catch(() => null) as { data?: { token?: unknown } } | null;
  if (typeof j?.data?.token !== "string" || !j.data.token.trim())
    return unavailable("HeyGen nu a emis accesul pentru avatarul video.");
  return { error: undefined, heygen: { token: j.data.token, avatarId: config.avatarId, voiceId: config.voiceId } };
}
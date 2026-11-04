/** Best-effort edge cooldown: failed attempts never retain a sent-email claim. */
export async function cuFereastraEmail<T extends { ok: boolean }>(
  cache: Cache | undefined,
  key: string,
  operation: () => Promise<T>,
  blocked: T,
): Promise<T> {
  const request = new Request(`https://inregistrare.meditatiidirect.ro/${encodeURIComponent(key)}`);
  const claim = crypto.randomUUID();
  let claimed = false;
  if (cache) {
    try {
      if (await cache.match(request)) return blocked;
      await cache.put(request, new Response(claim, { headers: { "Cache-Control": "max-age=60" } }));
      claimed = true;
    } catch { /* Preserve signup availability if edge cache is unavailable. */ }
  }
  let sent = false;
  try {
    const result = await operation();
    sent = result.ok;
    return result;
  } finally {
    if (cache && claimed && !sent) {
      try {
        const current = await cache.match(request);
        if (current && await current.text() === claim) await cache.delete(request);
      } catch { /* Cache is best-effort, not an atomic distributed lock. */ }
    }
  }
}
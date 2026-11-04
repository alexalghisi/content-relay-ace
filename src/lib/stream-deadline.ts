/** Reject stalled reads and propagate cancellation; never replay an unknown provider outcome. */
export async function withInitialDeadline<T>(controller: AbortController, operation: () => Promise<T>, ms = 20000): Promise<T> {
  let expired = false;
  const timer = setTimeout(() => { expired = true; controller.abort(); }, ms);
  try {
    const result = await operation();
    if (expired) throw new DOMException("Răspunsul AI a depășit timpul de așteptare.", "TimeoutError");
    return result;
  } catch (error) {
    if (expired) throw new DOMException("Răspunsul AI a depășit timpul de așteptare.", "TimeoutError");
    throw error;
  } finally { clearTimeout(timer); }
}

export async function readWithDeadline<T>(reader: ReadableStreamDefaultReader<T>, signal?: AbortSignal, ms = 12000): Promise<{ done: true; value?: T } | { done: false; value: T }> {
  if (signal?.aborted) { void reader.cancel().catch(() => {}); throw new DOMException("Anulat", "AbortError"); }
  let timer: ReturnType<typeof setTimeout> | undefined;
  let abort: (() => void) | undefined;
  try {
    return await Promise.race([reader.read(), new Promise<never>((_, reject) => {
      abort = () => { reject(new DOMException("Anulat", "AbortError")); void reader.cancel().catch(() => {}); };
      signal?.addEventListener("abort", abort, { once: true });
      timer = setTimeout(() => { reject(new DOMException("Răspunsul AI a depășit timpul de așteptare.", "TimeoutError")); void reader.cancel().catch(() => {}); }, ms);
    })]);
  } finally { if (timer) clearTimeout(timer); if (abort) signal?.removeEventListener("abort", abort); }
}
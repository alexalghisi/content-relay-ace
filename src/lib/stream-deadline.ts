/** Reject stalled reads and propagate cancellation; never replay an unknown provider outcome. */
export async function readWithDeadline<T>(reader: ReadableStreamDefaultReader<T>, signal?: AbortSignal, ms = 12000): Promise<ReadableStreamReadResult<T>> {
  if (signal?.aborted) { void reader.cancel().catch(() => {}); throw new DOMException("Anulat", "AbortError"); }
  let timer: ReturnType<typeof setTimeout> | undefined;
  let abort: (() => void) | undefined;
  try {
    return await Promise.race([reader.read(), new Promise<never>((_, reject) => {
      abort = () => { void reader.cancel().catch(() => {}); reject(new DOMException("Anulat", "AbortError")); };
      signal?.addEventListener("abort", abort, { once: true });
      timer = setTimeout(() => { void reader.cancel().catch(() => {}); reject(new Error("Răspunsul AI a depășit timpul de așteptare.")); }, ms);
    })]);
  } finally { if (timer) clearTimeout(timer); if (abort) signal?.removeEventListener("abort", abort); }
}
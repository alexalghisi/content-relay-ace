// Fast listening: the browser's speech recognition gives interim text while the student still
// talks. We send the question as soon as the interim text stays unchanged for STABIL_MS (an early
// end-of-turn), instead of waiting for the recognizer's own, slower "final" result.
// Pure helpers (bun tests) over the session component's timers.

/** Silence (no change in the interim text) after which the question is sent early. */
export const STABIL_MS = 700;

const cuvinte = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").match(/[a-z0-9]+/g) ?? [];

/**
 * Whether the recognizer's final text still has to be sent after `anticipat` (the interim text
 * already sent) — only when the student clearly said more than what went out.
 */
export function trebuieTrimisFinal(final: string, anticipat: string | null): boolean {
  if (!anticipat) return true;
  const f = cuvinte(final);
  const a = new Set(cuvinte(anticipat));
  if (!f.length) return false;
  const noi = f.filter((w) => !a.has(w)).length;
  return noi >= 3;
}

/** Browsers whose speech recognition is fast and reliable enough to replace the avatar's STT. */
export function sttBrowserPreferat(ua: string, areSpeechRecognition: boolean): boolean {
  if (!areSpeechRecognition) return false;
  // iOS Safari stops recognition while WebRTC audio plays; the avatar's own STT stays there.
  return !/iPhone|iPad|iPod/i.test(ua);
}

/** Interim-text debouncer: calls `send` once the text is unchanged for `stabilMs`. */
export function createTrimitereAnticipata(
  send: (text: string) => void,
  stabilMs = STABIL_MS,
  timers: { set: (fn: () => void, ms: number) => number; clear: (id: number) => void } = {
    set: (fn, ms) => window.setTimeout(fn, ms),
    clear: (id) => window.clearTimeout(id),
  },
) {
  let timer: number | null = null;
  let ultim = "";
  let anticipat: string | null = null;
  const opreste = () => { if (timer !== null) timers.clear(timer); timer = null; };
  return {
    /** Interim (partial) text from the recognizer. */
    interim(text: string) {
      const t = text.trim();
      if (!t || t === ultim) return;
      ultim = t;
      opreste();
      // Already sent early and the student only added a word or two: no second question.
      if (anticipat && !trebuieTrimisFinal(t, anticipat)) return;
      timer = timers.set(() => { timer = null; anticipat = t; send(t); }, stabilMs);
    },
    /** Final text from the recognizer: sent only if it adds to what was already sent early. */
    final(text: string) {
      opreste();
      const t = text.trim();
      const a = anticipat;
      anticipat = null;
      ultim = "";
      if (t && trebuieTrimisFinal(t, a)) send(t);
    },
    reset() { opreste(); ultim = ""; anticipat = null; },
  };
}

/** A canceled generation can never start another queued speech. */
export function createSpeechQueue() {
  let generation = 0;
  let tail = Promise.resolve();
  return {
    cancel() {
      generation += 1;
      tail = Promise.resolve();
    },
    enqueue(speak: () => Promise<void>) {
      const current = generation;
      const run = async () => {
        if (current === generation) await speak();
      };
      tail = tail.then(run, run);
      return tail;
    },
  };
}
/** Minimum words before the opening clause (up to a comma/colon) is spoken ahead of its sentence. */
export const CLAUZA_MIN_CUVINTE = 5;

/**
 * Splits complete spoken sentences off a streaming buffer; the unfinished tail stays in `rest`.
 * While nothing has been spoken yet (`inceput`), a long opening sentence is cut at its first comma
 * or colon so the voice starts earlier; the pause there sounds natural.
 */
export function takeSentences(buf: string, inceput = false): { sentences: string[]; rest: string } {
  const sentences: string[] = [];
  const re = /[.!?…]+(?=\s)/g;
  let start = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(buf))) {
    const end = m.index + m[0].length;
    const s = buf.slice(start, end).trim();
    // Avoid speaking 1–2 word fragments (e.g. "Da.") on their own: merge with the next sentence.
    if (s.split(/\s+/).length < 3 && sentences.length === 0 && start === 0 && buf.length - end < 200) continue;
    if (s) sentences.push(s);
    start = end;
  }
  if (inceput && sentences.length === 0 && start === 0) {
    const c = /[,:;](?=\s)/.exec(buf);
    if (c) {
      const clauza = buf.slice(0, c.index + 1).trim();
      const dupa = buf.slice(c.index + 1);
      // Only when the clause is a real phrase and the sentence clearly goes on after it.
      if (clauza.split(/\s+/).length >= CLAUZA_MIN_CUVINTE && dupa.trim().split(/\s+/).length >= 3 && !/\d[,:]$/.test(clauza)) {
        return { sentences: [clauza], rest: dupa };
      }
    }
  }
  return { sentences, rest: buf.slice(start) };
}

/** Spoken part of a streamed reply (before the "TABLA:" line) and whether the board started. */
export function spokenPart(full: string): { spoken: string; board: string | null } {
  const i = full.search(/(^|\n)\s*TABLA:/);
  if (i < 0) {
    // Hold back a trailing partial "TAB…" so it is never spoken.
    const partial = /\n\s*T?A?B?L?A?$/.exec(full);
    return { spoken: partial ? full.slice(0, partial.index) : full, board: null };
  }
  return { spoken: full.slice(0, i), board: full.slice(i).replace(/^\s*TABLA:\s*/, "") };
}

const words = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").match(/[a-z0-9]+/g) ?? [];

/** True when the microphone most likely heard the professor's own voice (speaker echo). */
export function isEcho(heard: string, spoken: string): boolean {
  const h = words(heard);
  if (!h.length || !spoken) return false;
  const s = new Set(words(spoken));
  return h.filter((w) => s.has(w)).length / h.length >= 0.6;
}

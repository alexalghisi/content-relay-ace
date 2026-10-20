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
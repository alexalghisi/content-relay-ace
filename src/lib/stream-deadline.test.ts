import { expect, test } from "bun:test";
import { readWithDeadline, withInitialDeadline } from "./stream-deadline";
test("stalled single-provider stream times out and cancels upstream", async () => {
  let cancelled = false;
  const reader = new ReadableStream({ cancel() { cancelled = true; } }).getReader();
  await expect(readWithDeadline(reader, undefined, 5)).rejects.toThrow("timpul de așteptare");
  expect(cancelled).toBe(true);
});
test("active reply outlives initial deadline without being aborted", async () => {
  const ctrl = new AbortController();
  const reader = await withInitialDeadline(ctrl, async () => new ReadableStream<number>({
    start(stream) {
      let count = 0;
      const timer = setInterval(() => { stream.enqueue(++count); if (count === 6) { clearInterval(timer); stream.close(); } }, 10);
    },
  }).getReader(), 20);
  const values: number[] = [];
  for (;;) {
    const result = await readWithDeadline(reader, ctrl.signal, 40);
    if (result.done) break;
    values.push(result.value);
  }
  expect(values).toEqual([1, 2, 3, 4, 5, 6]);
  expect(ctrl.signal.aborted).toBe(false);
});
test("initial connection stall still aborts with timeout", async () => {
  const ctrl = new AbortController();
  const result = withInitialDeadline(ctrl, () => new Promise<void>((_, reject) => {
    ctrl.signal.addEventListener("abort", () => reject(new DOMException("Anulat", "AbortError")), { once: true });
  }), 5);
  await expect(result).rejects.toMatchObject({ name: "TimeoutError" });
  expect(ctrl.signal.aborted).toBe(true);
});
test("explicit abort cancels stream without replay", async () => {
  let cancelled = false;
  const reader = new ReadableStream({ cancel() { cancelled = true; } }).getReader();
  const ctrl = new AbortController();
  const pending = readWithDeadline(reader, ctrl.signal);
  ctrl.abort();
  await expect(pending).rejects.toThrow("Anulat");
  expect(cancelled).toBe(true);
});
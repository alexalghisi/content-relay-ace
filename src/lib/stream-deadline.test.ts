import { expect, test } from "bun:test";
import { readWithDeadline } from "./stream-deadline";
test("stalled single-provider stream times out and cancels upstream", async () => {
  let cancelled = false;
  const reader = new ReadableStream({ cancel() { cancelled = true; } }).getReader();
  await expect(readWithDeadline(reader, undefined, 5)).rejects.toThrow("timpul de așteptare");
  expect(cancelled).toBe(true);
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
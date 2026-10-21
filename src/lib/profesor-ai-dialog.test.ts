import { expect, test } from "bun:test";
import { createSpeechQueue } from "./profesor-ai-dialog";

test("interrupting mid-sentence discards the old queued explanation", async () => {
  const queue = createSpeechQueue();
  const spoken: string[] = [];
  let finish: (() => void) | undefined;
  void queue.enqueue(async () => {
    spoken.push("explanation");
    await new Promise<void>((resolve) => { finish = resolve; });
  });
  const old = queue.enqueue(async () => { spoken.push("old continuation"); });
  await Promise.resolve();
  queue.cancel();
  await queue.enqueue(async () => { spoken.push("answer to interruption"); });
  finish?.();
  await old;
  expect(spoken).toEqual(["explanation", "answer to interruption"]);
});

test("without interruption speech retains its order", async () => {
  const queue = createSpeechQueue();
  const spoken: number[] = [];
  void queue.enqueue(async () => { spoken.push(1); });
  await queue.enqueue(async () => { spoken.push(2); });
  expect(spoken).toEqual([1, 2]);
});
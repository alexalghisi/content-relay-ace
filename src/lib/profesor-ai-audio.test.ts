import { expect, test } from "bun:test";
import { playLessonMedia } from "./profesor-ai-audio";

test("a sound activation unmutes and plays the attached media at full volume", async () => {
  let calls = 0;
  const media = { muted: true, volume: 0, play: async () => { calls++; } } as unknown as HTMLMediaElement;
  expect(await playLessonMedia(media, true)).toBe(true);
  expect(media.muted).toBe(false);
  expect(media.volume).toBe(1);
  expect(calls).toBe(1);
});

test("autoplay denial is surfaced rather than reported as working sound", async () => {
  const media = { play: async () => { throw new DOMException("User gesture required", "NotAllowedError"); } } as unknown as HTMLMediaElement;
  expect(await playLessonMedia(media, true)).toBe(false);
});

test("muting keeps video playing without audio", async () => {
  const media = { muted: false, volume: 0, play: async () => {} } as unknown as HTMLMediaElement;
  expect(await playLessonMedia(media, false)).toBe(true);
  expect(media.muted).toBe(true);
});
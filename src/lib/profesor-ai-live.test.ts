import { expect, test } from "bun:test";
import { AvatarLipSync, b64FromBytes, LiveLesson, OpenAiLesson, pregatit, type LiveEvents } from "./profesor-ai-live";

const ev: LiveEvents = { onReady() {}, onTeacherAudio() {}, onTurnComplete() {}, onInterrupted() {}, onBoard() {}, onDrawing() {}, onTeacherText() {}, onStudentText() {}, onError() {}, onClose() {} };

test("all audio chunks and speak_end share one utterance ID; next turn gets a new ID", () => {
  const sent: Array<{ type: string; event_id: string }> = [];
  const socket = { readyState: WebSocket.OPEN, send: (s: string) => sent.push(JSON.parse(s)) } as unknown as WebSocket;
  const lip = new AvatarLipSync(() => socket);
  lip.push(b64FromBytes(new Uint8Array(14400)));
  lip.push(b64FromBytes(new Uint8Array(48000)));
  lip.end();
  expect(sent.map((s) => s.type)).toEqual(["agent.speak", "agent.speak", "agent.speak_end"]);
  expect(new Set(sent.map((s) => s.event_id)).size).toBe(1);
  lip.push(b64FromBytes(new Uint8Array(14400)));
  lip.end();
  expect(sent[3]?.event_id).not.toBe(sent[0]?.event_id);
});

test("closed or failing avatar socket reports playback failure, not silent success", () => {
  let open = false;
  const socket = { get readyState() { return open ? WebSocket.OPEN : WebSocket.CLOSED; }, send() { throw new Error("disconnected"); } } as unknown as WebSocket;
  const lip = new AvatarLipSync(() => socket);
  expect(lip.push(b64FromBytes(new Uint8Array(14400)))).toBe(false);
  open = true;
  expect(lip.push(b64FromBytes(new Uint8Array(14400)))).toBe(false);
});

for (const provider of ["gemini", "openai"]) {
  test(`${provider}: stopping during microphone permission releases late tracks`, async () => {
    const original = globalThis.WebSocket;
    class Socket { static OPEN = 1; readyState = 1; close() {} send() {} }
    globalThis.WebSocket = Socket as unknown as typeof WebSocket;
    let resolve: ((s: MediaStream) => void) | undefined;
    let stops = 0;
    pregatit.stream = new Promise<MediaStream>((r) => { resolve = r; });
    const lesson = provider === "gemini" ? new LiveLesson("test", {}, ev) : new OpenAiLesson("test", "test", ev);
    try {
      const pending = lesson.start("start");
      lesson.stop();
      resolve?.({ getTracks: () => [{ stop: () => stops++ }], getAudioTracks: () => [{ readyState: "live" }] } as unknown as MediaStream);
      await pending;
      expect(stops).toBe(1);
      expect(pregatit.stream).toBeNull();
    } finally { globalThis.WebSocket = original; pregatit.stream = null; }
  });
}
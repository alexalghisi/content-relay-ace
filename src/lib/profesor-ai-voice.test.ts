import { expect, test } from "bun:test";
import { connectVoice, type VoiceSession } from "./profesor-ai-voice";

function fake() {
  const handlers: Record<string, ((e: { text?: string }) => void)[]> = {};
  const out: string[] = [];
  let state = "INACTIVE";
  const s: VoiceSession = {
    on: (ev, cb) => (handlers[ev] ??= []).push(cb),
    repeat: (t) => out.push(`speak_text:${t}`),
    startListening: () => out.push("start_listening"),
    interrupt: () => out.push("interrupt"),
    voiceChat: {
      get state() { return state; },
      start: async () => { state = "ACTIVE"; out.push("mic_start"); },
      unmute: async () => { out.push("unmute"); },
      mute: async () => { out.push("mute"); },
    },
  };
  const emit = (ev: string, e: { text?: string } = {}) => handlers[ev]?.forEach((h) => h(e));
  return { s, out, emit };
}

test("three spoken questions → three spoken answers, listening restarted each time, barge-in interrupts", async () => {
  const { s, out, emit } = fake();
  const asked: string[] = [];
  let aborts = 0;
  const v = connectVoice(s, {
    onUserSpeechStart: () => aborts++,
    onUserTranscript: (t) => { asked.push(t); void v.speak(`Răspuns la: ${t}`); },
    onSpeaking: () => {},
    log: () => {},
  });
  await v.enableMic();
  expect(out.slice(0, 3)).toEqual(["mic_start", "unmute", "start_listening"]);

  for (const q of ["Cât face 2+2?", "Dar 3 ori 4?", "Ce e o fracție?"]) {
    emit("user.transcription", { text: q });
    emit("avatar.speak_started");
    emit("avatar.speak_ended");
  }
  expect(asked).toHaveLength(3);
  expect(out.filter((o) => o.startsWith("speak_text:"))).toHaveLength(3);
  expect(out.filter((o) => o === "start_listening")).toHaveLength(4);

  emit("user.transcription", { text: "Explică altfel" });
  emit("avatar.speak_started");
  emit("user.speak_started"); // student talks while she speaks
  expect(out.at(-1)).toBe("interrupt");
  expect(aborts).toBe(1);
});

test("empty transcription is ignored and a muted mic does not re-listen", async () => {
  const { s, out, emit } = fake();
  const asked: string[] = [];
  const v = connectVoice(s, { onUserSpeechStart: () => {}, onUserTranscript: (t) => asked.push(t), onSpeaking: () => {}, log: () => {} });
  emit("user.transcription", { text: "  " });
  emit("avatar.speak_ended");
  expect(asked).toEqual([]);
  expect(out).not.toContain("start_listening");
  void v;
});

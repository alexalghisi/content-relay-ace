// Live voice loop for a LiveAvatar FULL session: student mic → LiveAvatar STT (ro) → our tutor →
// avatar.speak_text. Pure wiring over a minimal session interface so it is testable with fake events.

export type VoiceSession = {
  on: (event: string, cb: (e: { text?: string }) => void) => unknown;
  repeat: (text: string) => unknown; // sends avatar.speak_text (our text, not LiveAvatar's LLM)
  startListening: () => unknown; // sends avatar.start_listening on agent-control
  interrupt: () => unknown; // sends avatar.interrupt
  voiceChat: { start: (c?: { defaultMuted?: boolean }) => Promise<void>; unmute: () => Promise<void>; mute: () => Promise<void>; state?: string };
};

export type VoiceHandlers = {
  onUserSpeechStart: () => void; // abort tutor stream + drop queued sentences
  onUserTranscript: (text: string) => void; // student bubble + send to tutor
  onAvatarTranscript?: (text: string) => void;
  onSpeaking: (speaking: boolean) => void;
  log?: (...a: unknown[]) => void;
};

export const VOICE_EVENTS = {
  USER_SPEAK_STARTED: "user.speak_started",
  USER_TRANSCRIPTION: "user.transcription",
  AVATAR_TRANSCRIPTION: "avatar.transcription",
  AVATAR_SPEAK_STARTED: "avatar.speak_started",
  AVATAR_SPEAK_ENDED: "avatar.speak_ended",
  STREAM_READY: "session.stream_ready",
} as const;

export function connectVoice(s: VoiceSession, h: VoiceHandlers) {
  const log = h.log ?? ((...a: unknown[]) => console.info("[voice]", ...a));
  let micOn = false;
  let speakDone: (() => void) | null = null;

  const listen = () => {
    if (!micOn) return;
    try { s.startListening(); log("out avatar.start_listening"); } catch (e) { log("start_listening failed", e); }
  };
  const finishSpeak = () => { const f = speakDone; speakDone = null; f?.(); };

  s.on(VOICE_EVENTS.USER_SPEAK_STARTED, () => {
    log("in user.speak_started");
    try { s.interrupt(); log("out avatar.interrupt"); } catch { /* not connected */ }
    finishSpeak();
    h.onUserSpeechStart();
  });
  s.on(VOICE_EVENTS.USER_TRANSCRIPTION, (e) => {
    const t = e?.text?.trim() ?? "";
    log("in user.transcription", t);
    if (t) h.onUserTranscript(t);
  });
  s.on(VOICE_EVENTS.AVATAR_TRANSCRIPTION, (e) => {
    log("in avatar.transcription", e?.text ?? "");
    if (e?.text) h.onAvatarTranscript?.(e.text);
  });
  s.on(VOICE_EVENTS.AVATAR_SPEAK_STARTED, () => { log("in avatar.speak_started"); h.onSpeaking(true); });
  s.on(VOICE_EVENTS.AVATAR_SPEAK_ENDED, () => {
    log("in avatar.speak_ended");
    h.onSpeaking(false);
    finishSpeak();
    listen(); // keep listening the whole lesson
  });
  s.on(VOICE_EVENTS.STREAM_READY, () => listen()); // also after reconnects

  return {
    get micOn() { return micOn; },
    /** Speaks one sentence; resolves at avatar.speak_ended (or a length-based timeout). */
    speak(text: string) {
      finishSpeak();
      return new Promise<void>((done) => {
        const t = setTimeout(() => fin(), 2500 + text.length * 90);
        const fin = () => { clearTimeout(t); if (speakDone === fin) speakDone = null; done(); };
        speakDone = fin;
        s.repeat(text);
        log("out avatar.speak_text", text);
      });
    },
    interrupt() {
      finishSpeak();
      try { s.interrupt(); log("out avatar.interrupt"); } catch { /* not connected */ }
    },
    /** Publishes the student's mic track to the room (after permission) and starts listening. */
    async enableMic() {
      micOn = true;
      if (s.voiceChat.state !== "ACTIVE") await s.voiceChat.start({ defaultMuted: false });
      await s.voiceChat.unmute();
      log("mic published");
      listen();
    },
    async disableMic() {
      micOn = false;
      await s.voiceChat.mute().catch(() => {});
      log("mic muted");
    },
  };
}
export type VoiceLink = ReturnType<typeof connectVoice>;

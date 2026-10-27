// Browser side of the live lesson: microphone → Gemini Live (WebSocket) → teacher's audio, which is
// either lip-synced by a LiveAvatar LITE avatar or played directly. Gemini handles turn-taking
// (voice activity detection, barge-in), so there is no separate speech-to-text or text-to-speech step.

const WS =
  "wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContentConstrained";

/**
 * iPhone/Safari only grants the microphone and audio playback reliably inside a tap. The lesson's
 * start button calls this synchronously in its click handler; the lesson then reuses these.
 */
export const pregatit: { stream: Promise<MediaStream> | null; micCtx: AudioContext | null; playCtx: AudioContext | null } = {
  stream: null, micCtx: null, playCtx: null,
};
export function deblocheazaAudioMicrofon() {
  const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  try { pregatit.micCtx ??= new AC(); void pregatit.micCtx.resume(); } catch { /* ignore */ }
  try { pregatit.playCtx ??= new AC({ sampleRate: 24000 }); void pregatit.playCtx.resume(); } catch { /* ignore */ }
  pregatit.stream ??= navigator.mediaDevices.getUserMedia({
    audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 },
  });
  pregatit.stream.catch(() => { pregatit.stream = null; });
}
async function micStream() {
  // The prepared stream is single-use: stop() ends its tracks, so a later lesson must request a fresh one.
  const cached = pregatit.stream;
  pregatit.stream = null;
  if (cached) {
    try {
      const s = await cached;
      if (s.getAudioTracks().some((t) => t.readyState === "live")) return s;
    } catch { /* ask again */ }
  }
  return navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 } });
}
function micContext() {
  const c = pregatit.micCtx ?? new AudioContext();
  pregatit.micCtx = null;
  void c.resume();
  return c;
}

export type LiveEvents = {
  onReady: () => void;
  onTeacherAudio: (pcm24kB64: string) => void;
  onTurnComplete: () => void;
  onInterrupted: () => void;
  onBoard: (text: string) => void;
  onDrawing: (svg: string) => void;
  onTeacherText: (t: string) => void;
  onStudentText: (t: string) => void;
  onError: (msg: string) => void;
  onClose: () => void;
};

const WORKLET = `
class Mic extends AudioWorkletProcessor {
  constructor(o) { super(); const r = (o && o.processorOptions && o.processorOptions.rate) || 16000; this.buf = []; this.ratio = sampleRate / r; this.pos = 0; }
  process(inputs) {
    const ch = inputs[0] && inputs[0][0];
    if (!ch) return true;
    // Downsample to 16 kHz (simple decimation with averaging) and send ~100 ms frames.
    for (; this.pos < ch.length; this.pos += this.ratio) {
      const i = Math.floor(this.pos);
      const s = Math.max(-1, Math.min(1, ch[i]));
      this.buf.push(s < 0 ? s * 0x8000 : s * 0x7fff);
    }
    this.pos -= ch.length;
    if (this.buf.length >= 1600) {
      let e = 0; for (const v of this.buf) e += (v / 32768) * (v / 32768);
      this.port.postMessage({ pcm: Int16Array.from(this.buf).buffer, rms: Math.sqrt(e / this.buf.length) });
      this.buf = [];
    }
    return true;
  }
}
registerProcessor("pa-mic", Mic);`;

export function b64FromBytes(u8: Uint8Array): string {
  let s = "";
  for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode(...u8.subarray(i, i + 0x8000));
  return btoa(s);
}
export function bytesFromB64(b64: string): Uint8Array {
  const s = atob(b64);
  const u8 = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) u8[i] = s.charCodeAt(i);
  return u8;
}

type Setup = Record<string, unknown>;

export class LiveLesson {
  private ws: WebSocket | null = null;
  private ctx: AudioContext | null = null;
  private stream: MediaStream | null = null;
  private node: AudioWorkletNode | null = null;
  private closed = false;
  private resumeHandle: string | null = null;
  private reconnects = 0;
  muted = false;
  /** True while the teacher's voice is playing (avatar or speakers). */
  teacherSpeaking: () => boolean = () => false;

  constructor(private token: string, private setup: Setup, private ev: LiveEvents) {}

  async start(firstMessage: string) {
    this.connect(firstMessage);
    await this.startMic();
  }

  private connect(firstMessage?: string) {
    const ws = new WebSocket(`${WS}?access_token=${encodeURIComponent(this.token)}`);
    this.ws = ws;
    ws.onopen = () => {
      const setup = { ...this.setup } as Setup;
      if (this.resumeHandle) setup["sessionResumption"] = { handle: this.resumeHandle };
      ws.send(JSON.stringify({ setup }));
    };
    ws.onmessage = async (e) => {
      const raw = typeof e.data === "string" ? e.data : await (e.data as Blob).text();
      let m: Record<string, any>;
      try { m = JSON.parse(raw); } catch { return; }
      if (m.setupComplete) {
        this.reconnects = 0;
        this.ev.onReady();
        if (firstMessage) { this.sendText(firstMessage); firstMessage = undefined; }
      }
      if (m.sessionResumptionUpdate?.newHandle) this.resumeHandle = m.sessionResumptionUpdate.newHandle;
      const sc = m.serverContent;
      if (sc) {
        if (sc.interrupted) this.ev.onInterrupted();
        for (const p of sc.modelTurn?.parts ?? []) {
          if (p.inlineData?.data && String(p.inlineData.mimeType ?? "").startsWith("audio/")) this.ev.onTeacherAudio(p.inlineData.data);
        }
        if (sc.outputTranscription?.text) this.ev.onTeacherText(sc.outputTranscription.text);
        if (sc.inputTranscription?.text) this.ev.onStudentText(sc.inputTranscription.text);
        if (sc.turnComplete) this.ev.onTurnComplete();
      }
      if (m.toolCall?.functionCalls) {
        const functionResponses = m.toolCall.functionCalls.map((f: { id: string; name: string; args?: { text?: string; svg?: string } }) => {
          if (f.name === "scrie_pe_tabla" && f.args?.text) this.ev.onBoard(f.args.text);
          if (f.name === "deseneaza" && f.args?.svg) this.ev.onDrawing(f.args.svg);
          return { id: f.id, name: f.name, response: { result: "ok" } };
        });
        this.send({ toolResponse: { functionResponses } });
      }
      if (m.goAway) this.reconnect();
    };
    ws.onclose = (e) => {
      if (this.ws !== ws || this.closed) return;
      console.warn("[profesor-ai] live închis", e.code, e.reason);
      if (e.code === 1008 || /quota|billing|permission|api key/i.test(e.reason)) {
        this.closed = true;
        this.ev.onError(e.reason || "Gemini Live a refuzat conexiunea.");
        return this.ev.onClose();
      }
      this.reconnect();
    };
  }

  private reconnect() {
    if (this.closed) return;
    if (this.reconnects++ >= 3) { this.closed = true; this.ev.onError("Conexiunea cu profesoara s-a întrerupt."); return this.ev.onClose(); }
    const old = this.ws;
    this.ws = null;
    try { old?.close(); } catch { /* ignore */ }
    window.setTimeout(() => this.connect(), 400);
  }

  private send(o: unknown) {
    if (this.ws?.readyState === WebSocket.OPEN) this.ws.send(JSON.stringify(o));
  }

  /** A typed message or a system cue (start, silence). */
  sendText(text: string) {
    this.send({ clientContent: { turns: [{ role: "user", parts: [{ text }] }], turnComplete: true } });
  }

  private async startMic() {
    this.stream = await micStream();
    const ctx = micContext();
    this.ctx = ctx;
    const url = URL.createObjectURL(new Blob([WORKLET], { type: "application/javascript" }));
    await ctx.audioWorklet.addModule(url);
    URL.revokeObjectURL(url);
    const src = ctx.createMediaStreamSource(this.stream);
    const node = new AudioWorkletNode(ctx, "pa-mic");
    this.node = node;
    let loudFrames = 0;
    node.port.onmessage = (e) => {
      if (this.muted) return;
      const { pcm, rms } = e.data as { pcm: ArrayBuffer; rms: number };
      // While she speaks, her own voice leaks back into the mic (laptop speakers) and Gemini would
      // take it as the student interrupting, cutting her off mid-sentence. So during her speech only
      // clearly louder, sustained speech (the student talking over her) is passed through.
      if (this.teacherSpeaking()) {
        loudFrames = rms > 0.08 ? loudFrames + 1 : 0;
        if (loudFrames < 3) return;
      } else loudFrames = 0;
      this.send({ realtimeInput: { audio: { data: b64FromBytes(new Uint8Array(pcm)), mimeType: "audio/pcm;rate=16000" } } });
    };
    src.connect(node);
  }

  stop() {
    this.closed = true;
    try { this.ws?.close(); } catch { /* ignore */ }
    this.ws = null;
    this.node?.disconnect();
    this.stream?.getTracks().forEach((t) => t.stop());
    void this.ctx?.close().catch(() => {});
  }
}

/** Plays 24 kHz PCM chunks back to back (used when there is no video avatar). */
export class PcmPlayer {
  private ctx: AudioContext | null = null;
  private t = 0;
  private sources = new Set<AudioBufferSourceNode>();
  onPlaying: (on: boolean) => void = () => {};

  play(b64: string) {
    this.ctx ??= pregatit.playCtx ?? new AudioContext({ sampleRate: 24000 });
    pregatit.playCtx = null;
    const ctx = this.ctx;
    void ctx.resume();
    const u8 = bytesFromB64(b64);
    const i16 = new Int16Array(u8.buffer, u8.byteOffset, Math.floor(u8.byteLength / 2));
    const buf = ctx.createBuffer(1, i16.length, 24000);
    const ch = buf.getChannelData(0);
    for (let i = 0; i < i16.length; i++) ch[i] = i16[i] / 0x8000;
    const s = ctx.createBufferSource();
    s.buffer = buf;
    s.connect(ctx.destination);
    this.t = Math.max(this.t, ctx.currentTime + 0.03);
    s.start(this.t);
    this.t += buf.duration;
    this.sources.add(s);
    this.onPlaying(true);
    s.onended = () => { this.sources.delete(s); if (!this.sources.size) this.onPlaying(false); };
  }

  stop() {
    for (const s of this.sources) { try { s.stop(); } catch { /* ignore */ } }
    this.sources.clear();
    this.t = 0;
    this.onPlaying(false);
  }

  close() { this.stop(); void this.ctx?.close().catch(() => {}); }
}

/**
 * Feeds Gemini's audio to a LiveAvatar LITE session over its event socket, batching to ~1 s
 * chunks (the documented sweet spot) and sealing the utterance at the end of each turn.
 */
export class AvatarLipSync {
  private pending: Uint8Array[] = [];
  private bytes = 0;
  private started = false;
  constructor(private socket: () => WebSocket | null) {}

  private id() { return crypto.randomUUID?.() ?? String(Math.random()).slice(2); }
  private raw(o: unknown) { const s = this.socket(); if (s?.readyState === WebSocket.OPEN) s.send(JSON.stringify(o)); }

  private flush() {
    if (!this.bytes) return;
    const all = new Uint8Array(this.bytes);
    let o = 0;
    for (const p of this.pending) { all.set(p, o); o += p.length; }
    this.pending = [];
    this.bytes = 0;
    this.raw({ type: "agent.speak", event_id: this.id(), audio: b64FromBytes(all) });
    this.started = true;
  }

  push(b64: string) {
    const u8 = bytesFromB64(b64);
    this.pending.push(u8);
    this.bytes += u8.length;
    // First chunk early (~300 ms) so she starts moving fast, then ~1 s chunks.
    if (this.bytes >= (this.started ? 48000 : 14400)) this.flush();
  }

  end() {
    this.flush();
    if (this.started) this.raw({ type: "agent.speak_end", event_id: this.id() });
    this.started = false;
  }

  interrupt() {
    this.pending = [];
    this.bytes = 0;
    this.started = false;
    this.raw({ type: "agent.interrupt", event_id: this.id() });
  }

  keepAlive() { this.raw({ type: "session.keep_alive", event_id: this.id() }); }
}


/**
 * OpenAI Realtime (speech-to-speech) over WebSocket with a short-lived client secret. Same events
 * as LiveLesson; audio in and out is 24 kHz PCM, so the avatar lip-sync gets it unchanged.
 */
export class OpenAiLesson {
  private ws: WebSocket | null = null;
  private ctx: AudioContext | null = null;
  private stream: MediaStream | null = null;
  private node: AudioWorkletNode | null = null;
  private closed = false;
  muted = false;
  teacherSpeaking: () => boolean = () => false;

  constructor(private token: string, private model: string, private ev: LiveEvents) {}

  async start(firstMessage: string) {
    const ws = new WebSocket(`wss://api.openai.com/v1/realtime?model=${encodeURIComponent(this.model)}`, [
      "realtime",
      `openai-insecure-api-key.${this.token}`,
    ]);
    this.ws = ws;
    let ready = false;
    ws.onmessage = (e) => {
      let m: Record<string, any>;
      try { m = JSON.parse(String(e.data)); } catch { return; }
      switch (m.type) {
        case "session.created":
          if (!ready) { ready = true; this.ev.onReady(); this.sendText(firstMessage); }
          break;
        case "response.output_audio.delta":
          if (m.delta) this.ev.onTeacherAudio(m.delta);
          break;
        case "response.output_audio_transcript.delta":
          if (m.delta) this.ev.onTeacherText(m.delta);
          break;
        case "conversation.item.input_audio_transcription.completed":
          if (m.transcript) this.ev.onStudentText(m.transcript);
          break;
        case "input_audio_buffer.speech_started":
          this.ev.onInterrupted();
          break;
        case "response.function_call_arguments.done": {
          let args: { text?: string; svg?: string } = {};
          try { args = JSON.parse(m.arguments || "{}"); } catch { /* ignore */ }
          if (m.name === "scrie_pe_tabla" && args.text) this.ev.onBoard(args.text);
          if (m.name === "deseneaza" && args.svg) this.ev.onDrawing(args.svg);
          this.send({ type: "conversation.item.create", item: { type: "function_call_output", call_id: m.call_id, output: "ok" } });
          this.pendingTool = true;
          break;
        }
        case "response.done":
          // After a board/drawing call the model continues speaking in a new response.
          if (this.pendingTool) { this.pendingTool = false; this.send({ type: "response.create" }); }
          else this.ev.onTurnComplete();
          break;
        case "error":
          console.warn("[profesor-ai] openai realtime", m.error);
          if (!ready || /api key|quota|billing|insufficient/i.test(JSON.stringify(m.error ?? ""))) {
            this.ev.onError(m.error?.message ?? "OpenAI Realtime a refuzat conexiunea.");
          }
          break;
      }
    };
    ws.onclose = (e) => {
      if (this.closed || this.ws !== ws) return;
      console.warn("[profesor-ai] openai închis", e.code, e.reason);
      this.closed = true;
      this.ev.onError(e.reason || "Conexiunea cu profesoara s-a întrerupt.");
      this.ev.onClose();
    };
    await this.startMic();
  }
  private pendingTool = false;

  private send(o: unknown) {
    if (this.ws?.readyState === WebSocket.OPEN) this.ws.send(JSON.stringify(o));
  }

  sendText(text: string) {
    this.send({ type: "conversation.item.create", item: { type: "message", role: "user", content: [{ type: "input_text", text }] } });
    this.send({ type: "response.create" });
  }

  private async startMic() {
    this.stream = await micStream();
    const ctx = micContext();
    this.ctx = ctx;
    const url = URL.createObjectURL(new Blob([WORKLET], { type: "application/javascript" }));
    await ctx.audioWorklet.addModule(url);
    URL.revokeObjectURL(url);
    const src = ctx.createMediaStreamSource(this.stream);
    const node = new AudioWorkletNode(ctx, "pa-mic", { processorOptions: { rate: 24000 } });
    this.node = node;
    let loudFrames = 0;
    node.port.onmessage = (e) => {
      if (this.muted) return;
      const { pcm, rms } = e.data as { pcm: ArrayBuffer; rms: number };
      if (this.teacherSpeaking()) {
        loudFrames = rms > 0.08 ? loudFrames + 1 : 0;
        if (loudFrames < 3) return;
      } else loudFrames = 0;
      this.send({ type: "input_audio_buffer.append", audio: b64FromBytes(new Uint8Array(pcm)) });
    };
    src.connect(node);
  }

  stop() {
    this.closed = true;
    try { this.ws?.close(); } catch { /* ignore */ }
    this.ws = null;
    this.node?.disconnect();
    this.stream?.getTracks().forEach((t) => t.stop());
    void this.ctx?.close().catch(() => {});
  }
}

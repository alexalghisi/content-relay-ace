// Browser side of the live lesson: microphone → Gemini Live (WebSocket) → teacher's audio, which is
// either lip-synced by a LiveAvatar LITE avatar or played directly. Gemini handles turn-taking
// (voice activity detection, barge-in), so there is no separate speech-to-text or text-to-speech step.

const WS =
  "wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContentConstrained";

export type LiveEvents = {
  onReady: () => void;
  onTeacherAudio: (pcm24kB64: string) => void;
  onTurnComplete: () => void;
  onInterrupted: () => void;
  onBoard: (text: string) => void;
  onTeacherText: (t: string) => void;
  onStudentText: (t: string) => void;
  onError: (msg: string) => void;
  onClose: () => void;
};

const WORKLET = `
class Mic extends AudioWorkletProcessor {
  constructor() { super(); this.buf = []; this.ratio = sampleRate / 16000; this.pos = 0; }
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
    if (this.buf.length >= 1600) { this.port.postMessage(Int16Array.from(this.buf).buffer, []); this.buf = []; }
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
        const functionResponses = m.toolCall.functionCalls.map((f: { id: string; name: string; args?: { text?: string } }) => {
          if (f.name === "scrie_pe_tabla" && f.args?.text) this.ev.onBoard(f.args.text);
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
    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 },
    });
    const ctx = new AudioContext();
    this.ctx = ctx;
    const url = URL.createObjectURL(new Blob([WORKLET], { type: "application/javascript" }));
    await ctx.audioWorklet.addModule(url);
    URL.revokeObjectURL(url);
    const src = ctx.createMediaStreamSource(this.stream);
    const node = new AudioWorkletNode(ctx, "pa-mic");
    this.node = node;
    node.port.onmessage = (e) => {
      if (this.muted) return;
      this.send({ realtimeInput: { audio: { data: b64FromBytes(new Uint8Array(e.data as ArrayBuffer)), mimeType: "audio/pcm;rate=16000" } } });
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
    this.ctx ??= new AudioContext({ sampleRate: 24000 });
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

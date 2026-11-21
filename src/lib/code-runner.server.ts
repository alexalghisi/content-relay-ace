// Rulare de cod C++/Python prin Judge0 — doar pe server, niciodată din browser.
// Fără cheie folosim instanța publică gratuită ce.judge0.com; cu JUDGE0_API_KEY (RapidAPI)
// trecem pe endpoint-ul plătit. Nu logăm codul elevului — doar statusul.
export type RunnerLang = "cpp" | "python";

export const MAX_SOURCE_BYTES = 32_000;
export const MAX_INPUT_BYTES = 4_000;
const MAX_OUTPUT = 32_768;

const LANGUAGE_ID: Record<RunnerLang, number> = {
  cpp: 54, // C++ (GCC 9.2, -std=c++17)
  python: 71, // Python 3.8
};

export interface RunResult {
  status: string;
  stdout: string;
  stderr: string;
  timeMs: number | null;
  memoryKb: number | null;
}

function b64encode(s: string): string {
  const bytes = new TextEncoder().encode(s);
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000)
    bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}

function b64decode(s: string | null): string {
  if (!s) return "";
  const bin = atob(s);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

/** Rulează o singură dată sursa cu intrarea dată. Aruncă eroare la probleme de rețea/furnizor. */
export async function runCode(opts: {
  lang: RunnerLang;
  code: string;
  input: string;
  apiKey?: string;
}): Promise<RunResult> {
  const { lang, code, input } = opts;
  const apiKey = opts.apiKey ?? "";
  const host = apiKey ? "judge0-ce.p.rapidapi.com" : "ce.judge0.com";
  const headers: Record<string, string> = apiKey
    ? { "Content-Type": "application/json", "X-RapidAPI-Key": apiKey, "X-RapidAPI-Host": host }
    : { "Content-Type": "application/json" };

  const body = {
    language_id: LANGUAGE_ID[lang],
    source_code: b64encode(code),
    stdin: b64encode(input),
    cpu_time_limit: 5,
    wall_time_limit: 10,
    memory_limit: 128_000,
    max_output_size: MAX_OUTPUT,
  };
  const res = await fetch(`https://${host}/submissions?base64_encoded=true&wait=true`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`runner ${res.status}`);

  type J = {
    status: { id: number; description: string };
    stdout: string | null;
    stderr: string | null;
    compile_output: string | null;
    time: string | null;
    memory: number | null;
    token?: string;
  };
  let s = (await res.json()) as J;

  // La wait=true instanța publică poate întoarce totuși „în coadă”; mai așteptăm puțin.
  for (let i = 0; s.status && s.status.id <= 2 && s.token && i < 10; i++) {
    await new Promise((r) => setTimeout(r, 1500));
    const r2 = await fetch(
      `https://${host}/submissions/${s.token}?base64_encoded=true&fields=status,stdout,stderr,compile_output,time,memory`,
      { headers },
    );
    if (!r2.ok) continue;
    s = (await r2.json()) as J;
  }
  if (!s.status) throw new Error("runner: răspuns invalid");

  const id = s.status.id;
  const status =
    id === 3
      ? "Rulează OK"
      : id === 6
        ? "Eroare de compilare"
        : id === 5
          ? "Limită de timp depășită"
          : id <= 2
            ? "Evaluarea a expirat"
            : s.status.description;
  return {
    status,
    stdout: b64decode(s.stdout).slice(0, MAX_OUTPUT),
    stderr: (id === 6 ? b64decode(s.compile_output) : b64decode(s.stderr)).slice(0, MAX_OUTPUT),
    timeMs: s.time ? Math.round(Number(s.time) * 1000) : null,
    memoryKb: s.memory ?? null,
  };
}

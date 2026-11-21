// Endpoint autentificat pentru rularea de cod din paginile de rezolvări.
// Cont gratuit obligatoriu (altfel endpoint-ul ar fi o poartă deschisă spre Judge0),
// limite stricte de dimensiune și cotă zilnică pe cont (edge cache), ca la celelalte servicii AI.
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { MAX_INPUT_BYTES, MAX_SOURCE_BYTES, type RunResult } from "./code-runner.server";
import { takeQuota } from "./ai-gateway.server";

const COTA_ZILNICA = 30;

const Schema = z.object({
  lang: z.enum(["cpp", "python"]),
  code: z.string().min(1).max(MAX_SOURCE_BYTES),
  input: z.string().max(MAX_INPUT_BYTES).default(""),
});

export const ruleazaCod = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => Schema.parse(input))
  .handler(async ({ data, context }): Promise<RunResult> => {
    const q = await takeQuota(context.userId, "code-runner", COTA_ZILNICA);
    if (!q.ok) throw new Error(`Ai atins limita de ${COTA_ZILNICA} rulări pe zi. Revino mâine.`);
    const { runCode } = await import("./code-runner.server");
    return runCode({
      lang: data.lang,
      code: data.code,
      input: data.input,
      apiKey: process.env["JUDGE0_API_KEY"] ?? "",
    });
  });

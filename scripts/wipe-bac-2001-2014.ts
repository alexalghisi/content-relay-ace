// One-off: delete all BAC PDFs from storage for years 2001..2014
// (data was unreliable — barem instead of subiect, or mismatched year).
import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL!;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const sb = createClient(url, key);

async function listAll(prefix: string): Promise<string[]> {
  const out: string[] = [];
  const { data, error } = await sb.storage.from("bac-pdfs").list(prefix, { limit: 1000 });
  if (error) { console.error("list err", prefix, error.message); return out; }
  for (const f of data ?? []) {
    if (f.id) out.push(`${prefix}/${f.name}`);
    else out.push(...await listAll(`${prefix}/${f.name}`));
  }
  return out;
}

const YEARS: number[] = [];
for (let y = 2001; y <= 2014; y++) YEARS.push(y);

const SUBJECTS = ["romana","matematica","istorie","biologie","chimie","fizica","geografie","informatica","engleza","franceza","germana","logica","psihologie","sociologie","economie","filosofie"];

async function main() {
  const targets: string[] = [];
  // legacy layout: {year}/...
  for (const y of YEARS) targets.push(...await listAll(String(y)));
  // new layout: {materie}/{year}/...
  for (const s of SUBJECTS) for (const y of YEARS) targets.push(...await listAll(`${s}/${y}`));
  console.log("found", targets.length, "files to delete");
  // delete in chunks of 100
  for (let i = 0; i < targets.length; i += 100) {
    const chunk = targets.slice(i, i + 100);
    const { error } = await sb.storage.from("bac-pdfs").remove(chunk);
    if (error) console.error("rm err", error.message);
    else console.log("deleted", chunk.length);
  }
  console.log("done");
}
main();

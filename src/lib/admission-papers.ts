// Catalog helpers pentru subiectele de admitere (tabel `admission_papers`).
import { supabase } from "@/integrations/supabase/client";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
export const ADMITERE_BUCKET = "admitere-pdfs";

export interface AdmissionPaper {
  id: string;
  university_slug: string;
  university_name: string;
  subject_slug: string;
  subject_name: string;
  year: number;
  session: string | null;
  document_type: "subiect" | "barem" | "rezolvare";
  title: string;
  slug: string;
  storage_path: string;
  description: string | null;
  is_published: boolean;
  views_count: number;
}

export function paperPublicUrl(storagePath: string): string {
  return `${SUPABASE_URL}/storage/v1/object/public/${ADMITERE_BUCKET}/${storagePath}`;
}

/** Slug-uri curate fără diacritice. */
export function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[șş]/g, "s").replace(/[țţ]/g, "t").replace(/[ăâ]/g, "a").replace(/î/g, "i")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function buildStoragePath(uni: string, mat: string, year: number, type: string, session?: string | null): string {
  const seg = session ? `${year}-${session}-${type}` : `${year}-${type}`;
  return `${uni}/${mat}/${seg}.pdf`;
}

export async function listUniversities() {
  const { data, error } = await supabase
    .from("admission_papers")
    .select("university_slug, university_name")
    .eq("is_published", true);
  if (error) throw error;
  const map = new Map<string, { slug: string; name: string; count: number }>();
  for (const r of data ?? []) {
    const cur = map.get(r.university_slug);
    if (cur) cur.count += 1;
    else map.set(r.university_slug, { slug: r.university_slug, name: r.university_name, count: 1 });
  }
  return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name, "ro"));
}

export async function listSubjectsForUni(universitySlug: string) {
  const { data, error } = await supabase
    .from("admission_papers")
    .select("subject_slug, subject_name, university_name")
    .eq("university_slug", universitySlug)
    .eq("is_published", true);
  if (error) throw error;
  const map = new Map<string, { slug: string; name: string; count: number }>();
  let universityName = "";
  for (const r of data ?? []) {
    universityName = r.university_name;
    const cur = map.get(r.subject_slug);
    if (cur) cur.count += 1;
    else map.set(r.subject_slug, { slug: r.subject_slug, name: r.subject_name, count: 1 });
  }
  return {
    universityName,
    subjects: Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name, "ro")),
  };
}

export async function listYearsForUniSubject(universitySlug: string, subjectSlug: string) {
  const { data, error } = await supabase
    .from("admission_papers")
    .select("year, university_name, subject_name")
    .eq("university_slug", universitySlug)
    .eq("subject_slug", subjectSlug)
    .eq("is_published", true);
  if (error) throw error;
  const set = new Set<number>();
  let universityName = ""; let subjectName = "";
  for (const r of data ?? []) {
    set.add(r.year); universityName = r.university_name; subjectName = r.subject_name;
  }
  return {
    universityName, subjectName,
    years: Array.from(set).sort((a, b) => b - a),
  };
}

export async function getPapersForYear(universitySlug: string, subjectSlug: string, year: number) {
  const { data, error } = await supabase
    .from("admission_papers")
    .select("*")
    .eq("university_slug", universitySlug)
    .eq("subject_slug", subjectSlug)
    .eq("year", year)
    .eq("is_published", true);
  if (error) throw error;
  return (data ?? []) as AdmissionPaper[];
}

// Helpers pentru PDF-urile GĂZDUITE PE PLATFORMA NOASTRĂ (Lovable Cloud Storage).
// Nu mai linkăm spre subiecte.edu.ro sau site-urile universităților — totul de la noi.

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const STORAGE_BASE = `${SUPABASE_URL ?? ""}/storage/v1/object/public`;

/** URL absolut către PDF-ul subiectului de BAC (găzduit la noi). */
export function bacPdfUrl(slug: string, year: number, kind: "subiect" | "barem" = "subiect"): string {
  return `${STORAGE_BASE}/bac-pdfs/${year}/${slug}-${kind}.pdf`;
}

/** URL absolut către PDF-ul de admitere (găzduit la noi). */
export function admiterePdfUrl(slug: string, year: number, kind: "subiect" | "barem" = "subiect"): string {
  return `${STORAGE_BASE}/admitere-pdfs/${slug}/${year}-${kind}.pdf`;
}

/** Ruta internă către pagina-resursă pentru un subiect de BAC. */
export function bacResursaPath(materie: string, an: number | string): string {
  return `/resurse/bac/${materie}/${an}`;
}

/** Ruta internă către pagina-resursă pentru un subiect de admitere. */
export function admitereResursaPath(facultate: string, an: number | string): string {
  return `/resurse/admitere/${facultate}/${an}`;
}

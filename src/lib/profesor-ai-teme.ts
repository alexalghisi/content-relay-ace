/**
 * Teme încărcate de elev în lecția live (poze, PDF-uri, subiecte BAC întregi).
 * Fișierele nu pleacă pe serverul nostru: le transformăm în browser în imagini JPEG
 * pe care le trimitem direct profesorului AI, în aceeași conexiune ca vocea.
 */
export const TEME_ACCEPT = "image/*,application/pdf,.pdf,.heic,.heif";
export const TEME_MAX_PAGINI = 8;
export const TEME_LATURA_MAX = 1600;
export const TEME_MAX_MB = 25;

export type PaginaTema = { data: string; mimeType: "image/jpeg"; nume: string };

export function tipTema(f: { type: string; name: string }): "pdf" | "imagine" | null {
  const n = f.name.toLowerCase();
  if (f.type === "application/pdf" || n.endsWith(".pdf")) return "pdf";
  if (f.type.startsWith("image/") || /\.(jpe?g|png|webp|heic|heif|gif|bmp)$/.test(n))
    return "imagine";
  return null;
}

/** Dimensiunea la care redimensionăm, păstrând proporțiile (latura mare ≤ max). */
export function dimensiuneScalata(
  w: number,
  h: number,
  max = TEME_LATURA_MAX,
): { w: number; h: number } {
  if (w <= 0 || h <= 0) return { w: 0, h: 0 };
  const k = Math.min(1, max / Math.max(w, h));
  return { w: Math.round(w * k), h: Math.round(h * k) };
}

/** Mesajul care însoțește imaginile, ca profesoara să lucreze cu elevul pe ele (nu să le rezolve). */
export function mesajTema(nume: string[], pagini: number, totalPdf: number | null): string {
  const lista = nume.join(", ");
  const extra =
    totalPdf && totalPdf > pagini ? ` (am trimis primele ${pagini} pagini din ${totalPdf})` : "";
  return (
    `Elevul a încărcat tema/subiectul: ${lista}${extra}. Uită-te atent la imagini, spune pe scurt ce conține ` +
    "și întreabă-l cu ce exercițiu vrea să înceapă. Lucrați împreună pas cu pas: explici, îl lași să încerce, " +
    "îl corectezi — nu îi dai direct rezolvarea completă."
  );
}

function canvasLaJpeg(c: HTMLCanvasElement): string {
  return c.toDataURL("image/jpeg", 0.82).split(",")[1] ?? "";
}

async function imagineLaJpeg(f: File): Promise<PaginaTema> {
  const bmp = await createImageBitmap(f);
  const { w, h } = dimensiuneScalata(bmp.width, bmp.height);
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d")!;
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, w, h);
  ctx.drawImage(bmp, 0, 0, w, h);
  bmp.close();
  return { data: canvasLaJpeg(c), mimeType: "image/jpeg", nume: f.name };
}

async function pdfLaJpeg(
  f: File,
  ramase: number,
): Promise<{ pagini: PaginaTema[]; total: number }> {
  const pdfjs = await import("pdfjs-dist");
  const worker = (await import("pdfjs-dist/build/pdf.worker.min.mjs?url")).default;
  pdfjs.GlobalWorkerOptions.workerSrc = worker;
  const doc = await pdfjs.getDocument({ data: new Uint8Array(await f.arrayBuffer()) }).promise;
  const pagini: PaginaTema[] = [];
  for (let i = 1; i <= Math.min(doc.numPages, ramase); i++) {
    const p = await doc.getPage(i);
    const v0 = p.getViewport({ scale: 1 });
    const { w } = dimensiuneScalata(v0.width * 2, v0.height * 2);
    const v = p.getViewport({ scale: w / v0.width });
    const c = document.createElement("canvas");
    c.width = Math.round(v.width);
    c.height = Math.round(v.height);
    const ctx = c.getContext("2d")!;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, c.width, c.height);
    await p.render({ canvasContext: ctx, viewport: v }).promise;
    pagini.push({ data: canvasLaJpeg(c), mimeType: "image/jpeg", nume: `${f.name} · pagina ${i}` });
  }
  const total = doc.numPages;
  await doc.destroy();
  return { pagini, total };
}

/** Transformă fișierele alese în pagini JPEG (max TEME_MAX_PAGINI). Aruncă Error cu mesaj în română. */
export async function pregatesteTeme(
  files: File[],
): Promise<{ pagini: PaginaTema[]; mesaj: string }> {
  const pagini: PaginaTema[] = [];
  let totalPdf: number | null = null;
  const nume: string[] = [];
  for (const f of files) {
    if (pagini.length >= TEME_MAX_PAGINI) break;
    const tip = tipTema(f);
    if (!tip) throw new Error(`„${f.name}” nu e poză sau PDF.`);
    if (f.size > TEME_MAX_MB * 1024 * 1024)
      throw new Error(`„${f.name}” e mai mare de ${TEME_MAX_MB} MB.`);
    nume.push(f.name);
    if (tip === "imagine") {
      try {
        pagini.push(await imagineLaJpeg(f));
      } catch {
        throw new Error(`Nu am putut deschide poza „${f.name}”. Încearcă JPG sau PNG.`);
      }
    } else {
      try {
        const r = await pdfLaJpeg(f, TEME_MAX_PAGINI - pagini.length);
        pagini.push(...r.pagini);
        totalPdf = (totalPdf ?? 0) + r.total;
      } catch {
        throw new Error(`Nu am putut deschide PDF-ul „${f.name}”.`);
      }
    }
  }
  if (!pagini.length) throw new Error("Alege o poză sau un PDF.");
  return { pagini, mesaj: mesajTema(nume, pagini.length, totalPdf) };
}

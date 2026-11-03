/**
 * Poze de profil: originalul se urcă neschimbat ori de câte ori încape în bucketul `avatars`
 * (max. 3 MB, JPEG/PNG/WEBP/GIF — vezi migrarea bucketului). Doar pozele care NU ar încăpea
 * (de ex. JPEG de 5–8 MB sau HEIC de pe iPhone) sunt convertite în browser la JPEG, la cea mai
 * bună calitate care intră sub limită. Nicio poză reală de telefon nu mai este respinsă.
 */

/** Limita bucketului `avatars` (file_size_limit din migrare). Peste ea, Storage respinge fișierul. */
export const AVATAR_BUCKET_MAX_BYTES = 3 * 1024 * 1024;
/** Ținta după comprimare — sub limita bucketului, cu marjă. */
export const AVATAR_TARGET_MAX_BYTES = 1.5 * 1024 * 1024;

/** Latura maximă a pozei convertite (doar când originalul nu încape), în pixeli. */
export const AVATAR_MAX_SIDE = 2560;

const DIRECT_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"] as const;
const IMAGE_EXT = /\.(jpe?g|png|webp|gif|heic|heif|avif|bmp|tiff?)$/i;

/** Valoarea atributului `accept` pentru input-urile de poză. */
export const AVATAR_ACCEPT = "image/*,.heic,.heif";

export type AvatarCheck =
  | { ok: true; needsConversion: boolean }
  | { ok: false; error: string };

/** Verificare pură (testabilă) a fișierului ales. */
export function checkAvatarFile(file: { type: string; name: string; size: number }): AvatarCheck {
  const type = (file.type || "").toLowerCase();
  const looksLikeImage = type.startsWith("image/") || ((type === "" || type === "application/octet-stream") && IMAGE_EXT.test(file.name));
  if (!looksLikeImage) return { ok: false, error: "Alege o fotografie (JPG, PNG, WEBP sau HEIC de pe iPhone)." };
  if (file.size <= 0) return { ok: false, error: "Fișierul este gol. Alege altă fotografie." };
  // Originalul merge direct doar dacă bucketul îl acceptă (tip + mărime).
  const direct = (DIRECT_TYPES as readonly string[]).includes(type) && file.size <= AVATAR_BUCKET_MAX_BYTES;
  return { ok: true, needsConversion: !direct };
}

/** Dimensiunile la care redimensionăm, păstrând proporțiile. */
export function scaledSize(width: number, height: number, maxSide = AVATAR_MAX_SIDE): { width: number; height: number } {
  if (width <= 0 || height <= 0) return { width: 0, height: 0 };
  const scale = Math.min(1, maxSide / Math.max(width, height));
  return { width: Math.max(1, Math.round(width * scale)), height: Math.max(1, Math.round(height * scale)) };
}

/** Extensia fișierului salvat, după tipul MIME final. */
export function extensionForType(type: string): string {
  if (type === "image/png") return "png";
  if (type === "image/webp") return "webp";
  if (type === "image/gif") return "gif";
  if (type === "image/avif") return "avif";
  if (type === "image/bmp") return "bmp";
  if (type === "image/tiff") return "tiff";
  return "jpg";
}

/** Cale unică în bucket: primul folder trebuie să fie user id-ul (politica RLS). */
export function avatarStoragePath(userId: string, prefix: "avatar" | "teacher", type: string, now = Date.now()): string {
  return `${userId}/${prefix}-${now}.${extensionForType(type)}`;
}

/** Traduce erorile Supabase Storage în mesaje clare în română. */
export function avatarUploadErrorRo(message: string | undefined | null): string {
  const m = (message || "").toLowerCase();
  if (m.includes("mime") || m.includes("not supported") || m.includes("invalid_mime")) return "Formatul pozei nu este acceptat. Încearcă o poză JPG sau PNG.";
  if (m.includes("size") || m.includes("too large") || m.includes("payload")) return "Fotografia este prea mare. Încearcă altă poză.";
  if (m.includes("row-level security") || m.includes("unauthorized") || m.includes("jwt") || m.includes("403")) return "Sesiunea a expirat. Reautentifică-te și încearcă din nou.";
  if (m.includes("network") || m.includes("fetch")) return "Conexiune slabă. Verifică internetul și încearcă din nou.";
  return "Nu am putut încărca fotografia. Mai încearcă o dată.";
}

type Decoded = { source: CanvasImageSource; width: number; height: number; close: () => void };

async function decode(file: Blob): Promise<Decoded> {
  if (typeof createImageBitmap === "function") {
    try {
      const bmp = await createImageBitmap(file, { imageOrientation: "from-image" } as ImageBitmapOptions);
      return { source: bmp, width: bmp.width, height: bmp.height, close: () => bmp.close() };
    } catch {
      /* Safari vechi / HEIC: încercăm prin <img> */
    }
  }
  const url = URL.createObjectURL(file);
  try {
    const img = new Image();
    img.decoding = "async";
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("decode"));
      img.src = url;
    });
    return { source: img, width: img.naturalWidth, height: img.naturalHeight, close: () => URL.revokeObjectURL(url) };
  } catch (e) {
    URL.revokeObjectURL(url);
    throw e;
  }
}

export class AvatarPrepError extends Error {}

/**
 * Păstrează originalul când încape în bucket; altfel îl convertește la JPEG sub limită.
 * Aruncă AvatarPrepError cu mesaj în română dacă poza nu poate fi folosită.
 */
export async function prepareAvatarFile(file: File): Promise<Blob> {
  const check = checkAvatarFile(file);
  if (!check.ok) throw new AvatarPrepError(check.error);
  if (!check.needsConversion) return file;

  let decoded: Decoded;
  try {
    decoded = await decode(file);
  } catch {
    throw new AvatarPrepError("Nu am putut citi această poză. Fă o captură de ecran a ei sau alege o poză JPG/PNG.");
  }
  try {
    if (!decoded.width || !decoded.height) throw new AvatarPrepError("Poza pare deteriorată. Alege alta.");
    // Încercăm întâi rezoluția mare, apoi tot mai mică, până când JPEG-ul încape în bucket.
    for (const side of [AVATAR_MAX_SIDE, 2048, 1600, 1280, 1024]) {
      const { width, height } = scaledSize(decoded.width, decoded.height, side);
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new AvatarPrepError("Browserul nu poate procesa poza. Încearcă din alt browser.");
      ctx.fillStyle = "#ffffff"; // fundal alb pentru PNG/GIF transparent → JPEG
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(decoded.source, 0, 0, width, height);
      for (const q of [0.92, 0.85, 0.75]) {
        const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/jpeg", q));
        if (blob && blob.size <= AVATAR_BUCKET_MAX_BYTES) return blob;
      }
    }
    throw new AvatarPrepError("Nu am putut micșora poza. Alege altă fotografie.");
  } finally {
    decoded.close();
  }
}

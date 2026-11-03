import { supabase } from "@/integrations/supabase/client";
import { avatarUploadErrorRo } from "./avatar-image";

/** Upload originals via TUS: fixed chunk size is transport framing, never a file-size cap. */
export async function uploadProfilePhoto(file: Blob, path: string, progress: (n: number) => void, signal: AbortSignal): Promise<void> {
  const { data } = await supabase.auth.getSession();
  if (!data.session) throw new Error("Reautentifică-te pentru a încărca fotografia.");
  const { Upload } = await import("tus-js-client");
  if (signal.aborted) throw new DOMException("Anulat", "AbortError");
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error("Le service de chargement n’est pas configuré.");
  await new Promise<void>((resolve, reject) => {
    const cleanup = () => signal.removeEventListener("abort", cancel);
    const upload = new Upload(file, {
      endpoint: `${url}/storage/v1/upload/resumable`,
      headers: { authorization: `Bearer ${data.session?.access_token}`, apikey: key },
      metadata: { bucketName: "avatars", objectName: path, contentType: file.type || "image/jpeg", cacheControl: "3600" },
      chunkSize: 6 * 1024 * 1024,
      retryDelays: [0, 1000, 3000, 5000, 10000],
      uploadDataDuringCreation: true,
      removeFingerprintOnSuccess: true,
      onProgress: (sent, total) => progress(total ? Math.floor(sent * 100 / total) : 0),
      onError: (error) => { cleanup(); reject(new Error(avatarUploadErrorRo(error.message))); },
      onSuccess: () => { cleanup(); progress(100); resolve(); },
    });
    const cancel = () => { void upload.abort(); cleanup(); reject(new DOMException("Anulat", "AbortError")); };
    signal.addEventListener("abort", cancel, { once: true });
    upload.findPreviousUploads().then((previous) => {
      if (signal.aborted) return;
      if (previous[0]) upload.resumeFromPreviousUpload(previous[0]);
      upload.start();
    }).catch((e) => { cleanup(); reject(e); });
  });
}
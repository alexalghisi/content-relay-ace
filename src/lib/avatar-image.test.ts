import { describe, expect, test } from "bun:test";
import {
  AVATAR_BUCKET_MAX_BYTES,
  AVATAR_TARGET_MAX_BYTES,
  avatarStoragePath,
  avatarUploadErrorRo,
  checkAvatarFile,
  extensionForType,
  scaledSize,
} from "./avatar-image";

const MB = 1024 * 1024;

describe("checkAvatarFile", () => {
  test("JPEG mic se urcă direct, fără conversie", () => {
    expect(checkAvatarFile({ type: "image/jpeg", name: "a.jpg", size: 200_000 })).toEqual({ ok: true, needsConversion: false });
  });
  test("poză iPhone HEIC e acceptată și convertită (bug-ul raportat)", () => {
    expect(checkAvatarFile({ type: "image/heic", name: "IMG_0001.HEIC", size: 2 * MB })).toEqual({ ok: true, needsConversion: true });
  });
  test("HEIC fără tip MIME (Windows/Android) e recunoscut după extensie", () => {
    expect(checkAvatarFile({ type: "", name: "IMG_0001.heic", size: 2 * MB })).toEqual({ ok: true, needsConversion: true });
  });
  test("JPEG de telefon peste limita bucketului nu mai e respins, se comprimă", () => {
    expect(checkAvatarFile({ type: "image/jpeg", name: "camera.jpg", size: 6 * MB })).toEqual({ ok: true, needsConversion: true });
  });
  test("GIF se convertește în JPEG", () => {
    expect(checkAvatarFile({ type: "image/gif", name: "x.gif", size: 100 })).toEqual({ ok: true, needsConversion: true });
  });
  test("fișiere care nu sunt poze sunt respinse cu mesaj în română", () => {
    const r = checkAvatarFile({ type: "application/pdf", name: "cv.pdf", size: 1000 });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.error).toContain("fotografie");
  });
  test("fișier gol sau uriaș e respins", () => {
    expect(checkAvatarFile({ type: "image/png", name: "a.png", size: 0 }).ok).toBe(false);
    expect(checkAvatarFile({ type: "image/png", name: "a.png", size: 31 * MB }).ok).toBe(false);
  });
  test("ținta de comprimare e sub limita bucketului", () => {
    expect(AVATAR_TARGET_MAX_BYTES).toBeLessThan(AVATAR_BUCKET_MAX_BYTES);
  });
});

describe("scaledSize", () => {
  test("micșorează poze mari păstrând proporțiile", () => {
    expect(scaledSize(4032, 3024)).toEqual({ width: 1024, height: 768 });
    expect(scaledSize(3024, 4032)).toEqual({ width: 768, height: 1024 });
  });
  test("nu mărește poze mici", () => {
    expect(scaledSize(300, 200)).toEqual({ width: 300, height: 200 });
  });
  test("dimensiuni invalide → 0", () => {
    expect(scaledSize(0, 100)).toEqual({ width: 0, height: 0 });
  });
});

describe("cale și extensie", () => {
  test("extensia urmează tipul final", () => {
    expect(extensionForType("image/jpeg")).toBe("jpg");
    expect(extensionForType("image/png")).toBe("png");
    expect(extensionForType("image/webp")).toBe("webp");
    expect(extensionForType("")).toBe("jpg");
  });
  test("primul folder e user id-ul (cerut de politica RLS)", () => {
    const p = avatarStoragePath("u-123", "teacher", "image/jpeg", 42);
    expect(p).toBe("u-123/teacher-42.jpg");
    expect(p.split("/")[0]).toBe("u-123");
  });
});

describe("avatarUploadErrorRo", () => {
  test("nu mai arată erori brute în engleză", () => {
    expect(avatarUploadErrorRo("mime type image/heic is not supported")).toContain("Formatul");
    expect(avatarUploadErrorRo("The object exceeded the maximum allowed size")).toContain("prea mare");
    expect(avatarUploadErrorRo("new row violates row-level security policy")).toContain("Reautentifică");
    expect(avatarUploadErrorRo(undefined)).toContain("Nu am putut");
  });
});

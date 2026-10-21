/** Must be called directly from a tap when enabling audio: Safari requires user activation. */
export async function playLessonMedia(media: HTMLMediaElement, enabled: boolean): Promise<boolean> {
  media.muted = !enabled;
  media.volume = 1;
  try {
    await media.play();
    return true;
  } catch {
    return false;
  }
}
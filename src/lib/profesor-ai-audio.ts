/**
 * Starts lesson media with sound when the browser allows it. If audible autoplay is blocked,
 * the video still plays muted (never a frozen frame) and false is returned so the caller can
 * unmute at the first interaction.
 */
export async function playLessonMedia(media: HTMLMediaElement, enabled: boolean): Promise<boolean> {
  media.muted = !enabled;
  media.volume = 1;
  try {
    await media.play();
    return true;
  } catch {
    if (!enabled) return false;
    media.muted = true;
    await media.play().catch(() => {});
    return false;
  }
}

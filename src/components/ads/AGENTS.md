# Advertising boundaries

- Keep AdSense serving centrally disabled until approval and certified consent setup; ownership verification stays independent.
- Keep Adsterra banners and Social Bar in opaque sandboxed in-flow frames with user-activated navigation only to confine overlays and prevent automatic popunders.
- Smartlink is a labeled sponsored link, never a site CTA; exclude private workflows from public monetization.
- Resolve the viewport before requesting a banner zone to avoid discarding a mobile impression on desktop hydration.
- Reveal placements only after rendered-media confirmation from their own frame; empty responses leave no labels or space.
- Use exact zone URLs from the Adsterra panel; old provider hosts returned empty scripts.
- Initialize an empty, non-persistent cookie facade before provider scripts in opaque frames to prevent cookie SecurityErrors without granting site-cookie access.
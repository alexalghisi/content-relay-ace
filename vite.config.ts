// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { fileURLToPath } from "node:url";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Route loaders (and the data they import) are split together with the page component,
    // so per-page datasets are no longer shipped in the entry bundle of every page.
    router: {
      codeSplittingOptions: {
        defaultBehavior: [["loader", "component"], ["errorComponent"], ["notFoundComponent"]],
      },
    },
  },
  // LiveAvatar SDK imports Node's "events"; resolve it to the browser-safe npm package
  // instead of Vite's empty builtin stub. Extra plugins must be passed here, not under `vite`.
  plugins: [
    {
      // The generated Supabase client only builds the real client lazily (Proxy on first use), but
      // Rollup cannot know that and kept it — with auth/realtime/storage, ~45 KB gzip — in the entry
      // bundle of every page via unused imports left in split route files. Declaring these modules
      // side-effect free lets unused imports drop, so public pages load Supabase only when needed.
      name: "supabase-client-pure",
      transform(code, id) {
        if (/\/src\/integrations\/supabase\/(client|previewAuthStorage)\.ts$/.test(id)) {
          return { code, map: null, moduleSideEffects: false };
        }
      },
    },
    {
      name: "browser-events-polyfill",
      enforce: "pre",
      transform(code, id) {
        if (!id.includes("@heygen/liveavatar-web-sdk") || !code.includes("from 'events'")) return;
        const target = fileURLToPath(new URL("./node_modules/events/events.js", import.meta.url));
        return { code: code.replace(/from 'events'/g, `from ${JSON.stringify(target)}`), map: null };
      },
    },
  ],
});

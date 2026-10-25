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

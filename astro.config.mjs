// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Every page prerenders to dist/. nginx serves that directory; no adapter.
  output: "static",
  // Astro 7's default ("jsx") drops spaces between inline tags. Keep the
  // Astro 5 HTML rules so the rendered pages stay the same.
  compressHTML: true,
});

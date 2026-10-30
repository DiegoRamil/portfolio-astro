// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import { getContentLastModified } from "./src/lib/last-modified.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://diegoramil.com",
  integrations: [sitemap({ lastmod: getContentLastModified() })],
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [
      tailwindcss({
        // @ts-expect-error @tailwindcss/vite 4.2.1 types do not expose Astro's base-style option.
        applyBaseStyles: false,
      }),
    ],
  },
});

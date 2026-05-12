// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://diegoramil.com",
  integrations: [react(), sitemap()],
  vite: {
    plugins: [
      tailwindcss({
        // @ts-expect-error @tailwindcss/vite 4.2.1 types do not expose Astro's base-style option.
        applyBaseStyles: false,
      }),
    ],
  },
});

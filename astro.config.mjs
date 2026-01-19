import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import path from "path";

const base = process.env.ASTRO_BASE ?? "/";
const site = process.env.ASTRO_SITE;

// https://astro.build/config
export default defineConfig({
  base,
  site,
  integrations: [react(), tailwind()],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});

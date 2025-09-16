// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://gocon.github.io",
  base: "/2025",
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

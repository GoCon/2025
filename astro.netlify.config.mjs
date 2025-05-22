// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

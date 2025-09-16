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
  redirects: {
    "/help":
      "https://docs.google.com/document/d/e/2PACX-1vTND_zm397IJTp4cbZwR3tpOhnsTtLIkDwcqDfMTg1K0jjWrHJ7i70ukkwukW2nL0nioqdCbOUG8E6I/pub",
  },
});

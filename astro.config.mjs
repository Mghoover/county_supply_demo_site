import { defineConfig } from "astro/config";
import react from "@astrojs/react";

const site = process.env.SITE_URL || "https://cs-lcl.demo.ordinistechnologies.com";
const base = process.env.SITE_BASE || "";

export default defineConfig({
  site,
  ...(base ? { base } : {}),
  output: "static",
  integrations: [react()],
});

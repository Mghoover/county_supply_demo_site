import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://mghoover.github.io",
  base: "/county_supply_demo_site",
  output: "static",
  integrations: [react()],
});

// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://pm.lunaiz.com",
  // Enable Preact to support Preact JSX components.
  integrations: [preact(), mdx(), purgecss()],
});

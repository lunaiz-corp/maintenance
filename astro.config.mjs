// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: "https://pm.lunaiz.com",
  integrations: [mdx(), purgecss()],
});

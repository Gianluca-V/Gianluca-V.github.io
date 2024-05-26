import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind()],
  output: 'hybrid',
  adapter: node({
    mode: "standalone"
  })
});
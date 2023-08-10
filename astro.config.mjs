import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), image({
    serviceEntryPoint: '@astrojs/image/sharp'}), react()],
  outDir: './site',
  compressHTML: true,
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});
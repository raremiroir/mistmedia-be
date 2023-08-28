import { defineConfig } from 'astro/config';
import svelte, { vitePreprocess } from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import image from "@astrojs/image";
import partytown from "@astrojs/partytown";
import astroI18next from "astro-i18next";
import sitemap from "@astrojs/sitemap";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte({
      preprocess: [
        vitePreprocess()
      ]
    }), 
    tailwind({
      config: {
        applyBaseStyles: false,
      }
    }), 
    image(), 
    astroI18next(),
    partytown(), 
    sitemap(), 
    prefetch()
  ],
  output: "server",
  adapter: vercel()
});
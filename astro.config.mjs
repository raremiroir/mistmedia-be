import i18n from "astro-i18n"
import { defineConfig } from 'astro/config';
import svelte, { vitePreprocess } from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import image from "@astrojs/image";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [
    i18n(),
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
    partytown(), 
    sitemap(), 
    prefetch()
  ],
  output: "server",
  adapter: vercel(),
  vite: {
    define: {
      'process.env.VITE_BUILD_TIME':JSON.stringify(new Date().toISOString()),
    }
  }
});
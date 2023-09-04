// @ts-ignore
import i18n from "astro-i18n";
import type { AstroUserConfig } from 'astro'; 
import { defineConfig } from 'astro/config';
import svelte, { vitePreprocess } from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
const config: AstroUserConfig = {
  integrations: [
    i18n(),
    svelte({
      preprocess: [
        vitePreprocess()
      ]
    }), 
    tailwind(), 
    partytown(), 
    sitemap(), 
    prefetch()
  ],
  output: "server",
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  adapter: vercel(),
  vite: {
    define: {
      'process.env.VITE_BUILD_TIME':JSON.stringify(new Date().toISOString()),
    },
  }
};

export default defineConfig(config);
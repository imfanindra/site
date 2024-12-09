import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel';

export default defineConfig({
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  site: "https://www.fanindra.xyz/",
  integrations: [mdx(), sitemap(), tailwind()],
});
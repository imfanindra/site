import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';


export default defineConfig({
  site: "https://www.fanindra.xyz/",
  integrations: [mdx(), sitemap(), tailwind()],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});
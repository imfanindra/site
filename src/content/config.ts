import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    cover: image(), // No width condition
    serialNo: z.number().int().positive(),
  }),
});

export const collections = { projects };
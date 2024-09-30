import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    cover: image().refine((img) => img.width >= 1080, {
      message: "Cover image must be at least 1080 pixels wide!",
    }),
    date: z.date().transform((val) => val.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })),
  }),
});

export const collections = { projects };
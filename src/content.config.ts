import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const staffs = defineCollection({
  loader: file("src/data/staffs.json"),
  schema: z.object({
    name: z.string(),
    company: z.string().optional(),
    avatar: z.string().optional(),
    links: z
      .object({
        x: z.string().url().optional(),
        github: z.string().url().optional(),
        website: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = { staffs };

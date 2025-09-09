import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const staffs = defineCollection({
  loader: file("src/data/staffs.json"),
  schema: z.object({
    name: z.string(),
    company: z.string().optional(),
    avatar: z.string().optional(),
    sns: z
      .object({
        link: z.string().url(),
        type: z.enum(["x", "github", "mastodon", "bluesky"]),
      })
      .optional(),
    communities: z
      .array(
        z.object({
          name: z.string(),
          link: z.string().url().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { staffs };

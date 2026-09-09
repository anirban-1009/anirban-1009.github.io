import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const aboutCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/about" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        imagePath: z.string(),
    }),
});

const blogCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        imagePath: z.string(),
        metaPath: z.string().optional(),
        tags: z.array(z.string()).optional(),
        isDraft: z.boolean().optional(),
        date: z.coerce.date(),
    }),
});

const workCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        imagePath: z.string(),
        metaPath: z.string().optional(),
        tags: z.array(z.string()),
        isDraft: z.boolean().optional().default(false),
        date: z.coerce.date(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    blog: blogCollection,
    work: workCollection,
    about: aboutCollection,
};

// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

const aboutCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        imagePath: z.string(),
    }),
});

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        imagePath: z.string(),
        metaPath: z.string().optional(),
        isDraft: z.boolean().optional().default(false),
        date: z.string().transform((str) => new Date(str)), // Ensure this transformation is applied
    }),
});

const workCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        imagePath: z.string(),
        metaPath: z.string().optional(),
        tags: z.array(z.string()),
        isDraft: z.boolean().optional().default(false),
        date: z.string().transform((str) => new Date(str)), // Ensure this transformation is applied
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    blog: blogCollection,
    work: workCollection,
    about: aboutCollection,
};

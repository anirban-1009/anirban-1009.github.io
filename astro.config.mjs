import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

// https://astro.build/config
export default defineConfig({
    site: "https://anirbansikdar.com/",
    base: "/",
    integrations: [
        tailwind(),
        icon(),
        mdx({
            rehypePlugins: [
                rehypeSlug,
                [
                    rehypeAutolinkHeadings,
                    {
                        behavior: "append",
                        properties: {
                            className: ["anchor"],
                        },
                        content: {
                            type: "text",
                            value: " #",
                        },
                    },
                ],
            ],
        }),
        react(),
    ],
    output: "server",
    adapter: vercel({
        webAnalytics: { enabled: true },
        imageService: false,
    }),
});


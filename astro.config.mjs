import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig, passthroughImageService } from "astro/config";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
    site: "https://anirbansikdar.com/",
    base: "/",
    integrations: [tailwind(), icon(), mdx(), react()],
    output: "server",
    adapter: vercel({
        webAnalytics: { enabled: true },
        imageService: false,
    }),
    image: {
        service: passthroughImageService(),
    },
});

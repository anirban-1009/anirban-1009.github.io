import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig, passthroughImageService } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
    site: "https://anirbansikdar.com/",
    base: "/",
    integrations: [tailwind(), icon(), mdx(), react()],
    output: "server",
    adapter: vercel({
        webAnalytics: { enabled: true },
    }),
    image: {
        service: passthroughImageService(),
    },
});

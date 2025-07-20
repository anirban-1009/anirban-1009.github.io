import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig, passthroughImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://anirban-1009.github.io/",
    base: "/",
    integrations: [tailwind(), icon(), mdx()],
    output: "static",
    image: {
        service: passthroughImageService(),
    },
});

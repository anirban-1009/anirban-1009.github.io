import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';

export const GET: APIRoute = async () => {
    try {
        const vectorStorePath = path.resolve('src/lib/vector-store.json');
        if (!fs.existsSync(vectorStorePath)) {
            return new Response(JSON.stringify([]), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const fileContent = fs.readFileSync(vectorStorePath, 'utf-8');
        const vectors = JSON.parse(fileContent);

        // Extract unique pages from vectors
        const uniquePages = new Map();

        vectors.forEach((vec: any) => {
            const url = vec.metadata.url;
            if (!uniquePages.has(url)) {
                // Extract slug from URL (e.g., /blog/my-post -> my-post)
                const slug = url.split('/').pop();
                uniquePages.set(url, {
                    title: vec.metadata.title,
                    slug: slug,
                    type: vec.metadata.type,
                    url: url
                });
            }
        });

        const pages = Array.from(uniquePages.values());

        return new Response(JSON.stringify(pages), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error fetching content:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500
        });
    }
};

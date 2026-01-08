import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { embedMany } from 'ai';
import dotenv from 'dotenv';
import fs from 'fs';
import { glob } from 'glob';
import matter from 'gray-matter';
import path from 'path';

dotenv.config();

const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

if (!apiKey) {
    console.error('Google API Key not found.');
    console.error('Please add GOOGLE_GENERATIVE_AI_API_KEY (or GEMINI_API_KEY) to your .env file.');
    process.exit(1);
}

const google = createGoogleGenerativeAI({
    apiKey,
});

const contentDir = path.join(process.cwd(), 'src/content');
const outputFile = path.join(process.cwd(), 'src/lib/vector-store.json');

async function generateEmbeddings() {
    console.log('Scanning content files...');

    // Find all MDX files in blog and work
    const files = await glob(`${contentDir}/**/*.{md,mdx}`);

    console.log(`Found ${files.length} files.`);

    const documents = [];

    for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        const { data, content: markdownBody } = matter(content);

        // Skip if isDraft is true
        if (data.isDraft) continue;

        // Get relative path for the slug/url
        // Assuming file structure: .../src/content/blog/slug.mdx or .../src/content/work/slug.mdx
        const relativePath = path.relative(contentDir, file);
        const parts = relativePath.split('/');
        const collection = parts[0]; // 'blog' or 'work' or 'about'
        const slug = path.basename(relativePath, path.extname(relativePath));

        const url = `/${collection}/${slug}`;

        // Simple chunking overlap method
        const chunks = splitIntoChunks(markdownBody, 800); // ~800 chars per chunk

        console.log(`Processing ${url}: ${chunks.length} chunks`);

        for (const chunk of chunks) {
            documents.push({
                content: chunk,
                metadata: {
                    title: data.title || slug,
                    url: url,
                    type: collection
                }
            });
        }
    }

    console.log(`Generating embeddings for ${documents.length} chunks...`);

    const vectors = [];

    const BATCH_SIZE = 50;

    for (let i = 0; i < documents.length; i += BATCH_SIZE) {
        const batch = documents.slice(i, i + BATCH_SIZE);

        try {
            const { embeddings } = await embedMany({
                model: google.textEmbeddingModel('text-embedding-004'),
                values: batch.map(d => d.content),
            });

            for (let j = 0; j < batch.length; j++) {
                vectors.push({
                    id: `${batch[j].metadata.url}-${i + j}`,
                    values: embeddings[j],
                    content: batch[j].content,
                    metadata: batch[j].metadata
                });
            }

            console.log(`Processed batch ${i / BATCH_SIZE + 1}/${Math.ceil(documents.length / BATCH_SIZE)}`);

        } catch (error) {
            console.error(`Error processing batch starting at index ${i}:`, error);
        }
    }

    // Ensure the output directory exists
    const outputDir = path.dirname(outputFile);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputFile, JSON.stringify(vectors, null, 2));
    console.log(`Saved ${vectors.length} vectors to ${outputFile}`);
}

function splitIntoChunks(text, maxSize) {
    const sentences = text.split(/(?<=[.?!])\s+/);
    const chunks = [];
    let currentChunk = "";

    for (const sentence of sentences) {
        if ((currentChunk + sentence).length > maxSize) {
            if (currentChunk) chunks.push(currentChunk.trim());
            currentChunk = sentence;
        } else {
            currentChunk += (currentChunk ? " " : "") + sentence;
        }
    }
    if (currentChunk) chunks.push(currentChunk.trim());

    return chunks.filter(c => c.length > 20);
}

generateEmbeddings().catch(console.error);

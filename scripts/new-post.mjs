import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const collectionsDir = path.join(__dirname, '../src/content');
const DEFAULT_TEMPLATE_PATH = path.join(collectionsDir, 'template.mdx');

/**
 * Simple slugify function
 * @param {string} text
 * @returns {string}
 */
function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

/**
 * Main function to create a new post
 */
async function createPost() {
    const args = process.argv.slice(2);
    const titleArg = args.find(a => a.startsWith('--title='));
    const typeArg = args.find(a => a.startsWith('--type='));

    if (!titleArg || !typeArg) {
        console.error('Usage: npm run new-post -- --title="Post Title" --type="blog|work"');
        process.exit(1);
    }

    const title = titleArg.split('=')[1];
    const type = typeArg.split('=')[1];

    if (type !== 'blog' && type !== 'work') {
        console.error('Error: type must be either "blog" or "work"');
        process.exit(1);
    }

    const slug = slugify(title);
    const targetPath = path.join(collectionsDir, type, `${slug}.mdx`);

    if (fs.existsSync(targetPath)) {
        console.error(`Error: Post already exists at ${targetPath}`);
        process.exit(1);
    }

    const dateStr = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    let content = '';
    if (fs.existsSync(DEFAULT_TEMPLATE_PATH)) {
        content = fs.readFileSync(DEFAULT_TEMPLATE_PATH, 'utf-8');
        content = content
            .replace(/{{title}}/g, title)
            .replace(/{{date}}/g, dateStr)
            .replace(/{{description}}/g, `A new ${type} post about ${title}.`)
            .replace(/{{slug}}/g, slug);
    } else {
        // Fallback or if template doesn't exist
        content = `---
title: ${title}
description: A new ${type} post about ${title}.
imagePath: "/src/images/cover/${slug}.png"
metaPath: "/src/images/cover/${slug}.png"
${type === 'work' ? 'tags: ["Project"]' : ''}
date: ${dateStr}
isDraft: true
---

# ${title}

Write your content here...
`;
    }

    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.writeFileSync(targetPath, content);

    console.log(`✅ Success! Created new ${type} post: ${targetPath}`);
}

createPost();

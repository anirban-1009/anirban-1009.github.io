import fs from 'fs';
import { glob } from 'glob';

async function fixPaths() {
    const files = await glob('src/content/**/*.{md,mdx}');
    let changedFiles = 0;

    for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');

        let newContent = content.replace(
            /^(imagePath|metaPath):\s*["']?(?:.*?\/)?([^/\"'\s]+)["']?[ \t]*$/gm,
            (match, propName, filename) => {
                if (filename === 'aboutHero.jpg' || filename === 'HomeAboutHero.webp') {
                    return `${propName}: "/src/images/heros/${filename}"`;
                }
                if (filename === 'SocialHero.jpg') {
                    return `${propName}: "https://gitlab.com/anirban-1009/anirban.codes/-/raw/main/public/images/SocialHero.jpg?ref_type=heads"`;
                }
                return `${propName}: "/src/images/cover/${filename}"`;
            }
        );

        // Also check if they are already correct
        if (content !== newContent) {
            fs.writeFileSync(file, newContent, 'utf8');
            console.log(`Updated paths in ${file}`);
            changedFiles++;
        }
    }
    console.log(`Updated paths in ${changedFiles} files.`);
}

fixPaths().catch(console.error);

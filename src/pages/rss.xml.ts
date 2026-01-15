import rss from '@astrojs/rss';
import { getImage } from 'astro:assets';
import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
import sanitize from 'sanitize-html';

const parser = new MarkdownIt();

export async function GET(context: any) {
  const blog = await getCollection('blog');
  const work = await getCollection('work');

  const taggedBlogPosts = blog
    .filter(post => !post.data.isDraft)
    .map(post => ({ ...post, type: 'blog' }));
  const taggedWorkPosts = work
    .filter(post => !post.data.isDraft)
    .map(post => ({ ...post, type: 'work' }));

  // Combine all posts into a single array
  let allPosts = [...taggedBlogPosts, ...taggedWorkPosts];

  allPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  // Glob images to resolve paths
  const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/images/cover/*.{jpeg,jpg,png,gif,webp}"
  );

  const items = await Promise.all(allPosts.map(async (post: any) => {
    let enclosure = undefined;
    let customData = "";

    if (post.data.imagePath && images[post.data.imagePath]) {
      const imageLoader = images[post.data.imagePath];
      if (imageLoader) {
        const image = (await imageLoader()).default;
        const optimizedImage = await getImage({
          src: image,
          format: "png",
          width: 1200,
          height: 630,
        });

        const url = new URL(optimizedImage.src, context.site).href;

        // Use original format if passthrough service is used, or the requested format if optimized
        // Since we requested 'png', but passthrough ignores it, we should check src extension or fallback to original image.format
        // Using image.format is safe for source info.
        const format = image.format === 'jpg' ? 'jpeg' : image.format;
        const mimeType = `image/${format}`;

        enclosure = {
          url,
          length: 0,
          type: mimeType
        };

        customData = `<media:content type="${mimeType}" width="${optimizedImage.attributes.width ?? image.width}" height="${optimizedImage.attributes.height ?? image.height}" medium="image" url="${url}" />`;
      }
    }

    return {
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: post.type === 'blog' ? `/blogs/${post.slug}/` : `/work/${post.slug}/`, // Conditional link based on type
      content: sanitize(parser.render(post.body), {
        allowedTags: sanitize.defaults.allowedTags.concat(['img'])
      }),
      enclosure,
      customData,
      ...post.data,
    };
  }));

  return rss({
    title: 'Anirban.space',
    description: "Portfolio of Anirban Sikdar, an Associate Engineer in AI/ML building production-ready systems. Expert in Python, cloud workflows, and data visualization, with a passion for space tech and precision engineering.",
    site: context.site,
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
      media: "http://search.yahoo.com/mrss/",
    },
    customData: `<atom:link href="${new URL("rss.xml", context.site)}" rel="self" type="application/rss+xml" />`,
    items: items,
  });
}
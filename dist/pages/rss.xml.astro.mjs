import rss from '@astrojs/rss';
import { a as getCollection } from '../chunks/_astro_content_qryQ1-nZ.mjs';
import sanitize from 'sanitize-html';
import MarkdownIt from 'markdown-it';
export { renderers } from '../renderers.mjs';

const parser = new MarkdownIt();
async function GET(context) {
  const blog = await getCollection("blog");
  const work = await getCollection("work");
  const taggedBlogPosts = blog.filter((post) => !post.data.isDraft).map((post) => ({ ...post, type: "blog" }));
  const taggedWorkPosts = work.filter((post) => !post.data.isDraft).map((post) => ({ ...post, type: "work" }));
  let allPosts = [...taggedBlogPosts, ...taggedWorkPosts];
  allPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  return rss({
    title: "Anirban.space",
    description: "Captivating portfolio of an undergrad tech enthusiast. Anirban Sikdar's projects range from AI-powered hospital views to robotics for agriculture. Skilled in Python, JavaScript, and cloud, his interests span computer science, aerospace, and Formula 1.",
    site: context.site,
    items: allPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.descrblogiption,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/blog/[slug]` routes
      link: post.type === "blog" ? `/blogs/${post.slug}/` : `/work/${post.slug}/`,
      // Conditional link based on type
      content: sanitize(parser.render(post.body), {
        allowedTags: sanitize.defaults.allowedTags.concat(["img"])
      }),
      ...post.data
    }))
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

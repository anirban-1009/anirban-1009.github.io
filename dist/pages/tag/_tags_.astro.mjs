/* empty css                                    */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CCRwLsK6.mjs';
import 'kleur/colors';
import { a as getCollection } from '../../chunks/_astro_content_qryQ1-nZ.mjs';
import { $ as $$Layout } from '../../chunks/layout_ZaXugBJV.mjs';
import { $ as $$Card } from '../../chunks/card_C2n8K-oo.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://anirban-1009.github.io/");
const $$tags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tags;
  const { tags } = Astro2.params;
  const posts = await getCollection("work", ({ data }) => {
    return data.isDraft !== true && data.tags.includes(tags);
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": tags, "description": `All the posts related to ${tags}`, "imagePath": "https://gitlab.com/anirban-1009/anirban.codes/-/raw/main/public/images/SocialHero.jpg?ref_type=heads" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="h-screen"> <p class="text-4xl lg:text-5xl font-sans font-medium py-8">${tags}</p> <div class="hidden md:flex lg:grid lg:grid-cols-2 lg:gap-y-10 gap-4 flex-col"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": post.data.title, "description": post.data.description, "imagePath": post.data.imagePath, "link": `/work/${post.slug}/`, "tags": post.data.tags })}`)} </div> </section> ` })}`;
}, "/Users/anirbansikdar/Projects/anirban.codes/src/pages/tag/[tags].astro", void 0);

const $$file = "/Users/anirbansikdar/Projects/anirban.codes/src/pages/tag/[tags].astro";
const $$url = "/tag/[tags]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tags,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

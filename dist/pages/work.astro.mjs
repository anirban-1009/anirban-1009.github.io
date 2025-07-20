/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CCRwLsK6.mjs';
import 'kleur/colors';
import { a as getCollection } from '../chunks/_astro_content_qryQ1-nZ.mjs';
import { $ as $$Layout } from '../chunks/layout_ZaXugBJV.mjs';
import { $ as $$Card } from '../chunks/card_C2n8K-oo.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("work", ({ data }) => {
    return data.isDraft !== true;
  })).sort((a, b) => {
    const dateA = new Date(a.data.date);
    const dateB = new Date(b.data.date);
    return dateB.getTime() - dateA.getTime();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "My Work", "imagePath": "https://gitlab.com/anirban-1009/anirban.codes/-/raw/main/public/images/SocialHero.jpg?ref_type=heads", "description": "A Pge detailing the work, I have done overtime" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-4"> <p class="text-5xl font-sans pb-4">Work</p> <div class="flex lg:grid lg:grid-cols-2 lg:gap-y-10 gap-4 flex-col"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": post.data.title, "description": post.data.description, "imagePath": post.data.imagePath, "link": `/work/${post.slug}/`, "tags": post.data.tags })}`)} </div> </section> ` })}`;
}, "/Users/anirbansikdar/Projects/anirban.codes/src/pages/work/index.astro", void 0);

const $$file = "/Users/anirbansikdar/Projects/anirban.codes/src/pages/work/index.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

/* empty css                                    */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_CCRwLsK6.mjs';
import 'kleur/colors';
import { a as getCollection } from '../../chunks/_astro_content_qryQ1-nZ.mjs';
import { $ as $$Layout } from '../../chunks/layout_ZaXugBJV.mjs';
import { $ as $$Image } from '../../chunks/Image_yD4Zb9LT.mjs';
import { $ as $$Prose } from '../../chunks/prose_D030eLD_.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://anirban-1009.github.io/");
async function getStaticPaths() {
  const posts = await getCollection("work");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const prerender = true;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  const images = /* #__PURE__ */ Object.assign({"/src/images/cover/GitHub_Logo.png": () => import('../../chunks/GitHub_Logo_D-3gcAL8.mjs'),"/src/images/cover/Hugo.png": () => import('../../chunks/Hugo_DKhVUmFf.mjs'),"/src/images/cover/RPi.jpg": () => import('../../chunks/RPi_Cm0Yp6BI.mjs'),"/src/images/cover/Routio.png": () => import('../../chunks/Routio_CRsWgiMC.mjs'),"/src/images/cover/ai-revolution.jpeg": () => import('../../chunks/ai-revolution_C6sCvTxb.mjs'),"/src/images/cover/aquaskimmer.png": () => import('../../chunks/aquaskimmer_Bd4Nsg-e.mjs'),"/src/images/cover/cover-college.jpg": () => import('../../chunks/cover-college_CSVyBx0s.mjs'),"/src/images/cover/deltax.jpg": () => import('../../chunks/deltax_V4zbmiiq.mjs'),"/src/images/cover/eco.jpg": () => import('../../chunks/eco_C3_Uhh0n.mjs')});
  if (!images[post.data.imagePath]) throw new Error(`"${post.data.imagePath}" does not exist in glob: "/images/*.{jpeg,jpg,png,gif}"`);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title, "imagePath": `https://www.anirban.space/${post.data.metaPath}`, "description": post.data.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article> <p class="py-4 lg:px-16 text-4xl lg:text-5xl lg:font-medium font-semibold">${post.data.title}</p> <div class="lg:px-52"> ${renderComponent($$result2, "Image", $$Image, { "src": images[post.data.imagePath](), "height": "166", "width": "370", "alt": post.data.description, "widths": [240, 540, 720], "sizes": `(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px`, "class": "rounded-2xl lg:w-full" })} <p class="py-4">${post.data.date}</p> ${post.data.tags && post.data.tags.length > 0 && renderTemplate`<div class="hidden md:flex flex-row gap-3"> ${post.data.tags.map((tag) => renderTemplate`<a class="h-auto w-fit px-3 rounded-lg border border-primary text-primary"${addAttribute(`/tag/${tag}`, "href")}> ${tag} </a>`)} </div>`} ${renderComponent($$result2, "Prose", $$Prose, {}, { "default": async ($$result3) => renderTemplate` <div class="lg:w-screen lg:max-w-full"> ${renderComponent($$result3, "Content", Content, {})} </div> ` })} </div> </article> ` })}`;
}, "/Users/anirbansikdar/Projects/anirban.codes/src/pages/work/[...slug].astro", void 0);

const $$file = "/Users/anirbansikdar/Projects/anirban.codes/src/pages/work/[...slug].astro";
const $$url = "/work/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

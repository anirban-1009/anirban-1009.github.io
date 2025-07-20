/* empty css                                 */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CCRwLsK6.mjs';
import 'kleur/colors';
import { g as getEntry } from '../chunks/_astro_content_qryQ1-nZ.mjs';
import { $ as $$Layout } from '../chunks/layout_ZaXugBJV.mjs';
import { $ as $$Image } from '../chunks/Image_yD4Zb9LT.mjs';
import { $ as $$Prose } from '../chunks/prose_D030eLD_.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://anirban-1009.github.io/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const post = await getEntry("about", "about");
  const aboutHeading = "I am Anirban Sikdar, an undergraduate Computer Science Engineering(Artificial Intelligence & Machine Learning) Student. I have a keen interest in Image Processing, Robotics, Deep Space research and Astronomy. Building visualisations and interactive systems for the concepts been taught and watching them in action is the most fun part of building things.";
  const aboutDescription = " I have also gained experience in Raspberry Pi and also on various IOT platforms as Thingsboards and Adafruit IO. I have a Problem solving instinct where when i face one i don't usually tend to back-off easily \u{1F609}.";
  const { Content } = await post.render();
  const images = /* #__PURE__ */ Object.assign({"/src/images/aboutHero.jpg": () => import('../chunks/aboutHero_Byp69sMQ.mjs')});
  if (!images[post.data.imagePath]) throw new Error(`"${post.data.imagePath}" does not exist in glob: "/images/*.{jpeg,jpg,png,gif}"`);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About", "description": post.data.description, "imagePath": "https://gitlab.com/anirban-1009/anirban.codes/-/raw/main/public/images/SocialHero.jpg?ref_type=heads" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="lg:flex lg:px-24 lg:pt-20 lg:gap-12 lg:justify-between dark:text-primary"> <!-- Desktop About Heading --> <p class="lg:hidden py-4 text-5xl font-semibold">${post.data.title}</p> ${renderComponent($$result2, "Image", $$Image, { "src": images[post.data.imagePath](), "alt": "About Hero", "height": "356", "width": "356", "class": "rounded-full lg:hidden", "loading": "eager" })} <div class="py-6 lg:text-lg"> <!-- Mobile About Heading --> <p class="hidden lg:block py-4 text-5xl font-semibold">${post.data.title}</p> ${aboutHeading} <br><br> ${aboutDescription} </div> ${renderComponent($$result2, "Image", $$Image, { "src": images[post.data.imagePath](), "alt": "About Hero", "height": "356", "width": "356", "class": "hidden lg:block rounded-full", "loading": "eager" })} </div> ${renderComponent($$result2, "Prose", $$Prose, {}, { "default": async ($$result3) => renderTemplate` <div class="lg:w-dvw lg:px-52 lg:pb-12 lg:text-lg lg:text-pretty"> ${renderComponent($$result3, "Content", Content, {})} </div> ` })} ` })}`;
}, "/Users/anirbansikdar/Projects/anirban.codes/src/pages/about/index.astro", void 0);

const $$file = "/Users/anirbansikdar/Projects/anirban.codes/src/pages/about/index.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

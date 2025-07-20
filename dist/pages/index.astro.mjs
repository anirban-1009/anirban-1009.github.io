/* empty css                                 */
import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_CCRwLsK6.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/Image_yD4Zb9LT.mjs';
import { a as getCollection } from '../chunks/_astro_content_qryQ1-nZ.mjs';
import { $ as $$Layout } from '../chunks/layout_ZaXugBJV.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://anirban-1009.github.io/");
const $$Slide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Slide;
  const { title, link, description, imagePath, tags } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/images/cover/GitHub_Logo.png": () => import('../chunks/GitHub_Logo_D-3gcAL8.mjs'),"/src/images/cover/Hugo.png": () => import('../chunks/Hugo_DKhVUmFf.mjs'),"/src/images/cover/RPi.jpg": () => import('../chunks/RPi_Cm0Yp6BI.mjs'),"/src/images/cover/Routio.png": () => import('../chunks/Routio_CRsWgiMC.mjs'),"/src/images/cover/ai-revolution.jpeg": () => import('../chunks/ai-revolution_C6sCvTxb.mjs'),"/src/images/cover/aquaskimmer.png": () => import('../chunks/aquaskimmer_Bd4Nsg-e.mjs'),"/src/images/cover/cover-college.jpg": () => import('../chunks/cover-college_CSVyBx0s.mjs'),"/src/images/cover/deltax.jpg": () => import('../chunks/deltax_V4zbmiiq.mjs'),"/src/images/cover/eco.jpg": () => import('../chunks/eco_C3_Uhh0n.mjs')});
  if (!images[imagePath]) throw new Error(`"${imagePath}" does not exist in glob: "/images/*.{jpeg,jpg,png,gif}"`);
  return renderTemplate`${maybeRenderHead()}<div class="lg:flex justify-center"> <a${addAttribute(`work\\${link}`, "href")} aria-label="working link"> <div class="bg-white dark:bg-secondary h-auto lg:h-[28rem] rounded-2xl p-4"> ${renderComponent($$result, "Image", $$Image, { "alt": `${title}-slide-article`, "src": images[imagePath](), "height": "135", "width": "308", "quality": 85, "widths": [240, 540, 720], "sizes": `(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px`, "loading": "eager", "class": "rounded-lg w-full" })} <!-- Text Section --> <div class="flex flex-col p-2 gap-3 my-5"> <p class="text-xl lg:text-2xl font-sans font-medium">${title}</p> <div class="md:flex flex-row gap-4 -ml-4 hidden"> ${tags.map((tag, index) => renderTemplate`<a${addAttribute(`h-auto w-fit text-ellipsis px-3 rounded-lg border border-primary text-primary line-clamp-1 whitespace-nowrap${index === tags.length - 1 ? "max-w-[100px] overflow-hidden" : ""}`, "class")}${addAttribute(`tag/${tag}`, "href")}>${tag}</a>`)} </div> <p class="lg:text-lg dark:text-white">${description}</p> </div> </div> </a> </div>`;
}, "/Users/anirbansikdar/Projects/anirban.codes/src/components/slide.astro", void 0);

const $$Astro = createAstro("https://anirban-1009.github.io/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("work", ({ data }) => {
    return data.isDraft !== true;
  })).sort((a, b) => {
    const dateA = new Date(a.data.date);
    const dateB = new Date(b.data.date);
    return dateB.getTime() - dateA.getTime();
  });
  const HeadText = "I am an Aspiring AI & ML Engineer, here I share myself with you, and everything I am working on or have been up to.";
  const AboutText = "Hi, I\u2019m Anirban Sikdar, an undergrad passionate about Computer Science, AI, and ML. My interests span Image Processing, Robotics, Deep Space, and Astronomy. I excel in visualizations and interactive systems, I\u2019m skilled in Python, JavaScript, and Cloud Computing. My projects range from responsive hospital system views to Delta robots for tomato sorting. I also served as Student Dean and Head of Google Technologies. Outside of tech, I\u2019m fascinated by Space Tech, Orbital Mechanics, and Formula 1.";
  const metaDescription = "Captivating portfolio of an undergrad tech enthusiast. Anirban Sikdar's projects range from AI-powered hospital views to robotics for agriculture. Skilled in Python, JavaScript, and cloud, his interests span computer science, aerospace, and Formula 1.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Anirban.space", "imagePath": "https://gitlab.com/anirban-1009/anirban.codes/-/raw/main/public/images/SocialHero.jpg?ref_type=heads", "description": metaDescription }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="w-full flex flex-col gap-4"> <!-- Image Section for mobile view --> <div class="flex lg:hidden justify-center my-4"> ${renderComponent($$result2, "Image", $$Image, { "src": "/images/heros/HeroImage.jpg", "alt": "Hero", "width": "208", "height": "208", "loading": "eager", "class": "rounded-full" })} </div> <!-- Hero Section Desktop --> <div class="lg:flex lg:justify-between lg:py-8"> <div class="lg:my-auto flex flex-col gap-4"> <p class="text-4xl font-bold text-primary font-sans">Anirban Sikdar</p> <p class="lg:text-lg lg:max-w-[700px]">${HeadText}</p> <!-- Button --> <div class="flex w-full justify-center lg:justify-start"> <a class="flex h-12 w-64 bg-secondary dark:bg-primary rounded-xl justify-center text-white items-center" href="/work">
Notable Work
</a> </div> </div> <div class="hidden lg:flex justify-center my-4"> <!-- Image for Desktop view --> ${renderComponent($$result2, "Image", $$Image, { "src": "/images/heros/HeroImage.jpg", "alt": "Hero", "width": "256", "height": "256", "loading": "eager", "class": "rounded-full" })} </div> </div> </div>  <div class="my-12"> <p class="text-4xl font-bold font-sans text-primary">My Work</p> <!-- Desktop View --> <div class="py-8 grid grid-cols-1 lg:grid-cols-3 gap-8"> ${posts.slice(0, 3).map((post) => renderTemplate`${renderComponent($$result2, "Slide", $$Slide, { "title": post.data.title, "link": post.slug, "description": post.data.description, "imagePath": post.data.imagePath, "tags": post.data.tags })}`)} </div> </div>  <div class="flex lg:justify-between flex-col my-12 gap-8"> <p class="lg:hidden text-4xl font-bold font-sans text-primary">About Me</p> <div class="flex flex-col lg:flex-row lg:justify-between lg:gap-24 gap-8"> <!-- About Hero Image Section --> <div class="flex justify-center lg:min-w-80"> ${renderComponent($$result2, "Image", $$Image, { "src": "/images/heros/HomeAboutHero.webp", "alt": "About Hero", "width": "300", "height": "300", "class": "rounded-3xl shadow-img-light lg:w-full", "loading": "lazy" })} </div> <!-- About Hero Text Desktop View--> <div class="flex flex-col gap-4 lg:p-10"> <p class="hidden lg:block text-4xl font-bold font-sans text-primary">About Me</p> <p class="lg:text-lg">${AboutText}</p> <div class="flex flex-col lg:flex-row gap-8 lg:gap-4"> <!-- Button --> <div class="flex w-full lg:w-auto justify-center"> <a class="flex h-12 w-64 bg-secondary dark:bg-primary rounded-xl justify-center text-white items-center" href="/about">
More.
</a> </div> <!-- Button --> <div class="flex w-full lg:w-auto justify-center"> <a class="flex h-12 w-64 bg-white dark:bg-black border-primary border rounded-xl justify-center items-center" href="Anirban_Sikdar.pdf">
Resume
</a> </div> </div> </div> </div> </div> ` })}`;
}, "/Users/anirbansikdar/Projects/anirban.codes/src/pages/index.astro", void 0);

const $$file = "/Users/anirbansikdar/Projects/anirban.codes/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

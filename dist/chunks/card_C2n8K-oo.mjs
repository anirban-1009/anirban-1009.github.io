import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_CCRwLsK6.mjs';
import 'kleur/colors';
import { $ as $$Image } from './Image_yD4Zb9LT.mjs';

const $$Astro = createAstro("https://anirban-1009.github.io/");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, link, description, imagePath, tags } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/images/cover/GitHub_Logo.png": () => import('./GitHub_Logo_D-3gcAL8.mjs'),"/src/images/cover/Hugo.png": () => import('./Hugo_DKhVUmFf.mjs'),"/src/images/cover/RPi.jpg": () => import('./RPi_Cm0Yp6BI.mjs'),"/src/images/cover/Routio.png": () => import('./Routio_CRsWgiMC.mjs'),"/src/images/cover/ai-revolution.jpeg": () => import('./ai-revolution_C6sCvTxb.mjs'),"/src/images/cover/aquaskimmer.png": () => import('./aquaskimmer_Bd4Nsg-e.mjs'),"/src/images/cover/cover-college.jpg": () => import('./cover-college_CSVyBx0s.mjs'),"/src/images/cover/deltax.jpg": () => import('./deltax_V4zbmiiq.mjs'),"/src/images/cover/eco.jpg": () => import('./eco_C3_Uhh0n.mjs')});
  if (!images[imagePath]) throw new Error(`"${imagePath}" does not exist in glob: "/images/*.{jpeg,jpg,png,gif}"`);
  return renderTemplate`${maybeRenderHead()}<div class="lg:flex justify-center lg:px-5"> <a${addAttribute(link, "href")}> <div class="bg-white dark:bg-secondary h-min-64 w-full lg:w-fit lg:min-w-[40rem] p-4 lg:p-7 rounded-xl"> ${renderComponent($$result, "Image", $$Image, { "alt": `${title}-Cove-Image`, "src": images[imagePath](), "height": "140", "width": "340", "quality": 85, "widths": [240, 540, 720], "sizes": `(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px`, "class": "rounded-lg lg:w-full" })} <div class="flex flex-col gap-4 py-8"> <p class="text-xl lg:text-3xl">${title}</p> ${tags && tags.length > 0 && renderTemplate`<div class="flex flex-row gap-3 -ml-4"> ${tags.map((tag) => renderTemplate`<a class="h-auto w-fit px-3 rounded-lg border border-primary text-primary line-clamp-1"${addAttribute(`/tag/${tag}`, "href")}> ${tag} </a>`)} </div>`} <p class="lg:text-lg">${description}</p> </div> </div> </a> </div>`;
}, "/Users/anirbansikdar/Projects/anirban.codes/src/components/card.astro", void 0);

export { $$Card as $ };

/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CCRwLsK6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/layout_ZaXugBJV.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col align-center justify-center text-center h-lvh gap-4"> <p class="w-full text-4xl text-secondary font-bold font-space dark:text-primary">404</p> <p class="font-bold text-m-xl align-text-top"> Looks like you're lost</p> <p class="font-bold text-m-base align-text-top">the page you are looking for is not avaible!</p> </div> ` })}`;
}, "/Users/anirbansikdar/Projects/anirban.codes/src/pages/404.astro", void 0);

const $$file = "/Users/anirbansikdar/Projects/anirban.codes/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

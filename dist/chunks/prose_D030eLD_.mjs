import { c as createComponent, m as maybeRenderHead, e as renderSlot, a as renderTemplate } from './astro/server_CCRwLsK6.mjs';
import 'kleur/colors';
import 'clsx';

const $$Prose = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="prose
  prose-h1:font-bold lg:prose-h1:text-3xl prose-h1:text-xl
  prose-a:text-secondary
  dark:prose-headings:text-primary dark:prose-a:text-primary dark:prose-p:text-primary
  dark:prose-li:text-primary
  dark:prose-strong:text-primary dark:prose-code:text-primary
  prose-p:text-justify prose-img:rounded-xl
  prose-a:underline lg:max-w-full"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/anirbansikdar/Projects/anirban.codes/src/components/prose.astro", void 0);

export { $$Prose as $ };

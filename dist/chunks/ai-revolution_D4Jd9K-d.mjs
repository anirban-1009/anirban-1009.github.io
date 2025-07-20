import { l as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CCRwLsK6.mjs';
import 'clsx';

const frontmatter = {
  "title": "AI Revolution",
  "description": "This is an article expressing my thoughts around the surge of ai in the recent times",
  "imagePath": "/src/images/cover/ai-revolution.jpeg",
  "metaPath": "/src/images/cover/ai-revolution.jpeg",
  "tags": ["AI", "Cloud computing"],
  "date": "April 06, 2025",
  "isDraft": true
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "the-rise",
    "text": "The Rise"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    ...props.components
  };
  return createVNode(_components.h1, {
    id: "the-rise",
    children: "The Rise"
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const url = "src/content/blog/ai-revolution.mdx";
const file = "/Users/anirbansikdar/Projects/anirban.codes/src/content/blog/ai-revolution.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/anirbansikdar/Projects/anirban.codes/src/content/blog/ai-revolution.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

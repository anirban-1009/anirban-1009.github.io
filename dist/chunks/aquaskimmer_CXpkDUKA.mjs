import { l as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CCRwLsK6.mjs';
import 'clsx';

const frontmatter = {
  "title": "Aquaskimmer",
  "description": "This is an article expressing my thoughts around the surge of ai in the recent times",
  "imagePath": "/src/images/cover/aquaskimmer.png",
  "metaPath": "/src/images/cover/aquaskimmer.png",
  "tags": ["IoT", "RaspberryPi"],
  "date": "April 06, 2025",
  "isDraft": true
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "what-is-aquaskimmer",
    "text": "What is aquaskimmer?"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    img: "img",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "what-is-aquaskimmer",
      children: "What is aquaskimmer?"
    }), "\n", createVNode(_components.p, {
      children: ["Aquaskimmer is the flagship product of ", createVNode(_components.strong, {
        children: "Eunio Innovations"
      }), ", it is an aquadrone which is used to fetch the foreign and harmful material from water bodies."]
    }), "\n", createVNode(_components.p, {
      children: ["It was the project to which I was able contributed which eventually turned into my first internship experience.\n", createVNode(_components.img, {
        src: "/images/work/aquaskimmer/the-drone.jpg",
        alt: "the-drone"
      })]
    })]
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

const url = "src/content/work/aquaskimmer.mdx";
const file = "/Users/anirbansikdar/Projects/anirban.codes/src/content/work/aquaskimmer.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/anirbansikdar/Projects/anirban.codes/src/content/work/aquaskimmer.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

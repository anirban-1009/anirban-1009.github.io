import { l as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CCRwLsK6.mjs';
import 'clsx';

const frontmatter = {
  "title": "My Thoughts on GitHub",
  "description": "This is a blog post on github platform",
  "imagePath": "/src/images/cover/GitHub_Logo.png",
  "date": "Apr 10, 2023",
  "metaPath": "/images/covers/GitHub_Logo.png"
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 4,
    "slug": "what-is-version-control",
    "text": "What is Version Control?"
  }, {
    "depth": 3,
    "slug": "why-we-need-version-control-and-git",
    "text": "Why we need Version Control and Git?"
  }, {
    "depth": 4,
    "slug": "github",
    "text": "GitHub"
  }, {
    "depth": 4,
    "slug": "gitlab",
    "text": "GitLab"
  }, {
    "depth": 3,
    "slug": "is-verision-control-and-git-as-a-technology-important-to-learn",
    "text": "Is Verision Control and Git as a technology important to learn?"
  }, {
    "depth": 3,
    "slug": "conclusion",
    "text": "Conclusion"
  }, {
    "depth": 3,
    "slug": "references",
    "text": "References"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h3, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "In this article, we will learn about Git as a technology and why version control is emphasized in project management as a best practice."
    }), "\n", createVNode(_components.h4, {
      id: "what-is-version-control",
      children: "What is Version Control?"
    }), "\n", createVNode(_components.p, {
      children: "Version Control is the practice of tracking changes to software code."
    }), "\n", createVNode(_components.h3, {
      id: "why-we-need-version-control-and-git",
      children: "Why we need Version Control and Git?"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "What is Version Control as a whole?"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Version control is the practice of tracking changes made to software code. Like how everyone has a lifeline where their actions are recorded subconsciously, such as one’s first create, first love, first house, milestones shape an individual and help them grow. Similarly, Version Control helps us go back to a point in the software code timeline to track, revert, or identify which changes contributed to errors or mishaps."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "What is Git?"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Git is a modern version control system that is mature, actively maintained, and open-source. It is a technology that implements the idea of Version Control. Platforms such as GitHub and GitLab provide developers with functionalities to efficiently work in a team."
    }), "\n", createVNode(_components.h4, {
      id: "github",
      children: "GitHub"
    }), "\n", createVNode(_components.p, {
      children: "GitHub is a Microsoft-owned proprietary version control platform that was previously a completely open-source project. It was famous among a large group of software developers and beginner engineers as a whole. However, after its acquisition by Microsoft, several public favorite functionalities were threatened, and their quality has become questionable."
    }), "\n", createVNode(_components.h4, {
      id: "gitlab",
      children: "GitLab"
    }), "\n", createVNode(_components.p, {
      children: "GitLab is an open-source version control platform that can be redeveloped and redistributed with a higher degree of customizable features. It is an ideal case of a DevOps implementation platform that supports Continuous Integration and Development (CI/CD). GitLab also offers team-friendly and productive features."
    }), "\n", createVNode(_components.h3, {
      id: "is-verision-control-and-git-as-a-technology-important-to-learn",
      children: "Is Verision Control and Git as a technology important to learn?"
    }), "\n", createVNode(_components.p, {
      children: "In my experience, before a beginner embarks on the journey of learning a technology or a framework, I would suggest learning the basics and functionalities of a platform such as Git. This is because there is practically no credible way of transferring knowledge to someone about how much a person has worked over time. Having a continuous presence on a platform like this and being able to showcase learnings and contributions to other technologies is an asset. Platforms like these allow individuals to showcase their skills and contributions, unlike certificates, which many of my peers seek."
    }), "\n", createVNode(_components.p, {
      children: "I regret not being so active on platforms like these in my earlier stages, which could have led me to become a confident and successful contributor. Developing the habit of being active on these platforms is a challenge, but it’s worth the effort. Any good platform or technology not only brings direct functionality but also a range of other scope of developments to a person. In this case, it brings a sense of scale for anyone, such as how many things are yet to learn and what the people around are up to. It also has a team maintaining functionality to it, where you can assign and manage the issue within a project, which, if not drastically, increases the team’s productivity. It is also a good tool to track progress and avoid ambiguity."
    }), "\n", createVNode(_components.h3, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "At the end of the day, a person’s own will is the driving factor of their learning and progress, but having a good hand on some platforms like these exposes us to the world in real terms. It drives individuals to learn further and expand their knowledge, creating a sense of healthy competition. There is no harm in that."
    }), "\n", createVNode(_components.h3, {
      id: "references",
      children: "References"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.a, {
            href: "https://docs.github.com/en/get-started/quickstart/git-and-github-learning-resources",
            children: "Learn Github"
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.a, {
            href: "https://about.gitlab.com/learn/",
            children: "Learn GitLab"
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.a, {
            href: "https://www.atlassian.com/git/tutorials/what-is-git",
            children: "What’ Git?"
          })
        }), "\n"]
      }), "\n"]
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

const url = "src/content/blog/Version-Control.mdx";
const file = "/Users/anirbansikdar/Projects/anirban.codes/src/content/blog/Version-Control.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/anirbansikdar/Projects/anirban.codes/src/content/blog/Version-Control.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

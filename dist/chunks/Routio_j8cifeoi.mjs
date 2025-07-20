import { l as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CCRwLsK6.mjs';
import 'clsx';

const frontmatter = {
  "title": "Routio",
  "description": "This is an article about a project on route optimization.",
  "imagePath": "/src/images/cover/Routio.png",
  "metaPath": "/images/covers/Routio.png",
  "tags": ["Monorepo", "Next.js", "DjangoRestFramework"],
  "date": "June 10, 2024"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "understanding-the-challenge",
    "text": "Understanding the Challenge"
  }, {
    "depth": 2,
    "slug": "development-process",
    "text": "Development process"
  }, {
    "depth": 3,
    "slug": "monorepo",
    "text": "MonoRepo"
  }, {
    "depth": 3,
    "slug": "software-lifecycle",
    "text": "Software LifeCycle"
  }, {
    "depth": 2,
    "slug": "login-flow",
    "text": "Login flow"
  }, {
    "depth": 2,
    "slug": "frontend",
    "text": "Frontend"
  }, {
    "depth": 2,
    "slug": "backend",
    "text": "Backend"
  }, {
    "depth": 2,
    "slug": "screenshots",
    "text": "Screenshots"
  }, {
    "depth": 2,
    "slug": "impact-and-future-directions",
    "text": "Impact and Future Directions"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }, {
    "depth": 2,
    "slug": "footnote-label",
    "text": "Footnotes"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    strong: "strong",
    sup: "sup",
    table: "table",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["You can access the application from ", createVNode(_components.a, {
        href: "https://routio.vercel.app/",
        children: createVNode(_components.strong, {
          children: "here"
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "understanding-the-challenge",
      children: "Understanding the Challenge"
    }), "\n", createVNode(_components.p, {
      children: "Waste management in modern cities involves complex logistics. Variations in waste volumes, dynamic traffic conditions, and the capacity of disposal points all contribute to the complexity. My goal was clear: develop a system that dynamically optimizes waste collection routes in real-time, ensuring efficiency and sustainability."
    }), "\n", createVNode(_components.h2, {
      id: "development-process",
      children: "Development process"
    }), "\n", createVNode(_components.p, {
      children: "Since there were 2 aspects to this projects, I researched on employing an efficient way to manage either aspects of the project i.e, Frontend and Backend. Where upon Research I stumbled upon the concept of MonoRepo."
    }), "\n", createVNode(_components.h3, {
      id: "monorepo",
      children: "MonoRepo"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["A monorepo is a single repository containing multiple distinct projects, with well-defined relationships.", createVNode(_components.sup, {
          children: createVNode(_components.a, {
            href: "#user-content-fn-1",
            id: "user-content-fnref-1",
            "data-footnote-ref": "",
            "aria-describedby": "footnote-label",
            children: "1"
          })
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "After thorough research, I understood that this technology and philosophy allow both the frontend and backend to be hosted on a single application. This setup enables them to run simultaneously, significantly reducing the complexity of managing two separate applications, their versions, and their codebases, all with a unified approach."
    }), "\n", createVNode(_components.p, {
      children: ["After choosing Next.js and Tailwind CSS for my frontend and Django Rest Framework for my backend, TurboRepo was the obvious choice for the monorepo framework due to its seamless integration with Next.js. The entire unified repository was hosted on ", createVNode(_components.a, {
        href: "https://gitlab.com",
        children: "GitLab"
      }), " for its easy and accessible issue tracking and collaboration features."]
    }), "\n", createVNode(_components.h3, {
      id: "software-lifecycle",
      children: "Software LifeCycle"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/images/work/Routio/SDC.png",
        alt: "Development-WorkFlow"
      })
    }), "\n", createVNode(_components.p, {
      children: "Since the Proposed Application was going to handle multiple aspects simultaneously, and had equally sizable workloads for the frontend and backend, It was essential for having a very simple and straight forward software development stratergy. Since the aspects of projects were having multiple aspects such as,"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Frontend"
      }), ": Map, Plotting of Routes on Map, handling multiple users, Responsive View…etc."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Backend"
      }), ": Multiple users, Entity relations, Data processing, Role Based Rendering…etc"]
    }), "\n", createVNode(_components.p, {
      children: "It was obvious that a single branch will not be an efficient way to approach it so I settled on having 2 production branches namely,"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "main"
      }), " : The og, which will host both Frontend and Backend latet codes, and the ", createVNode(_components.code, {
        children: "apps\\frontend"
      }), " folder will be used to deploy the application on ", createVNode(_components.a, {
        href: "https://vercel.com",
        children: "vercel.com"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "_backend"
      }), ": This Branch will be having the latest backend code but will not have the latest frontend code and will be hosted on ", createVNode(_components.a, {
        href: "https://www.pythonanywhere.com/",
        children: "pythonanywhere.com"
      }), " to host the APIs."]
    }), "\n", createVNode(_components.p, {
      children: "And the development cycle was like this:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Issue"
          }), " will be created describing the Feature required to be Developed, with label mentioned between ", createVNode(_components.code, {
            children: "backend & frontend"
          }), " defining the development branch."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Merge Request"
          }), " was created by creating a branch targetted towards the target branch i.e, _brackend or main."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Development"
          }), " was done on the created branch with developing the targetted feature and ability, and consecutive commits were made at every stage of development, after the feature was developed it was merged."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.strong, {
            children: "Pipeline"
          }), " of vercel was used to build and check the frontend components before deployment, and then when it passed the checks the merge was accepted."]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "login-flow",
      children: "Login flow"
    }), "\n", createVNode(_components.p, {
      children: ["In this Project instead of locally setting up the entire user management system, I have used Aut0", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-2",
          id: "user-content-fnref-2",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "2"
        })
      }), " to handle user sign up, where it allows users to signup using social accounts, such as ", createVNode(_components.code, {
        children: "Google"
      }), ". And it also enables to use ", createVNode(_components.strong, {
        children: "Role Based Access Control"
      }), createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-3",
          id: "user-content-fnref-3",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "3"
        })
      }), ", which enables to show different views based on different Roles, since I was expecting 2 different types of users."]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode("ins", {
          children: "User"
        }), " : This is the view of the normal user who will be cattered to\nby the service."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode("ins", {
          children: "Driver"
        }), " : This is the view of the Driver who will be assigned to\nvarious centers, and will be able to view the route it is supposed to take."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "In the employed login, I have used 2 peripheral where,"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Auth0"
        }), " will handle and provide the user information and will handle the login and logout operations."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Local Database"
        }), " will be storing the user information to be processed for the product, and has all the critical information for assigning them to centers, and figuring out which driver will cater to them."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["So every time there is a login of user from auth0, there is a check if the user is in the database of the application, if not based on the role of the user defined by auth0 it is handled. The flow is visualized below and can be found at ", createVNode(_components.code, {
        children: "apps/frontend/src/app/page.tsx"
      }), createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-4",
          id: "user-content-fnref-4",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "4"
        })
      }), ".\n", createVNode(_components.img, {
        src: "/images/work/Routio/LoginFlow.png",
        alt: "Login-flow"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "frontend",
      children: "Frontend"
    }), "\n", createVNode(_components.p, {
      children: ["At the frontend ", createVNode(_components.code, {
        children: "Next.js"
      }), " is being used, because of my familiarity with it and also because of it’s ease of integration with ", createVNode(_components.code, {
        children: "tailwind css"
      }), ", before the frontend of the application was developed I researched and came up with a UI/UX design for how the product will be looking", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-5",
          id: "user-content-fnref-5",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "5"
        })
      }), ", then the tough part of developing the frontend started."]
    }), "\n", createVNode(_components.p, {
      children: "The components to be developed were,"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Map section"
      }), "\n", createVNode(_components.li, {
        children: "Routing Capability"
      }), "\n", createVNode(_components.li, {
        children: ["Green Impact - A section dedicated to display the vitals of the vehicle and viewing the CO", createVNode("sup", {
          children: "2"
        }), " emissions."]
      }), "\n", createVNode(_components.li, {
        children: "Profile View - To view the user details, and the logout capabilities were provided here."
      }), "\n", createVNode(_components.li, {
        children: "Hamburger Menu - A overflowing hamburger view to navigate to various locations and functionalities."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["As illustrated below all the components were fed with the dedicated data, and were being rendered simultaneously instead of a monolothic render with changing components, and it was developed to be a SPA (Single-page application)", createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-6",
          id: "user-content-fnref-6",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "6"
        })
      }), " for the primary functionalities. They can be viewed at ", createVNode(_components.a, {
        href: "https://gitlab.com/anirban-1009/routio-turborepo/-/tree/main/apps/frontend/src/app/%5Bviews%5D",
        children: "apps/frontend/src/app/[views]- Anirban Sikdar / routio-turborepo"
      })]
    }), "\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: createVNode(_components.img, {
              src: "/images/work/Routio/UserView.png",
              alt: "UserView-flow"
            })
          }), createVNode(_components.th, {
            children: createVNode(_components.img, {
              src: "/images/work/Routio/DriverView.png",
              alt: "DrvierView-flow"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "backend",
      children: "Backend"
    }), "\n", createVNode(_components.p, {
      children: "In this project, I used Django Rest Framework (DRF) to manage database operations, including URL routing, viewsets, serializers, and models."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "URLs"
        }), ": Define endpoints for accessing resources, linking each pattern to a specific viewset."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Viewsets"
        }), ": Handle HTTP methods (GET, POST, PUT, DELETE) and interact with models and serializers to manage data."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Serializers"
        }), ": Convert complex data types to and from native Python data types, facilitating validation and data transformation."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Models"
        }), ": Define the database structure, specifying fields and behaviors for stored data."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The flow is as follows:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "URLs map the client’s request to the appropriate viewset."
      }), "\n", createVNode(_components.li, {
        children: "Viewsets process the request, using models to fetch or modify data."
      }), "\n", createVNode(_components.li, {
        children: "Serializers convert data between the model and response format."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["This setup ensures a clean separation of concerns, enhancing maintainability and scalability. Details can be found in ", createVNode(_components.code, {
        children: "apps/backend/"
      }), createVNode(_components.sup, {
        children: createVNode(_components.a, {
          href: "#user-content-fn-7",
          id: "user-content-fnref-7",
          "data-footnote-ref": "",
          "aria-describedby": "footnote-label",
          children: "7"
        })
      }), "\n", createVNode(_components.img, {
        src: "/images/work/Routio/DRF.png",
        alt: "DRF"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: createVNode(_components.img, {
              src: "/images/work/Routio/driver-main-view.png",
              alt: "driver-main-view"
            })
          }), createVNode(_components.th, {
            children: createVNode(_components.img, {
              src: "/images/work/Routio/Green-impact.png",
              alt: "Green-impact"
            })
          }), createVNode(_components.th, {
            children: createVNode(_components.img, {
              src: "/images/work/Routio/Login-screen.png",
              alt: "Login-screen"
            })
          }), createVNode(_components.th, {
            children: createVNode(_components.img, {
              src: "/images/work/Routio/Menu-section.png",
              alt: "Menu-section"
            })
          })]
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "impact-and-future-directions",
      children: "Impact and Future Directions"
    }), "\n", createVNode(_components.p, {
      children: "My waste management optimization system has already shown significant improvements in route efficiency and cost reduction. The user-friendly interface and real-time adaptability ensure that operations remain responsive and efficient."
    }), "\n", createVNode(_components.p, {
      children: "Looking ahead, I plan to incorporate advanced analytics and machine learning to further refine route optimization. Expanding my data sources to include weather forecasts and community feedback will help improve service quality and environmental sustainability."
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "Developing this waste management optimization system has been a journey of innovation and perseverance. By integrating advanced optimization algorithms with real-time data and modern web technologies, I’ve created a solution that addresses the complex logistical challenges of urban waste management. My methodology and development process, grounded in best practices and continuous improvement, have been key to my success. I’m excited to continue evolving my system and contributing to more sustainable and efficient waste management practices."
    }), "\n", createVNode(_components.section, {
      "data-footnotes": "",
      class: "footnotes",
      children: [createVNode(_components.h2, {
        class: "sr-only",
        id: "footnote-label",
        children: "Footnotes"
      }), "\n", createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          id: "user-content-fn-1",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://monorepo.tools/#what-is-a-monorepo",
              children: "What is MonoRepo?"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-1",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1",
              class: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-2",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://auth0.com/docs/get-started",
              children: "Learn the basics and begin building your authentication solution."
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-2",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 2",
              class: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-3",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://auth0.com/docs/manage-users/access-control/rbac",
              children: "Understand the concept of role-based access control and how it applies in Auth0."
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-3",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 3",
              class: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-4",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://gitlab.com/anirban-1009/routio-turborepo/-/blob/main/apps/frontend/src/app/page.tsx",
              children: "apps/frontend/src/app/page.tsx · main · Anirban Sikdar / routio-turborepo · GitLab"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-4",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 4",
              class: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-5",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://www.figma.com/design/cEM60uGEJU8MBgJlFgnxkC/Design?m=auto&t=7mME81Vba8815rhs-6",
              children: "Figma | Created with Figma"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-5",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 5",
              class: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-6",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://developer.mozilla.org/en-US/docs/Glossary/SPA",
              children: "SPA (Single-page application) - MDN Web Docs Glossary: Definitions of Web-related terms | MDN"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-6",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 6",
              class: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
        }), "\n", createVNode(_components.li, {
          id: "user-content-fn-7",
          children: ["\n", createVNode(_components.p, {
            children: [createVNode(_components.a, {
              href: "https://gitlab.com/anirban-1009/routio-turborepo/-/tree/main/apps/backend",
              children: "apps/backend · main · Anirban Sikdar / routio-turborepo · GitLab"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-7",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 7",
              class: "data-footnote-backref",
              children: "↩"
            })]
          }), "\n"]
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

const url = "src/content/work/Routio.mdx";
const file = "/Users/anirbansikdar/Projects/anirban.codes/src/content/work/Routio.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/anirbansikdar/Projects/anirban.codes/src/content/work/Routio.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

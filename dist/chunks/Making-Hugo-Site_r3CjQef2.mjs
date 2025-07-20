import { l as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CCRwLsK6.mjs';
import 'clsx';

const frontmatter = {
  "title": "How to Build Hugo Site",
  "description": "This is a blog post on Hugo website building",
  "imagePath": "/src/images/cover/Hugo.png",
  "date": "June 09, 2022",
  "metaPath": "/images/covers/Hugo.png"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-to-make-a-hugo-web-application",
    "text": "How to make a Hugo web application"
  }, {
    "depth": 3,
    "slug": "installing-hugo",
    "text": "Installing Hugo"
  }, {
    "depth": 3,
    "slug": "making-a-new-site",
    "text": "Making a new site"
  }, {
    "depth": 3,
    "slug": "extracting-the-paper-mod-theme",
    "text": "Extracting the Paper-Mod Theme"
  }, {
    "depth": 3,
    "slug": "adding-new-pages-to-our-site",
    "text": "Adding New pages to our Site"
  }, {
    "depth": 3,
    "slug": "setting-up-config-file",
    "text": "Setting up config File"
  }, {
    "depth": 3,
    "slug": "setting-up-server-for-testing-the-page",
    "text": "Setting up server for testing the Page"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "how-to-make-a-hugo-web-application",
      children: "How to make a Hugo web application"
    }), "\n", createVNode(_components.p, {
      children: "Hugo is one of the most popular open-source static site generators. With its amazing speed and flexibility, Hugo makes building websites fun again."
    }), "\n", createVNode(_components.p, {
      children: ["So in short this site is very much created using hugo and a custom ", createVNode(_components.a, {
        href: "%22https://github.com/adityatelange/hugo-PaperMod/%22",
        title: "The theme repository on GitHub",
        children: "theme"
      }), ". This site is been built on linux(Zorin OS) so the commands and steps been followed can be different for the OS changes."]
    }), "\n", createVNode(_components.h3, {
      id: "installing-hugo",
      children: "Installing Hugo"
    }), "\n", createVNode(_components.p, {
      children: "To install hugo on your machine you can use the following command"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "sudo snap install hugo"
      })
    }), "\n", createVNode(_components.h3, {
      id: "making-a-new-site",
      children: "Making a new site"
    }), "\n", createVNode(_components.p, {
      children: "We have to locally create a new hugo application in order to develop it as per our requirements. To to initialize a new hugo application we have to enter the following command"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "hugo new site <Your site name> -f yml"
      })
    }), "\n", createVNode(_components.p, {
      children: "In the above like we created a new direcotry on the path with the name of your site."
    }), "\n", createVNode(_components.p, {
      children: "This is broken down as follows:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "-f"
        }), ": is used to represent that we are formating the existing format of config file"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "yml"
        }), ": is used to specify the config file type ", createVNode(_components.code, {
          children: "yml"
        }), " is preferred over ", createVNode(_components.code, {
          children: "toml"
        }), " because it is easy to read."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["Now we should enter the directory using ", createVNode(_components.code, {
        children: "cd <Your site name>"
      }), " command."]
    }), "\n", createVNode(_components.h3, {
      id: "extracting-the-paper-mod-theme",
      children: "Extracting the Paper-Mod Theme"
    }), "\n", createVNode(_components.p, {
      children: ["The Theme used on this site the ", createVNode(_components.a, {
        href: "https://github.com/adityatelange/hugo-PaperMod/",
        title: "the link duh",
        children: "Paper-Mod"
      }), " needs to be extracted into the working Project in order to use it."]
    }), "\n", createVNode(_components.p, {
      children: "To acheive this we have to execute some more commands as follows"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "git clone https://github.com/adityatelange/hugo-PaperMod themes/PaperMod --depth=1"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["this will clone the theme into the ", createVNode(_components.code, {
        children: "themes"
      }), " folder."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "cd themes/PaperMod"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "We will change our directory to the theme directory."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.code, {
          children: "git pull"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "We are now checking for and due updates of the theme if there are any updates to be made this command will pull those updates into the current working directory."
    }), "\n", createVNode(_components.h3, {
      id: "adding-new-pages-to-our-site",
      children: "Adding New pages to our Site"
    }), "\n", createVNode(_components.p, {
      children: "So that our page is now setup with custom theme and all we need to add some pages to is so that people can be able to read it. Like it is reason for which we are making a site now to create new pages with default template we need to enter the following lines of command on the terminal."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "hugo new posts/my-first-post.md"
      })
    }), "\n", createVNode(_components.p, {
      children: ["You can create various pages by changing the page name all the pages of this site will be inside the ", createVNode(_components.code, {
        children: "content/"
      }), " directory.\nThis will create a new page on the posts section in with page name as my-first-post."]
    }), "\n", createVNode(_components.p, {
      children: ["Since we have added pages we need to edit it right because we have used ", createVNode(_components.code, {
        children: ".md"
      }), " so we need to edit these markdown files which are a piece of cake to do you can see the procedure of how to edit markdown files ", createVNode(_components.a, {
        href: "https://www.w3schools.io/file/markdown-introduction/",
        title: "link for tutorial",
        children: "here✌️"
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "setting-up-config-file",
      children: "Setting up config File"
    }), "\n", createVNode(_components.p, {
      children: ["We need to also setup a ", createVNode(_components.code, {
        children: "config.yml"
      }), " file change the deafult look of the theme and to initialize the theme. We need to enter the root directory of the hugo application, there should be an existing config file we need to add the following contents to it."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "baseURL: \"https://examplesite.com/\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "title: ExampleSite"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "paginate: 5"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "theme: PaperMod"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "enableRobotsTXT: true"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "buildDrafts: false"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "buildFuture: false"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "buildExpired: false"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "googleAnalytics: UA-123-45"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "minify:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  disableXML: true"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  minifyOutput: true"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "params:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  env: production # to enable google analytics, opengraph, twitter-cards and schema."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  title: ExampleSite"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  description: \"ExampleSite description\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  keywords: [Blog, Portfolio, PaperMod]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  author: Me"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  # author: [\"Me\", \"You\"] # multiple authors"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  images: [\"<link or path of image for opengraph, twitter-cards>\"]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  DateFormat: \"January 2, 2006\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  defaultTheme: auto # dark, light"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  disableThemeToggle: false"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  ShowReadingTime: true"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  ShowShareButtons: true"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  ShowPostNavLinks: true"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  ShowBreadCrumbs: true"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  ShowCodeCopyButtons: false"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  ShowWordCount: true"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  ShowRssButtonInSectionTermList: true"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  UseHugoToc: true"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  disableSpecial1stPost: false"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  disableScrollToTop: false"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  comments: false"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  hidemeta: false"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  hideSummary: false"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  showtoc: false"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  tocopen: false"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  assets:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    # disableHLJS: true # to disable highlight.js"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    # disableFingerprinting: true"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    favicon: \"<link / abs url>\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    favicon16x16: \"<link / abs url>\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    favicon32x32: \"<link / abs url>\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    apple_touch_icon: \"<link / abs url>\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    safari_pinned_tab: \"<link / abs url>\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  label:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    text: \"Home\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    icon: /apple-touch-icon.png"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    iconHeight: 35"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  # profile-mode"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  profileMode:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    enabled: false # needs to be explicitly set"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    title: ExampleSite"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    subtitle: \"This is subtitle\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    imageUrl: \"<img location>\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    imageWidth: 120"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    imageHeight: 120"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    imageTitle: my image"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    buttons:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - name: Posts"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        url: posts"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      - name: Tags"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "        url: tags"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  # home-info mode"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  homeInfoParams:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    Title: \"Hi there \\U0001F44B\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    Content: Welcome to my blog"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  socialIcons:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - name: twitter"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      url: \"https://twitter.com/\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - name: stackoverflow"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      url: \"https://stackoverflow.com\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - name: github"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      url: \"https://github.com/\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  analytics:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    google:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      SiteVerificationTag: \"XYZabc\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    bing:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      SiteVerificationTag: \"XYZabc\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    yandex:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      SiteVerificationTag: \"XYZabc\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  cover:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    hidden: true # hide everywhere but not in structured data"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    hiddenInList: true # hide on list pages and home"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    hiddenInSingle: true # hide on single page"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  editPost:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    URL: \"https://github.com/<path_to_repo>/content\""
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    Text: \"Suggest Changes\" # edit text"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    appendFilePath: true # to append file path to Edit link"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {})
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  # for search"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  # https://fusejs.io/api/options.html"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  fuseOpts:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    isCaseSensitive: false"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    shouldSort: true"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    location: 0"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    distance: 1000"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    threshold: 0.4"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    minMatchCharLength: 0"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    keys: [\"title\", \"permalink\", \"summary\", \"content\"]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "menu:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  main:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - identifier: categories"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      name: categories"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      url: /categories/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      weight: 10"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - identifier: tags"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      name: tags"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      url: /tags/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      weight: 20"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    - identifier: example"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      name: example.org"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      url: https://example.org"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "      weight: 30"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "# Read: https://github.com/adityatelange/hugo-PaperMod/wiki/FAQs#using-hugos-syntax-highlighter-chroma"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "pygmentsUseClasses: true"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "markup:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "  highlight:"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    noClasses: false"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    # anchorLineNos: true"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    # codeFences: true"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    # guessSyntax: true"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    # lineNos: true"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    # style: monokai"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "setting-up-server-for-testing-the-page",
      children: "Setting up server for testing the Page"
    }), "\n", createVNode(_components.p, {
      children: "So now the pages added the theme setted up we need to host the page locally so that we can see what it looks like and make some changes to it."
    }), "\n", createVNode(_components.p, {
      children: "To host a hugo page locally we need to enter:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "hugo server -D"
      })
    }), "\n", createVNode(_components.p, {
      children: "This will host the page on the local server and will show the site you need to get on it should be like"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: createVNode(_components.a, {
          href: "http://localhost:1313/",
          children: "http://localhost:1313/"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "So now the website created and reaching all the high standards of satisfaction we should host it make it online availbe and be rich🤑 and famous😎"
    }), "\n", createVNode(_components.p, {
      children: ["The hosting can be done by following the steps in ", createVNode(_components.a, {
        href: "https://gohugo.io/hosting-and-deployment/",
        title: "tutorial link dude",
        children: "this"
      }), " tutorial as per your preferences go and rock the world 🤟."]
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

const url = "src/content/blog/Making-Hugo-Site.mdx";
const file = "/Users/anirbansikdar/Projects/anirban.codes/src/content/blog/Making-Hugo-Site.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/anirbansikdar/Projects/anirban.codes/src/content/blog/Making-Hugo-Site.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

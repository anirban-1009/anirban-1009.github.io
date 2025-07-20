import { l as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CCRwLsK6.mjs';
import 'clsx';

const frontmatter = {
  "title": "Delta X Robot",
  "imagePath": "/src/images/cover/deltax.jpg",
  "description": "Building an Open-Source Delta X Robot for Tomato Picking",
  "date": "Aug 10, 2023",
  "metaPath": "/images/covers/deltax.jpg",
  "tags": ["Arduino", "OpenCV"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "building-an-open-source-delta-x-robot-for-tomato-picking",
    "text": "Building an Open-Source Delta X Robot for Tomato Picking"
  }, {
    "depth": 2,
    "slug": "prerequisites",
    "text": "Prerequisites"
  }, {
    "depth": 3,
    "slug": "step-1-design-the-robot",
    "text": "Step 1: Design the Robot"
  }, {
    "depth": 3,
    "slug": "step-2-3d-print-the-parts",
    "text": "Step 2: 3D Print the Parts"
  }, {
    "depth": 3,
    "slug": "step-3-assemble-the-robot",
    "text": "Step 3: Assemble the Robot"
  }, {
    "depth": 3,
    "slug": "step-4-install-the-software",
    "text": "Step 4: Install the Software"
  }, {
    "depth": 3,
    "slug": "step-5-calibrate-the-robot",
    "text": "Step 5: Calibrate the Robot"
  }, {
    "depth": 3,
    "slug": "step-6-test-the-robot",
    "text": "Step 6: Test the Robot"
  }, {
    "depth": 3,
    "slug": "step-7-deploy-the-robot",
    "text": "Step 7: Deploy the Robot"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "building-an-open-source-delta-x-robot-for-tomato-picking",
      children: "Building an Open-Source Delta X Robot for Tomato Picking"
    }), "\n", createVNode(_components.p, {
      children: "The agriculture industry is a major source of income for many families in India. However, the cost of agricultural equipment can be prohibitive for many farmers, especially those with middle incomes. This is especially true for equipment like tomato pickers, which can be very expensive."
    }), "\n", createVNode(_components.p, {
      children: "To address this problem, we as a team have developed the Delta X robot. The Delta X robot is an open-source, 3D-printed tomato picker that is much more affordable than commercial tomato pickers. The robot uses a camera and OpenCV to detect ripe tomatoes, and then picks them and places them in a basket."
    }), "\n", createVNode(_components.p, {
      children: "This blog post will provide a step-by-step guide on how to build your own Delta X robot. The instructions are intended for beginners, so no prior experience with robotics is necessary."
    }), "\n", createVNode(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", createVNode(_components.p, {
      children: "Before you start building your Delta X robot, you will need the following:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "A 3D printer"
      }), "\n", createVNode(_components.li, {
        children: "A computer with a Linux operating system"
      }), "\n", createVNode(_components.li, {
        children: ["The following software:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "OpenCV"
          }), "\n", createVNode(_components.li, {
            children: "Python"
          }), "\n", createVNode(_components.li, {
            children: "Git"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-1-design-the-robot",
      children: "Step 1: Design the Robot"
    }), "\n", createVNode(_components.p, {
      children: ["The first step is to design the robot. You can use a CAD program like SolidWorks or Fusion 360 to design the robot’s frame and parts. The robot’s frame should be made of strong material, such as aluminum or steel. The parts of the robot can be made of 3D-printed plastic. For Starter the list of components and 3d files can be found ", createVNode(_components.a, {
        href: "https://code.swecha.org/agriculture/delta-robot/delta-agricultural-robot/-/tree/main/STL-files",
        children: "here"
      })]
    }), "\n", createVNode(_components.h3, {
      id: "step-2-3d-print-the-parts",
      children: "Step 2: 3D Print the Parts"
    }), "\n", createVNode(_components.p, {
      children: ["Once you have designed the robot, you can 3D print the parts. The parts can be printed on any 3D printer, but a high-quality printer with a large build volume is recommended. For our instance we used ", createVNode(_components.strong, {
        children: "Ender 3 Pro"
      }), " to print the parts using PLA fillament."]
    }), "\n", createVNode(_components.h3, {
      id: "step-3-assemble-the-robot",
      children: "Step 3: Assemble the Robot"
    }), "\n", createVNode(_components.p, {
      children: "Once the parts are printed, you can assemble the robot. The assembly instructions are included in the Delta X robot repository."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/images/work/delta-x/assemble.jpg",
        alt: "Work"
      })
    }), "\n", createVNode(_components.h3, {
      id: "step-4-install-the-software",
      children: "Step 4: Install the Software"
    }), "\n", createVNode(_components.p, {
      children: ["The Delta X robot software is open-source and can be found ", createVNode(_components.a, {
        href: "https://code.swecha.org/agriculture/delta-robot/delta-agricultural-robot",
        children: "here"
      }), ". The software includes the following components:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["A Firmware program that runs on the robot’s computer ", createVNode(_components.a, {
          href: "https://www.deltaxrobot.com/p/download.html",
          children: "Program"
        })]
      }), "\n", createVNode(_components.li, {
        children: "A camera program that uses OpenCV to detect tomatoes"
      }), "\n", createVNode(_components.li, {
        children: "A picking program that controls the robot’s arm"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "step-5-calibrate-the-robot",
      children: "Step 5: Calibrate the Robot"
    }), "\n", createVNode(_components.p, {
      children: "Once the software is installed, you need to calibrate the robot. The calibration process ensures that the robot can accurately detect tomatoes and pick them. The calibration process is described in the Delta X robot repository."
    }), "\n", createVNode(_components.h3, {
      id: "step-6-test-the-robot",
      children: "Step 6: Test the Robot"
    }), "\n", createVNode(_components.p, {
      children: "Once the robot is calibrated, you can test it. The test process involves placing tomatoes in front of the robot and seeing if it can accurately detect and pick them."
    }), "\n", createVNode(_components.h3, {
      id: "step-7-deploy-the-robot",
      children: "Step 7: Deploy the Robot"
    }), "\n", createVNode(_components.p, {
      children: "Once the robot is tested and working properly, you can deploy it in your tomato field. The robot can be used to pick tomatoes 24 hours a day, 7 days a week."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/images/work/delta-x/assembled.jpeg",
        alt: "Assembled"
      })
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "The Delta X robot is a valuable tool for tomato farmers. It is affordable, precise, and easy to maintain. This makes it a great option for farmers who are looking for a way to improve their yields and profits."
    }), "\n", createVNode(_components.p, {
      children: "The Delta X robot is still under development, but it has the potential to revolutionize tomato farming in India. The robot is more affordable, precise, and easy to maintain than commercial tomato pickers. This makes it a great option for farmers who are looking for a way to improve their yields and profits."
    }), "\n", createVNode(_components.p, {
      children: "The team of engineers and farmers who developed the Delta X robot are working to improve the robot even further. They are working on making the robot faster, more precise, and easier to use. They are also working on developing new applications for the robot, such as picking other fruits and vegetables."
    }), "\n", createVNode(_components.p, {
      children: "The Delta X robot is a promising new technology that has the potential to make a significant impact on the agriculture industry in India and around the world."
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

const url = "src/content/work/delta-x.mdx";
const file = "/Users/anirbansikdar/Projects/anirban.codes/src/content/work/delta-x.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/anirbansikdar/Projects/anirban.codes/src/content/work/delta-x.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

import { l as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_CCRwLsK6.mjs';
import 'clsx';

const frontmatter = {
  "title": "Yuki",
  "imagePath": "/src/images/cover/RPi.jpg",
  "description": "Building an Open-Source Delta X Robot for Tomato Picking",
  "metaPath": "/images/covers/RPi.jpg",
  "tags": ["Raspberry Pi", "OpenCV", "IoT", "TensorFlow"],
  "date": "Apr 10, 2023"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-to-build-an-emotion-recognition-bot-with-raspberry-pi-and-google-cloud",
    "text": "How to Build an Emotion Recognition Bot with Raspberry Pi and Google Cloud"
  }, {
    "depth": 2,
    "slug": "the-software",
    "text": "The Software"
  }, {
    "depth": 2,
    "slug": "how-it-works",
    "text": "How it works"
  }, {
    "depth": 2,
    "slug": "the-conclusion",
    "text": "The Conclusion"
  }, {
    "depth": 2,
    "slug": "footnote-label",
    "text": "Footnotes"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    strong: "strong",
    sup: "sup",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "how-to-build-an-emotion-recognition-bot-with-raspberry-pi-and-google-cloud",
      children: "How to Build an Emotion Recognition Bot with Raspberry Pi and Google Cloud"
    }), "\n", createVNode(_components.p, {
      children: "Emotion recognition technology is becoming increasingly sophisticated, and it is now possible to build a bot that can detect human emotions and respond accordingly. In this blog post, we will walk through the process of building an emotion recognition bot using a Raspberry Pi, Pi camera, Google Cloud, and OLED screens.\nThe Basics"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/images/work/yuki/Front.jpg",
        alt: "FrontImage"
      })
    }), "\n", createVNode(_components.p, {
      children: "The bot will consist of three main components:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "A Raspberry Pi"
        }), ": The Raspberry Pi is a small, inexpensive computer that is perfect for this project. It will be responsible for running the software that detects facial expressions and responds with different reactions."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "A Pi camera"
        }), ": The Pi camera will be used to capture images of people’s faces. The images will then be sent to Google Cloud for facial expression recognition."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "OLED screens"
        }), ": The OLED screens will be used to display the bot’s reactions."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "the-software",
      children: "The Software"
    }), "\n", createVNode(_components.p, {
      children: "The software for the bot will be written in Python. The first step is to install the necessary libraries and modules. We will need the following libraries:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "picamera"
        }), ": This library is used to control the Pi camera."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "numpy"
        }), ": This library is used for mathematical operations."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "tensorflow"
        }), ": This library is used to train and run machine learning models."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "google-cloud-vision"
        }), ": This library is used to interact with the Google Cloud Vision API."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Once the libraries are installed, we can start writing the code. The first step is to initialize the Raspberry Pi camera and OLED screens. Then, we can load the facial expression recognition model from Google Cloud. Finally, we can start a loop that detects facial expressions and responds with different reactions."
    }), "\n", createVNode(_components.p, {
      children: "The reactions that the bot can display are:"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Happy"
      }), ": The bot will create a set of arcs on it screens depecting it’s partially closing eyes and expressing it’s happy."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/images/work/yuki/Reaction.jpg",
        alt: "Happy"
      })
    }), "\n", createVNode(_components.h2, {
      id: "how-it-works",
      children: "How it works"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/images/work/yuki/Yuki.png",
        alt: "Yuki"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: "Capturing Images"
        }), " - Yuki uses RpiCamera to capture images and feed it to the Raspberry pi Zero W."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: "Face Detection"
        }), " - On the feeded stream of video to the RPi, it uses the HaarCascade and OpenCV to detect Human Frontal Face", createVNode(_components.sup, {
          children: createVNode(_components.a, {
            href: "#user-content-fn-1",
            id: "user-content-fnref-1",
            "data-footnote-ref": "",
            "aria-describedby": "footnote-label",
            children: "1"
          })
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: "Detecting Emotions"
        }), " - On sucessful detection of human frontal face on the camera, forward the frame to the Google Cloud Vision", createVNode(_components.sup, {
          children: createVNode(_components.a, {
            href: "#user-content-fn-2",
            id: "user-content-fnref-2",
            "data-footnote-ref": "",
            "aria-describedby": "footnote-label",
            children: "2"
          })
        }), " to detect the emotion."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: "Yuki Response"
        }), " - Based on the response from the Google Cloud Vision and it’s detection, Yuki responses with a relevent expression."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "the-conclusion",
      children: "The Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "This project is a great way to learn about facial expression recognition, Raspberry Pi, Google Cloud, and OLED screens. The bot can be used as a companion to help people feel better and improve their psychological state. It can also be used for research purposes to study human emotions."
    }), "\n", createVNode(_components.p, {
      children: "In addition to the basic components and reactions described above, here are some other things you can add to your emotion recognition bot project:"
    }), "\n", createVNode(_components.p, {
      children: "More emotions: You can train the bot to recognize more emotions, such as surprise, fear, and disgust.\nDifferent reactions: You can also add different reactions to the bot, such as making different facial expressions, playing different sounds, or saying different words.\nPortability: You can make the bot more portable by using a battery pack to power it. This way, you can take the bot with you wherever you go.\nSpeech recognition: You can add speech recognition to the bot so that it can respond to your voice commands. This can make the bot more interactive and user-friendly."
    }), "\n", createVNode(_components.p, {
      children: "I hope you enjoyed this blog post!"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.section, {
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
              href: "https://pythonprogramming.net/haar-cascade-face-eye-detection-python-opencv-tutorial/",
              children: "Haar Cascade Object Detection Face & Eye OpenCV Python Tutorial"
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
              href: "https://www.dexterindustries.com/howto/use-google-cloud-vision-on-the-raspberry-pi/",
              children: "Use Google cloud Vision on Raspberry Pi"
            }), " ", createVNode(_components.a, {
              href: "#user-content-fnref-2",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 2",
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

const url = "src/content/work/Yuki.mdx";
const file = "/Users/anirbansikdar/Projects/anirban.codes/src/content/work/Yuki.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/anirbansikdar/Projects/anirban.codes/src/content/work/Yuki.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

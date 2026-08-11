import image0 from "../../../assets/images/projects/pandemicmotion/pandemicmotion-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Pandemic Interface Motion",
  theme: "dark",
  tags: ["motion", "ui/ux"],
  live: "https://www.behance.net/gallery/137290797/UI-UX-motion-animation",
  videoBorder: false,
  description: "Interactive UI motion graphics and animated video presentation showcasing interface design during pandemic times.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/137290797?ilo0=1",
        caption: "Behance Interactive Showcase",
      },
    },
    {
      type: "text",
      props: {
        title: "About this project",
        text: "A UI/UX motion and animation showcase created during the pandemic era. This project highlights animated interface interactions, micro-animations, and motion design principles applied to real UI scenarios — demonstrating how thoughtful animation enhances digital product experiences and user engagement.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Pandemic Interface Motion",
        caption: "Pandemic Interface Motion",
      },
    },
  ],
} as const satisfies ProjectContent;

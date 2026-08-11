import image0 from "../../../assets/images/projects/pandemicmotion/pandemicmotion-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Pandemic Interface Motion",
  theme: "dark",
  tags: ["motion","ui/ux"],
  
  videoBorder: false,
  description: "Interactive UI motion graphics and animated video presentation showcasing interface design during pandemic times.",
  components: [
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

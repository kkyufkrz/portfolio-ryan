import image0 from "../../../assets/images/projects/miracleacademy/miracleacademy-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Miracle Academy",
  theme: "light",
  tags: ["education","graphic","branding"],
  
  videoBorder: false,
  description: "Educational academy visual identity, curriculum course material design, and promotional posters.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Miracle Academy",
        caption: "Miracle Academy",
      },
    },
  ],
} as const satisfies ProjectContent;

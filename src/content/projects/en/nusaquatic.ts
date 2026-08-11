import image0 from "../../../assets/images/projects/nusaquatic/nusaquatic-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Nusaquatic",
  theme: "dark",
  tags: ["branding","graphic","identity"],
  
  videoBorder: false,
  description: "Aquatic brand identity, merchandise graphic design, and marketing visuals.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Nusaquatic",
        caption: "Nusaquatic",
      },
    },
  ],
} as const satisfies ProjectContent;

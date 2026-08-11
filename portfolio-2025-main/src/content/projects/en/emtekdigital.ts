import image0 from "../../../assets/images/projects/emtekdigital/emtekdigital-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Emtek Digital",
  theme: "dark",
  tags: ["b2b","graphic","branding"],
  
  videoBorder: false,
  description: "Corporate visual branding, B2B presentation designs, and marketing graphics for Emtek Digital.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Emtek Digital",
        caption: "Emtek Digital",
      },
    },
  ],
} as const satisfies ProjectContent;

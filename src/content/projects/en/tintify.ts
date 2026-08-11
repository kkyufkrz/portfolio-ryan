import image0 from "../../../assets/images/projects/tintify/tintify-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Tintify",
  theme: "light",
  tags: ["ui/ux","graphic"],
  
  videoBorder: false,
  description: "Product UI/UX design and design system components for Tintify web platform.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Tintify",
        caption: "Tintify",
      },
    },
  ],
} as const satisfies ProjectContent;

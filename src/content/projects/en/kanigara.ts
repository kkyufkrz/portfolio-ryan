import image0 from "../../../assets/images/projects/kanigara/kanigara-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Kanigara",
  theme: "dark",
  tags: ["identity", "graphic", "branding"],
  live: "https://www.behance.net/gallery/155713601/Kanigara-production-guide",
  videoBorder: false,
  description: "Creative visual identity design and graphic assets for Kanigara brand.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/155713601?ilo0=1",
        caption: "Behance Interactive Showcase",
      },
    },
    {
      type: "text",
      props: {
        title: "About this project",
        text: "Production guide and brand identity design for Kanigara. The project delivers a comprehensive production documentation and visual identity system — covering logo usage, brand colors, typography, graphic elements, and production specifications to ensure consistent brand application across all media and productions.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Kanigara",
        caption: "Kanigara",
      },
    },
  ],
} as const satisfies ProjectContent;

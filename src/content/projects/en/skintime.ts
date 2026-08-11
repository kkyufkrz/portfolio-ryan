import image0 from "../../../assets/images/projects/skintime/skintime-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Skintime",
  theme: "dark",
  tags: ["packaging", "branding"],
  live: "https://www.behance.net/gallery/148574361/SKINTIME",
  videoBorder: false,
  description: "Skincare product packaging design, brand aesthetics, and promotional print collateral.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/148574361?ilo0=1",
        caption: "Behance Interactive Showcase",
      },
    },
    {
      type: "text",
      props: {
        title: "About this project",
        text: "Packaging and brand identity design for Skintime, a skincare product line. The scope covers product packaging design, label artwork, brand color palette, typography system, promotional print materials, and lifestyle photography art direction — creating a cohesive and premium skincare brand aesthetic.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Skintime",
        caption: "Skintime",
      },
    },
  ],
} as const satisfies ProjectContent;

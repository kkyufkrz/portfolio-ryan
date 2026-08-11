import image0 from "../../../assets/images/projects/emtekdigital/emtekdigital-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Emtek Digital",
  theme: "dark",
  tags: ["b2b", "graphic", "branding"],
  live: "https://www.behance.net/gallery/186839963/Emtek-digital-Brand-marketing-KV-design",
  videoBorder: false,
  description: "Corporate visual branding, B2B presentation designs, and marketing graphics for Emtek Digital.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/186839963?ilo0=1",
        caption: "Behance Interactive Showcase",
      },
    },
    {
      type: "text",
      props: {
        title: "About this project",
        text: "Brand marketing and key visual (KV) design for Emtek Digital, a leading media and technology group in Indonesia. The project includes B2B corporate presentation decks, brand identity refreshes, marketing collateral, and digital advertising visuals — all aligned with Emtek Digital's premium positioning.",
      },
    },
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

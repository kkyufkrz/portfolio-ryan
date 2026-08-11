import image0 from "../../../assets/images/projects/kartafarm/kartafarm-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Kartafarm",
  theme: "dark",
  tags: ["branding", "ui/ux", "graphic"],
  live: "https://www.behance.net/gallery/169919311/Kartafram-brandbook-guidelines",
  videoBorder: false,
  description: "Brand identity system and digital UI design for Kartafarm agricultural tech platform.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/169919311?ilo0=1",
        caption: "Behance Interactive Showcase",
      },
    },
    {
      type: "text",
      props: {
        title: "About this project",
        text: "A complete brandbook and brand guidelines project for Kartafarm, an agricultural technology platform. The work covers the full brand identity system including logo construction, color palette, typography, iconography, tone of voice, and usage guidelines — providing a solid foundation for consistent brand communication across all touchpoints.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Kartafarm",
        caption: "Kartafarm",
      },
    },
  ],
} as const satisfies ProjectContent;

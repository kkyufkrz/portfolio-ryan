import image0 from "../../../assets/images/projects/baksobadminton/baksobadminton-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Bakso Badminton",
  theme: "dark",
  tags: ["merchandise", "branding", "graphic"],
  live: "https://www.behance.net/gallery/169920363/Bakso-Badminton",
  videoBorder: false,
  description: "Event branding identity, tournament merchandise design, and promotional media for Bakso Badminton.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/169920363?ilo0=1",
        caption: "Behance Interactive Showcase",
      },
    },
    {
      type: "text",
      props: {
        title: "About this project",
        text: "Event branding and merchandise design for Bakso Badminton, a badminton tournament with a fun, community-driven identity. The project covers the complete visual identity for the event — including logo design, jersey & apparel graphics, tournament banners, trophy design, and social media promotional content.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Bakso Badminton",
        caption: "Bakso Badminton",
      },
    },
  ],
} as const satisfies ProjectContent;

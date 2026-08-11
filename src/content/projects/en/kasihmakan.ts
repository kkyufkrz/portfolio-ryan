import image0 from "../../../assets/images/projects/kasihmakan/kasihmakan-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Kasih Makan",
  theme: "dark",
  tags: ["campaign", "graphic", "social"],
  live: "https://www.behance.net/gallery/148571683/Kasih-Makan",
  videoBorder: false,
  description: "Social initiative charity campaign visual design and community awareness graphics.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/148571683?ilo0=1",
        caption: "Behance Interactive Showcase",
      },
    },
    {
      type: "text",
      props: {
        title: "About this project",
        text: "Campaign design for Kasih Makan, a community-driven food donation and social initiative. The project encompasses the full visual campaign — including campaign key visuals, social media graphics, donation drive posters, and awareness content — all crafted with warmth and empathy to inspire community participation.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Kasih Makan",
        caption: "Kasih Makan",
      },
    },
  ],
} as const satisfies ProjectContent;

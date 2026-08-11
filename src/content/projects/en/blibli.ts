import image0 from "../../../assets/images/projects/blibli/blibli-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Blibli",
  theme: "dark",
  tags: ["campaign", "social", "graphic"],
  live: "https://www.behance.net/gallery/186792415/Blibli-Design-portfolio",
  videoBorder: false,
  description: "E-commerce digital campaigns and promotional social media creative assets for Blibli.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/186792415?ilo0=1",
        caption: "Behance Interactive Showcase",
      },
    },
    {
      type: "text",
      props: {
        title: "About this project",
        text: "A design portfolio showcasing digital campaign work for Blibli, one of Indonesia's top e-commerce platforms. The project covers seasonal campaign key visuals, promotional banners, social media content, and product highlight graphics — all created to drive engagement and conversion.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Blibli",
        caption: "Blibli",
      },
    },
  ],
} as const satisfies ProjectContent;

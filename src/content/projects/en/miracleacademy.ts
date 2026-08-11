import image0 from "../../../assets/images/projects/miracleacademy/miracleacademy-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Miracle Academy",
  theme: "light",
  tags: ["education", "graphic", "branding"],
  live: "https://www.behance.net/gallery/186831049/Miracle-Gates-Academy",
  videoBorder: false,
  description: "Educational academy visual identity, curriculum course material design, and promotional posters.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/186831049?ilo0=1",
        caption: "Behance Interactive Showcase",
      },
    },
    {
      type: "text",
      props: {
        title: "About this project",
        text: "A full visual identity and branding project for Miracle Gates Academy, an educational institution. The scope covers logo design, brand guidelines, promotional posters, course material layouts, and social media graphics — all aimed at building a credible, inspiring educational brand.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Miracle Academy",
        caption: "Miracle Academy",
      },
    },
  ],
} as const satisfies ProjectContent;

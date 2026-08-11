import image0 from "../../../assets/images/projects/pocarisweat/pocarisweat-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Pocari Sweat - Bintang SMA",
  theme: "light",
  tags: ["campaign", "branding"],
  live: "https://www.behance.net/gallery/186837921/Pocari-Sweat-Bintang-SMA",
  videoBorder: false,
  description: "National youth talent competition campaign visual design for Pocari Sweat Bintang SMA.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/186837921?ilo0=1",
        caption: "Behance Interactive Showcase",
      },
    },
    {
      type: "text",
      props: {
        title: "About this project",
        text: "Campaign visual design for Pocari Sweat's Bintang SMA, a national talent competition for high school students in Indonesia. The project delivers a vibrant, energetic visual identity for the campaign — including key visuals, event posters, digital banners, and social media graphics that capture the spirit of youth and achievement.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Pocari Sweat - Bintang SMA",
        caption: "Pocari Sweat - Bintang SMA",
      },
    },
  ],
} as const satisfies ProjectContent;

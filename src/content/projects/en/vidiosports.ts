import image0 from "../../../assets/images/projects/vidiosports/vidiosports-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Vidio Sports x Premier League",
  theme: "dark",
  tags: ["motion", "graphic"],
  live: "https://www.behance.net/gallery/186792855/Vidiodotcom-Premiere-league-Vidiosports",
  videoBorder: false,
  description: "Motion graphics, key visuals, and promotional media for Vidio Sports Premier League broadcast coverage.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/186792855?ilo0=1",
        caption: "Behance Interactive Showcase",
      },
    },
    {
      type: "text",
      props: {
        title: "About this project",
        text: "A motion graphics and key visual project for Vidio.com's Premier League coverage under Vidio Sports. The work includes animated broadcast graphics, match day promotional assets, social media motion content, and visual identity elements — all designed to elevate the sports streaming experience.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Vidio Sports x Premier League",
        caption: "Vidio Sports x Premier League",
      },
    },
  ],
} as const satisfies ProjectContent;

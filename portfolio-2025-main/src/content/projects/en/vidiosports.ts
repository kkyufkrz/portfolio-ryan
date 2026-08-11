import image0 from "../../../assets/images/projects/vidiosports/vidiosports-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Vidio Sports x Premier League",
  theme: "dark",
  tags: ["motion","graphic"],
  
  videoBorder: false,
  description: "Motion graphics, key visuals, and promotional media for Vidio Sports Premier League broadcast coverage.",
  components: [
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

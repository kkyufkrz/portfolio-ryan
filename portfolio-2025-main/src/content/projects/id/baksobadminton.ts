import image0 from "../../../assets/images/projects/baksobadminton/baksobadminton-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Bakso Badminton",
  theme: "dark",
  tags: ["merchandise","branding","graphic"],
  
  videoBorder: false,
  description: "Identitas branding acara, desain merchandise turnamen, dan media promosi untuk Bakso Badminton.",
  components: [
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

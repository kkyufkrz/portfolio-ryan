import image0 from "../../../assets/images/projects/baksobadminton/baksobadminton-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Bakso Badminton",
  theme: "dark",
  tags: ["merchandise","branding","graphic"],
  
  videoBorder: false,
  description: "Event branding identity, tournament merchandise design, and promotional media for Bakso Badminton.",
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

import image0 from "../../../assets/images/projects/kassen/kassen-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Kassen",
  theme: "light",
  tags: ["illustration","branding"],
  
  videoBorder: false,
  description: "Character & mascot illustration design competition entry for Kassen brand.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Kassen",
        caption: "Kassen",
      },
    },
  ],
} as const satisfies ProjectContent;

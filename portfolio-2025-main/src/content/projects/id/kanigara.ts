import image0 from "../../../assets/images/projects/kanigara/kanigara-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Kanigara",
  theme: "dark",
  tags: ["identity","graphic","branding"],
  
  videoBorder: false,
  description: "Desain identitas visual kreatif dan aset grafis untuk brand Kanigara.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Kanigara",
        caption: "Kanigara",
      },
    },
  ],
} as const satisfies ProjectContent;

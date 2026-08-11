import image0 from "../../../assets/images/projects/miracleacademy/miracleacademy-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Miracle Academy",
  theme: "light",
  tags: ["education","graphic","branding"],
  
  videoBorder: false,
  description: "Identitas visual akademi edukasi, desain materi kursus, dan poster promosi.",
  components: [
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

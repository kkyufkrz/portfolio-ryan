import image0 from "../../../assets/images/projects/kartafarm/kartafarm-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Kartafarm",
  theme: "light",
  tags: ["branding","ui/ux","graphic"],
  
  videoBorder: false,
  description: "Sistem identitas brand dan desain UI digital untuk platform teknologi pertanian Kartafarm.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Kartafarm",
        caption: "Kartafarm",
      },
    },
  ],
} as const satisfies ProjectContent;

import image0 from "../../../assets/images/projects/kasihmakan/kasihmakan-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Kasih Makan",
  theme: "light",
  tags: ["campaign","graphic","social"],
  
  videoBorder: false,
  description: "Social initiative charity campaign visual design and community awareness graphics.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Kasih Makan",
        caption: "Kasih Makan",
      },
    },
  ],
} as const satisfies ProjectContent;

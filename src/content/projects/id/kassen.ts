import image0 from "../../../assets/images/projects/kassen/kassen-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Kassen",
  theme: "dark",
  tags: ["illustration","branding"],
  
  videoBorder: false,
  description: "Desain ilustrasi karakter & maskot untuk kompetisi brand Kassen.",
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

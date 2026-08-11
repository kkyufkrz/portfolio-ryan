import image0 from "../../../assets/images/projects/pocarisweat/pocarisweat-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Pocari Sweat - Bintang SMA",
  theme: "light",
  tags: ["campaign","branding"],
  
  videoBorder: false,
  description: "Desain visual kampanye ajang bakat pemuda nasional untuk Pocari Sweat Bintang SMA.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Pocari Sweat - Bintang SMA",
        caption: "Pocari Sweat - Bintang SMA",
      },
    },
  ],
} as const satisfies ProjectContent;

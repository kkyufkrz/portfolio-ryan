import image0 from "../../../assets/images/projects/skintime/skintime-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Skintime",
  theme: "light",
  tags: ["packaging","branding"],
  
  videoBorder: false,
  description: "Desain kemasan produk skincare, estetika brand, dan materi cetak promosi.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Skintime",
        caption: "Skintime",
      },
    },
  ],
} as const satisfies ProjectContent;

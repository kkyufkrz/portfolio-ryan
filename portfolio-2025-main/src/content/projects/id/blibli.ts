import image0 from "../../../assets/images/projects/blibli/blibli-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Blibli",
  theme: "light",
  tags: ["campaign","social","graphic"],
  
  videoBorder: false,
  description: "Kampanye digital e-commerce dan aset kreatif media sosial promosi untuk Blibli.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Blibli",
        caption: "Blibli",
      },
    },
  ],
} as const satisfies ProjectContent;

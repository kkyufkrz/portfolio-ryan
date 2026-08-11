import image0 from "../../../assets/images/projects/dailykeeb/dailykeeb-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Dailykeeb",
  theme: "dark",
  tags: ["branding","identity","graphic"],
  
  videoBorder: false,
  description: "Desain identitas visual, logo branding, dan grafis komunitas untuk brand keyboard mekanikal Dailykeeb.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Dailykeeb",
        caption: "Dailykeeb",
      },
    },
  ],
} as const satisfies ProjectContent;

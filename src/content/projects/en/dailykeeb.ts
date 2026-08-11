import image0 from "../../../assets/images/projects/dailykeeb/dailykeeb-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Dailykeeb",
  theme: "dark",
  tags: ["branding", "identity", "graphic"],
  live: "https://www.behance.net/gallery/148571065/Dailykeeb_",
  videoBorder: false,
  description: "Visual identity design, logo branding, and community graphics for Dailykeeb mechanical keyboard brand.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/148571065?ilo0=1",
        caption: "Behance Interactive Showcase",
      },
    },
    {
      type: "text",
      props: {
        title: "About this project",
        text: "Brand identity design for Dailykeeb, a mechanical keyboard enthusiast community and brand. The project encompasses logo design, visual identity guidelines, merchandise graphics, social media assets, and community-focused creative content — all crafted to resonate with the keyboard hobbyist culture.",
      },
    },
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

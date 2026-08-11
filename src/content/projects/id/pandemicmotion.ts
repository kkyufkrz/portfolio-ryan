import image0 from "../../../assets/images/projects/pandemicmotion/pandemicmotion-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Pandemic Interface Motion",
  theme: "dark",
  tags: ["motion", "ui/ux"],
  live: "https://www.behance.net/gallery/137290797/UI-UX-motion-animation",
  videoBorder: false,
  description: "Motion graphics UI interaktif dan presentasi video animasi yang menampilkan desain antarmuka.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/137290797?ilo0=1",
        caption: "Showcase Interaktif Behance",
      },
    },
    {
      type: "text",
      props: {
        title: "Tentang proyek ini",
        text: "Showcase motion dan animasi UI/UX yang dibuat pada era pandemi. Proyek ini menyoroti interaksi antarmuka yang dianimasikan, micro-animation, dan prinsip desain motion yang diterapkan pada skenario UI nyata — mendemonstrasikan bagaimana animasi yang thoughtful meningkatkan pengalaman produk digital dan keterlibatan pengguna.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Pandemic Interface Motion",
        caption: "Pandemic Interface Motion",
      },
    },
  ],
} as const satisfies ProjectContent;

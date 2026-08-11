import image0 from "../../../assets/images/projects/pocarisweat/pocarisweat-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Pocari Sweat - Bintang SMA",
  theme: "dark",
  tags: ["campaign", "branding"],
  live: "https://www.behance.net/gallery/186837921/Pocari-Sweat-Bintang-SMA",
  videoBorder: false,
  description: "Desain visual kampanye ajang bakat pemuda nasional untuk Pocari Sweat Bintang SMA.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/186837921?ilo0=1",
        caption: "Showcase Interaktif Behance",
      },
    },
    {
      type: "text",
      props: {
        title: "Tentang proyek ini",
        text: "Desain visual kampanye untuk Bintang SMA Pocari Sweat, kompetisi bakat nasional untuk siswa SMA di Indonesia. Proyek menghadirkan identitas visual yang vibrant dan energetik untuk kampanye ini — termasuk key visual, poster acara, banner digital, dan grafis media sosial yang menangkap semangat pemuda dan pencapaian.",
      },
    },
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

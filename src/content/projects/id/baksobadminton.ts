import image0 from "../../../assets/images/projects/baksobadminton/baksobadminton-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Bakso Badminton",
  theme: "dark",
  tags: ["merchandise", "branding", "graphic"],
  live: "https://www.behance.net/gallery/169920363/Bakso-Badminton",
  videoBorder: false,
  description: "Identitas branding acara, desain merchandise turnamen, dan media promosi untuk Bakso Badminton.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/169920363?ilo0=1",
        caption: "Showcase Interaktif Behance",
      },
    },
    {
      type: "text",
      props: {
        title: "Tentang proyek ini",
        text: "Branding acara dan desain merchandise untuk Bakso Badminton, turnamen bulu tangkis dengan identitas yang menyenangkan dan berbasis komunitas. Proyek mencakup identitas visual lengkap untuk acara ini — termasuk desain logo, grafis jersey & pakaian, banner turnamen, desain trofi, dan konten promosi media sosial.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Bakso Badminton",
        caption: "Bakso Badminton",
      },
    },
  ],
} as const satisfies ProjectContent;

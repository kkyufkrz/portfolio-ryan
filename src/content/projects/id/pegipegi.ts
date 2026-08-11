import type { ProjectContent } from "../../types";

export default {
  title: "Pegipegi",
  theme: "light",
  tags: ["ui/ux", "campaign", "branding"],
  live: "https://www.behance.net/gallery/186826035/Pegipegi",
  videoBorder: false,
  description: "Desain UI/UX & kampanye promosi untuk Pegipegi. Menampilkan antarmuka seluler lengkap, aset animasi prototipe interaktif, banner promosi, dan branding kampanye dari Behance.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/186826035?ilo0=1",
        caption: "Showcase Interaktif Behance",
      },
    },
  ],
} as const satisfies ProjectContent;

import image0 from "../../../assets/images/projects/kanigara/kanigara-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Kanigara",
  theme: "dark",
  tags: ["identity", "graphic", "branding"],
  live: "https://www.behance.net/gallery/155713601/Kanigara-production-guide",
  videoBorder: false,
  description: "Desain identitas visual kreatif dan aset grafis untuk brand Kanigara.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/155713601?ilo0=1",
        caption: "Showcase Interaktif Behance",
      },
    },
    {
      type: "text",
      props: {
        title: "Tentang proyek ini",
        text: "Panduan produksi dan desain identitas brand untuk Kanigara. Proyek ini menghadirkan dokumentasi produksi komprehensif dan sistem identitas visual — mencakup penggunaan logo, warna brand, tipografi, elemen grafis, dan spesifikasi produksi untuk memastikan aplikasi brand yang konsisten di semua media dan produksi.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Kanigara",
        caption: "Kanigara",
      },
    },
  ],
} as const satisfies ProjectContent;

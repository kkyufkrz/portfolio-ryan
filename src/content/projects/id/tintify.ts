import image0 from "../../../assets/images/projects/tintify/tintify-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Tintify",
  theme: "light",
  tags: ["ui/ux", "graphic"],
  live: "https://www.behance.net/gallery/168493501/Tintify-Personal-colour-assistant-app",
  videoBorder: false,
  description: "Desain UI/UX produk dan komponen sistem desain untuk platform web Tintify.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/168493501?ilo0=1",
        caption: "Showcase Interaktif Behance",
      },
    },
    {
      type: "text",
      props: {
        title: "Tentang proyek ini",
        text: "Desain UI/UX untuk Tintify, aplikasi asisten warna personal yang membantu pengguna menemukan dan mengelola palet warna ideal mereka. Proyek mencakup desain aplikasi end-to-end — dari user flow dan wireframe hingga layar high-fidelity, prototipe interaktif, dan design system komprehensif dengan komponen yang dapat digunakan ulang.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Tintify",
        caption: "Tintify",
      },
    },
  ],
} as const satisfies ProjectContent;

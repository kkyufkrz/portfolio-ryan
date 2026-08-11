import image0 from "../../../assets/images/projects/skintime/skintime-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Skintime",
  theme: "light",
  tags: ["packaging", "branding"],
  live: "https://www.behance.net/gallery/148574361/SKINTIME",
  videoBorder: false,
  description: "Desain kemasan produk skincare, estetika brand, dan materi cetak promosi.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/148574361?ilo0=1",
        caption: "Showcase Interaktif Behance",
      },
    },
    {
      type: "text",
      props: {
        title: "Tentang proyek ini",
        text: "Desain kemasan dan identitas brand untuk Skintime, lini produk skincare. Ruang lingkup mencakup desain kemasan produk, artwork label, palet warna brand, sistem tipografi, materi cetak promosi, dan art direction fotografi lifestyle — menciptakan estetika brand skincare yang kohesif dan premium.",
      },
    },
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

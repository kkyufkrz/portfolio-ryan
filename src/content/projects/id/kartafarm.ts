import image0 from "../../../assets/images/projects/kartafarm/kartafarm-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Kartafarm",
  theme: "light",
  tags: ["branding", "ui/ux", "graphic"],
  live: "https://www.behance.net/gallery/169919311/Kartafram-brandbook-guidelines",
  videoBorder: false,
  description: "Sistem identitas brand dan desain UI digital untuk platform teknologi pertanian Kartafarm.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/169919311?ilo0=1",
        caption: "Showcase Interaktif Behance",
      },
    },
    {
      type: "text",
      props: {
        title: "Tentang proyek ini",
        text: "Proyek brandbook dan panduan brand lengkap untuk Kartafarm, platform teknologi pertanian. Pekerjaan mencakup sistem identitas brand menyeluruh termasuk konstruksi logo, palet warna, tipografi, ikonografi, tone of voice, dan panduan penggunaan — memberikan fondasi kuat untuk komunikasi brand yang konsisten di semua touchpoint.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Kartafarm",
        caption: "Kartafarm",
      },
    },
  ],
} as const satisfies ProjectContent;

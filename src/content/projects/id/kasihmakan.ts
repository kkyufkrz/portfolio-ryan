import image0 from "../../../assets/images/projects/kasihmakan/kasihmakan-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Kasih Makan",
  theme: "dark",
  tags: ["campaign", "graphic", "social"],
  live: "https://www.behance.net/gallery/148571683/Kasih-Makan",
  videoBorder: false,
  description: "Desain visual kampanye amal inisiatif sosial dan grafis kepedulian masyarakat.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/148571683?ilo0=1",
        caption: "Showcase Interaktif Behance",
      },
    },
    {
      type: "text",
      props: {
        title: "Tentang proyek ini",
        text: "Desain kampanye untuk Kasih Makan, sebuah inisiatif donasi makanan dan sosial berbasis komunitas. Proyek ini mencakup kampanye visual lengkap — termasuk key visual kampanye, grafis media sosial, poster drive donasi, dan konten kesadaran — semuanya dibuat dengan kehangatan dan empati untuk menginspirasi partisipasi masyarakat.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Kasih Makan",
        caption: "Kasih Makan",
      },
    },
  ],
} as const satisfies ProjectContent;

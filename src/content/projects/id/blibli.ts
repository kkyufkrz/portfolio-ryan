import image0 from "../../../assets/images/projects/blibli/blibli-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Blibli",
  theme: "dark",
  tags: ["campaign", "social", "graphic"],
  live: "https://www.behance.net/gallery/186792415/Blibli-Design-portfolio",
  videoBorder: false,
  description: "Kampanye digital e-commerce dan aset kreatif media sosial promosi untuk Blibli.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/186792415?ilo0=1",
        caption: "Showcase Interaktif Behance",
      },
    },
    {
      type: "text",
      props: {
        title: "Tentang proyek ini",
        text: "Portofolio desain yang menampilkan hasil kerja kampanye digital untuk Blibli, salah satu platform e-commerce terkemuka di Indonesia. Proyek ini mencakup key visual kampanye musiman, banner promosi, konten media sosial, dan grafis highlight produk — semuanya dibuat untuk mendorong keterlibatan dan konversi.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Blibli",
        caption: "Blibli",
      },
    },
  ],
} as const satisfies ProjectContent;

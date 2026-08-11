import image0 from "../../../assets/images/projects/emtekdigital/emtekdigital-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Emtek Digital",
  theme: "dark",
  tags: ["b2b", "graphic", "branding"],
  live: "https://www.behance.net/gallery/186839963/Emtek-digital-Brand-marketing-KV-design",
  videoBorder: false,
  description: "Branding visual korporat, desain presentasi B2B, dan grafis pemasaran untuk Emtek Digital.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/186839963?ilo0=1",
        caption: "Showcase Interaktif Behance",
      },
    },
    {
      type: "text",
      props: {
        title: "Tentang proyek ini",
        text: "Desain brand marketing dan key visual (KV) untuk Emtek Digital, grup media dan teknologi terkemuka di Indonesia. Proyek ini mencakup deck presentasi korporat B2B, pembaruan identitas brand, materi pemasaran, dan visual iklan digital — semuanya selaras dengan positioning premium Emtek Digital.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Emtek Digital",
        caption: "Emtek Digital",
      },
    },
  ],
} as const satisfies ProjectContent;

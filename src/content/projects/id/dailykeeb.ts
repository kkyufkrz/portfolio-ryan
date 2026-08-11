import image0 from "../../../assets/images/projects/dailykeeb/dailykeeb-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Dailykeeb",
  theme: "dark",
  tags: ["branding", "identity", "graphic"],
  live: "https://www.behance.net/gallery/148571065/Dailykeeb_",
  videoBorder: false,
  description: "Desain identitas visual, logo branding, dan grafis komunitas untuk brand keyboard mekanikal Dailykeeb.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/148571065?ilo0=1",
        caption: "Showcase Interaktif Behance",
      },
    },
    {
      type: "text",
      props: {
        title: "Tentang proyek ini",
        text: "Desain identitas brand untuk Dailykeeb, komunitas dan brand penggemar keyboard mekanikal. Proyek ini mencakup desain logo, panduan identitas visual, grafis merchandise, aset media sosial, dan konten kreatif berbasis komunitas — semuanya dirancang untuk beresonansi dengan budaya hobi keyboard.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Dailykeeb",
        caption: "Dailykeeb",
      },
    },
  ],
} as const satisfies ProjectContent;

import image0 from "../../../assets/images/projects/miracleacademy/miracleacademy-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Miracle Academy",
  theme: "light",
  tags: ["education", "graphic", "branding"],
  live: "https://www.behance.net/gallery/186831049/Miracle-Gates-Academy",
  videoBorder: false,
  description: "Identitas visual akademi edukasi, desain materi kursus, dan poster promosi.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/186831049?ilo0=1",
        caption: "Showcase Interaktif Behance",
      },
    },
    {
      type: "text",
      props: {
        title: "Tentang proyek ini",
        text: "Proyek identitas visual dan branding lengkap untuk Miracle Gates Academy, sebuah institusi pendidikan. Ruang lingkup mencakup desain logo, panduan brand, poster promosi, tata letak materi kursus, dan grafis media sosial — semuanya bertujuan untuk membangun brand pendidikan yang kredibel dan inspiratif.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Miracle Academy",
        caption: "Miracle Academy",
      },
    },
  ],
} as const satisfies ProjectContent;

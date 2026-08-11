import image0 from "../../../assets/images/projects/vidiosports/vidiosports-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Vidio Sports x Premier League",
  theme: "dark",
  tags: ["motion", "graphic"],
  live: "https://www.behance.net/gallery/186792855/Vidiodotcom-Premiere-league-Vidiosports",
  videoBorder: false,
  description: "Motion graphics, key visual, dan media promosi untuk penayangan Vidio Sports Premier League.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/186792855?ilo0=1",
        caption: "Showcase Interaktif Behance",
      },
    },
    {
      type: "text",
      props: {
        title: "Tentang proyek ini",
        text: "Proyek motion graphics dan key visual untuk liputan Premier League Vidio.com di bawah Vidio Sports. Pekerjaan meliputi animated broadcast graphics, aset promosi hari pertandingan, konten motion media sosial, dan elemen identitas visual — semuanya dirancang untuk meningkatkan pengalaman streaming olahraga.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Vidio Sports x Premier League",
        caption: "Vidio Sports x Premier League",
      },
    },
  ],
} as const satisfies ProjectContent;

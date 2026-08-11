import videoSharkie from "../../../assets/videos/sharkie.mp4";

import sharkie0 from "../../../assets/images/projects/sharkie/sharkie-0.webp";
import sharkie1 from "../../../assets/images/projects/sharkie/sharkie-1.webp";
import sharkie2 from "../../../assets/images/projects/sharkie/sharkie-2.webp";
import sharkie3 from "../../../assets/images/projects/sharkie/sharkie-3.webp";
import sharkie4 from "../../../assets/images/projects/sharkie/sharkie-4.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Sharkie",
  theme: "light",
  tags: ["javascript", "html", "css"],
  live: "",
  source: "",
  description:
    "Sharkie adalah game petualangan 2D bawah air yang dibangun dengan vanilla JavaScript dan HTML5 Canvas.<br/><br/>Proyek ini menggunakan prinsip pemrograman berorientasi objek (OOP) dengan kelas khusus untuk entitas, musuh, animasi halus, dan latar belakang paralaks berlapis.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoSharkie,
        caption: "Gameplay",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie0,
        alt: "Entitas dan Desain Peta",
        caption: "Entitas dan Desain Peta",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie1,
        alt: "Pertarungan Boss",
        caption: "Pertarungan Boss",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie2,
        alt: "Misi",
        caption: "Misi",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie3,
        alt: "Layar Kemenangan",
        caption: "Layar Kemenangan",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie4,
        alt: "Layar Kekalahan",
        caption: "Layar Kekalahan",
      },
    },
  ],
} as const satisfies ProjectContent;

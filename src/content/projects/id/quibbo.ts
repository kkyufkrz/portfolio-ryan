import videoQuibbo from "../../../assets/videos/quibbo.mp4";

import quibbo0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";
import quibbo1 from "../../../assets/images/projects/quibbo/quibbo-1.webp";
import quibbo2 from "../../../assets/images/projects/quibbo/quibbo-2.webp";
import quibbo3 from "../../../assets/images/projects/quibbo/quibbo-3.webp";
import quibbo4 from "../../../assets/images/projects/quibbo/quibbo-4.webp";
import quibbo5 from "../../../assets/images/projects/quibbo/quibbo-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Quibbo",
  theme: "dark",
  tags: ["three", "node", "kubernetes", "redis", "postgresql"],
  videoBorder: true,
  description:
    "Quibbo adalah platform untuk game multiplayer cepat berbasis ronde. Menyatukan sistem matchmaking, avatar 3D yang dapat disesuaikan, dan integrasi akun.<br/><br/>Berawal dari eksperimen teknis hingga tumbuh menjadi sistem yang dapat diskalakan.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoQuibbo,
        caption: "Pengalaman Pengguna",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo0,
        alt: "Pembuat Avatar",
        caption: "Pembuat Avatar",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo1,
        alt: "Tic-Tac-Toe Multiplayer",
        caption: "Tic-Tac-Toe Multiplayer",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo2,
        alt: "Berbagai Mini-Game",
        caption: "Berbagai Mini-Game",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo3,
        alt: "Variasi Avatar",
        caption: "Variasi Avatar",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo4,
        alt: "Desain Responsif",
        caption: "Desain Responsif",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo5,
        alt: "Mode Gelap",
        caption: "Mode Gelap",
      },
    },
  ],
} as const satisfies ProjectContent;

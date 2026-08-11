import videoParticles from "../../../assets/videos/particles.mp4";

import particles0 from "../../../assets/images/projects/particles/particles-0.webp";
import particles1 from "../../../assets/images/projects/particles/particles-1.webp";
import particles2 from "../../../assets/images/projects/particles/particles-2.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "WebGL Particles",
  theme: "dark",
  tags: ["ogl", "javascript", "glsl"],
  live: "",
  videoBorder: false,
  description:
    "Proyek WebGL eksperimental yang dibangun dengan OGL.js, menganimasi partikel melalui rumus matematika dan fungsi noise.<br/><br/>Partikel bertransisi dengan mulus di antara beberapa bentuk 3D yang saling berpadu.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoParticles,
        caption: "Sistem Partikel Teranimasi",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles0,
        alt: "Bentuk Knot",
        caption: "Bentuk Knot",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles1,
        alt: "Bentuk Donut",
        caption: "Bentuk Donut",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles2,
        alt: "Bentuk Sphere",
        caption: "Bentuk Sphere",
      },
    },
  ],
} as const satisfies ProjectContent;

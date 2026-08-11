import image0 from "../../../assets/images/projects/tintify/tintify-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Tintify",
  theme: "dark",
  tags: ["ui/ux", "graphic"],
  live: "https://www.behance.net/gallery/168493501/Tintify-Personal-colour-assistant-app",
  videoBorder: false,
  description: "Product UI/UX design and design system components for Tintify web platform.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/168493501?ilo0=1",
        caption: "Behance Interactive Showcase",
      },
    },
    {
      type: "text",
      props: {
        title: "About this project",
        text: "UI/UX design for Tintify, a personal colour assistant app that helps users discover and manage their ideal color palette. The project includes end-to-end app design — from user flows and wireframes to high-fidelity screens, interactive prototype, and a comprehensive design system with reusable components.",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: image0,
        alt: "Tintify",
        caption: "Tintify",
      },
    },
  ],
} as const satisfies ProjectContent;

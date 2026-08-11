import type { ProjectContent } from "../../types";

export default {
  title: "Tiket.com",
  theme: "dark",
  tags: ["ui/ux", "campaign", "branding"],
  live: "https://www.behance.net/gallery/241571881/tiketcom",
  videoBorder: false,
  description: "UI/UX design and digital campaign visuals for Tiket.com, Indonesia's leading online travel platform. Featuring app interface design, promotional banners, and brand identity assets.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/241571881?ilo0=1",
        caption: "Behance Interactive Showcase",
      },
    },
    {
      type: "text",
      props: {
        title: "About this project",
        text: "A comprehensive UI/UX and digital campaign project for Tiket.com, one of Indonesia's largest online travel platforms. The work encompasses app interface redesign, promotional campaign visuals, social media creatives, and brand identity elements — all crafted to enhance the user journey and strengthen Tiket.com's digital presence.",
      },
    },
  ],
} as const satisfies ProjectContent;

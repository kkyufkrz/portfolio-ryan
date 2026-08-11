import type { ProjectContent } from "../../types";

export default {
  title: "Pegipegi",
  theme: "dark",
  tags: ["ui/ux", "campaign", "branding"],
  live: "https://www.behance.net/gallery/186826035/Pegipegi",
  videoBorder: false,
  description: "UI/UX & promotional campaign design for Pegipegi. Featuring complete mobile interfaces, interactive prototype motion assets, promotional banners, and campaign branding from Behance.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/186826035?ilo0=1",
        caption: "Behance Interactive Showcase",
      },
    },
  ],
} as const satisfies ProjectContent;

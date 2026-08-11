import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";
import streakon1 from "../../../assets/images/projects/streakon/streakon-1.webp";
import streakon2 from "../../../assets/images/projects/streakon/streakon-2.webp";
import streakon3 from "../../../assets/images/projects/streakon/streakon-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "StreakOn",
  theme: "dark",
  tags: ["next", "node", "postgresql", "redis"],
  videoBorder: false,
  live: "https://www.streakon.app",
  description:
    "StreakOn membantu kelompok kecil tetap konsisten dengan kebiasaan harian melalui streak bersama dan check-in sederhana.<br/><br/>Aplikasi ini dirancang dengan interaksi rendah gesekan, kemudahan penggunaan seluler, dan fitur sosial ringan menggunakan Next.js, Node.js, PostgreSQL, dan Redis.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon0,
        alt: "Solo and group streaks",
        caption: "Streak solo dan kelompok",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "Streak progress",
        caption: "Kemajuan streak",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon2,
        alt: "Cheer for friends",
        caption: "Dukungan untuk teman",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon3,
        alt: "Invite Flow",
        caption: "Alur Undangan",
      },
    },
  ],
} as const satisfies ProjectContent;

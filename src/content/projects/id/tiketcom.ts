import type { ProjectContent } from "../../types";

export default {
  title: "Tiket.com",
  theme: "dark",
  tags: ["ui/ux", "campaign", "branding"],
  live: "https://www.behance.net/gallery/241571881/tiketcom",
  videoBorder: false,
  description: "Desain UI/UX dan visual kampanye digital untuk Tiket.com, platform perjalanan online terkemuka di Indonesia. Menampilkan desain antarmuka aplikasi, banner promosi, dan aset identitas brand.",
  components: [
    {
      type: "embed",
      props: {
        src: "https://www.behance.net/embed/project/241571881?ilo0=1",
        caption: "Showcase Interaktif Behance",
      },
    },
    {
      type: "text",
      props: {
        title: "Tentang proyek ini",
        text: "Proyek UI/UX dan kampanye digital komprehensif untuk Tiket.com, salah satu platform perjalanan online terbesar di Indonesia. Pekerjaan ini mencakup redesain antarmuka aplikasi, visual kampanye promosi, kreatif media sosial, dan elemen identitas brand — semuanya dirancang untuk meningkatkan perjalanan pengguna dan memperkuat kehadiran digital Tiket.com.",
      },
    },
  ],
} as const satisfies ProjectContent;

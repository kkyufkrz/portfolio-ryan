export const social = [
  { url: "mailto:ryanmartinwijaya@gmail.com", name: "mail" },
  { url: "https://linkedin.com/in/ryanmartinwijaya", name: "linkedin" },
  { url: "https://instagram.com/laviee.n", name: "instagram" },
  { url: "https://www.behance.net/lavieenblu", name: "behance" },
  { url: "https://www.youtube.com/@lavieenblu", name: "youtube" },
] as const satisfies { url: string; name: "mail" | "instagram" | "linkedin" | "behance" | "youtube" }[];

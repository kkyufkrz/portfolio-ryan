export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "ui/ux"
  | "branding"
  | "campaign"
  | "motion"
  | "graphic"
  | "packaging"
  | "identity"
  | "merchandise"
  | "illustration"
  | "education"
  | "social"
  | "b2b";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  "ui/ux": "UI/UX",
  branding: "Branding",
  campaign: "Campaign",
  motion: "Motion Graphics",
  graphic: "Graphic Design",
  packaging: "Packaging",
  identity: "Visual Identity",
  merchandise: "Merchandise",
  illustration: "Illustration",
  education: "Education",
  social: "Social Media",
  b2b: "B2B Visual",
} as const satisfies Record<TagVariant, string>;

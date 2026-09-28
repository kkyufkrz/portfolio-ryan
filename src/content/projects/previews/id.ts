<<<<<<< HEAD
import thumbnailPegipegi from "../../../assets/thumbnails/pegipegi.webp";
import thumbnailKartafarm from "../../../assets/thumbnails/kartafarm.webp";
import thumbnailBlibli from "../../../assets/thumbnails/blibli.webp";
import thumbnailVidiosports from "../../../assets/thumbnails/vidiosports.webp";
import thumbnailDailykeeb from "../../../assets/thumbnails/dailykeeb.webp";
import thumbnailTintify from "../../../assets/thumbnails/tintify.webp";
import thumbnailEmtekdigital from "../../../assets/thumbnails/emtekdigital.webp";
import thumbnailSkintime from "../../../assets/thumbnails/skintime.webp";
import thumbnailNusaquatic from "../../../assets/thumbnails/nusaquatic.webp";
import thumbnailBaksobadminton from "../../../assets/thumbnails/baksobadminton.webp";
import thumbnailKassen from "../../../assets/thumbnails/kassen.webp";
import thumbnailPocarisweat from "../../../assets/thumbnails/pocarisweat.webp";
import thumbnailMiracleacademy from "../../../assets/thumbnails/miracleacademy.webp";
import thumbnailKanigara from "../../../assets/thumbnails/kanigara.webp";
import thumbnailPandemicmotion from "../../../assets/thumbnails/pandemicmotion.webp";
import thumbnailKasihmakan from "../../../assets/thumbnails/kasihmakan.webp";
=======
import thumbnailPegipegi from "../../../assets/images/projects/pegipegi/pegipegi-0.webp";
import thumbnailKartafarm from "../../../assets/images/projects/kartafarm/kartafarm-0.webp";
import thumbnailBlibli from "../../../assets/images/projects/blibli/blibli-0.webp";
import thumbnailVidiosports from "../../../assets/images/projects/vidiosports/vidiosports-0.webp";
import thumbnailDailykeeb from "../../../assets/images/projects/dailykeeb/dailykeeb-0.webp";
import thumbnailTintify from "../../../assets/images/projects/tintify/tintify-0.webp";
import thumbnailEmtekdigital from "../../../assets/images/projects/emtekdigital/emtekdigital-0.webp";
import thumbnailSkintime from "../../../assets/images/projects/skintime/skintime-0.webp";
import thumbnailNusaquatic from "../../../assets/images/projects/nusaquatic/nusaquatic-0.webp";
import thumbnailBaksobadminton from "../../../assets/images/projects/baksobadminton/baksobadminton-0.webp";
import thumbnailKassen from "../../../assets/images/projects/kassen/kassen-0.webp";
import thumbnailPocarisweat from "../../../assets/images/projects/pocarisweat/pocarisweat-0.webp";
import thumbnailMiracleacademy from "../../../assets/images/projects/miracleacademy/miracleacademy-0.webp";
import thumbnailKanigara from "../../../assets/images/projects/kanigara/kanigara-0.webp";
import thumbnailPandemicmotion from "../../../assets/images/projects/pandemicmotion/pandemicmotion-0.webp";
import thumbnailKasihmakan from "../../../assets/images/projects/kasihmakan/kasihmakan-0.webp";
>>>>>>> b6d6278 (fixing bugs)

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Pegipegi",
    slug: "pegipegi",
    thumbnail: thumbnailPegipegi,
    description: "Desain UI/UX & Kampanye Promosi",
  },
  {
    title: "Kartafarm",
    slug: "kartafarm",
    thumbnail: thumbnailKartafarm,
    description: "Identitas Brand & Desain UI Digital",
  },
  {
    title: "Blibli",
    slug: "blibli",
    thumbnail: thumbnailBlibli,
    description: "Kampanye E-Commerce & Media Sosial",
  },
  {
    title: "Vidio Sports x Premier League",
    slug: "vidiosports",
    thumbnail: thumbnailVidiosports,
    description: "Grafis Visual & Animasi Olahraga",
  },
  {
    title: "Dailykeeb",
    slug: "dailykeeb",
    thumbnail: thumbnailDailykeeb,
    description: "Branding & Sistem Identitas Visual",
  },
  {
    title: "Tintify",
    slug: "tintify",
    thumbnail: thumbnailTintify,
    description: "Desain Produk & UI/UX Digital",
  },
  {
    title: "Emtek Digital",
    slug: "emtekdigital",
    thumbnail: thumbnailEmtekdigital,
    description: "Visual Korporat & Solusi B2B",
  },
  {
    title: "Skintime",
    slug: "skintime",
    thumbnail: thumbnailSkintime,
    description: "Desain Kemasan Skincare & Branding",
  },
  {
    title: "Nusaquatic",
    slug: "nusaquatic",
    thumbnail: thumbnailNusaquatic,
    description: "Branding & Sistem Desain Grafis",
  },
  {
    title: "Bakso Badminton",
    slug: "baksobadminton",
    thumbnail: thumbnailBaksobadminton,
    description: "Identitas Acara & Desain Merchandise",
  },
  {
    title: "Kassen",
    slug: "kassen",
    thumbnail: thumbnailKassen,
    description: "Desain Karakter & Maskot",
  },
  {
    title: "Pocari Sweat - Bintang SMA",
    slug: "pocarisweat",
    thumbnail: thumbnailPocarisweat,
    description: "Kampanye Pemuda Nasional & Branding",
  },
  {
    title: "Miracle Academy",
    slug: "miracleacademy",
    thumbnail: thumbnailMiracleacademy,
    description: "Brand Edukasi & Desain Visual",
  },
  {
    title: "Kanigara",
    slug: "kanigara",
    thumbnail: thumbnailKanigara,
    description: "Identitas Visual & Grafis Kreatif",
  },
  {
    title: "Pandemic Interface Motion",
    slug: "pandemicmotion",
    thumbnail: thumbnailPandemicmotion,
    description: "Motion Graphics & Animasi UI",
  },
  {
    title: "Kasih Makan",
    slug: "kasihmakan",
    thumbnail: thumbnailKasihmakan,
    description: "Kampanye Inisiatif Sosial & Visual",
  },
] as const satisfies ProjectPreview[];

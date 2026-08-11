<script setup lang="ts">
import { computed } from "vue";
import { locale } from "../i18n/store";

import vidioLogo from "../assets/images/clients/vidio.png";
import pegipegiLogo from "../assets/images/clients/pegipegi.png";
import blibliLogo from "../assets/images/clients/blibli.png";
import premierLeagueLogo from "../assets/images/clients/premier-league.png";
import emtekDigitalLogo from "../assets/images/clients/emtek-digital.png";
import kartafarmLogo from "../assets/images/clients/kartafarm.png";
import kanigaraLogo from "../assets/images/clients/kanigara.png";
import miracleAcademyLogo from "../assets/images/clients/miracle-academy.png";
import tiketComLogo from "../assets/images/clients/tiket-com.png";
import pancaBudiLogo from "../assets/images/clients/panca-budi.png";
import sogaLogo from "../assets/images/clients/soga.png";

const clients = [
  { name: "Vidio", logo: vidioLogo },
  { name: "Pegipegi", logo: pegipegiLogo },
  { name: "Blibli", logo: blibliLogo },
  { name: "Premier League", logo: premierLeagueLogo },
  { name: "Emtek Digital", logo: emtekDigitalLogo },
  { name: "Kartafarm", logo: kartafarmLogo },
  { name: "Kanigara Production", logo: kanigaraLogo },
  { name: "Miracle Academy", logo: miracleAcademyLogo },
  { name: "Tiket.com", logo: tiketComLogo },
  { name: "Panca Budi", logo: pancaBudiLogo },
  { name: "Soga", logo: sogaLogo },
];

const titleText = computed(() => {
  return locale.value === "id"
    ? "DIPERCAYA OLEH BRAND & MITRA KREATIF"
    : "TRUSTED BY LEADING BRANDS & CREATIVE PARTNERS";
});
</script>

<template>
  <div class="client-logos-section">
    <p class="client-logos-subtitle">{{ titleText }}</p>
    <div class="client-logos-track-container">
      <div class="client-logos-track">
        <!-- Duplicate set for seamless continuous marquee loop -->
        <div v-for="(client, index) in [...clients, ...clients]" :key="`${client.name}-${index}`" class="client-logo-item">
          <img :src="client.logo" :alt="client.name" class="client-logo-img" loading="lazy" decoding="async" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.client-logos-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-lg);
  padding: var(--space-xl) 0;
  overflow: hidden;
}

.client-logos-subtitle {
  font-size: var(--font-size-xs);
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-300);
  text-align: center;
  opacity: 0.8;
}

.client-logos-track-container {
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.client-logos-track {
  display: flex;
  align-items: center;
  gap: clamp(40px, 5vw, 80px);
  width: max-content;
  animation: marquee-scroll 35s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
}

.client-logo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 52px;
  padding: 0 12px;
  transition: transform 0.25s ease;

  &:hover {
    transform: scale(1.08);
  }
}

.client-logo-img {
  height: 100%;
  max-height: 48px;
  width: auto;
  object-fit: contain;
}

@keyframes marquee-scroll {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}
</style>

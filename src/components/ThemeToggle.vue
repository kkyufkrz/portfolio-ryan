<script setup lang="ts">
import { useGlobalTheme } from "../composables/useGlobalTheme";
import ButtonRound from "./ButtonRound.vue";
import { t } from "../i18n/utils/translate";

// We can just use text or simple SVGs for now
const { currentTheme, toggleTheme } = useGlobalTheme();
</script>

<template>
  <ButtonRound
    class="theme-toggle"
    variant="theme"
    @click="toggleTheme"
    :aria-label="t('toggle-theme')"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
  >
    <div class="theme-toggle-icon">
      <!-- Sun icon for light mode -->
      <svg v-if="currentTheme === 'dark'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
      <!-- Moon icon for dark mode -->
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </div>
  </ButtonRound>
</template>

<style scoped lang="scss">
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  pointer-events: auto;

  &-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: inherit;
  }
}
</style>

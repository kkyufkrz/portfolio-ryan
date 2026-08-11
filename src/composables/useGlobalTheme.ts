import { ref, watch } from "vue";

export type GlobalTheme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme-preference";

const currentTheme = ref<GlobalTheme>("light");

const initTheme = () => {
  if (typeof window === "undefined") return;
  const saved = localStorage.getItem(STORAGE_KEY) as GlobalTheme | null;
  if (saved && (saved === "light" || saved === "dark")) {
    currentTheme.value = saved;
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    currentTheme.value = "dark";
  } else {
    currentTheme.value = "light";
  }
  document.documentElement.dataset.theme = currentTheme.value;
};

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === "light" ? "dark" : "light";
};

// Ensure DOM updates when theme changes
watch(currentTheme, (newTheme) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, newTheme);
  document.documentElement.dataset.theme = newTheme;
});

export const useGlobalTheme = () => {
  return {
    currentTheme,
    initTheme,
    toggleTheme,
  };
};

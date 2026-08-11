export const LOCALES = {
  en: {
    iso: "en-US",
    name: "English",
  },
  id: {
    iso: "id-ID",
    name: "Indonesia",
  },
} as const satisfies Record<
  string,
  {
    name: string;
    iso: string;
  }
>;

export const LOCALE_DEFAULT: keyof typeof LOCALES = "en";

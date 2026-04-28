import en from "@/locales/en.json";
import ptBr from "@/locales/pt-br.json";

export const locales = ["en", "pt-br"] as const;
export type Locale = (typeof locales)[number];

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  "pt-br": ptBr
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

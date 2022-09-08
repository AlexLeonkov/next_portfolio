import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import de from "../translations/de-DE.json";
import en from "../translations/en-EN.json";

const locales = { de, en };

const resources = Object.keys(locales).reduce(
  (acc, locale) => ({
    ...acc,
    [locale]: { translation: locales[locale] },
  }),
  {}
);

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ["en", "de", "ru", "ua"],
    resources,
    fallbackLng: "en",
    detection: { order: ["navigator"] },
  });

export default i18n;

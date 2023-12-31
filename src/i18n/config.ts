import i18n from "i18next"
import { initReactI18next } from "react-i18next"
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require("./locals/en.json"),
    },
    ar: {
      translation: require("./locals/ar.json"),
    },
  },
  lng: "ar", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes the values
  },
})

i18n.languages = ["en", "ar"]
export default i18n

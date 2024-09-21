import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locale/en/translation.json';
import azeTranslation from './locale/az/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      aze: {
        translation: azeTranslation
      }
    },
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;


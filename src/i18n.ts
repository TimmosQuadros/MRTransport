import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend) // Load translations via HTTP
    .use(LanguageDetector) // Detect user language
    .use(initReactI18next) // Pass the i18n instance to React
    .init({
        fallbackLng: 'en-US',
        debug: true,
        interpolation: {
            escapeValue: false, // React already escapes by default
        },
        backend: {
            loadPath: '/locales/{{lng}}.json', // Translation files path
        },
    });

export default i18n;

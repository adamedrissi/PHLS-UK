import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { //English
    translation: {
      welcome: "Hello {{name}}!",
    }
  },
  cy: { //Welsh
    translation: {
      welcome: "Helo {{name}}!",
    }
  },
  es: { //Spanish
    translation: {
      welcome: "¡Hola {{name}}!",
    }
  },
  pa: { //Panjabi/Punjabi
    translation: {
      welcome: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ {{name}}!",
    }
  },
  pl: { //Polish
    translation: {
      welcome: "Cześć {{name}}!",
    }
  },
  pt: { //Portuguese
    translation: {
      welcome: "Olá {{name}}!",
    }
  },
  ro: { //Romanian
    translation: {
      welcome: "Salut {{name}}!",
    }
  },
  ur: { //Urdu
    translation: {
      welcome: "ہیلو {{name}}",
    }
  }
};

i18n
  .use(initReactI18next) //Passes i18n instance to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en', //Use language from local storage or default to English
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false //React already escapes values
    }
  });

export default i18n;
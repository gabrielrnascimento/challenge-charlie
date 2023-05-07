import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationPortuguese from '../../../public/locales/pt/translation.json';

const resources = {
  pt: {
    translation: translationPortuguese
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt'
  });

export default i18n;
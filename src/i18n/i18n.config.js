import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en'
import vi from './vi'


i18n
    .use(initReactI18next)
    .init({
        resources: {
          en: {
            translation: en
          },          
          vi: {
            translation: vi
          },
        },
        
        lng:"en" , // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

    });

export default i18n
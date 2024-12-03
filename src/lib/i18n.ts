import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enLocale from '@/locales/en/en.json'
import ukLocale from '@/locales/uk/uk.json'

const resources = {
    en: {
        translation: enLocale
    },
    uk: {
        translation: ukLocale
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'uk',
    fallbackLng: 'en',

    interpolation: {
        escapeValue: false
    }
})

export default i18n

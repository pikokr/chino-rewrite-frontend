import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'


i18n.use(initReactI18next)
    .init({
        resources: {
            ko: {
                translation: require('./lang/ko.json')
            }
        },
        lng: 'ko',
        interpolation: {
            escapeValue: false
        }
    })


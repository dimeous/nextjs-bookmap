import { defaultLanguage, languages } from '../i18n/config'

export const getSortedLangsData = () => {
  return languages
}

export const getAllLanguageSlugs = () => {
  return languages.map((lang) => {
    return { params: { lang: lang } }
  })
}

export const getLanguage = (lang: string) => {
  return languages.includes(lang) ? lang : defaultLanguage
}

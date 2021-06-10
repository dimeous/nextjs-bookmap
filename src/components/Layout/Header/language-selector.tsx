import { i18n, useTranslation } from 'next-i18next'
import ReactFlagsSelect from 'react-flags-select'

const onSelectFlag = (countryCode: string) => {
  countryCode = countryCode === 'US' ? 'en' : countryCode
  i18n?.changeLanguage(countryCode.toLowerCase())
}
const convertToUpper = (countryCode: string) => {
  countryCode = countryCode === 'en' ? 'US' : countryCode
  return countryCode.toUpperCase()
}
const LanguageSelector = () => {
  const { i18n } = useTranslation('main')
  return (
    <ReactFlagsSelect
      countries={['US', 'DE', 'ES', 'FR', 'IT', 'RU']}
      onSelect={onSelectFlag}
      selected={convertToUpper(i18n.language)}
      showSelectedLabel={false}
      showOptionLabel={false}
      selectedSize={18}
      optionsSize={14}
    />
  )
}
export default LanguageSelector

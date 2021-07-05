import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import GetBookMapNow from '../src/components/page/gbn'

const Index = () => {
  return <GetBookMapNow page={'general'} />
}

type staticPropertiesParameters = {
  locale: string
}

export async function getStaticProps({ locale }: staticPropertiesParameters) {
  return {
    props: { ...(await serverSideTranslations(locale, ['gbn'])) },
    revalidate: 30,
  }
}
export default Index

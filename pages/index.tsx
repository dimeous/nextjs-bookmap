import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

import Footer from '../src/components/Layout/Footer/main-footer'
import MainHeader from '../src/components/Layout/Header/main-header'
import MainSection0 from '../src/components/Layout/Main/main-section-0'
import MainSection1 from '../src/components/Layout/Main/main-section-1'
import MainSection2Features from '../src/components/Layout/Main/main-section-2-features'
import MainSection3Desktop from '../src/components/Layout/Main/main-section-3-desktop'
import MainSection3Mobile from '../src/components/Layout/Main/main-section-3-mobile'
import MainSection4 from '../src/components/Layout/Main/main-section-4-connectivity'
import MainSection5MobilePricing from '../src/components/Layout/Main/main-section-5-mobile-pricing'
import MainSection5Pricing from '../src/components/Layout/Main/main-section-5-pricing'
import MainSection6Carousel from '../src/components/Layout/Main/main-section-6-carousel'
import MainSection6Trading from '../src/components/Layout/Main/main-section-6-trading'
import MainSection7Words from '../src/components/Layout/Main/main-section-7-words'
import MainSection8UserReviews from '../src/components/Layout/Main/main-section-8-users-reviews'
import { fetchAPI } from '../src/lib/api'
import { CarouselType } from '../src/lib/types'

interface CardType {
  mainCarousel: CarouselType[]
}
const Index = (mainCarousel: CardType) => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      <MainHeader />
      <main>
        <MainSection0 mobile={mobile} />
        <MainSection1 />
        <MainSection2Features />
        {mobile ? <MainSection3Mobile /> : <MainSection3Desktop />}
        <MainSection4 />
        {mobile ? <MainSection5MobilePricing /> : <MainSection5Pricing />}
        <MainSection6Carousel data={mainCarousel} />
        <MainSection6Trading mobile={mobile} />
        <MainSection7Words />
        <MainSection8UserReviews mobile={mobile} crypto={false} />
      </main>
      <Footer />
    </>
  )
}

type staticPropertiesParameters = {
  locale: string
}

export async function getStaticProps({ locale }: staticPropertiesParameters) {
  const [mainCarouselData] = await Promise.all([fetchAPI('/main-carousels')])
  const mainCarousel: CarouselType[] = mainCarouselData as unknown as CarouselType[]
  return {
    props: { mainCarousel, ...(await serverSideTranslations(locale, ['main'])) },
    revalidate: 30,
  }
}

export default Index

import React from 'react'
import MainSection0 from '../src/components/Layout/Main/MainSection0'
import MainSection1 from '../src/components/Layout/Main/MainSection1'
import MainSection2Features from '../src/components/Layout/Main/MainSection2Features'
import MainSection3Desktop from '../src/components/Layout/Main/MainSection3Desktop'
import MainSection3Mobile from '../src/components/Layout/Main/MainSection3Mobile'
import MainSection4 from '../src/components/Layout/Main/MainSection4Connectivity'
import MainSection5Pricing from '../src/components/Layout/Main/MainSection5Pricing'
import MainSection5MobilePricing from '../src/components/Layout/Main/MainSection5MobilePricing'
import MainSection6Trading from '../src/components/Layout/Main/MainSection6Trading'
import MainSection7Words from '../src/components/Layout/Main/MainSection7Words'
import MainSection8UserReviews from '../src/components/Layout/Main/MainSection8UsersReviews'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Footer from '../src/components/Layout/Footer/MainFooter'
import MainHeader from '../src/components/Layout/Header/MainHeader'

export default function Index() {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      <MainHeader />
      <main>
        <MainSection0 mobile={mobile} />
        <MainSection1 />
        <MainSection2Features />
        {mobile ? (
          <MainSection3Mobile></MainSection3Mobile>
        ) : (
          <MainSection3Desktop></MainSection3Desktop>
        )}
        <MainSection4 />
        {mobile ? <MainSection5MobilePricing /> : <MainSection5Pricing />}
        <MainSection6Trading mobile={mobile} />
        <MainSection7Words />
        <MainSection8UserReviews />
      </main>
      <Footer />
    </>
  )
}

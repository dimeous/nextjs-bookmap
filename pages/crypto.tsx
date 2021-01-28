import React from 'react'
import CryptoSection0 from '../src/components/Layout/Crypto/CryptoSection0'
import CryptoSection1 from '../src/components/Layout/Crypto/CryptoSection1'
import MainSection4 from '../src/components/Layout/Main/MainSection4Connectivity'
import MainSection5Pricing from '../src/components/Layout/Main/MainSection5Pricing'
import MainSection5MobilePricing from '../src/components/Layout/Main/MainSection5MobilePricing'
import MainSection6Trading from '../src/components/Layout/Main/MainSection6Trading'
import MainSection7Words from '../src/components/Layout/Main/MainSection7Words'
import MainSection8UserReviews from '../src/components/Layout/Main/MainSection8UsersReviews'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Footer from '../src/components/Layout/Footer/MainFooter'
import CryptoHeader from '../src/components/Layout/Crypto/Header/CryptoHeader'

export default function Index() {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      <CryptoHeader />
      <main>
        <CryptoSection0 mobile={mobile} />
        <CryptoSection1 />

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
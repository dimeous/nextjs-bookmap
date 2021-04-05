import React from 'react'
import CryptoSection0 from '../src/components/Layout/Crypto/CryptoSection0'
import CryptoSection1Features from '../src/components/Layout/Crypto/CryptoSection1Features'
import CryptoSection4MobilePricing from '../src/components/Layout/Crypto/CryptoSection4MobilePricing'
import CryptoSection4Pricing from '../src/components/Layout/Crypto/CryptoSection4Pricing'
import MainSection8UserReviews from '../src/components/Layout/Main/MainSection8UsersReviews'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Footer from '../src/components/Layout/Footer/MainFooter'
import CryptoHeader from '../src/components/Layout/Crypto/Header/CryptoHeader'
import CryptoSection2Exchanges from '../src/components/Layout/Crypto/CryptoSection2Exchanges'
import CryptoSection5DesktopGetStart from '../src/components/Layout/Crypto/CryptoSection5DesktopGetStart'
import CryptoSection5Mobile from '../src/components/Layout/Crypto/CryptoSection5Mobile'
import CryptoSection6FAQ from '../src/components/Layout/Crypto/CryptoSection6FAQ'
import CryptoSection3MultiBook from '../src/components/Layout/Crypto/CryptoSection3MultiBook'

export default function Index() {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      <CryptoHeader />
      <main>
        <CryptoSection0 mobile={mobile} />
        <CryptoSection1Features />
        <CryptoSection2Exchanges />
        <CryptoSection3MultiBook />
        {mobile ? <CryptoSection5Mobile /> : <CryptoSection5DesktopGetStart />}
        {mobile ? <CryptoSection4MobilePricing /> : <CryptoSection4Pricing />}
        <MainSection8UserReviews mobile={mobile} crypto={true} />
        <CryptoSection6FAQ />
      </main>
      <Footer />
    </>
  )
}

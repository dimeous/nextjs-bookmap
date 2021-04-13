import React from 'react'
import CryptoSection0 from '../src/components/Layout/Crypto/CryptoSection0'
import CryptoSection1Features from '../src/components/Layout/Crypto/CryptoSection1Features'
import CryptoSection5Pricing from '../src/components/Layout/Crypto/CryptoSection5Pricing'
import MainSection8UserReviews from '../src/components/Layout/Main/MainSection8UsersReviews'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Footer from '../src/components/Layout/Footer/MainFooter'
import CryptoHeader from '../src/components/Layout/Crypto/Header/CryptoHeader'
import CryptoSection2Exchanges from '../src/components/Layout/Crypto/CryptoSection2Exchanges'
import CryptoSection4DesktopGetStart from '../src/components/Layout/Crypto/CryptoSection4DesktopGetStart'
import CryptoSection4MobileGetStart from '../src/components/Layout/Crypto/CryptoSection4MobileGetStart'
import CryptoSection3MultiBook from '../src/components/Layout/Crypto/CryptoSection3MultiBook'
//import CryptoSection6UserReviews from '../src/components/Layout/Crypto/CryptoSection6UserReviews'

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
        <CryptoSection3MultiBook mobile={mobile} />
        {mobile ? <CryptoSection4MobileGetStart /> : <CryptoSection4DesktopGetStart />}
        <CryptoSection5Pricing />
        <MainSection8UserReviews mobile={mobile} crypto={true} />
      </main>
      <Footer />
    </>
  )
}

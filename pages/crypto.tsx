import React from 'react'
import CryptoSection0 from '../src/components/Layout/Crypto/CryptoSection0'
import CryptoSection1Features from '../src/components/Layout/Crypto/CryptoSection1Features'
import CryptoSection5Pricing from '../src/components/Layout/Crypto/CryptoSection5Pricing'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Footer from '../src/components/Layout/Footer/MainFooter'
import CryptoHeader from '../src/components/Layout/Crypto/Header/CryptoHeader'
import CryptoSection2Exchanges from '../src/components/Layout/Crypto/CryptoSection2Exchanges'
import CryptoSection4DesktopGetStart from '../src/components/Layout/Crypto/CryptoSection4DesktopGetStart'
import CryptoSection4MobileGetStart from '../src/components/Layout/Crypto/CryptoSection4MobileGetStart'
import CryptoSection3MultiBook from '../src/components/Layout/Crypto/CryptoSection3MultiBook'
import { GetStaticProps, NextPage } from 'next'
import CryptoSection6UserReviews from '../src/components/Layout/Crypto/CryptoSection6UserReviews'
import { createMuiTheme, Theme, ThemeProvider } from '@material-ui/core/styles'

const Index: NextPage<{ data: string }> = (props) => {
  const theme2 = useTheme()
  const mobile = useMediaQuery(theme2.breakpoints.down('md'))
  return (
    <ThemeProvider
      theme={(theme: Theme) =>
        createMuiTheme({
          ...theme,
          typography: {
            h1: {
              fontSize: '48px',
              lineHeight: '50px',
            },
            h2: {
              fontSize: 32,
              lineHeight: 38 + 'px',
              marginBottom: 22 + 'px',
            },
            h3: {
              font: '18px/30px MullerMedium,sans-serif',
              marginBottom: 41 + 'px',
            },
            fontSize: 16,
            fontWeightLight: 400,
            fontFamily: [
              'MullerMedium',
              'serix',
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
          },
        })
      }
    >
      <CryptoHeader />
      <main>
        <CryptoSection0 mobile={mobile} />
        <CryptoSection1Features />
        <CryptoSection2Exchanges />
        <CryptoSection3MultiBook />
        {mobile ? <CryptoSection4MobileGetStart /> : <CryptoSection4DesktopGetStart />}
        <CryptoSection5Pricing />
        <CryptoSection6UserReviews data={props.data} />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const result2 = fetch('https://www.trustpilot.com/review/bookmap.com')
    const data = await result2
      .then(function (response) {
        return response.text()
      })
      .then(function (html) {
        return html
      })
      .catch(function (err) {
        console.log('Failed to fetch page trustpilot: ', err)
      })
    return {
      props: { data: data },
    }
  } catch {
    return {
      props: {},
    }
  }
}
export default Index

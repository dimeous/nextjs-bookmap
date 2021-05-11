import { createMuiTheme, Theme, ThemeProvider, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'

import CryptoSection0 from '../src/components/Layout/Crypto/CryptoSection0'
import CryptoSection1Features from '../src/components/Layout/Crypto/CryptoSection1Features'
import CryptoSection2Exchanges from '../src/components/Layout/Crypto/CryptoSection2Exchanges'
import CryptoSection3MultiBook from '../src/components/Layout/Crypto/CryptoSection3MultiBook'
import CryptoSection4DesktopGetStart from '../src/components/Layout/Crypto/CryptoSection4DesktopGetStart'
import CryptoSection4MobileGetStart from '../src/components/Layout/Crypto/CryptoSection4MobileGetStart'
import CryptoSection5Pricing from '../src/components/Layout/Crypto/CryptoSection5Pricing'
import CryptoSection6UserReviews from '../src/components/Layout/Crypto/CryptoSection6UserReviews'
import CryptoHeader from '../src/components/Layout/Crypto/Header/CryptoHeader'
import Footer from '../src/components/Layout/Footer/MainFooter'
import { newContentSection5 } from '../src/components/Layout/GetBookmapNow/gbn-section-5-content'
const Index: NextPage<{ data: string }> = (props) => {
  const theme2 = useTheme()
  const mobile = useMediaQuery(theme2.breakpoints.down('md'))
  const featureListArray = [
    'View full-depth historical data with the dynamic heatmap',
    'Watch the battle between buyers and sellers in 3D with execution volume  visualization',
    'Connect to multiple exchanges, get data for free and view up to 20 pairs at the same time',
    'See all market data without aggregation',
    'Use Bookmap in real-time or in replay to debrief your session',
    'Access to many addons, including Multibook',
  ]
  const textSection3 = 'See market liquidity and execution volume '
  const PageName = 'getbookmapnow'
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
        <CryptoSection1Features listArray={featureListArray} />
        <CryptoSection2Exchanges />
        <CryptoSection3MultiBook text={textSection3} />
        {mobile ? <CryptoSection4MobileGetStart page={PageName}  /> : <CryptoSection4DesktopGetStart page={PageName} />}
        <CryptoSection5Pricing newContent={newContentSection5} />
        <CryptoSection6UserReviews data={props.data} />
      </main>
      <Footer page={PageName} />
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
      .catch(function (error) {
        console.log('Failed to fetch page trustpilot:', error)
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

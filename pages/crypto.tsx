import { createTheme, Theme, ThemeProvider, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DefaultSeo } from 'next-seo'
import React from 'react'

import SEO from '../next-seo.config'
import CryptoSection0 from '../src/components/Layout/crypto/crypto-section-0'
import CryptoSection1Features from '../src/components/Layout/crypto/crypto-section-1-features'
import CryptoSection2Exchanges from '../src/components/Layout/crypto/crypto-section-2-exchanges'
import CryptoSection3Multibook from '../src/components/Layout/crypto/crypto-section-3-multibook'
import CryptoSection4DeskGetStart from '../src/components/Layout/crypto/crypto-section-4-desk-get-start'
import CryptoSection4MGetStart from '../src/components/Layout/crypto/crypto-section-4-m-get-start'
import CryptoSection5Pricing from '../src/components/Layout/crypto/crypto-section-5-pricing'
import CryptoSection6UserReviews from '../src/components/Layout/crypto/crypto-section-6-user-reviews'
import CryptoHeader from '../src/components/Layout/crypto/Header/crypto-header'
import Footer from '../src/components/Layout/Footer/main-footer'

const Index: NextPage<{ data: string }> = (props) => {
  const theme2 = useTheme()
  const mobile = useMediaQuery(theme2.breakpoints.down('md'))
  const newTitle = 'Bookmap ㄧ Analyze & Trade Order Flow On Top Crypto Exchanges'
  const newDescription =
    'See full market liquidity in real-time. View up to 20 trading pairs in parallel. Analyze order book data from multiple crypto exchanges in one chart.  '
  SEO.title = newTitle
  SEO.canonical = 'https://bookmap.com/crypto'
  SEO.description = newDescription
  SEO.openGraph.title = newTitle
  SEO.openGraph.description = newDescription
  SEO.openGraph.images = [
    {
      url: '/static/bookmap_seo.jpg',
      width: 600,
      height: 200,
      alt: newTitle,
    },
  ]
  SEO.twitter.title = newTitle

  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider
        theme={(theme: Theme) =>
          createTheme({
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
        <CryptoHeader mobile={mobile} />
        <main>
          <CryptoSection0 mobile={mobile} />
          <CryptoSection1Features />
          <CryptoSection2Exchanges />
          <CryptoSection3Multibook />
          {mobile ? <CryptoSection4MGetStart /> : <CryptoSection4DeskGetStart />}
          <CryptoSection5Pricing />
          <CryptoSection6UserReviews data={props.data} />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

type staticPropertiesParameters = {
  locale: string
}

export async function getStaticProps({ locale }: staticPropertiesParameters) {
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
      props: { data: data, ...(await serverSideTranslations(locale, ['crypto'])) },
    }
  } catch {
    return {
      props: {},
    }
  }
}

export default Index

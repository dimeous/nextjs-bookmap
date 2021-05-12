import { createMuiTheme, Theme, ThemeProvider, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'

import Footer from '../src/components/Layout/Footer/main-footer'
import GbnSection0 from '../src/components/Layout/gbn/gbn-section-0'
import GbnSection1Features from '../src/components/Layout/gbn/gbn-section-1-features'
import GbnSection2Exchanges from '../src/components/Layout/gbn/gbn-section-2-exchanges'
import GbnSection3Multibook from '../src/components/Layout/gbn/gbn-section-3-multibook'
import GbnSection4DeskGetStart from '../src/components/Layout/gbn/gbn-section-4-desk-get-start'
import GbnSection4MGetStart from '../src/components/Layout/gbn/gbn-section-4-m-get-start'
import GbnSection5Pricing from '../src/components/Layout/gbn/gbn-section-5-pricing'
import GbnSection6UserReviews from '../src/components/Layout/gbn/gbn-section-6-user-reviews'
import CryptoHeader from '../src/components/Layout/gbn/Header/CryptoHeader'

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
        <GbnSection0 mobile={mobile} />
        <GbnSection1Features />
        <GbnSection2Exchanges />
        <GbnSection3Multibook />
        {mobile ? <GbnSection4MGetStart /> : <GbnSection4DeskGetStart />}
        <GbnSection5Pricing />
        <GbnSection6UserReviews data={props.data} />
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

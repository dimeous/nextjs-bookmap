import { createMuiTheme, Theme, ThemeProvider, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import React from 'react'

import GbnSection0 from '../src/components/Layout/gbn/gbn-section-0'
import GbnSection1Features from '../src/components/Layout/gbn/gbn-section-1-features'
import GbnSection2Exchanges from '../src/components/Layout/gbn/gbn-section-2-exchanges'
import GbnSection3Multibook from '../src/components/Layout/gbn/gbn-section-3-multibook'
import GbnSection4DeskGetStart from '../src/components/Layout/gbn/gbn-section-4-desk-get-start'
import GbnSection4MGetStart from '../src/components/Layout/gbn/gbn-section-4-m-get-start'
import GbnSection5Pricing from '../src/components/Layout/gbn/gbn-section-5-pricing'
import CryptoHeader from '../src/components/Layout/gbn/Header/CryptoHeader'
import Footer from '../src/components/Layout/Footer/MainFooter'
import { newContentSection5 } from '../src/components/Layout/GetBookmapNow/gbn-section-5-content'
const Index = () => {
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

      <CryptoHeader page={PageName}/>
      <main>
        <GbnSection0 mobile={mobile} page={PageName}/>
        <GbnSection1Features listArray={featureListArray} />
        <GbnSection2Exchanges page={PageName}/>
        <GbnSection3Multibook page={PageName} />
        {mobile ? <GbnSection4MGetStart page={PageName}  /> : <GbnSection4DeskGetStart page={PageName} />}
        <GbnSection5Pricing newContent={newContentSection5} />
      </main>
      <Footer page={PageName} />
    </ThemeProvider>
  )
}

export default Index

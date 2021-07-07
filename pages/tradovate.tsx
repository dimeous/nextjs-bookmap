import { createTheme, Theme, ThemeProvider, useTheme } from '@material-ui/core/styles'

import TradHeader from '../src/components/Layout/Tradovate/header/trad-header'
import TradSection1 from '../src/components/Layout/Tradovate/trad-section-1'
import TradSection2 from '../src/components/Layout/Tradovate/trad-section-2'
import TradSection3 from '../src/components/Layout/Tradovate/trad-section-3'
import TradSection4 from '../src/components/Layout/Tradovate/trad-section-4'
import TradSection5 from '../src/components/Layout/Tradovate/trad-section-5'
import TradSection6 from '../src/components/Layout/Tradovate/trad-section-6-faq'

const index = () => {
  return (
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
      <TradHeader />
      <main>
        <TradSection1 />
        <TradSection2 />
        <TradSection3 />
        <TradSection4 />
        <TradSection5 />
        <TradSection6 />
      </main>
    </ThemeProvider>
  )
}

export default index

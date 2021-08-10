import { ThemeProvider, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { DefaultSeo } from 'next-seo'
import React from 'react'

import SEO from '../next-seo.config'
import BookmapBlankHeader from '../src/components/common/header/bookmap-blank-header'
import Footer from '../src/components/Layout/Footer/main-footer'
import WebS0 from '../src/components/Layout/web/web-s0'
import WebS1 from '../src/components/Layout/web/web-s1'
import WebS2 from '../src/components/Layout/web/web-s2'
import WebS3 from '../src/components/Layout/web/web-s3'
import newTheme from '../src/theme/new-theme'

const Index = (): React.ReactElement => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      <DefaultSeo {...SEO} />
      <BookmapBlankHeader mobile={mobile} />
      <ThemeProvider theme={() => newTheme}>
        <main>
          <WebS0 mobile={mobile} />
          <WebS1 />
          <WebS2 />
          <WebS3 />
        </main>
      </ThemeProvider>
      <Footer />
    </>
  )
}

export default Index

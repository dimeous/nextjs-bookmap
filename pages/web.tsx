import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { DefaultSeo } from 'next-seo'
import React from 'react'

import SEO from '../next-seo.config'
import BookmapBlankHeader from '../src/components/common/header/bookmap-blank-header'
import Footer from '../src/components/Layout/Footer/main-footer'

const Index = (): React.ReactElement => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      <DefaultSeo {...SEO} />
      <BookmapBlankHeader mobile={mobile} />
      <main></main>
      <Footer />
    </>
  )
}

export default Index

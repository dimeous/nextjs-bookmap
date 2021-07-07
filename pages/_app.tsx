import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'
import { DefaultSeo } from 'next-seo'
import React from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TagManager from 'react-gtm-module'

import SEO from '../next-seo.config'
import PolicyWidget from '../src/components/policyWidget'
import theme from '../src/theme/theme'

export const cache = createCache({ key: 'css', prepend: true })

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props
  const pathname = useRouter().pathname

  const isPageGetBookMapNow =
    pathname === '/get-bookmap-now' || pathname === '/orderflow' || pathname === '/general'
  const isPageCrypto = useRouter().pathname === '/crypto'

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.remove()
    }
    if (!isPageGetBookMapNow) {
      TagManager.initialize({ gtmId: 'GTM-NJGLPSJ' })
      TagManager.initialize({ gtmId: 'GTM-PL3JMVJ' })
    } else {
      TagManager.initialize({ gtmId: 'GTM-KD8F6RZ' })
    }
  }, [])

  SEO.canonical = 'https://bookmap.com' + useRouter().pathname
  let PageTitle = isPageGetBookMapNow
    ? 'Bookmap®️ | Online Visualization Platform 2021'
    : 'Bookmap®️ | Online Trading Platform 2021'

  if (isPageGetBookMapNow) {
    const newTitle = 'Bookmap®️ | Online Visualization Platform 2021'
    const newDescription =
      ' Best synthetic instrument ➤ See the volume with amazing clarity ➤ Different digital currency exchanges available ➤ Multibook for decentralized currency exchange data visualization'
    SEO.title = 'Use Multibook to view multiple decentralized currency exchanges at once'
    SEO.description = newDescription
    SEO.canonical = 'https://get-bookmap-now.com'
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
  }
  if (isPageCrypto) {
    const newTitle = 'Bookmap ㄧ Analyze & Trade Order Flow On Top Crypto Exchanges'
    PageTitle = newTitle
    const newDescription =
      'See full market liquidity in real-time. View up to 20 trading pairs in parallel. Analyze order book data from multiple crypto exchanges in one chart.  '
    SEO.title = newTitle
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
  }

  return (
    <CacheProvider value={cache}>
      <Head>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <title>{PageTitle}</title>
        <link rel="shortcut icon" href="/static/icons/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="facebook-domain-verification" content="gf4vmbbkiyhxvzf22ugivxf7tufnf2" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
        <PolicyWidget />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default appWithTranslation(MyApp)

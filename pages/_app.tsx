import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'
import React from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TagManager from 'react-gtm-module'

import PolicyWidget from '../src/components/policy-widget'
import theme from '../src/theme/theme'

export const cache = createCache({ key: 'css', prepend: true })

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props
  const pathname = useRouter().pathname
  const basePath = useRouter().basePath
  let isPageFairX = false

  const isPageGetBookMapNow =
    pathname === '/get-bookmap-now' || pathname === '/orderflow' || pathname === '/general'

  if (process.browser) {
    isPageFairX = pathname === '/tradovate' || basePath === 'bookmap-for-fairx'
  }

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.remove()
    }
    if (!isPageGetBookMapNow && !isPageFairX) {
      TagManager.initialize({ gtmId: 'GTM-NJGLPSJ' })
      TagManager.initialize({ gtmId: 'GTM-PL3JMVJ' })
    } else {
      TagManager.initialize({ gtmId: 'GTM-KD8F6RZ' })
    }
  }, [])

  return (
    <CacheProvider value={cache}>
      <Head>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <link rel="shortcut icon" href="/static/icons/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="facebook-domain-verification" content="gf4vmbbkiyhxvzf22ugivxf7tufnf2" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
        <PolicyWidget />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default appWithTranslation(MyApp)

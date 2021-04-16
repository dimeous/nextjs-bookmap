import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@material-ui/core/CssBaseline'
import createCache from '@emotion/cache'
import theme from '../src/theme'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import PolicyWidget from '../src/components/policyWidget'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import TagManager from 'react-gtm-module'
import { useRouter } from 'next/router'

export const cache = createCache({ key: 'css', prepend: true })

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
    TagManager.initialize({ gtmId: 'GTM-NJGLPSJ' })
    TagManager.initialize({ gtmId: 'GTM-PL3JMVJ' })
  }, [])

  SEO.canonical = SEO.canonical + useRouter().pathname + '/'
  return (
    <CacheProvider value={cache}>
      <Head>
        {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <title>Bookmap®️ | Online Trading Platform 2020</title>
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

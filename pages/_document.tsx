import createEmotionServer from '@emotion/server/create-instance'
import { ServerStyleSheets } from '@material-ui/styles'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

import theme from '../src/theme/theme'
import { cache } from './_app'

const { extractCritical } = createEmotionServer(cache)

let prefixer: any
let cleanCSS: any
if (process.env.NODE_ENV === 'production') {
  /* eslint-disable global-require */
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const postcss = require('postcss')
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const autoprefixer = require('autoprefixer')
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const CleanCSS = require('clean-css')
  /* eslint-enable global-require */

  prefixer = postcss([autoprefixer])
  cleanCSS = new CleanCSS()
}

//const GOOGLE_ID = process.env.NODE_ENV === 'production' ? 'G-DJLH85K3RX' : 'G-DJLH85K3RX'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="stylesheet" href="/static/fonts/load-font.css" />
          {/* Google Tag manager */}
        </Head>
        <body>
          <Main />
          {/*}
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                window.ga('create','${GOOGLE_ID}','auto');
              `,
            }}
          />*/}
          <script
            dangerouslySetInnerHTML={{
              __html: `window.addEventListener("load", function(event) {
             const queryString = window.location.search;
             const urlParams = new URLSearchParams(queryString);
             let utm_source = urlParams.get('utm_source'),
             utm_medium = urlParams.get('utm_medium'),
             utm_campaign = urlParams.get('utm_campaign'),
             utm_content = urlParams.get('utm_content');
             utm_source != null ? localStorage.setItem('utm_source', utm_source) : false;
             utm_medium != null ? localStorage.setItem('utm_medium', utm_medium) : false;
             utm_campaign != null ? localStorage.setItem('utm_campaign', utm_campaign) : false;
             utm_content != null ? localStorage.setItem('utm_content', utm_content) : false;
          });`,
            }}
          />
          <NextScript />
          {/*Zoho chat widget */}
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"d9ccfe496cc68345a6b253ffe17120fc572ce1f41c91062605affd3fc1620aea", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id='zsiqwidget'></div>");
              `,
            }}
          />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (context) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = context.renderPage

  context.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    })

  const initialProperties = await Document.getInitialProps(context)
  let css = sheets.toString()
  // It might be undefined, e.g. after an error.
  if (css && process.env.NODE_ENV === 'production') {
    const result1 = await prefixer.process(css, { from: undefined })
    css = result1.css
    css = cleanCSS.minify(css).styles
  }

  const styles = extractCritical(initialProperties.html)

  return {
    ...initialProperties,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProperties.styles),
      sheets.getStyleElement(),
      <style
        key="emotion-style-tag"
        data-emotion={`css ${styles.ids.join(' ')}`}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: styles.css }}
      />,
    ],
  }
}

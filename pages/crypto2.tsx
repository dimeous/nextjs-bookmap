import React from 'react'
import CryptoSection0 from '../src/components/Layout/Crypto/CryptoSection0'
import CryptoSection1 from '../src/components/Layout/Crypto/CryptoSection1'
import CryptoSection4MobilePricing from '../src/components/Layout/Crypto/CryptoSection4MobilePricing'
import CryptoSection4Pricing from '../src/components/Layout/Crypto/CryptoSection4Pricing'
import MainSectionTSTUserReviews from '../src/components/Layout/Main/MainSectionTSTUsersReviews'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import CryptoHeader from '../src/components/Layout/Crypto/Header/CryptoHeader'
import CryptoSection2Exchanges from '../src/components/Layout/Crypto/CryptoSection2Exchanges'
import CryptoSection3Desktop from '../src/components/Layout/Crypto/CryptoSection3Desktop'
import CryptoSection3Mobile from '../src/components/Layout/Crypto/CryptoSection3Mobile'
import CryptoSection6FAQ from '../src/components/Layout/Crypto/CryptoSection6FAQ'

export default function Index() {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <>
      <CryptoHeader />
      <main>
        <CryptoSection0 mobile={mobile} />
        <CryptoSection1 />
        <CryptoSection2Exchanges />
        {mobile ? <CryptoSection3Mobile /> : <CryptoSection3Desktop />}
        {mobile ? <CryptoSection4MobilePricing /> : <CryptoSection4Pricing />}
        <iframe
          src="javascript:false"
          id="my-iframe"
          frameBorder="0"
          width="100%"
          scrolling="no"
        ></iframe>
        <script id="content" type="text/x-iframe-content">
          <html>
            <head>
              <link
                rel="stylesheet"
                type="text/css"
                href="{parent-page-stylesheet.css}"
                media="all"
              />
            </head>
            <body>
              <MainSectionTSTUserReviews />
            </body>
          </html>
        </script>
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
                var iFrameDoc = document.getElementById('my-iframe').contentWindow.document;
                 iFrameDoc.open(); iFrameDoc.write(document.getElementById('content').innerHTML);
                iFrameDoc.close();
              `,
          }}
        />

        <CryptoSection6FAQ />
      </main>
    </>
  )
}

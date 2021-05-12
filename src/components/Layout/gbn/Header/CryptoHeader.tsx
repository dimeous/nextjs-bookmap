import { AppBar, Box, Button, Container, Typography } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'

import { useStyles } from './CryptoHeaderStyles'

type ElementProperties = {
  page?: string
}
const CryptoHeader = ({ page }: ElementProperties): React.ReactElement => {
  const classes = useStyles()

  const displayDesktop = () => {
    const addToLink =
      page === 'getbookmapnow'
        ? '?utm_medium=ppc&utm_source=google&utm_campaign=Multibook_new_landing&utm_content=New_landing'
        : ''
    return (
      <Container fixed sx={{ p: [2, 0, 0, 2] }}>
        <Box className={classes.toolbar}>
          <Link href="/">
            <Box>
              <Link href={'https://bookmap.com/'}>
                <img src={'/static/header/bookmap-logo.svg'} alt={'Bookmap'} height={18} />
              </Link>
              {page !== 'getbookmapnow' && (
                <Typography className={classes.logoTxt}>CRYPTO</Typography>
              )}
            </Box>
          </Link>

          <Button
            variant="contained"
            color="secondary"
            href={'https://bookmap.com/members/signup/thAhOgYUg' + addToLink}
            className={classes.button}
            id={page === 'getbookmapnow' ? 'gbn _header_get_it_now' : 'crypto_header_get_it_now'}
          >
            Subscribe for free
          </Button>
        </Box>
      </Container>
    )
  }

  return (
    <header>
      <AppBar className={classes.header} position={'static'} color={'default'}>
        {displayDesktop()}
      </AppBar>
    </header>
  )
}
export default CryptoHeader

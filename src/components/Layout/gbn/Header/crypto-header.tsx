import { AppBar, Box, Button, Container, Typography } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'

import { getUTMUrlDependsOnPage, isGetBookMapNow } from '../../../../lib'
import { useStyles } from './crypto-header-styles'

type ElementProperties = {
  page?: string
}
const CryptoHeader = ({ page }: ElementProperties): React.ReactElement => {
  const classes = useStyles()

  const displayDesktop = () => {
    const addToLink = getUTMUrlDependsOnPage(page)
    return (
      <Container fixed sx={{ p: [2, 0, 0, 2] }}>
        <Box className={classes.toolbar}>
          <Link href="/">
            <Box>
              <Link href={'https://bookmap.com/' + addToLink}>
                <img src={'/static/header/bookmap-logo.svg'} alt={'Bookmap'} height={18} />
              </Link>
              {!isGetBookMapNow(page) && (
                <Typography className={classes.logoTxt}>CRYPTO</Typography>
              )}
            </Box>
          </Link>

          <Button
            variant="contained"
            color="secondary"
            href={'https://bookmap.com/members/signup/thAhOgYUg' + addToLink}
            className={classes.button}
            id={isGetBookMapNow(page) ? 'gbn _header_get_it_now' : 'crypto_header_get_it_now'}
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

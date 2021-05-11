import { AppBar, Box, Button, Typography, Container } from '@material-ui/core'

import React from 'react'
import Link from 'next/link'
import { useStyles } from './CryptoHeaderStyles'

type ElementProperties = {
    page?: string
}
const CryptoHeader=({ page }: ElementProperties): React.ReactElement => {
  const classes = useStyles()

  const displayDesktop = () => {
    return (
      <Container fixed sx={{ p: [2, 0, 0, 2] }}>
        <Box className={classes.toolbar}>
            <Link href="/">
                <Box>
                    <img src={'/static/header/bookmap-logo.svg'} alt={'Bookmap'} height={18}/>
                    { page !== 'getbookmapnow' &&
                    <Typography className={classes.logoTxt}>CRYPTO</Typography>}
                </Box>
            </Link>

          <Button
            variant="contained"
            color="secondary"
            href="https://bookmap.com/members/signup/thAhOgYUg"
            className={classes.button}
            id={ (page ==='getbookmapnow') ? 'gbn _header_get_it_now':'crypto_header_get_it_now'}
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
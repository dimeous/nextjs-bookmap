import { AppBar, Box, Container } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import Link from 'next/link'
import React from 'react'

export const useStyles = makeStyles((theme: Theme) => ({
  header: {
    color: '#212529',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '32px',
    },
  },
}))

type ElementProperties = {
  mobile: boolean
}
const TradHeader = ({ mobile }: ElementProperties): React.ReactElement => {
  const classes = useStyles()
  const displayDesktop = () => {
    return (
      <Container fixed sx={{ p: [2, 0, 0, 2] }}>
        <Box className={classes.toolbar}>
          <Link href="/">
            <Box>
              <Link href={'https://bookmap.com/'}>
                <img src={'/static/header/bookmap-logo.svg'} alt={'Bookmap'} height={18} />
              </Link>
            </Box>
          </Link>
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
export default TradHeader

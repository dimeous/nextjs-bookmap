import React from 'react'
import Link from 'next/Link'
import MenuHeaders from './MenuHeader'
import { AppBar, Toolbar, Container, Box, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}))
export default function MainHeader() {
  const classes = useStyles()
  return (
    <AppBar position={'fixed'} color={'default'}>
      <Container fixed>
        <Toolbar>
          <Link href="/">
            <a>
              <img src={'/static/header/bookmap-logo.svg'} alt={'Bookmap'} height={18} />
            </a>
          </Link>
          <Typography className={classes.title}>
            <MenuHeaders />
          </Typography>
          <Box className={classes.menuButton}>
            <Button color={'inherit'} variant="outlined">
              <img src={'/static/header/my_account.svg'} alt={'LOG IN'} />
              <span> LOG IN</span>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

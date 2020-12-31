import React from 'react'
import { AppBar, Toolbar, Container, IconButton, Typography, Box, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import { padding } from '@material-ui/system'

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
          <img src={'/static/header/bookmap-logo.svg'} alt={'Bookmap'} />
          <IconButton
            edge={'start'}
            className="classes.menuButton"
            color={'inherit'}
            aria-label={'menu'}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant={'h6'} className={classes.title}></Typography>
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

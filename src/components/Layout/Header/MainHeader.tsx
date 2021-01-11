import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  MenuItem,
  Link,
  Box,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState, useEffect } from 'react'
const headersData = [
  {
    label: 'Features',
    href: '#fаeatures',
  },
  {
    label: 'Connectivity',
    href: '#Connectivity',
  },
  {
    label: 'Pricing',
    href: '#Pricing',
  },
  {
    label: 'Education',
    href: '#Education',
  },
]

const useStyles = makeStyles(() => ({
  header: {
    paddingRight: '79px',
    paddingLeft: '118px',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    color: '#FFFEFE',
    textAlign: 'left',
  },
  menuButton: {
    fontWeight: 700,
    font: '14px/14px MullerLight,sans-serif',
    color: '#1a1833',
    size: '18px',
    marginLeft: '38px',
    backgroundColor: '#f5f5f5;',
    border: 'none!important',
    '&:hover': {
      backgroundColor: '#f5f5f5;',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  drawerContainer: {
    padding: '20px 30px',
  },
}))

export default function Header() {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles()

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  })

  const { mobileView, drawerOpen } = state

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }))
    }

    setResponsiveness()

    window.addEventListener('resize', () => setResponsiveness())
  }, [])

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {bookmapLogo}
        <div>{getMenuButtons()}</div>
        <Box>
          <Button variant="outlined">
            <img src={'/static/header/my_account.svg'} alt={'LOG IN'} />
            <span> LOG IN</span>
          </Button>
        </Box>
      </Toolbar>
    )
  }

  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }))
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }))

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: 'start',
            color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{bookmapLogo}</div>
      </Toolbar>
    )
  }

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link href={href}>
          <MenuItem>{label}</MenuItem>
        </Link>
      )
    })
  }

  const bookmapLogo = (
    <Typography className={logo}>
      <Link href="/">
        <a>
          <img src={'/static/header/bookmap-logo.svg'} alt={'Bookmap'} height={18} />
        </a>
      </Link>
    </Typography>
  )

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button key={label} href={href} component={Link} className={menuButton}>
          {label}
        </Button>
      )
    })
  }

  return (
    <header color={'default'}>
      <AppBar className={header} position={'fixed'} color={'default'}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  )
}

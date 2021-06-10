import {
  AppBar,
  Box,
  ClickAwayListener,
  Container,
  Drawer,
  Fade,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import LanguageSelector from './language-selector'
import { useStyles } from './main-header-styles'
import { community, headersData, marketplace, products, resources, solutions } from './menuLinks'
import MenuListComposition from './toggle-menu'

export default function Header() {
  const classes = useStyles()

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  })

  const { mobileView, drawerOpen } = state
  const [checked, setChecked] = React.useState(false)
  const handleChange = () => {
    setChecked((previous) => !previous)
  }
  const handleClickAway = () => {
    setChecked(false)
  }

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 990
        ? setState((previousState) => ({ ...previousState, mobileView: true }))
        : setState((previousState) => ({ ...previousState, mobileView: false }))
    }

    setResponsiveness()

    window.addEventListener('resize', () => setResponsiveness())
  }, [])

  const generateDeskTopSubMenu = (data: Array<{ label: string; href: string; blank: boolean }>) => {
    return data.map(({ label, href, blank }) => {
      return (
        <li key={label}>
          {blank ? (
            <a href={href} key={label} target="_blank" rel={'noreferrer'}>
              {label}
            </a>
          ) : (
            <Link href={href} key={label}>
              {label}
            </Link>
          )}
        </li>
      )
    })
  }

  const popUpMenu = () => {
    return (
      <div className={classes.moreButtonCont}>
        <ul>
          <li>
            <ClickAwayListener onClickAway={handleClickAway}>
              <Typography
                className={checked ? classes.moreButtonAcitve : classes.moreButton}
                onClick={handleChange}
              >
                More
              </Typography>
            </ClickAwayListener>
            <Fade in={checked}>
              <div className={classes.subMenuWrap}>
                <ul className={classes.subMenu}>
                  <li>
                    <Link href="/#resources">Resources</Link>
                    <div className="sub-menu-wrap">
                      <ul className={classes.subMenu2}>{generateDeskTopSubMenu(resources)}</ul>
                    </div>
                  </li>
                  <li>
                    <Link href="/#product">Product</Link>
                    <div className="sub-menu-wrap">
                      <ul className={classes.subMenu2}>{generateDeskTopSubMenu(products)}</ul>
                    </div>
                  </li>
                  <li>
                    <a href="#solutions">Solutions</a>
                    <div className="sub-menu-wrap">
                      <ul className={classes.subMenu2}>{generateDeskTopSubMenu(solutions)}</ul>
                    </div>
                  </li>
                  <li>
                    <a href="#community">Community</a>
                    <div className="sub-menu-wrap">
                      <ul className={classes.subMenu2}>{generateDeskTopSubMenu(community)}</ul>
                    </div>
                  </li>
                  <li>
                    <Link href="https://marketplace.bookmap.com/">Marketplace</Link>
                    <div className="sub-menu-wrap">
                      <ul className={classes.subMenu2}>{generateDeskTopSubMenu(marketplace)}</ul>
                    </div>
                  </li>
                </ul>
              </div>
            </Fade>
          </li>
        </ul>
      </div>
    )
  }
  const displayDesktop = () => {
    return (
      <Container>
        <Box className={classes.toolbar}>
          {bookmapLogo}
          <Box>
            <ul className={classes.headerNav}>
              {headersData.map((v, index) => {
                return (
                  <li key={v.label}>
                    <a href={v.href} id={'hm' + index}>
                      {v.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </Box>
          {popUpMenu()}
          <Link href="https://bookmap.com/portal?_ga=2.113314319.926453304.1529908174-380305212.1526294084">
            <Box className={classes.loginBut}>
              <img src={'/static/header/my_account.svg'} alt={'LOG IN'} />
              <span> LOG IN</span>
            </Box>
          </Link>
          <Box>
            <LanguageSelector />
          </Box>
        </Box>
      </Container>
    )
  }
  const handleDrawerOpen = () =>
    setState((previousState) => ({ ...previousState, drawerOpen: true }))
  const handleDrawerClose = () =>
    setState((previousState) => ({ ...previousState, drawerOpen: false }))

  const displayMobile = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <Box sx={{ display: 'flex', flex: '0 1 auto' }}>{bookmapLogo}</Box>
        <IconButton
          {...{
            edge: 'start',
            color: 'secondary',
            display: 'flex',
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
          <div className={classes.drawerContainer}>
            <MenuItem>
              <img src={'/static/header/my_account.svg'} alt={'LOG IN'} />
              <span style={{ paddingLeft: '10px' }}>LOG IN</span>
            </MenuItem>
            {headersData.map(({ label, href }) => {
              return (
                <Link href={href} key={label}>
                  <MenuItem style={{ textTransform: 'uppercase' }} onClick={handleDrawerClose}>
                    {label}
                  </MenuItem>
                </Link>
              )
            })}
            <MenuItem>
              <MenuListComposition name="Resources" links={resources} />
            </MenuItem>
            <MenuItem>
              <MenuListComposition name="Products" links={products} />
            </MenuItem>
            <MenuItem>
              <MenuListComposition name="Solutions" links={solutions} />
            </MenuItem>
            <MenuItem>
              <MenuListComposition name="Community" links={community} />
            </MenuItem>
            <MenuItem>
              <MenuListComposition name="Marketplace" links={marketplace} />
            </MenuItem>
          </div>
        </Drawer>
      </Toolbar>
    )
  }

  const bookmapLogo = (
    <Link href="/">
      <img src={'/static/header/bookmap-logo.svg'} alt={'Bookmap'} height={18} />
    </Link>
  )

  return (
    <header>
      <AppBar
        className={classes.header}
        position={mobileView ? 'static' : 'fixed'}
        color={'default'}
      >
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  )
}

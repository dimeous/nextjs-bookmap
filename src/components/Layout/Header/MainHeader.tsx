import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  MenuItem,
  Typography,
  Fade,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useStyles } from './MainHeaderStyles'
import MenuListComposition from './toggleMenu'
import { headersData, resources, products, solutions, community, marketplace } from './menuLinks'

export default function Header() {
  const classes = useStyles()

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
    checked: true,
  })

  const { mobileView, drawerOpen } = state
  const [checked, setChecked] = React.useState(false)
  const handleChange = () => {
    setChecked((prev) => !prev)
  }

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 990
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }))
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
            <Typography
              className={checked ? classes.moreButtonAcitve : classes.moreButton}
              onClick={handleChange}
            >
              More
            </Typography>
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
      <Box className={classes.toolbar}>
        {bookmapLogo}
        <Box>
          <ul className={classes.headerNav}>
            {headersData.map((v) => {
              return (
                <li key={v.label}>
                  <Link href={v.href}>{v.label}</Link>
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
      </Box>
    )
  }

  const displayMobile = () => {
    const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }))
    const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }))

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
    <header color={'default'}>
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

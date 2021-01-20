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
const headersData = [
  {
    label: 'Features',
    href: '/#features',
  },
  {
    label: 'Connectivity',
    href: '/#connectivity',
  },
  {
    label: 'Pricing',
    href: '/#pricing',
  },
  {
    label: 'Education',
    href: '/#education',
  },
]

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
                        <ul className={classes.subMenu2}>
                          <li>
                            <a
                              target="_blank"
                              href="https://bookmap.com/knowledgebase/docs/KB-Welcome"
                              rel={'noreferrer'}
                            >
                              Knowledge base
                            </a>
                          </li>
                          <li>
                            <a href="https://bookmap.com/symbol-table/">Symbol Table</a>
                          </li>
                          <li>
                            <Link href="https://www.bookmap.com/knowledgebase/docs/KB-Help-Glossary">
                              Glossary
                            </Link>
                          </li>
                          <li>
                            <Link href="https://bookmap.com/educators/">Educators Directory</Link>
                          </li>
                          <li>
                            <Link href="https://www.youtube.com/playlist?list=PLzaGy-3oukoTy7FtXV9KbFZ7pVXVolYw_">
                              Pro Trader Webinars
                            </Link>
                          </li>
                          <li>
                            <Link href="https://bookmap.com/blog/">Blog</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link href="/#product">Product</Link>
                      <div className="sub-menu-wrap">
                        <ul className={classes.subMenu2}>
                          <li>
                            <Link href="https://bookmap.com/education/">Education</Link>
                          </li>
                          <li>
                            <a href="https://www.bookmap.com/knowledgebase/docs/KB-IntroductionToBookmap-Connectivity">
                              Connectivity Guide
                            </a>
                          </li>
                          <li>
                            <Link href="https://bookmap.com/features/">Features</Link>
                          </li>
                          <li>
                            <Link href="https://bookmap.com/packages-comparison/">
                              Pricing &amp; Packages
                            </Link>
                          </li>
                          <li>
                            <Link href="https://bookmap.com/partner/">Partners</Link>
                          </li>
                          <li>
                            <Link href="https://bookmap.com/referral/">Affiliates</Link>
                          </li>
                          <li>
                            <Link href="https://bookmap.com/faq/">FAQ</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#solutions">Solutions</a>
                      <div className="sub-menu-wrap">
                        <ul className={classes.subMenu2}>
                          <li>
                            <Link href="https://web.bookmap.com/?time=2021-01-13--17-39-04&amp;duration=1d&amp;prices=32092-35899.5">
                              Bookmap Web
                            </Link>
                          </li>
                          <li>
                            <Link href="https://bookmap.com/b2b/">Bookmap for Business</Link>
                          </li>
                          <li>
                            <Link href="https://bookmap.com/crypto/">Bookmap for Crypto</Link>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              href="https://bookmap.com/dxfeed/"
                              rel={'noreferrer'}
                            >
                              dxFeed Market Data
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              href="https://www.bookmap.com/knowledgebase/docs/API#the-quant-solution"
                              rel={'noreferrer'}
                            >
                              Quant solution
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              href="https://www.bookmap.com/knowledgebase/docs/API"
                              rel={'noreferrer'}
                            >
                              API
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#community">Community</a>
                      <div className="sub-menu-wrap">
                        <ul className={classes.subMenu2}>
                          <li>
                            <a href="https://discord.com/invite/FATgzfq7">Chatroom (Discord)</a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              href="https://www.bookmap.com/forum/viewforum.php?f=19"
                              rel={'noreferrer'}
                            >
                              Forum
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link href="https://marketplace.bookmap.com/">Marketplace</Link>
                      <div className="sub-menu-wrap">
                        <ul className={classes.subMenu2}>
                          <li>
                            <Link href="https://marketplace.bookmap.com/product-category/addons/">
                              Add-ons
                            </Link>
                          </li>
                          <li>
                            <Link href="https://marketplace.bookmap.com/product-category/services/market-data/">
                              Market Data
                            </Link>
                          </li>
                          <li>
                            <Link href="https://marketplace.bookmap.com/product-category/others/education/">
                              Education
                            </Link>
                          </li>
                          <li>
                            <Link href="https://marketplace.bookmap.com/product/mbo-bundle-beta-version/">
                              MBO Bundle
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </Fade>
            </li>
          </ul>
        </div>
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
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    )
  }

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link href={href} key={label}>
          <MenuItem>{label}</MenuItem>
        </Link>
      )
    })
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

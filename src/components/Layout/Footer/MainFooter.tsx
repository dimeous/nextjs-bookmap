import { Box, Container, makeStyles, MenuItem, MenuList } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'

import { community, marketplace, products, resources, solutions } from '../Header/menuLinks'
import MenuListComposition from './toggleMenu'
import TrustBoxFooter from './trustBoxFooter'

const useStyles = makeStyles(() => ({
  mainFooter: {
    background: '#1a1833',
    '& ul': {
      listStyle: 'none',
      margin: 0,
    },
    '& a': {
      color: '#fff',
      font: '14px/15px MullerMedium,sans-serif',
      letterSpacing: '1px',
      opacity: 1,
      transition: '.2s ease-out',
      textDecoration: 'none',
      textTransform: 'uppercase',
    },
  },
  underFooter: {
    color: '#a49dca',
    paddingBottom: '40px',
    font: '14px/19px MullerLight,sans-serif',
    '& a': {
      color: '#a49dca',
      font: '14px/19px MullerLight,sans-serif',
    },
  },
  general: {
    alignItems: 'flex-start',
    display: 'flex',
    flexFlow: 'row wrap',
    marginBottom: '90px',
    padding: '72px 0',
    color: '#fff',
  },
  generalNav: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    maxWidth: '220px',
    paddingRight: '80px',
    paddingLeft: 0,
    flexWrap: 'wrap',
    '& li': {
      marginBottom: '20px',
    },
  },
  generalFooterMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginRight: '50px',
    paddingLeft: '40px',
    '&:before': {
      backgroundColor: '#fff',
      content: '""',
      position: 'absolute',
      width: '1px',
      height: '290px',
      marginLeft: '-1%',
    },
  },
  subMenu: {
    paddingTop: '20px',
    paddingLeft: 0,
    '& a': {
      font: '14px/15px MullerLight,sans-serif',
      marginBottom: 0,
      whiteSpace: 'nowrap',
    },
    '& li': {
      width: 'auto',
      marginBottom: '10px',
    },
  },
  hasChildren: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginRight: '40px',
  },
  communicationBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  generalContacts: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    lineHeight: 1,
    margin: '0 0 30px!important',
    maxWidth: '220px',
    width: '100%',
    '& li': {
      marginBottom: '10px',
      width: '100%',
      '& a': {
        transition: '.2s ease-out',
        font: '16px/19px MullerLight,sans-serif',
        fontWeight: 400,
        textTransform: 'none',
      },
    },
  },
  generalSocials: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 0,
    maxWidth: '250px',
    width: 'auto',
    alignItems: 'center',
    '& li': {
      marginRight: '16px',
    },
  },
  SocialNormal: {
    opacity: 1,
    transition: '.2s linear',
    '&:hover': {
      opacity: 0,
    },
  },
  telegramIcon: {
    opacity: '0.7',
    transition: '.2s linear',
    '&:hover': {
      opacity: 1,
    },
  },
  SocialsHover: {
    position: 'absolute',
    marginLeft: '-25px',
    transition: '.2s linear',
    opacity: 0,
    '&:hover': {
      opacity: 1,
    },
  },
}))

type ElementProperties = {
  page?: string
}
const MainFooter = ({ page }: ElementProperties): React.ReactElement => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))
  const classes = useStyles()
  return (
    <footer className={classes.mainFooter}>
      <Container>
        <Box className={classes.general}>
          <Box sx={{ width: '72.6%', margin: '0 0 72px' }}>
            <NextLink href="/">
              <Image
                src="/static/main/bookmap-white.svg"
                width={200}
                height={23}
                alt="Bookmap Logo"
              />
            </NextLink>
          </Box>
          <Box sx={{ float: 'right', width: '22%', height: '126px' }}>
            <TrustBoxFooter light={false} />
          </Box>
          <ul className={classes.generalNav}>
            <li>
              <NextLink href="/#features">Features</NextLink>
            </li>
            <li>
              <NextLink href="/#connectivity">Connectivity</NextLink>
            </li>
            <li>
              <NextLink href="/#pricing">Pricing</NextLink>
            </li>
            <li>
              <NextLink href="/#education">Education</NextLink>
            </li>
          </ul>
          {mobile ? (
            <MenuList>
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
            </MenuList>
          ) : (
            <ul className={classes.generalFooterMenu}>
              <li className={classes.hasChildren}>
                <a href="#resources">Resources</a>
                <ul className={classes.subMenu}>
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
                    <NextLink href="https://bookmap.com/faq/">FAQ</NextLink>
                  </li>
                  <li>
                    <NextLink href="https://bookmap.com/symbol-table/">Symbol table</NextLink>
                  </li>
                  {page !== 'getbookmapnow' && (
                    <li>
                      <NextLink href="https://bookmap.com/pro-trader-webinars">
                        Pro Trader Webinars
                      </NextLink>
                    </li>
                  )}
                  <li>
                    <NextLink href="https://bookmap.com/educators/">Partner Educators</NextLink>
                  </li>

                  <li>
                    <NextLink href="https://bookmap.com/blog/">Blog</NextLink>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://bookmap.com/forum/viewforum.php?f=19"
                      rel={'noreferrer'}
                    >
                      Forum
                    </a>
                  </li>
                  <li>
                    <a href="https://bookmap.com/support/">Support</a>
                  </li>
                </ul>
              </li>
              <li className={classes.hasChildren}>
                <a href="#solutions">Solutions</a>
                <ul className={classes.subMenu}>
                  <li>
                    <a target="_blank" href="https://bookmap.com/dxfeed/" rel={'noreferrer'}>
                      US stocks data
                    </a>
                  </li>
                  <li>
                    <NextLink href="/crypto/">Bookmap Crypto</NextLink>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.bookmap.com/knowledgebase/docs/API"
                      rel={'noreferrer'}
                    >
                      Bookmap API
                    </a>
                  </li>
                </ul>
              </li>
              <li className={classes.hasChildren}>
                <a href="#b2b">BOOKMAP B2B</a>
                <ul className={classes.subMenu}>
                  <li>
                    <NextLink href="https://bookmap.com/b2b/">Bookmap®️ B2B</NextLink>
                  </li>
                  <li>
                    <NextLink href="https://web.bookmap.com/?time=2020-12-16--18-14-04&amp;duration=7d">
                      Bookmap Web
                    </NextLink>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://bookmap.com/wiki/Bookmap_API#Bookmap_Quant_solution"
                      rel={'noreferrer'}
                    >
                      Quant solution
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          )}
          <div className={classes.communicationBlock}>
            <ul className={classes.generalContacts}>
              <li>
                <a
                  href="https://www.google.com.ua/maps/search/6+Australias+Street+Limassol,+Cyprus/@34.6917358,32.9930904,13z/data=!3m1!4b1"
                  target="_blank"
                  rel={'noreferrer'}
                >
                  6 Australias Street Limassol, Cyprus
                </a>
              </li>
              <li>
                <a>
                  71 Cooper St Apt 2A <br />
                  New York, NY 10034
                </a>
              </li>
              <li>
                <a href="mailto:support@bookmap.com">support@bookmap.com</a>
              </li>
              <li>
                <a href="tel:19177088171">+1-917-708-8171</a>
              </li>
            </ul>
            <ul className={classes.generalSocials}>
              <li>
                <a
                  href="https://www.facebook.com/bookmappro/?ref=br_rs"
                  target="_blank"
                  rel={'noreferrer'}
                >
                  <img
                    src="/static/footer/facebook.svg"
                    className={classes.SocialNormal}
                    width={25}
                    height={25}
                    alt={'Facebook'}
                  />
                  <img
                    src="/static/footer/facebook-hover.svg"
                    className={classes.SocialsHover}
                    width={25}
                    height={25}
                    alt={'Facebook'}
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/bookmap_pro" target="_blank" rel={'noreferrer'}>
                  <img
                    src="/static/footer/twitter.svg"
                    width={25}
                    height={25}
                    className={classes.SocialNormal}
                    alt={'Twitter'}
                  />
                  <img
                    src="/static/footer/twitter-hover.svg"
                    width={25}
                    height={25}
                    className={classes.SocialsHover}
                    alt={'Twitter'}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC3HKlZ_7gxRgef9SCxu54Lw?sub_confirmation=1"
                  target="_blank"
                  rel={'noreferrer'}
                >
                  <img
                    src="/static/footer/youtube.svg"
                    width={25}
                    height={25}
                    className={classes.SocialNormal}
                    alt={'Youtube'}
                  />
                  <img
                    src="/static/footer/youtube-hover.svg"
                    className={classes.SocialsHover}
                    width={25}
                    height={25}
                    alt={'Youtube'}
                  />
                </a>
              </li>
              <li>
                <a href="https://t.me/bookmap_trading" target="_blank" rel={'noreferrer'}>
                  <img
                    src="/static/footer/telegram.svg"
                    width={25}
                    height={25}
                    className={classes.telegramIcon}
                    alt={'Bookmap Telegram'}
                  />
                </a>
              </li>
              <li>
                <a href="https://discord.gg/prjSDDupYh" target="_blank" rel={'noreferrer'}>
                  <img
                    src="/static/footer/discord.svg"
                    width={25}
                    height={25}
                    alt={'Bookmap Chatroom'}
                  />
                </a>
              </li>
            </ul>
          </div>
        </Box>
      </Container>
      <Container>
        <div className={classes.underFooter}>
          <p>All rights reserved, Bookmap Ltd.</p>
          <p>
            RISK DISCLOSURE: Futures trading contains substantial risk and is not for every
            investor. An investor could potentially lose all or more than the initial investment.
            Risk capital is money that can be lost without jeopardizing one{"'"}s financial security
            or lifestyle. Only risk capital should be used for trading and only those with
            sufficient risk capital should consider trading. Past Performance is not necessarily
            indicative of future results.
            <span>
              <a
                href="/disclaimer?_ga=2.205521747.1942071470.1524510166-17895590.1515004321"
                target="_blank"
              >
                Full Disclaimer
              </a>
            </span>{' '}
            |
            <span>
              <a
                href="/privacy-policy/?_ga=2.205521747.1942071470.1524510166-17895590.1515004321"
                target="_blank"
              >
                Privacy Policy
              </a>
            </span>
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default MainFooter

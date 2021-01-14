import { makeStyles, Box, Container } from '@material-ui/core'
import Image from 'next/image'
import NextLink from 'next/link'

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
  general: {
    alignItems: 'flex-start',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flexStart',
    marginBottom: '90px',
    padding: '72px 0',
    color: '#fff',
  },
  generalNav: {
    alignItems: 'flexStart',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flexStart',
    margin: 0,
    maxWidth: '220px',
    paddingRight: '80px',
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
      height: '340px',
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
}))

export default function Footer() {
  const classes = useStyles()
  return (
    <footer className={classes.mainFooter}>
      <Container>
        <Box className={classes.general}>
          <Box sx={{ width: '77.6%', margin: '0 0 72px' }}>
            <NextLink href="/">
              <Image
                src="/static/main/bookmap-white.svg"
                width={200}
                height={23}
                alt="Bookmap Logo"
              />
            </NextLink>
          </Box>
          <Box sx={{ float: 'right', width: '22%', height: '126px' }}>Trust pilot</Box>
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
          <ul className={classes.generalFooterMenu}>
            <li className={classes.hasChildren}>
              <NextLink href="#resources">Resources</NextLink>
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
                <li>
                  <NextLink href="https://bookmap.com/pro-trader-webinars/">
                    Pro Trader Webinars
                  </NextLink>
                </li>
                <li>
                  <NextLink href="https://bookmap.com/educators/">Partner Educators</NextLink>
                </li>
                <li>
                  <NextLink href="https://bookmap.com/blog/">Blog</NextLink>
                </li>
                <li>
                  <a target="_blank" href="/forum/viewforum.php?f=19" rel={'noreferrer'}>
                    Forum
                  </a>
                </li>
              </ul>
            </li>
            <li className={classes.hasChildren}>
              <NextLink href="#solutions">Solutions</NextLink>
              <ul className={classes.subMenu}>
                <li>
                  <a target="_blank" href="https://bookmap.com/dxfeed/" rel={'noreferrer'}>
                    US stocks data
                  </a>
                </li>
                <li>
                  <NextLink href="https://bookmap.com/crypto/">Bookmap Crypto</NextLink>
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
              <NextLink href="#b2b">BOOKMAP B2B</NextLink>
              <ul className={classes.subMenu}>
                <li>
                  <NextLink href="https://bookmap.com/b2b/">BOOKMAP FOR BUSINESS</NextLink>
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
                  >
                    Quant solution
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="communicationBlock">
            <ul className="general__contacts">
              <li>
                <a
                  href="https://www.google.com.ua/maps/search/6+Australias+Street+Limassol,+Cyprus/@34.6917358,32.9930904,13z/data=!3m1!4b1"
                  target="_blank"
                >
                  6 Australias Street Limassol, Cyprus
                </a>
              </li>
              <li>
                <a target="_blank">
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
            <ul className="generalSocials">
              <li>
                <a href="https://www.facebook.com/bookmappro/?ref=br_rs" target="_blank">
                  <img
                    src="https://bookmap.com/wp-content/themes/bookmap/assets/images/footer-icons/facebook.svg"
                    className="SocialNormal"
                  />
                  <img
                    src="https://bookmap.com/wp-content/themes/bookmap/assets/images/main-page/icons/facebook-active-white.svg"
                    className="SocialsHover"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/bookmap_pro" target="_blank">
                  <img
                    src="https://bookmap.com/wp-content/themes/bookmap/assets/images/footer-icons/twitter.svg"
                    className="SocialNormal"
                  />
                  <img
                    src="https://bookmap.com/wp-content/themes/bookmap/assets/images/main-page/icons/twitter-active-white.svg"
                    className="SocialsHover"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC3HKlZ_7gxRgef9SCxu54Lw?sub_confirmation=1"
                  target="_blank"
                >
                  <img
                    src="https://bookmap.com/wp-content/themes/bookmap/assets/images/footer-icons/youtube.svg"
                    className="SocialNormal"
                  />
                  <img
                    src="https://bookmap.com/wp-content/themes/bookmap/assets/images/main-page/icons/youtube-active-white.svg"
                    className="SocialsHover"
                  />
                </a>
              </li>
            </ul>
          </div>
        </Box>
      </Container>
    </footer>
  )
}

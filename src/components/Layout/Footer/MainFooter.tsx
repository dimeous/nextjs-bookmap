import {
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  MenuItem,
  Link,
  Box,
  Container,
} from '@material-ui/core'
import Image from 'next/image'
import NextLink from 'next/link'

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
  mainFooter: {
    background: '#1a1833',
  },
  general: {
    alignItems: 'flex-start',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flexStart',
    marginBottom: '90px',
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
    '& li': {},
  },
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <footer className={classes.mainFooter}>
      <Container>
        <Box className={classes.general}>
          <Box sx={{ width: '77.6%' }}>
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
          <ul className="generalNav">
            <li className="menuItem">
              <NextLink href="/#features">Features</NextLink>
            </li>
            <li className="menuItem">
              <NextLink href="/#connectivity">Connectivity</NextLink>
            </li>
            <li className="menuItem">
              <NextLink href="/#pricing">Pricing</NextLink>
            </li>
            <li className="menuItem">
              <NextLink href="/#education">Education</NextLink>
            </li>
          </ul>
        </Box>
      </Container>
    </footer>
  )
}

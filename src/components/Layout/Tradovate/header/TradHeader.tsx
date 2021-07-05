import { AppBar, Box, Button, Container, Typography } from '@material-ui/core'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import { getUTMUrlDependsOnPage } from '../../../../lib'
import LanguageSelector from '../../Header/language-selector'
import { useStyles } from './TradHeaderStyles'

type ElementProperties = {
  page?: string
}

const TradHeader = ({ page }: ElementProperties): React.ReactElement => {
  const classes = useStyles()
  const addToLink = getUTMUrlDependsOnPage(page)

  return (
    <header>
      <AppBar className={classes.header} position={'static'} color={'default'}>
        <Container fixed sx={{ p: [2, 0, 0, 3] }}>
          <Box className={classes.toolbar}>
            <Link href="/">
              <Box>
                <Link href={'https://bookmap.com/' + addToLink}>
                  <img src={'/static/header/bookmap-logo.svg'} alt={'Bookmap'} height={18} />
                </Link>
              </Box>
            </Link>
            <Box sx={{ display: 'flex' }}>
              <Box>
                <LanguageSelector />
              </Box>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </header>
  )
}

export default TradHeader

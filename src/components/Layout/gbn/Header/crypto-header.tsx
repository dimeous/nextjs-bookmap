import { AppBar, Box, Button, Container, Typography } from '@material-ui/core'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { getUTMUrlDependsOnPage } from '../../../../lib'
import LanguageSelector from '../../Header/language-selector'
import { useStyles } from './crypto-header-styles'

type ElementProperties = {
  page?: string
  mobile: boolean
}
const CryptoHeader = ({ page, mobile }: ElementProperties): React.ReactElement => {
  const classes = useStyles()
  const { t } = useTranslation('gbn')
  const displayDesktop = () => {
    const addToLink = getUTMUrlDependsOnPage(page)
    const addToLink2 = getUTMUrlDependsOnPage(page, true)
    return (
      <Container fixed sx={{ p: [2, 0, 0, 2] }}>
        <Box className={classes.toolbar}>
          <Link href="/">
            <Box>
              <Link href={'https://bookmap.com/' + addToLink}>
                <img src={'/static/header/bookmap-logo.svg'} alt={'Bookmap'} height={18} />
              </Link>
            </Box>
          </Link>
          <Box sx={{ display: 'flex' }}>
            {!mobile && (
              <Box sx={{ pr: 1 }}>
                <Button
                  href={t('HBtnLinkSubsForFree') + addToLink2}
                  className={classes.button}
                  id={'gbn _header_get_it_now'}
                >
                  {t('CHSubscribeforfree')}
                </Button>
              </Box>
            )}
            <Box>
              <LanguageSelector />
            </Box>
          </Box>
        </Box>
      </Container>
    )
  }

  return (
    <header>
      <AppBar className={classes.header} position={'static'} color={'default'}>
        {displayDesktop()}
      </AppBar>
    </header>
  )
}
export default CryptoHeader

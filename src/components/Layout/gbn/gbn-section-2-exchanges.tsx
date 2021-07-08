import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { getUTMUrlDependsOnPage, isGetBookMapNow } from '../../../lib'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: '32px',
    backgroundColor: theme.palette.background.paper,
    '& h3': {
      [theme.breakpoints.up('md')]: {
        fontSize: '32px',
        paddingRight: '10%',
      },
    },
  },
  link: {
    width: '100%',
    textAlign: 'right',
    marginTop: '20px',
    paddingRight: '8%',
  },
  imageItem: {
    height: '85px',
    maxWidth: '210px',
    margin: '25px 40px 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    '@media (max-width: 991px)': {
      margin: '10px 10px',
    },
  },

}))

type ElementProperties = {
  page?: string
}

const GbnSection2Exchanges = ({ page }: ElementProperties): React.ReactElement => {
  const classes = useStyles()
  const addToLink = getUTMUrlDependsOnPage(page)
  const { t } = useTranslation(page ? 'gbn' : 'crypto')
  return (
    <Container fixed className={classes.root}>
      <div id="connectivity" style={{ position: 'absolute', marginTop: '-140px' }}></div>
      <Typography variant={'h2'} component={'h2'}>
        <span
          dangerouslySetInnerHTML={{
            __html: t(
              isGetBookMapNow(page)
                ? 'CS2GBNConnectToOver20DigitalCurrencyExchanges'
                : 'CS2ConnectToOver20Crypto',
              {
                interpolation: { escapeValue: false },
              }
            ),
          }}
        />
      </Typography>


      <Box className={classes.link}>
        <Link
          href={
            'https://bookmap.com/knowledgebase/docs/KB-IntroductionToBookmap-Connectivity' +
            addToLink +
            '#crypto-connectivity'
          }
          color="secondary"
          target={'_blank'}
          rel={'noreferrer'}
        >
          {isGetBookMapNow(page)
            ? t('CS2GBNSeeConnectivityGuide')
            : t('CS2SeeCryptoConnectivityGuide')}
        </Link>
      </Box>
    </Container>
  )
}

export default GbnSection2Exchanges

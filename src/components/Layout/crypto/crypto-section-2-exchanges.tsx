import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import { Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { ThemeClasses } from '../../../theme/theme-styles'
import CryptoConnectivity from '../../common/crypto-connectivity'

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
  imageItem: ThemeClasses.connectivityClasses.imageItem,
}))

const CryptoSection2Exchanges = (): React.ReactElement => {
  const classes = useStyles()
  const { t } = useTranslation('crypto')
  return (
    <Container fixed className={classes.root}>
      <div id="connectivity" style={{ position: 'absolute', marginTop: '-140px' }}></div>
      <Typography variant={'h2'} component={'h2'}>
        <span
          dangerouslySetInnerHTML={{
            __html: t('CS2ConnectToOver20Crypto', {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      </Typography>
      <CryptoConnectivity />
      <Box className={classes.link}>
        <Link
          href={
            'https://bookmap.com/knowledgebase/docs/KB-IntroductionToBookmap-Connectivity' +
            '#crypto-connectivity'
          }
          color="secondary"
          target={'_blank'}
          rel={'noreferrer'}
        >
          {t('CS2SeeCryptoConnectivityGuide')}
        </Link>
      </Box>
    </Container>
  )
}

export default CryptoSection2Exchanges

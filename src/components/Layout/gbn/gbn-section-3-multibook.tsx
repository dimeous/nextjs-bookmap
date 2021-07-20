import { Button, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { getUTMUrlDependsOnPage } from '../../../lib'
import { ThemeColors } from '../../../theme/theme-styles'
import TwoColumnsTextPicture from '../../common/two-columns/text-picture'

type ElementProperties = {
  page?: string
}

const useStyles = makeStyles(() => ({
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    '& ul>li': {
      fontFamily: 'MullerMedium, sans-serif',
    },
  },
  title: {
    fontFamily: 'MullerMedium, sans-serif',
    color: ThemeColors.DarkBlue,
  },
}))

const GbnSection3Multibook = ({ page }: ElementProperties): React.ReactElement => {
  const classes = useStyles()
  const { t } = useTranslation('gbn')
  const addToLink = getUTMUrlDependsOnPage(page, true)
  const text = (
    <Container className={classes.textBlock}>
      <Typography
        component="h2"
        variant="h2"
        color="inherit"
        gutterBottom
        className={classes.title}
      >
        {t('CS3NewAddonMultiBook')}
      </Typography>
      <Typography
        component="h5"
        variant="h5"
        color="inherit"
        gutterBottom
        sx={{ color: ThemeColors.DarkBlue, fontWeight: 800 }}
      >
        {t('CS3BinanceCoinbaseHuobiMultibook')}
      </Typography>
      <Typography color="inherit" paragraph>
        {t('CS3GBNCreateSyntheticInstrumentsASeeMultipleDigitalAssets ')}
      </Typography>
      <div
        dangerouslySetInnerHTML={{
          __html: t('CS3GBNSeeMarketliquidityAExecutionVolume', {
            interpolation: { escapeValue: false },
          }),
        }}
      />
      <Button href={t('CS3BtnLink') + addToLink} sx={{ width: '300px' }}>
        {t('CS3GetMultiBookwithDigitalPlus')}
      </Button>
    </Container>
  )
  const picture = {
    src: '/static/gbn/s3/pic.png',
    width: 636,
    height: 350,
    alt: 'multibook',
  }
  const options = {
    rootSx: {
      backgroundColor: ThemeColors.BGGrey,
    },
    containerSx: {
      paddingTop: '75px',
      paddingBottom: '75px',
    },
  }
  return <TwoColumnsTextPicture text={text} picture={picture} options={options} />
}
export default GbnSection3Multibook

import { Box, Button, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { getUTMUrlDependsOnPage } from '../../../lib'
import { ThemeColors, ThemeElements } from '../../../theme/theme-styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    ...ThemeElements.rootBlockProps,
    backgroundColor: ThemeColors.BGGrey,
    [theme.breakpoints.down('md')]: {
      ...ThemeElements.rootMobileBlockProps,
    },
  },
  container: {
    paddingTop: '75px',
    paddingBottom: '75px',
  },
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
  picCard: {
    width: '100%',
    marginTop: 'auto',
    marginBottom: 'auto',
    height: '340px',
    [theme.breakpoints.down('md')]: {
      marginTop: '32px',
      height: 'auto',
    },
  },
  pic: {
    borderRadius: '10px',
  },
}))

type ElementProperties = {
  page?: string
}
const GbnSection3Multibook = ({ page }: ElementProperties): React.ReactElement => {
  const classes = useStyles()
  const { t } = useTranslation('gbn')
  const addToLink = getUTMUrlDependsOnPage(page, true)
  return (
    <div className={classes.root}>
      <Container fixed className={classes.container}>
        <Grid container>
          <Grid item md={6} xs={12}>
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
          </Grid>
          <Grid item md={6} xs={12}>
            <Box className={classes.picCard}>
              <Box>
                <Image
                  src={'/static/gbn/s3/pic.png'}
                  alt={'multibook'}
                  width={636}
                  height={350}
                  layout="intrinsic"
                  className={classes.pic}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
export default GbnSection3Multibook

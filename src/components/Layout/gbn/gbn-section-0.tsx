import { Button, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { getUTMUrlDependsOnPage, isGetBookMapNow } from '../../../lib'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#1e262d',
    paddingTop: '30px',
    marginBottom: '145px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '24px',
      paddingTop: 0,
    },
    [theme.breakpoints.up('md')]: {
      minHeight: '450px',
    },
  },
  headPlatform: {
    paddingTop: '70px',
    fontSize: '32px',
    [theme.breakpoints.down('lg')]: {
      paddingTop: '27px',
      font: '32px/40px MullerLight,sans-sanserif',
      letterSpacing: '1.41px',
    },
  },
  secondTitle: {
    fontSize: '32px',
    display: 'block',
    lineHeight: '39px',
    paddingTop: '10px',
    paddingBottom: '32px',
    color: '#0085f9',
    fontFamily: 'MullerMedium',
  },
  button: {
    width: '230px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '16px',
    },
  },
}))

type CardProperties = {
  mobile: boolean
  page?: string
}

const GbnSection0 = ({ mobile, page }: CardProperties): React.ReactElement => {
  const classes = useStyles()
  const { t } = useTranslation('crypto')
  const addToLink = getUTMUrlDependsOnPage(page)
  return (
    <>
      <div className={classes.root}>
        <Container className={classes.root} maxWidth="lg">
          <Grid container>
            <Grid item md={6} xs={12}>
              <Typography
                component="h1"
                variant="h1"
                color="primary"
                gutterBottom
                className={classes.headPlatform}
              >
                {t('CS0MultibookIsyoursatNoAdditionalCost')}
              </Typography>
              <Typography component="h4" variant="h4" className={classes.secondTitle}>
                {isGetBookMapNow(page)
                  ? t('CS0GBNChoosefrom20digitalAssetsExchangesSeeMultipleO')
                  : t('CS0Choosefrom20cryptoExchangesSeeMultipleOrder')}
              </Typography>
              {!mobile && (
                <Button
                  id={'main_top_start_for_free'}
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                  href={'https://bookmap.com/members/signup/gv3uiH6Hi' + addToLink}
                >
                  {t('CS0GetMultibook')}
                </Button>
              )}
            </Grid>
            <Grid item md={6} xs={12}>
              <div style={{ paddingTop: '16px' }}>
                <Image
                  src="/static/main/s0/toppic.png"
                  alt="Bookmap chart"
                  layout="responsive"
                  height={458}
                  width={800}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      {mobile && (
        <Grid
          xs={12}
          style={{
            textAlign: 'center',
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            href={'https://bookmap.com/members/signup/gv3uiH6Hi' + addToLink}
            className={classes.button}
            id={'main_top_start_for_free'}
          >
            {t('CS0GetMultibook')}
          </Button>
        </Grid>
      )}
    </>
  )
}
export default GbnSection0

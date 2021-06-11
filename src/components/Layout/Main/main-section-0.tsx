import { Button, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import React, { useEffect, useState } from 'react'

import styles from './main-section-0.module.css'

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
  outer: {
    position: 'relative',
    width: '100%',
  },

  inner: {
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%',
    top: 0,
  },

  media: {
    width: '100%',
  },
  headTradePlatform: {
    paddingTop: '70px',
    [theme.breakpoints.down('lg')]: {
      paddingTop: '27px',
      font: '32px/40px MullerLight,sans-sanserif',
      letterSpacing: '1.41px',
    },
  },
  secondTitle: {
    fontSize: '38px',
    display: 'block',
    lineHeight: '39px',
    paddingTop: '10px',
    paddingBottom: '10px',
    color: '#0085f9',
    fontFamily: 'MullerMedium',
  },
  bImage: {
    height: '100%',
    display: 'grid',
  },
  backImage: {
    height: '100%',
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
}

const MainSection0 = ({ mobile }: CardProperties) => {
  const { t } = useTranslation('main')
  const [width, setWidth] = useState(0)
  const elementReference = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const { current } = elementReference
    if (current) setWidth(current.getBoundingClientRect().width)
  }, [])

  const classes = useStyles()
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
                className={classes.headTradePlatform}
              >
                {t('MS0AtradingPlatformThatDisplaysML')}
              </Typography>
              <Typography component="h4" variant="h4" className={classes.secondTitle}>
                {t('MS0NEWlivetradingSsessionsWithproTraders')}
              </Typography>
              <Typography color="primary" paragraph>
                {t('MS0ForGlobalPlusSubscribers')}
              </Typography>
              {!mobile && (
                <Button
                  id={'main_top_start_for_free'}
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                  href="https://bookmap.com/members/signup/thAhOgYUg"
                >
                  {t('MS0STARTFORFREE')}
                </Button>
              )}
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={classes.outer} ref={elementReference}>
                <Image
                  src="/static/main/bg-cr.png"
                  alt="Bookmap chart"
                  layout="responsive"
                  height={1300}
                  width={1875}
                  className={classes.backImage}
                />
                <div className={classes.inner}>
                  <div className={styles.slideranimated}>
                    <div className={classes.bImage} style={{ width: width }}>
                      <Image
                        src="/static/main/overlay-sec1.png"
                        alt="Bookmap chart"
                        height={1300}
                        width={1875}
                      />
                    </div>
                  </div>
                </div>
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
            href="https://bookmap.com/members/signup/thAhOgYUg"
            className={classes.button}
            id={'main_top_start_for_free'}
          >
            {t('MS0STARTFORFREE')}
          </Button>
        </Grid>
      )}
    </>
  )
}
export default MainSection0

import React from 'react'
import styles from './MainSection0.module.css'
import { Typography, makeStyles, Button } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#1e262d',
    marginBottom: '145px',
  },
  media: {
    height: '500px',
    width: '100%',
  },
  headTradePlatform: {
    paddingTop: '70px',
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
    width: '616px',
    display: 'grid',
  },
  backImage: {
    height: '100%',
  },
  button: {
    width: '230px',
  },
}))

export default function MainSection0() {
  const classes = useStyles()
  return (
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
              A trading platform that displays market liquidity
            </Typography>
            <Typography component="h4" variant="h4" className={classes.secondTitle}>
              NEW: live trading sessions with pro traders
            </Typography>
            <Typography color="primary" paragraph>
              for Global/Global+ subscribers
            </Typography>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              href="https://bookmap.com/members/signup/thAhOgYUg"
            >
              START FOR FREE
            </Button>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className={styles.outer}>
              <Image
                src="/static/main/bg-cr.png"
                alt="Bookmap chart"
                layout="responsive"
                height={1200}
                width={1875}
                className={classes.backImage}
              />
              <div className={styles.inner}>
                <div className={styles.slideranimated}>
                  <div className={classes.bImage}>
                    <Image
                      src="/static/main/overlay-sec1.png"
                      alt="Bookmap chart"
                      height={1200}
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
  )
}

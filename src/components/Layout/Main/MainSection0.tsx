import React from 'react'
import styles from './MainSection0.module.css'
import { Typography, makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#1e262d',
  },
  media: {
    height: '500px',
    width: '100%',
  },
  headTradePlatform: {
    paddingTop: '120px',
  },
  secondTitle: {
    color: theme.palette.secondary.light,
  },
  bImage: {
    height: '100%',
    display: 'grid',
  },
  backImage: {
    height: '100%',
  },
}))

export default function MainSection0() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container className={classes.root} maxWidth="lg">
        <Grid container>
          <Grid item md={6}>
            <Typography
              component="h1"
              variant="h2"
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
          </Grid>
          <Grid item md={6}>
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
            {/*
            <CardMedia
              className={classes.media}
              image="/static/main/bg-cr.png"
              title="Bokmap Chart"
            />
            <div
              className={styles.slideranimated}
              style={{ backgroundImage: `url('/static/main/overlay-sec1.png')`, zIndex: 1 }}
            >
              </div>
                */}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

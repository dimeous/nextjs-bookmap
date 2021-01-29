import React, { useEffect, useRef, useState } from 'react'
import styles from '../Main/MainSection0.module.css'
import { Typography, makeStyles, Button } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
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
    paddingTop: '110px',
    [theme.breakpoints.down('md')]: {
      paddingTop: '27px',
      font: '32px/40px MullerLight,sans-sanserif',
      letterSpacing: '1.41px',
    },
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

type CardProps = {
  mobile: boolean
}

export default function CryptoSection0({ mobile }: CardProps) {
  const [width, setWidth] = useState(0)
  const elementRef = useRef(null)

  useEffect(() => {
    setWidth(elementRef.current.getBoundingClientRect().width)
  }, [])

  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <Container className={classes.root} maxWidth="lg">
          <Grid container>
            <Grid item md={6} xs={12}>
              <Container>
                <Typography
                  component="h1"
                  variant="h1"
                  color="primary"
                  gutterBottom
                  className={classes.headTradePlatform}
                >
                  See market liquidity in real-time and gain a competitive advantage
                </Typography>
                {!mobile && (
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="secondary"
                    href="https://bookmap.com/members/signup/thAhOgYUg"
                    sx={{ mt: 7 }}
                  >
                    Subscribe for free
                  </Button>
                )}
              </Container>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={styles.outer}>
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
          >
            Subscribe for free
          </Button>
        </Grid>
      )}
    </>
  )
}

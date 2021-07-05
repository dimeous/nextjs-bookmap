import { Button, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import styles from './TradSection1.module.css'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#1e262d',
    paddingTop: '0px',
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
    fontSize: '38px',
    color: 'white',
    [theme.breakpoints.down('lg')]: {
      paddingTop: '27px',
      font: '32px/40px MullerLight,sans-sanserif',
      letterSpacing: '1.41px',
    },
  },
  secondTitle: {
    fontSize: '18px',
    display: 'block',
    lineHeight: '26px',
    paddingTop: '10px',
    paddingBottom: '32px',
    color: 'white',
  },
  button: {
    width: '230px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '16px',
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
  bImage: {
    height: '100%',
    display: 'grid',
  },
  backImage: {
    height: '100%',
  },
}))

type CardProperties = {
  page?: string
}

const TradSection1 = ({ page }: CardProperties): React.ReactElement => {
  const classes = useStyles()

  const [width, setWidth] = useState(0)
  const elementReference = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const { current } = elementReference
    if (current) setWidth(current.getBoundingClientRect().width)
  }, [])

  return (
    <>
      <div className={classes.root}>
        <Container className={classes.root} maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <Typography component="h1" variant="h1" gutterBottom className={classes.headPlatform}>
                No Commissions or fees for trading FairX futures with Bookmap
              </Typography>
              <Typography variant="body1" className={classes.secondTitle}>
              Want to get access to smaller futures contracts with no commissions or fees? Well then,
               you’ve come to the right place.
              </Typography>
              {
                <Button
                  id={'main_top_start_for_free'}
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                  href={'https://bookmap.com/members/signup/C0ogLHLr'}
                >
                  Get Bookmap for FairX
                </Button>
              }
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
    </>
  )
}
export default TradSection1

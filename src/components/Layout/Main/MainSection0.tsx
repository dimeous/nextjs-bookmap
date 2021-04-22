import React from 'react'
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

export default function MainSection0({ mobile }: CardProps) {
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
                A trading platform that displays market liquidity
              </Typography>
              <Typography component="h4" variant="h4" className={classes.secondTitle}>
                NEW: live trading sessions with pro traders
              </Typography>
              <Typography color="primary" paragraph>
                for Global+ subscribers
              </Typography>
              {!mobile && (
                <Button
                  id={'main_top_start_for_free'}
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                  href="https://bookmap.com/members/signup/thAhOgYUg"
                >
                  START FOR FREE
                </Button>
              )}
            </Grid>
            <Grid item md={6} xs={12}>
              <div style={{ paddingTop: '16px' }}>
                <Image
                  src="/static/main/s0/toppic.png"
                  alt="Bookmap chart"
                  layout="responsive"
                  height={373}
                  width={636}
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
            href="https://bookmap.com/members/signup/thAhOgYUg"
            className={classes.button}
            id={'main_top_start_for_free'}
          >
            START FOR FREE
          </Button>
        </Grid>
      )}
    </>
  )
}

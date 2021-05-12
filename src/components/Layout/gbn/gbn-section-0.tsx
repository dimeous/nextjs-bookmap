import { Button, makeStyles, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'
import React from 'react'

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

export default function GbnSection0({ mobile, page }: CardProperties) {
  const classes = useStyles()
  const addToLink =
    page === 'getbookmapnow'
      ? '?utm_medium=ppc&utm_source=google&utm_campaign=Multibook_new_landing&utm_content=New_landing'
      : ''
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
                Multibook is yours at no additional cost with any paid subscription
              </Typography>
              <Typography component="h4" variant="h4" className={classes.secondTitle}>
                Choose from 20+ {page === 'getbookmapnow' ? 'digital assets' : 'crypto'} exchanges,
                see multiple order books in one heatmap.
              </Typography>
              {!mobile && (
                <Button
                  id={'main_top_start_for_free'}
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                  href="https://bookmap.com/members/signup/gv3uiH6Hi"
                >
                  Get Multibook
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
            href={`"https://bookmap.com/members/signup/gv3uiH6Hi"+${addToLink}`}
            className={classes.button}
            id={'main_top_start_for_free'}
          >
            Get Multibook
          </Button>
        </Grid>
      )}
    </>
  )
}

import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '145px',
    [theme.breakpoints.down('md')]: {
      marginTop: '110px',
      marginBottom: '120px',
    },
  },
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  },
}))

export default function CryptoSection1() {
  const list = [
    'View full-depth historical data with the dynamic heatmap',
    'Watch the battle between buyers and sellers in 3D with traded volume visualization',
    'Master the order flow with advanced education, live trading webinars and more',
    'Identify trends and intentions of others with unique indicators',
    'Use Bookmap in real-time, or in replay to debrief your trading sessions',
  ]
  const classes = useStyles()
  return (
    <Container fixed className={classes.root}>
      <Grid container>
        <Grid item md={12} xs={12}>
          <Container className={classes.textBlock}>
            <Typography component="h2" variant="h2" color="inherit" gutterBottom>
              Bookmap<span>®</span>️ is the leading data visualization and trading platform, showing
              what exactly is happening in the market to help crypto traders make informed trading
              decisions
            </Typography>
          </Container>
        </Grid>
        <Grid item md={12} xs={12}></Grid>
      </Grid>
    </Container>
  )
}

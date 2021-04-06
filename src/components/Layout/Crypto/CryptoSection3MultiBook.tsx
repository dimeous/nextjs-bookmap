import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#E6ECEF',
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
  title: {
    fontFamily: 'MullerMedium, sans-serif',
  },
}))

export default function CryptoSection3MultiBook() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container fixed>
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
                New! Multibook
              </Typography>
              <Typography component="h5" variant="h5" color="inherit" gutterBottom>
                One pair across multiple exchanges
              </Typography>
              <Typography color="inherit" paragraph>
                A new feature available in Digital+ allows you to view a consolidated order book and
                traded volume in real-time from multiple exchanges.
              </Typography>
              <Typography component="h3" variant="h3" color="secondary" gutterBottom>
                Main benefits:
              </Typography>
              <div>
                <ul>
                  <li>
                    See market liquidity and traded volume of the largest exchanges in a single
                    chart.
                  </li>
                  <li>View total volume delta across multiple exchanges.</li>
                  <li>Watch Best Bid and Offer from multiple exchanges.</li>
                  <li>Build your own synthetic instrument.</li>
                </ul>
              </div>
            </Container>
          </Grid>
          <Grid item md={6} xs={12}></Grid>
        </Grid>
      </Container>
    </div>
  )
}

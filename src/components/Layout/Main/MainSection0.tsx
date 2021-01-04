import React from 'react'
import { Typography, makeStyles, CardMedia } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

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
          </Grid>
          <Grid item md={6}>
            <CardMedia
              className={classes.media}
              image="/static/main/bg-cr.png"
              title="Bokmap Chart"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

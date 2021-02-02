import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ReactPlayer from 'react-player/lazy'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '145px',
    [theme.breakpoints.down('md')]: {
      marginTop: '110px',
      marginBottom: '120px',
    },
  },
  wrapper: {
    position: 'relative',
    paddingTop: '56.25%',
    borderRadius: '20px',
    overflow: 'hidden',
  },
  player: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  },
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  },
}))

export default function MainSection1() {
  const classes = useStyles()
  return (
    <Container fixed className={classes.root}>
      <Grid container>
        <Grid item md={6} xs={12}>
          <Container className={classes.textBlock}>
            <Typography component="h1" variant="h2" color="inherit" gutterBottom>
              So, what is Bookmap?
            </Typography>
            <Typography color="inherit" paragraph>
              Bookmap<span>®</span>️ trading platform accurately shows the entire market liquidity
              and trading activities. Identify market trends & hidden price patterns with high
              precision.
            </Typography>
          </Container>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className={classes.wrapper}>
            <ReactPlayer
              url="https://youtu.be/387ouy6QGPI"
              controls
              width="100%"
              height="100%"
              className={classes.player}
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

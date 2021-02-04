import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ReactPlayer from 'react-player/lazy'
import Image from 'next/image'

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
  youtubePre: {
    borderRadius: '10px',
    cursor: 'pointer',
    height: '340px',
    [theme.breakpoints.down('md')]: {
      height: '200px',
    },
    overflow: 'hidden',
    position: 'relative',
    '&:hover': {
      fill: 'red !important',
      fillOpacity: '1 !important',
      playButton: {
        background: 'red!important',
      },
    },
  },
  playButton: {
    height: '48px',
    position: 'absolute',
    width: '68px',
    zIndex: 3,
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
  },
  youtubePoster: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: '10px',
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
  const [checked, setChecked] = React.useState(false)
  const handleClick = () => {
    setChecked(true)
  }
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
          {checked && (
            <div className={classes.wrapper}>
              <ReactPlayer
                url="https://youtu.be/387ouy6QGPI"
                controls
                width="100%"
                height="100%"
                className={classes.player}
                playing={true}
              />
            </div>
          )}
          {!checked && (
            <div className={classes.youtubePre}>
              <div className={classes.youtubePoster}>
                <Image
                  src="/static/main/s1/youtube.png"
                  width={800}
                  height={450}
                  onClick={handleClick}
                  alt="Youtube: Bookmap - 2 minutes introduction of hidden values"
                  className={classes.image}
                />
                <button className={classes.playButton} onClick={handleClick}>
                  <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                    <path
                      d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                      fillOpacity="0.8"
                    ></path>
                    <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

import React from 'react'
import { makeStyles, Box, Card, CardMedia, CardContent, Button } from '@material-ui/core'
import Container from '@material-ui/core/Container'

import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  cTreeSteps: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 991px)': {
      paddingLeft: 0,
      flexDirection: 'column',
    },
  },
  oneStep: {
    display: 'flex',
    alignItems: 'center',
    width: 'calc(33.33333% - 90px)',
    '@media (max-width: 991px)': {
      paddingLeft: 0,
      flexDirection: 'column',
      width: '100%',
    },
  },
  stepSeparator: {
    alignSelf: 'center',
    backgroundColor: '#0184f7',
    height: '3px',
    marginRight: '65px',
    transform: 'translateY(13px)',
    width: '70px',
    '@media (max-width: 991px)': {
      display: 'none',
    },
  },
  media: {
    width: 50,
    marginLeft: '33%',
  },
  card: {
    border: 'none',
    boxShadow: 'none',
  },
  button: {
    fontFamily: 'MullerRegular',
    fontSize: '14px',
    letterSpacing: '0.77px',
    borderRadius: '4px',
    height: '43px',
    width: '230px',
    transition: '.2s ease',
    marginTop: '35px',
    '&:hover': {
      backgroundColor: '#0e67d0',
    },
  },
}))

export default function MainSection3() {
  const classes = useStyles()
  return (
    <Container fixed className={classes.root}>
      <Typography variant="h2">Start with Bookmap in 3 simple steps</Typography>
      <Box className={classes.cTreeSteps}>
        <Box className={classes.oneStep}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              alt="Get Software"
              image="/static/main/section3/cloud.svg"
              title="Get Software"
            />
            <CardContent>
              <Typography gutterBottom>01 Get Software</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Register to Bookmap
                <br />
                Download and install the app
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box className={classes.stepSeparator}></Box>
        <Box className={classes.oneStep}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              alt="Connect Data"
              image="/static/main/section3/planet.svg"
              title="Connect Data"
            />
            <CardContent>
              <Typography gutterBottom>02 Connect Data</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Connect to market data provider (directly or via your broker)
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box className={classes.stepSeparator}></Box>
        <Box className={classes.oneStep}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              alt="Educate yourself"
              image="/static/main/section3/note.svg"
              title="Educate yourself"
            />
            <CardContent>
              <Typography gutterBottom>03 Educate yourself</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Get free education including live basic or advance webinars
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        href="https://bookmap.com/members/signup/thAhOgYUg"
      >
        START FOR FREE
      </Button>
    </Container>
  )
}

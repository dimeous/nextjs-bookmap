import { Box, Button, Card, CardContent, CardMedia } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

import { text } from './main-section-3-content'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    marginBottom: '145px',
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
  },
  stepSeparator: {
    alignSelf: 'center',

    backgroundColor: '#0184f7',
    height: '3px',
    marginRight: '65px',
    marginTop: '-20px',
    transform: 'translateY(13px)',
    width: '70px',
    '@media (max-width: 991px)': {
      display: 'none',
    },
  },
  media: {
    width: 'auto',
    heght: '50px',
    marginLeft: '33%',
  },
  card: {
    border: 'none',
    boxShadow: 'none',
  },
  button: {
    width: '230px',
    marginTop: '35px',
  },
  stepHeader: {
    display: 'flex',
    margin: '18px 00 20px',
    width: '100%',
    font: '20px/20px MullerMedium,sans-serif',
    color: '#0184f7',
    '& span': {
      marginRight: '10%',
    },
  },
}))

export default function MainSection3() {
  const classes = useStyles()
  return (
    <Container fixed className={classes.root}>
      <Typography variant="h2" style={{ marginBottom: 75 + 'px' }}>
        {text.h1}
      </Typography>
      <Box className={classes.cTreeSteps}>
        <Box className={classes.oneStep}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              alt="Get Software"
              image="/static/main/s3/cloud.svg"
              title="Get Software"
            />
            <CardContent>
              <Typography className={classes.stepHeader}>
                <span>01</span> {text.s1.lbl}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                {text.s1.txt}
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
              image="/static/main/s3/planet.svg"
              title="Connect Data"
            />
            <CardContent>
              <Typography className={classes.stepHeader}>
                <span>02</span> {text.s2.lbl}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                {text.s2.txt}
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
              image="/static/main/s3/note.svg"
              title="Educate yourself"
            />
            <CardContent>
              <Typography className={classes.stepHeader}>
                <span>03</span> {text.s3.lbl}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                {text.s3.txt}
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
        id={'main_middle_start_for_free'}
      >
        {text.btn}
      </Button>
    </Container>
  )
}

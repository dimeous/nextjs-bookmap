import React from 'react'
import { makeStyles, Box, Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { text } from './CryptoSection3Content'

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

export default function CryptoSection3Desktop() {
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
              alt="Install Bookmap and connect to exchanges"
              image="/static/crypto/s3/computing.png"
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
              alt="Install Bookmap and connect to exchanges"
              image="/static/crypto/s3/knowledge.png"
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
              image="/static/crypto/s3/rocket.png"
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
    </Container>
  )
}

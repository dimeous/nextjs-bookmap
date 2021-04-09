import React from 'react'
import { makeStyles, Box, Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { text } from './CryptoSection4Content'

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
    width: 'calc(33.33333% - 90px)',
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

export default function CryptoSection4DesktopGetStart() {
  const classes = useStyles()
  return (
    <Container fixed className={classes.root}>
      <Typography variant="h2" align="center">
        {text.h1}
      </Typography>
      <Typography variant="h3" style={{ marginBottom: 75 + 'px', color: '#0184f7' }} align="center">
        {text.h2}
      </Typography>
      <Box className={classes.cTreeSteps}>
        <Box className={classes.oneStep}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              alt="1. Get Bookmap Digital+"
              image="/static/crypto/s5/1.svg"
              title="Get Software"
            />
            <CardContent>
              <Typography className={classes.stepHeader}>
                <span>1.</span> {text.s1.lbl}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                {text.s1.txt}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box className={classes.oneStep}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              alt="2. Get Multibook"
              image="/static/crypto/s5/2.svg"
              title="Connect Data"
            />
            <CardContent>
              <Typography className={classes.stepHeader}>
                <span>2.</span> {text.s2.lbl}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                {text.s2.txt}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box className={classes.oneStep}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              alt="3. Make informed trading decisions"
              image="/static/crypto/s5/3.svg"
              title="Educate yourself"
            />
            <CardContent>
              <Typography className={classes.stepHeader}>
                <span>3.</span> {text.s3.lbl}
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

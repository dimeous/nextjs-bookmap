import React from 'react'
import { makeStyles, Box, Grid } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { text } from './CryptoSection3Content'
import Typography from '@material-ui/core/Typography'
import Image from 'next/image'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    marginBottom: '145px',
    '& h4': {
      font: '18px/30px MullerRegular,sans-serif',
      color: '#0184f7',
      margin: 0,
    },
  },
  button: {
    width: '230px',
    marginTop: '24px',
  },
  textBox: {
    borderLeft: 'solid 3px #0184f7',
    paddingLeft: '16px',
    margin: '10px 0px 10px 0px',
    maxWidth: '75%',
  },
  text: {
    lineHeight: '24px',
    fontSize: '16px',
    letterSpacing: '0.47px',
  },
}))

export default function CryptoSection3Mobile() {
  const classes = useStyles()
  return (
    <Container fixed className={classes.root}>
      <Typography variant="h2" style={{ width: '90%' }}>
        {text.h1}
      </Typography>
      <Grid container>
        <Grid item xs={2}>
          <h4>01</h4>
        </Grid>
        <Grid item xs={8}>
          <h4>{text.s1.lbl}</h4>
        </Grid>
        <Grid item xs={2}>
          <Image src="/static/main/s3/cloud.svg" width={32} height={24}></Image>
        </Grid>
      </Grid>
      <Box className={classes.textBox}>
        <Typography variant="body2" color="textPrimary" component="p" className={classes.text}>
          {text.s1.txt}
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={2}>
          <h4>02</h4>
        </Grid>
        <Grid item xs={8}>
          <h4>{text.s2.lbl}</h4>
        </Grid>
        <Grid item xs={2}>
          <Image src="/static/main/s3/planet.svg" width={32} height={24}></Image>
        </Grid>
      </Grid>
      <Box className={classes.textBox}>
        <Typography variant="body2" color="textPrimary" component="p" className={classes.text}>
          {text.s2.txt}
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={2}>
          <h4>03</h4>
        </Grid>
        <Grid item xs={8}>
          <h4>{text.s3.lbl}</h4>
        </Grid>
        <Grid item xs={2}>
          <Image src="/static/main/s3/note.svg" width={32} height={24}></Image>
        </Grid>
      </Grid>
      <Box className={classes.textBox}>
        <Typography variant="body2" color="textPrimary" component="p" className={classes.text}>
          {text.s3.txt}
        </Typography>
      </Box>
      <Grid
        xs={12}
        style={{
          textAlign: 'center',
        }}
      ></Grid>
    </Container>
  )
}

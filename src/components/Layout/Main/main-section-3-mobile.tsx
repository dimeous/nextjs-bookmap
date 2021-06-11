import { Box, Button, Grid } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import React from 'react'

import { text } from './main-section-3-content'

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

export default function MainSection3() {
  const classes = useStyles()
  return (
    <Container fixed className={classes.root}>
      <Typography variant="h2" style={{ width: '90%' }}>
        {t(text.h1)}
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
      >
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          href="https://bookmap.com/members/signup/thAhOgYUg"
          id={'main_middle_start_for_free'}
        >
          {text.btn}
        </Button>
      </Grid>
    </Container>
  )
}

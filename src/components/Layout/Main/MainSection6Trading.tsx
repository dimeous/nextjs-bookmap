import React from 'react'
import { makeStyles, Box, Grid, Button } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Image from 'next/image'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    fontFamily: 'MullerRegular',
  },
  eduBlock: {
    marginLeft: 'auto',
    marginRight: 'auto',
    border: 'solid 1px lightgray',
    paddingBottom: '27px',
    paddingLeft: '130px',
    paddingRight: '0',
    paddingTop: '40px',
  },
  introImg: {
    paddinTop: '6px',
    flexDirection: 'column',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    width: '230px',
    marginTop: '35px',
  },
}))

export default function MainSection6Trading() {
  const classes = useStyles()
  return (
    <Container fixed className={classes.root}>
      <Typography variant="h2">Start with Bookmap in 3 simple steps</Typography>

      <Box className={classes.eduBlock}>
        <Box sx={{ display: 'flex' }}>
          <div className="introRow">
            <div className="introImg">
              <Image src="/static/main/s6/chart.png" width={300} height={155} />
              <Image src="/static/main/s6/absoption.jpg" width={300} height={160} />
              <div style={{ position: 'absolute', bottom: 0 }}>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                  href="https://bookmap.com/members/signup/thAhOgYUg"
                >
                  GO TO EDUCATION
                </Button>
              </div>
            </div>
            <div style={{ marginLeft: '40px' }}>
              <p className="intro__text" style={{ maxWidth: '100%', marginBottom: 0 }}>
                Bookmap offers a robust Live Advanced Education for subscribers, and Free
                Educational Resources to all.
              </p>
              <h4 className="list_h4">OPEN TO ALL</h4>
              <div className="eduContent">
                <ul className="fullList">
                  <li>Register to a Free Basics webinar</li>
                  <li>Free access to Friday’s Live Advanced webinar</li>
                  <li>Other Free resources</li>
                </ul>
              </div>
              <h4 className="list_h4">BOOKMAP SUBSCRIBERS (PAID)</h4>
              <div className="ecard-content edu-content">
                <ul className="full-list">
                  <li>Educational Course online</li>
                  <li>Daily Advanced webinars</li>
                  <li>
                    <b>Live Trading</b> from Professionals
                  </li>
                  <li>Other Trading educational resources</li>
                </ul>
              </div>
            </div>
          </div>
        </Box>
      </Box>

      <Grid container>
        <Grid md={6} item></Grid>
        <Grid md={6} item></Grid>
      </Grid>
    </Container>
  )
}

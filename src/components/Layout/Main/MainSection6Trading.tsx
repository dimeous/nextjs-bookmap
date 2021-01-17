import React from 'react'
import { makeStyles, Box, Button } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Image from 'next/image'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    marginBottom: '145px',
    fontFamily: 'MullerRegular',
    fontSize: '18px',
    '& ul': {
      listStyle: 'none',
      paddingLeft: 0,
      '& li': {
        color: '#000',
        font: '18px MullerLight,sans-serif',
        lineHeight: '28px',
        paddingLeft: '26px',
        position: 'relative',
        '&:before': {
          background: 'url("/static/icons/check.svg") 50% no-repeat',
          backgroundSize: 'contain',
          height: '8px',
          left: 0,
          position: 'absolute',
          content: '""',
          top: '8px',
          width: '10px',
        },
      },
    },
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
  introText: {
    lineHeight: '1.66',
    letterSpacing: '0.53px',
    color: '#3B4858',
  },
  button: {
    width: '230px',
    marginTop: '82px',
  },
  nextImage: {
    position: 'relative',
    left: '-120px',
  },
  list_h4: {
    color: '#1a1833',
    fontFamily: 'MullerMedium',
    letterSpacing: 0,
    fontWeight: 400,
  },
}))

export default function MainSection6Trading() {
  const classes = useStyles()
  return (
    <Container fixed className={classes.root}>
      <Typography variant="h2">Live Advanced Trading Education</Typography>

      <Box className={classes.eduBlock}>
        <Box sx={{ display: 'flex' }}>
          <div className="introImg">
            <Image src="/static/main/s6/chart.png" width={300} height={155} />
            <Box className={classes.nextImage}>
              <Image src="/static/main/s6/absoption.jpg" width={300} height={160} />
            </Box>
            <div>
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
            <p className={classes.introText} style={{ maxWidth: '100%', marginBottom: 0 }}>
              Bookmap offers a robust Live Advanced Education for subscribers, and Free Educational
              Resources to all.
            </p>
            <h4 className={classes.list_h4}>OPEN TO ALL</h4>
            <div>
              <ul>
                <li>Register to a Free Basics webinar</li>
                <li>Free access to Friday’s Live Advanced webinar</li>
                <li>Other Free resources</li>
              </ul>
            </div>
            <h4 className={classes.list_h4}>BOOKMAP SUBSCRIBERS (PAID)</h4>
            <div>
              <ul>
                <li>Educational Course online</li>
                <li>Daily Advanced webinars</li>
                <li>
                  <b>Live Trading</b> from Professionals
                </li>
                <li>Other Trading educational resources</li>
              </ul>
            </div>
          </div>
        </Box>
      </Box>
    </Container>
  )
}

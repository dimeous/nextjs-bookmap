import React from 'react'
import { makeStyles, Box, Button } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { text } from './MainSection6Content'

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

export function Mobile() {
  return <Container fixed> hello</Container>
}

export function Desktop() {
  const classes = useStyles()
  return (
    <Container fixed className={classes.root}>
      <div id="education" style={{ position: 'absolute', marginTop: '-140px' }}></div>
      <Typography variant="h2">{text.h1}</Typography>
      <Box className={classes.eduBlock}>
        <Box sx={{ display: 'flex' }}>
          <div className="introImg">
            {text.i1}
            <Box className={classes.nextImage}>{text.i2}</Box>
            <div>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                href="https://bookmap.com/members/signup/thAhOgYUg"
              >
                {text.btn}
              </Button>
            </div>
          </div>
          <div style={{ marginLeft: '40px' }}>
            <p className={classes.introText} style={{ maxWidth: '100%', marginBottom: 0 }}>
              {text.h2}
            </p>
            <h4 className={classes.list_h4}> {text.h3}</h4>
            {text.s1}
            <h4 className={classes.list_h4}></h4>
            {text.s2}
          </div>
        </Box>
      </Box>
    </Container>
  )
}

type CardProps = {
  mobile: boolean
}
export default function MainSection6Trading({ mobile }: CardProps) {
  return mobile ? <Mobile /> : <Desktop />
}

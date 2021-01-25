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
    fontFamily: '16px/24px MullerMedium,sans-serif',
    fontWeight: 500,
    letterSpacing: '0.47px',
  },
}))
const useStylesMob = makeStyles(() => ({
  root: {
    marginBottom: '124px',
    width: '100%',
    '& ul': {
      listStyle: 'none',
      paddingLeft: 0,
      '& li': {
        color: '#000',
        font: '16px MullerLight,sans-serif',
        lineHeight: '24px',
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
  boxImgs: {
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    paddingTop: '24px',
  },
  boxImg2: {
    position: 'relative',
    zIndex: 1,
    margin: '-23px 0px 0px -38px',
  },
  list_h4: {},
}))
export function Mobile() {
  const classes = useStylesMob()
  return (
    <Container fixed className={classes.root}>
      <Typography variant="h2">{text.h1}</Typography>
      <Typography color="textPrimary" component="p">
        {text.h2}
      </Typography>

      <Box className={classes.boxImgs}>
        <Box>
          {text.i1}
          <Box className={classes.boxImg2}>{text.i2}</Box>
        </Box>
      </Box>

      <Box>
        <Typography color="textPrimary" component="p">
          {text.h2}
        </Typography>
        <h4 className={classes.list_h4}> {text.h3}</h4>
        {text.s1}
        <h4 className={classes.list_h4}>{text.h4}</h4>
        {text.s2}
      </Box>
    </Container>
  )
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
            <h4 className={classes.list_h4}>{text.h4}</h4>
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

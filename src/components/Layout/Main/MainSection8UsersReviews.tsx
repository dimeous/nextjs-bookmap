import React from 'react'
import { Typography, makeStyles, Box, Button } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import TrustPreloadPilot from '../../trustPreloadPilot'
import VisibilitySensor from 'react-visibility-sensor'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    paddingTop: '50px',
    marginBottom: '145px',
  },
  title: {
    fontWeight: 500,
    fontSize: '24px',
    lineHeight: 1,
    letterSpacing: '0.705882px',
    color: '#424242',
    textAlign: 'center',
    paddingBottom: '12px',
    marginBottom: '92px',
    font: '16px/24px MullerMedium,sans-serif',
    boxSizing: 'border-box',
    '&:before': {
      borderBottom: '3px solid #007CFF',
      content: '""',
      position: 'absolute',
      paddingTop: '30px',
      width: '160px',
    },
  },
}))

type CardProps = {
  mobile: boolean
}
export default function MainSection8UserReviews({ mobile }: CardProps) {
  const onChange = function (isVisible: boolean) {
    if (isVisible) setChecked(true)
  }
  const [checked, setChecked] = React.useState(false)
  const classes = useStyles()
  return (
    <Container fixed className={classes.root}>
      <VisibilitySensor onChange={onChange}>
        <Typography align={'center'} variant={'h3'} className={classes.title}>
          User Reviews
        </Typography>
      </VisibilitySensor>

      {(checked || !mobile) && <TrustPreloadPilot />}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
          marginTop: '70px',
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          href="https://bookmap.com/members/signup/thAhOgYUg"
        >
          GET FREE BOOKMAP
        </Button>
      </Box>
    </Container>
  )
}

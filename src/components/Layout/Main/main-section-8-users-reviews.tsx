import { Box, Button, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'next-i18next'
import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'

import TrustPreloadPilot from '../../trustPreloadPilot'

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

type CardProperties = {
  mobile: boolean
  crypto: boolean
}

export default function MainSection8UserReviews({ mobile, crypto }: CardProperties) {
  const onChange = function (isVisible: boolean) {
    if (isVisible) setChecked(true)
  }
  const [checked, setChecked] = React.useState(false)
  const classes = useStyles()
  const { t } = useTranslation('main')
  return (
    <Container fixed className={classes.root}>
      <VisibilitySensor onChange={onChange}>
        <Typography align={'center'} variant={'h3'} className={classes.title}>
          {t('MS8UserReviews')}
        </Typography>
      </VisibilitySensor>

      {(checked || !mobile) && <TrustPreloadPilot render={true} />}
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
          id={crypto ? 'crypto_middle_get_it_now' : 'main_end_start_for_free'}
        >
          {t('MS8GETFREEBOOKMAP')}
        </Button>
      </Box>
    </Container>
  )
}

import { Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

import TwoColumnsTextPicture from '../../common/two-columns/text-picture'

const useStyles = makeStyles(() => ({
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  },
  title: {},
}))

const WebS1 = (): React.ReactElement => {
  const classes = useStyles()
  const text = (
    <Container className={classes.textBlock}>
      <Typography component="h2" variant="h2" gutterBottom className={classes.title}>
        How it works
      </Typography>
      <Typography paragraph>
        Now anyone can view live Crypto currency pricing data. Embed the widget code directly into
        your website to display real time data to your users.
      </Typography>
      <Typography paragraph>
        Users can select their favorite crypto currency pair across multiple exchanges.
      </Typography>
    </Container>
  )
  const picture = {
    src: '/static/web/s1/web-s1.png',
    width: 623,
    height: 292,
    alt: 'How it works?',
    inbox: true,
  }
  const options = {
    rootSx: {},
    containerSx: {},
  }
  return <TwoColumnsTextPicture text={text} picture={picture} options={options} />
}
export default WebS1

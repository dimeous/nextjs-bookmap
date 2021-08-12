import { Link, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

import { ThemeColors } from '../../../theme/theme-styles'
import TwoColumnsTextPicture from '../../common/two-columns/text-picture'

const useStyles = makeStyles(() => ({
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  },
  markText: {
    color: ThemeColors.TextBlue,
  },
}))

const WebS4 = (): React.ReactElement => {
  const classes = useStyles()
  const text = (
    <Container className={classes.textBlock}>
      <Typography component="h2" variant="h2" sx={{ pb: 2 }} className={classes.title}>
        Bookmap Referral Program
      </Typography>
      <Typography paragraph>
        While Bookmap Web is a free promotional tool, Bookmap also offers a paid subscription for
        our fully functionally desktop versions. We offer our referral partners the opportunity to{' '}
        <b className={classes.markText}>receive 15% of the payments</b> made by their referee for
        each Bookmap paid subscription.
      </Typography>
      <Typography sx={{ fontSize: '14px' }}>
        For more information just visit <br />
      </Typography>
      <Link href={'www.bookmap.com/referral'} target={'_blank'}>
        www.bookmap.com/referral/
      </Link>
    </Container>
  )
  const picture = {
    src: '/static/web/s4/web-s4.svg',
    width: 327,
    height: 237,
    alt: 'Bookmap Referral Program',
    sxBoxImage: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
  const options = {
    rootSx: {},
    containerSx: {
      background: ThemeColors.BGGrey,
      borderRadius: '16px',
      paddingTop: '80px',
      paddingBottom: '80px',
    },
  }
  return <TwoColumnsTextPicture text={text} picture={picture} options={options} reverse={true} />
}

export default WebS4

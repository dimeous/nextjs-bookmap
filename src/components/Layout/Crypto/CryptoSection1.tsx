import React from 'react'
import {
  Typography,
  makeStyles,
  ListItem,
  ListItemAvatar,
  ListItemText,
  List,
} from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    marginBottom: '145px',
    height: '300px',

    [theme.breakpoints.down('md')]: {
      marginTop: '16px',
      marginBottom: '120px',
      height: 'auto',
    },
  },
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      '& h2': {
        fontSize: '24px',
        lineHeight: '32px',
        textAlign: 'center',
        paddingTop: '16px',
      },
    },
  },
  listitem: {
    width: '45%',
    '&:hover': {
      background: 'none',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
}))

export default function CryptoSection1() {
  const list = [
    'View full-depth historical data with the dynamic heatmap',
    'Watch the battle between buyers and sellers in 3D with traded volume visualization',
    'Master the order flow with advanced education, live trading webinars and more',
    'Identify trends and intentions of others with unique indicators',
    'Use Bookmap in real-time, or in replay to debrief your trading sessions',
  ]
  const classes = useStyles()
  return (
    <Container fixed>
      <Container className={classes.textBlock}>
        <Typography component="h2" variant="h2" color="inherit" gutterBottom>
          Bookmap<span>®</span>️ is the leading data visualization and trading platform, showing
          what exactly is happening in the market to help crypto traders make informed trading
          decisions
        </Typography>
      </Container>
      <List dense className={classes.root}>
        {list.map((value, index) => {
          const labelId = `checkbox-list-secondary-label-${value}`
          return (
            <ListItem key={index} button className={classes.listitem}>
              <ListItemAvatar>
                <Image
                  src={`/static/crypto/s1/${index + 1}.png`}
                  width={75}
                  height={65}
                  alt={value}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={value} />
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}

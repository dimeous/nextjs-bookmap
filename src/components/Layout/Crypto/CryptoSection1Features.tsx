// eslint-disable-next-line unicorn/filename-case
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Image from 'next/image'
import React from 'react'

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
    paddingTop: '8px',
    paddingBottom: '8px',
    width: '45%',
    '&:hover': {
      background: 'none',
    },
    '& span': {
      fontSize: '1.1428rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
}))

type ElementProperties = {
  listArray?: Array<string>
}

const CryptoSection1Features = ({ listArray }: ElementProperties): React.ReactElement => {
  const list: Array<string> = listArray
    ? listArray
    : [
        'View full-depth historical data with the dynamic heatmap',
        'Watch the battle between buyers and sellers in 3D with traded volume visualization',
        'Connect to multiple exchanges, get data for free and view up to 20 pairs at the same time',
        'See all market data without aggregation',
        'Use Bookmap in real-time or in replay to debrief your trading session',
        'Access to many addons, including Multibook',
      ]

  const classes = useStyles()
  return (
    <Container fixed>
      <Container className={classes.textBlock}>
        <Typography component="h2" variant="h2" color="inherit" gutterBottom>
          Key features
        </Typography>
      </Container>
      <List dense className={classes.root}>
        {list.map((value, index) => {
          const labelId = `checkbox-list-secondary-label-${value}`
          return (
            <ListItem key={index} button className={classes.listitem}>
              <ListItemAvatar>
                <Image
                  src={`/static/crypto/s1/${index + 1}.svg`}
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
export default CryptoSection1Features

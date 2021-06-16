import { List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { isGetBookMapNow } from '../../../lib'

const useStyles = makeStyles((theme: Theme) => ({
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
  page?: string
}

const GbnSection1Features = ({ page }: ElementProperties): React.ReactElement => {
  const { t } = useTranslation('crypto')
  const list = [
    t('CS1ViewFullDepthHistoricalDataWheatmap'),
    isGetBookMapNow(page)
      ? 'CS1GBNWatchTheBattleBetweenBuyers'
      : t('CS1WatchTheBattleBetweenBuyers'),
    t('CS1ConnectToMultipleExchangesGetData'),
    t('CS1SeeAllMarketDataWithoutAggregation'),
    isGetBookMapNow(page)
      ? t('CS1GBNUseBookmapInRealTimeOrInReplay')
      : t('CS1UseBookmapInRealTimeOrInReplay'),
    t('CS1AccessToManyAddonsIncludingMultibook'),
  ]

  const classes = useStyles()
  return (
    <Container fixed>
      <Container className={classes.textBlock}>
        <Typography component="h2" variant="h2" color="inherit" gutterBottom>
          {t('CS1KeyFeatures')}
        </Typography>
      </Container>
      <List dense className={classes.root}>
        {list.map((value, index) => {
          const labelId = `checkbox-list-secondary-label-${value}`
          return (
            <ListItem key={index} button className={classes.listitem}>
              <ListItemAvatar>
                <Image src={`/static/gbn/s1/${index + 1}.svg`} width={75} height={65} alt={value} />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={value} />
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}
export default GbnSection1Features

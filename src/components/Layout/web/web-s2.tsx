import { Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import React from 'react'

import { ThemeColors } from '../../../theme/theme-styles'
import TwoColumns from '../../common/two-columns/two-columns'

const useStyles = makeStyles(() => ({
  listitem: {
    color: ThemeColors.MainBlue,
    paddingBottom: '8px',
    '&:hover': {
      background: 'none',
    },
  },
  listText: {
    '& span': {
      color: ThemeColors.MainBlue,
    },
  },
}))

const WebS2 = (): React.ReactElement => {
  const classes = useStyles()
  const text = (
    <Box sx={{ pt: 2 }}>
      <Typography paragraph>
        Simply choose the size and style of widget that you prefer for your website placement. Click
        the <span style={{ color: ThemeColors.MainBlue }}>“Get Widget”</span> button, copy and paste
        the embed code directly into your website page. You should see the live data populate
        immediately.
      </Typography>
    </Box>
  )
  const list = ['Choose the time frame', 'Adjust heatmap visibility', 'Add cross-hairs']

  const listElement = (
    <Box sx={{ justifyContent: 'center', display: 'flex' }}>
      <List>
        {list.map((value, index) => {
          const labelId = `checkbox-list-secondary-label-${value}`
          return (
            <ListItem key={index} button className={classes.listitem}>
              <ListItemAvatar>
                <Image src={`/static/web/s2/${index + 1}.svg`} width={40} height={40} alt={value} />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={value} className={classes.listText} />
            </ListItem>
          )
        })}
      </List>
    </Box>
  )

  const options = {
    rootSx: { background: ThemeColors.BGGrey, paddingBottom: '70px', paddingTop: '100px' },
    containerSx: {},
    headText: 'Full functional Chart',
  }
  return <TwoColumns element1={listElement} element2={text} options={options} />
}
export default WebS2

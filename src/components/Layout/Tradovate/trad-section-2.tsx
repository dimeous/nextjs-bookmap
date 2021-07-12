import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

import { ThemeColors, ThemeElements } from '../../../theme/theme-styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    ...ThemeElements.rootBlockProps,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',

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
    width: '100%',
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
  icon: {
    height: '65px',
    width: '65px',
    borderRadius: '5px',
    fontSize: '28px',
  },
  listItemText: {
    color: '#124256',
  },
}))

type ElementProperties = {
  page?: string
}

const TradSection2 = ({ page }: ElementProperties): React.ReactElement => {
  const classes = useStyles()
  return (
    <Container fixed>
      <Container className={classes.textBlock}>
        <Grid item md={5}>
          <Typography component="h2" variant="h2" color="inherit" gutterBottom>
            Bookmap and Tradovate offer trading on FairX with
          </Typography>
        </Grid>
      </Container>
      <Grid container>
        <Grid item xs={12} md={5}>
          <List dense className={classes.root}>
            <ListItem className={classes.listitem}>
              <ListItemAvatar>
                <Avatar
                  variant="square"
                  style={{ backgroundColor: '#F9A400' }}
                  className={classes.icon}
                >
                  <span style={{ fontSize: '13px', marginTop: '5px' }}>$</span>0
                </Avatar>
              </ListItemAvatar>
              <Box ml={10} display="flex" flexDirection="column">
                <ListItemText
                  id="checkbox-list-secondary-label-1"
                  primary="ZERO"
                  className={classes.listItemText}
                />
                <ListItemText
                  id="checkbox-list-secondary-label-1"
                  primary="Exchange fees"
                  className={classes.listItemText}
                />
              </Box>
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemAvatar>
                <Avatar
                  variant="square"
                  style={{ backgroundColor: '#607D8B' }}
                  className={classes.icon}
                >
                  <span style={{ fontSize: '13px', marginTop: '5px' }}>$</span>0
                </Avatar>
              </ListItemAvatar>
              <Box ml={10} display="flex" flexDirection="column">
                <ListItemText
                  id="checkbox-list-secondary-label-1"
                  primary="ZERO"
                  className={classes.listItemText}
                />
                <ListItemText
                  id="checkbox-list-secondary-label-1"
                  primary="Broker commissions"
                  className={classes.listItemText}
                />
              </Box>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <List dense className={classes.root}>
            <ListItem className={classes.listitem}>
              <ListItemAvatar>
                <Avatar
                  variant="square"
                  style={{ backgroundColor: '#10DB61' }}
                  className={classes.icon}
                >
                  <span style={{ fontSize: '13px', marginTop: '5px' }}>$</span>0
                </Avatar>
              </ListItemAvatar>
              <Box ml={10} display="flex" flexDirection="column">
                <ListItemText
                  id="checkbox-list-secondary-label-1"
                  primary="ZERO"
                  className={classes.listItemText}
                />
                <ListItemText
                  id="checkbox-list-secondary-label-1"
                  primary="Market data cost"
                  className={classes.listItemText}
                />
              </Box>
            </ListItem>
            <ListItem className={classes.listitem}>
              <ListItemAvatar>
                <Avatar
                  variant="square"
                  style={{ backgroundColor: ThemeColors.MainBlue }}
                  className={classes.icon}
                >
                  <span style={{ fontSize: '13px', marginTop: '5px' }}>$</span>0
                </Avatar>
              </ListItemAvatar>
              <Box ml={10} display="flex" flexDirection="column">
                <ListItemText
                  id="checkbox-list-secondary-label-1"
                  primary="ZERO"
                  className={classes.listItemText}
                />
                <ListItemText
                  id="checkbox-list-secondary-label-1"
                  primary="Bookmap subscription fees"
                  className={classes.listItemText}
                />
              </Box>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  )
}
export default TradSection2

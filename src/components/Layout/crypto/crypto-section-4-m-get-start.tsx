import { Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { ThemeColors, ThemeElements } from '../../../theme/theme-styles'
import getText from './crypto-section-4-content'

const useStylesText = makeStyles(() => ({
  t1: { fontSize: '1rem', color: ThemeColors.MainBlue, fontFamily: 'MullerRegular, sans-serif' },
  t2: { fontSize: '1rem' },
}))

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    ...ThemeElements.rootBlockProps,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    height: '300px',
    [theme.breakpoints.down('md')]: {
      marginTop: '16px',
      ...ThemeElements.rootMobileBlockProps,
      height: 'auto',
    },
  },
  head2: {
    marginBottom: 75 + 'px',
    color: ThemeColors.SecondBlue,
    [theme.breakpoints.down('md')]: {
      marginBottom: '0px',
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
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
}))

function GetTxt(index: number, lbl: string, txt: string) {
  const classes = useStylesText()
  return (
    <Box sx={{ pl: 1 }}>
      <Typography className={classes.t1} gutterBottom>
        {index}. {lbl}
      </Typography>
      <Typography className={classes.t2}>{txt}</Typography>
    </Box>
  )
}

const CryptoSection4MGetStart = (): React.ReactElement => {
  const text: any = getText()
  const { t } = useTranslation('crypto')
  const list = [text.s1, text.s2, text.s3]
  const classes = useStyles()

  return (
    <Container fixed>
      <Container className={classes.textBlock}>
        <Typography component="h2" variant="h2" color="inherit" gutterBottom>
          {text.h1}
        </Typography>
      </Container>
      <List dense className={classes.root}>
        {list.map((value, index) => {
          const labelId = `checkbox-list-secondary-label-${value}`
          return (
            <ListItem key={index} button className={classes.listitem}>
              <ListItemAvatar>
                <Image
                  src={`/static/gbn/s5/${index + 1}.svg`}
                  width={75}
                  height={65}
                  alt={t(value.lbl)}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={GetTxt(index + 1, t(value.lbl), t(value.txt))} />
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}
export default CryptoSection4MGetStart

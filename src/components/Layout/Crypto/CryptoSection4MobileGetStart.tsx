import React from 'react'
import {
  Typography,
  makeStyles,
  ListItem,
  ListItemAvatar,
  ListItemText,
  List,
  Box,
} from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Image from 'next/image'
import  getText  from './CryptoSection4Content'

const useStylesText = makeStyles(() => ({
  t1: { fontSize: '1rem', color: ' #0085F9', fontFamily: 'MullerRegular, sans-serif' },
  t2: { fontSize: '1rem' },
}))

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
      marginBottom: '16px',
      height: 'auto',
    },
  },
  head2: {
    marginBottom: 75 + 'px',
    color: '#0184f7',
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

function GetTxt(i: number, lbl: string, txt: string) {
  const classes = useStylesText()
  return (
    <Box sx={{ pl: 1 }}>
      <Typography className={classes.t1} gutterBottom>
        {i}. {lbl}
      </Typography>
      <Typography className={classes.t2}>{txt}</Typography>
    </Box>
  )
}

type ElementProperties = {
  page?: string
}

const CryptoSection4MobileGetStart=({ page }: ElementProperties): React.ReactElement => {
  const text:any=getText(page)
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
                  src={`/static/crypto/s5/${index + 1}.svg`}
                  width={75}
                  height={65}
                  alt={value.lbl}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={GetTxt(index + 1, value.lbl, value.txt)} />
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}
export default CryptoSection4MobileGetStart
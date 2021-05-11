import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#E6ECEF',
    marginBottom: '145px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '16px',
    },
  },
  container: {
    paddingTop: '75px',
    paddingBottom: '75px',
  },
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    '& ul>li': {
      fontFamily: 'MullerMedium, sans-serif',
    },
  },
  title: {
    fontFamily: 'MullerMedium, sans-serif',
    color: '#124258',
  },
  picCard: {
    width: '100%',
    marginTop: 'auto',
    marginBottom: 'auto',
    height: '340px',
    [theme.breakpoints.down('md')]: {
      marginTop: '32px',
      height: 'auto',
    },
  },
  pic: {
    borderRadius: '10px',
  },
}))

type ElementProperties = {
  text?: string
}
const CryptoSection3MultiBook = ({ text }: ElementProperties): React.ReactElement => {
  const TextFromParameters = text ? text : 'See market liquidity and traded volume'
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container fixed className={classes.container}>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Container className={classes.textBlock}>
              <Typography
                component="h2"
                variant="h2"
                color="inherit"
                gutterBottom
                className={classes.title}
              >
                New Addon, Multibook!
              </Typography>
              <Typography
                component="h5"
                variant="h5"
                color="inherit"
                gutterBottom
                sx={{ color: '#124258', fontWeight: 800 }}
              >
                Binance + Coinbase + Huobi = Multibook
              </Typography>
              <Typography color="inherit" paragraph>
                Create synthetic instruments and see multiple crypto exchanges in one chart.
              </Typography>
              <div>
                <ul>
                  <li>{TextFromParameters}</li>
                  <li>View volume delta across multiple instruments / exchanges</li>
                  <li>Analyze Best Bid and Offer</li>
                  <li>Build your own synthetic instrument</li>
                </ul>
              </div>
              <Button
                variant="contained"
                color="secondary"
                href="https://bookmap.com/members/signup/gv3uiH6Hi"
                sx={{ width: '300px' }}
              >
                Get MultiBook with Digital+
              </Button>
            </Container>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box className={classes.picCard}>
              <Box>
                <Image
                  src={'/static/crypto/s3/pic.png'}
                  alt={'multibook'}
                  width={636}
                  height={350}
                  layout="intrinsic"
                  className={classes.pic}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
export default CryptoSection3MultiBook

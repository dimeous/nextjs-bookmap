import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import ImagePopover from '../Main/MainSection4Popover'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: '145px',
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    width: '100%',
    textAlign: 'right',
    marginTop: '20px',
    paddingRight: '8%',
  },
  imageItem: {
    height: '85px',
    maxWidth: '210px',
    margin: '25px 40px 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    cursor: 'pointer',
    border: '1px solid #e5e5e5',
    '&:hover': {
      borderColor: 'transparent',
      boxShadow: '0 0 6px rgba(81, 112, 136, .35)',
    },
    '@media (max-width: 991px)': {
      margin: '10px 10px',
    },
  },
  image: {
    display: 'block',
    padding: 0,
    maxHeight: '56px',
  },
}))

export default function CryptoSection2Exchanges() {
  const classes = useStyles()

  return (
    <Container fixed className={classes.root}>
      <div id="connectivity" style={{ position: 'absolute', marginTop: '-140px' }}></div>

      <div>
        <Grid container>
          {/* First line*/}
          <Grid md={3} xs={6} item>
            <Box className={classes.imageItem}>
              <ImagePopover
                src="/static/main/s4/3/binance.png"
                alt="Binance"
                width={142}
                height={35}
                link="http://binance.com/en/register?ref=39242647"
                label="binance.com/en/register?ref=39242647"
              />
            </Box>
          </Grid>
          <Grid md={3} xs={6} item>
            <Box className={classes.imageItem}>
              <ImagePopover
                src="/static/main/s4/3/binance-futures.png"
                alt="Binance Futures"
                width={142}
                height={41}
                link="http://binance.com/en/register?ref=39242647"
                label="binance.com/en/register?ref=39242647"
              />
            </Box>
          </Grid>
          <Grid md={3} xs={6} item>
            <Box className={classes.imageItem}>
              <ImagePopover
                src="/static/main/s4/3/bitmex.png"
                alt="BitMEX"
                width={142}
                height={25}
                link="http://bitmex.com/register/9cZLmk"
                label="bitmex.com/register/9cZLmk"
              />
            </Box>
          </Grid>
          <Grid md={3} xs={6} item>
            <Box className={classes.imageItem}>
              <ImagePopover
                src="/static/main/s4/3/bitflyer.png"
                alt="BitFlyer"
                width={142}
                height={65}
                link="http://bitflyer.com"
                label="bitflyer.com"
              />
            </Box>
          </Grid>
          {/* 2 line*/}
          <Grid md={3} xs={6} item>
            <Box className={classes.imageItem}>
              <ImagePopover
                src="/static/main/s4/3/bitstamp.png"
                alt="BitStamp"
                width={130}
                height={90}
                link="http://bitstamp.net"
                label="bitstamp.net"
              />
            </Box>
          </Grid>
          <Grid md={3} xs={6} item>
            <Box className={classes.imageItem}>
              <ImagePopover
                src="/static/main/s4/3/btse.png"
                alt="BTSE"
                width={142}
                height={41}
                link="https://www.btse.com/en/ref?c=33KWaq"
                label="btse.com"
              />
            </Box>
          </Grid>
          <Grid md={3} xs={6} item>
            <Box className={classes.imageItem}>
              <ImagePopover
                src="/static/main/s4/3/bittrex.png"
                alt="BITTREX"
                width={142}
                height={30}
                link="http://bittrex.com"
                label="bittrex.com"
              />
            </Box>
          </Grid>
          <Grid md={3} xs={6} item>
            <Box className={classes.imageItem}>
              <ImagePopover
                src="/static/main/s4/3/bybit.png"
                alt="bybit"
                width={110}
                height={41}
                link="http://bybit.com"
                label="bybit.com"
              />
            </Box>
          </Grid>
          {/* 3 line*/}
          <Grid md={3} xs={6} item>
            <Box className={classes.imageItem}>
              <ImagePopover
                src="/static/main/s4/3/bitfinex.svg"
                alt="BITFINEX"
                width={142}
                height={41}
                link="http://bitfinex.com/?refcode=c11gDfxcm"
                label="bitfinex.com/?refcode=c11gDfxcm"
              />
            </Box>
          </Grid>
          <Grid md={3} xs={6} item>
            <Box className={classes.imageItem}>
              <ImagePopover
                src="/static/main/s4/3/coinbase.png"
                alt="Coinbase"
                width={142}
                height={41}
                link="http://coinbase.com"
                label="coinbase.com"
              />
            </Box>
          </Grid>
          <Grid md={3} xs={6} item>
            <Box className={classes.imageItem}>
              <ImagePopover
                src="/static/main/s4/3/coinflex.png"
                alt="CoinFLEX"
                width={142}
                height={41}
                link="http://coinflex.com"
                label="coinflex.com"
              />
            </Box>
          </Grid>
          <Grid md={3} xs={6} item>
            <Box className={classes.imageItem}>
              <ImagePopover
                src="/static/main/s4/3/deribit.png"
                alt="Deribit"
                width={142}
                height={41}
                link="http://deribit.com"
                label="deribit.com"
              />
            </Box>
          </Grid>
          {/* 4 line*/}
          <Grid md={3} xs={6} item>
            <Box className={classes.imageItem}>
              <ImagePopover
                src="/static/main/s4/3/ftx.png"
                alt="FTX"
                width={142}
                height={41}
                link="http://ftx.com/#a=2572003"
                label="ftx.com/#a=2572003"
              />
            </Box>
          </Grid>
          <Grid md={3} xs={6} item>
            <Box className={classes.imageItem}>
              <ImagePopover
                src="/static/main/s4/3/hitbtc.jpg"
                alt="HitBTC"
                width={142}
                height={41}
                link="http://hitbtc.com"
                label="hitbtc.com"
              />
            </Box>
          </Grid>
          <Grid md={3} xs={6} item>
            <Box className={classes.imageItem}>
              <ImagePopover
                src="/static/main/s4/3/huobi.png"
                alt="Huobi"
                width={142}
                height={41}
                link="http://huobi.com"
                label="huobi.com"
              />
            </Box>
          </Grid>
          <Grid md={3} xs={6} item>
            <Box className={classes.imageItem}>
              <ImagePopover
                src="/static/main/s4/3/krakenf.jpg"
                alt="KRAKEN Futures"
                width={142}
                height={16}
                link="http://r.kraken.com/mPOeM"
                label="r.kraken.com/mPOeM"
              />
            </Box>
          </Grid>
          {/* 5 line*/}
          <Grid md={3} xs={6} item>
            <Box className={classes.imageItem}>
              <ImagePopover
                src="/static/main/s4/3/kraken.png"
                alt="KRAKEN"
                width={142}
                height={20}
                link="http://r.kraken.com/mPOeM"
                label="r.kraken.com/mPOeM"
              />
            </Box>
          </Grid>
          <Grid md={3} xs={6} item>
            <Box className={classes.imageItem}>
              <ImagePopover
                src="/static/main/s4/3/liquid.png"
                alt="Liquid"
                width={142}
                height={41}
                link="http://liquid.com"
                label="liquid.com"
              />
            </Box>
          </Grid>
          <Grid md={3} xs={6} item>
            <Box className={classes.imageItem}>
              <ImagePopover
                src="/static/main/s4/3/okex.png"
                alt="OKEX"
                width={142}
                height={41}
                link="http://okex.com/join/1915841"
                label="okex.com/join/1915841"
              />
            </Box>
          </Grid>
          <Grid md={3} xs={6} item>
            <Box className={classes.imageItem}>
              <ImagePopover
                src="/static/main/s4/3/okcoin.svg"
                alt="OKCOIN"
                width={142}
                height={20}
                link="http://okcoin.com"
                label="okcoin.com"
              />
            </Box>
          </Grid>
          <Grid md={3} xs={6} item>
            <Box className={classes.imageItem}>
              <ImagePopover
                src="/static/main/s4/3/poloniex.png"
                alt="POLONIEX"
                width={142}
                height={70}
                link="http://poloniex.com"
                label="poloniex.com"
              />
            </Box>
          </Grid>
        </Grid>
      </div>

      <Box className={classes.link}>
        <Link
          href="https://www.bookmap.com/knowledgebase/docs/KB-IntroductionToBookmap-Connectivity"
          color="secondary"
        >
          Learn more
        </Link>
      </Box>
    </Container>
  )
}
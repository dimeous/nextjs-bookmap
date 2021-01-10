import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Link from '@material-ui/core/Link'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Image from 'next/image'

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
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

export default function TabsWrappedLabelSection4() {
  const classes = useStyles()
  const [value, setValue] = React.useState('one')

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Container fixed>
      <div className={classes.root}>
        <Typography component="h2" variant="h2">
          Connectivity
        </Typography>
        <Typography component="h2" variant="subtitle1">
          Bookmap is compatible with many data providers / exchanges
        </Typography>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
            <Tab value="one" label="FUTURES" wrapped {...a11yProps('one')} />
            <Tab value="two" label="STOCKS" {...a11yProps('two')} />
            <Tab value="three" label="CRYPTO" {...a11yProps('three')} />
          </Tabs>
        </AppBar>
        {/* 1-st Panel*/}
        <TabPanel value={value} index="one">
          <Grid container>
            {/* First line*/}
            <Grid md={3} xs={6} item alignItems="center">
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/1/dxfeed.png"
                  alt="dxFeed"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/1/rithmic.svg"
                  alt="Rithmic"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/1/trading-tech.svg"
                  alt="Trading Technology"
                  width={142}
                  height={41}
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/1/cqg.svg"
                  alt="CQG"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            {/* 2 line*/}
            <Grid md={3} xs={6} item alignItems="center">
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/1/gain-capital.svg"
                  alt="Gain Capital"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/1/ninja-traders.svg"
                  alt="Ninja Traders"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/1/transact.svg"
                  alt="TransAct Futures"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/1/iqfeed.svg"
                  alt="iQFEED"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            {/* 3 line*/}
            <Grid md={3} xs={6} item alignItems="center">
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/1/stage.svg"
                  alt="Stage Five"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/1/cedro.png"
                  alt="Cedro Technologies"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/1/eurex.png"
                  alt="EUREX"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/1/edge-clear.png"
                  alt="Edge Clear"
                  width={120}
                  height={100}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
        {/* 2-nd Panel*/}
        <TabPanel value={value} index="two">
          <Grid container>
            {/* First line*/}
            <Grid md={3} xs={6} item alignItems="center">
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/1/dxfeed.png"
                  alt="dxFeed"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/2/ts.jpg"
                  alt="Trade Station"
                  width={142}
                  height={80}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/2/ib.jpg"
                  alt="Interactive brokers"
                  width={142}
                  height={80}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/1/cedro.png"
                  alt="CEDRO Technologies"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
        {/* 3-d Panel*/}
        <TabPanel value={value} index="three">
          <Grid container>
            {/* First line*/}
            <Grid md={3} xs={6} item alignItems="center">
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/3/binance.png"
                  alt="Binance"
                  width={142}
                  height={35}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/3/binance-futures.png"
                  alt="Binance Futures"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/3/bitmex.png"
                  alt="BitMEX"
                  width={142}
                  height={25}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/3/bitflyer.png"
                  alt="BitFlyer"
                  width={142}
                  height={65}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            {/* 2 line*/}
            <Grid md={3} xs={6} item alignItems="center">
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/3/bitstamp.png"
                  alt="BitStamp"
                  width={130}
                  height={90}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/3/btse.png"
                  alt="BTSE"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/3/bittrex.png"
                  alt="BITTREX"
                  width={142}
                  height={30}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/3/bybit.png"
                  alt="bybit"
                  width={110}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            {/* 3 line*/}
            <Grid md={3} xs={6} item alignItems="center">
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/3/bitfinex.svg"
                  alt="BITFINEX"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/3/coinbase.png"
                  alt="Coinbase"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/3/coinflex.png"
                  alt="CoinFLEX"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/3/deribit.png"
                  alt="Deribit"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            {/* 4 line*/}
            <Grid md={3} xs={6} item alignItems="center">
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/3/ftx.png"
                  alt="FTX"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/3/hitbtc.jpg"
                  alt="HitBTC"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/3/huobi.png"
                  alt="Huobi"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/3/krakenf.jpg"
                  alt="KRAKEN Futures"
                  width={142}
                  height={16}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            {/* 5 line*/}
            <Grid md={3} xs={6} item alignItems="center">
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/3/kraken.png"
                  alt="KRAKEN"
                  width={142}
                  height={20}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/3/liquid.png"
                  alt="Liquid"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/3/okex.png"
                  alt="OKEX"
                  width={142}
                  height={41}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/3/okcoin.svg"
                  alt="OKCOIN"
                  width={142}
                  height={20}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
            <Grid md={3} xs={6} item>
              <Box className={classes.imageItem}>
                <Image
                  src="/static/main/s4/3/poloniex.png"
                  alt="POLONIEX"
                  width={142}
                  height={80}
                  layout="intrinsic"
                />
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
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

import React from 'react'
import { styles } from './MainSection5MobilePricingStyles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import ClearIcon from '@material-ui/icons/Clear'
import CheckIcon from '@material-ui/icons/Check'
import { Button } from '@material-ui/core'
import { text } from './MainSection5Content'
import Grid from '@material-ui/core/Grid'

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

const useStyles = styles

export default function TabsWrappedLabelSection5() {
  const classes = useStyles()
  const [value, setValue] = React.useState('one')

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Container fixed style={{ marginBottom: '145px' }}>
      <div id="pricing" style={{ position: 'absolute', marginTop: '-140px' }}></div>
      <div className={classes.root}>
        <Typography component="h2" variant="h2">
          {text.h1}
        </Typography>
        <Typography component="h3" variant="h3">
          {text.h2}
        </Typography>

        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          className={classes.tabs}
        >
          <Tab value="one" label={text.l1} wrapped {...a11yProps('one')} />
          <Tab value="two" label={text.l2} {...a11yProps('two')} />
          <Tab value="three" label={text.l3} {...a11yProps('three')} />
        </Tabs>
        <TabPanel value={value} index="two">
          <span className={classes.tabTwo}>{text.l4} </span>
        </TabPanel>
      </div>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={4}>
            <Box className={classes.priceName}>
              <p>{text.t1}</p>
            </Box>
          </Grid>
          <Grid container item xs={4}>
            <Box className={classes.priceName}>
              <p>{text.t2}</p>
            </Box>
          </Grid>
          <Grid container item xs={4}>
            <Box className={classes.priceName}>
              <p>{text.t2}+</p>
            </Box>
          </Grid>
        </Grid>
        {/* Key features */}
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <Box sx={{ p: 2 }}>
              <Typography component={'h4'}>{text.KeyFeature}</Typography>
              <Typography component={'p'}>{text.Heatmap}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={4} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
          </Grid>
          <Grid container item xs={12} justifyContent={'center'}>
            <Box className={classes.borederBotom}></Box>
          </Grid>
        </Grid>
        {/* Record / Replay, VWAP, POC */}
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <Box sx={{ p: 2 }}>
              <Typography component={'p'}>{text.Record}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={4} justifyContent={'center'}>
            <ClearIcon className={classes.clsIcon} />
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
          </Grid>
          <Grid container item xs={12} justifyContent={'center'}>
            <Box className={classes.borederBotom}></Box>
          </Grid>
        </Grid>
        {/* LLT, Strength Level, Imbalance*/}
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <Box sx={{ p: 2 }}>
              <Typography component={'p'}>{text.LLT}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={4} justifyContent={'center'}>
            <ClearIcon className={classes.clsIcon} />
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <ClearIcon className={classes.clsIcon} />
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
          </Grid>
          <Grid container item xs={12} justifyContent={'center'}>
            <Box className={classes.borederBotom}></Box>
          </Grid>
        </Grid>
        {/* ONE CLICK TRADING */}
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <Box sx={{ p: 2 }}>
              <Typography component={'h4'} sx={{ pt: 2 }}>
                {text.oneclick}
              </Typography>
              <Typography component={'p'}>Crypto</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={4} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
          </Grid>
          <Grid container item xs={12} justifyContent={'center'}>
            <Box className={classes.borederBotom}></Box>
          </Grid>
        </Grid>
        {/* Feature stocks*/}
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <Box sx={{ p: 2 }}>
              <Typography component={'p'}>{text.Futures}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={4} justifyContent={'center'}>
            <ClearIcon className={classes.clsIcon} />
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <ClearIcon className={classes.clsIcon} />
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
          </Grid>
          <Grid container item xs={12} justifyContent={'center'}>
            <Box className={classes.borederBotom}></Box>
          </Grid>
        </Grid>
        {/* MARKETS VISUALIZATION */}
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <Box sx={{ p: 2 }}>
              <Typography component={'h4'} sx={{ pt: 2 }}>
                {text.Market}
              </Typography>
              <Typography component={'p'}>{text.Market2}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={4} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
          </Grid>
          <Grid container item xs={12} justifyContent={'center'}>
            <Box className={classes.borederBotom}></Box>
          </Grid>
        </Grid>
        {/* Feature & stocks*/}
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <Box sx={{ p: 2 }}>
              <Typography component={'p'}>{text.Futures2}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={4} justifyContent={'center'}>
            <div style={{ textAlign: 'center' }}>
              <ClearIcon className={classes.clsIcon} />
              <span className={classes.delayStyle}>Delayed</span>
            </div>
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <div style={{ textAlign: 'center' }}>
              <ClearIcon className={classes.clsIcon} />
              <span className={classes.delayStyle}>{text.dataReq}</span>
            </div>
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <div style={{ textAlign: 'center' }}>
              <CheckIcon className={classes.chIcon} />
              <span className={classes.delayStyle}>{text.dataReq}</span>
            </div>
          </Grid>
          <Grid container item xs={12} justifyContent={'center'}>
            <Box className={classes.borederBotom}></Box>
          </Grid>
        </Grid>
      </div>

      <Box className={classes.cPrices}>
        <Box className={classes.naming}>
          <ul className={classes.namingList}>
            <li className={classes.roww}>
              <h4>KEY FEATURES</h4>
              <p>
                Heatmap, Volume dots, CVDHeatmap, Volume dots, CVDHeatmap, Volume dots, CVDHeatmap,
                Volume dots, CVDHeatmap, Volume dots, CVDHeatmap, Volume dots, CVDHeatmap, Volume
                dots, CVDHeatmap, Volume dots, CVDHeatmap, Volume dots, CVD
                <br />
                &amp; Volume Profile columns
              </p>
            </li>
            <li>
              <p>Record / Replay, VWAP, POC</p>
            </li>
            <li>
              <p>LLT, Strength Level, Imbalance</p>
            </li>
            <li className={classes.roww}>
              <h4>ONE CLICK TRADING</h4>
              <p>Crypto</p>
            </li>
            <li>
              <p>Futures, Stocks</p>
            </li>
            <li className={classes.rowvw}>
              <h4>MARKETS VISUALIZATION</h4>
              <p>
                Crypto currencies <br />
                &gt; 15 exchanges (Free data)
              </p>
            </li>
            <li>
              <p>Futures &amp; Stocks </p>
            </li>
            <li>
              <p>
                Maximum # of Trading Symbols
                <br />
                Viewable at the Same Time
              </p>
            </li>
            <li className={classes.rowvw}>
              <h4>EDUCATION</h4>
              <p>Bookmap Basics Webinars with Q&amp;As</p>
            </li>
            <li>
              <p>LIVE Trading Sessions with Pro Traders</p>
            </li>
            <li>
              <p>Order Flow Analysis Webinars</p>
            </li>
            <li>
              <p>Advanced Trading Educational Course</p>
            </li>
            <li className={classes.rowvw}>
              <h4>MARKETPLACE</h4>
              <p>Addons, Market Data and Educational courses (Sold separately)</p>
            </li>
          </ul>
        </Box>
        {/* first table list*/}
        <Box className={classes.digital}>
          <Box className={classes.priceName}>
            <p>digital</p>
          </Box>
          <ul className={classes.priceTags}>
            <li className={classes.roww}>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li>
              <p>
                <ClearIcon className={classes.clsIcon} />
              </p>
            </li>
            <li>
              <p>
                <ClearIcon className={classes.clsIcon} />
              </p>
            </li>
            <li className={classes.roww}>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li>
              <p>
                <ClearIcon className={classes.clsIcon} />
              </p>
            </li>
            <li className={classes.rowvw}>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li>
              <div>
                <ClearIcon className={classes.clsIcon} />
              </div>
              <span className={classes.delayStyle}>Delayed</span>
            </li>
            <li>
              <p>1</p>
            </li>
            <li className={classes.rowvw}>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li>
              <p>
                <ClearIcon className={classes.clsIcon} />
              </p>
            </li>
            <li>
              <p>
                <ClearIcon className={classes.clsIcon} />
              </p>
            </li>
            <li>
              <p>
                <ClearIcon className={classes.clsIcon} />
              </p>
            </li>
            <li className={classes.rowvw}>
              <p
                style={{
                  font: '14px/16px MullerRegular,sans-serif',
                }}
              >
                Compatible with <br />
                <b>SOME</b> addons
              </p>
            </li>
          </ul>
          <div className={classes.thePrice}>
            <div className={classes.priceBlock}>
              <span className={classes.priceNumber}>Free</span>
            </div>
            <Button
              variant="contained"
              color="secondary"
              href="https://bookmap.com/members/signup/thAhOgYUg"
            >
              Select digital
            </Button>
          </div>
        </Box>
        {/* Second table list*/}
        <Box className={classes.digital}>
          <Box className={classes.priceName}>
            <p>global</p>
          </Box>
          <ul className={classes.priceTags}>
            <li className={classes.roww}>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li>
              <p>
                <ClearIcon className={classes.clsIcon} />
              </p>
            </li>
            <li className={classes.roww}>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li>
              <p>
                <ClearIcon className={classes.clsIcon} />
              </p>
            </li>
            <li className={classes.rowvw}>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li>
              <div>
                <CheckIcon className={classes.chIcon} />
              </div>
              <span className={classes.delayStyle}>{text.dataReq}</span>
            </li>
            <li>
              <p>20</p>
            </li>
            <li className={classes.rowvw}>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li>
              <p className={classes.freeText}>
                FREE
                <span className={classes.delayStyle}> Until The End of 2020</span>
              </p>
            </li>
            <li>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li className={classes.rowvw}>
              <p
                style={{
                  font: '14px/16px MullerRegular,sans-serif',
                }}
              >
                Compatible with <b>ALL</b> addons
              </p>
            </li>
          </ul>
          <div className={classes.thePrice}>
            <div className={classes.priceBlock}>
              <span className={classes.priceCurrency}>$</span>
              <span className={classes.priceNumber}>39</span>
              <p className={classes.pricePeriod}>
                <span className={classes.periodSpace}>&nbsp;</span>per month
              </p>
            </div>
            <Typography className={classes.priceSave}>Save $120 a year</Typography>
            <Button
              variant="contained"
              color="secondary"
              href="https://bookmap.com/members/signup/yVqUeUzF?product_id_page-0[]=104-104"
            >
              SELECT GLOBAL
            </Button>
          </div>
        </Box>
        {/* third table list*/}
        <Box className={classes.digital} style={{ marginRight: 0 }}>
          <Box className={classes.priceName}>
            <p>global plus</p>
          </Box>
          <ul className={classes.priceTags}>
            <li className={classes.roww}>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li className={classes.roww}>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li className={classes.rowvw}>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li>
              <div>
                <CheckIcon className={classes.chIcon} />
              </div>
              <span className={classes.delayStyle}>{text.dataReq}</span>
            </li>
            <li>
              <p>20</p>
            </li>
            <li className={classes.rowvw}>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li>
              <p className={classes.freeText}>
                FREE
                <span className={classes.delayStyle}> Until The End of 2020</span>
              </p>
            </li>
            <li>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li className={classes.rowvw}>
              <p
                style={{
                  font: '14px/16px MullerRegular,sans-serif',
                }}
              >
                Compatible with <b>ALL</b> addons
              </p>
            </li>
          </ul>
          <div className={classes.thePrice}>
            <div className={classes.priceBlock}>
              <span className={classes.priceCurrency}>$</span>
              <span className={classes.priceNumber}>79</span>
              <p className={classes.pricePeriod}>
                <span className={classes.periodSpace}>&nbsp;</span>per month
              </p>
            </div>
            <Typography className={classes.priceSave}>Save $240 a year</Typography>
            <Button
              variant="contained"
              color="secondary"
              href="https://bookmap.com/members/signup/yVqUeUzF?product_id_page-0[]=105-105"
            >
              SELECT GLOBAL PLUS
            </Button>
          </div>
        </Box>
      </Box>
      <p className={classes.lifetimeMessage}>
        <sup>*</sup>
        Futures &amp; stocks market data fees from third party providers are not included in the
        price of the Bookmap software subscription
      </p>
      <div className={classes.cta}>
        <p>Can’t decide which plan is right for you?</p>
        <a href="https://bookmap.com/packages-comparison" target="_blank">
          CLICK HERE
        </a>
      </div>
    </Container>
  )
}

import React from 'react'
import { styles } from './MainSection5PricingStyles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import ClearIcon from '@material-ui/icons/Clear'
import CheckIcon from '@material-ui/icons/Check'

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
    <Container fixed>
      <div className={classes.root}>
        <Typography component="h2" variant="h2">
          Pricing and Packages
        </Typography>
        <Typography component="h2" variant="subtitle1">
          Data is not included
        </Typography>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
            <Tab value="one" label="MONTHLY" wrapped {...a11yProps('one')} />
            <Tab value="two" label="YARLY" {...a11yProps('two')} />
            <Tab value="three" label="LIFETIME" {...a11yProps('three')} />
          </Tabs>
        </AppBar>
        {/* 1-st Panel*/}
        <TabPanel value={value} index="one"></TabPanel>
        {/* 2-nd Panel*/}
        <TabPanel value={value} index="two">
          <Typography paragraph> Save 20%</Typography>
        </TabPanel>
        {/* 3-d Panel*/}
        <TabPanel value={value} index="three"></TabPanel>
      </div>
      <Box className={classes.cPrices}>
        <Box className={classes.naming}>
          <ul className={classes.namingList}>
            <li>
              <h4>KEY FEATURES</h4>
              <p>
                Heatmap, Volume dots, CVD
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
            <li>
              <h4>ONE CLICK TRADING</h4>
              <p>Crypto</p>
            </li>
            <li>
              <p>Futures, Stocks</p>
            </li>
            <li>
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
            <li>
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
            <li>
              <h4>MARKETPLACE</h4>
              <p>Addons, Market Data and Educational courses (Sold separately)</p>
            </li>
          </ul>
        </Box>
        <Box className={classes.digital}>
          <Box className={classes.priceName}>
            <p>digital</p>
          </Box>
          <ul className={classes.priceTags}>
            <li>
              <p>
                <CheckIcon />
              </p>
              <div>
                <h4>Key Features</h4>
                <p>
                  <CheckIcon />
                </p>
                <p>Heatmap, Volume dots, CVD &amp; Volume Profile columns</p>
              </div>
            </li>
            <li>
              <p>
                <ClearIcon />
              </p>
              <div>
                <p>
                  <ClearIcon />
                </p>
                <p>Record / Replay, VWAP, POC</p>
              </div>
            </li>
            <li>
              <p>
                <ClearIcon />
              </p>
              <div>
                <p>
                  <ClearIcon />
                </p>
                <p>LLT, Strength Level, Imbalance</p>
              </div>
            </li>
            <li>
              <p>
                <CheckIcon />
              </p>
              <div>
                <h4>ONE CLICK TRADING</h4>
                <p>
                  <CheckIcon />
                </p>
                <p>Crypto</p>
              </div>
            </li>
            <li>
              <p>
                <ClearIcon />
              </p>
              <div>
                <p>
                  <ClearIcon />
                </p>
                <p>Futures, Stocks</p>
              </div>
            </li>
            <li>
              <p>
                <CheckIcon />
              </p>
              <div>
                <h4>MARKETS VISUALIZATION</h4>
                <p>
                  <CheckIcon />
                </p>
                <p>Crypto currencies &gt; 15 exchanges (Free data) </p>
              </div>
            </li>
            <li>
              <p>
                <ClearIcon />
                <span>Delayed</span>
              </p>
              <div>
                <p>
                  <ClearIcon />
                  <span>Delayed</span>
                </p>
                <p>Futures &amp; Stocks </p>
              </div>
            </li>
            <li>
              <p>1</p>
              <div>
                <p>1</p>
                <p>Maximum # of Trading Symbols Viewable at the Same Time</p>
              </div>
            </li>
            <li>
              <p>
                <CheckIcon />
              </p>
              <div>
                <h4>EDUCATION</h4>
                <p>
                  <CheckIcon />
                </p>
                <p>Bookmap Basics Webinars with Q&amp;As</p>
              </div>
            </li>
            <li>
              <p>
                <ClearIcon />
              </p>
              <div>
                <p>
                  <ClearIcon />
                </p>
                <p>LIVE Trading Sessions with Pro Traders</p>
              </div>
            </li>
            <li>
              <p>
                <ClearIcon />
              </p>
              <div>
                <p>
                  <ClearIcon />
                </p>
                <p>Order Flow Analysis Webinars with Q&amp;As</p>
              </div>
            </li>
            <li>
              <p>
                <ClearIcon />
              </p>
              <div>
                <p>
                  <ClearIcon />
                </p>
                <p>Advanced Trading Educational Course </p>
              </div>
            </li>
            <li>
              <p>
                Compatible with <b>SOME</b> addons
              </p>
              <div>
                <h4>MARKETPLACE</h4>
                <p>
                  Compatible with <b>SOME</b> addons (Sold separately)
                </p>
                <p>Addons, Market Data and Educational courses (Sold separately)</p>
              </div>
            </li>
          </ul>
          <div>
            <div>
              <span>Free</span>
            </div>
            <div>
              <a href="https://bookmap.com/members/signup/thAhOgYUg">
                <span>Select digital</span>
                <span className="link-circle"></span>
              </a>
            </div>
          </div>
        </Box>
        <Box className={classes.digital}>
          <Box className={classes.priceName}>
            <p>digital</p>
          </Box>
          <ul className={classes.priceTags}>
            <li>
              <p>
                <CheckIcon />
              </p>
              <div>
                <h4>Key Features</h4>
                <p>
                  <CheckIcon />
                </p>
                <p>Heatmap, Volume dots, CVD &amp; Volume Profile columns</p>
              </div>
            </li>
            <li>
              <p>
                <ClearIcon />
              </p>
              <div>
                <p>
                  <ClearIcon />
                </p>
                <p>Record / Replay, VWAP, POC</p>
              </div>
            </li>
            <li>
              <p>
                <ClearIcon />
              </p>
              <div>
                <p>
                  <ClearIcon />
                </p>
                <p>LLT, Strength Level, Imbalance</p>
              </div>
            </li>
            <li>
              <p>
                <CheckIcon />
              </p>
              <div>
                <h4>ONE CLICK TRADING</h4>
                <p>
                  <CheckIcon />
                </p>
                <p>Crypto</p>
              </div>
            </li>
            <li>
              <p>
                <ClearIcon />
              </p>
              <div>
                <p>
                  <ClearIcon />
                </p>
                <p>Futures, Stocks</p>
              </div>
            </li>
            <li>
              <p>
                <CheckIcon />
              </p>
              <div>
                <h4>MARKETS VISUALIZATION</h4>
                <p>
                  <CheckIcon />
                </p>
                <p>Crypto currencies &gt; 15 exchanges (Free data) </p>
              </div>
            </li>
            <li>
              <p>
                <ClearIcon />
                <span>Delayed</span>
              </p>
              <div>
                <p>
                  <ClearIcon />
                  <span>Delayed</span>
                </p>
                <p>Futures &amp; Stocks </p>
              </div>
            </li>
            <li>
              <p>1</p>
              <div>
                <p>1</p>
                <p>Maximum # of Trading Symbols Viewable at the Same Time</p>
              </div>
            </li>
            <li>
              <p>
                <CheckIcon />
              </p>
              <div>
                <h4>EDUCATION</h4>
                <p>
                  <CheckIcon />
                </p>
                <p>Bookmap Basics Webinars with Q&amp;As</p>
              </div>
            </li>
            <li>
              <p>
                <ClearIcon />
              </p>
              <div>
                <p>
                  <ClearIcon />
                </p>
                <p>LIVE Trading Sessions with Pro Traders</p>
              </div>
            </li>
            <li>
              <p>
                <ClearIcon />
              </p>
              <div>
                <p>
                  <ClearIcon />
                </p>
                <p>Order Flow Analysis Webinars with Q&amp;As</p>
              </div>
            </li>
            <li>
              <p>
                <ClearIcon />
              </p>
              <div>
                <p>
                  <ClearIcon />
                </p>
                <p>Advanced Trading Educational Course </p>
              </div>
            </li>
            <li>
              <p>
                Compatible with <b>SOME</b> addons
              </p>
              <div>
                <h4>MARKETPLACE</h4>
                <p>
                  Compatible with <b>SOME</b> addons (Sold separately)
                </p>
                <p>Addons, Market Data and Educational courses (Sold separately)</p>
              </div>
            </li>
          </ul>
          <div>
            <div>
              <span>Free</span>
            </div>
            <div>
              <a href="https://bookmap.com/members/signup/thAhOgYUg">
                <span>Select digital</span>
                <span className="link-circle"></span>
              </a>
            </div>
          </div>
        </Box>
        <Box className={classes.digital}>
          <Box className={classes.priceName}>
            <p>digital</p>
          </Box>
          <ul className={classes.priceTags}>
            <li>
              <p>
                <CheckIcon />
              </p>
              <div>
                <h4>Key Features</h4>
                <p>
                  <CheckIcon />
                </p>
                <p>Heatmap, Volume dots, CVD &amp; Volume Profile columns</p>
              </div>
            </li>
            <li>
              <p>
                <ClearIcon />
              </p>
              <div>
                <p>
                  <ClearIcon />
                </p>
                <p>Record / Replay, VWAP, POC</p>
              </div>
            </li>
            <li>
              <p>
                <ClearIcon />
              </p>
              <div>
                <p>
                  <ClearIcon />
                </p>
                <p>LLT, Strength Level, Imbalance</p>
              </div>
            </li>
            <li>
              <p>
                <CheckIcon />
              </p>
              <div>
                <h4>ONE CLICK TRADING</h4>
                <p>
                  <CheckIcon />
                </p>
                <p>Crypto</p>
              </div>
            </li>
            <li>
              <p>
                <ClearIcon />
              </p>
              <div>
                <p>
                  <ClearIcon />
                </p>
                <p>Futures, Stocks</p>
              </div>
            </li>
            <li>
              <p>
                <CheckIcon />
              </p>
              <div>
                <h4>MARKETS VISUALIZATION</h4>
                <p>
                  <CheckIcon />
                </p>
                <p>Crypto currencies &gt; 15 exchanges (Free data) </p>
              </div>
            </li>
            <li>
              <p>
                <ClearIcon />
                <span>Delayed</span>
              </p>
              <div>
                <p>
                  <ClearIcon />
                  <span>Delayed</span>
                </p>
                <p>Futures &amp; Stocks </p>
              </div>
            </li>
            <li>
              <p>1</p>
              <div>
                <p>1</p>
                <p>Maximum # of Trading Symbols Viewable at the Same Time</p>
              </div>
            </li>
            <li>
              <p>
                <CheckIcon />
              </p>
              <div>
                <h4>EDUCATION</h4>
                <p>
                  <CheckIcon />
                </p>
                <p>Bookmap Basics Webinars with Q&amp;As</p>
              </div>
            </li>
            <li>
              <p>
                <ClearIcon />
              </p>
              <div>
                <p>
                  <ClearIcon />
                </p>
                <p>LIVE Trading Sessions with Pro Traders</p>
              </div>
            </li>
            <li>
              <p>
                <ClearIcon />
              </p>
              <div>
                <p>
                  <ClearIcon />
                </p>
                <p>Order Flow Analysis Webinars with Q&amp;As</p>
              </div>
            </li>
            <li>
              <p>
                <ClearIcon />
              </p>
              <div>
                <p>
                  <ClearIcon />
                </p>
                <p>Advanced Trading Educational Course </p>
              </div>
            </li>
            <li>
              <p>
                Compatible with <b>SOME</b> addons
              </p>
              <div>
                <h4>MARKETPLACE</h4>
                <p>
                  Compatible with <b>SOME</b> addons (Sold separately)
                </p>
                <p>Addons, Market Data and Educational courses (Sold separately)</p>
              </div>
            </li>
          </ul>
          <div>
            <div>
              <span>Free</span>
            </div>
            <div>
              <a href="https://bookmap.com/members/signup/thAhOgYUg">
                <span>Select digital</span>
                <span className="link-circle"></span>
              </a>
            </div>
          </div>
        </Box>
      </Box>
    </Container>
  )
}

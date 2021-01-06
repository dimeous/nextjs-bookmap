import React from 'react'
import styles from './MainSection5Pricing.module.css'
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
}))

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
      <Box className={styles.cPrices}>ssdfsdf</Box>
      {/*}
        <div className="c-prices">
            <div className="c-prices__column naming">
                <ul className="naming-list">

                    <li className="small-to-medium add-ons roww custom-row">
                        <h4>KEY FEATURES</h4>
                        <p>Heatmap, Volume dots, CVD<br>
                            &amp; Volume Profile columns
                        </p>
                    </li>
                    <li className="small-row roww custom-row">
                        <p>Record / Replay, VWAP, POC</p>
                    </li>
                    <li className="small-row roww custom-row">
                        <p>LLT, Strength Level, Imbalance</p>
                    </li>
                    <li className="small-to-medium trading roww custom-row">
                        <h4>ONE CLICK TRADING</h4>
                        <p>Crypto</p>
                    </li>
                    <li className="small-row roww custom-row">
                        <p>Futures, Stocks</p>
                    </li>
                    <li className="medium-row custom_sp roww custom-row">
                        <h4>MARKETS VISUALIZATION</h4>
                        <p>Crypto currencies <br>
                            &gt; 15 exchanges (Free data)
                        </p>
                    </li>
                    <li className="small-row roww custom-row">
                        <p>Futures &amp; Stocks </p>
                    </li>
                    <li className="small-row roww custom-row">
                        <p>Maximum # of Trading Symbols<br>Viewable at the Same Time</p>
                    </li>
                    <li className="medium-row custom_sp roww custom-row">
                        <h4>EDUCATION</h4>
                        <p style="text-align: left;">
                            Bookmap Basics Webinars with Q&amp;As
                        </p>
                    </li>
                    <li className="small-row roww custom-row">
                        <p>LIVE Trading Sessions with Pro Traders</p>
                    </li>
                    <li className="small-row roww custom-row">
                        <p>Order Flow Analysis Webinars</p>
                    </li>
                    <li className="small-row add-ons roww custom-row">
                        <p>
                            Advanced Trading Educational Course
                        </p>
                    </li>
                    <li className="medium-row roww custom-row">
                        <h4 style="position: relative;bottom: auto;top: 10px;padding-bottom: 18px;">MARKETPLACE</h4>
                        <p style="text-align: left;">Addons, Market Data and Educational courses (Sold separately)</p>
                    </li>
                </ul>
            </div>
            <div className="c-prices__column digital">
                <div className="price-name">
                    <p>digital</p>
                </div>
                <ul className="price-tags">
                    <li className="small-to-medium trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i></p>
                        <div className="tag-mobile-content with-header">
                            <h4>Key Features</h4>
                            <p className="tag-status status-yes"><i className="fa fa-check"></i></p>
                            <p className="tag-text">Heatmap, Volume dots, CVD &amp; Volume Profile columns</p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-times"></i></p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-no"><i className="fa fa-times"></i></p>
                            <p className="tag-text">Record / Replay, VWAP, POC</p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-times"></i></p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-no"><i className="fa fa-times"></i></p>
                            <p className="tag-text">LLT, Strength Level, Imbalance</p>
                        </div>
                    </li>
                    <li className="small-to-medium trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i></p>
                        <div className="tag-mobile-content with-header">
                            <h4>ONE CLICK TRADING</h4>
                            <p className="tag-status status-yes"><i className="fa fa-check"></i></p>
                            <p className="tag-text">Crypto</p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-times"></i></p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-no"><i className="fa fa-times"></i></p>
                            <p className="tag-text">Futures, Stocks</p>
                        </div>
                    </li>
                    <li className="medium-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i></p>
                        <div className="tag-mobile-content with-header">
                            <h4>MARKETS VISUALIZATION</h4>
                            <p className="tag-status status-yes"><i className="fa fa-check"></i></p>
                            <p className="tag-text">Crypto currencies
                                &gt; 15 exchanges (Free data) </p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-times"></i><span
                            style="color:grey;display:block;font-size:12px;">Delayed</span></p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-no"><i className="fa fa-times"></i><span
                                style="color:grey;display:block;font-size:12px;">Delayed</span></p>
                            <p className="tag-text">Futures &amp; Stocks </p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content">1</p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-yes">1</p>
                            <p className="tag-text">Maximum # of Trading Symbols
                                Viewable at the Same Time</p>
                        </div>
                    </li>
                    <li className="medium-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i></p>
                        <div className="tag-mobile-content with-header">
                            <h4>EDUCATION</h4>
                            <p className="tag-status status-yes"><i className="fa fa-check"></i></p>
                            <p className="tag-text">Bookmap Basics Webinars with Q&amp;As</p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-times"></i></p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-no"><i className="fa fa-times"></i></p>
                            <p className="tag-text">LIVE Trading Sessions with Pro Traders</p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-times"></i></p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-no"><i className="fa fa-times"></i></p>
                            <p className="tag-text">Order Flow Analysis Webinars with Q&amp;As</p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-times"></i></p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-no"><i className="fa fa-times"></i></p>
                            <p className="tag-text">Advanced Trading Educational Course </p>
                        </div>
                    </li>
                    <li className="medium-row trading roww custom-row">
                        <p className="tag-desktop-content">Compatible with <b>SOME</b> addons</p>
                        <div className="tag-mobile-content with-header">
                            <h4>MARKETPLACE</h4>
                            <p className="tag-status status-yes">Compatible with <b>SOME</b> addons (Sold separately)
                            </p>
                            <p className="tag-text" style="text-align: left;">
                                Addons, Market Data and Educational courses
                                (Sold separately)</p>
                        </div>
                    </li>
                </ul>
                <div className="the-price">
                    <div className="the-price-content free-price">
                        <span className="price-number">Free</span>
                    </div>
                    <div className="price-link">
                        <a href="https://bookmap.com/members/signup/thAhOgYUg">
                            <span className="link-info">Select digital</span>
                            <span className="link-circle"></span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="c-prices__column global">
                <div className="price-name">
                    <p>global</p>


                </div>
                <ul className="price-tags">
                    <li className="small-to-medium trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i></p>
                        <div className="tag-mobile-content with-header">
                            <h4>Key Features</h4>
                            <p className="tag-status status-yes"><i className="fa fa-check"></i></p>
                            <p className="tag-text">Heatmap, Volume dots, CVD &amp; Volume Profile columns</p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i></p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-yes"><i className="fa fa-check"></i></p>
                            <p className="tag-text">Record / Replay, VWAP, POC</p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-times"></i></p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-no"><i className="fa fa-times"></i></p>
                            <p className="tag-text">LLT, Strength Level, Imbalance</p>
                        </div>
                    </li>
                    <li className="small-to-medium trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i></p>
                        <div className="tag-mobile-content with-header">
                            <h4>ONE CLICK TRADING</h4>
                            <p className="tag-status status-yes"><i className="fa fa-check"></i></p>
                            <p className="tag-text">Crypto</p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-times"></i></p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-no"><i className="fa fa-times"></i></p>
                            <p className="tag-text">Futures, Stocks</p>
                        </div>
                    </li>
                    <li className="medium-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i></p>
                        <div className="tag-mobile-content with-header">
                            <h4>MARKETS VISUALIZATION</h4>
                            <p className="tag-status status-yes"><i className="fa fa-check"></i></p>
                            <p className="tag-text">Crypto currencies
                                &gt; 15 exchanges (Free data) </p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i><span
                            style="color:grey;display:block;font-size:12px;">Data required<sup>*</sup></span></p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-yes"><i className="fa fa-check"></i><span
                                style="color:grey;display:block;font-size:12px;">Data required<sup>*</sup>/span&gt;</span>
                            </p>
                            <p className="tag-text">Futures &amp; Stocks </p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content">20</p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-yes">20</p>
                            <p className="tag-text">Maximum # of Trading Symbols
                                Viewable at the Same Time</p>
                        </div>
                    </li>
                    <li className="medium-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i></p>
                        <div className="tag-mobile-content with-header">
                            <h4>EDUCATION</h4>
                            <p className="tag-status status-yes"><i className="fa fa-check"></i></p>
                            <p className="tag-text">Bookmap Basics Webinars with Q&amp;As</p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content">FREE <span style="color:grey;display:block;font-size:12px;"> Until The End of 2020</span>
                        </p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-yes">FREE <span
                                style="color:grey;display:block;font-size:12px;"> Until The End of 2020</span></p>
                            <p className="tag-text">LIVE Trading Sessions with Pro Traders</p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i></p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-yes"><i className="fa fa-check"></i></p>
                            <p className="tag-text">Order Flow Analysis Webinars with Q&amp;As</p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i></p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-yes"><i className="fa fa-check"></i></p>
                            <p className="tag-text">Advanced Trading Educational Course </p>
                        </div>
                    </li>
                    <li className="medium-row trading roww custom-row">
                        <p className="tag-desktop-content">Compatible with <b>ALL</b> addons</p>
                        <div className="tag-mobile-content with-header">
                            <h4>MARKETPLACE</h4>
                            <p className="tag-status status-yes">Compatible with <b>ALL</b> addons<br> (Sold separately)
                            </p>
                            <p className="tag-text" style="text-align: left;">
                                Addons, Market Data and Educational courses
                                (Sold separately)</p>
                        </div>
                    </li>
                </ul>
                <div className="the-price">
                    <div className="the-price-content price-global-discount" style="display:none;">
                        <div id="discount_first_month" style="width: 100%;color: gray;" className="">
                            <span className="price-currency" style="font-size:11px">$</span>
                            <span className="price-number"
                                  style="font-size:16px">39</span><span>&nbsp;from 2-nd month</span>
                        </div>
                        <span
                            style="color: #1a1833;font: 22px MullerLight,sans-serif;font-size: 22px;line-height: normal;line-height: 1;margin-right: 5px;">$</span>
                        <span
                            style="color: #1a1833;font: 32px MullerLight,sans-serif;line-height: normal;line-height: 1;">24</span>
                        <p className="price-period"><span className="period-space">&nbsp;</span>first month</p>
                    </div>
                    <div className="the-price-content">
                        <span className="price-currency">$</span>
                        <span className="price-number">39</span>
                        <p className="price-period"><span className="period-space">&nbsp;</span>per month</p>
                        <p className="price-save">Save $120 a year</p>
                    </div>
                    <div className="price-link">
                        <a href="https://bookmap.com/members/signup/yVqUeUzF?product_id_page-0[]=104-104">
                            <span className="link-info">Select global</span>
                            <span className="link-circle"></span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="c-prices__column global-plus">
                <div className="price-name">
                    <p>global plus</p>

                </div>
                <ul className="price-tags">
                    <li className="small-to-medium trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i></p>
                        <div className="tag-mobile-content with-header">
                            <h4>Key Features</h4>
                            <p className="tag-status status-yes"><i className="fa fa-check"></i></p>
                            <p className="tag-text">Heatmap, Volume dots, CVD &amp; Volume Profile columns</p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i></p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-yes"><i className="fa fa-check"></i></p>
                            <p className="tag-text">Record / Replay, VWAP, POC</p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i></p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-yes"><i className="fa fa-check"></i></p>
                            <p className="tag-text">LLT, Strength Level, Imbalance</p>
                        </div>
                    </li>
                    <li className="small-to-medium trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i></p>
                        <div className="tag-mobile-content with-header">
                            <h4>ONE CLICK TRADING</h4>
                            <p className="tag-status status-yes"><i className="fa fa-check"></i></p>
                            <p className="tag-text">Crypto</p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i></p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-yes"><i className="fa fa-check"></i></p>
                            <p className="tag-text">Futures, Stocks</p>
                        </div>
                    </li>
                    <li className="medium-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i></p>
                        <div className="tag-mobile-content with-header">
                            <h4>MARKETS VISUALIZATION</h4>
                            <p className="tag-status status-yes"><i className="fa fa-check"></i></p>
                            <p className="tag-text">Crypto currencies
                                &gt; 15 exchanges (Free data) </p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i><span
                            style="color:grey;display:block;font-size:12px;">Data required<sup>*</sup></span></p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-yes"><i className="fa fa-check"></i><span
                                style="color:grey;display:block;font-size:12px;">Data required<sup>*</sup>/span&gt;</span>
                            </p>
                            <p className="tag-text">Futures &amp; Stocks </p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content">20</p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-yes">20</p>
                            <p className="tag-text">Maximum # of Trading Symbols
                                Viewable at the Same Time</p>
                        </div>
                    </li>
                    <li className="medium-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i></p>
                        <div className="tag-mobile-content with-header">
                            <h4>EDUCATION</h4>
                            <p className="tag-status status-yes"><i className="fa fa-check"></i></p>
                            <p className="tag-text">Bookmap Basics Webinars with Q&amp;As</p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content">FREE <span style="color:grey;display:block;font-size:12px;"> Until The End of 2020</span>
                        </p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-yes">FREE<span
                                style="color:grey;display:block;font-size:12px;"> Until The End of 2020</span></p>
                            <p className="tag-text">LIVE Trading Sessions with Pro Traders</p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i></p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-yes"><i className="fa fa-check"></i></p>
                            <p className="tag-text">Order Flow Analysis Webinars with Q&amp;As</p>
                        </div>
                    </li>
                    <li className="small-row trading roww custom-row">
                        <p className="tag-desktop-content"><i className="fa fa-check"></i></p>
                        <div className="tag-mobile-content with-header">
                            <p className="tag-status status-yes"><i className="fa fa-check"></i></p>
                            <p className="tag-text">Advanced Trading Educational Course </p>
                        </div>
                    </li>
                    <li className="medium-row trading roww custom-row">
                        <p className="tag-desktop-content">Compatible with <b>ALL</b> addons</p>
                        <div className="tag-mobile-content with-header">
                            <h4>MARKETPLACE</h4>
                            <p className="tag-status status-yes">Compatible with <b>ALL</b> addons (Sold separately)</p>
                            <p className="tag-text" style="text-align: left;">
                                Addons, Market Data and Educational courses
                                (Sold separately)</p>
                        </div>
                    </li>
                </ul>
                <div className="the-price">
                    <div className="the-price-content price-global-p-discount" style="display:none;">
                        <div id="discount_first_month" style="width: 100%;color: gray;" className="">
                            <span className="price-currency" style="font-size:11px">$</span>
                            <span className="price-number"
                                  style="font-size:16px">79</span><span>&nbsp;from 2-nd month</span>
                        </div>
                        <span
                            style="color: #1a1833;font: 22px MullerLight,sans-serif;font-size: 22px;line-height: normal;line-height: 1;margin-right: 5px;">$</span>
                        <span
                            style="color: #1a1833;font: 32px MullerLight,sans-serif;line-height: normal;line-height: 1;">44</span>
                        <p className="price-period"><span className="period-space">&nbsp;</span>first month</p>
                    </div>
                    <div className="the-price-content">
                        <span className="price-currency">$</span>
                        <span className="price-number">79</span>
                        <p className="price-period"><span className="period-space">&nbsp;</span>per month</p>
                        <p className="price-save">Save $240 a year</p>
                    </div>
                    <div className="price-link">
                        <a href="https://bookmap.com/members/signup/yVqUeUzF?product_id_page-0[]=105-105">
                            <span className="link-info">Select global plus</span>
                            <span className="link-circle"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
            */}
    </Container>
  )
}

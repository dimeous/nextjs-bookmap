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
        {/*  Maximum # of Trading Symbols */}
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <Box sx={{ p: 2 }}>
              <Typography component={'p'}>{text.maxTrSymbols}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={4} justifyContent={'center'}>
            <Typography component={'p'}>1</Typography>
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <Typography component={'p'}>20</Typography>
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <Typography component={'p'}>20</Typography>
          </Grid>
          <Grid container item xs={12} justifyContent={'center'}>
            <Box className={classes.borederBotom}></Box>
          </Grid>
        </Grid>
        {/* Education */}
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <Box sx={{ p: 2 }}>
              <Typography component={'h4'} sx={{ pt: 2 }}>
                {text.education}
              </Typography>
              <Typography component={'p'}>{text.education2}</Typography>
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
        {/* Education */}
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <Box sx={{ p: 2 }}>
              <Typography component={'p'}>{text.livetrdss}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={4} justifyContent={'center'}>
            <ClearIcon className={classes.clsIcon} />
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <Typography component={'p'}>{text.free}</Typography>
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <Typography component={'p'}>{text.free}</Typography>
          </Grid>
          <Grid container item xs={12} justifyContent={'center'}>
            <Box className={classes.borederBotom}></Box>
          </Grid>
        </Grid>
        {/* Order Flow Analysis Webinars */}
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <Box sx={{ p: 2 }}>
              <Typography component={'p'}>{text.orderFlow}</Typography>
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
        {/* Advanced Trading Educational Course */}
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <Box sx={{ p: 2 }}>
              <Typography component={'p'}>{text.AdvTradEducation}</Typography>
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
        {/* MARKETPLACE */}
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <Box sx={{ p: 2 }}>
              <Typography component={'h4'} sx={{ pt: 2 }}>
                {text.marketplace}
              </Typography>
              <Typography component={'p'}>{text.addons}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1} className={classes.allTrading}>
          <Grid container item xs={4} justifyContent={'center'}>
            <p>{text.addonsSome}</p>
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <p className={classes.allTrading}>{text.addonsAll}</p>
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <p className={classes.allTrading}>{text.addonsAll}</p>
          </Grid>
          <Grid container item xs={12} justifyContent={'center'}>
            <Box className={classes.borederBotom}></Box>
          </Grid>
        </Grid>
        {/* Pricing*/}
        <Grid container spacing={1}>
          <Grid container item xs={4} justifyContent={'center'}>
            <div className={classes.thePrice}>
              <div className={classes.priceBlock}>
                <span className={classes.priceNumber}>Free</span>
              </div>
              <Button
                variant="contained"
                color="secondary"
                href="https://bookmap.com/members/signup/thAhOgYUg"
              >
                Select
              </Button>
            </div>
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <div className={classes.thePrice}>
              <div className={classes.priceBlock}>
                <span className={classes.priceCurrency}>$</span>
                <span className={classes.priceNumber}>39</span>
                <p className={classes.pricePeriod}>
                  <span className={classes.periodSpace}>&nbsp;</span>per month
                </p>
              </div>
              <Typography className={classes.priceSave}>Save $120/y</Typography>
              <Button
                variant="contained"
                color="secondary"
                href="https://bookmap.com/members/signup/yVqUeUzF?product_id_page-0[]=104-104"
              >
                SELECT
              </Button>
            </div>
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <div className={classes.thePrice}>
              <div className={classes.priceBlock}>
                <span className={classes.priceCurrency}>$</span>
                <span className={classes.priceNumber}>79</span>
                <span className={classes.priceCurrency}>/mo</span>
              </div>
              <Typography className={classes.priceSave}>Save $240/y</Typography>
              <Button
                variant="contained"
                color="secondary"
                href="https://bookmap.com/members/signup/yVqUeUzF?product_id_page-0[]=105-105"
              >
                SELECT
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <p className={classes.lifetimeMessage}>
        <sup>*</sup>
        Futures &amp; stocks market data fees from third party providers are not included in the
        price of the Bookmap software subscription
      </p>
      <div className={classes.cta}>
        <p>Can’t decide which plan is right for you?</p>
        <a href="https://bookmap.com/packages-comparison" target="_blank" rel={'noreferrer'}>
          CLICK HERE
        </a>
      </div>
    </Container>
  )
}

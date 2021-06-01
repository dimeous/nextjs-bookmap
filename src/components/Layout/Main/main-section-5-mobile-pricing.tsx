import { Button } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import CheckIcon from '@material-ui/icons/Check'
import ClearIcon from '@material-ui/icons/Clear'
import React from 'react'

import { text } from './main-section-5-content'
import { styles } from './main-section-5-mobile-pricing-styles'

interface TabPanelProperties {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProperties) {
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

function a11yProperties(index: any) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  }
}

const useStyles = styles

export default function TabsWrappedLabelSection5() {
  const classes = useStyles()
  const [value, setValue] = React.useState('two')

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
          <Tab value="one" label={text.l1} wrapped {...a11yProperties('one')} />
          <Tab value="two" label={text.l2} {...a11yProperties('two')} />
          <Tab value="three" label={text.l3} {...a11yProperties('three')} />
        </Tabs>
        <TabPanel value={value} index="two">
          <span className={classes.tabTwo}>{text.l4} </span>
        </TabPanel>
      </div>
      <div
        className={classes.root}
        style={{ border: '1px solid #bdc4d0', borderRadius: '8px', overflow: 'hidden' }}
      >
        <Grid container spacing={1}>
          <Grid container item xs={4} style={{ padding: '4px 1px 4px 1px' }}>
            <Box className={classes.priceName}>
              <p>{text.t1}</p>
            </Box>
          </Grid>
          <Grid container item xs={4} style={{ padding: '4px 1px 4px 1px' }}>
            <Box className={classes.priceName}>
              <p>{text.t2}</p>
            </Box>
          </Grid>
          <Grid container item xs={4} style={{ padding: '4px 1px 4px 1px' }}>
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
            <ClearIcon className={classes.clsIcon} />
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
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
            <div>
              <div className={classes.priceBlock}>
                <span className={classes.priceFree}>FREE</span>
              </div>
              <Button variant="contained" color="secondary" href={text.link1}>
                Select
              </Button>
            </div>
          </Grid>
          <Grid container item xs={4} justifyContent={'center'}>
            <div>
              <div className={classes.priceBlock}>
                <span className={classes.priceCurrency}>$</span>
                <span className={classes.priceNumber}>
                  {value == 'one' && 49}
                  {value == 'two' && 39}
                  {value == 'three' && 990}
                </span>
                {value != 'three' && <span className={classes.priceCurrency}>/mo</span>}
                {value == 'two' && <span className={classes.priceSave}>Save $120/y</span>}
              </div>

              <Button
                variant="contained"
                color="secondary"
                href={value == 'one' ? text.link12 : value == 'two' ? text.link22 : text.link32}
              >
                SELECT
              </Button>
            </div>
          </Grid>
          <Grid container item xs={4} justifyContent={'center'} style={{ paddingBottom: '24px' }}>
            <div>
              <div className={classes.priceBlock}>
                <span className={classes.priceCurrency}>$</span>
                <span className={classes.priceNumber}>
                  {value == 'one' && 99}
                  {value == 'two' && 79}
                  {value == 'three' && 1990}
                </span>
                {value != 'three' && <span className={classes.priceCurrency}>/mo</span>}
                {value == 'two' && <span className={classes.priceSave}>Save $240/y</span>}
              </div>

              <Button
                variant="contained"
                color="secondary"
                href={value == 'one' ? text.link13 : value == 'two' ? text.link23 : text.link33}
              >
                SELECT
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <p className={classes.lifetimeMessage}>{text.endtext}</p>
      <div className={classes.cta}>
        <p>Can’t decide which plan is right for you?</p>
        <a href="https://bookmap.com/packages-comparison" target="_blank" rel={'noreferrer'}>
          CLICK HERE
        </a>
      </div>
    </Container>
  )
}

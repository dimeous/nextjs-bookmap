import React from 'react'
import { styles } from './MainSection5PricingStyles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import ClearIcon from '@material-ui/icons/Clear'
import CheckIcon from '@material-ui/icons/Check'
import { Button } from '@material-ui/core'
import { text } from './MainSection5Content'
import Link from '@material-ui/core/Link'

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
          <Tab value="one" label={text.l1} wrapped {...a11yProps('one')} />
          <Tab value="two" label={text.l2} {...a11yProps('two')} />
          <Tab value="three" label={text.l3} {...a11yProps('three')} />
        </Tabs>
        <TabPanel value={value} index="two">
          <span className={classes.tabTwo}>{text.l4} </span>
        </TabPanel>
      </div>
      <Box className={classes.cPrices}>
        <Box className={classes.naming}>
          <ul className={classes.namingList}>
            <li className={classes.roww}>
              <h4>{text.KeyFeature}</h4>
              <p>{text.Heatmap}</p>
            </li>
            <li>
              <p>{text.Record}</p>
            </li>
            <li>
              <p>{text.LLT}</p>
            </li>
            <li className={classes.roww}>
              <h4>{text.oneclick}</h4>
              <p>Crypto</p>
            </li>
            <li>
              <p>{text.Futures}</p>
            </li>
            <li className={classes.rowvw}>
              <h4>{text.Market}</h4>
              <p>
                Crypto currencies <br />
                &gt; 20 Crypto exchange (Free data)
              </p>
            </li>
            <li>
              <p>{text.Futures2}</p>
            </li>
            <li>
              <p>{text.maxTrSymbols}</p>
            </li>
            <li className={classes.rowvw}>
              <h4>{text.education}</h4>
              <p>{text.education2}</p>
            </li>
            <li>
              <p>{text.livetrdss}</p>
            </li>
            <li>
              <p>{text.orderFlow}</p>
            </li>
            <li>
              <p>{text.AdvTradEducation}</p>
            </li>
            <li className={classes.rowvw}>
              <h4>{text.marketplace}</h4>
              <p>{text.addons}</p>
            </li>
          </ul>
          {/*<div className={classes.bubble}>
            <Typography component={'h5'} variant={'h5'} sx={{ paddingBottom: 2, paddingTop: 2 }}>
              Trading Crypto?
            </Typography>
            <Typography component={'p'} sx={{ paddingBottom: 2 }}>
              Discover more features and opportunities Bookmap offers for cryptocurrency traders
            </Typography>
            <Box sx={{ textAlign: 'center', pt: 1 }}>
              <Link
                href="https://bookmap.com/crypto/"
                color="secondary"
                target={'_blank'}
                rel={'noreferrer'}
              >
                Open Crypto Page
              </Link>
            </Box>
          </div>*/}
        </Box>
        {/* first table list*/}
        <Box className={classes.digital}>
          <Box className={classes.priceName}>
            <p>{text.t1}</p>
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
                {text.addonsSome}
              </p>
            </li>
          </ul>
          <div className={classes.thePrice}>
            <div className={classes.priceBlock}>
              <span className={classes.priceNumber}>Free</span>
            </div>
            <Button variant="contained" color="secondary" href={text.link1}>
              Select digital
            </Button>
          </div>
        </Box>
        {/* Second table list*/}
        <Box className={classes.digital}>
          <Box className={classes.priceName}>
            <p>{text.t2}</p>
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
              <p>
                <ClearIcon className={classes.clsIcon} />
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
                {text.addonsAll}
              </p>
            </li>
          </ul>
          <div className={classes.thePrice}>
            <div className={classes.priceBlock}>
              <span className={classes.priceCurrency}>$</span>
              <span className={classes.priceNumber}>
                {value == 'one' && 49}
                {value == 'two' && 39}
                {value == 'three' && 990}
              </span>

              {value != 'three' && (
                <p className={classes.pricePeriod}>
                  <span className={classes.periodSpace}>&nbsp;</span>per month
                </p>
              )}
            </div>
            {value == 'two' && (
              <Typography className={classes.priceSave}>Save $120 a year</Typography>
            )}
            <Button
              variant="contained"
              color="secondary"
              href={value == 'one' ? text.link12 : value == 'two' ? text.link22 : text.link32}
            >
              SELECT GLOBAL
            </Button>
          </div>
        </Box>
        {/* third table list*/}
        <Box className={classes.digital} style={{ marginRight: 0 }}>
          <Box className={classes.priceName}>
            <p>{text.t2} plus</p>
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
            <li className={classes.rowvw}>
              <p
                style={{
                  font: '14px/16px MullerRegular,sans-serif',
                }}
              >
                {text.addonsAll}
              </p>
            </li>
          </ul>
          <div className={classes.thePrice}>
            <div className={classes.priceBlock}>
              <span className={classes.priceCurrency}>$</span>
              <span className={classes.priceNumber}>
                {value == 'one' && 99}
                {value == 'two' && 79}
                {value == 'three' && 1990}
              </span>
              {value != 'three' && (
                <p className={classes.pricePeriod}>
                  <span className={classes.periodSpace}>&nbsp;</span>per month
                </p>
              )}
            </div>

            {value == 'two' && (
              <Typography className={classes.priceSave}>Save $240 a year</Typography>
            )}
            <Button
              variant="contained"
              color="secondary"
              href={value == 'one' ? text.link13 : value == 'two' ? text.link23 : text.link33}
            >
              SELECT GLOBAL PLUS
            </Button>
          </div>
        </Box>
      </Box>
      <Box sx={{ marginLeft: '300px' }}>
        <p className={classes.lifetimeMessage}>{text.endtext}</p>
        <div className={classes.cta}>
          <p>Can’t decide which plan is right for you?</p>
          <a href="https://bookmap.com/packages-comparison" target="_blank" rel={'noreferrer'}>
            CLICK HERE
          </a>
        </div>
      </Box>
    </Container>
  )
}

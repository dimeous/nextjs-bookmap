import React from 'react'
import { styles } from '../Main/MainSection5MobilePricingStyles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import ClearIcon from '@material-ui/icons/Clear'
import CheckIcon from '@material-ui/icons/Check'
import { Button } from '@material-ui/core'
import { text } from './CryptoSection4Content'
import Grid from '@material-ui/core/Grid'

function a11yProps(index: any) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  }
}

const useStyles = styles

export default function CryptoSection4MobilePricing() {
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
        </Tabs>
      </div>
      <div
        className={classes.root}
        style={{ border: '1px solid #bdc4d0', borderRadius: '8px', overflow: 'hidden' }}
      >
        <Grid container spacing={1}>
          <Grid container item xs={6} style={{ padding: '4px 1px 4px 1px' }}>
            <Box className={classes.priceName}>
              <p>{text.t1}</p>
            </Box>
          </Grid>
          <Grid container item xs={6} style={{ padding: '4px 1px 4px 1px' }}>
            <Box className={classes.priceName}>
              <p>{text.t2}</p>
            </Box>
          </Grid>
        </Grid>
        {/* Key features */}
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <Box sx={{ p: 2 }}>
              <Typography component={'p'}>{text.r1}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={6} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
          </Grid>
          <Grid container item xs={6} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
          </Grid>
          <Grid container item xs={12} justifyContent={'center'}>
            <Box className={classes.borederBotom}></Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <Box sx={{ p: 2 }}>
              <Typography component={'p'}>{text.r2}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={6} justifyContent={'center'}>
            <ClearIcon className={classes.clsIcon} />
          </Grid>
          <Grid container item xs={6} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
          </Grid>
          <Grid container item xs={12} justifyContent={'center'}>
            <Box className={classes.borederBotom}></Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <Box sx={{ p: 2 }}>
              <Typography component={'p'}>{text.r3}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={6} justifyContent={'center'}>
            <ClearIcon className={classes.clsIcon} />
          </Grid>
          <Grid container item xs={6} justifyContent={'center'}>
            <ClearIcon className={classes.clsIcon} />
          </Grid>
          <Grid container item xs={12} justifyContent={'center'}>
            <Box className={classes.borederBotom}></Box>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <Box sx={{ p: 2 }}>
              <Typography component={'p'}>{text.r4}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={6} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
          </Grid>
          <Grid container item xs={6} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
          </Grid>
          <Grid container item xs={12} justifyContent={'center'}>
            <Box className={classes.borederBotom}></Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <Box sx={{ p: 2 }}>
              <Typography component={'p'}>{text.r5}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={6} justifyContent={'center'}>
            <ClearIcon className={classes.clsIcon} />
          </Grid>
          <Grid container item xs={6} justifyContent={'center'}>
            <ClearIcon className={classes.clsIcon} />
          </Grid>
          <Grid container item xs={12} justifyContent={'center'}>
            <Box className={classes.borederBotom}></Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <Box sx={{ p: 2 }}>
              <Typography component={'p'}>{text.r6}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={6} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
          </Grid>
          <Grid container item xs={6} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
          </Grid>
          <Grid container item xs={12} justifyContent={'center'}>
            <Box className={classes.borederBotom}></Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
            <Box sx={{ p: 2 }}>
              <Typography component={'p'}>{text.r7}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={6} justifyContent={'center'}>
            <div style={{ textAlign: 'center' }}>
              <ClearIcon className={classes.clsIcon} />
              <span className={classes.delayStyle}>Delayed</span>
            </div>
          </Grid>
          <Grid container item xs={6} justifyContent={'center'}>
            <div style={{ textAlign: 'center' }}>
              <ClearIcon className={classes.clsIcon} />
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
          <Grid container item xs={6} justifyContent={'center'}>
            <Typography component={'p'}>1</Typography>
          </Grid>
          <Grid container item xs={6} justifyContent={'center'}>
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
          <Grid container item xs={6} justifyContent={'center'}>
            <CheckIcon className={classes.chIcon} />
          </Grid>
          <Grid container item xs={6} justifyContent={'center'}>
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
          <Grid container item xs={6} justifyContent={'center'}>
            <ClearIcon className={classes.clsIcon} />
          </Grid>
          <Grid container item xs={6} justifyContent={'center'}>
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
          <Grid container item xs={6} justifyContent={'center'}>
            <ClearIcon className={classes.clsIcon} />
          </Grid>
          <Grid container item xs={6} justifyContent={'center'}>
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
          <Grid container item xs={6} justifyContent={'center'}>
            <ClearIcon className={classes.clsIcon} />
          </Grid>
          <Grid container item xs={6} justifyContent={'center'}>
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
          <Grid container item xs={6} justifyContent={'center'}>
            <p>{text.addonsSome}</p>
          </Grid>
          <Grid container item xs={6} justifyContent={'center'}>
            <p className={classes.allTrading}>{text.addonsAll}</p>
          </Grid>
          <Grid container item xs={12} justifyContent={'center'}>
            <Box className={classes.borederBotom}></Box>
          </Grid>
        </Grid>
        {/* Pricing*/}
        <Grid container spacing={1}>
          <Grid container item xs={6} justifyContent={'center'}>
            <div>
              <div className={classes.priceBlock}>
                <span className={classes.priceFree}>FREE</span>
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
          <Grid container item xs={6} justifyContent={'center'}>
            <div>
              <div className={classes.priceBlock}>
                <span className={classes.priceCurrency}>$</span>
                <span className={classes.priceNumber}>
                  {value == 'one' && 19}
                  {value == 'two' && 195}
                </span>
                {value == 'one' && <span className={classes.priceCurrency}>/mo</span>}
                {value == 'two' && (
                  <span className={classes.priceCurrency} style={{ marginLeft: '8px' }}>
                    annual
                  </span>
                )}
              </div>

              <Button
                variant="contained"
                color="secondary"
                href="https://bookmap.com/members/signup/yVqUeUzF?product_id_page-0[]=104-104"
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

import React from 'react'
import { styles } from '../Main/MainSection5PricingStyles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import ClearIcon from '@material-ui/icons/Clear'
import CheckIcon from '@material-ui/icons/Check'
import { Button } from '@material-ui/core'
import { text } from './CryptoSection4Content'

function a11yProps(index: any) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  }
}

const useStyles = styles

function Loop() {
  const content = []
  for (let i = 1; i <= 11; i++) {
    content.push(
      <li>
        <p>{text['r' + i]}</p>
      </li>
    )
  }
  return content
}
export default function CryptoSection4Pricing() {
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
      <Box className={classes.cPrices}>
        <Box className={classes.naming}>
          <ul className={classes.namingList}>{Loop()}</ul>
        </Box>
        {/* first table list*/}
        <Box className={classes.digital}>
          <Box className={classes.priceName}>
            <p>{text.t1}</p>
          </Box>
          <ul className={classes.priceTags}>
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
            <li>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li>
              <p>{text.td1}</p>
            </li>
            <li>
              <p>
                <b>1</b>
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
        {/* third table list*/}
        <Box className={classes.digital} style={{ marginRight: 0 }}>
          <Box className={classes.priceName}>
            <p>{text.t2}</p>
          </Box>
          <ul className={classes.priceTags}>
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
            <li>
              <p>
                <CheckIcon className={classes.chIcon} />
              </p>
            </li>
            <li>
              <p>{text.td1}</p>
            </li>
            <li>
              <p>
                <b>20</b>
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
          </ul>
          <div className={classes.thePrice}>
            <div className={classes.priceBlock}>
              <span className={classes.priceCurrency}>$</span>
              <span className={classes.priceNumber}>
                {value == 'one' && 19}
                {value == 'two' && 195}
              </span>
              <span
                className={classes.priceCurrency}
                style={{ marginLeft: '10px', fontSize: '20px' }}
              >
                {value == 'one' && 'per month'}
                {value == 'two' && 'annual'}
              </span>
            </div>

            <Button
              variant="contained"
              color="secondary"
              href={value == 'one' ? text.link12 : text.link22}
            >
              SELECT DIGITAL+
            </Button>
          </div>
        </Box>
      </Box>
    </Container>
  )
}

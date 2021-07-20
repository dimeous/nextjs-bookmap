import { Button } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import CheckIcon from '@material-ui/icons/Check'
import ClearIcon from '@material-ui/icons/Clear'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { ThemeElements } from '../../../theme/theme-styles'
import { text } from './main-section-5-content'
import { styles } from './main-section-5-pricing-styles'

interface TabPanelProperties {
  children?: React.ReactNode
  index: any
  value: any
}

const font14MullerRegular = '14px/16px MullerRegular,sans-serif'

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

const TabsSection5 = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState('two')

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue)
  }
  const { t } = useTranslation('main')
  return (
    <Container fixed style={{ ...ThemeElements.rootBlockProps }}>
      <div id="pricing" style={{ position: 'absolute', marginTop: '-140px' }}></div>
      <div className={classes.root}>
        <Typography component="h2" variant="h2">
          {t(text.h1)}
        </Typography>
        <Typography component="h3" variant="h3">
          {t(text.h2)}
        </Typography>

        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          className={classes.tabs}
        >
          <Tab value="one" label={t(text.l1)} wrapped {...a11yProperties('one')} />
          <Tab value="two" label={t(text.l2)} {...a11yProperties('two')} />
          <Tab value="three" label={t(text.l3)} {...a11yProperties('three')} />
        </Tabs>
        <TabPanel value={value} index="two">
          <span className={classes.tabTwo}>{t(text.l4)} </span>
        </TabPanel>
      </div>
      <Box className={classes.cPrices}>
        <Box className={classes.naming}>
          <ul className={classes.namingList}>
            <li className={classes.roww}>
              <h4>{t(text.KeyFeature)}</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: t(text.Heatmap, {
                    interpolation: { escapeValue: false },
                  }),
                }}
              />
            </li>
            <li>
              <p>{t(text.Record)}</p>
            </li>
            <li>
              <p>{t(text.LLT)}</p>
            </li>
            <li className={classes.roww}>
              <h4>{t(text.oneclick)}</h4>
              <p>{t('MS5Crypto')}</p>
            </li>
            <li>
              <p>{t(text.Futures)}</p>
            </li>
            <li className={classes.rowvw}>
              <h4>{t(text.Market)}</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: t('MS5CryptoCurrenciesCryptoexchange(Freedata)', {
                    interpolation: { escapeValue: false },
                  }),
                }}
              />
            </li>
            <li>
              <p>{t(text.Futures2)}</p>
            </li>
            <li>
              <p
                dangerouslySetInnerHTML={{
                  __html: t(text.maxTrSymbols, {
                    interpolation: { escapeValue: false },
                  }),
                }}
              />
            </li>
            <li className={classes.rowvw}>
              <h4>{t(text.education)}</h4>
              <p>{t(text.education2)}</p>
            </li>
            <li>
              <p>{t(text.livetrdss)}</p>
            </li>
            <li>
              <p>{t(text.orderFlow)}</p>
            </li>
            <li>
              <p>{t(text.AdvTradEducation)}</p>
            </li>
            <li className={classes.rowvw}>
              <h4>{t(text.marketplace)}</h4>
              <p>{t(text.addons)}</p>
            </li>
          </ul>
        </Box>
        {/* first table list*/}
        <Box className={classes.digital}>
          <Box className={classes.priceName}>
            <p>{t(text.t1)}</p>
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
              <span className={classes.delayStyle}>{t(text.delayed)}</span>
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
                  font: font14MullerRegular,
                }}
                dangerouslySetInnerHTML={{
                  __html: t(text.addonsSome, {
                    interpolation: { escapeValue: false },
                  }),
                }}
              />
            </li>
          </ul>
          <div className={classes.thePrice}>
            <div className={classes.priceBlock}>
              <span className={classes.priceNumber}>{t('MS5Free')}</span>
            </div>
            <Button href={text.link1}>{t('MS5SelectDigital')}</Button>
          </div>
        </Box>
        {/* Second table list*/}
        <Box className={classes.digital}>
          <Box className={classes.priceName}>
            <p>{t(text.t2)}</p>
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
              <span className={classes.delayStyle}>
                {t(text.dataReq)}
                <sup>*</sup>
              </span>
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
                  font: font14MullerRegular,
                }}
                dangerouslySetInnerHTML={{
                  __html: t(text.addonsAll, {
                    interpolation: { escapeValue: false },
                  }),
                }}
              />
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
                  <span className={classes.periodSpace}>&nbsp;</span>
                  {t('MS5PerMonth')}
                </p>
              )}
            </div>
            {value == 'two' && (
              <Typography className={classes.priceSave}>{t('MS5Save120AYear')}</Typography>
            )}
            <Button
              href={value == 'one' ? text.link12 : value == 'two' ? text.link22 : text.link32}
            >
              {t('MS5SelectGlobal')}
            </Button>
          </div>
        </Box>
        {/* third table list*/}
        <Box className={classes.digital} style={{ marginRight: 0, border: '1px solid #df731b' }}>
          <Box className={classes.priceName} style={{ backgroundColor: '#df731b' }}>
            <p>{t(text.t2)} plus</p>
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
              <span className={classes.delayStyle}>
                {t(text.dataReq)}
                <sup>*</sup>
              </span>
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
                  font: font14MullerRegular,
                }}
                dangerouslySetInnerHTML={{
                  __html: t(text.addonsAll, {
                    interpolation: { escapeValue: false },
                  }),
                }}
              />
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
                  <span className={classes.periodSpace}>&nbsp;</span>
                  {t('MS5PerMonth')}
                </p>
              )}
            </div>

            {value == 'two' && (
              <Typography className={classes.priceSave}>{t('MS5Save240aYear')}</Typography>
            )}
            <Button
              href={value == 'one' ? text.link13 : value == 'two' ? text.link23 : text.link33}
            >
              {t('MS5SelectGlobalPlus')}
            </Button>
          </div>
        </Box>
      </Box>
      <Box sx={{ marginLeft: '300px' }}>
        <p className={classes.lifetimeMessage}>
          <sup>*</sup>
          {t(text.endtext)}
        </p>
        <div className={classes.cta}>
          <p>{t('MS5CantDecideWhichPlanIsRightForYou')}</p>
          <a href="https://bookmap.com/packages-comparison" target="_blank" rel={'noreferrer'}>
            {t('MS5ClickHere')}
          </a>
        </div>
      </Box>
    </Container>
  )
}
export default TabsSection5

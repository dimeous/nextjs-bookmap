import React from 'react'
import { styles } from '../Crypto/CryptoSection4PricingStyles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import {
  Button,
  Grid,
  Paper,
  Card,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
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
      <li key={i}>
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
    <div style={{ backgroundColor: '#F6F8FA' }}>
      <Container fixed style={{ marginBottom: '145px' }}>
        <div id="pricing" style={{ position: 'absolute', marginTop: '-140px' }}></div>
        <div className={classes.root}>
          <Typography component="h2" variant="h2">
            {text.h1}
          </Typography>
          <Typography component="h3" variant="h3">
            {text.h2}
          </Typography>

          <Paper square={false} className={classes.paperTabs}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
              className={classes.tabs}
              classes={{ indicator: classes.noIndicator }}
            >
              <Tab
                value="one"
                label={text.l1}
                wrapped
                {...a11yProps('one')}
                classes={{ selected: classes.selectedTab }}
              />
              <Tab
                value="two"
                label={text.l2}
                {...a11yProps('two')}
                classes={{ selected: classes.selectedTab }}
              />
            </Tabs>
            <div className={classes.circle}> </div>
          </Paper>
          <div>
            <span className={classes.tabTwo}>*15% discount{"'"} for the Yearly subscription</span>
          </div>
        </div>
        <Grid container>
          <Grid item md={6}>
            <Card className={classes.noCard}>
              <CardContent>
                <Box sx={{ pl: 2 }}>
                  <Typography component="h3" variant="h3" className={classes.cardT1}>
                    {text.t1}
                  </Typography>
                  <Typography component="h4" variant="h4" className={classes.cardT2}>
                    Free
                  </Typography>
                </Box>
                <List className={classes.list}>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r1} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r2} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r3} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r4} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r5} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <HighlightOffIcon className={classes.clsIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r61} className={classes.clsText} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <HighlightOffIcon className={classes.clsIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r7} className={classes.clsText} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <HighlightOffIcon className={classes.clsIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r8} className={classes.clsText} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <HighlightOffIcon className={classes.clsIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r9} className={classes.clsText} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <HighlightOffIcon className={classes.clsIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r10} className={classes.clsText} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <HighlightOffIcon className={classes.clsIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r11} className={classes.clsText} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <HighlightOffIcon className={classes.clsIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r12} className={classes.clsText} />
                  </ListItem>
                </List>
              </CardContent>
              <CardActions className={classes.cardAction}>
                <Button
                  variant="contained"
                  color="secondary"
                  href="https://bookmap.com/members/signup/thAhOgYUg"
                >
                  {text.b1}
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card>
              <CardContent>
                <Box sx={{ pl: 2 }}>
                  <Typography component="h3" variant="h3" className={classes.cardT1}>
                    {text.t1}
                  </Typography>
                  <Box>
                    <Typography
                      component="h4"
                      variant="h4"
                      className={classes.cardT2}
                      style={{ display: 'inline-block' }}
                    >
                      {value == 'one' && 19}
                      {value == 'two' && 195}$
                    </Typography>
                    <Typography
                      className={classes.priceCurrency}
                      style={{ marginLeft: '10px', fontSize: '20px', display: 'inline-block' }}
                    >
                      {value == 'one' && 'per month'}
                      {value == 'two' && 'annual'}
                    </Typography>
                  </Box>
                </Box>
                <List className={classes.list}>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r1} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r2} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r3} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r4} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r5} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r62} className={classes.clsText} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r7} className={classes.clsText} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r8} className={classes.clsText} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r9} className={classes.clsText} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r10} className={classes.clsText} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={text.r11} className={classes.clsText} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} style={{ color: '#F08C3C' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={text.r12}
                      className={classes.clsText}
                      style={{ color: '#F08C3C' }}
                    />
                  </ListItem>
                </List>
              </CardContent>
              <CardActions className={classes.cardAction}>
                <Button
                  variant="contained"
                  color="secondary"
                  href={value == 'one' ? text.link12 : text.link22}
                >
                  {text.b2}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <p className={classes.lifetimeMessage}>{text.endtext}</p>
        <div className={classes.cta}>
          <p>Trading Stocks or Futures? Explore more features and opportunities Bookmap provides</p>
          <a href="https://bookmap.com/#pricing" target="_blank" rel={'noreferrer'}>
            Compare Prices & Packages
          </a>
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
                  <CheckCircleIcon className={classes.chIcon} />
                </p>
              </li>
              <li>
                <p>
                  <CheckCircleIcon className={classes.chIcon} />
                </p>
              </li>
              <li>
                <p>
                  <CheckCircleIcon className={classes.chIcon} />
                </p>
              </li>
              <li>
                <p>
                  <CheckCircleIcon className={classes.chIcon} />
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
                  <HighlightOffIcon className={classes.clsIcon} />
                </p>
              </li>
              <li>
                <p>
                  <HighlightOffIcon className={classes.clsIcon} />
                </p>
              </li>
              <li>
                <p>
                  <HighlightOffIcon className={classes.clsIcon} />
                </p>
              </li>
              <li>
                <p>
                  <HighlightOffIcon className={classes.clsIcon} />
                </p>
              </li>
              <li>
                <p>
                  <HighlightOffIcon className={classes.clsIcon} />
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
                  <CheckCircleIcon className={classes.chIcon} />
                </p>
              </li>
              <li>
                <p>
                  <CheckCircleIcon className={classes.chIcon} />
                </p>
              </li>
              <li>
                <p>
                  <CheckCircleIcon className={classes.chIcon} />
                </p>
              </li>
              <li>
                <p>
                  <CheckCircleIcon className={classes.chIcon} />
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
                  <CheckCircleIcon className={classes.chIcon} />
                </p>
              </li>
              <li>
                <p>
                  <CheckCircleIcon className={classes.chIcon} />
                </p>
              </li>
              <li>
                <p>
                  <CheckCircleIcon className={classes.chIcon} />
                </p>
              </li>
              <li>
                <p>
                  <CheckCircleIcon className={classes.chIcon} />
                </p>
              </li>
              <li>
                <p>
                  <CheckCircleIcon className={classes.chIcon} />
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
              {value == 'two' && (
                <Typography className={classes.priceSave}>Save $28 a year</Typography>
              )}
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
        <p className={classes.lifetimeMessage}>{text.endtext}</p>
        <div className={classes.cta}>
          <p>Trading Stocks or Futures? Explore more features and opportunities Bookmap provides</p>
          <a href="https://bookmap.com/#pricing" target="_blank" rel={'noreferrer'}>
            Compare Prices & Packages
          </a>
        </div>
      </Container>
    </div>
  )
}

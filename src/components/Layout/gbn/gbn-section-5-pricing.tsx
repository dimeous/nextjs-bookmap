import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { getUTMUrlDependsOnPage } from '../../../lib'
import { defaultText } from './gbn-section-5-content'
import { styles } from './gbn-section-5-pricing-styles'

function a11yProperties(index: any) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  }
}

const useStyles = styles

type ElementProperties = {
  page?: string
}

const GbnSection5Pricing = ({ page }: ElementProperties): React.ReactElement => {
  const classes = useStyles()
  const [value, setValue] = React.useState('two')
  const text = defaultText(page)
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue)
  }
  const addToLink = getUTMUrlDependsOnPage(page)
  const { t } = useTranslation('crypto')
  return (
    <div style={{ backgroundColor: '#F6F8FA' }}>
      <Container fixed className={classes.container}>
        <div className={classes.root}>
          <Typography component="h2" variant="h2" sx={{ pb: 1, mb: 0 }}>
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
          </Tabs>
          <div>
            <span className={classes.tabTwo}>{t(text.l4)} </span>
          </div>
        </div>
        <Grid container style={{ paddingTop: '24px' }}>
          <Grid item md={6}>
            <Box className={classes.noCard}>
              <CardContent>
                <Box sx={{ pl: 2 }}>
                  <Typography component="h3" variant="h3" className={classes.cardT1}>
                    {t(text.t1)}
                  </Typography>
                  <Typography component="h4" variant="h4" className={classes.cardT2}>
                    {t('CS5Free')}
                  </Typography>
                </Box>
                <List className={classes.list}>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={t(text.r1)} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={t(text.r2)} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={t(text.r3)} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={t(text.r4)} />
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
                    <ListItemText primary={t(text.r7)} className={classes.clsText} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <HighlightOffIcon className={classes.clsIcon} />
                    </ListItemIcon>
                    <ListItemText primary={t(text.r8)} className={classes.clsText} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <HighlightOffIcon className={classes.clsIcon} />
                    </ListItemIcon>
                    <ListItemText primary={t(text.r9)} className={classes.clsText} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <HighlightOffIcon className={classes.clsIcon} />
                    </ListItemIcon>
                    <ListItemText primary={t(text.r10)} className={classes.clsText} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <HighlightOffIcon className={classes.clsIcon} />
                    </ListItemIcon>
                    <ListItemText primary={t(text.r11)} className={classes.clsText} />
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
                  href={'https://bookmap.com/members/signup/thAhOgYUg' + addToLink}
                >
                  {t(text.b1)}
                </Button>
              </CardActions>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Card>
              <CardContent>
                <Box sx={{ pl: 2 }}>
                  <Typography component="h3" variant="h3" className={classes.cardT1}>
                    {t(text.t2)}
                  </Typography>
                  <Box>
                    <Typography
                      component="h4"
                      variant="h4"
                      className={classes.cardT2}
                      style={{ display: 'inline-block' }}
                    >
                      <b style={{ fontSize: '20px' }}>$</b>
                      {value == 'one' && 19}
                      {value == 'two' && 195}
                    </Typography>
                    <Typography
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
                    <ListItemText primary={t(text.r1)} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={t(text.r2)} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={t(text.r3)} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={t(text.r4)} />
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
                    <ListItemText primary={text.r62} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={t(text.r7)} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={t(text.r8)} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={t(text.r9)} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={t(text.r10)} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} />
                    </ListItemIcon>
                    <ListItemText primary={t(text.r11)} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon className={classes.chIcon} style={{ color: '#F08C3C' }} />
                    </ListItemIcon>
                    <ListItemText primary={text.r12} style={{ color: '#F08C3C' }} />
                  </ListItem>
                </List>
              </CardContent>
              <CardActions className={classes.cardAction}>
                <Button
                  variant="contained"
                  color="secondary"
                  href={(value == 'one' ? text.link12 : text.link22) + addToLink}
                >
                  {t(text.b2)}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <div className={classes.cta}>
          <Typography sx={{ pt: 4, pb: 4 }}>
            {t(text.endText)}
            <a
              href={'https://bookmap.com/' + addToLink + '#pricing'}
              target="_blank"
              rel={'noreferrer'}
              style={{ textTransform: 'none' }}
            >
              Compare Prices & Packages
            </a>
          </Typography>
        </div>
      </Container>
    </div>
  )
}
export default GbnSection5Pricing

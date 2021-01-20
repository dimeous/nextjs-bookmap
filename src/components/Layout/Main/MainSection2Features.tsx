import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
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
    marginBottom: '145px',
    backgroundColor: theme.palette.background.paper,
  },
  link: {
    color: theme.palette.primary.light,
    textTransform: 'uppercase',
    font: '12px/13px MullerMedium,sans-serif',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
    },
  },
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%',
    '& p': {
      marginBottom: '35px',
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '24px',
    },
  },
}))

export default function MainSection2Features() {
  const classes = useStyles()
  const [value, setValue] = React.useState('one')

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Container fixed>
      <div id="features" style={{ position: 'absolute', marginTop: '-140px' }}></div>
      <Box className={classes.root}>
        <Typography component="h1" variant="h2">
          Bookmap features
        </Typography>

        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab value="one" label="HEATMAP" wrapped {...a11yProps('one')} />
          <Tab value="two" label="VOLUME" {...a11yProps('two')} />
          <Tab value="three" label="INDICATORS" {...a11yProps('three')} />
        </Tabs>

        <TabPanel value={value} index="one">
          <Grid container>
            <Grid item md={8} xs={12}>
              <Image
                src="/static/main/s2/1_features_block.png"
                alt="Heatmap shows the historical limit"
                width={618}
                height={334}
                layout="responsive"
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <Container className={classes.textBlock}>
                <Typography>
                  The heatmap shows the historical limit order book (historical liquidity).
                </Typography>
                <Typography>
                  With the help of the heatmap, you can quickly grasp which price levels are trusted
                  by the market, allowing you to rapidly react to changes in sentiment. Read
                  liquidity like a map, and locate better trading opportunities.
                </Typography>
                <Link href="https://bookmap.com/features/" className={classes.link}>
                  Details about features
                </Link>
              </Container>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index="two">
          <Grid container>
            <Grid item md={8} xs={12}>
              <Image
                src="/static/main/s2/2_features_block.png"
                alt="Heatmap shows the historical limit"
                width={618}
                height={334}
                layout="responsive"
              />
            </Grid>
            <Grid item md={8} xs={12}>
              <Container className={classes.textBlock}>
                <Typography>
                  Watch the traded volume and identify the side in control by using Volume Delta,
                  Advance Volume Profiles, and Cumulative Volume Delta tools.
                </Typography>
                <Typography>
                  See volume dots & volume delta right on the chart, without the need to wait for
                  the bar to load.
                </Typography>
                <Link href="https://bookmap.com/features/" className={classes.link}>
                  Details about features
                </Link>
              </Container>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index="three">
          <Grid container>
            <Grid item md={8} xs={12}>
              <Image
                src="/static/main/s2/3_features_block.png"
                alt="Heatmap shows the historical limit"
                width={618}
                height={334}
                layout="responsive"
              />
            </Grid>
            <Grid item md={8} xs={12}>
              <Container className={classes.textBlock}>
                <Typography>
                  Based on traders’ requests and Bookmap’s expertise in HFT trading, Bookmap
                  developers have created a unique set of indicators that add transparency and cover
                  most of traders’ needs.
                </Typography>
                <Typography>
                  Confirm your trades with Imbalance Indicator, Strength Level Indicator, Large Lot
                  Tracker, Advanced Volume Delta, and more.
                </Typography>
                <Link href="https://bookmap.com/features/" className={classes.link}>
                  Details about features
                </Link>
              </Container>
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </Container>
  )
}

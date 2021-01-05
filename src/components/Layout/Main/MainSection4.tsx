import React from 'react'
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
  link: {
    color: theme.palette.primary.light,
  },
}))

export default function TabsWrappedLabelSection4() {
  const classes = useStyles()
  const [value, setValue] = React.useState('one')

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Container fixed>
      <div className={classes.root}>
        <Typography component="h2" variant="h2">
          Connectivity
        </Typography>
        <Typography component="h2" variant="subtitle1">
          Bookmap is compatible with many data providers / exchanges
        </Typography>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
            <Tab value="one" label="FUTURES" wrapped {...a11yProps('one')} />
            <Tab value="two" label="STOCKS" {...a11yProps('two')} />
            <Tab value="three" label="CRYPTO" {...a11yProps('three')} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index="one">
          <Box></Box>
        </TabPanel>
        <TabPanel value={value} index="two">
          <Box></Box>
        </TabPanel>
        <TabPanel value={value} index="three">
          <Box></Box>
        </TabPanel>
      </div>
    </Container>
  )
}

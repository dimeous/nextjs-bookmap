import { Button, ButtonBase } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { Theme } from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

import { ThemeElements } from '../../../theme/theme-styles'

interface TabPanelProperties {
  children?: React.ReactNode
  index: number
  value: any
}

const TabPanel = (props: TabPanelProperties) => {
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

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    ...ThemeElements.rootBlockProps,
    backgroundColor: theme.palette.background.paper,
  },
}))

const WebS3 = () => {
  const classes = useStyles()
  const [clicked, setClicked] = React.useState(0)
  const [value, setValue] = React.useState<number>(1)

  const handleChange = (newValue: number) => {
    setValue(newValue)
    setClicked(1)
  }

  return (
    <Container fixed>
      <Box className={classes.root}>
        <Grid container>
          <Grid item xs={4}>
            <ButtonBase
              onClick={() => {
                setValue(1)
              }}
            >
              <Box>
                <Typography>Large</Typography>
                <Typography>Large</Typography>
              </Box>
            </ButtonBase>
          </Grid>
          <Grid item xs={4} alignContent={'center'}>
            <ButtonBase
              onClick={() => {
                setValue(2)
              }}
            >
              <Box>
                <Typography>Large</Typography>
                <Typography>Large</Typography>
              </Box>
            </ButtonBase>
          </Grid>
          <Grid item xs={4}>
            <ButtonBase
              onClick={() => {
                setValue(3)
              }}
            >
              3
            </ButtonBase>
          </Grid>
        </Grid>

        <TabPanel value={value} index={1}>
          1
        </TabPanel>
        <TabPanel value={value} index={2}>
          2
        </TabPanel>
        <TabPanel value={value} index={3}>
          3
        </TabPanel>
      </Box>
    </Container>
  )
}
export default WebS3

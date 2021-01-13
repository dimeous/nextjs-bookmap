import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core'
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
const useStyles = makeStyles((theme) => ({
  root: {},
  reviewsAuthor: {
    display: 'block',
    transition: '.3s ease',
    font: '16px/24px MullerRegular,sans-serif',
    maxWidth: '113px',
  },
  reviewsBox: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '125px',
  },
  imageBlock: {
    paddingRight: '40px',
    cursor: 'pointer',
  },
}))

export default function TabsWrappedLabelSection7() {
  const classes = useStyles()
  const [value, setValue] = React.useState(1)

  return (
    <Container fixed className={classes.root}>
      <Box className={classes.reviewsBox}>
        <Box className={classes.imageBlock} onClick={() => setValue(1)}>
          <Image
            src="/static/main/s7/futures.png"
            width={150}
            height={150}
            alt={'Futures Trader 71'}
          />
          <span className={classes.reviewsAuthor}>Futures Trader 71</span>
        </Box>
        <Box className={classes.imageBlock} onClick={() => setValue(2)}>
          <Image
            src="/static/main/s7/walter.jpg"
            width={150}
            height={150}
            alt={'Walter L, Futures Trader'}
          />
          <span className={classes.reviewsAuthor}>Walter L, Futures Trader</span>
        </Box>
        <Box className={classes.imageBlock} onClick={() => setValue(3)}>
          <Image
            src="/static/main/s7/jason2.jpg"
            width={150}
            height={150}
            alt="Jason Ramus, Day trader"
          />
          <span className={classes.reviewsAuthor}>Jason Ramus, Day trader</span>
        </Box>
      </Box>
      <TabPanel value={value} index={1}>
        1
      </TabPanel>
      <TabPanel value={value} index={2}>
        2
      </TabPanel>
      <TabPanel value={value} index={3}>
        3
      </TabPanel>
    </Container>
  )
}

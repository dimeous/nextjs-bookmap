import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'next-i18next'
import React from 'react'

import Reviews from './main-section-7-reviews'

interface TabPanelProperties {
  children?: React.ReactNode
  index: any
  value: any
}

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

export default function TabsWrappedLabelSection7() {
  const [value, setValue] = React.useState('one')

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue)
  }
  const { t } = useTranslation('main')
  return (
    <Container fixed style={{ marginBottom: '24px' }}>
      <Typography component="h2" variant="h2">
        {t('MS7SomeGoodWordsAboutBookmap')}
      </Typography>
      <Tabs value={value} onChange={handleChange} aria-label="Some good words about Bookmap®">
        <Tab value="one" label={t('MS7TESTIMONIALS')} wrapped {...a11yProperties('one')} />
      </Tabs>
      <TabPanel value={value} index="one">
        <Reviews />
      </TabPanel>
      <TabPanel value={value} index="two"></TabPanel>
    </Container>
  )
}

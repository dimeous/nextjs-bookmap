import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ProTip from '../src/ProTip'
import Link from '../src/Link'
import Copyright from '../src/Copyright'
import TrustPreloadPilot from '../src/components/trustPreloadPilot'
import Paper from '@material-ui/core/Paper'
import MainSection0 from '../src/components/Layout/Main/MainSection0'
import MainSection1 from '../src/components/Layout/Main/MainSection1'
import MainSection2 from '../src/components/Layout/Main/MainSection2'
import MainSection3 from '../src/components/Layout/Main/MainSection3'
import MainSection4 from '../src/components/Layout/Main/MainSection4'
import MainSection5Pricing from '../src/components/Layout/Main/MainSection5Pricing'

export default function Index() {
  return (
    <main style={{ paddingTop: 80 }}>
      <Paper>
        <MainSection0 />
      </Paper>
      <Paper>
        <MainSection1 />
        <MainSection2 />
        <MainSection3 />
        <MainSection4 />
        <MainSection5Pricing />
        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Next.js v5-alpha with TypeScript example
            </Typography>
            <Link href="/about" color="secondary">
              Go to the about page
            </Link>
            <Typography>
              <TrustPreloadPilot></TrustPreloadPilot>
            </Typography>
            <Typography></Typography>
            <ProTip />
            <Copyright />
          </Box>
        </Container>
      </Paper>
    </main>
  )
}

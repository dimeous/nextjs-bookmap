import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ProTip from '../src/ProTip'
import Link from '../src/Link'
import Copyright from '../src/Copyright'
import TrustPreloadPilot from '../src/components/trustPreloadPilot'
import ReactPlayer from 'react-player'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

export default function Index() {
  return (
    <main style={{ paddingTop: 80 }}>
      <Paper>
        <Container fixed>
          <Grid container>
            <Grid item md={6}>
              <Typography component="h1" color="inherit" gutterBottom>
                So, what is Bookmap?
              </Typography>
              <Typography color="inherit" paragraph>
                Bookmap<span>®</span>️ trading platform accurately shows the entire market liquidity
                and trading activities. Identify market trends & hidden price patterns with high
                precision.
              </Typography>
            </Grid>
            <Grid item md={6}>
              <ReactPlayer url="https://youtu.be/387ouy6QGPI" controls />
            </Grid>
          </Grid>
        </Container>
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

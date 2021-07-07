import { Avatar, Box, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import React from 'react'

import TradSteps from './trad-section-4-steps'
import {ThemeElements} from "../../../theme/theme-styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    ...ThemeElements.rootBlockProps,
    [theme.breakpoints.down('md')]: {
      marginBottom: '16px',
    },
  },
  container: {
    paddingTop: '150px',
    paddingBottom: '75px',
  },
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    '& ul>li': {
      fontFamily: 'MullerMedium, sans-serif',
    },
  },
  title: {
    fontFamily: 'MullerMedium, sans-serif',
    color: '#124258',
    fontSize: '16px',
    lineHeight: '28px',
    marginTop: '30px',
  },
  picCard: {
    width: '100%',
    marginTop: 'auto',
    marginBottom: 'auto',
    height: '246px',
    [theme.breakpoints.down('md')]: {
      marginTop: '32px',
      height: 'auto',
    },
  },
  text: {
    color: '#124258',
    fontSize: '20px',
    lineHeight: '32px',
  },
  icon: {
    height: '28px',
    width: '40%',
    borderRadius: '5px',
    fontSize: '16px',
  },
}))

type ElementProperties = {
  page?: string
}
const TradSection4 = ({ page }: ElementProperties): React.ReactElement => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container fixed className={classes.container}>
        <Grid container spacing={10}>
          <Grid item md={6} xs={12}>
            <Container className={classes.textBlock}>
              <Typography
                component="h2"
                variant="h2"
                color="inherit"
                gutterBottom
                sx={{ color: '#124258', fontWeight: 800 }}
              >
                Why choose Bookmap ?
              </Typography>
              <Typography variant="body1" color="inherit" gutterBottom className={classes.title}>
              To get full market transparency with the best high performance heatmap visualization platform.<br></br>
              Bookmap®️ - market data visualization platform accurately shows full market liquidity and the entire market’s depth. Identify market trends & hidden price patterns with high precision.
              </Typography>
            </Container>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box>
              <Image
                src={'/static/tradovate/Why trade with bookmap.png'}
                alt={'why trade with bookmap'}
                width={636}
                height={350}
                layout="intrinsic"
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={10} mt={4}>
          <Grid item md={6} xs={12}>
            <Box>
              <Image
                src={'/static/tradovate/WhyTradvate.png'}
                alt={'why trade with bookmap'}
                width={636}
                height={350}
                layout="intrinsic"
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Container className={classes.textBlock}>
              <Typography
                component="h2"
                variant="h2"
                color="inherit"
                gutterBottom
                sx={{ color: '#124258', fontWeight: 800 }}
              >
                Why Tradovate &amp; FairX?
              </Typography>
              <Typography variant="h5" color="inherit" gutterBottom className={classes.title}>
                Get high quality brokerage service with ZERO fees
              </Typography>
              <Avatar
                variant="square"
                style={{ backgroundColor: 'rgba(238, 106, 0, 0.1)', color: '#EE6A00' }}
                className={classes.icon}
              >
                Account minimum is $0
              </Avatar>
            </Container>
          </Grid>
        </Grid>

        <Typography
          my={10}
          variant="h2"
          style={{ textAlign: 'center', color: '#124258', fontWeight: 700 }}
        >
          Get started in three simple steps
        </Typography>
        <TradSteps />
      </Container>
    </div>
  )
}
export default TradSection4

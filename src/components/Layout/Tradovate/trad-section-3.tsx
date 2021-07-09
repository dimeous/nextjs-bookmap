import { Box, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import React from 'react'
import {ThemeColors} from "../../../theme/theme-styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    backgroundColor: ThemeColors.BGGrey,
    [theme.breakpoints.down('md')]: {
      marginBottom: '16px',
    },
  },
  container: {
    paddingTop: '75px',
    paddingBottom: '75px',
  },
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    '& ul>li': {
      fontFamily: 'MullerMedium, sans-serif',
    },
  },
  title: {
    fontFamily: 'MullerMedium, sans-serif',
    color: ThemeColors.DarkBlue,
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
    color: ThemeColors.DarkBlue,
    fontSize: '20px',
    lineHeight: '32px',
  },
}))

type ElementProperties = {
  page?: string
}
const TradSection3 = ({ page }: ElementProperties): React.ReactElement => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container fixed className={classes.container}>
        <Grid container>
          <Grid item md={12} xs={12}>
            <Container className={classes.textBlock}>
              <Typography
                component="h2"
                variant="h2"
                color="inherit"
                gutterBottom
                sx={{ color: ThemeColors.DarkBlue, fontWeight: 800 }}
              >
                FairX is a new future’s exchange
              </Typography>
              <Typography
                component="h5"
                variant="h5"
                color="inherit"
                gutterBottom
                className={classes.title}
              >
                designed for retail traders.
              </Typography>
            </Container>
          </Grid>
        </Grid>
        <Grid container mt={5}>
          <Grid item md={5} xs={12} mr={10}>
            <Box className={classes.picCard}>
              <Box>
                <Image
                  src={'/static/tradovate/fairx-new-futures.png'}
                  alt={'FairX is a new futures'}
                  width={636}
                  height={350}
                  layout="intrinsic"
                />
              </Box>
            </Box>
          </Grid>
          <Grid item md={5} xs={12} ml={10}>
            <Typography variant="body1" className={classes.text}>
              Products are at a smaller scale including:
            </Typography>
            <Typography
              variant="body1"
              className={classes.text}
              style={{ fontSize: '18px' }}
              pt={2}
            >
              <ul style={{ paddingLeft: '18px' }}>
                <li>Nano Bloomberg US Large Cap Index Futures (B5)</li>
                <li>Micro Bloomberg US Large Cap Index Futures (LB5)</li>
                <li>Nano SuperTech Index Futures (TEC)</li>
                <li>Micro SuperTech Index Futures (LTEC)</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
export default TradSection3

import { Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#124258',
    [theme.breakpoints.down('md')]: {
      marginBottom: '16px',
    },
  },
  container: {
    paddingTop: '100px',
    paddingBottom: '100px',
  },
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: "flex-start",
    '& ul>li': {
      fontFamily: 'MullerMedium, sans-serif',
    },
  },
  title: {
    fontFamily: 'MullerMedium, sans-serif',
    color: '#fff',
    fontSize: "25px",
    lineHeight: "32px",
    fontWeight: 500
  },
  text:{
      color: "#fff",
      fontSize: "16px",
      lineHeight: "25px"
  }
}))

type ElementProperties = {
  page?: string
}
const TradSection5 = ({ page }: ElementProperties): React.ReactElement => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container fixed className={classes.container}>
        <Grid container>
          <Grid item md={4} xs={12}>
            <Container className={classes.textBlock}>
              <Typography
                component="h2"
                variant="h2"
                color="inherit"
                gutterBottom
                className={classes.title}
              >
                FairX was created with retail traders in mind
              </Typography>
              <Typography
                component="h5"
                variant="h5"
                color="inherit"
                gutterBottom
                className={classes.text}
              >
                Micro &amp; New Nano Contracts Available Smaller contract size and margins as low as $10.
              </Typography>
            </Container>
          </Grid>
          <Grid item md={4} xs={12}>
            <Container className={classes.textBlock}>
              <Typography
                component="h2"
                variant="h2"
                color="inherit"
                gutterBottom
                className={classes.title}
              >
                Most Contracts Expire the 3rd Thursday of the Month
              </Typography>
              <Typography
                component="h5"
                variant="h5"
                color="inherit"
                gutterBottom
                className={classes.text}
              >
                Contracts terminate trading at 4 pm ET on the 3rd Thursday of the contract month. 
              </Typography>
            </Container>
          </Grid>
          <Grid item md={4} xs={12}>
            <Container className={classes.textBlock}>
              <Typography
                component="h2"
                variant="h2"
                color="inherit"
                gutterBottom
                className={classes.title}
              >
                23-5 Access to <p style={{margin: "0px"}}>Trading</p>
              </Typography>
              <Typography
                component="h5"
                variant="h5"
                color="inherit"
                gutterBottom
                className={classes.text}
              >
                Markets are open from <p style={{margin: "0px"}}> Sunday - Friday, 6 pm - 5 pm ET </p> 
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
export default TradSection5

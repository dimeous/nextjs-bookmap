import { Box, Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles({
  col: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  line: {
    borderTop: '2px dashed #8DA2AC',
    width: '100%',
    height: '1px',
  },
  number: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100px',
    height: '80px',
    borderRadius: '50px',
    backgroundColor: '#EAF5FF',
    color: '#0085F9',
    fontSize: '40px',
  },
  text: {
    color: '#124258',
    fontSize: '16px',
    lineHeight: '28px',
    fontWeight: 500,
  },
  button: {
    marginTop: '30px',
    padding: '8px 24px',
  },
})

const TradSteps = () => {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item md={4}>
        <div className={classes.col}>
          <span className={classes.number}>1</span>
          <div className={classes.line}></div>
        </div>
        <Box mt={4}>
          <Typography className={classes.text} variant="body1">
            Click the button below and sign up for Bookmap. Download the software and activate your
            unique license. (You won’t be able to connect to FairX just yet).
          </Typography>
          <Button
            id={'main_top_start_for_free'}
            className={classes.button}
            variant="contained"
            color="secondary"
            href={'https://bookmap.com/members/signup/C0ogLHLr?_lang=en'}
          >
            Get Bookmap for FairX
          </Button>
        </Box>
      </Grid>
      <Grid item md={4}>
        <div className={classes.col}>
          <span className={classes.number}>2</span>
          <div className={classes.line}></div>
        </div>
        <Box mt={4}>
          <Typography className={classes.text} variant="body1">
            Next, visit our broker partner Tradovate and create an account. Once you have received
            credentials from Tradovate you will be able to access the data for the FairX exchange.
            <p style={{ margin: '0px', color: 'grey' }}>
              (If you already have a Tradovate account, skip to step 3).
            </p>
            <Button
              id={'main_top_start_for_free'}
              className={classes.button}
              variant="contained"
              color="secondary"
              href={
                'http://info.tradovate.com/bookmap?utm_campaign=fairx&utm_source=bookmap&utm_medium=referral&utm_content=offer'
              }
            >
              Go to Tradovate
            </Button>
          </Typography>
        </Box>
      </Grid>
      <Grid item md={4}>
        <div className={classes.col}>
          <span className={classes.number}>3</span>
          <div className={classes.line}></div>
        </div>
        <Typography className={classes.text} mt={4} variant="body1">
          Open the Bookmap platform and configure your FairX connection, including entering your
          Tradovate credentials. Subscribe to your FairX symbol of choice and visualize it in the
          heatmap display. Now you can start trading on Bookmap through your Tradovate account.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default TradSteps

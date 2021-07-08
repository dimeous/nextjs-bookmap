import { Grid } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import React from 'react'
import {ThemeColors} from "../../../theme/theme-styles";

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

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  reviewsAuthor: {
    display: 'block',
    transition: '.3s ease',
    font: '16px/24px MullerRegular,sans-serif',
    textTransform: 'uppercase',
  },
  reviewsBox: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '125px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '24px',
    },
  },
  imageBlock: {
    height: '75px',
    width: '75px',
    cursor: 'pointer',
    transformOrigin: '50% 50%',
    filter: 'grayscale(100%)',
    opacity: '.5',
    '& span': {
      maxWidth: '88px',
      display: 'inline-block',
      fontSize: '12px',
      lineHeight: '18px',
      textAlign: 'center',
      transition: '.3s ease',
    },
  },
  isActiveBlock: {
    filter: 'grayscale(0)',
    opacity: '1',
    transition: '.5s ease',
    height: '150px',
    width: '150px',
    '& span': {
      display: 'inline-block',
      textAlign: 'center',
      transition: '.3s ease',
    },
  },
  reviewsText: {
    color: ThemeColors.TextBlack,
    font: '14px/16px MullerLight,sans-serif',
  },
}))

export default function TabsWrappedLabelSection7() {
  const classes = useStyles()
  const [value, setValue] = React.useState(4)

  return (
    <Container fixed className={classes.root}>
      <Box className={classes.reviewsBox}>
        <Box
          className={value === 1 ? classes.isActiveBlock : classes.imageBlock}
          onClick={() => setValue(1)}
        >
          <Image
            src="/static/main/s7/futures.png"
            alt={'Futures Trader 71'}
            width={150}
            height={150}
          />
          <span className={classes.reviewsAuthor}>Futures Trader 71</span>
        </Box>
        <Box
          className={value === 2 ? classes.isActiveBlock : classes.imageBlock}
          onClick={() => setValue(2)}
        >
          <Image
            src="/static/main/s7/walter.jpg"
            width={150}
            height={150}
            alt={'Walter L, Futures Trader'}
          />
          <span className={classes.reviewsAuthor}>Walter L, Futures Trader</span>
        </Box>
        <Box
          className={value === 3 ? classes.isActiveBlock : classes.imageBlock}
          onClick={() => setValue(3)}
        >
          <Image
            src="/static/main/s7/jason2.jpg"
            width={150}
            height={150}
            alt="Jason Ramus, Day trader"
          />
          <span className={classes.reviewsAuthor}>Jason Ramus, Day trader</span>
        </Box>
        <Box
          className={value === 4 ? classes.isActiveBlock : classes.imageBlock}
          onClick={() => setValue(4)}
        >
          <Image src="/static/main/s7/jason.png" width={150} height={150} alt="Jason, Oil Trader" />
          <span className={classes.reviewsAuthor}>Jason, Oil Trader</span>
        </Box>
        <Box
          className={value === 5 ? classes.isActiveBlock : classes.imageBlock}
          onClick={() => setValue(5)}
        >
          <Image src="/static/main/s7/la.jpg" width={150} height={150} alt="Jason, Oil Trader" />
          <span className={classes.reviewsAuthor}>Ferran, Trader</span>
        </Box>
        <Box
          className={value === 6 ? classes.isActiveBlock : classes.imageBlock}
          onClick={() => setValue(6)}
        >
          <Image src="/static/main/s7/bewer.jpg" width={150} height={150} alt="Jason, Oil Trader" />
          <span className={classes.reviewsAuthor}>Falk, Trader</span>
        </Box>
      </Box>
      <Grid container>
        <Grid md={2} item>
          <Box sx={{ justifyContent: 'flex-end', width: '80%', display: 'flex' }}>
            <Image src="/static/main/s7/quotes.svg" width={49} height={37} alt="Quotes" />
          </Box>
        </Grid>
        <Grid md={10} item>
          <TabPanel value={value} index={1}>
            <div className={classes.reviewsText}>
              &quot;There hasn’t been a product that has made it easier to see the progression of
              the intent of participants in the market until the pioneering invention of the
              heat-map by Bookmap. It clarifies order flow and market depth intentions much more
              than any product I have used. My only wish: That it had been made available 15 years
              ago when the only way you can see how the order book has changed over time is to
              record the screen and play it back. I refuse to trade without Bookmap.&quot;
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className={classes.reviewsText}>
              &quot;Bookmap is a MUST HAVE if you are a Day Trader and Scalper for any markets. If
              you are looking for that edge in your trading Bookmap will defiantly help you with
              when to enter and exit the trades via visual price action... I give it 10 out of 10
              Stars...&quot;
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className={classes.reviewsText}>
              &quot;BookMap{"'"}s visualization of the order flow helps me see in advance where
              support and resistance areas are located. This is a huge advantage because it helps me
              pick entries and exits in reversals during the trading day, without watching
              flickering numbers in a DOM.&quot;
            </div>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <div className={classes.reviewsText}>
              I am a support / resistance trader and I use this tool to confirm the validity of our
              levels. We understand, is that as we get closer to my levels of interest (decision
              points) the pools of liquidity will accumulate around those levels. The heatmap will
              “light up” around these areas thus confirming entry, target and/or stop locations. The
              market will leave clues…if you know how to read them. This tool provides clarity to
              spotting the market “clues”. Simply put, this tool has been an integral part of what I
              do…and I would not like to think about trading without it.
            </div>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <div className={classes.reviewsText}>
              I was one of the early adopters of Bookmap when it was first launched in late 2014. I
              was fascinated by the heat map concept and the ability to clearly see the real
              liquidity in the market. Bookmap has evolved dramatically since then, with features
              such as new color map and volume dots, historical depth data and many other new
              improvements. Bookmap solidified my confidence in identifying trading opportunities or
              pitfalls to avoid and allows me to take much better trading decisions. I want to
              congratulate the Bookmap team for a truly great trading software, since I couldn’t
              trade now without it.
            </div>
          </TabPanel>
          <TabPanel value={value} index={6}>
            <div className={classes.reviewsText}>
              Many platforms only allow you to analyze the present activity of the order flow via a
              DOM, but with Bookmap our traders at Heldental can analyze the history and present of
              the order flow visually to gain an edge for the future
            </div>
          </TabPanel>
        </Grid>
      </Grid>
    </Container>
  )
}

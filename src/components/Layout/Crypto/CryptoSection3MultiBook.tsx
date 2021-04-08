import React, { Fragment } from 'react'
import { Typography, makeStyles, Box, Card, CardContent } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#E6ECEF',
    marginBottom: '145px',
    [theme.breakpoints.down('md')]: {
      marginTop: '110px',
      marginBottom: '120px',
    },
  },
  textBlock: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'MullerMedium, sans-serif',
  },
  cardHead: {},
  topBlock: {},
  carouselBox: {
    width: '60%',
  },
  picCard: {
    backgroundColor: '#37474F',
  },
}))

export default function CryptoSection3MultiBook() {
  const items = [
    {
      name: 'Binance',
    },
    {
      name: 'Bitstamp',
    },
    {
      name: 'Coinbase',
    },
    {
      name: 'Huobi',
    },
    {
      name: (
        <Fragment>
          <b>Multibook</b> - all 4 combined
        </Fragment>
      ),
    },
  ]
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Container className={classes.textBlock}>
              <Typography
                component="h2"
                variant="h2"
                color="inherit"
                gutterBottom
                className={classes.title}
              >
                New! Multibook
              </Typography>
              <Typography component="h5" variant="h5" color="inherit" gutterBottom>
                One pair across multiple exchanges
              </Typography>
              <Typography color="inherit" paragraph>
                A new feature available in Digital+ allows you to view a consolidated order book and
                traded volume in real-time from multiple exchanges.
              </Typography>
              <Typography component="h3" variant="h3" color="secondary" gutterBottom>
                Main benefits:
              </Typography>
              <div>
                <ul>
                  <li>
                    See market liquidity and traded volume of the largest exchanges in a single
                    chart.
                  </li>
                  <li>View total volume delta across multiple exchanges.</li>
                  <li>Watch Best Bid and Offer from multiple exchanges.</li>
                  <li>Build your own synthetic instrument.</li>
                </ul>
              </div>
            </Container>
          </Grid>
          <Grid item md={6} xs={12}>
            <Card>
              <CardContent>
                <Typography>Limited Time OFFER</Typography>
                <Typography>30 Day | 12 Hours</Typography>
              </CardContent>
            </Card>
            <Card className={classes.picCard}>
              <CardContent>
                <Carousel
                  swipeable={true}
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={5000}
                  keyBoardControl={true}
                  minimumTouchDrag={80}
                  customTransition="all .5"
                  transitionDuration={1000}
                  removeArrowOnDeviceType={['tablet', 'mobile']}
                  draggable={true}
                  arrows={true}
                >
                  {items.map((item, i) => {
                    return (
                      <Box key={i} className={classes.carouselBox}>
                        <Box className={classes.cardHead}>
                          <Typography className={classes.title} gutterBottom>
                            {item.name}
                          </Typography>
                          <Image
                            src={'/static/crypto/s3/' + (i + 1) + '.png'}
                            alt={i + ' img'}
                            width={510}
                            height={400}
                            layout="intrinsic"
                          />
                        </Box>
                      </Box>
                    )
                  })}
                </Carousel>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

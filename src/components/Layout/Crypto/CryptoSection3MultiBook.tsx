import React, { Fragment } from 'react'
import { Typography, makeStyles, Box, Card, CardContent, Button } from '@material-ui/core'
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
  },
  title: {
    fontFamily: 'MullerMedium, sans-serif',
    color: '#124258',
  },
  carouselBox: {
    width: '70%',
    marginLeft: '16%',
    [theme.breakpoints.down('md')]: {
      width: '90%',
      marginLeft: '5%',
    },
  },
  picCard: {
    backgroundColor: '#37474F',
    borderRadius: '10px',
    width: '100%',
    marginTop: '24px',
    height: '340px',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },

  cardStarT1: {
    font: '14px/22px MullerMedium, sans-serif',
  },
  cardStarT2: {
    font: '18px/22px MullerLight, sans-serif',
    color: '#607D8B',
    fontWeight: 700,
  },

  titleCard: {
    width: '265px',
    height: '82px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '9px 16px',
    border: '1px solid #0085F9',
  },
  picTitle: {
    textAlign: 'center',
    font: '22px/32px MullerMedium, sans-serif',
    color: '#fff',
  },
}))

type CardProps = {
  mobile: boolean
}

export default function CryptoSection3MultiBook({ mobile }: CardProps) {
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

  const topCard = (
    <Card className={classes.titleCard}>
      <Box>
        <Image src={'/static/crypto/s3/checkstar.svg'} alt="star" width={48} height={48} />
      </Box>
      <CardContent>
        <Typography className={classes.cardStarT1}>Limited Time OFFER</Typography>
        <Typography className={classes.cardStarT2}>30 Day | 12 Hours</Typography>
      </CardContent>
    </Card>
  )

  return (
    <div className={classes.root}>
      <Container fixed className={classes.container}>
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
              <Typography
                component="h5"
                variant="h5"
                color="inherit"
                gutterBottom
                sx={{ color: '#124258', fontWeight: 800 }}
              >
                One pair across multiple exchanges
              </Typography>
              <Typography color="inherit" paragraph>
                A new feature available in Digital+ allows you to view a consolidated order book and
                traded volume in real-time from multiple exchanges.
              </Typography>
              {mobile && <Box sx={{ pb: '48px', pt: '40px' }}>{topCard}</Box>}
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
              <Button
                variant="contained"
                color="secondary"
                href="https://bookmap.com/members/signup/gv3uiH6Hi?product_id_page-0[]=171-171"
                sx={{ width: '300px' }}
              >
                Get MultiBook with Digital+ &rarr;
              </Button>
            </Container>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'right' }}>{!mobile && topCard}</Box>
            <Card className={classes.picCard}>
              <CardContent>
                <Carousel
                  swipeable={true}
                  responsive={responsive}
                  //  ssr={true}  means to render carousel on server-side.
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={5000}
                  keyBoardControl={true}
                  minimumTouchDrag={80}
                  customTransition="all .5"
                  removeArrowOnDeviceType={['tablet', 'mobile']}
                  draggable={true}
                  arrows={true}
                >
                  {items.map((item, i) => {
                    return (
                      <Box key={i} className={classes.carouselBox}>
                        <Box>
                          <Typography className={classes.picTitle} gutterBottom>
                            {item.name}
                          </Typography>
                          <Image
                            src={'/static/crypto/s3/' + (i + 1) + '.png'}
                            alt={i + ' img'}
                            width={800}
                            height={510}
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

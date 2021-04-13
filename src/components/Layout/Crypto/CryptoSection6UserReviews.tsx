import React, { Fragment } from 'react'
import { Typography, makeStyles, Box, Button } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Image from 'next/image'
import StarIcon from '@material-ui/icons/Star'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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
    width: '20%',
    marginLeft: '16%',
    [theme.breakpoints.down('md')]: {
      width: '20%',
      marginLeft: '5%',
    },
  },
  picCard: {},

  cardStarT1: {
    font: '14px/22px MullerMedium, sans-serif',
  },
  cardStarT2: {
    font: '18px/22px MullerLight, sans-serif',
    color: '#607D8B',
    fontWeight: 700,
  },

  picTitle: {
    textAlign: 'center',
    font: '22px/32px MullerMedium, sans-serif',
  },
}))

const StarsRaiting = function (num: number): JSX.Element {
  const content = []
  for (let i = 0; i < num; i++) content.push(<StarIcon style={{ color: '#0085F9' }} />)
  for (let i = num; i < 5; i++) content.push(<StarIcon style={{ color: '#CCD8DD' }} />)
  return <>{content}</>
}

export default function CryptoSection6UserReviews() {
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

  const classes = useStyles()
  const handleClick = () => {
    console.log()
  }
  return (
    <div className={classes.root}>
      {data}
      <Container fixed className={classes.container}>
        <Grid container>
          <Grid item md={3} xs={12}>
            <Container className={classes.textBlock}>
              <button onClick={handleClick}> Активировать лазеры</button>

              <Typography
                component="h2"
                variant="h2"
                color="inherit"
                gutterBottom
                className={classes.title}
              >
                User Reviews
              </Typography>
              <div>{StarsRaiting(4)}</div>

              <Typography
                component="h5"
                variant="h5"
                color="inherit"
                gutterBottom
                sx={{ color: '#124258', fontWeight: 800 }}
              >
                Great!
              </Typography>
              <div></div>
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
          <Grid item md={9} xs={12}>
            <Box className={classes.picCard}>
              <Box>
                <Carousel
                  swipeable={true}
                  responsive={responsive}
                  //  ssr={true}  means to render carousel on server-side.
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={5000}
                  keyBoardControl={true}
                  minimumTouchDrag={80}
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
                            width={200}
                            height={100}
                            layout="intrinsic"
                          />
                        </Box>
                      </Box>
                    )
                  })}
                </Carousel>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

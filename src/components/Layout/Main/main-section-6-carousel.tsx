import 'react-multi-carousel/lib/styles.css'

import { Box, Card, CardActions, CardContent, Container, Link, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
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
    marginBottom: '145px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '30px',
    },
  },
  card: {
    width: '295px',
    height: '193px',
  },
  cardHead: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'bottom',
  },
  carouselItem: {
    width: '295px',
    height: '193px',
  },
  title: {
    font: '14px/24px MullerMedium, sans-serif',
    fontWeight: 700,
  },
  link: {
    fontSize: '16px',
    lineHeight: '18px',
  },
  descr: {
    paddingTop: '16px',
    fontSize: '1.3rem',
  },
  carouselContainer: {
    paddingLeft: '60px',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '5%',
    },
    '& .react-multiple-carousel__arrow--right': {
      right: 'calc(0% + 1px)',
    },
    '& .react-multiple-carousel__arrow--left': {
      left: 'calc(0% + 1px)',
    },
  },
  action: {
    paddingLeft: '16px',
  },
  cardContent: {
    paddingBottom: 0,
  },
}))

const MainSection6Carousel = () => {
  const items = [
    {
      name: 'Education',
      description: 'Watch experts trade in real-time with BookmapLIVE',
      linkLabel: 'Upgrade to Global Plus',
      link: 'https://bookmap.com/members/signup/yVqUeUzF?product_id_page-0[]=63-63',
    },
    {
      name: 'News',
      description: 'NEW! Join Bookmap Community chat on Discord',
      linkLabel: 'Upgrade to Global Plus',
      link: 'https://bookmap.com/members/signup/yVqUeUzF?product_id_page-0[]=63-63',
    },
    {
      name: 'Features',
      description: 'Explore Bookmap B2B Solution for Crypto, Stocks, Futures',
      linkLabel: 'Become a member',
      link: 'https://bookmap.com/b2b/',
    },
    {
      name: 'Features 2',
      description: 'Explore Bookmap B2B Solution for Crypto, Stocks, Futures',
      linkLabel: 'Become a member',
      link: 'https://bookmap.com/b2b/',
    },
    {
      name: 'Features 3',
      description: 'Explore Bookmap B2B Solution for Crypto, Stocks, Futures',
      linkLabel: 'Become a member',
      link: 'https://bookmap.com/b2b/',
    },
  ]
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Carousel
        swipeable={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={12_000}
        keyBoardControl={true}
        minimumTouchDrag={80}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass={classes.carouselContainer}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        draggable={true}
        arrows={true}
      >
        {items.map((item, index) => {
          return (
            <Card className={classes.card} key={index}>
              <CardContent className={classes.cardContent}>
                <Box className={classes.cardHead}>
                  <Typography className={classes.title} gutterBottom>
                    {item.name}
                  </Typography>
                  <Image
                    src={'/static/main/s6/' + ((index % 3) + 1) + '.svg'}
                    alt={index + ' img'}
                    width={102}
                    height={24}
                    layout="intrinsic"
                  />
                </Box>
                <Typography variant="body2" component="p" className={classes.descr}>
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions className={classes.action}>
                <Link href={item.link} target={'_blank'} color="secondary" className={classes.link}>
                  {item.linkLabel}
                </Link>
              </CardActions>
            </Card>
          )
        })}
      </Carousel>
    </Container>
  )
}

export default MainSection6Carousel

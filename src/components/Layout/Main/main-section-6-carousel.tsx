import 'react-multi-carousel/lib/styles.css'

import { Box, Card, CardActions, CardContent, Container, Link, Typography } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel'

import { CarouselType } from '../../../lib/types'
import { ThemeElements } from '../../../theme/theme-styles'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    ...ThemeElements.rootBlockProps,
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
    font: '16px/24px MullerMedium, sans-serif',
    paddingTop: '12px',
    fontWeight: 700,
  },
  link: {
    fontSize: '16px',
    lineHeight: '18px',
  },
  descr: {
    paddingTop: '12px',
    fontSize: '1.14rem',
    minHeight: '90px',
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

interface CardType {
  data: {
    mainCarousel: CarouselType[]
  }
}
const MainSection6Carousel = ({ data }: CardType): React.ReactElement => {
  const { mainCarousel } = data
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
        containerClass={classes.carouselContainer}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        draggable={true}
        arrows={true}
      >
        {mainCarousel.map((item: CarouselType, index: number) => {
          return (
            <Card className={classes.card} key={index}>
              <CardContent className={classes.cardContent}>
                <Box className={classes.cardHead}>
                  <Image
                    src={'/static/main/s6/' + ((index % 3) + 1) + '.png'}
                    alt={index + ' img'}
                    width={287}
                    height={4}
                    layout="intrinsic"
                  />
                </Box>
                <Typography className={classes.title} gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" component="div" className={classes.descr}>
                  {item.text}
                </Typography>
              </CardContent>
              <CardActions className={classes.action}>
                <Link href={item.link} target={'_blank'} color="secondary" className={classes.link}>
                  {item.labellink}
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

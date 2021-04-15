import React, { Fragment } from 'react'
import {
  Typography,
  makeStyles,
  Box,
  Button,
  CardContent,
  Card,
  Link,
  CardActions,
} from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import StarIcon from '@material-ui/icons/Star'
import Image from 'next/image'
import TrustPreloadPilot from '../../trustPreloadPilot'

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
    marginLeft: '16%',
    height: '367px',
    [theme.breakpoints.down('md')]: {
      width: '90%',
      marginLeft: '5%',
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

  picTitle: {
    textAlign: 'left',
    font: '16px/24px MullerLight, sans-serif',
    color: '#607D8B',
  },
  picTitle2: {
    textAlign: 'left',
    font: '18px/24px MullerMedium, sans-serif',
    color: '#124258',
  },
  picText: {
    textAlign: 'left',
    font: '14px/24px MullerLight, sans-serif',
    color: '#607D8B',
  },
  picCardCont: {
    height: '324px',
  },
  cardAct: {
    alignItems: 'flex-end',
    flex: '1 0 auto',
    paddingLeft: '16px',
    fontSize: '16px',
  },
}))

const StarsRaiting = function (num: number): JSX.Element {
  const content = []
  for (let i = 0; i < num; i++) content.push(<StarIcon style={{ color: '#0085F9' }} />)
  for (let i = num; i < 5; i++) content.push(<StarIcon style={{ color: '#CCD8DD' }} />)
  return <>{content}</>
}

type CardProps = {
  data: string
}

const UserReviews = function (html: string) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  const docArticles = doc.querySelectorAll('article > script')
  const arrReviews = (articles: NodeListOf<Element>) => {
    const reviews: any[] = []
    articles.forEach((v) => {
      const json = JSON.parse(v.innerHTML)
      if (json.stars > 3) reviews.push(json)
    })
    return reviews
  }
  return arrReviews(docArticles)
}
const BookmapReviewParse = function (html: string) {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  const docArticles = doc.querySelector(
    'head > script[type="application/json"][data-initial-state="business-unit-info"]'
  )
  if (docArticles) {
    return JSON.parse(docArticles.innerHTML)
  }
  return null
}

export default function CryptoSection6UserReviews({ data }: CardProps) {
  const usrReviews = UserReviews(data)
  const bokmapReview = BookmapReviewParse(data)
  const classes = useStyles()
  return (
    <div className={classes.root} suppressHydrationWarning={true}>
      <Container fixed className={classes.container}>
        <Grid container>
          <Grid item md={3} xs={12}>
            <Container className={classes.textBlock}>
              <Typography
                component="h2"
                variant="h2"
                color="inherit"
                gutterBottom
                className={classes.title}
              >
                User Reviews
              </Typography>
              <div>{StarsRaiting(Math.floor(bokmapReview.trustScore))}</div>

              <Typography
                component="h5"
                variant="h5"
                color="inherit"
                gutterBottom
                sx={{ color: '#124258', fontWeight: 800 }}
              >
                Great!
              </Typography>
              <Typography gutterBottom sx={{ color: '#607D8B', fontWeight: 800 }}>
                Based on{' '}
                <Link
                  href={'https://www.trustpilot.com/review/bookmap.com'}
                  target={'_blank'}
                  color="secondary"
                  rel={'norefer'}
                >
                  {bokmapReview.numberOfReviews} reviews{' '}
                </Link>{' '}
              </Typography>
              <Box sx={{ pb: 2 }}>
                <Image src="/static/crypto/s6/Trustpilotlogo.png" width={97} height={40} />
              </Box>
              <Button
                variant="contained"
                color="secondary"
                href="https://bookmap.com/members/signup/thAhOgYUg"
                sx={{ width: '100%' }}
              >
                Get Free Bookmap
              </Button>
            </Container>
          </Grid>
          <Grid item md={9} xs={12}>
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
                {usrReviews.map((item, i) => {
                  return (
                    <Card key={i} className={classes.carouselBox}>
                      {/*
                          const a = {
                          socialShareUrl: 'https://www.trustpilot.com/reviews/5fd63956755dc10b48215aa4',
                          businessUnitId: '5c76a89be6713b000151de49',
                          businessUnitDisplayName: 'Bookmap',
                          consumerId: '5fd63956f967dc001ba0539a',
                          consumerName: 'Stephen',
                          consumerProfileImage: null,
                          reviewId: '5fd63956755dc10b48215aa4',
                          reviewHeader: 'Not happy at all.',
                          reviewBody:
                          'Customer support is short and not thorough... There are too many versions of bookmap, Not all the videos pertain to me. Most videos I watch, are showing options on the platform i do not have. I\u0027m an equity / options trader only.. NOT Forex,Futures or Commodities.. I do have investments in Crypto. Maybe this Platform is not for me.. I do not know. Not to mention the price per month is a car payment for most people.',
                          stars: 1,
                        }
                          */}
                      <CardContent className={classes.picCardCont}>
                        {StarsRaiting(item.stars)}
                        <Typography className={classes.picTitle} gutterBottom noWrap>
                          by{' '}
                          <a
                            style={{ color: '#0085F9' }}
                            href={item.socialShareUrl}
                            target={'_blank'}
                            rel={'noreferrer'}
                          >
                            {item.consumerName}
                          </a>
                        </Typography>
                        <Typography className={classes.picTitle2} gutterBottom>
                          {item.reviewHeader}
                        </Typography>

                        <Typography className={classes.picText}>
                          {item.reviewBody.length > 210
                            ? item.reviewBody.substring(0, 210) + '...'
                            : item.reviewBody}
                        </Typography>
                      </CardContent>
                      <CardActions className={classes.cardAct}>
                        <Link
                          href="https://bookmap.com/knowledgebase/docs/KB-IntroductionToBookmap-Connectivity#crypto-connectivity"
                          color="secondary"
                          target={'_blank'}
                          rel={'noreferrer'}
                        >
                          Read More &rarr;
                        </Link>
                      </CardActions>
                    </Card>
                  )
                })}
              </Carousel>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <TrustPreloadPilot render={false} />
    </div>
  )
}

import 'react-multi-carousel/lib/styles.css'

import { Box, Card, CardActions, CardContent, Link, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Theme } from '@material-ui/core/styles'
import StarIcon from '@material-ui/icons/Star'
import { makeStyles } from '@material-ui/styles'
import React, { Fragment } from 'react'
import Carousel from 'react-multi-carousel'

import { ThemeColors } from '../../../theme/theme-styles'
import TrustPreloadPilot from '../../trustPreloadPilot'
import TrustBoxFooter from '../Footer/trust-box-footer'

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

const StarsRaiting = function (number: number): JSX.Element {
  const content = []
  for (let index = 0; index < number; index++)
    content.push(<StarIcon style={{ color: ThemeColors.MainBlue }} />)
  for (let index = number; index < 5; index++)
    content.push(<StarIcon style={{ color: '#CCD8DD' }} />)
  return <>{content}</>
}

type CardProperties = {
  data: string
}

const arrayReviews = (articles: NodeListOf<Element>) => {
  const reviews: any[] = []
  for (const v of articles) {
    const json = JSON.parse(v.innerHTML)
    if (json.stars > 3) reviews.push(json)
  }
  return reviews
}

const UserReviews = function (html: string) {
  const parser = new DOMParser()
  const document_ = parser.parseFromString(html, 'text/html')
  const documentArticles = document_.querySelectorAll('article > script')
  return arrayReviews(documentArticles)
}

export default function GbnSection6UserReviews({ data }: CardProperties) {
  const usrReviews = process.browser ? UserReviews(data) : undefined
  const classes = useStyles()
  return (
    <div className={classes.root} suppressHydrationWarning={true}>
      <Container fixed className={classes.container}>
        {process.browser && (
          <Grid container>
            <Grid item md={3} xs={12}>
              <Container className={classes.textBlock}>
                <TrustPreloadPilot render={false} />
                <TrustBoxFooter light={true} />
              </Container>
            </Grid>
            <Grid item md={9} xs={12}>
              <Box>
                {usrReviews && (
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
                    {usrReviews.map((item, index) => {
                      return (
                        <Card key={index} className={classes.carouselBox}>
                          <CardContent className={classes.picCardCont}>
                            {StarsRaiting(item.stars)}
                            <Typography className={classes.picTitle} gutterBottom noWrap>
                              by{' '}
                              <a
                                style={{ color: ThemeColors.MainBlue }}
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
                                ? item.reviewBody.slice(0, 210) + '...'
                                : item.reviewBody}
                            </Typography>
                          </CardContent>
                          <CardActions className={classes.cardAct}>
                            <Link
                              href={item.socialShareUrl}
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
                )}
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  )
}

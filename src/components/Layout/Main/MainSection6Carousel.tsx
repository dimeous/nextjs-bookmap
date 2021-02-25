import React from 'react'
import {
  makeStyles,
  Link,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
} from '@material-ui/core'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

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
    [theme.breakpoints.down('md')]: {},
  },
  card: {
    width: '295px',
    height: '193px',
  },
  title: {},
  pos: {},
}))

function Item(props: {
  key: number
  item: {
    name: string
    description: string
    link: string
    linkLabel: string
  }
}) {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {props.key} {props.item.name}
        </Typography>
        <Typography variant="body2" component="p">
          {props.item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={props.item.link}>{props.item.linkLabel}</Link>
      </CardActions>
    </Card>
  )
}

export default function MainSection6Carousel() {
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
  ]
  return (
    <Container>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Container>
  )
}

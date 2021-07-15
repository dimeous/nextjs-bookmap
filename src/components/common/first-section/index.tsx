import { Box, Button, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import { SxProps } from '@material-ui/system/styleFunctionSx/styleFunctionSx'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { ThemeColors, ThemeElements } from '../../../theme/theme-styles'
import styles from './first-section.module.css'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#1e262d',
    paddingTop: '30px',
    ...ThemeElements.rootBlockProps,
    [theme.breakpoints.down('md')]: {
      marginBottom: '24px',
      paddingTop: 0,
    },
    [theme.breakpoints.up('md')]: {
      minHeight: '450px',
    },
  },
  outer: {
    position: 'relative',
    width: '100%',
  },

  inner: {
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%',
    top: 0,
  },

  media: {
    width: '100%',
  },
  headTradePlatform: {
    paddingTop: '70px',
    [theme.breakpoints.down('lg')]: {
      paddingTop: '27px',
      font: '32px/40px MullerLight,sans-sanserif',
      letterSpacing: '1.41px',
    },
  },
  secondTitle: {
    /* fontSize: '38px',*/
    display: 'block',
    lineHeight: '39px',
    paddingTop: '10px',
    color: ThemeColors.MainBlue,
    fontFamily: 'MullerMedium',
  },
  bImage: {
    height: '100%',
    display: 'grid',
  },
  backImage: {
    height: '100%',
  },
}))

interface TextProperties {
  text: string | undefined
  sx: SxProps | undefined
}
interface ComponentProperties {
  mobile: boolean | undefined
  option: {
    texts: TextProperties[]
    button: {
      text: string
      id: string
      link: string
    }
    image?: {
      src: string
      width: number
      height: number
      alt: string
    }
    rootSx?: SxProps
  }
  type: number
}

const FirstSectionBookmap = ({ mobile, option, type }: ComponentProperties): React.ReactElement => {
  const [width, setWidth] = useState(0)
  const elementReference = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const { current } = elementReference
    if (current) setWidth(current.getBoundingClientRect().width)
  }, [])

  const classes = useStyles()
  return (
    <>
      <Box className={classes.root} sx={option.rootSx}>
        <Container className={classes.root} maxWidth="lg" sx={option.rootSx}>
          <Grid container>
            <Grid item md={6} xs={12}>
              <Typography
                component="h1"
                variant="h1"
                color="primary"
                gutterBottom
                className={classes.headTradePlatform}
                sx={option.texts[0].sx}
              >
                {option.texts[0].text}
              </Typography>

              {option.texts[1] && (
                <Typography
                  component="h4"
                  variant="h4"
                  className={classes.secondTitle}
                  sx={option.texts[1].sx}
                >
                  {option.texts[1].text}
                </Typography>
              )}

              {option.texts[2] && (
                <Typography color="primary" paragraph sx={option.texts[2].sx}>
                  {option.texts[2].text}
                </Typography>
              )}

              {!mobile && (
                <Button id={option.button.id} href={option.button.link}>
                  {option.button.text}
                </Button>
              )}
            </Grid>
            <Grid item md={6} xs={12}>
              {!type ? (
                <div className={classes.outer} ref={elementReference}>
                  <Image
                    src="/static/main/bg-cr.png"
                    alt="Bookmap chart"
                    layout="responsive"
                    height={1300}
                    width={1875}
                    className={classes.backImage}
                  />
                  <div className={classes.inner}>
                    <div className={styles.slideranimated}>
                      <div className={classes.bImage} style={{ width: width }}>
                        <Image
                          src="/static/main/overlay-sec1.png"
                          alt="Bookmap chart"
                          height={1300}
                          width={1875}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ paddingTop: '16px' }}>
                  {option?.image?.src && (
                    <Image
                      src={option?.image?.src}
                      alt={option?.image?.alt}
                      layout="responsive"
                      height={option?.image?.height}
                      width={option?.image?.width}
                    />
                  )}
                </div>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
      {mobile && (
        <Grid
          xs={12}
          style={{
            textAlign: 'center',
          }}
        >
          <Button id={option.button.id} href={option.button.link}>
            {option.button.text}
          </Button>
        </Grid>
      )}
    </>
  )
}
export default FirstSectionBookmap

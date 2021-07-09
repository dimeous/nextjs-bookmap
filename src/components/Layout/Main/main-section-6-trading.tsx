import { Box, Button } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import React from 'react'
import {ThemeColors, ThemeElements} from "../../../theme/theme-styles";

const useStyles = makeStyles(() => ({
  root: {
    ...ThemeElements.rootBlockProps,
    fontFamily: 'MullerRegular',
    fontSize: '18px',
    '& ul': {
      listStyle: 'none',
      paddingLeft: 0,
      '& li': {
        color: ThemeColors.TextBlack,
        font: '18px MullerLight,sans-serif',
        lineHeight: '28px',
        paddingLeft: '26px',
        position: 'relative',
        '&:before': {
          background: 'url("/static/icons/check.svg") 50% no-repeat',
          backgroundSize: 'contain',
          height: '8px',
          left: 0,
          position: 'absolute',
          content: '""',
          top: '8px',
          width: '10px',
        },
      },
    },
  },
  eduBlock: {
    marginLeft: 'auto',
    marginRight: 'auto',
    border: 'solid 1px lightgray',
    paddingBottom: '27px',
    paddingLeft: '130px',
    paddingRight: '0',
    paddingTop: '40px',
  },
  introImg: {
    flexDirection: 'column',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  introText: {
    lineHeight: '1.66',
    letterSpacing: '0.53px',
    color: '#3B4858',
  },
  button: {
    width: '230px',
    marginTop: '82px',
  },
  nextImage: {
    position: 'relative',
    left: '-120px',
  },
  list_h4: {
    font: '16px/24px MullerMedium,sans-serif',
    fontWeight: 500,
    letterSpacing: '0.47px',
  },
}))
const useStylesMob = makeStyles(() => ({
  root: {
    marginBottom: '124px',
    width: '100%',
    '& ul': {
      listStyle: 'none',
      paddingLeft: 0,
      '& li': {
        color: ThemeColors.TextBlack,
        font: '16px MullerLight,sans-serif',
        lineHeight: '24px',
        paddingLeft: '26px',
        position: 'relative',
        '&:before': {
          background: 'url("/static/icons/check.svg") 50% no-repeat',
          backgroundSize: 'contain',
          height: '8px',
          left: 0,
          position: 'absolute',
          content: '""',
          top: '8px',
          width: '10px',
        },
      },
    },
  },
  boxImgs: {
    width: '100%',
    display: 'flex',
    justifyContent: 'end',
    paddingTop: '24px',
  },
  boxImg2: {
    position: 'relative',
    zIndex: 1,
    margin: '-23px 0px 0px -38px',
  },
  list_h4: {},
}))
const Mobile = () => {
  const { t } = useTranslation('main')
  const classes = useStylesMob()
  return (
    <Container fixed className={classes.root}>
      <Typography variant="h2">{t('MS6LiveAdvancedTradingEducation')}</Typography>
      <Typography color="textPrimary" component="p">
        {t('MS6BookmapOffersRobustLiveAdvancedEducation')}
      </Typography>

      <Box className={classes.boxImgs}>
        <Box>
          <Image src="/static/main/s6/chart.png" width={300} height={155} />
          <Box className={classes.boxImg2}>
            <Image src="/static/main/s6/absoption.jpg" width={300} height={160} />
          </Box>
        </Box>
      </Box>

      <Box>
        <Typography color="textPrimary" component="p">
          {t('MS6BookmapOffersRobustLiveAdvancedEducation')}
        </Typography>
        <h4 className={classes.list_h4}> {t('MS6OPENTOALL')}</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: t('MS6EducationalCourseOnline', {
              interpolation: { escapeValue: false },
            }),
          }}
        />
        <h4 className={classes.list_h4}>{t('MS6BOOKMAP SUBSCRIBERS(PAID)')}</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: t('MS6EducationalCourse online', {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      </Box>
    </Container>
  )
}

const Desktop = () => {
  const { t } = useTranslation('main')
  const classes = useStyles()
  return (
    <Container fixed className={classes.root}>
      <div id="education" style={{ position: 'absolute', marginTop: '-140px' }}></div>
      <Typography variant="h2">{t('MS6LiveAdvancedTradingEducation')}</Typography>
      <Box className={classes.eduBlock}>
        <Box sx={{ display: 'flex' }}>
          <div className="introImg">
            <Image src="/static/main/s6/chart.png" width={300} height={155} />
            <Box className={classes.nextImage}>
              <Image src="/static/main/s6/absoption.jpg" width={300} height={160} />
            </Box>
            <div>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                href="https://bookmap.com/education/"
              >
                {t('MS6GoToEducation')}
              </Button>
            </div>
          </div>
          <div style={{ marginLeft: '40px' }}>
            <p className={classes.introText} style={{ maxWidth: '100%', marginBottom: 0 }}>
              {t('MS6BookmapOffersRobustLiveAdvancedEducation')}
            </p>
            <h4 className={classes.list_h4}> {t('MS6OPENTOALL')}</h4>
            <div
              dangerouslySetInnerHTML={{
                __html: t('MS6EducationalCourseOnline', {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
            <h4 className={classes.list_h4}>{t('MS6BOOKMAP SUBSCRIBERS(PAID)')}</h4>
            <div
              dangerouslySetInnerHTML={{
                __html: t('MS6EducationalCourse online', {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
          </div>
        </Box>
      </Box>
    </Container>
  )
}

type CardProperties = {
  mobile: boolean
}
export default function MainSection6Trading({ mobile }: CardProperties) {
  return mobile ? <Mobile /> : <Desktop />
}

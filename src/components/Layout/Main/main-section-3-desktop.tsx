import { Box, Button, Card, CardContent, CardMedia } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'next-i18next'

import { ThemeColors, ThemeElements } from '../../../theme/theme-styles'
import OneStep from '../../common/one-step'

const useStyles = makeStyles(() => ({
  root: {
    ...ThemeElements.rootBlockProps,
  },
  cTreeSteps: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 991px)': {
      paddingLeft: 0,
      flexDirection: 'column',
    },
  },

  stepSeparator: {
    alignSelf: 'center',

    backgroundColor: ThemeColors.SecondBlue,
    height: '3px',
    marginRight: '65px',
    marginTop: '-20px',
    transform: 'translateY(13px)',
    width: '70px',
    '@media (max-width: 991px)': {
      display: 'none',
    },
  },

  button: {
    marginTop: '35px',
  },
  /*
    card: {
    border: 'none',
    boxShadow: 'none',
  },

  stepHeader: {
    display: 'flex',
    margin: '18px 00 20px',
    width: '100%',
    font: '20px/20px MullerMedium,sans-serif',
    color: ThemeColors.SecondBlue,
    '& span': {
      marginRight: '10%',
    },
  },
  media: {
    width: 'auto',
    heght: '50px',
    marginLeft: '33%',
  },
  oneStep: {
    display: 'flex',
    alignItems: 'center',
    width: 'calc(33.33333% - 90px)',
  },
  */
}))

const MainSection3Desktop = () => {
  const { t } = useTranslation('main')
  const classes = useStyles()
  return (
    <Container fixed className={classes.root}>
      <Typography variant="h2" style={{ marginBottom: 75 + 'px' }}>
        {t('MS3StartWithBookmapInThreeSimpleSteps')}
      </Typography>
      <Box className={classes.cTreeSteps}>
        <OneStep
          number={'01'}
          title={t('MS3GetSoftware')}
          text={
            <>
              {t('MS3RegisterToBookmap')}
              <br />
              {t('MS3DownloadAndInstallTheApp')}
            </>
          }
          imgUrl={'/static/main/s3/cloud.svg'}
        />
        <Box className={classes.stepSeparator}></Box>
        <OneStep
          number={'02'}
          title={t('MS3ConnectData')}
          text={t('MS3GetFreeEducationIncludingLiveBasicOrAdvaceWebinars')}
          imgUrl={'/static/main/s3/planet.svg'}
        />
        <Box className={classes.stepSeparator}></Box>
        <OneStep
          number={'03'}
          title={t('MS3EducateYourself')}
          text={t('MS3GetFreeEducationIncludingLiveBasicOrAdvaceWebinars')}
          imgUrl={'/static/main/s3/note.svg'}
        />
      </Box>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        href="https://bookmap.com/members/signup/thAhOgYUg"
        id={'main_middle_start_for_free'}
      >
        {t('MS3STARTFORFREE')}
      </Button>
    </Container>
  )
}

export default MainSection3Desktop

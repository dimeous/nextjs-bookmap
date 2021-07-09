import { Box, Button, Card, CardContent, CardMedia } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'next-i18next'
import {ThemeColors, ThemeElements} from "../../../theme/theme-styles";

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
  oneStep: {
    display: 'flex',
    alignItems: 'center',
    width: 'calc(33.33333% - 90px)',
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
  media: {
    width: 'auto',
    heght: '50px',
    marginLeft: '33%',
  },
  card: {
    border: 'none',
    boxShadow: 'none',
  },
  button: {
    width: '230px',
    marginTop: '35px',
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
        <Box className={classes.oneStep}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              alt="Get Software"
              image="/static/main/s3/cloud.svg"
              title="Get Software"
            />
            <CardContent>
              <Typography className={classes.stepHeader}>
                <span>01</span> {t('MS3GetSoftware')}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                {t('MS3RegisterToBookmap')} <br />
                {t('MS3DownloadAndInstallTheApp')}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box className={classes.stepSeparator}></Box>
        <Box className={classes.oneStep}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              alt="Connect Data"
              image="/static/main/s3/planet.svg"
              title="Connect Data"
            />
            <CardContent>
              <Typography className={classes.stepHeader}>
                <span>02</span> {t('MS3ConnectData')}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                {t('MS3ConnectToMarketDataProvider')}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box className={classes.stepSeparator}></Box>
        <Box className={classes.oneStep}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              alt="Educate yourself"
              image="/static/main/s3/note.svg"
              title="Educate yourself"
            />
            <CardContent>
              <Typography className={classes.stepHeader}>
                <span>03</span> {t('MS3EducateYourself')}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                {t('MS3GetFreeEducationIncludingLiveBasicOrAdvaceWebinars')}
              </Typography>
            </CardContent>
          </Card>
        </Box>
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

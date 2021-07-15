import { Box, Button, Grid } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { ThemeColors, ThemeElements } from '../../../theme/theme-styles'

const useStyles = makeStyles(() => ({
  root: {
    ...ThemeElements.rootBlockProps,
    '& h4': {
      font: '18px/30px MullerRegular,sans-serif',
      color: ThemeColors.SecondBlue,
      margin: 0,
    },
  },
  button: {
    marginTop: '24px',
  },
  textBox: {
    borderLeft: 'solid 3px ' + ThemeColors.SecondBlue,
    paddingLeft: '16px',
    margin: '10px 0px 10px 0px',
    maxWidth: '75%',
  },
  text: {
    lineHeight: '24px',
    fontSize: '16px',
    letterSpacing: '0.47px',
  },
}))

const MainSection3Mobile = () => {
  const { t } = useTranslation('main')

  const classes = useStyles()
  return (
    <Container fixed className={classes.root}>
      <Typography variant="h2" style={{ width: '90%' }}>
        {t('MS3StartWithBookmapInThreeSimpleSteps')}
      </Typography>
      <Grid container>
        <Grid item xs={2}>
          <h4>01</h4>
        </Grid>
        <Grid item xs={8}>
          <h4>{t('MS3GetSoftware')}</h4>
        </Grid>
        <Grid item xs={2}>
          <Image src="/static/main/s3/cloud.svg" width={32} height={24} />
        </Grid>
      </Grid>
      <Box className={classes.textBox}>
        <Typography variant="body2" color="textPrimary" component="p" className={classes.text}>
          {t('MS3RegisterToBookmap')} <br />
          {t('MS3DownloadAndInstallTheApp')}
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={2}>
          <h4>02</h4>
        </Grid>
        <Grid item xs={8}>
          <h4>{t('MS3ConnectData')}</h4>
        </Grid>
        <Grid item xs={2}>
          <Image src="/static/main/s3/planet.svg" width={32} height={24} />
        </Grid>
      </Grid>
      <Box className={classes.textBox}>
        <Typography variant="body2" color="textPrimary" component="p" className={classes.text}>
          {t('MS3ConnectToMarketDataProvider')}
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={2}>
          <h4>03</h4>
        </Grid>
        <Grid item xs={8}>
          <h4>{t('MS3EducateYourself')}</h4>
        </Grid>
        <Grid item xs={2}>
          <Image src="/static/main/s3/note.svg" width={32} height={24} />
        </Grid>
      </Grid>
      <Box className={classes.textBox}>
        <Typography variant="body2" color="textPrimary" component="p" className={classes.text}>
          {t('MS3GetFreeEducationIncludingLiveBasicOrAdvaceWebinars')}
        </Typography>
      </Box>
      <Grid
        xs={12}
        style={{
          textAlign: 'center',
        }}
      >
        <Button
          className={classes.button}
          href="https://bookmap.com/members/signup/thAhOgYUg"
          id={'main_middle_start_for_free'}
        >
          {t('MS3STARTFORFREE')}
        </Button>
      </Grid>
    </Container>
  )
}
export default MainSection3Mobile

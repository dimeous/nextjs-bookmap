import { Box, Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { ThemeColors, ThemeElements } from '../../../theme/theme-styles'
import getText from './gbn-section-4-content'

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
    width: 'calc(38.33333% - 90px)',
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
  stepNumber: {
    color: ThemeColors.SecondBlue,
    font: '40px/40px MullerMedium,sans-serif',
    paddingTop: '23px',
  },
}))

type ElementProperties = {
  page?: string
}
const GbnSection4DeskGetStart = ({ page }: ElementProperties): React.ReactElement => {
  const inlineFlex = 'inline-flex'
  const classes = useStyles()
  const { t } = useTranslation('gbn')
  const text: any = getText(page)
  return (
    <Container fixed className={classes.root}>
      <Typography variant="h2" align="center" sx={{ pb: 4 }}>
        {t(text.h1)}
      </Typography>
      <Box className={classes.cTreeSteps}>
        <Box className={classes.oneStep}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              alt={'1. ' + t(text.s1.lbl)}
              image="/static/gbn/s5/1.svg"
              title="Get Software"
            />
            <CardContent>
              <Box sx={{ display: inlineFlex }}>
                <Box sx={{ p: 1 }}>
                  <Typography className={classes.stepNumber}>1. </Typography>
                </Box>
                <Box sx={{ pl: 2 }}>
                  <Typography className={classes.stepHeader}>{t(text.s1.lbl)}</Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    {t(text.s1.txt)}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <Box className={classes.oneStep}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              alt={'2. ' + t(text.s2.lbl)}
              image="/static/gbn/s5/2.svg"
              title="Connect Data"
            />
            <CardContent>
              <Box sx={{ display: inlineFlex }}>
                <Box sx={{ p: 1 }}>
                  <Typography className={classes.stepNumber}>2. </Typography>
                </Box>
                <Box sx={{ pl: 2 }}>
                  <Typography className={classes.stepHeader}>{t(text.s2.lbl)}</Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    {t(text.s2.txt)}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>

        <Box className={classes.oneStep}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              component="img"
              alt={'3. ' + t(text.s3.lbl)}
              image="/static/gbn/s5/3.svg"
              title="Educate yourself"
            />
            <CardContent>
              <Box sx={{ display: inlineFlex }}>
                <Box sx={{ p: 1 }}>
                  <Typography className={classes.stepNumber}>3. </Typography>
                </Box>
                <Box sx={{ pl: 2 }}>
                  <Typography className={classes.stepHeader}>{t(text.s3.lbl)}</Typography>
                  <Typography variant="body2" color="textPrimary" component="p">
                    {t(text.s3.txt)}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  )
}
export default GbnSection4DeskGetStart

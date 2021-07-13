import { Box, Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'next-i18next'
import React from 'react'

import { ThemeColors, ThemeElements } from '../../../theme/theme-styles'
import OneStep from '../../common/one-step'
import getText from './crypto-section-4-content'

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
  button: {
    marginTop: '35px',
  },
}))

const CryptoSection4DeskGetStart = (): React.ReactElement => {
  const nums = [1, 2, 3]
  const classes = useStyles()
  const { t } = useTranslation('crypto')
  const text: any = getText()
  return (
    <Container fixed className={classes.root}>
      <Typography variant="h2" align="center" sx={{ pb: 4 }}>
        {t(text.h1)}
      </Typography>
      <Box className={classes.cTreeSteps}>
        {nums.map((v) => {
          return (
            <OneStep
              key={v}
              number={`${v}.`}
              title={t(text['s' + v].lbl)}
              text={t(text['s' + v].txt)}
              imgUrl={'/static/gbn/s5/' + v + '.svg'}
              type={1}
            />
          )
        })}
      </Box>
    </Container>
  )
}
export default CryptoSection4DeskGetStart

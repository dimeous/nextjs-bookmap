import { Box, Container, Grid } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import { SxProps } from '@material-ui/system/styleFunctionSx/styleFunctionSx'
import React from 'react'

import { ThemeColors, ThemeElements } from '../../../theme/theme-styles'

interface TwoColumnsProperties {
  element1: React.ReactElement
  element2: React.ReactElement
  options?: {
    rootSx?: SxProps
    containerSx?: SxProps
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    ...ThemeElements.rootBlockProps,
    [theme.breakpoints.down('md')]: {
      ...ThemeElements.rootMobileBlockProps,
    },
  },
}))
const TwoColumns = (props: TwoColumnsProperties): React.ReactElement => {
  const classes = useStyles()
  return (
    <Box sx={props?.options?.rootSx} className={classes.root}>
      <Container maxWidth="lg" sx={props?.options?.containerSx}>
        <Grid container>
          <Grid item md={6} xs={12}>
            {props.element1}
          </Grid>
          <Grid item md={6} xs={12}>
            {props.element2}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default TwoColumns
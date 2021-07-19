import { Box, Container, Grid } from '@material-ui/core'
import { SxProps } from '@material-ui/system/styleFunctionSx/styleFunctionSx'
import React from 'react'

interface TwoColumnsProperties {
  element1: React.ReactElement
  element2: React.ReactElement
  options?: {
    rootSx?: SxProps
    containerSx?: SxProps
  }
}
const TwoColumns = (props: TwoColumnsProperties): React.ReactElement => {
  return (
    <Box sx={props?.options?.rootSx}>
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

import { Container, Grid } from '@material-ui/core'
import React from 'react'

interface TwoColumnsProperties {
  element1: React.ReactElement
  element2: React.ReactElement
}
const TwoColumns = (props: TwoColumnsProperties): React.ReactElement => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item md={6} xs={12}>
          {props.element1}
        </Grid>
        <Grid item md={6} xs={12}>
          {props.element2}
        </Grid>
      </Grid>
    </Container>
  )
}

export default TwoColumns

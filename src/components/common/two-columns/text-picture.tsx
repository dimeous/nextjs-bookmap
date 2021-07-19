import { Box } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import React from 'react'

import TwoColumns from './two-columns'

interface ComponentProperties {
  text: React.ReactElement
  picture: React.ReactElement
  reverse?: boolean
}
const useStyles = makeStyles((theme: Theme) => ({
  picCard: {
    width: '100%',
    marginTop: 'auto',
    marginBottom: 'auto',
    height: '340px',
    [theme.breakpoints.down('md')]: {
      marginTop: '32px',
      height: 'auto',
    },
  },
  pic: {
    borderRadius: '10px',
  },
}))

const Element2 = (picture: React.ReactElement): React.ReactElement => {
  const classes = useStyles()
  return (
    <Box className={classes.picCard}>
      <Box>
        <picture />
      </Box>
    </Box>
  )
}

const TwoColumnsTextPicture = (props: ComponentProperties): React.ReactElement => {
  const element1 = props.text
  return props.reverse ? (
    <TwoColumns element1={Element2(props.picture)} element2={element1} />
  ) : (
    <TwoColumns element1={element1} element2={Element2(props.picture)} />
  )
}

export default TwoColumnsTextPicture

import { Box } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import { SxProps } from '@material-ui/system/styleFunctionSx/styleFunctionSx'
import Image from 'next/image'
import React from 'react'

import TwoColumns from './two-columns'

interface PictureProperties {
  src: string
  width: number
  height: number
  alt: string
  styles?: StyleSheetList
}
interface ComponentProperties {
  text: React.ReactElement
  picture: PictureProperties
  options?: {
    rootSx?: SxProps
    containerSx?: SxProps
  }
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
}))

const Element2 = (picture: PictureProperties): React.ReactElement => {
  const classes = useStyles()
  return (
    <Box className={classes.picCard}>
      <Box>
        <Image
          src={picture.src}
          alt={picture.alt}
          width={picture.width}
          height={picture.height}
          layout="intrinsic"
        />
      </Box>
    </Box>
  )
}

const TwoColumnsTextPicture = (props: ComponentProperties): React.ReactElement => {
  const element1 = props.text
  return props.reverse ? (
    <TwoColumns element1={Element2(props.picture)} element2={element1} options={props.options} />
  ) : (
    <TwoColumns element1={element1} element2={Element2(props.picture)} options={props.options} />
  )
}

export default TwoColumnsTextPicture

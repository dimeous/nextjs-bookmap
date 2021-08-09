import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import React from 'react'

import { ThemeColors } from '../../theme/theme-styles'

const useStyles = makeStyles(() => ({
  picCard: {
    background: ThemeColors.BGGrey,
    borderRadius: '10px',
    padding: '3px',
  },
  image: {
    borderRadius: '5px',
    margin: '14px 14px 14px 14px',
  },
}))
interface ImageInBoxProperties {
  src: string
  width: number
  height: number
  alt: string
}
const ImageInBox = (picture: ImageInBoxProperties): React.ReactElement => {
  const classes = useStyles()
  return (
    <Box className={classes.picCard}>
      <Box className={classes.image}>
        <Image src={picture.src} alt={picture.alt} width={picture.width} height={picture.height} />
      </Box>
    </Box>
  )
}
export default ImageInBox

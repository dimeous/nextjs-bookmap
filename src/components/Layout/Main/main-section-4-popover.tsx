import { Box, ButtonBase, Typography } from '@material-ui/core'
import Link from '@material-ui/core/Link'
import Popover from '@material-ui/core/Popover'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import React from 'react'

const useStyles = makeStyles(() => ({
  txt: {
    color: '#0185f9',
    font: '12px/13px MullerMedium,sans-serif',
    textTransform: 'uppercase',
    marginLeft: '8px',
  },
  buttonBox: {
    height: '85px',
    borderRadius: '5px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #e5e5e5',
    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      border: '1px solid transparent',
      transition: '.3s',
    },
  },
  button: {
    width: '90%',
    height: '75px',
    backgroundColor: '#fff',
  },
  button2: {
    backgroundColor: '#fff',
    margin: 0,
    '&:hover': {
      backgroundColor: '#d1dbdb',
    },
  },
  siteWrapper: {
    marginRight: '10px',
  },
}))

export default function ImagePopover(property: {
  src: string
  alt: string
  width: number
  height: number
  label: string
  link: string
}) {
  const classes = useStyles()
  const [anchorElement, setAnchorElement] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }

  const open = Boolean(anchorElement)
  const id = open ? 'simple-popover' : undefined

  return (
    <Box className={classes.buttonBox}>
      <ButtonBase aria-describedby={id} onClick={handleClick} className={classes.button}>
        <Image
          src={property.src}
          alt={property.alt}
          width={property.width}
          height={property.height}
          layout="intrinsic"
        />
      </ButtonBase>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorElement}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Link href={property.link} target="_blank">
          <ButtonBase sx={{ alignItems: 'center' }} className={classes.button2}>
            <Box>
              <Image src="/static/icons/site-ic.svg" alt={property.alt} width={26} height={25} />
              <Typography variant={'body2'} className={classes.txt}>
                {property.label}
              </Typography>
            </Box>
          </ButtonBase>
        </Link>
      </Popover>
    </Box>
  )
}

import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Image from 'next/image'
import { Box, Typography, ButtonBase } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
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
        backgroundColor: '#d1dbdb',
        border: '1px solid transparent',
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
  })
)

export default function ImagePopover(prop: {
  src: string
  alt: string
  width: number
  height: number
  label: string
  link: string
}) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <Box className={classes.buttonBox}>
      <ButtonBase aria-describedby={id} onClick={handleClick} className={classes.button}>
        <Image
          src={prop.src}
          alt={prop.alt}
          width={prop.width}
          height={prop.height}
          layout="intrinsic"
        />
      </ButtonBase>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
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
        <Link href={prop.link} target="_blank">
          <ButtonBase sx={{ alignItems: 'center' }} className={classes.button2}>
            <Box>
              <Image src="/static/icons/site-ic.svg" alt={prop.alt} width={26} height={25} />
              <Typography variant={'body2'} className={classes.txt}>
                {prop.label}
              </Typography>
            </Box>
          </ButtonBase>
        </Link>
      </Popover>
    </Box>
  )
}

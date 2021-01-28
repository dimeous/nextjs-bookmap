import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Image from 'next/image'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
    txt: {
      color: '#0185f9',
      font: '12px/13px MullerMedium,sans-serif',
      textTransform: 'uppercase',
      marginLeft: '8px',
    },
    button: {
      width: '100%',
      height: '75px',
      backgroundColor: '#fff',
      '&:hover': {
        backgroundColor: '#d1dbdb',
      },
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
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
        className={classes.button}
      >
        <Image
          src={prop.src}
          alt={prop.alt}
          width={prop.width}
          height={prop.height}
          layout="intrinsic"
        />
      </Button>
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
          <Button variant="text" sx={{ alignItems: 'center' }} className={classes.button2}>
            <Image src="/static/icons/site-ic.svg" alt={prop.alt} width={26} height={25} />
            <Typography variant={'body2'} className={classes.txt}>
              {prop.label}
            </Typography>
          </Button>
        </Link>
      </Popover>
    </div>
  )
}

import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles, withStyles } from '@material-ui/styles'
import Link from 'next/link'
import React from 'react'

const useStyles = makeStyles({
  root: {
    width: '100%',
    '& a': {
      font: '14px/21px MullerLight, sans-serif',
      letterSpacing: '1px',
      color: '#3B4858',
      textDecoration: 'none',
    },
    '& ul': { padding: 0 },
  },
  menuItem: {
    padding: 0,
  },
  heading: {
    font: '14px/21px MullerMedium, sans-serif',
    fontWeight: 500,
    letterSpacing: '0.88px',
    textTransform: 'uppercase',
  },
  drawerContainer: {
    padding: '16px 24px',
    '& li': {
      font: '14px/21px MullerLight, sans-serif',
      letterSpacing: '1px',
    },
  },
})
type CardProperties = {
  name: string
  links: Array<{ label: string; href: string; blank: boolean }>
}

export default function MenuListComposition({ name, links }: CardProperties) {
  const classes = useStyles()
  const StyledAccordion = withStyles({
    root: {
      background: 'none',
      borderBottom: '1px solid grey',
    },
  })(Accordion)

  return (
    <div className={classes.root}>
      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MenuList className={classes.drawerContainer}>
            {links.map(({ label, href, blank }) => {
              return (
                <MenuItem key={label} className={classes.menuItem}>
                  {blank ? (
                    <a href={href} key={label} target="_blank" rel={'noreferrer'}>
                      {label}
                    </a>
                  ) : (
                    <Link href={href} key={label}>
                      {label}
                    </Link>
                  )}
                </MenuItem>
              )
            })}
          </MenuList>
        </AccordionDetails>
      </StyledAccordion>
    </div>
  )
}

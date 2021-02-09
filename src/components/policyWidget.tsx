import React from 'react'
import { Button } from '@material-ui/core'
import Cookies from 'js-cookie'
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles(() => ({
  root: {
    background: '#0184f6',
    bottom: '0 !important',
    left: '0 !important',
    position: 'fixed',
    width: '100%',
    zIindex: '99999998 !important',
    display: 'block',
    color: '#fff',
    fontSize: '14px',
    lineHeight: '21px',
  },
  policyLink: {
    textDecoration: 'underline',
    color: '#dadada',
    fontWeight: 'normal',
  },
  iubenda: {
    textAlign: 'center',
    paddingTop: '8px',
    display: 'flex',
    justifyContent: 'center',
  },
}))

function handleChange() {
  const newpolicy = 1
  const d = new Date()
  d.setTime(d.getTime() + 180 * 24 * 60 * 1000)
  const expires = 'expires=' + d.toUTCString()
  document.cookie = `policy=${newpolicy}; ${expires};`
}

function PolicyWidget() {
  const classes = useStyles()
  const policy = Cookies.get('policy')
  const [checked, setChecked] = React.useState(false)

  const handleChange = () => {
    Cookies.set('policy', 1)
    setChecked(true)
  }
  if (!policy || checked)
    return (
      <div className={classes.root}>
        <div className={classes.iubenda}>
          <div style={{ paddingTop: '10px' }}>
            This site uses cookies. By using this site you agree to the use of cookies. Please see
            our{' '}
            <a
              className={classes.policyLink}
              href="https://www.iubenda.com/privacy-policy/14937749"
            >
              Privacy Policy
            </a>{' '}
            for more information
          </div>
          <Button sx={{ ml: 1 }} onClick={handleChange}>
            ×
          </Button>
        </div>
      </div>
    )
  else return null
}

export default PolicyWidget

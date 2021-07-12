import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Cookies from 'js-cookie'
import React from 'react'
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

const PolicyWidget = () => {
  const classes = useStyles()
  const policy = Cookies.get('policy')
  const [checked, setChecked] = React.useState(false)

  const handleChange = () => {
    Cookies.set('policy', 'checked')
    setChecked(true)
  }

  return policy != 'checked' && !checked ? (
    <div className={classes.root}>
      <div className={classes.iubenda}>
        <div style={{ paddingTop: '10px' }}>
          This site uses cookies. By using this site you agree to the use of cookies. Please see our{' '}
          <a className={classes.policyLink} href="https://www.iubenda.com/privacy-policy/14937749">
            Privacy Policy
          </a>{' '}
          for more information
        </div>
        <Box
          style={{
            marginRight: '8px',
            width: '8px',
            height: '8px',
            cursor: 'pointer',
          }}
          onClick={handleChange}
        >
          ×
        </Box>
      </div>
    </div>
  ) : null
}

export default PolicyWidget

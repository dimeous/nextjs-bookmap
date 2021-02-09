import React from 'react'
import { withStyles, Button } from '@material-ui/core'
import cookies from 'next-cookies'
const useStyles = () => ({
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
})

class PolicyWidget extends React.Component {
  static async getInitialProps(ctx: {
    req?: { headers: { cookie?: string | undefined } } | undefined
  }) {
    return {
      initialPolicy: cookies(ctx).policy || '',
    }
  }

  constructor(props: any) {
    super(props)
    this.state = { policy: props.initialPolicy || '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange() {
    const newpolicy = 1
    this.setState({ policy: newpolicy })
    document.cookie = `policy=${newpolicy}; path=/`
  }

  reset() {
    this.setState({ policy: '' })
    document.cookie = 'policy=; path=/;'
  }

  render() {
    const { classes } = this.props
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
            <input type="text" placeholder="Your name here" value={this.state.policy} />
          </div>
          <Button sx={{ ml: 1 }} onClick={this.handleChange}>
            ×
          </Button>
        </div>
      </div>
    )
  }
}

export default withStyles(useStyles)(PolicyWidget)

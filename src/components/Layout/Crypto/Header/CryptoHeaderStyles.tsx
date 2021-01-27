import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
  header: {
    paddingRight: '79px',
    color: '#212529',
    paddingLeft: '118px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoTxt: {
    color: '#0099ff',
    fontWeight: 900,
    font: '16px/19px MullerMedium, sans-serif',
    textAlign: 'right',
  },
}))

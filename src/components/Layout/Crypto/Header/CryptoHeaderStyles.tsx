import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  header: {
    color: '#212529',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '32px',
    },
  },
  logoTxt: {
    color: '#0099ff',
    fontWeight: 900,
    font: '16px/19px MullerMedium, sans-serif',
    textAlign: 'right',
  },
  button: {
    [theme.breakpoints.down('md')]: {
      width: '110px',
    },
  },
}))

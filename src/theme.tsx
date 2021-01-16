import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
      light: '#0185f9',
    },
    secondary: {
      main: '#0085f9',
      light: '#0085f9',
      dark: '#1e262d',
    },

    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    h1: {
      fontSize: '48px',
      lineHeight: '50px',
    },
    h2: {
      fontSize: 32,
      lineHeight: 38 + 'px',
    },

    fontSize: 16,
    fontWeightLight: 400,
    fontFamily: [
      'MullerLight',
      'serix',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#0085f9',
          borderRadius: '5px',
          marginBottom: '10px',
          transition: '.5s ease',
          fontFamily: 'MullerRegular',
          fontSize: '14px',
          height: '43px',
          letterSpacing: '0.77px',
          '&:hover': {
            backgroundColor: '#0e67d0',
          },
        },
      },
    },
  },
})

export default theme

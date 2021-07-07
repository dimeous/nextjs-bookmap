import { red } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'

import { ThemeColors } from './theme-styles'

// Create a theme instance.

let theme = createTheme({
  palette: {
    primary: {
      main: ThemeColors.MainBlue,
      light: '#0185f9',
    },
    secondary: {
      main: ThemeColors.MainBlue,
      light: ThemeColors.MainBlue,
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
      marginBottom: 22 + 'px',
    },
    h3: {
      font: '18px/30px MullerMedium,sans-serif',
      marginBottom: 41 + 'px',
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
})
theme = {
  ...theme,
  components: {
    MuiTypography: {
      styleOverrides: {
        h2: {
          [theme.breakpoints.down('md')]: {
            lineHeight: '48px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: ThemeColors.MainBlue,
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
    MuiTabs: {
      styleOverrides: {
        root: {
          marginBottom: '30px',
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        wrapper: {
          fontSize: '1rem',
        },
      },
    },
  },
}

export default theme

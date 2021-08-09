import { red } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'

import { ThemeColors } from './theme-styles'

// Create a theme instance.

let theme = createTheme({
  palette: {
    primary: {
      main: ThemeColors.MainBlue,
      light: ThemeColors.TextBlue,
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
      default: ThemeColors.MainWhite,
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
      'MullerRegular',
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
          color: ThemeColors.MainWhite,
          borderRadius: '5px',
          marginBottom: '10px',
          transition: '.5s ease',
          fontFamily: 'MullerRegular',
          fontSize: '14px',
          height: '43px',
          minWidth: '230px',
          boxShadow:
            '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
          letterSpacing: '0.77px',
          '&:hover': {
            backgroundColor: '#0e67d0',
          },
          [theme.breakpoints.down('md')]: {
            marginBottom: '16px',
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

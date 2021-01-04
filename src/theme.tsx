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
      main: '#1e262d',
      light: '#0085f9',
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
      fontWeight: 500,
      fontSize: 32,
    },
  },
})

export default theme

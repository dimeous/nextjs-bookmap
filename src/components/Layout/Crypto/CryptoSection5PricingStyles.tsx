import { makeStyles } from '@material-ui/core/styles'
import theme from '../../../theme'

export const styles = makeStyles(() => ({
  root: {
    color: '#1a1833',
  },
  list: {
    '& li': {
      padding: '4px 0 0 16px',
      '& span': {
        [theme.breakpoints.down('md')]: {
          fontSize: '1rem',
        },
      },
    },
  },
  container: {
    paddingTop: '45px',
    paddingBottom: '45px',
  },
  divDiscount: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'right',
    },
  },
  noCard: {
    background: 'none',
    border: 'none',
    boxShadow: 'none',
  },
  item: {
    padding: 0,
  },
  cardT1: {
    textTransform: 'uppercase',
    color: '#4F6773',
    marginBottom: '4px',
  },
  cardT2: {
    fontWeight: 800,
  },
  cardAction: {
    justifyContent: 'center',
  },
  clsText: {
    color: '#8DA2AC',
  },
  noIndicator: {
    display: 'none',
  },
  circle: {
    width: '6px',
    height: '6px',
    backgroundColor: '#0085F9',
    borderRadius: '3px',
    position: 'absolute',
    marginTop: '-6px',
    marginLeft: '230px',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      marginLeft: '325px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '52%',
    },
  },
  selectedTab: {
    backgroundColor: '#0085F9',
    borderRadius: '20px',
    color: '#fff',
    fontWeight: 800,
    transition: '.4s ease',
  },
  paperTabs: {
    width: '328px',
    borderRadius: '20px',
    [theme.breakpoints.down('md')]: {
      width: '63%',
    },
  },
  tabs: {
    marginBottom: '4px',
    padding: '4px 4px 4px 4px',
    [theme.breakpoints.down('md')]: {
      '& button': {
        minHeight: 0,
      },
    },
  },
  tabTwo: {
    color: '#607D8B',
    font: '12px/32px MullerMedium,sans-serif',
    fontStyle: 'italic',
    transition: '.5s ease',
    zIndex: 1,
  },
  checkIcon: {
    color: '#0084f6',
    fontSize: '16px',
  },
  chIcon: {
    color: '#0084f6',
    fontSize: '16px',
  },
  clsIcon: {
    color: '#c6c6c6',
    fontSize: '16px',
  },
  lifetimeMessage: {
    color: '#124258',
    fontFamily: 'MullerRegular,sans-serif',
    fontWeight: 400,
    marginTop: '32px',
    textAlign: 'center',
  },
  cta: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAligh: 'center',
    '& p': {
      color: '#607D8B',
      fontFamily: 'MullerRegular,sans-serif',
      textAlign: 'center',
      [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
      },
    },
    '& a': {
      color: '#0185f9',
      fontFamily: 'MullerRegular,sans-serif',
      lineHeight: 1,
      textDecoration: 'none',
      textTransform: 'uppercase',
      transition: '.5s ease',
      [theme.breakpoints.down('md')]: {
        fontSize: '1rem',
      },
    },
  },
}))

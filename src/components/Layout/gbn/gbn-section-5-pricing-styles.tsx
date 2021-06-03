import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'

export const styles = makeStyles((theme: Theme) => ({
  root: {
    color: '#1a1833',
  },
  tabTwo: {
    color: '#0185f9',
    font: '14px/14px MullerMedium,sans-serif',
    position: 'absolute',
    textTransform: 'capitalize',
    transition: '.5s ease',
    marginLeft: '130px',
    transform: 'translateY(-23px)',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      marginLeft: '8rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '8rem',
    },
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
  tabs: {
    marginBottom: '33px',
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

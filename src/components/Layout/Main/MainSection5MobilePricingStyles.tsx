import { makeStyles } from '@material-ui/core/styles'

export const styles = makeStyles(() => ({
  root: {
    color: '#1a1833',
    '& h4': {
      color: '#0185f9',
      font: '16px/24px MullerMedium,sans-serif',
      textTransform: 'uppercase',
    },
    '& p': {
      color: '#3B4858',
      font: '16px/24px MullerLight,sans-serif',
    },
  },
  allTrading: {
    '& p': {
      font: '12px/12px MullerRegular,sans-serif',
      textAlign: 'center',
      letterApacing: '1px',
      margin: '0px 10px',
    },
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
  tabTwo: {
    color: '#0185f9',
    font: '14px/14px MullerMedium,sans-serif',
    position: 'absolute',
    textTransform: 'capitalize',
    transition: '.5s ease',
    width: '100%',
    marginLeft: '27%',
    transform: 'translateY(-23px)',
    zIndex: 1,
  },
  borederBotom: {
    borderBottom: '1px solid #E8E8E8',
    width: '90%',
    paddingTop: '8px',
  },
  delayStyle: {
    color: 'grey',
    display: 'block',
    fontSize: '12px',
    fontWeight: 600,
  },

  priceName: {
    backgroundColor: '#0e67d0',
    display: 'flex',
    height: '46px',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '.5s ease',
    width: '100%',
    '& p': {
      color: '#fff',
      font: '14px MullerMedium,sans-serif',
      lineHeight: 1,
      textTransform: 'uppercase',
    },
  },

  freeText: {
    font: '14px/16px MullerRegular,sans-serif',
    textAlign: 'center',
  },
  priceLink: {
    maxWidth: '183px',
    width: '100%',
  },
  priceNumber: {
    font: '24px MullerRegular,sans-serif',
    lineHeight: 1,
    transition: '.2s ease',
  },

  priceBlock: {
    minHeight: '75px',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  priceCurrency: {
    font: '12px MullerRegular, sans-serif',
    letterSpacing: '1px',
    marginRight: '5px',
    transform: 'translateY(2px)',
  },
  priceFree: {
    font: '12px/12px MullerRegular, sans-serif',
    color: '#3B4858',
    letterSpacing: '1px',
  },
  pricePeriod: {
    display: 'flex',
    font: '20px MullerLight, sans-serif',
  },
  periodSpace: {},
  priceSave: {
    color: '#8a8a8a',
    font: '12px MullerRegular, sans-serif',
    paddingLeft: '18px',
    position: 'absolute',
    margin: '0px 0px -50px -20px',
  },
  lifetimeMessage: {
    color: '#a4a4a4',
    font: '12px/18px MullerRegular,sans-serif',
    letterSpacing: '1px',
    marginTop: '23px',
  },
  cta: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '24px',
    alignItems: 'center',
    textAligh: 'center',
    '& p': {
      color: '#000',
      font: '12px/18px MullerRegular,sans-serif',
      letterSpacing: '1px',
      textAlign: 'center',
    },
    '& a': {
      color: '#0185f9',
      font: '16px/24px MullerMedium,sans-serif',
      lineHeight: 1,
      textDecoration: 'none',
      textTransform: 'uppercase',
      transition: '.5s ease',
    },
  },
}))

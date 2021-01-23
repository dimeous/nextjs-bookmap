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

  cPrices: {
    display: 'flex',
    font: '14px/16px MullerRegular,sans-serif',
    '& li': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderBottom: '1px solid #e8e8e8',
      justifyContent: 'center',
      minHeight: '40px',
    },
    '& ul': {
      margin: 0,
      width: '100%',
    },
  },
  naming: {
    minWidth: '250px',
    width: '252px',
    alignItems: 'flex-start',
    display: 'flex',
    marginRight: '40px',
    transform: 'translateY(-5px)',
    ' & p': {
      margin: 0,
    },
  },
  namingList: {
    padding: '77px 0px',
    minWidth: '250px',
    listStyle: 'none',
    width: '252px',
    '& li': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      borderBottom: '1px solid #e8e8e8',
      '&:first-child': {
        position: 'relative',
        '& h4': {
          left: 0,
          position: 'absolute',
          top: '-25px',
        },
      },
    },
    '& h4': {
      color: '#0185f9',
      font: '12px MullerMedium,sans-serif',
      justifyContent: 'flex-start',
      lineHeight: 1,
      textTransform: 'uppercase',
      margin: 0,
    },
  },

  digital: {
    font: '12px/14px MullerRegular,sans-serif',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    marginRight: '30px',
    '& li': {
      height: '40px',
    },
    width: '100%',
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
  priceTags: {
    border: '1px solid #bdc4d0',
    borderBottom: 'none',
    borderTop: 'none',
    display: 'flex',
    flexDirection: 'column',
    padding: '30px 25px 0',
  },
  roww: {
    minHeight: '50px!important',
  },
  rowvw: {
    minHeight: '83px!important',
    '& h4': {
      paddingBottom: '10px',
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
    font: '32px MullerLight,sans-serif',
    lineHeight: 1,
    transition: '.2s ease',
  },
  thePrice: {
    alignItems: 'center',
    border: '1px solid #bdc4d0',
    borderRadius: '0 0 5px 5px',
    display: 'flex',
    flexDirection: 'column',
    transition: '.5s ease',
    borderTop: 'none',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'space-between',
    minHeight: '75px',
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
    font: '22px MullerLight, sans-serif',
    marginRight: '5px',
    transform: 'translateY(2px)',
  },
  pricePeriod: {
    display: 'flex',
    font: '20px MullerLight, sans-serif',
  },
  periodSpace: {},
  priceSave: {
    color: '#8a8a8a',
    font: '12px MullerLight, sans-serif',
    paddingLeft: '18px',
    position: 'absolute',
  },
  lifetimeMessage: {
    color: '#a4a4a4',
    font: '12px/13px MullerRegular,sans-serif',
    marginTop: '23px',
  },
  cta: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '27px',
    alignItems: 'center',
    textAligh: 'center',
    '& p': {
      color: '#000',
      font: '12px/13px MullerRegular,sans-serif',
      marginBottom: '13px',
      textAlign: 'center',
    },
    '& a': {
      color: '#0185f9',
      font: '12px MullerMedium,sans-serif',
      lineHeight: 1,
      textDecoration: 'none',
      textTransform: 'uppercase',
      transition: '.5s ease',
    },
  },
}))

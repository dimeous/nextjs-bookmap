import { makeStyles, Theme } from '@material-ui/core/styles'

export const styles = makeStyles(() => ({
  root: {
    color: '#1a1833',
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
  delayStyle: {
    color: 'grey',
    display: 'block',
    fontSize: '12px',
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
    flexGrow: 1,
  },
}))

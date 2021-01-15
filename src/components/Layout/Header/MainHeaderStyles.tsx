import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() => ({
  header: {
    paddingRight: '79px',
    color: '#212529',
    paddingLeft: '118px',
    '& ul': {
      listStyle: 'none',
    },
    '& a': {
      color: '#1a1833',
      font: '14px/14px MullerLight,sans-serif',
      letterSpacing: '1px',
      margin: 0,
      padding: 0,
      textTransform: 'uppercase',
      textDecoration: 'none',
      transition: '.2s ease',
      '&:hover': {
        color: '#0085f9',
      },
    },
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
  headerNav: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-start',
    '& li': {
      display: 'inline',
      lineHeight: 1,
      marginRight: '35px',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  drawerContainer: {
    padding: '20px 30px',
  },
  moreButtonCont: {
    marginRight: '199px',
  },
  moreButton: {
    color: '#1a9dff',
    cursor: 'pointer',
    display: 'block',
    font: '14px/23px MullerMedium,sans-serif',
    letterSpacing: '1px',
    paddingRight: '22px',
    textTransform: 'uppercase',
    '&:after': {
      background: 'transparent url(/static/icons/nav.svg) 50% no-repeat',
      backgroundSize: 'auto',
      bottom: 0,
      content: '""',
      height: '7px',
      margin: 'auto',
      position: 'absolute',
      right: 0,
      top: 0,
      transform: 'translateY(-2px) rotate(180deg)',
      transition: '.5s ease',
      width: '13px',
    },
  },
  subMenuWrap: {
    backgroundColor: '#fff',
    boxShadow: 'inset 0 10px 5px 0 hsla(0,0%,69.8%,.3),0 2px 5px 0 hsla(0,0%,69.8%,.3)',
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    top: '100%',
    visibility: 'visible',
    width: '100%',
    zIndex: 1000,
  },
  subMenu: {
    display: 'flex',
    margin: 'auto',
    maxWidth: '1140px',
    padding: '50px 0 60px 10% !important',
    width: '100%',
    '& li': {
      marginBottom: '25px',
      marginRight: '25px',
      '& a': {
        color: '#b2b2b2',
        cursor: 'text',
        display: 'block',
        font: '14px/16px MullerMedium,sans-serif',
        letterSpacing: '1px',
        marginBottom: '25px',
        textTransform: 'uppercase',
        '&:hover': {
          color: '#b2b2b2',
        },
      },
    },
  },
  subMenu2: {
    paddingLeft: 0,
    '& li': {
      marginBottom: '25px',
      '& a': {
        color: '#1a1833',
        font: '12px/14px MullerLight,sans-serif',
        letterSpacing: '.86px',
        textTransform: 'uppercase',
        transition: '.2s ease',
        cursor: 'pointer',
        '&:hover': {
          color: '#0085f9',
        },
      },
    },
  },
}))

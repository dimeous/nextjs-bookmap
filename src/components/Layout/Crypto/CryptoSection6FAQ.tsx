import React from 'react'
import { Typography, makeStyles, Button } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Fragment } from 'react'
import Image from 'next/image'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    paddingTop: '24px',
    marginBottom: '145px',
  },
  heading: {
    marginBottom: 0,
  },
  icon: {
    color: '#0085f9',
  },
  lbl: {
    '& a': {
      color: '#0085f9',
    },
  },
  accordion: {
    margin: '16px 0 16px 0px',
    borderRadius: '5px',
    '&:hover': {
      heading: {
        color: '#0085f9',
        transition: 'all .2s',
      },
    },
  },
}))

const content = [
  {
    lbl: 'Which Cryptocurrency exchanges Bookmap can connect to?',
    txt:
      'Bookmap connects to more than 14 exchanges including Coinbase, Binance, Kraken and others',
  },
  {
    lbl: 'Do I need to have a Crypto exchange account?',
    txt:
      'An account is not needed for viewing market data and trading in simulation mode. If you\n' +
      ' wish to place live trades in the market, you will need an active account.',
  },
  {
    lbl: 'Does Bookmap contain an API?',
    txt: (
      <Fragment>
        Yes. Here are some examples of Bookmap API usages: Access unfiltered & unaggregated full
        market depth data and your orders Implement Automated trading strategies Develop custom
        indicators on Bookmap chart & the indicator panel Record and export market data and orders
        in any desired format Develop connectivity to other exchanges or data vendors, and more…
        Click{' '}
        <a href="https://bookmap.com/knowledgebase/docs/API" target="_blank" rel={'noreferrer'}>
          here
        </a>{' '}
        for more details
      </Fragment>
    ),
  },
  {
    lbl: 'Can I trade in a simulation mode?',
    txt:
      'Yes, start Bookmap in the 2nd mode on launching pad and practice trading using a built-in simulator.',
  },
  {
    lbl: 'Can I trade in a demo, paper-trade environment offered by exchanges or data vendors?',
    txt:
      'Yes, configure the connection accordingly selecting the “demo” checkbox where applicable to trade in a risk-free, simulated environment. You can configure multiple connections to the same exchange with different names (e.g. BitMEX Data, BitMEX Demo, BitMEX Real), and choose which to connect to. Use the 3rd mode in the launching pad for the Demo and Real. ',
  },
  {
    lbl: 'What are the supported Digital Currencies I can subscribe to with Bookmap?',
    txt: 'You can subscribe to all pairs/instruments supported by the exchange.',
  },
  {
    lbl:
      'Is there a limit to the number of cryptocurrencies that can be displayed at the same time with the free Digital package?',
    txt: 'The free Bookmap Digital package allows users to view only one trading pair at a time. ',
  },
  {
    lbl: 'Can I record market data with Bookmap?',
    txt: 'Yes, you can record market data and your orders with Digital+ package.',
  },
  {
    lbl: 'What is the minimum price increment (aka tick, or pips) displayed by Bookmap?',
    txt: (
      <Fragment>
        <p>
          You can specify a larger tick (lower price granularity) than provided by the exchange.
          Bookmap will consolidate multiple price levels into one accordingly. You can also
          configure maximum granularity of the displayed sizes.
        </p>
        <Image alt={'screen shot'} width={208} height={209} src={'/static/crypto/s6/tick.png'} />
      </Fragment>
    ),
  },
  {
    lbl: 'What does that mean Tick size (or pips) and how to choose it? ',
    txt:
      'The tick size (or pips) defines the maximum price granularity. In digital currencies tick can be very small, for instance, a pips of Bitcoin is 1 satoshi which is just 0.00000001 BTC. Typically, exchanges set lower price granularity by using larger pips. Bookmap offers to specify even larger pips, consolidating multiple price levels into one accordingly. A recommended value is 0.01-0.1% of the current price. For instance, if the price of BTC_USD is $10,000, choose a pips between 1 and 10. ',
  },
  {
    lbl: 'What is Size granularity?',
    txt:
      'Size granularity allows users to set maximum number of decimal digits displaying the size. ',
  },
  {
    lbl: 'Can Bookmap consolidate market data of the same instrument from different exchanges?',
    txt:
      'Technically it’s possible, similarly as Bookmap consolidates market data from multiple US stocks exchanges. But prices of digital currencies may be very different on different exchanges. Such consolidation would lead to overlapping (crosses) between Bid and Ask order books. If you wish to suggest a group of exchanges with very similar prices, send us an email. \n' +
      'A useful alternative is the Bookmap Correlation Tracker Add-on which allows the display of real-time prices of other instruments as an indicator on the chart. Bookmap Digital+is required for access to this Add-on.',
  },
  {
    lbl: 'I get disconnections. What does that mean and what should I do? ',
    txt:
      'Bookmap will attempt to reconnect each time you get disconnected. If that happens frequently, check your internet speed and stability. With low internet speed or with poor WiFi router, it’s recommended to connect your computer to the router with a cable. If your internet is fast and stable, disconnections may be caused by temporary problems within the exchange which last minutes or hours. If this is not the case, please report the problem to Bookmap Support. ',
  },
  {
    lbl: 'Can I use Bookmap on more than one PC at the same time using a single license?',
    txt:
      'No in order to run Bookmap on another PC, you have to disconnect the previous connection. You can disconnect also via Help→Deactivate.',
  },
]

export default function CryptoSection6FAQ() {
  const classes = useStyles()
  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }
  const [expanded, setExpanded] = React.useState<string | false>(false)

  return (
    <Container fixed className={classes.root}>
      <Typography variant={'h2'} component={'h2'}>
        Bookmap for Digital Currencies <span style={{ color: '#0085f9' }}>FAQs</span>
      </Typography>
      {content.map(({ lbl, txt }, index) => {
        return (
          <Accordion
            key={index}
            className={classes.accordion}
            onChange={handleChange('panel' + index)}
            style={{
              border: expanded === 'panel' + index ? '1px solid #0085f9' : 'inherit',
              boxSizing: 'border-box',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={classes.icon} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography component={'h3'} variant={'h3'} className={classes.heading}>
                {lbl}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.lbl}>{txt}</Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
          marginTop: '70px',
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          href="https://bookmap.com/members/signup/thAhOgYUg"
          sx={{ color: '#fff' }}
          id={'crypto_end_get_it_now'}
        >
          SUBSCRIBE FOR FREE
        </Button>
      </Box>
    </Container>
  )
}

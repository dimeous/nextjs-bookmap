import { Box, Container, Divider, Typography } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import Image from 'next/image'
import React from 'react'

import { ThemeColors } from '../../../theme/theme-styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    backgroundColor: ThemeColors.DarkBlue,
    [theme.breakpoints.down('md')]: {
      ...rootMobileBlockProps,
    },
  },
  container: {
    paddingBottom: '100px',
  },
  bold: {
    color: ThemeColors.DarkBlue,
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: 500,
  },
  desc: {
    margin: '0px',
    color: ThemeColors.DarkBlue,
    fontSize: '16px',
    lineHeight: '28px',
  },
}))

type ElementProperties = {
  page?: string
}
const TradSection6 = ({ page }: ElementProperties): React.ReactElement => {
  const classes = useStyles()
  const FAQs = [
    { id: 1, header: 'Which version of Bookmap do I need for FairX? ', desc: 'Version 7.3' },
    {
      id: 2,
      header: 'Do the zero fees of Bookmap apply to FairX and Tradovate only? ',
      desc: 'Yes. Tradovate cover the Bookmap costs for customers that trade FairX through Tradovate',
    },
    {
      id: 3,
      header: 'Do the zero fees for the data apply to FairX only? ',
      desc: 'Yes. market data for FairX is free. If you wish to connect Bookmap to CME index futures, you’ll have to pay separately for the market data',
    },
    {
      id: 4,
      header: 'Do I need a Tradovate real account to connect to FairX with Bookmap? ',
      desc: 'No. To watch FairX contracts with Bookmap, you can have a Tradovate demo account. For live trading you’ll have to open a real trading account',
    },
    {
      id: 5,
      header: 'How long does it take to open Tradovate demo account? ',
      desc: 'Tradovate demo accounts can be created in a few seconds. You just need to select a username and password and confirm your email address.',
    },
    {
      id: 6,
      header:
        'What is the difference between the Bookmap package for Tradovate-FairX and other Bookmap packages? ',
      desc: 'With Bookmap package for Tradovate-FairX you can connect for free through CQG to all symbols on FairX and trade through Tradovate. You can also trade the CME Micro eMini equity futures with Bookmap at no cost. However, with this package you cannot connect (or trade) other CME symbols or exchanges (e.g. CL, GC, etc.)',
    },
    {
      id: 7,
      header:
        'If I want to have Bookmap connect to more instruments / exchanges what should I do? ',
      desc: '',
    },
  ]

  return (
    <div>
      <Container className={classes.container}>
        <Typography
          my={10}
          variant="h2"
          style={{ textAlign: 'center', color: ThemeColors.DarkBlue, fontWeight: 700 }}
        >
          Still not sure or have questions? Just visit our{' '}
          <p style={{ margin: '0px' }}>FAQ section</p>
        </Typography>
        {FAQs.map((faq) => {
          return (
            <Box key={faq.id}>
              {faq.id == 5 ? (
                <Box key={faq.id}>
                  <Divider />
                  <Typography my={3} variant="body1" className={classes.bold}>
                    {faq.header}
                    <p className={classes.desc}>
                      {faq.desc}{' '}
                      <p style={{ marginTop: '0px' }}>
                        <a href="#">Click here</a> to register{' '}
                      </p>{' '}
                      <p>
                        {' '}
                        <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>NOTE</span> - It
                        is recommended that you use the same email address in Tradovate and in
                        Bookmap
                      </p>
                    </p>
                  </Typography>
                </Box>
              ) : (faq.id == 7 ? (
                <Box key={faq.id}>
                  <Divider />
                  <Typography my={3} variant="body1" className={classes.bold}>
                    {faq.header}
                    <ul className={classes.desc}>
                      <li>
                        For access to all futures and stocks you have to upgrade Bookmap package to{' '}
                        <a href="https://bookmap.com/packages-comparison"> Global / Global+</a>
                      </li>
                      <li>
                        For access to all crypto instruments only, you have to upgrade to{' '}
                        <a href="https://bookmap.com/crypto/">Digital+</a>
                      </li>
                      <li>
                        In addition, you have to subscribe to market data, either through Tradovate
                        or through Bookmap
                      </li>
                    </ul>
                  </Typography>
                </Box>
              ) : (
                <Box key={faq.id}>
                  <Divider />
                  <Typography my={3} variant="body1" className={classes.bold}>
                    {faq.header}
                    <p className={classes.desc}>{faq.desc}</p>
                  </Typography>
                </Box>
              ))}
            </Box>
          )
        })}
        <Box>
          <Divider />
          <Typography my={3} variant="body1" className={classes.bold}>
            What are the specifications &amp; margins of the futures contracts on FairX?
          </Typography>
          <Box>
            <Image
              src={'/static/tradovate/fairx-future-contacts.png'}
              alt={'FairX Features Contracts'}
              width={516}
              height={260}
            />
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default TradSection6

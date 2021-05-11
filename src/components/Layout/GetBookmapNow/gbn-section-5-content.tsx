import { Tooltip, Typography } from '@material-ui/core'
import ContactSupportIcon from '@material-ui/icons/ContactSupport'
import React, { Fragment } from 'react'
const tooltipText = (
  <Fragment>
    <Typography sx={{ p: 2, fontSize: '1rem' }}>
      Multibook is available for free to all Digital+ monthly or yearly subscribers for one year.
    </Typography>
  </Fragment>
)
export const newContentSection5: { [index: string]: any } = {
  h1: 'Pricing and Packages',
  h2: 'Buy and sell digital assets and get many features with the Bookmap desktop application ',
  l1: 'MONTHLY',
  l2: 'YEARLY',
  l4: 'Save 15%',
  t1: 'digital',
  t2: 'digital plus',
  r1: 'Bookmap desktop application',
  r2: 'Real-time market data ',
  r3: 'Simulated & Live Mode ',
  r4: 'API for custom indicators & automated strategies ',
  r5: (
    <Fragment>
      <span style={{ color: '#0084f6' }}>{'>'}20</span> Supported exchanges
    </Fragment>
  ),

  r61: (
    <Fragment>
      <span style={{ color: '#0084f6' }}>1 digital currency pair</span> viewable at the same time
    </Fragment>
  ),
  r62: (
    <Fragment>
      <span style={{ color: '#0084f6' }}>20 digital currency pairs</span> viewable at the same time
    </Fragment>
  ),
  r7: 'Backfill data',
  r8: 'Record and Replay',
  r9: 'VWAP',
  r10: 'Correlation Tracker',
  r11: 'Advanced Education',
  r12: (
    <Fragment>
      <b>Multibook: Exclusive to Digital+ Subscribers</b>
      <Tooltip title={tooltipText}>
        <ContactSupportIcon style={{ position: 'absolute', marginLeft: '0px ' }} />
      </Tooltip>
    </Fragment>
  ),
  b1: 'GET DIGITAL',
  b2: 'GET DIGITAL+',
  link12: 'https://bookmap.com/members/signup/gv3uiH6Hi?product_id_page-0[]=170-170',
  link22: 'https://bookmap.com/members/signup/gv3uiH6Hi?product_id_page-0[]=171-171',
  endText:
    'Interested in Stocks or Futures? Explore more features and opportunities Bookmap provides: ',
}

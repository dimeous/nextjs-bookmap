import React, { Fragment } from 'react'
import ContactSupportIcon from '@material-ui/icons/ContactSupport'
import { Typography, Tooltip } from '@material-ui/core'
const tooltipText = (
  <Fragment>
    <Typography sx={{ p: 2, fontSize: '1rem' }}>
      Multibook is available for free to all Digital+ monthly or yearly subscribers only with
      auto-renew. If subscription is ever cancelled or interrupted, Multibook can then only be
      purchased as an Add-On.
    </Typography>
  </Fragment>
)
export const text: { [index: string]: any } = {
  h1: 'Pricing and Packages',
  h2: 'Trade cryptocurrencies and get many features with Bookmap desktop application ',
  l1: 'MONTHLY',
  l2: 'YEARLY',
  l4: 'Save 15%',
  t1: 'digital',
  t2: 'digital plus',
  r1: 'Bookmap desktop application',
  r2: 'Real-time market data ',
  r3: 'Simulated & Live Trading ',
  r4: 'API for custom indicators & automated strategies ',
  r5: (
    <Fragment>
      <span style={{ color: '#0084f6' }}>{'>'}20</span> Supported exchanges
    </Fragment>
  ),

  r61: (
    <Fragment>
      <span style={{ color: '#0084f6' }}>1 trading pairs</span> viewable at the same time
    </Fragment>
  ),
  r62: (
    <Fragment>
      <span style={{ color: '#0084f6' }}>20 trading pairs</span> viewable at the same time
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
}

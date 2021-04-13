import React, { Fragment } from 'react'
import InfoIcon from '@material-ui/icons/Info'
import Tooltip from '@material-ui/core/Tooltip'
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
      <Tooltip title="NEW Multibook (Until August, 2021)">
        <InfoIcon style={{ fontSize: 'small', position: 'absolute', marginLeft: '-16px' }} />
      </Tooltip>
      NEW Multibook (Until August, 2021)
    </Fragment>
  ),
  b1: 'GET DIGITAL',
  b2: 'GET DIGITAL+',
  link12: 'https://bookmap.com/members/signup/gv3uiH6Hi?product_id_page-0[]=170-170',
  link22: 'https://bookmap.com/members/signup/gv3uiH6Hi?product_id_page-0[]=171-171',
}

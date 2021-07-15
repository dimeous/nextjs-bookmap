import React, { useEffect, useState } from 'react'

import FirstSectionBookmap from '../../common/first-section'

type CardProperties = {
  mobile?: boolean
}

const TradSection1 = ({ mobile }: CardProperties): React.ReactElement => {
  const option = {
    texts: [
      {
        text: 'No Commissions or fees for trading FairX futures with Bookmap',
        sx: { color: 'white', fontSize: '38px' },
      },
      {
        text: undefined,
        sx: undefined,
      },
      {
        text: 'Want to get access to smaller futures contracts with no commissions or fees? Well then, you’ve come to the right place.',
        sx: { color: 'white', fontSize: '18px', paddingBottom: '30px' },
      },
    ],
    button: {
      text: 'Get Bookmap for FairX',
      id: 'main_top_start_for_free',
      link: 'https://bookmap.com/members/signup/C0ogLHLr?utm_medium=ppc&utm_source=google&utm_campaign=Tradovate_Search&utm_content=New_landing',
    },
    rootSx: { paddingTop: '5px!important' },
  }
  return <FirstSectionBookmap mobile={mobile} option={option} type={0} />
}
export default TradSection1

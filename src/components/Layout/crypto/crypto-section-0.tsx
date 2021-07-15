import { useTranslation } from 'next-i18next'
import React from 'react'

import FirstSectionBookmap from '../../common/first-section'
type CardProperties = {
  mobile: boolean
}

const CryptoSection0 = ({ mobile }: CardProperties): React.ReactElement => {
  const { t } = useTranslation('crypto')
  const option = {
    texts: [
      {
        text: t('CS0MultibookIsyoursatNoAdditionalCost'),
        sx: { fontSize: '32px' },
      },
      {
        text: t('CS0Choosefrom20cryptoExchangesSeeMultipleOrder'),
        sx: { fontSize: '32px', paddingBottom: '32px' },
      },
    ],

    button: {
      text: t('CS0GetMultibook'),
      id: 'main_top_start_for_free',
      link: t('CS0TopStartForFree'),
    },
    image: { src: '/static/main/s0/toppic.png', width: 800, height: 458, alt: 'Bookmap chart' },
  }
  return <FirstSectionBookmap mobile={mobile} option={option} type={1} />
}
export default CryptoSection0

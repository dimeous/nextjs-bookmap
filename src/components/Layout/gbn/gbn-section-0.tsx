import { useTranslation } from 'next-i18next'
import React from 'react'

import { getUTMUrlDependsOnPage } from '../../../lib'
import FirstSectionBookmap from '../../common/first-section'

type CardProperties = {
  mobile: boolean
  page?: string
}

const GbnSection0 = ({ mobile, page }: CardProperties): React.ReactElement => {
  const { t } = useTranslation('gbn')
  const addToLink = getUTMUrlDependsOnPage(page, true)

  const option = {
    texts: [
      {
        text: t('CS0MultibookIsyoursatNoAdditionalCost'),
        sx: { fontSize: '32px' },
      },
      {
        text: t('CS0GBNChoosefrom20digitalAssetsExchangesSeeMultipleO'),
        sx: { fontSize: '32px', paddingBottom: '32px' },
      },
    ],

    button: {
      text: t('CS0GetMultibook'),
      id: 'main_top_start_for_free',
      link: t('CS0TopStartForFree') + addToLink,
    },
    image: { src: '/static/main/s0/toppic.png', width: 800, height: 458, alt: 'Bookmap chart' },
  }
  return <FirstSectionBookmap mobile={mobile} option={option} type={1} />
}
export default GbnSection0

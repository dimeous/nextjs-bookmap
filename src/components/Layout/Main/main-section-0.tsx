import { useTranslation } from 'next-i18next'
import React from 'react'

import FirstSectionBookmap from '../../common/first-section'

type CardProperties = {
  mobile: boolean
}

const MainSection0 = ({ mobile }: CardProperties): React.ReactElement => {
  const { t } = useTranslation('main')
  const option = {
    texts: [
      {
        text: t('MS0AtradingPlatformThatDisplaysML'),
        sx: { color: 'white' },
      },
      {
        text: t('MS0NEWlivetradingSsessionsWithproTraders'),
        sx: { fontSize: '38px', paddingBottom: '10px' },
      },
      {
        text: t('MS0ForGlobalPlusSubscribers'),
        sx: {},
      },
    ],

    button: {
      text: t('MS0STARTFORFREE'),
      id: 'main_top_start_for_free',
      link: 'https://bookmap.com/members/signup/thAhOgYUg',
    },
  }
  return <FirstSectionBookmap mobile={mobile} option={option} type={0} />
}
export default MainSection0

import React from 'react'

import { ThemeColors } from '../../../theme/theme-styles'
import FirstSectionBookmap from '../../common/first-section'
type CardProperties = {
  mobile: boolean
}

const WebS0 = ({ mobile }: CardProperties): React.ReactElement => {
  const option = {
    texts: [
      {
        text: 'Bookmap WEB for your website',
        sx: {
          fontSize: '48px',
          color: ThemeColors.MainWhite,
          fontWeight: 500,
          maxWidth: mobile ? 'auto' : '402px',
        },
      },
      {
        text: 'Bookmap Web is a great way to share real time order flow directly from your site',
        sx: {
          fontSize: '20px',
          paddingBottom: mobile ? '32px' : '120px',
          color: '#fff!important',
          maxWidth: mobile ? 'auto' : '402px',
        },
      },
    ],

    button: {
      text: 'GET YOUR WIDGET',
      id: 'web_top_get_your widget',
      link: '#get-your-widget',
    },
    image: { src: '/static/web/s0/web-s0.png', width: 500, height: 318, alt: 'Bookmap WEB' },
    imageBoxSx: mobile ? { paddingBottom: '32px' } : { paddingTop: '60px', paddingBottom: '100px' },
  }
  return <FirstSectionBookmap mobile={mobile} option={option} type={1} />
}
export default WebS0

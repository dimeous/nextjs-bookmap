import React from 'react'

import FirstSectionBookmap from '../../common/first-section'
type CardProperties = {
  mobile: boolean
}

const WebS0 = ({ mobile }: CardProperties): React.ReactElement => {
  const option = {
    texts: [
      {
        text: 'Bookmap WEB for your website',
        sx: { fontSize: '32px' },
      },
      {
        text: 'Bookmap Web is a great way to share real time order flow directly from your site',
        sx: { fontSize: '20px', paddingBottom: '32px' },
      },
    ],

    button: {
      text: 'GET YOUR WIDGET',
      id: 'web_top_get_your widget',
      link: '#get-your-widget',
    },
    image: { src: '/static/web/s0/web-s0.png', width: 800, height: 510, alt: 'Bookmap WEB' },
  }
  return <FirstSectionBookmap mobile={mobile} option={option} type={1} />
}
export default WebS0

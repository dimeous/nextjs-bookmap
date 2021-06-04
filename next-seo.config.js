const title = 'Bookmap®️ Market Data Analysis & Trading Platform | 2021'
const description =
  'Best order flow analysis and trading software, offering stock, futures, and crypto traders live education, advanced charting tools, and indicators. Start free.'
export default {
  title: title,
  description: description,
  canonical: 'https://bookmap.com',
  noindex: true,
  openGraph: {
    url: 'https://bookmap.com',
    title: title,
    description: description,
    images: [
      {
        url: '/static/bookmap_seo.jpg',
        width: 600,
        height: 200,
        alt: title,
      },
    ],
    site_name: 'Bookmap',
  },
  twitter: {
    handle: '@bookmap_pro',
    site: '@bookmap_pro',
    title: title,
    cardType: 'summary_large_image',
  },
}

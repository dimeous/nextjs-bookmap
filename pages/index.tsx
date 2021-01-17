import React from 'react'

import MainSection0 from '../src/components/Layout/Main/MainSection0'
import MainSection1 from '../src/components/Layout/Main/MainSection1'
import MainSection2Features from '../src/components/Layout/Main/MainSection2Features'
import MainSection3 from '../src/components/Layout/Main/MainSection3'
import MainSection4 from '../src/components/Layout/Main/MainSection4Connectivity'
import MainSection5Pricing from '../src/components/Layout/Main/MainSection5Pricing'
import MainSection6Trading from '../src/components/Layout/Main/MainSection6Trading'
import MainSection7Words from '../src/components/Layout/Main/MainSection7Words'
import MainSection8UserReviews from '../src/components/Layout/Main/MainSection8UsersReviews'

export default function Index() {
  return (
    <main style={{ paddingTop: 60 }}>
      <MainSection0 />
      <MainSection1 />
      <MainSection2Features />
      <MainSection3 />
      <MainSection4 />
      <MainSection5Pricing />
      <MainSection6Trading />
      <MainSection7Words />
      <MainSection8UserReviews />
    </main>
  )
}

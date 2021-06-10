// eslint-disable-next-line unicorn/filename-case
import React, { Fragment } from 'react'
import { useTranslation } from 'next-i18next'

const { t } = useTranslation('main')
export const text = {
  h1: t('MS5PricingAndPackages'),
  h2: t('MS5DataIsNotIncluded'),
  l1: t('MS5MONTHLY'),
  l2: t('MS5YEARLY'),
  l3: t('MS5LIFETIME'),
  l4: t('MS5Save20Percent'),
  t1: 'digital',
  t2: 'global',
  KeyFeature: t('MS5KEYFEATURES'),
  Heatmap: (
    <Fragment>
      {{t('MS5HeatmapVolumeDotsCVD')}}
    </Fragment>
  ),
  Record: t('MS5RecordReplayVWAPPOC'),
  LLT: t('MS5LLTStrengthLevelImbalance'),
  oneclick: t('MS5ONECLICKTRADING'),
  Futures: t('MS5FuturesStocks'),
  Futures2: t('MS5FuturesAndStocks'),
  Market: t('MS5MARKETSVISUALIZATION'),
  Market2: (
    <Fragment>
      {{t('MS5CryptoCurrencies20CryptoExchangesFreeData')}}
    </Fragment>
  ),
  dataReq: (
    <Fragment>
      {{t('MS5DataRequired')}}<sup>*</sup>
    </Fragment>
  ),
  maxTrSymbols: (
    <Fragment>
      {{t('MS5MaximumNumberOfTradingSymbols')}}
    </Fragment>
  ),

  delayed: t('MS5Delayed'),
  education: t('MS5EDUCATION'),
  education2: t('MS5BookmapИasicsЦebinarsЦithQ&As'),
  livetrdss: t('MS5LIVETradingSessionsWithProTraders'),
  free: t('MS5FREE'),
  orderFlow: t('MS5OrderFlowAnalysisWebinars'),
  AdvTradEducation: t('MS5AdvancedTradingEducationalCourse'),
  marketplace: t('MS5MARKETPLACE'),
  addons: t('MS5AddonsMarketDataAndEducationalCourses'),
  addonsAll: (
    <Fragment>
      {{t('MS5CompatibleWithAllAddons')}}
    </Fragment>
  ),
  addonsSome: (
    <Fragment>
      {{t('MS5CompatibleWithSomeAddons')}}
    </Fragment>
  ),
  endtext: (
    <Fragment>
      <sup>*</sup>
      {{t('MS5FuturesStocksMarketDataFeesFromThirdPartyProviders')}}
    </Fragment>
  ),
  btn: t('MS5GoToEducation'),
  link1: 'https://bookmap.com/members/signup/thAhOgYUg',
  link12: 'https://bookmap.com/members/signup/yVqUeUzF?product_id_page-0[]=101-101',
  link13: 'https://bookmap.com/members/signup/yVqUeUzF?product_id_page-0[]=102-102',
  link22: 'https://bookmap.com/members/signup/yVqUeUzF?product_id_page-0[]=104-104',
  link23: 'https://bookmap.com/members/signup/yVqUeUzF?product_id_page-0[]=105-105',
  link32: 'https://bookmap.com/members/signup/yVqUeUzF?product_id_page-0[]=72-72',
  link33: 'https://bookmap.com/members/signup/yVqUeUzF?product_id_page-0[]=63-63',
}

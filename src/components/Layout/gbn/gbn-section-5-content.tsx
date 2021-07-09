import { Tooltip, Typography } from '@material-ui/core'
import ContactSupportIcon from '@material-ui/icons/ContactSupport'
import { useTranslation } from 'next-i18next'
import React, { Fragment } from 'react'

const TooltipText = (page: string | undefined) => {
  const { t } = useTranslation('gbn')
  return (
    <Fragment>
      <Typography sx={{ p: 2, fontSize: '1rem' }}>
        {t('CS5MultibookIsAvailableForFreeToAllDigitalPMonthly')}
      </Typography>
    </Fragment>
  )
}

type PageProperties = {
  page: string | undefined
}

const R12 = ({ page }: PageProperties) => {
  const { t } = useTranslation('gbn')
  return (
    <Fragment>
      <b>{t('CS5MultibookExclusiveToDigitalPSubscribers')}</b>
      <Tooltip title={TooltipText(page)}>
        <ContactSupportIcon style={{ position: 'absolute', marginLeft: '0px ' }} />
      </Tooltip>
    </Fragment>
  )
}

type SpanTextProperties = {
  text: string
  page: string | undefined
}
const SpanText = ({ text, page }: SpanTextProperties) => {
  const { t } = useTranslation('gbn')
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: t(text, {
          interpolation: { escapeValue: false },
        }),
      }}
    />
  )
}

export const defaultText = (page: string | undefined): { [index: string]: any } => {
  return {
    h1: 'CS5PricingAndPackages',
    h2: 'CS5GBNBuyASellDigitalAssetsAGetManyFeatures',
    l1: 'CS5MONTHLY',
    l2: 'CS5YEARLY',
    l4: 'CS5Save15P',
    t1: 'CS5digital',
    t2: 'CS5digitalPlus',
    r1: 'CS5BookmapDesktopApplication',
    r2: 'CS5RealTimeMarketData',
    r3: 'CS5GBNSimulatedLiveMode',
    r4: 'CS5APIForCustomIndicatorsAutomatedStrategies',

    r5: (
      <Fragment>
        <SpanText text={'CS5B20SupportedExchanges'} page={page} />
      </Fragment>
    ),

    r61: (
      <Fragment>
        <SpanText text={'CS5GBN1DigitalCurrencyPairViewableAtTheSameT'} page={page} />
      </Fragment>
    ),
    r62: (
      <Fragment>
        <SpanText text={'CS5GBN20DigitalCurrencyPairViewableAtTheSameT'} page={page} />
      </Fragment>
    ),
    r7: 'CS5BackfillData',
    r8: 'CS5RecordAndReplay',
    r9: 'CS5VWAP',
    r10: 'CS5CorrelationTracker',
    r11: 'CS5AdvancedEducation',
    r12: <R12 page={page} />,
    b1: 'CS5GETDIGITAL',
    b2: 'CS5GETDIGITALP',
    link12: 'CS5link12',
    link22: 'CS5link22',
    endText: 'CS5GBNInterestedInStocksOrFutures',
  }
}

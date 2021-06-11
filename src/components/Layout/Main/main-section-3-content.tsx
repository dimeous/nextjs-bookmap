import { useTranslation } from 'next-i18next'
import { Fragment } from 'react'

const TextFragment = () => {
  const { t } = useTranslation('main')
  return (
    <Fragment>
      {t('MS3RegisterToBookmap')} <br />
      {t('MS3DownloadAndInstallTheApp')}
    </Fragment>
  )
}

export const text = {
  h1: 'MS3StartWithBookmapInThreeSimpleSteps',
  s1: {
    lbl: 'MS3GetSoftware',
    txt: <TextFragment />,
  },
  s2: {
    lbl: 'MS3ConnectData',
    txt: 'MS3ConnectToMarketDataProvider',
  },
  s3: {
    lbl: 'MS3EducateYourself',
    txt: 'MS3GetFreeEducationIncludingLiveBasicOrAdvaceWebinars',
  },
  btn: 'MS3DownloadAndInstallTheApp',
}

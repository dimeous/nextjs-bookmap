import { Fragment } from 'react'
import { useTranslation } from 'next-i18next'


const { t } = useTranslation('main')
export const text = {
  h1: t('MS3StartWithBookmapInThreeSimpleSteps'),
  s1: {
    lbl: t('MS3GetSoftware'),
    txt: (
      <Fragment>
        {t('MS3RegisterToBookmap')} <br />
        {t('MS3DownloadAndInstallTheApp')}
      </Fragment>
    ),
  },
  s2: {
    lbl: t('MS3ConnectData'),
    txt: t('MS3ConnectToMarketDataProvider'),
  },
  s3: {
    lbl: t('MS3EducateYourself'),
    txt: t('MS3GetFreeEducationIncludingLiveBasicOrAdvaceWebinars'),
  },
  btn: t('MS3DownloadAndInstallTheApp'),
}

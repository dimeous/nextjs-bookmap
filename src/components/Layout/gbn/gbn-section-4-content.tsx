import { isGetBookMapNow } from '../../../lib'

const text = (page?: string) => {
  return {
    h1: 'CS4GetStartedInThreeSimpleSteps',
    s1: {
      lbl: 'CS4GetBookmapDigitalPlus',
      txt: isGetBookMapNow(page)
        ? 'CS4GBNRegisterInstallAndConnectBookmapTo'
        : 'CS4RegisterInstallAndConnectBookmapTo',
    },
    s2: {
      lbl: 'CS4GetMultibook',
      txt: 'CS4ExploreTheBenefitOfMultipleInstruments',
    },
    s3: {
      lbl: 'CS4MakeInformedDecisions',
      txt: isGetBookMapNow(page) ? 'CS4GBNAnalyzeMarketsInANewWay' : 'CS4AnalyzeMarketsInANewWay',
    },
  }
}
export default text

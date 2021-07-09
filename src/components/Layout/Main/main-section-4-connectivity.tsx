import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import {Theme} from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/styles'
import {useTranslation} from 'next-i18next'
import {useState} from 'react'

import ImagePopover from '../../common/image-popover'
import {ThemeClasses, ThemeElements} from "../../../theme/theme-styles";

interface TabPanelProperties {
    children?: React.ReactNode
    index: any
    value: any
}

const TabPanel = (props: TabPanelProperties) => {
    const {children, value, index, ...other} = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

const a11yProperties = (index: any) => {
    return {
        id: `wrapped-tab-${index}`,
        'aria-controls': `wrapped-tabpanel-${index}`,
    }
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        ...ThemeElements.rootBlockProps,
        backgroundColor: theme.palette.background.paper,
    },
    link: {
        width: '100%',
        textAlign: 'right',
        marginTop: '20px',
        paddingRight: '8%',
    },
    imageItem: ThemeClasses.connectivityClasses.imageItem
}))

export default function TabsWrappedLabelSection4() {
    const {t} = useTranslation('main')
    const classes = useStyles()
    const [value, setValue] = useState('one')

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue)
    }

    return (
        <Container fixed className={classes.root}>
            <div id="connectivity" style={{position: 'absolute', marginTop: '-140px'}}></div>
            <div>
                <Typography component="h2" variant="h2">
                    {t('MS4Connectivity')}
                </Typography>
                <Typography component="h3" variant="h3">
                    {t('MS4BookmapIsCompatibleWithManyDataProvidersExchanges')}
                </Typography>
                <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
                    <Tab value="one" label="FUTURES" wrapped {...a11yProperties('one')} />
                    <Tab value="two" label="STOCKS" {...a11yProperties('two')} />
                    <Tab value="three" label="CRYPTO" {...a11yProperties('three')} />
                </Tabs>
                {/* 1-st Panel*/}
                <TabPanel value={value} index="one">
                    <Grid container alignItems="center">
                        {/* First line*/}
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/1/dxfeed.png"
                                    alt="dxFeed"
                                    width={142}
                                    height={41}
                                    link="https://bookmap.com/dxfeed/"
                                    label="bookmap.com/dxfeed"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/1/rithmic.svg"
                                    alt="Rithmic"
                                    width={142}
                                    height={41}
                                    link="http://yyy3.rithmic.com/"
                                    label="yyy3.rithmic.com"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/1/trading-tech.svg"
                                    alt="Trading Technology"
                                    width={142}
                                    height={41}
                                    link="http://www.tradingtechnologies.com"
                                    label="www.tradingtechnologies.com"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/1/cqg.svg"
                                    alt="CQG"
                                    width={142}
                                    height={41}
                                    link="http://www.cqg.com"
                                    label="www.cqg.com"
                                />
                            </Box>
                        </Grid>
                        {/* 2 line*/}
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/1/gain-capital.svg"
                                    alt="Gain Capital"
                                    width={142}
                                    height={41}
                                    link="http://www.gaincapital.com"
                                    label="www.gaincapital.com"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/1/ninja-traders.svg"
                                    alt="Ninja Traders"
                                    width={142}
                                    height={41}
                                    link="http://ninjatrader.com"
                                    label="ninjatrader.com"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/1/transact.svg"
                                    alt="TransAct Futures"
                                    width={142}
                                    height={41}
                                    link="http://www.transactfutures.com"
                                    label="www.transactfutures.com"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/1/iqfeed.svg"
                                    alt="iQFEED"
                                    width={142}
                                    height={41}
                                    link="http://www.transactfutures.com"
                                    label="www.transactfutures.com"
                                />
                            </Box>
                        </Grid>
                        {/* 3 line*/}
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/1/stage.svg"
                                    alt="Stage Five"
                                    width={142}
                                    height={41}
                                    link="http://stage5trading.com"
                                    label="stage5trading.com"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/1/cedro.png"
                                    alt="Cedro Technologies"
                                    width={142}
                                    height={41}
                                    link="http://www.cedrotech.com"
                                    label="www.cedrotech.com"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/1/eurex.png"
                                    alt="EUREX"
                                    width={142}
                                    height={41}
                                    link="http://eurexchange.com"
                                    label="eurexchange.com"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/1/edge-clear.png"
                                    alt="Edge Clear"
                                    width={120}
                                    height={100}
                                    link="http://edgeclear.com"
                                    label="edgeclear.com"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </TabPanel>
                {/* 2-nd Panel*/}
                <TabPanel value={value} index="two">
                    <Grid container>
                        {/* First line*/}
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/1/dxfeed.png"
                                    alt="dxFeed"
                                    width={142}
                                    height={41}
                                    link="http://bookmap.com/dxfeed/"
                                    label="bookmap.com/dxfeed/"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/2/ts.png"
                                    alt="Trade Station"
                                    width={142}
                                    height={70}
                                    link="http://www.tradestation.com/promo/bookmap/"
                                    label="www.tradestation.com/promo/bookmap/"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/2/ib.png"
                                    alt="Interactive brokers"
                                    width={142}
                                    height={70}
                                    link="http://interactivebrokers.co.uk"
                                    label="interactivebrokers.co.uk"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/1/cedro.png"
                                    alt="CEDRO Technologies"
                                    width={142}
                                    height={41}
                                    link="http://cedrotech.com"
                                    label="cedrotech.com"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/2/qa.png"
                                    alt="CEDRO Technologies"
                                    width={142}
                                    height={31}
                                    link="https://marketplace.bookmap.com/product/quotemedia/"
                                    label="Quotemedia"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </TabPanel>
                {/* 3-d Panel*/}
                <TabPanel value={value} index="three">
                    <Grid container>
                        {/* First line*/}
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/3/binance.png"
                                    alt="Binance"
                                    width={130}
                                    height={31}
                                    link="http://binance.com/en/register?ref=39242647"
                                    label="binance.com/en/register?ref=39242647"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/3/binance-futures.png"
                                    alt="Binance Futures"
                                    width={142}
                                    height={41}
                                    link="http://binance.com/en/register?ref=39242647"
                                    label="binance.com/en/register?ref=39242647"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/3/bitmex.png"
                                    alt="BitMEX"
                                    width={142}
                                    height={25}
                                    link="http://bitmex.com/register/9cZLmk"
                                    label="bitmex.com/register/9cZLmk"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/3/bitflyer.png"
                                    alt="BitFlyer"
                                    width={142}
                                    height={65}
                                    link="http://bitflyer.com"
                                    label="bitflyer.com"
                                />
                            </Box>
                        </Grid>
                        {/* 2 line*/}
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/3/bitstamp.png"
                                    alt="BitStamp"
                                    width={100}
                                    height={90}
                                    link="http://bitstamp.net"
                                    label="bitstamp.net"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/3/btse.png"
                                    alt="BTSE"
                                    width={150}
                                    height={31}
                                    link="https://www.btse.com/en/ref?c=33KWaq"
                                    label="btse.com"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/3/bittrex.png"
                                    alt="BITTREX"
                                    width={142}
                                    height={30}
                                    link="http://bittrex.com"
                                    label="bittrex.com"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/3/bybit.png"
                                    alt="bybit"
                                    width={100}
                                    height={41}
                                    link="http://bybit.com"
                                    label="bybit.com"
                                />
                            </Box>
                        </Grid>
                        {/* 3 line*/}
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/3/bitfinex.svg"
                                    alt="BITFINEX"
                                    width={110}
                                    height={41}
                                    link="http://bitfinex.com/?refcode=c11gDfxcm"
                                    label="bitfinex.com/?refcode=c11gDfxcm"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/3/coinbase.png"
                                    alt="Coinbase"
                                    width={142}
                                    height={41}
                                    link="http://coinbase.com"
                                    label="coinbase.com"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/3/coinflex.png"
                                    alt="CoinFLEX"
                                    width={142}
                                    height={41}
                                    link="http://coinflex.com"
                                    label="coinflex.com"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/3/deribit.png"
                                    alt="Deribit"
                                    width={142}
                                    height={41}
                                    link="http://deribit.com"
                                    label="deribit.com"
                                />
                            </Box>
                        </Grid>
                        {/* 4 line*/}
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/3/ftx.png"
                                    alt="FTX"
                                    width={110}
                                    height={41}
                                    link="http://ftx.com/#a=2572003"
                                    label="ftx.com/#a=2572003"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/3/hitbtc.jpg"
                                    alt="HitBTC"
                                    width={130}
                                    height={41}
                                    link="http://hitbtc.com"
                                    label="hitbtc.com"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/3/huobi.png"
                                    alt="Huobi"
                                    width={142}
                                    height={41}
                                    link="http://huobi.com"
                                    label="huobi.com"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/3/krakenf.png"
                                    alt="KRAKEN Futures"
                                    width={130}
                                    height={16}
                                    link="http://r.kraken.com/mPOeM"
                                    label="r.kraken.com/mPOeM"
                                />
                            </Box>
                        </Grid>
                        {/* 5 line*/}
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/3/kraken.png"
                                    alt="KRAKEN"
                                    width={142}
                                    height={20}
                                    link="http://r.kraken.com/mPOeM"
                                    label="r.kraken.com/mPOeM"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/3/liquid.png"
                                    alt="Liquid"
                                    width={142}
                                    height={41}
                                    link="http://liquid.com"
                                    label="liquid.com"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/3/okex.png"
                                    alt="OKEX"
                                    width={142}
                                    height={41}
                                    link="http://okex.com/join/1915841"
                                    label="okex.com/join/1915841"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/3/okcoin.svg"
                                    alt="OKCOIN"
                                    width={142}
                                    height={20}
                                    link="http://okcoin.com"
                                    label="okcoin.com"
                                />
                            </Box>
                        </Grid>
                        <Grid md={3} xs={6} item>
                            <Box className={classes.imageItem}>
                                <ImagePopover
                                    src="/static/main/s4/3/poloniex.png"
                                    alt="POLONIEX"
                                    width={142}
                                    height={70}
                                    link="http://poloniex.com"
                                    label="poloniex.com"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </TabPanel>
            </div>
            <Box className={classes.link}>
                <Link
                    href="https://bookmap.com/knowledgebase/docs/KB-IntroductionToBookmap-Connectivity"
                    color="secondary"
                    target={'_blank'}
                    rel={'noreferrer'}
                >
                    {t('MS4SeeConnectivityGuide')}
                </Link>
            </Box>
        </Container>
    )
}

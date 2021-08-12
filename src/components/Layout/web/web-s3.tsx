import {
  Button,
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Tooltip,
} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'

import { ThemeColors, ThemeElements } from '../../../theme/theme-styles'

interface TabPanelProperties {
  children?: React.ReactNode
  index: number
  value: any
}

const TabPanel = (props: TabPanelProperties) => {
  const { children, value, index, ...other } = props
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
const scale = 'scale(0.25, 0.25)'
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    ...ThemeElements.rootBlockProps,
    backgroundColor: theme.palette.background.paper,
  },
  /*
  iframe: {
    [theme.breakpoints.down('md')]: {
      MozTransform: scale,
      WebkitTransform: scale,
      OTransform: scale,
      MsTransform: scale,
      transform: scale,
      MozTransformOrigin: 'top left',
      WebkitTransformOrigin: 'top left',
      OTransformOrigin: 'top left',
      MsTransformOrigin: 'top left',
      TransformOrigin: 'top left',
    },
  },
  */
  buttonBox: {
    width: '310px',
    height: '132px',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '.5s ease',
  },
  buttonText1: {
    fontSize: '22px',
    fontWeight: 500,
  },
  buttonText2: {
    fontSize: '16px',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
  },
  card1: {
    background: ThemeColors.BGGrey,
    borderRadius: '10px',
    padding: '3px',
    width: 'fit-content',
  },
  card2: {
    borderRadius: '5px',
    margin: '14px 14px 9px 14px',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  getWidget: {
    height: '24px',
    minWidth: '86px',
  },
  copyButton: {
    height: '32px',
    minWidth: '87px',
  },
  cardTittle: {
    display: 'flex',
    padding: '16px 16px 0px 16px',
    justifyContent: 'space-between',
  },
  headText: {
    fontSize: '22px',
    fontWeight: 500,
  },
  codeText: {
    fontSize: '12px',
    lineHeight: '12px',
  },
}))

const WidgetBox = (props: { widgetScript: string; headText: string }) => {
  const { widgetScript, headText } = props
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const [showTooltip, setShowTooltip] = useState(false)
  const handleShare = (text: string) => {
    navigator.clipboard.writeText(text)
    setShowTooltip(true)
  }
  const handleOnTooltipClose = () => {
    setShowTooltip(false)
  }

  const codeText =
    '<!-- Bookmap Web (embedded) -->\n' + widgetScript + '<!-- end Bookmap Web (embedded) -->'
  return (
    <Box sx={{ pt: '40px', pb: '40px', justifyContent: 'center' }}>
      <Box className={classes.card1}>
        <Box className={classes.cardTittle}>
          <Typography className={classes.headText}>{headText}</Typography>
          <Button className={classes.getWidget} onClick={handleClickOpen}>
            GET WIDGET
          </Button>
        </Box>
        <div className={classes.card2}>
          <div
            dangerouslySetInnerHTML={{
              __html: widgetScript,
            }}
          />
        </div>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle>
            <Box className={classes.cardTittle}>
              <Typography>Copy the embaded code and apply to your website or blog</Typography>
              <Tooltip
                title={
                  <div>
                    code
                    <br />
                    copied to clipboard
                  </div>
                }
                open={showTooltip}
                leaveDelay={1500}
                onClose={handleOnTooltipClose}
              >
                <Button
                  className={classes.copyButton}
                  onClick={() => {
                    handleShare(codeText)
                  }}
                >
                  COPY
                </Button>
              </Tooltip>
            </Box>
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom className={classes.codeText}>
              {'<!-- Bookmap Web (embedded) -->'} <br />
              {widgetScript} <br />
              {'<!-- end Bookmap Web (embedded) -->'}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  )
}

const ButtonBox = (props: { text1: string; text2: string; selected: boolean }) => {
  const classes = useStyles()
  const { text1, text2, selected } = props
  return (
    <Box
      className={classes.buttonBox}
      sx={{ background: selected ? ThemeColors.MainBlue : ThemeColors.BGNutralGray }}
    >
      <Typography
        className={classes.buttonText1}
        sx={{ color: selected ? ThemeColors.MainWhite : ThemeColors.MainBlue }}
      >
        {text1}
      </Typography>
      <Typography
        className={classes.buttonText2}
        sx={{ color: selected ? ThemeColors.MainWhite : 'gray' }}
      >
        {text2}
      </Typography>
    </Box>
  )
}

const widgetList = (width: number, height: number) => {
  const general = width == 375 ? '375x90' : (width == 400 ? 'small' : 'general')
  const light = width == 375 ? '375x90' : (width == 400 ? 'small' : 'light')
  return [
    {
      headText: 'BTC/USD at Bitmex',
      script:
        '<iframe\n' +
        `src="https://embed.bookmap.com/v/${general}/index.php?duration=10m&whi=0.97&top=0.7"\n` +
        `style="display: block; width: ${width}px; height: ${height}px;">\n` +
        '</iframe>',
    },
    {
      headText: 'Light mode BTC/USD at Bitmex',
      script: `<iframe 
              src="https://embed.bookmap.com/v/${light}/index.php?duration=4m&whi=0.97&top=0.7"
              style="display: block; width: ${width}px; height: ${height}px;">
              </iframe>`,
    },
    {
      headText: 'ETH/USD at Bitmex',
      script: `<iframe
               src="https://embed.bookmap.com/v/${general}/index.php?duration=5m&provider=bitmex&symbol=ETHUSD&whi=0.97&top=0.7"
               style="display: block; width: ${width}px; height: ${height}px;">
               </iframe>`,
    },
  ]
}

const WebS3 = (): React.ReactElement => {
  const classes = useStyles()
  const [value, setValue] = React.useState<number>(1)

  return (
    <Container fixed>
      <Box className={classes.root}>
        <Grid container>
          <Grid item xs={12} lg={4} className={classes.gridItem}>
            <ButtonBase
              onClick={() => {
                setValue(1)
              }}
            >
              <ButtonBox text1={'Large'} text2={'(900px X 400px)'} selected={value == 1} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} lg={4} alignContent={'center'} className={classes.gridItem}>
            <ButtonBase
              onClick={() => {
                setValue(2)
              }}
            >
              <ButtonBox text1={'Medium'} text2={'(400px X 300px)'} selected={value == 2} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} lg={4} className={classes.gridItem}>
            <ButtonBase
              onClick={() => {
                setValue(3)
              }}
            >
              <ButtonBox text1={'Small'} text2={'(375px X 90px)'} selected={value == 3} />
            </ButtonBase>
          </Grid>
        </Grid>
        <Container>
          <Divider sx={{ p: 2 }} />
          <TabPanel value={value} index={1}>
            {widgetList(900, 400).map((v, index) => {
              return <WidgetBox widgetScript={v.script} headText={v.headText} key={index} />
            })}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {widgetList(400, 300).map((v, index) => {
              return <WidgetBox widgetScript={v.script} headText={v.headText} key={index} />
            })}
          </TabPanel>
          <TabPanel value={value} index={3}>
            {widgetList(375, 90).map((v, index) => {
              return <WidgetBox widgetScript={v.script} headText={v.headText} key={index} />
            })}
          </TabPanel>
        </Container>
      </Box>
    </Container>
  )
}

export default WebS3

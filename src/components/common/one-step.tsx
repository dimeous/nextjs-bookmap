import { Box, Card, CardContent, CardMedia } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'

import { ThemeColors } from '../../theme/theme-styles'

const useStyles = makeStyles(() => ({
  stepNumber: {
    color: ThemeColors.SecondBlue,
    font: '40px/40px MullerMedium,sans-serif',
    paddingTop: '23px',
  },
  stepHeader: {
    display: 'flex',
    margin: '18px 00 20px',
    width: '100%',
    font: '20px/20px MullerMedium,sans-serif',
    color: ThemeColors.SecondBlue,
    '& span': {
      marginRight: '10%',
    },
  },
  oneStep: {
    display: 'flex',
    alignItems: 'center',
    width: 'calc(33.33333% - 90px)',
  },
  oneStep1: {
    display: 'flex',
    width: 'calc(38.33333% - 90px)',
  },
  media: {
    width: 'auto',
    heght: '50px',
    marginLeft: '33%',
  },
  card: {
    border: 'none',
    boxShadow: 'none',
  },
}))

interface OneStepProperty {
  number: string
  title: string
  text: JSX.Element
  imgUrl: string
  type?: number
}

const OneStep = ({ number, title, text, imgUrl, type }: OneStepProperty) => {
  const classes = useStyles()
  return (
    <Box className={type == 1 ? classes.oneStep1 : classes.oneStep}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          component="img"
          alt={title}
          image={imgUrl}
          title={title}
        />
        <CardContent>
          {type == 1 ? (
            <Box sx={{ display: 'inlineFlex' }}>
              <Box sx={{ p: 1 }}>
                <Typography className={classes.stepNumber}>{number} </Typography>
              </Box>
              <Box sx={{ pl: 2 }}>
                <Typography className={classes.stepHeader}>{title}</Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  {text}
                </Typography>
              </Box>
            </Box>
          ) : (
            <>
              <Typography className={classes.stepHeader}>
                <span>{number}</span> {title}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                {text}
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  )
}
export default OneStep

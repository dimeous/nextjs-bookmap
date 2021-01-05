import { Container, Typography, makeStyles, Link, Box } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  container: {
    paddingRight: '79px',
    paddingLeft: '118px',
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
}))

export default function Footer() {
  const classes = useStyles()
  return (
    <footer color={'default'}>
      <Container className={classes.container}>
        <Box>
          <Typography>This is a foote</Typography>
          <Link href="/about">About</Link>
        </Box>
      </Container>
    </footer>
  )
}

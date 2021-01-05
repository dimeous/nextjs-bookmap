import React from 'react'
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}))

export default function MainSection3() {
  const classes = useStyles()
  return (
    <Container fixed className={classes.root}>
      {/*<section className="l-three-steps u-mainpage-margin">
      <div className="c-small-container">
        <h2 className="u-title is-2">
          Start with Bookmap in 3 simple steps
        </h2>
        <div className="c-three-steps">
          <div className="one-step">
            <img className="cloud-image lazy"
                 src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                 data-src="https://bookmap.com/wp-content/themes/bookmap/assets/images/three-steps-main/cloudd.svg">
              <div className="the-step-header">
                <span>01</span>
                <p>Get Software</p>
              </div>
              <div className="the-step-content">
                <p>Register to Bookmap</p>
                <p>Download and install the app</p>
              </div>
              <div className="c-blue-button is-inversed">
                <a id="main_middle_start_for_free" href="https://bookmap.com/members/signup/thAhOgYUg"><span
                    className="is-desktop-text">START FOR FREE</span><span className="is-mobile-text">SUBSCRIBE FREE BOOKMAP®️</span></a>
              </div>
          </div>

          <div className="step-separator"></div>

          <div className="one-step">
            <img className="planet-image lazy"
                 src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                 data-src="https://bookmap.com/wp-content/themes/bookmap/assets/images/three-steps-main/planett.svg">
              <div className="the-step-header">
                <span>02</span>
                <p>Connect Data</p>
              </div>
              <div className="the-step-content">
                <p>Connect to market data provider</p>
                <p>(directly or via your broker)</p>
              </div>

          </div>

          <div className="step-separator"></div>
          <div className="one-step">
            <img className="note-image lazy"
                 src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201%201'%3E%3C/svg%3E"
                 data-src="https://bookmap.com/wp-content/themes/bookmap/assets/images/three-steps-main/notee.svg"
                 alt="download">
              <div className="the-step-header">
                <span>03</span>
                <p>Educate yourself</p>
              </div>
              <div className="the-step-content">
                <p>Get free education including live</p>
                <p>basic or advance webinars</p>
              </div>
          </div>
        </div>
        <div className="c-blue-button">
          <a id="main_middle_start_for_free" href="https://bookmap.com/members/signup/thAhOgYUg"><span
              className="is-desktop-text">START FOR FREE</span><span
              className="is-mobile-text">SUBSCRIBE FREE BOOKMAP®️</span></a>
        </div>
      </div>
    </section>

*/}
    </Container>
  )
}

import React from 'react'

export interface TrustBoxProperties {
  light: boolean
}

const TrustBoxFooter = ({ light }: TrustBoxProperties) => {
  // Create a reference to the <div> element which will represent the TrustBox
  const reference = React.useRef(null)
  React.useEffect(() => {
    // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
    // If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
    // When it is, it will automatically load the TrustBox.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (window.Trustpilot) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.Trustpilot.loadFromElement(reference.current, true)
    }
  }, [])
  return (
    <div
      ref={reference} // We need a reference to this element to load the TrustBox in the effect.
      className="trustpilot-widget" // Renamed this to className.
      data-locale="en-US"
      data-template-id="53aa8807dec7e10d38f59f32"
      data-businessunit-id="5c76a89be6713b000151de49"
      data-style-height="150px"
      data-style-width="100%"
      data-theme={light ? 'light' : 'dark'}
      data-tags="SelectedReview"
    >
      <a href="https://www.trustpilot.com/review/bookmap.com" target="_blank" rel="noreferrer">
        Trustpilot
      </a>
    </div>
  )
}
export default TrustBoxFooter

import React from 'react'
const TrustBox = (): React.ReactElement => {
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
      ref={reference}
      className="trustpilot-widget"
      data-locale="en-US"
      data-template-id="53aa8912dec7e10d38f59f36"
      data-businessunit-id="5c76a89be6713b000151de49"
      data-style-height="142px"
      data-style-width="100%"
      data-theme="light"
      data-stars="4,5"
      data-review-languages="en"
    >
      <a
        href="https://www.trustpilot.com/review/bookmap.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Trustpilot
      </a>
    </div>
  )
}
export default TrustBox

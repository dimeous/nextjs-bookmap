import { Component } from 'react'
import TrustBox from './trustBox'
// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.
type RederState = {
  render: boolean
}

export class TrustPreloadPilot extends Component<RederState> {
  // After the component did mount, we set the state each second.
  constructor(props: RederState) {
    super(props)
  }

  componentDidMount() {
    const aScript = document.createElement('script')
    aScript.type = 'text/javascript'
    aScript.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    aScript.async = 'true'
    document.head.appendChild(aScript)
    aScript.onload = function () {
      const trustbox = document.getElementById('trustbox')
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.Trustpilot.loadFromElement(trustbox)
    }
  }

  render() {
    if (this.props.render) return <TrustBox />
    else return <></>
  }
}
export default TrustPreloadPilot

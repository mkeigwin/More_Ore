import React from 'react'
import './UpgradeModal.css'

class HireMinerModal extends React.Component {
  render() {
    return(
      <div className="upgrade-modal hire-miner-modal">
        <h1>Miners</h1>
        <h3>Gain 1 ore every 1 second</h3>
        <h4>They'll do the dirty work for you...</h4>
        <p>Price: {this.props.hireMinerPrice} Refined Bronze</p>
      </div>
    )
  }
}

export default HireMinerModal

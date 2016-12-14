import React from 'react'
import './UpgradeModal.css'

class UpgradePickaxeModal extends React.Component {
  render() {
    return(
      <div className="upgrade-modal upgrade-pickaxe-modal">
        <h1>⛏Pickaxe lv.{this.props.pickaxeLv}</h1>
        <h3>Increases Ore Per Click by 1.5x</h3>
        <h4>Pick harder! Pick faster! Pick stronger!</h4>
        <p>Price: {this.props.pickaxeUpgradePrice} Refined Bronze</p>
      </div>
    )
  }
}

export default UpgradePickaxeModal
